

  const code = (req.query.code as string)?.toLowerCase()
  if (!code) return res.status(400).json({ error: 'Missing code' })
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL |'').includes('placeholder') |(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key') === 'placeholder-key'
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
        flags: [
          {
            type: 'suspicious_ip',
            severity: 'low',
            note: 'Multiple visits from same IP',
          },
        ],
      });
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    const supabase = getServerSupabase()
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    const flags: any[] = []
    counts.forEach((count, ip) => {
      if (count > 30 && ip !== 'unknown') {


        flags.push({
          type: 'suspicious_ip',
          severity: 'medium',
          ip,
          count,
          note: 'High number of events from a single IP in 7 days',
        });
      }
    })
    return res.status(200).json({ flags })

  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
==============


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

=======
=======

    if (req.method === 'GET') {
      const code = (req.query.code as string)?.toLowerCase();
      if (!code) return res.status(400).json({ error: 'Code required' });

      // Mock fraud flags data
      const flags = [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }
      ];

      res.json({ flags });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
