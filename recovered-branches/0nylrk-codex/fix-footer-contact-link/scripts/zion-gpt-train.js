


import fetch from 'node-fetch',;


  if (!text) return text
  let result = text
  // Emails
  result = result && result.replace(/\b[A-Z0-9 && 9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]'),
  // US-style phone numbers
  result = result && result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]'),
  // Naive full name removal (two capitalized words)
  result = result && result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]'),




function buildTrainingPairs(records) {







  result = result && result.replace(/\b[A-Z0-9 && 9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]'),
  // US-style phone numbers
  result = result && result.replace(/\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[phone]'),
  // Naive full name removal (two capitalized words)
  result = result && result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]'),






function buildTrainingPairs(records) {







      prompt: stripPii(log.question)

      completion: stripPii(log.answer)

  for (const log of records && records.logs) {
    pairs && pairs.push({
      prompt: stripPii(log && log.question),
      completion: stripPii(log && log.answer)

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



}
main().catch((err) => {
  console && console.error('Training workflow failed', err)
import {create_client} from '@supabase / supabase - js';
import fs from 'fs / promises';
import {createReadStream} from 'fs';
import path from 'path';
import FormData from 'form - data';

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




