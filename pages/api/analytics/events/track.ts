


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Invalid event name' });

  const nowIso = new Date().toISOString();

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

