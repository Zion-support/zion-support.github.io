import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
try {;
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
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

    const raw = fs && fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON && JSON.parse(raw);

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
    res.status(500).json({ error: e?.message ?? "Failed to load courses" });
  }

