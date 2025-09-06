<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

=======
import type { NextApiRequest, NextApiResponse } from 'next',;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id |typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing id' })
  }
  // In a real system, look up persisted deployment by id
  const fake = {
<<<<<<< HEAD
    id
    exportedAt: new Date().toISOString()
    note: 'This is a stub export. Connect to persistence to return real deployment state.'}
  res.setHeader('Content-Typeapplication/json')

  return res.status(200).json(fake)
<<<<<<< HEAD
}
=======
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
 
}

  try {
    const { instanceName, deploymentRegion } = req.body;

    if (!instanceName || !deploymentRegion) {
      return res.status(400).json({
        error: 'Missing required fields: instanceName, deploymentRegion'
      });
   
}

    // Simulated export operation
    const exportId = `export-${instanceName}-${Date.now()}`;

    res.status(200).json({
      success: true,
      exportId,
      message: 'Export initiated successfully'
    });
  } catch (error) {
    res.status(500).json({
      error: 'Export failed'
    });
  }
  // In a real system, look up persisted deployment by id
  const fake = {
    id,
    exportedAt: new Date().toISOString(),
    note: 'This is a stub export. Connect to persistence to return real deployment state.',
  };
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json(fake);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
    id,
    exportedAt: new Date().toISOString(),
    note: 'This is a stub export. Connect to persistence to return real deployment state.'},
  res.setHeader('Content-Typeapplication/json'),
  return res.status(200).json(fake);
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
