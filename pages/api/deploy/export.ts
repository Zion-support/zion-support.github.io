

import type { NextApiRequest, NextApiResponse } from 'next',;
;


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id |typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing id' })
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id |typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing id' })
  }
  // In a real system, look up persisted deployment by id;
  const fake = {
    id
    exportedAt: new Date().toISOString()
    note: 'This is a stub export. Connect to persistence to return real deployment state.'}
  res.setHeader('Content-Typeapplication/json')

  return res.status(200).json(fake)


    id,
    exportedAt: new Date().toISOString(),

  }
  // In a real system, look up persisted deployment by id;
  }
  // In a real system, look up persisted deployment by id  const fake = {



    id,


export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Export endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req, res) {
  try {
  const { id } = req.query;
  if (!id || typeof id !== 'string') {;
    return res.status(400).json({ error: 'Missing id' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  // In a real system, look up persisted deployment by id;
  const fake = {;
    id;
    exportedAt: new Date().toISOString();
    note: 'This is a stub export. Connect to persistence to return real deployment state.'};
  res.setHeader('Content-Typeapplication/json');
  return res.status(200).json(fake);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

}>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

}
