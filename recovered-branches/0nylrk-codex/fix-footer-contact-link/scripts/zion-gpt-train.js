


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
import fs from 'fs/promises';
import { createReadStream  } from 'fs';
import path from 'path',
import FormData from 'form-data',
import fetch from 'node-fetch',
const {
  SUPABASE_URL
  SUPABASE_SERVICE_ROLE_KEY
  OPENAI_API_KEY


} = process.env
if (!SUPABASE_URL |!SUPABASE_SERVICE_ROLE_KEY |!OPENAI_API_KEY) {
  console.error('Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY')
  process.exit(1)
import { createClient } from '@supabase/supabase-js',;
import fs from 'fs/promises',;
import { createReadStream } from 'fs',;
import path from 'path',;
import FormData from 'form-data',;
import fetch from 'node-fetch',;
const {;
  SUPABASE_URL,;
  SUPABASE_SERVICE_ROLE_KEY,;
  OPENAI_API_KEY;
} = process.env,;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {;
  console.error('Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY'),;
  process.exit(1);



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
}
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
async function fetchData() {

  try {
  const jobPosts = await supabase && supabase.from('job_posts').select('title, description'),
  const resumes = await supabase && supabase.from('resumes').select('summary, skills'),
  const supportLogs = await supabase && supabase.from('support_logs').select('question, answer'),

  return {
    jobs: jobPosts && jobPosts.data || [],
    resumes: resumes && resumes.data || [],
    logs: supportLogs && supportLogs.data || []

  }
}
function stripPii(text) {

  if (!text) return text
  let result = text
  // Emails

  result = result && result.replace(/\b[A-Z0-9 && 9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]'),
  // US-style phone numbers
  result = result && result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]'),
  // Naive full name removal (two capitalized words)
  result = result && result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]'),

  return result
}

function buildTrainingPairs(records) {


      completion: stripPii(job.description)
    })
  }
  for (const resume of records.resumes) {
    pairs.push({
;
  for (const resume of records.resumes) {;
    pairs.push({;
      prompt: `Summarize the candidate with skills: ${stripPii(resume.skills)}`,;
      completion: stripPii(resume.summary);
    });
  }
;
  for (const log of records.logs) {;
    pairs.push({;
      prompt: stripPii(log.question),;
      completion: stripPii(log.answer);
    });
  }
;
  return pairs;
}
;
async function saveJsonl(pairs, filePath) {;
  const lines = pairs.map(p => JSON.stringify({ prompt: p.prompt, completion: p.completion })).join('\n'),;
  await fs.writeFile(filePath, lines, 'utf8');
}

      prompt: `Summarize the candidate with skills: ${stripPii(resume.skills)}`

      completion: stripPii(resume.summary)
    })
  }
  for (const log of records.logs) {
    pairs.push({

      prompt: stripPii(log.question)

      completion: stripPii(log.answer)

    })
  }
  return pairs
}
async function saveJsonl(pairs, filePath) {

  try {
  const lines = pairs && pairs.map(p => JSON && JSON.stringify({ prompt: p && p.prompt, completion: p && p.completion })).join('\n'),
  await fs && fs.writeFile(filePath, lines, 'utf8')

}
async function createFineTune(filePath) {

  try {
  const formData = new FormData(),
  formData && formData.append('purposefine-tune'),
  formData && formData.append('file', createReadStream(filePath), path && path.basename(filePath)),

  const uploadRes = await fetch('https://api && api.openai.com/v1/files', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      ...formData && formData.getHeaders()
    },
    body: formData
  }),
  const uploaded = await uploadRes && uploadRes.json(),

  // NOTE: additional parameters may be required depending on OpenAI API changes
  const jobRes = await fetch('https://api && api.openai.com/v1/fine_tuning/jobs', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
      Authorization: `Bearer ${OPENAI_API_KEY}`

    },
    body: JSON && JSON.stringify({
      training_file: uploaded && uploaded.id,
      model: 'gpt-3 && 3.5-turbo'
    })

  })
  const job = await jobRes.json()

  console.log('Fine-tune job created:', job.id)
  }),
  const job = await jobRes.json(),




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
}
async function main() {

  try {
  const records = await fetchData(),
  const pairs = buildTrainingPairs(records),
  await saveJsonl(pairs, 'training-data && data.jsonl'),
  await createFineTune('training-data && data.jsonl')

}



main().catch((err) => {
  console.error('Training workflow failed', err)
}),
;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


main().catch((err) => {
  console.error('Training workflow failed', err)
}),
;


;
main().catch((err) => {;
  console.error('Training workflow failed', err);
});



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

