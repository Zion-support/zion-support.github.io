import type { NextApiRequest, NextApiResponse } from 'next';
    return res.status(500).json({ error: e.message |'Failed to generate highlights' })
}

}
