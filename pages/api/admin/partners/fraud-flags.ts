<<<<<<< HEAD

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


    }
    const supabase = getServerSupabase()
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)


    }
    const flags: any[] = []
    counts.forEach((count, ip) => {
      if (count > 30 && ip !== 'unknown') {

<<<<<<< HEAD
  } catch (e: any) {
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
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

=======
  }
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
