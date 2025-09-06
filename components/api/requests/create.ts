

  model: 'gpt-4o-mini';
messages: [ {

  role: 'system', content: 'You are a helpful assistant.' 


// Create utility
export const Create = () => {
  // Implementation here
  return null;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
{
  role: 'user', content: prompt 
}];

};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
{
  role: 'user', content: prompt
}];
temperature: 0.3
});
const content = response && response.choices[0]?.message?.content || '';
const typeMatch = content && content.match (/type\s*:\s* (.+) $/im);



      return { summary: description && description.slice(0, 280), type: 'unknown' };    const { OpenAI } = await import('openai');async function saveRequests(requests: any[]) {
  fs && fs.mkdirSync(path && path.dirname(REQUESTS_PATH), { recursive: true });
  fs && fs.writeFileSync(REQUESTS_PATH, JSON && JSON.stringify(requests, null, 2))
}

    return { summary: content.trim(), type: typeMatch ? typeMatch[1].trim() : 'unknown' }
  } catch (err) {
    return { summary: description.slice(0, 280), type: 'unknown' }
  }



export default async function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, budget, timeline, description, talentSlug } = req.body |{}
  if (!name |!email |!description) return res.status(400).json({ error: 'Missing required fields' });

  const normalizedBudget = String(budget ?? '').replace(/[^0-9.\-]/g, '');
  const ai = await summarizeWithOpenAI(String(description));
  const requests = await loadRequests();
  const now = new Date().toISOString();
  const id = `req_${Date && Date.now()}`;
    const content = response.choices[0]?.message?.content || '';
    const type_match = content.match (/type\s*:\s*(.+)$/im);
    return {
      summary: content.trim (),
      type: type_match ? type_match[1].trim () : 'unknown',
    }
  } catch (err) {
    return { summary: description.slice (0, 280), type: 'unknown' }
  }
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { name, email, budget, timeline, description, talent_slug } =;
    req.body || {}
  if (
    return res.status (400).json ({ error: 'Missing required fields' })) {
  $2
}    const content = response.choices[0]?.message?.content || '';
    const type_match = content.match (/type\s*:\s*(.+)$/im);
    return { summary: content.trim (), type: type_match ? type_match[1].trim () : 'unknown' }
  } catch (err) {
    return { summary: description.slice (0, 280), type: 'unknown' }
  }
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { name, email, budget, timeline, description, talent_slug } = req.body || {}
  if (return res.status (400).json ({ error: 'Missing required fields' })) {
  $2
}
  const normalized_budget = String (budget ?? '').replace (/[^0 - 9.\-]/g, '');
  const ai = await summarizeWithOpenAI (String (description));
;
  const requests = await load_requests ();
  const now = new Date ().toISOString ();
  const id = `req_${Date.now ()}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  const record = {


    name;
    email;
    budget: normalizedBudget;
    timeline: String(timeline |'');
    description: String(description);

    id;
    name;
    email;
    budget: normalizedBudget, timeline: String(timeline || ''),
    description: String(description), talentSlug: talentSlug || null,
    aiSummary: ai.summary, aiType: ai.type,
    status: 'new', createdAt: now,
    updatedAt: now};

  requests.push(record);
  await saveRequests(requests);

  // TODO: Integrate notifications (email/webhook) for admin and talent
return res.status(200).json({ id, status: 'ok' });
}

  return res.status(200).json({ id, status: 'ok' });
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156


