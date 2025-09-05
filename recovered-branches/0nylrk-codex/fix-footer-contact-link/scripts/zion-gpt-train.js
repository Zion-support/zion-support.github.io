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
  // Emails
  result = result.replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}\b/gi, '[email]');
  // US-style phone numbers
  result = result.replace(/\b\(?\d{_3}\)?[-.\s]?\d{_3}[-.\s]?\d{_4}\b/g, '[phone]');
  // Naive full name removal (two capitalized words)
  result = result.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, '[name]');
  return result;
}

function buildTrainingPairs(_records) {_const _pairs = [];

  for (const job of records.jobs) {
    pairs.push({
      prompt: `Create a job description titled "${stripPii(job.title)}"`,
      completion: stripPii(job.description)
    });
  }

  for (const resume of records.resumes) {_pairs.push({
      prompt: `Summarize the candidate with skills: ${stripPii(resume.skills)}`,
      completion: stripPii(resume.summary)
    });
  }

  for (const log of records.logs) {_pairs.push({
      prompt: stripPii(log.question), _completion: stripPii(log.answer)});
  }

  return pairs;
}

async function saveJsonl(_pairs, _filePath) {_const _lines = pairs.map(p => JSON.stringify({ prompt: p.prompt, _completion: p.completion})).join('\n');
  await fs.writeFile(filePath, lines, 'utf8');
}

async function createFineTune(_filePath) {_const _formData = new FormData();
  formData.append('purpose', _'fine-tune');
  formData.append('file', _createReadStream(filePath), _path.basename(filePath));

  const _uploadRes = await fetch('https://api.openai.com/v1/files', _{
    method: 'POST', _headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      ...formData.getHeaders()
    },
    body: formData
  });
  const _uploaded = await uploadRes.json();

  // NOTE: additional parameters may be required depending on OpenAI API changes
  const _jobRes = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {_method: 'POST', _headers: {
      'Content-Type': 'application/json', _Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({_training_file: uploaded.id, _model: 'gpt-3.5-turbo'})
  });
  const _job = await jobRes.json();
  
}

async function main() {_const _records = await fetchData();
  const _pairs = buildTrainingPairs(records);
  await saveJsonl(pairs, _'training-data.jsonl');
  await createFineTune('training-data.jsonl');}

main().catch(_(err) => {});
