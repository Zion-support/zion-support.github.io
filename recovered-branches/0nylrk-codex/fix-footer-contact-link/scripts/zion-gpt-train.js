
<<<<<<< HEAD
<<<<<<< HEAD
import {createClient} from '@supabase/supabase-js';


import { createClient  } from '@supabase/supabase-js';
import {createClient} from '@supabase/supabase-js';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {createClient} from '@supabase/supabase-js';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import fs from 'fs/promises';
import { createReadStream  } from 'fs';
import path from 'path',
import FormData from 'form-data',
import fetch from 'node-fetch',
const {
  SUPABASE_URL
  SUPABASE_SERVICE_ROLE_KEY
  OPENAI_API_KEY

<<<<<<< HEAD
<<<<<<< HEAD
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

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
async function fetchData() {

<<<<<<< HEAD
<<<<<<< HEAD
} = process && process.env,
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {
  console && console.error('Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY'),
  process && process.exit(1)
}
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
async function fetchData() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
  const jobPosts = await supabase && supabase.from('job_posts').select('title, description'),
  const resumes = await supabase && supabase.from('resumes').select('summary, skills'),
  const supportLogs = await supabase && supabase.from('support_logs').select('question, answer'),
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return {
    jobs: jobPosts && jobPosts.data || [],
    resumes: resumes && resumes.data || [],
    logs: supportLogs && supportLogs.data || []
<<<<<<< HEAD
<<<<<<< HEAD
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




function buildTrainingPairs(records) {



}
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
async function fetchData() {
  const jobPosts = await supabase.from('job_posts').select('title, description')
  const resumes = await supabase.from('resumes').select('summary, skills')
  const supportLogs = await supabase.from('support_logs').select('question, answer')
  return {
    jobs: jobPosts.data |[]
    resumes: resumes.data |[]
    logs: supportLogs.data |[]
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }
}
function stripPii(text) {

  if (!text) return text
  let result = text
  // Emails
<<<<<<< HEAD
<<<<<<< HEAD
  result = result.replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]')

  // US-style phone numbers
  result = result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]')
  // Naive full name removal (two capitalized words)

  result = result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]')
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  result = result && result.replace(/\b[A-Z0-9 && 9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]'),
  // US-style phone numbers
  result = result && result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]'),
  // Naive full name removal (two capitalized words)
  result = result && result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]'),
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return result
}

<<<<<<< HEAD
<<<<<<< HEAD
function buildTrainingPairs(records) {

  const pairs = []
  for (const job of records.jobs) {
    pairs.push({
      prompt: `Create a job description titled "${stripPii(job.title)}"`
=======
function buildTrainingPairs(records) {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      completion: stripPii(job.description)
    })
  }
  for (const resume of records.resumes) {
    pairs.push({
<<<<<<< HEAD
=======




function buildTrainingPairs(records) {



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      prompt: `Summarize the candidate with skills: ${stripPii(resume.skills)}`

      completion: stripPii(resume.summary)
    })
  }
  for (const log of records.logs) {
    pairs.push({

      prompt: stripPii(log.question)

      completion: stripPii(log.answer)
<<<<<<< HEAD
<<<<<<< HEAD
  return result
}
function buildTrainingPairs(records) {
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  for (const job of records && records.jobs) {
    pairs && pairs.push({
      prompt: `Create a job description titled "${stripPii(job && job.title)}"`,
      completion: stripPii(job && job.description)
    })
  }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  for (const resume of records && records.resumes) {
    pairs && pairs.push({
      prompt: `Summarize the candidate with skills: ${stripPii(resume && resume.skills)}`,
      completion: stripPii(resume && resume.summary)
    })
  }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  for (const log of records && records.logs) {
    pairs && pairs.push({
      prompt: stripPii(log && log.question),
      completion: stripPii(log && log.answer)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    })
  }
  return pairs
}
async function saveJsonl(pairs, filePath) {
<<<<<<< HEAD
  try {
  const lines = pairs && pairs.map(p => JSON && JSON.stringify({ prompt: p && p.prompt, completion: p && p.completion })).join('\n'),
  await fs && fs.writeFile(filePath, lines, 'utf8')
}
async function createFineTune(filePath) {
=======

  try {
  const lines = pairs && pairs.map(p => JSON && JSON.stringify({ prompt: p && p.prompt, completion: p && p.completion })).join('\n'),
  await fs && fs.writeFile(filePath, lines, 'utf8')

}
async function createFineTune(filePath) {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
  const formData = new FormData(),
  formData && formData.append('purposefine-tune'),
  formData && formData.append('file', createReadStream(filePath), path && path.basename(filePath)),
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const uploadRes = await fetch('https://api && api.openai.com/v1/files', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      ...formData && formData.getHeaders()
    },
    body: formData
  }),
  const uploaded = await uploadRes && uploadRes.json(),
<<<<<<< HEAD
  // NOTE: additional parameters may be required depending on OpenAI API changes
  const jobRes = await fetch('https://api && api.openai.com/v1/fine_tuning/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      Authorization: `Bearer ${OPENAI_API_KEY}`
=======

  // NOTE: additional parameters may be required depending on OpenAI API changes
  const jobRes = await fetch('https://api && api.openai.com/v1/fine_tuning/jobs', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
      Authorization: `Bearer ${OPENAI_API_KEY}`

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    body: JSON && JSON.stringify({
      training_file: uploaded && uploaded.id,
      model: 'gpt-3 && 3.5-turbo'
    })

<<<<<<< HEAD
<<<<<<< HEAD
  const lines = pairs.map(p => JSON.stringify({ prompt: p.prompt, completion: p.completion })).join('\n')

  await fs.writeFile(filePath, lines, 'utf8')
}
async function createFineTune(filePath) {

  const formData = new FormData()
  formData.append('purposefine-tune')
  formData.append('file', createReadStream(filePath), path.basename(filePath))

  const uploadRes = await fetch('https://api.openai.com/v1/files', {
    method: 'POST'
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`
      ...formData.getHeaders()
    }
    body: formData

  })
  const uploaded = await uploadRes.json()

  // NOTE: additional parameters may be required depending on OpenAI API changes
  const jobRes = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {
    method: 'POST'
    headers: {
      'Content-Type': 'application/json'
      Authorization: `Bearer ${OPENAI_API_KEY}`
    }
    body: JSON.stringify({
      training_file: uploaded.id
      model: 'gpt-3.5-turbo'
    })

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  })
  const job = await jobRes.json()

  console.log('Fine-tune job created:', job.id)
  }),
  const job = await jobRes.json(),
<<<<<<< HEAD
  console.log('Fine-tune job created:', job.id)
  // // // console.log('Fine-tune job created:', job.id)
;
async function createFineTune(filePath) {;
  const formData = new FormData(),;
  formData.append('purposefine-tune'),;
  formData.append('file', createReadStream(filePath), path.basename(filePath)),;
  const uploadRes = await fetch('https://api.openai.com/v1/files', {;
    method: 'POST',;
    headers: {;
      Authorization: `Bearer ${OPENAI_API_KEY}`,;
      ...formData.getHeaders();
    },;
    body: formData;
  }),;
  const uploaded = await uploadRes.json(),;
  // NOTE: additional parameters may be required depending on OpenAI API changes;
  const jobRes = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {;
    method: 'POST',;
    headers: {;
      'Content-Type': 'application/json',;
      Authorization: `Bearer ${OPENAI_API_KEY}`;
    },;
    body: JSON.stringify({;
      training_file: uploaded.id,;
      model: 'gpt-3.5-turbo';
    });
  }),;
  const job = await jobRes.json(),;
  // // // console.log('Fine-tune job created:', job.id);
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }),
  const job = await jobRes && jobRes.json(),
  console && console.log('Fine-tune job created:', job && job.id)
  }),
  const job = await jobRes.json(),

}
async function main() {

}
async function main() {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
async function main() {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
  const records = await fetchData(),
  const pairs = buildTrainingPairs(records),
  await saveJsonl(pairs, 'training-data && data.jsonl'),
  await createFineTune('training-data && data.jsonl')
<<<<<<< HEAD
}
main().catch((err) => {
  console && console.error('Training workflow failed', err)
=======

}

  console && console.error('Training workflow failed', err)
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {create_client} from '@supabase / supabase - js';
import fs from 'fs / promises';
import {createReadStream} from 'fs';
import path from 'path';
import FormData from 'form - data';
import fetch from 'node - fetch';
const {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  OPENAI_API_KEY;
} = process.env,
// Check condition
if ( {) {
  $2
}
  console.error ('Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY'),
  process.exit (1);
}
const supabase = create_client (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY),
async /**
 * fetch_data - Function description
 */
function fetch_data() {
  const job_posts = await supabase.from ('job_posts').select ('title, description'),
  const resumes = await supabase.from ('resumes').select ('summary, skills'),
  const support_logs = await supabase.from ('support_logs').select ('question, answer'),
  return {
    jobs: job_posts.data || [],
    resumes: resumes.data || [],
    logs: support_logs.data || [];
  }
}
/**
 * strip_pii - Function description
 */
function strip_pii() {
  // Check condition
if (return text, ) {
  $2
}
  let result = text,
  // Emails;
  result = result.replace (/\b[A - Z0 - 9._%+-]+@[A - Z0 - 9.-]+\.[A - Z]{2}\b / gi, '[email]'),
  // US - style phone numbers;
  result = result.replace (/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b / g, '[phone]'),
  // Naive full name removal (two capitalized words);
  result = result.replace (/\b[A - Z][a - z]+\s+[A - Z][a - z]+\b / g, '[name]'),
  return result;
}
/**
 * buildTrainingPairs - Function description
 */
function buildTrainingPairs() {
  const pairs = [],
  for (const job of records.jobs) {
    pairs.push ({
      prompt: `Create a job description titled "${strip_pii (job.title)}"`,
      completion: strip_pii (job.description);
    });
  }
  for (const resume of records.resumes) {
    pairs.push ({
      prompt: `Summarize the candidate with skills: ${strip_pii (resume.skills)}`,
      completion: strip_pii (resume.summary);
    });
  }
  for (const log of records.logs) {
    pairs.push ({
      prompt: strip_pii (log.question),
      completion: strip_pii (log.answer);
    });
  }
  return pairs;
}
async /**
 * save_jsonl - Function description
 */
function save_jsonl() {
  const lines = pairs.map (p => JSON.stringify ({ prompt: p.prompt, completion: p.completion })).join ('\n'),
  await fs.write_file (file_path, lines, 'utf8');
}
async /**
 * createFineTune - Function description
 */
function createFineTune() {
  const form_data = new FormData (),
  form_data.append ('purposefine - tune'),
  form_data.append ('file', createReadStream (file_path), path.basename (file_path)),
  const upload_res = await fetch ('https://api.openai.com / v1 / files', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      ...form_data.get_headers ();
    },
    body: form_data;
  }),
  const uploaded = await upload_res.json (),
  // NOTE: additional parameters may be required depending on OpenAI API changes;
  const job_res = await fetch ('https://api.openai.com / v1 / fine_tuning / jobs', {
    method: 'POST',
    headers: {
      'Content - Type': 'application / json',
      Authorization: `Bearer ${OPENAI_API_KEY}`;
    },
    body: JSON.stringify ({
      training_file: uploaded.id,
      model: 'gpt - 3.5 - turbo';
    });
  }),
  const job = await job_res.json (),
  console.log ('Fine - tune job created:', job.id);
}
async /**
 * main - Function description
 */
function main() {
  const records = await fetch_data (),
  const pairs = buildTrainingPairs (records),
  await save_jsonl (pairs, 'training - data.jsonl'),
  await createFineTune ('training - data.jsonl');
}
main ().catch ((err) => {
  console.error ('Training workflow failed', err);

<<<<<<< HEAD

<<<<<<< HEAD
}
async function main() {

  const records = await fetchData()
  const pairs = buildTrainingPairs(records)
  await saveJsonl(pairs, 'training-data.jsonl')

  await createFineTune('training-data.jsonl')
}
main().catch((err) => {
  console.error('Training workflow failed', err)

});

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

main().catch((err) => {
  console.error('Training workflow failed', err)
}),
;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

main().catch((err) => {
  console.error('Training workflow failed', err)
}),
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
main().catch((err) => {;
  console.error('Training workflow failed', err);
});

<<<<<<< HEAD
<<<<<<< HEAD
}),
import { createClient } from '@supabase/supabase-js',;
import fs from 'fs/promises',;
import { createReadStream } from 'fs',;
import path from 'path',;
import FormData from 'form-data',;
import fetch from 'node-fetch',;
;
const {;
  SUPABASE_URL,;
  SUPABASE_SERVICE_ROLE_KEY,;
  OPENAI_API_KEY;
} = process.env,;
;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {;
  console.error('Missing env vars:SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY'),;
  process.exit(1),;
}
;
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY),;
;
async function fetchData() {;
  const jobPosts = await supabase.from('job_posts').select('title, description'),;
  const resumes = await supabase.from('resumes').select('summary, skills'),;
  const supportLogs = await supabase.from('support_logs').select('question, answer'),;
;
  return {;
    jobs:jobPosts.data || [],;
    resumes:resumes.data || [],;
    logs:supportLogs.data || [];
  },;
}
;
function stripPii(text) {;
  if (!text) return text,;
  let result = text,;
  // Emails;
  result = result.replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]'),;
  // US-style phone numbers;
  result = result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]'),;
  // Naive full name removal (two capitalized words);
  result = result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]'),;
  return result,;
}
;
function buildTrainingPairs(records) {;
  const pairs = [],;
;
  for (const job of records.jobs) {;
    pairs.push({;
      prompt:`Create a job description titled "${stripPii(job.title)}"`,;
      completion:stripPii(job.description);
    }),;
  }
;
  for (const resume of records.resumes) {;
    pairs.push({;
      prompt:`Summarize the candidate with skills:${stripPii(resume.skills)}`,;
      completion:stripPii(resume.summary);
    }),;
  }
;
  for (const log of records.logs) {;
    pairs.push({;
      prompt:stripPii(log.question),;
      completion:stripPii(log.answer);
    }),;
  }
;
  return pairs,;
}
;
async function saveJsonl(pairs, filePath) {;
  const lines = pairs.map(p => JSON.stringify({ prompt:p.prompt, completion:p.completion })).join('\n'),;
  await fs.writeFile(filePath, lines, 'utf8'),;
}
;
async function createFineTune(filePath) {;
  const formData = new FormData(),;
  formData.append('purposefine-tune'),;
  formData.append('file', createReadStream(filePath), path.basename(filePath)),;
;
  const uploadRes = await fetch('https://api.openai.com/v1/files', {;
    method:'POST',;
    headers:{;
      Authorization:`Bearer ${OPENAI_API_KEY}`,;
      ...formData.getHeaders();
    },;
    body:formData;
  }),;
  const uploaded = await uploadRes.json(),;
;
  // NOTE:additional parameters may be required depending on OpenAI API changes;
  const jobRes = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {;
    method:'POST',;
    headers:{;
      'Content-Type':'application/json',;
      Authorization:`Bearer ${OPENAI_API_KEY}`;
    },;
    body:JSON.stringify({;
      training_file:uploaded.id,;
      model:'gpt-3.5-turbo';
    });
  }),;
  const job = await jobRes.json(),;
  // // // console.log('Fine-tune job created:', job.id),;
}
;
async function main() {;
  const records = await fetchData(),;
  const pairs = buildTrainingPairs(records),;
  await saveJsonl(pairs, 'training-data.jsonl'),;
  await createFineTune('training-data.jsonl'),;
}
;
main().catch((err) => {;
  console.error('Training workflow failed', err),;
}),; //Emails result = result.replace (/\b[A-Z0-9. %+-]+@[A-Z0-9.-]+\.[A-Z] {
  2 
}\b/gi, '[email]');
//US-style phone numbers //Naive full name removal (two capitalized words) result = result.replace (/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]');
return result;
}for (const job of records.jobs) {
  pairs.push ({
  prompt: `Create a job description titled "$ {
  stripPii (job.title) 
}" `;
completion: stripPii (job.description) 
}) 
}for (const resume of records.resumes) {
  pairs.push ({
  prompt: `Summarize the candidate with skills: $ {
  stripPii (resume.skills) 
}`;
completion: stripPii (resume.summary) 
}) 
}
}return pairs;
}const uploadRes = await fetch ('https://api.openai.com/v1/files', {
  method: 'POST', headers: {
  Authorization: `Bearer $ {
  OPENAI API KEY 
}`;
...formData.getHeaders () 
};
body: formData //NOTE: additional parameters may be required depending on OpenAI API changes const jobRes = await fetch ('https://api.openai.com/v1/fine tuning/jobs', {
  method: 'POST', headers: {
  'Content-Type': 'application/json', Authorization: `Bearer $ {
  OPENAI API KEY 
}` 
};
}async function main () {
  const records = await fetchData ();
const pairs = buildTrainingPairs (records);
await saveJsonl (pairs, 'training-data.jsonl');
await createFineTune ('training-data.jsonl') 
}main () .catch ( (err) => {
  console.error ('Training workflow failed', err) 
});
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
