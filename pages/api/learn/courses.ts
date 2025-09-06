<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
=======

const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
const dataPath = path.join(process.cwd(), 'datalearncourses.json');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { NextApiRequest, NextApiResponse } from "next";

const mockCourses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    duration: "4 weeks",
    level: "beginner",
    rating: 4.5,
    students: 1200,
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    description: "Master advanced React concepts and patterns",
    duration: "6 weeks",
    level: "intermediate",
    rating: 4.8,
    students: 800,
  },
  {
    id: "3",
    title: "Full-Stack Development",
    description: "Build complete web applications from scratch",
    duration: "12 weeks",
    level: "advanced",
    rating: 4.7,
    students: 500,
  },
];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  try {;
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const { category, level, isFree } = req.query;
=======
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
            .includes(search.toString().toLowerCase()),
      );
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

    const raw = fs && fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON && JSON.parse(raw);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    const filtered = courses.filter((c: any) => {
      if (category && c.category !== category) return false;
      if (level && c.level !== level) return false;
      if (typeof isFree !== 'undefined') {

        if (c.isFree !== freeVal) return false;
      }
      return true;
    });

  } catch (e: any) {
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
    res.status(500).json({ error: e?.message ?? "Failed to load courses" });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


}
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD

=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
