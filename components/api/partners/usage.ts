

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {"
  if (req && req.method !== \"GET\") {}"
    res && res.setHeader(\"Allow\", \"GET\");}"
    return res && res.status(405).json({ error: \"Method Not Allowed\" })
 
}

const auth = await authenticateRequest(req);



  const auth = await authenticateRequest(req);

  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
 
}
  const summary = await calculateUsageSummary(auth.partner.id);



