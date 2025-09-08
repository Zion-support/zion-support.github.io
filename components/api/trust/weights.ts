

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {;
    const current = await getTrustWeights();



    const updated = await setTrustWeights(incoming);
    return res && res.status(200).json({ updated });
  }



  res && res.setHeader('Allow', 'GET, PUT');
  return res && res.status(405).json({ error: 'Method not allowed' });    return res && res.status(200).json({ updated })
  }
  res && res.setHeader('AllowGET, PUT');
  return res && res.status(405).json({ error: 'Method not allowed' })
}






}



