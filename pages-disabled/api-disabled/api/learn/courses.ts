import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
try {;
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
<<<<<<< HEAD
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method Not Allowed");
  }
;
  try {;
    const { level, search } = req.query;
;
    let filtered = mockCourses;
;
    if (level) {;
      filtered = filtered.filter((course) => course.level === level);
    }
;
    if (search) {;
      filtered = filtered.filter(
        (course) =>;
          course.title
            .toLowerCase()
            .includes(search.toString().toLowerCase()) ||;
          course.description
            .toLowerCase()
            .includes(search.toString().toLowerCase())
      );
    }
:pages/api/learn/courses.ts
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
:pages/api/learn/courses.ts

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
