import { NextApiRequest, NextApiResponse } from "next";

<<<<<<< HEAD
const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
const dataPath = path.join(process.cwd(), 'datalearncourses.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {;
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { category, level, isFree } = req.query;
=======
const mockCourses = [
  {
    id: "1"
    title: "Introduction to Web Development"
    description: "Learn the basics of HTML, CSS, and JavaScript"
    duration: "4 weeks"
    level: "beginner"
    rating: 4.5
    students: 1200
  }
  {
    id: "2"
    title: "Advanced React Patterns"
    description: "Master advanced React concepts and patterns"
    duration: "6 weeks"
    level: "intermediate"
    rating: 4.8
    students: 800
  }
  {
    id: "3"
    title: "Full-Stack Development"
    description: "Build complete web applications from scratch"
    duration: "12 weeks"
    level: "advanced"
    rating: 4.7
    students: 500
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { level, search } = req.query;

    let filtered = mockCourses;

    if (level) {
      filtered = filtered.filter((course) => course.level === level);
    }

    if (search) {
      filtered = filtered.filter(
        (course) =>
          course.title
            .toLowerCase()
            .includes(search.toString().toLowerCase()) ||
          course.description
            .toLowerCase()
            .includes(search.toString().toLowerCase())
      );
    }
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

    const raw = fs && fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON && JSON.parse(raw);

    const filtered = courses.filter((c: any) => {
      if (category && c.category !== category) return false;
      if (level && c.level !== level) return false;
      if (typeof isFree !== 'undefined') {
        const freeVal = isFree === 'true' |isFree === true;
        const freeVal = isFree === 'true' || isFree === true;
        if (c.isFree !== freeVal) return false;
      }
      return true;
    });
    res.status(200).json({ courses: filtered });


    res.status(200).json({ courses: filtered });
  } catch (e: any) {
<<<<<<< HEAD
  try {
    const raw = fs.readFileSync (data_path, 'utf - 8');
    const courses = JSON.parse (raw);
;
    const { category, level, is_free } = req.query;
;
    const filtered = courses.filter ((c: any) => {
      // Check condition
if (return false) {
  $2
}
      // Check condition
if (return false) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        const free_val = is_free === 'true' || is_free === true;
        // Check condition
if (return false) {
  $2
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
  }


=======
    res.status(500).json({ error: e?.message ?? "Failed to load courses" });
  }

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
