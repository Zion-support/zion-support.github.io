


  } catch {
    return {}
  }
}

export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({,
    error: 'Method not allowed' });
  const { userId, amount, currency } = req.body as { userId?: string, amount?: number, currency?: string };
  if (!userId || typeof amount !== 'number') return res.status(400).json({,
    error: 'Missing userId or amount' });
  const THRESHOLD = Number(process.env.ZION_CASHOUT_KYC_THRESHOLD || '1000');
  const db = load();
  const profile = db[userId];
  if (amount 