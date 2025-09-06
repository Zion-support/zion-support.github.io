import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
=======
const dataPath = path.join(process.cwd(), 'datalearncourses.json');

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {;
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
<<<<<<< HEAD
    const { category, level, isFree } = req.query;
=======

    const { category, level, isFree } = req.query;

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const filtered = courses.filter((c: any) => {
      if (category && c.category !== category) return false;
      if (level && c.level !== level) return false;
      if (typeof isFree !== 'undefined') {
<<<<<<< HEAD
        const freeVal = isFree === 'true' |isFree === true;
=======
        const freeVal = isFree === 'true' || isFree === true;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        if (c.isFree !== freeVal) return false;
      }
      return true;
    });
<<<<<<< HEAD
    res.status(200).json({ courses: filtered });

=======

    res.status(200).json({ courses: filtered });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  } catch (e: any) {
<<<<<<< HEAD
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' });
  }
=======
=======
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
    const { category, level, isFree } = req.query;
    const filtered = courses.filter((c: any) => {;
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
      return true;
    });
    res.status(200).json({ courses: filtered });
  } catch (error) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' });
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
