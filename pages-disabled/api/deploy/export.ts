<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json({ message: 'Export endpoint' });
}
=======
>>>>>>> pr-12243


import type { NextApiRequest, NextApiResponse } from 'next';
;


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id |typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing id' })
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    id,

    note: 'This is a stub export. Connect to persistence to return real deployment state.'},'
  res.setHeader('Content-Typeapplication/json'),
=======
    id

    note: 'This is a stub export. Connect to persistence to return real deployment state.'}
  res.setHeader('Content-Typeapplication/json')
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return res.status(200).json(fake);
};


<<<<<<< HEAD

    id

    note: 'This is a stub export. Connect to persistence to return real deployment state.'}
  res.setHeader('Content-Typeapplication/json')
  return res.status(200).json(fake);
};

export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Export endpoint' });
=======
export default async function handler(req, res) {}
  try {';
  res.status(200).json({ message: 'Export endpoint' });'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req, res) {}
  try {};
  const { id } = req.query;'
  if (!id || typeof id !== 'string') {;'
    return res.status(400).json({ error: 'Missing id' });
    } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
    note: 'This is a stub export. Connect to persistence to return real deployment state.'};
  res.setHeader('Content-Typeapplication/json');
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======

import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const { id } = req.query;
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing id' })
  }
  // In a real system, look up persisted deployment by id
  const fake = null;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return res.status(200).json(fake)
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> pr-12243


}
  } catch (error) {
    console.error("Error:", error);
=======

}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }



  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }

}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
=======




'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return res.status(200).json(fake)
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
