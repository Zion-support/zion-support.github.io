import type { NextApiRequest, NextApiResponse } from 'next';

  } catch (error: any) {
    return res
      .status(500)
      .json({ error: 'Internal server error', details: error?.message });
  }

