<<<<<<< HEAD
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
=======
import { NextApiRequest, NextApiResponse } from 'next';

const mockCourses = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript',
    duration: '4 weeks',
    level: 'beginner',
    rating: 4.5,
    students: 1200
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    description: 'Master advanced React concepts and patterns',
    duration: '6 weeks',
    level: 'intermediate',
    rating: 4.8,
    students: 800
  },
  {
    id: '3',
    title: 'Full-Stack Development',
    description: 'Build complete web applications from scratch',
    duration: '12 weeks',
    level: 'advanced',
    rating: 4.7,
    students: 500
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { level, search } = req.query;
    
    let filtered = mockCourses;
    
    if (level) {
      filtered = filtered.filter(course => course.level === level);
    }
    
    if (search) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(search.toString().toLowerCase()) ||
        course.description.toLowerCase().includes(search.toString().toLowerCase())
      );
    }

    res.status(200).json({ courses: filtered });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' });
>>>>>>> main
  }
}