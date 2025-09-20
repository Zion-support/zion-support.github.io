import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',

const dataPath = path.join(process.cwd(), 'datalearncourses.json'),
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  try {,
    res.status(200).json({ course })
  } catch (e: any) {,
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
  },
},
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(200).json({ message: 'API endpoint' }),
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),
export default function handler(req, res) {,
  try {,
    const raw = fs.readFileSync(dataPath, 'utf-8'),
    const courses = JSON.parse(raw),
    const { id } = req.query,
    const course = courses.find((c: any) => c.id === id),
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
,