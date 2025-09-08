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

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
            .includes(search.toString().toLowerCase()),
      );
    }

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
    res.status(500).json({ error: e?.message ?? "Failed to load courses" });
  }

