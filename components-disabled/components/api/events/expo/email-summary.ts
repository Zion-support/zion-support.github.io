import type { NextApiRequest, NextApiResponse } from 'next';

    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued', provider });
  } catch (e: any) {
