
<<<<<<< HEAD

=======
import { createClient  } from '@supabase/supabase-js';
import fs from 'fs/promises';
import { createReadStream } from 'fs';
import path from 'path';
import FormData from 'form-data';
import fetch from 'node-fetch';
const {
  SUPABASE_URL
  SUPABASE_SERVICE_ROLE_KEY
  OPENAI_API_KEY
} = process.env,

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {
  console.error($2);
  process.exit(1)
}

const supabase = createClient($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


import fetch from 'node-fetch',;
=======
} = process.env

import {createClient} from '@supabase/supabase-js';''
import fs from 'fs/promises';''
import { createReadStream  } from 'fs';''
import path from 'path',''
import FormData from 'form-data',''
import fetch from 'node-fetch','
const {
  // TODO: Implement
}
  SUPABASE_URL;
  SUPABASE_SERVICE_ROLE_KEY;
  OPENAI_API_KEY;
} = process.env;
pr-12325
if (!SUPABASE_URL |!SUPABASE_SERVICE_ROLE_KEY |!OPENAI_API_KEY) {
  console.error('Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY')
  process.exit(1)

const {;
  SUPABASE_URL,;
  SUPABASE_SERVICE_ROLE_KEY,;
  OPENAI_API_KEY;

pr-12325
} = process.env,;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {;'
  console.error('Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY'),;
if (!SUPABASE_URL |!SUPABASE_SERVICE_ROLE_KEY |!OPENAI_API_KEY) {'
  console.error('Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY')'
  process.exit(1)'
import { createClient } from '@supabase/supabase-js',;''
import fs from 'fs/promises',;''
import { createReadStream } from 'fs',;''
import path from 'path',;''
import FormData from 'form-data',;''
import fetch from 'node-fetch',;'
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
}
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
async function fetchData() {


<<<<<<< HEAD
=======
} = process && process.env,
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {
  console && console.error('Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY'),
  process && process.exit(1)
}
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
async function fetchData() {
>>>>>>> origin/cursor/delete-old-data-records-6bba

  try {
  const jobPosts = await supabase && supabase.from('job_posts').select('title, description'),
  const resumes = await supabase && supabase.from('resumes').select('summary, skills'),
  const supportLogs = await supabase && supabase.from('support_logs').select('question, answer'),

<<<<<<< HEAD

=======
}
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
async function fetchData() { return null; }
  return {}
    jobs: jobPosts.data |[]
    resumes: resumes.data |[]
  try {
  // TODO: Implement
}'
  const jobPosts = await supabase && supabase.from('job_posts').select('title, description'),''
  const resumes = await supabase && supabase.from('resumes').select('summary, skills'),''
  const supportLogs = await supabase && supabase.from('support_logs').select('question, answer'),'
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return {
  // TODO: Implement
}
    jobs: jobPosts && jobPosts.data || [],
    resumes: resumes && resumes.data || [],
    logs: supportLogs && supportLogs.data || []
<<<<<<< HEAD

  if (!text) return text
  let result = text
  // Emails
  result = result && result.replace(/\b[A-Z0-9 && 9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]'),
  // US-style phone numbers
  result = result && result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]'),
  // Naive full name removal (two capitalized words)
  result = result && result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]'),




function buildTrainingPairs(records) {




=======

  }
}
function stripPii(text) {


  if (!text) return text;
  let result = text;
  // Emails;'
  result = result && result.replace(/\b[A-Z0-9 && 9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]'),'
  // US-style phone numbers;'
  result = result && result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]'),'
  // Naive full name removal (two capitalized words)'
  result = result && result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]'),'

  return result;
}
}
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
async function fetchData() {'
  const jobPosts = await supabase.from('job_posts').select('title, description')''
  const resumes = await supabase.from('resumes').select('summary, skills')''
  const supportLogs = await supabase.from('support_logs').select('question, answer')'
  return {

  // TODO: Implement
}
    jobs: jobPosts.data |[],
  resumes: resumes.data |[]
    logs: supportLogs.data |[]

  }
}

      prompt: `Create a job description titled "${stripPii(job.title)}"`
    pairs.push({)'
      prompt: `Create a job description titled "${stripPii(job.title)}"`"

      completion: stripPii(job.description)


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }
}
function stripPii(text) {

  if (!text) return text
  let result = text
  // Emails
<<<<<<< HEAD


  result = result && result.replace(/\b[A-Z0-9 && 9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]'),
  // US-style phone numbers
  result = result && result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]'),
  // Naive full name removal (two capitalized words)
  result = result && result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]'),

=======
  result = result.replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]')

  // US-style phone numbers
  result = result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]')
  // Naive full name removal (two capitalized words)

  result = result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]')
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return result
}

<<<<<<< HEAD





function buildTrainingPairs(records) {




=======
function buildTrainingPairs(records) {

  const pairs = []
  for (const job of records.jobs) {
    pairs.push({
      prompt: `Create a job description titled "${stripPii(job.title)}"`

      completion: stripPii(job.description)
    })
  }
  for (const resume of records.resumes) {
    pairs.push({
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
;)
  for (const resume of records.resumes) {;
    pairs.push({;)`;
      prompt: `Summarize the candidate with skills: ${stripPii(resume.skills)}`,;
      completion: stripPii(resume.summary);
    });
    pairs.push({;)
      prompt: `Summarize the candidate with skills: ${stripPii(resume.skills)}`,;
      completion: stripPii(resume.summary);
    });
  }
;
  for (const log of records.logs) {;
    pairs.push({;)
      prompt: stripPii(log.question),;
      completion: stripPii(log.answer);
  return pairs;
async function saveJsonl(pairs, filePath) {;"
  const lines = pairs.map(p => JSON.stringify({ prompt: p.prompt, completion: p.completion })).join('\n'),;
  await fs.writeFile(filePath, lines, 'utf8');

`;
      prompt: `Summarize the candidate with skills: ${stripPii(resume.skills)}`

      completion: stripPii(resume.summary)
  for (const log of records.logs) {
    });
  }
;
  return pairs;
}
;
async function saveJsonl(pairs, filePath) {;"
  const lines = pairs.map(p => JSON.stringify({ prompt: p.prompt, completion: p.completion })).join('\n'),;''
  await fs.writeFile(filePath, lines, 'utf8');'
}

<<<<<<< HEAD


=======
`
`
>>>>>>> origin/cursor/delete-old-data-records-6bba

      prompt: `Summarize the candidate with skills: ${stripPii(resume.skills)}`

      completion: stripPii(resume.summary)
    })
  }

<<<<<<< HEAD

      prompt: stripPii(log.question)

      completion: stripPii(log.answer)

=======

  for (const job of records && records.jobs) {
    pairs && pairs.push({

>>>>>>> origin/cursor/delete-old-data-records-6bba
      prompt: `Summarize the candidate with skills: ${stripPii(resume && resume.skills)}`,
      completion: stripPii(resume && resume.summary)
    })
  }

<<<<<<< HEAD
  for (const log of records && records.logs) {
    pairs && pairs.push({
      prompt: stripPii(log && log.question),
      completion: stripPii(log && log.answer)

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    })
  }
  return pairs;
}

<<<<<<< HEAD
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


=======
async function saveJsonl(pairs, filePath) {}
  try {}
  const formData = new FormData(),'
  formData && formData.append('purposefine-tune'),'

  formData && formData.append('file', createReadStream(filePath), path && path.basename(filePath)),
'
  const uploadRes = await fetch('https://api && api.openai.com/v1/files', {'
    method: 'POST',
    headers: {}`
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      ...formData && formData.getHeaders()
    },
    body: formData;
  }),
  const uploaded = await uploadRes && uploadRes.json(),

    },
    body: JSON && JSON.stringify({}
      training_file: uploaded && uploaded.id,'
      model: 'gpt-3 && 3.5-turbo'
    })


  // // // console.log('Fine-tune job created:', job.id)
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
  // // // console.log('Fine-tune job created:', job.id);}
async function main() {

  try {

  const records = await fetchData(),
  const pairs = buildTrainingPairs(records),'
  await saveJsonl(pairs, 'training-data && data.jsonl'),'
  await createFineTune('training-data && data.jsonl')
<<<<<<< HEAD

}
main().catch((err) => {
  console && console.error('Training workflow failed', err)
import {create_client} from '@supabase / supabase - js';
import fs from 'fs / promises';
import {createReadStream} from 'fs';
import path from 'path';
import FormData from 'form - data';
=======


  console && console.error('Training workflow failed', err)
'
import {create_client} from '@supabase / supabase - js';'
import fs from 'fs / promises';'
import {createReadStream} from 'fs';'
import path from 'path';'
import FormData from 'form - data';'
>>>>>>> origin/cursor/delete-old-data-records-6bba

import fetch from 'node - fetch';
const {}
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  OPENAI_API_KEY;
} = process.env,
// Check condition;
if ( {) {}
  $2;
}'
  console.error ('Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY'),
  process.exit (1);
}
const supabase = create_client (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY),
async /**
 * fetch_data - Function description;
 */
function fetch_data() { return null; }
  return {}
    jobs: job_posts.data || [],
    resumes: resumes.data || [],
    logs: support_logs.data || [];
  }
}
/**
 * strip_pii - Function description;
 */
function strip_pii() {}
  // Check condition;
if (return text, ) {}
  $2;
}
  let result = text,
  // Emails;'
  result = result.replace (/\b[A - Z0 - 9._%+-]+@[A - Z0 - 9.-]+\.[A - Z]{2}\b / gi, '[email]'),
  // US - style phone numbers;'
  result = result.replace (/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b / g, '[phone]'),
  // Naive full name removal (two capitalized words);'
  result = result.replace (/\b[A - Z][a - z]+\s+[A - Z][a - z]+\b / g, '[name]'),
  return result;
}
/**
 * buildTrainingPairs - Function description;
 */
function buildTrainingPairs() {}
  const pairs = [],
  for (const job of records.jobs) {}
    pairs.push ({"`
      prompt: `Create a job description titled "${strip_pii (job.title)}"`,
      completion: strip_pii (job.description);
    });
  }
  for (const resume of records.resumes) {}
    pairs.push ({}`
      prompt: `Summarize the candidate with skills: ${strip_pii (resume.skills)}`,
      completion: strip_pii (resume.summary);
    });
  }
  for (const log of records.logs) {}
    pairs.push ({}
      prompt: strip_pii (log.question),
      completion: strip_pii (log.answer);
    });
  }
  return pairs;
}
async /**
 * save_jsonl - Function description;
 */
function save_jsonl() { return null; }
  const lines = pairs.map (p => JSON.stringify ({ prompt: p.prompt, completion: p.completion })).join ('\n'),'
  await fs.write_file (file_path, lines, 'utf8');
}
async /**
 * createFineTune - Function description;
 */
function createFineTune() {}
  const form_data = new FormData (),'
  form_data.append ('purposefine - tune'),'
  form_data.append ('file', createReadStream (file_path), path.basename (file_path)),'
  const upload_res = await fetch ('https://api.openai.com / v1 / files', {'
    method: 'POST',
    headers: {}`
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      ...form_data.get_headers ();
    },
    body: form_data;
  }),
  const uploaded = await upload_res.json (),
  // NOTE: additional parameters may be required depending on OpenAI API changes;'
  const job_res = await fetch ('https://api.openai.com / v1 / fine_tuning / jobs', {'
    method: 'POST',
    headers: {'
      'Content - Type': 'application / json',`
      Authorization: `Bearer ${OPENAI_API_KEY}`;
    },
    body: JSON.stringify ({}
      training_file: uploaded.id,'
      model: 'gpt - 3.5 - turbo';
    });
  }),
  const job = await job_res.json (),'
  console.log ('Fine - tune job created:', job.id);
}
async /**
 * main - Function description;
 */
function main() {}
  const records = await fetch_data (),
  const pairs = buildTrainingPairs (records),'
  await save_jsonl (pairs, 'training - data.jsonl'),'
  await createFineTune ('training - data.jsonl');
}
main ().catch ((err) => {'
  console.error ('Training workflow failed', err);

<<<<<<< HEAD
=======

}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  const records = await fetchData()
  const pairs = buildTrainingPairs(records)'
  await saveJsonl(pairs, 'training-data.jsonl')
'
  await createFineTune('training-data.jsonl')
}
main().catch((err) => {'
  console.error('Training workflow failed', err)
>>>>>>> origin/cursor/delete-old-data-records-6bba


main().catch((err) => {
  console.error('Training workflow failed', err)
}),
;

<<<<<<< HEAD

=======
main().catch((err) => {
  console.error('Training workflow failed', err)
}),
>>>>>>> origin/cursor/delete-old-data-records-6bba

;

main().catch((err) => {'
  console.error('Training workflow failed', err)
}),
;

;
main().catch((err) => {;'

  console.error('Training workflow failed', err);
});

<<<<<<< HEAD
=======

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

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {;
  }
  console.error('Missing env "vars": SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY'),;'
  process.exit(1);
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
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
}
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

});
>>>>>>> origin/cursor/delete-old-data-records-6bba
