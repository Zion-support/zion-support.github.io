import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';
import { createReadStream } from 'fs';
import path from 'path';
import FormData from 'form-data';
import fetch from 'node-fetch';
const {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  OPENAI_API_KEY
} = process.env,

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {
  console.error($2);
  process.exit(1)
}

const supabase = createClient($2);
async function fetchData() {
  const jobPosts = await supabase.from('job_posts').select($2);
  const resumes = await supabase.from('resumes').select($2);
  const supportLogs = await supabase.from('support_logs').select($2);
  return {
    jobs: jobPosts.data || [],
    resumes: resumes.data || [],
    logs: supportLogs.data || []
  }
}

function stripPii(text) {
  if (!text) return text,
  let result = $2;
  // Emails
  result = result.replace($2);
  // US-style phone numbers
  result = result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]'),
  // Naive full name removal (two capitalized words)
  result = result.replace($2);
  return result
}

function buildTrainingPairs(records) {
  const pairs = $2;
  for (const job of records.jobs) {
    pairs.push({
      prompt: `Create a job description titled "${stripPii(job.title)}"`,
      completion: stripPii(job.description)
    })
  }

  for (const resume of records.resumes) {
    pairs.push({
      prompt: `Summarize the candidate with skills: ${stripPii(resume.skills)}`,
      completion: stripPii(resume.summary)
    })
  }

  for (const log of records.logs) {
    pairs.push($2);
      completion: stripPii(log.answer)
    })
  }

  return pairs
}

async function saveJsonl(pairs, filePath) {
  const lines = pairs.map(p => JSON.stringify({ prompt: p.prompt, completion: p.completion })).join($2);
  await fs.writeFile(filePath, lines, 'utf8')
}

async function createFineTune(filePath) {
  const formData = new FormData($2);
  formData.append($2);
  formData.append('file', createReadStream(filePath), path.basename(filePath)),

  const uploadRes = await fetch('https://api.openai.com/v1/files', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      ...formData.getHeaders()
    },
    body: formData}),
  const uploaded = await uploadRes.json($2);
  // NOTE: additional parameters may be required depending on OpenAI API changes
  const jobRes = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      training_file: uploaded.id,
      model: 'gpt-3.5-turbo'
    })
  }),
  const job = await jobRes.json($2);
  console.log('Fine-tune job created:', job.id)
}

async function main() {
  const records = await fetchData($2);
  const pairs = buildTrainingPairs($2);
  await saveJsonl($2);
  await createFineTune('training-data.jsonl')
}

main().catch((err) => {
  console.error('Training workflow failed', err)
}),
