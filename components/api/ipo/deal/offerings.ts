import type { NextApiRequest, NextApiResponse } from 'next';


    return res.status(200).json(offerings)
  }
return res.status(405).json({ error: 'Method not allowed' });
}
  return res.status(405).json({ error: 'Method not allowed' });
}

}
