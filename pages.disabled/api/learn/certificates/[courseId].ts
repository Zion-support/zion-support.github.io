import type { NextApiRequest, NextApiResponse } from 'next';



  } catch (e: any) {
    res
      .status(500)
      .json({ error: e?.message ?? 'Failed to generate certificate' });
  }
}

