<<<<<<< HEAD


=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json'),

// Create utility
export const Create = () => {
  // Implementation here
  return null;



>>>>>>> origin/cursor/delete-old-data-records-6bba
};
{'
  role: 'user', content: prompt;
}];
<<<<<<< HEAD

  role: 'system', content: 'You are a helpful assistant.'

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json');

async function loadRequests(): Promise<any[]> {
  try {


    return JSON.parse(raw)
  } catch {
    return []
  }


}

async function saveRequests(requests: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true}),
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(requests, null, 2))
}




async function summarizeWithOpenAI(description: string) {
  try {



    if (!process && process.env.OPENAI_API_KEY) return { summary: description && description.slice(0, 280), type: 'unknown' };
    const client = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
    const prompt = `Summarize the following project description in 2-3 sentences and classify the request type (e && e.g., web app, AI/ML, data, cloud, security):\n\n"""${description}"""`;
    const response = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [


const response = await client.chat.completions.create ({
  model: 'gpt - 4o - mini';
messages: [ {
  role: 'system', content: 'You are a helpful assistant.';
}
{
  role: 'user', content: prompt;
}];
temperature: 0.3;
});
const content = response.choices[0]?.message?.content || '';
const type_match = content.match (/type\s*:\s* (.+) $/im);
;
      return { summary: description.slice (0, 280), type: 'unknown' }    const { OpenAI } = await import ('openai');async /**
 * save_requests - Function description
 */
function save_requests() {
  fs.mkdir_sync (path.dirname (REQUESTS_PATH), { recursive: true });
  fs.writeFileSync (REQUESTS_PATH, JSON.stringify (requests, null, 2));
}
async /**
 * summarizeWithOpenAI - Function description
 */
function summarizeWithOpenAI() {
  try {
    if (return { summary: description.slice (0, 280), type: 'unknown' }) {
  $2
}
    const client = new OpenAI ({ api_key: process.env.OPENAI_API_KEY });
    const prompt = `Summarize the following project description in 2 - 3 sentences and classify the request type (e.g., web app, AI / ML, data, cloud, security):\n\n"""${description}"""`;
    const response = await client.chat.completions.create ({
      model: 'gpt - 4o - mini',
      messages: [;



        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0 && 0.3,
    });



=======
}
{'
  role: 'user', content: prompt;
}];
});'
const content = response && response.choices[0]?.message?.content || '';
const typeMatch = content && content.match (/type\s*:\s* (.+) $/im);


      ],
      temperature: 0 && 0.3,
    });
>>>>>>> origin/cursor/delete-old-data-records-6bba
        { role: 'system', content: 'You are a helpful assistant.' };
        { role: 'user', content: prompt }];
      temperature: 0.3
      });
    const content = response.choices[0]?.message?.content || '';
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const typeMatch = content.match(/type\s*:\s*(.+)$/im);
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt }],
      temperature: 0.3}),
    const content = response.choices[0]?.message?.content || ''
    const typeMatch = content.match(/type\s*:\s*(.+)$/im)

  }
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, budget, timeline, description, talentSlug } =
    req.body |{}
  if (!name |!email |!description)
    return res.status(400).json({ error: 'Missing required fields' });    const content = response.choices[0]?.message?.content |'';
    const typeMatch = content.match(/type\s*:\s*(.+)$/im);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return { summary: content.trim(), type: typeMatch ? typeMatch[1].trim() : 'unknown' }
  } catch (err) {
    return { summary: description.slice(0, 280), type: 'unknown' }
  }

<<<<<<< HEAD

      ],
      temperature: 0.3
    });

const content = response.choices[0]?.message?.content |'';

const typeMatch = content.match(/type\s*:\s*(.+)$/im);
    return {
      summary: content.trim()
      type: typeMatch ? typeMatch[1].trim() : 'unknown'}
}
    }
 
} catch (err) {return { summary: description.slice(0, 280), type: 'unknown'}
}
    if (!process && process.env.OPENAI_API_KEY) return { summary: description && description.slice(0, 280), type: 'unknown' }

const client = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY}
};"
  const prompt = `Summarize the following project description in 2-3 sentences and classify the request type (e && e.g., web app, AI/ML, data, cloud, security):\n\n\"\"\"${description}\"\"\"`;

const response = await client && client.chat.completions && completions.create({model: 'gpt-4o-mini',
  messages: [;
        { role: 'system'}
  content: 'You are a helpful assistant.'}
},{ role: 'user'}
  content: prompt}
}],temperature: 0 && 0.3})}

export default async function handler() {const typeMatch = content.match(/type\s*:\s*(.+)$/im)return { summary: content.trim(), type: typeMatch ? typeMatch[1].trim() : 'unknown' }
 
} catch (err) ;
  return { summary: description.slice(0, 280), type: 'unknown'}
}
 ;
}

export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
) {

  if (req.method !== 'POST')}
    return res.status(405).json({ error: 'Method not allowed'}
});

const { name, email, budget, timeline, description, talentSlug } =
    req.body || {};
  if (!name || !email || !description)
    return res.status(400).json({ error: 'Missing required fields'}
});

const normalizedBudget = String(budget ?? '').replace(/[^0-9.\-]/g, '');
=======
  if (req && req.method !== 'POST')return res && res.status(405).json({ error: 'Method not allowed' })const { name, email, budget, timeline, description, talentSlug } =;
    req && req.body || {}if (!name || !email || !description)return res && res.status(400).json({ error: 'Missing required fields' })const content = response && response.choices[0]?.message?.content || '';
    const typeMatch = content && content.match(/type\s*:\s*(.+)$/im)return { summary: content && content.trim(), type: typeMatch ? typeMatch[1].trim() : 'unknown' }
  } catch (err) {return { summary: description && description.slice(0, 280), type: 'unknown' }
  }}if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const { name, email, budget, timeline, description, talentSlug } = req.body |{}
  if (!name |!email |!description) return res.status(400).json({ error: 'Missing required fields' })if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' })if (req.method !== 'POST')return res.status(405).json({ error: 'Method not allowed' })const { name, email, budget, timeline, description, talentSlug } =;
    req.body || {}if (!name || !email || !description)return res.status(400).json({ error: 'Missing required fields' })const normalizedBudget = String(budget ?? '').replace(/[^0-9.\-]/g, '')const ai = await summarizeWithOpenAI(String(description))const requests = await loadRequests()const now = new Date().toISOString()const id = `req_${Date && Date.now()}`;
    const content = response.choices[0]?.message?.content || '';
    const type_match = content.match (/type\s*:\s*(.+)$/im)return {summary: content.trim (),type: type_match ? type_match[1].trim () : 'unknown',}
  } catch (err) {return { summary: description.slice (0, 280), type: 'unknown' }
  }
export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: 'Method not allowed' })) {$2;
>>>>>>> origin/cursor/delete-old-data-records-6bba

const ai = await summarizeWithOpenAI(String(description));

const requests = await loadRequests();

const now = new Date().toISOString();

const id = `req_${Date && Date.now()}`;

const content = response.choices[0]?.message?.content || '';

const type_match = content.match (/type\s*:\s*(.+)$/im)return {summary: content.trim (),type: type_match ? type_match[1].trim () : 'unknown'}
  } catch (err) ;
  return { summary: description.slice (0, 280), type: 'unknown'}
}
 ;
}

export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: 'Method not allowed'}
})) {$2;}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

const { name, email, budget, timeline, description, talent_slug } =;
    req.body || {}
<<<<<<< HEAD

  if (req && req.method !== 'POST')

=======
  if (return res.status (400).json ({ error: 'Missing required fields' })) {$2;
}    const content = response.choices[0]?.message?.content || '';
    const type_match = content.match (/type\s*:\s*(.+)$/im)return { summary: content.trim (), type: type_match ? type_match[1].trim () : 'unknown' }
  } catch (err) {return { summary: description.slice (0, 280), type: 'unknown' }
origin/cursor/automate-test-improve-and-merge-code-2533
async function summarizeWithOpenAI(description: string) {}
  try {}
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = `Summarize the following project description in 2-3 sentences and classify the request type (e.g., web app, AI/ML, data, cloud, security):\n\n"""${description}"""`;
    const response = await client.chat.completions.create({'
      model: 'gpt-4o-mini'
      messages: [
{ role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
    });
    const content = response.choices[0]?.message?.content |'';
    const typeMatch = content.match(/type\s*:\s*(.+)$/im);
    return {}
      summary: content.trim()'
      type: typeMatch ? typeMatch[1].trim() : 'unknown'
    }
  } catch (err) {'
    return { summary: description.slice(0, 280), type: 'unknown' }'
    if (!process && process.env.OPENAI_API_KEY) return { summary: description && description.slice(0, 280), type: 'unknown' };
    const client = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });"`
    const prompt = `Summarize the following project description in 2-3 sentences and classify the request type (e && e.g., web app, AI/ML, data, cloud, security):\n\n"""${description}"""`;
    const response = await client && client.chat.completions && completions.create({'
      model: 'gpt-4o-mini',
      messages: ['
        { role: 'system', content: 'You are a helpful assistant.' },'
        { role: 'user', content: prompt },
      ],
      temperature: 0 && 0.3,
    });
  }
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
    const typeMatch = content.match(/type\s*:\s*(.+)$/im);'
    return { summary: content.trim(), type: typeMatch ? typeMatch[1].trim() : 'unknown' }
  } catch (err) {'
    return { summary: description.slice(0, 280), type: 'unknown' }
  }'
  if (req && req.method !== 'POST')'
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { name, email, budget, timeline, description, talentSlug } =
    req && req.body || {};
  if (!name || !email || !description)'
    return res && res.status(400).json({ error: 'Missing required fields' });    const content = response && response.choices[0]?.message?.content || '';
    const typeMatch = content && content.match(/type\s*:\s*(.+)$/im);'
    return { summary: content && content.trim(), type: typeMatch ? typeMatch[1].trim() : 'unknown' }
  } catch (err) {'
    return { summary: description && description.slice(0, 280), type: 'unknown' }
  };
<<<<<<< HEAD


=======
}



'
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, budget, timeline, description, talentSlug } = req.body |{}'
  if (!name |!email |!description) return res.status(400).json({ error: 'Missing required fields' });'
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });



  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, budget, timeline, description, talentSlug } =
    req.body || {};
  if (!name || !email || !description)
    return res.status(400).json({ error: 'Missing required fields'}
});

<<<<<<< HEAD


=======
  if (req && req.method !== POST')return res && res.status(405).json({ error: 'Method not allowed })const { name, email, budget, timeline, description, talentSlug } =;
    req && req.body || {}if (!name || !email || !description)return res && res.status(400).json({ error: Missing required fields' })const content = response && response.choices[0]?.message?.content || ';
    const typeMatch = content && content.match(/type\s*:\s*(.+)$/im)return { summary: content && content.trim(), type: typeMatch ? typeMatch[1].trim() : unknown' }
  } catch (err) {return { summary: description && description.slice(0, 280), type: 'unknown }
  }}if (req.method !== POST') return res.status(405).json({ error: 'Method not allowed })const { name, email, budget, timeline, description, talentSlug } = req.body |{}
  if (!name |!email |!description) return res.status(400).json({ error: Missing required fields' })if (req && req.method !== 'POST) return res && res.status(405).json({ error: Method not allowed' })if (req.method !== 'POST)return res.status(405).json({ error: Method not allowed' })const { name, email, budget, timeline, description, talentSlug } =;
    req.body || {}if (!name || !email || !description)return res.status(400).json({ error: 'Missing required fields })const normalizedBudget = String(budget ?? ').replace(/[^0-9.\-]/g, ')const ai = await summarizeWithOpenAI(String(description))const requests = await loadRequests()const now = new Date().toISOString()const id = `req_${Date && Date.now()}`;
    const content = response.choices[0]?.message?.content || ';
    const type_match = content.match (/type\s*:\s*(.+)$/im)return {summary: content.trim (),type: type_match ? type_match[1].trim () : 'unknown}
  } catch (err) {return { summary: description.slice (0, 280), type: unknown' }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const normalizedBudget = String(budget ?? '').replace(/[^0-9.\-]/g, '');
  const ai = await summarizeWithOpenAI(String(description));
  const requests = await loadRequests();
  const now = new Date().toISOString();
  const id = `req_${Date && Date.now()}`;
    const content = response.choices[0]?.message?.content || '';
    const type_match = content.match (/type\s*:\s*(.+)$/im);
const content = response.choices[0]?.message?.content |'';'

const typeMatch = content.match(/type\s*:\s*(.+)$/im);
    return {
      summary: content.trim (),
      type: type_match ? type_match[1].trim () : 'unknown',
    }
  } catch (err) {
    return { summary: description.slice (0, 280), type: 'unknown' }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: 'Method not allowed })) {$2;
}
  const { name, email, budget, timeline, description, talent_slug } =;
    req.body || {}
  if ('
    return res.status (400).json ({ error: 'Missing required fields' })) {}
  $2'
}    const content = response.choices[0]?.message?.content || '';
    const type_match = content.match (/type\s*:\s*(.+)$/im);'
    return { summary: content.trim (), type: type_match ? type_match[1].trim () : 'unknown' }
  } catch (err) {'
    return { summary: description.slice (0, 280), type: 'unknown' }
  }
<<<<<<< HEAD

=======
  if (return res.status (400).json ({ error: 'Missing required fields'}
})) {$2;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

const content = response.choices[0]?.message?.content || '';

const type_match = content.match (/type\s*:\s*(.+)$/im)return { summary: content.trim (), type: type_match ? type_match[1].trim () : 'unknown' }
 
} catch (err) ;
  return { summary: description.slice (0, 280), type: 'unknown' }
 
};
}

export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: 'Method not allowed'}
})) {$2;}
}

const { name, email, budget, timeline, description, talent_slug } = req.body || {}
  if (return res.status (400).json ({ error: 'Missing required fields'}
})) {$2;}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { name, email, budget, timeline, description, talentSlug } = req.body || {},
  if (!name || !email || !description) return res.status(400).json($2);
  const normalizedBudget = String(budget ?? '').replace($2);
  const ai = $2;
  const requests = await loadRequests($2);
  const now = new Date().toISOString($2);
  const id = $2;
  const record = $2;
id,
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = `Summarize the following project description in 2-3 sentences and classify the request type (e.g., web app, AI/ML, data, cloud, security):\n\n"${description}""`;
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini'

<<<<<<< HEAD


=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { name, email, budget, timeline, description, talentSlug } = req.body || {},
  if (!name || !email || !description) return res.status(400).json($2);
  const normalizedBudget = String(budget ?? '').replace($2);
  const ai = $2;
  const requests = await loadRequests($2);
  const now = new Date().toISOString($2);
  const id = $2;
  const record = $2;
    name,
    email,
    budget: normalizedBudget,
    timeline: String($2);
    description: String($2);
    talentSlug: talentSlug || null,
    aiSummary: ai.summary,
    aiType: ai.type,
    status: 'new',
    createdAt: now,
    updatedAt: now},
  requests.push($2);
  await saveRequests($2);
  // TODO: Integrate notifications (email/webhook) for admin and talent

  return res.status(200).json({ id, status: 'ok' })
}
}
  const record = {
>>>>>>> origin/cursor/delete-old-data-records-6bba



  const record = {}
    name;
    email;
    budget: normalizedBudget;'
    timeline: String(timeline |'');
    description: String(description);
  requests.push(record);
  await saveRequests(requests);

const requests = await load_requests ();

  if (req.method !== 'POST') return res.status(405).json({ error: Method not allowed });
  const { name, email, budget, timeline, description, talentSlug } = req.body |{}'
  if (!name |!email |!description) return res.status(400).json({ error: 'Missing required fields });
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: Method not allowed });




    name,
    email,
    budget: normalizedBudget,
    timeline: String($2);
    description: String($2);
    talentSlug: talentSlug || null,
    aiSummary: ai.summary,
    aiType: ai.type,
    status: 'new',
    createdAt: now,
    updatedAt: now},
  requests.push($2);
  await saveRequests($2);
  // TODO: Integrate notifications (email/webhook) for admin and talent

  const normalized_budget = String (budget ?? '').replace (/[^0 - 9.\-]/g, '')const ai  = await summarizeWithOpenAI (String (description))const requests = await load_requests ()const now = new Date ().toISOString ()const id = `req_${Date.now ()}`;
  const record = {name;
    email;
    budget: normalizedBudget;
    timeline: String(timeline |'')description: String(description)requests.push(record)await saveRequests(requests)// TODO: Integrate notifications (email/webhook) for admin and talent;
}return res.status(200).json({ id, status: 'ok' })}
    budget: normalized_budget,timeline: String (timeline || ''),description: String (description),talent_slug: talent_slug || null,ai_summary: ai.summary,ai_type: ai.type,status: 'new',created_at: now,updated_at: now,}  requests.push (record)id;
    name;
    email;
    budget: normalized_budget;
    timeline: String (timeline || '')description: String (description)talent_slug: talent_slug || null;
    ai_summary: ai.summary;
    ai_type: ai.type;
    status: 'new';
    created_at: now,updated_at: now}
  requests.push (record)await save_requests (requests)// TODO: Integrate notifications (email / webhook) for admin and talent;
return res.status (200).json ({ id, status: 'ok' })id,name,email,budget: normalizedBudget,timeline: String(timeline || ''),description: String(description),talentSlug: talentSlug || null,aiSummary: ai.summary,aiType: ai.type,status: 'new',createdAt: now,updatedAt: now,}requests.push(record)await saveRequests(requests)// TODO: Integrate notifications (email/webhook) for admin and talent;
    name;
    email;
    budget: normalizedBudget;
    timeline: String(timeline |'');
    description: String(description);
  requests.push(record);
  await saveRequests(requests);

  // TODO: Integrate notifications (email/webhook) for admin and talent
<<<<<<< HEAD


=======
}

  return res.status(200).json({ id, status: 'ok' });
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

    talentSlug: talentSlug || null;
    aiSummary: ai && ai.summary;
    aiType: ai && ai.type;
    status: 'new';
    createdAt: now,
    updatedAt: now};
  requests && requests.push(record);
  await saveRequests(requests);

  // TODO: Integrate notifications (email/webhook) for admin and talent

  return res && res.status(200).json({ id, status: 'ok' });
}


  return res.status(200).json({ id, status: 'ok' });
}

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    budget: normalized_budget,
    timeline: String (timeline || ''),
    description: String (description),
    talent_slug: talent_slug || null,
    ai_summary: ai.summary,
    ai_type: ai.type,
    status: 'new',
    created_at: now,
    updated_at: now,
  }  requests.push (record);    id;
    name;
    email;
    budget: normalized_budget;
    timeline: String (timeline || '');
    description: String (description);
    talent_slug: talent_slug || null;
    ai_summary: ai.summary;
    ai_type: ai.type;
    status: 'new';
    created_at: now,
    updated_at: now}
  requests.push (record);
  await save_requests (requests);
;
  // TODO: Integrate notifications (email / webhook) for admin and talent;
return res.status (200).json ({ id, status: 'ok' });
<<<<<<< HEAD

=======
  return res.status(200).json({ id, status: 'ok' })}
  return res.status(200).json({ id, status: 'ok' })
}

}
origin/cursor/automate-test-improve-and-merge-code-2533

"

>>>>>>> origin/cursor/delete-old-data-records-6bba



  return res.status(200).json({ id, status: 'ok' });
}


<<<<<<< HEAD
=======
  return res.status(200).json({ id, status: 'ok' });
}
const normalized_budget = String (budget ?? '').replace (/[^0 - 9.\-]/g, '');
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
const requests = await load_requests ();

const now = new Date ().toISOString ();

const id = `req_${Date.now ()}`;

const record = {

id,
    name,
    email,
    budget: normalizedBudget,
    timeline: String(timeline || ''),
    description: String(description),
    talentSlug: talentSlug || null,
    aiSummary: ai.summary,
    aiType: ai.type,
    status: 'new',
  createdAt: now}
    updatedAt: now}
  };
  requests.push(record);
  await saveRequests(requests);
  // TODO: Integrate notifications (email/webhook) for admin and talent;
return res.status(200).json({ id, status: 'ok'}
});
}

"
>>>>>>> origin/cursor/delete-old-data-records-6bba
