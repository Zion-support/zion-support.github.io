
origin/cursor/automate-test-improve-and-merge-code-2533
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getConfig())
  }
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method === "POST") {
    const body = req.body || {},
    const current = tokenStore.getConfig(),
    const updated = { ...current, ...body },
    tokenStore.setConfig(updated),
=======
    const body = req.body || {}
    const current = tokenStore.getConfig()
    const updated = { ...current, ...body }
    tokenStore.setConfig(updated)
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
};

  
  if (req.method === 'POST') {
    const { updated } = req.body || {};
    if (updated) {
      tokenStore.setConfig(updated);
      return res.status(200).json({ success: true });
    }
  }
  
  return res.status(405).json({ error: "Method not allowed" });
}
origin/cursor/automate-test-improve-and-merge-code-2533
