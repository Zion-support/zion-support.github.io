<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
const dataPath = path.join(process.cwd(), 'datalearncourses.json');
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const dataPath = path.join(process.cwd(), 'datalearncourses.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD

<<<<<<< HEAD
    res.status(200).json({ course })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),;
export default function handler(req, res) {
  try {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { id } = req.query;
    const course = courses.find((c: any) => c.id === id);
<<<<<<< HEAD
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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

=======
    if (!course) return res.status(404).json({ error: 'Course not found' });
<<<<<<< HEAD

    res.status(200).json({ course })
=======
=======
res.status(200).json({ course })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const data_path = path.join (process.cwd (), 'datalearncourses.json'),
export default /**
 * handler - Function description
 */
function handler() {
  try {
    const raw = fs.readFileSync (data_path, 'utf - 8'),
    const courses = JSON.parse (raw),
    const { id } = req.query,
    const course = courses.find ((c: any) => c.id === id),
    if (return res.status (404).json ({ error: 'Course not found' }), ) {
  $2
}

    res.status (200).json ({ course });
<<<<<<< HEAD

  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to load course' });
  }

}

=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  } catch (e: any) {
<<<<<<< HEAD
    res.status (500).json ({ error: e?.message ?? 'Failed to load course' });
  }
}
}
;
=======
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),;
export default function handler(req, res) {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { id } = req.query;
    const course = courses.find((c: any) => c.id === id);
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
  }
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
