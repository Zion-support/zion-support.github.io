<<<<<<< HEAD
import { createClient } from '@supabase/supabase-js',
import fs from 'fs/promises',
import { createReadStream } from 'fs',
import path from 'path',
import FormData from 'form-data',
import fetch from 'node-fetch',
const {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  OPENAI_API_KEY
} = process.env,

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {
  console.error('Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY'),
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY),

async function fetchData() {
  const jobPosts = await supabase.from('job_posts').select('title, description'),
  const resumes = await supabase.from('resumes').select('summary, skills'),
  const supportLogs = await supabase.from('support_logs').select('question, answer'),

  return {
    jobs: jobPosts.data || [],
    resumes: resumes.data || [],
    logs: supportLogs.data || []
  }
}

function stripPii(text) {
  if (!text) return text,
  let result = text,
=======
import fs from 'fs/promises';
import path from 'path';
import FormData from 'form-data';
import fetch from 'node-fetch';

const {_SUPABASE_URL, _SUPABASE_SERVICE_ROLE_KEY, _OPENAI_API_KEY} = process.env;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {_process.exit(1);}

const _supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function fetchData() {_const _jobPosts = await supabase.from('job_posts').select('title, _description');
  const _resumes = await supabase.from('resumes').select('summary, _skills');
  const _supportLogs = await supabase.from('support_logs').select('question, _answer');

  return {
    jobs: jobPosts.data || [], _resumes: resumes.data || [], _logs: supportLogs.data || []};
}

function stripPii(_text) {_if (!text) return text;
  let _result = text;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  // Emails
  result = result.replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]'),
  // US-style phone numbers
<<<<<<< HEAD
  result = result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]'),
=======
  result = result.replace(/\b\(?\d{_3}\)?[-.\s]?\d{_3}[-.\s]?\d{_4}\b/g, '[phone]');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  // Naive full name removal (two capitalized words)
  result = result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]'),
  return result
}

<<<<<<< HEAD
function buildTrainingPairs(records) {
  const pairs = [],
=======
function buildTrainingPairs(_records) {_const _pairs = [];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  for (const job of records.jobs) {
    pairs.push({
      prompt: `Create a job description titled &quot;${stripPii(job.title)}&quot;`,
      completion: stripPii(job.description)
    })
  }

  for (const resume of records.resumes) {_pairs.push({
      prompt: `Summarize the candidate with skills: ${stripPii(resume.skills)}`,
      completion: stripPii(resume.summary)
    })
  }

<<<<<<< HEAD
  for (const log of records.logs) {
    pairs.push({
      prompt: stripPii(log.question),
      completion: stripPii(log.answer)
    })
=======
  for (const log of records.logs) {_pairs.push({
      prompt: stripPii(log.question), _completion: stripPii(log.answer)});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  return pairs
}

<<<<<<< HEAD
async function saveJsonl(pairs, filePath) {
  const lines = pairs.map(p => JSON.stringify({ prompt: p.prompt, completion: p.completion })).join('\n'),
  await fs.writeFile(filePath, lines, 'utf8')
}

async function createFineTune(filePath) {
  const formData = new FormData(),
  formData.append('purposefine-tune'),
  formData.append('file', createReadStream(filePath), path.basename(filePath)),
=======
async function saveJsonl(_pairs, _filePath) {_const _lines = pairs.map(p => JSON.stringify({ prompt: p.prompt, _completion: p.completion})).join('\n');
  await fs.writeFile(filePath, lines, 'utf8');
}

async function createFineTune(_filePath) {_const _formData = new FormData();
  formData.append('purpose', _'fine-tune');
  formData.append('file', _createReadStream(filePath), _path.basename(filePath));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _uploadRes = await fetch('https://api.openai.com/v1/files', _{
    method: 'POST', _headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      ...formData.getHeaders()
    },
    body: formData
<<<<<<< HEAD
  }),
  const uploaded = await uploadRes.json(),
=======
  });
  const _uploaded = await uploadRes.json();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // NOTE: additional parameters may be required depending on OpenAI API changes
  const _jobRes = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {_method: 'POST', _headers: {
      'Content-Type': 'application/json', _Authorization: `Bearer ${OPENAI_API_KEY}`
    },
<<<<<<< HEAD
    body: JSON.stringify({
      training_file: uploaded.id,
      model: 'gpt-3.5-turbo'
    })
<<<<<<< HEAD
  }),
  const job = await jobRes.json(),
  // // // console.log('Fine-tune job created:', job.id)
=======
  });
  const job = await jobRes.json();
  // console.log('Fine-tune job created:', job.id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

async function main() {
  const records = await fetchData(),
  const pairs = buildTrainingPairs(records),
  await saveJsonl(pairs, 'training-data.jsonl'),
  await createFineTune('training-data.jsonl')
}

main().catch((err) => {
  console.error('Training workflow failed', err)
}),
=======
    body: JSON.stringify({_training_file: uploaded.id, _model: 'gpt-3.5-turbo'})
  });
  const _job = await jobRes.json();
  
}

async function main() {_const _records = await fetchData();
  const _pairs = buildTrainingPairs(records);
  await saveJsonl(pairs, _'training-data.jsonl');
  await createFineTune('training-data.jsonl');}

main().catch(_(err) => {});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
