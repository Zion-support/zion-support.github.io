import type { NextApiRequest, NextApiResponse } from 'next';

const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
const dataPath = path.join(process.cwd(), 'datalearncourses.json');

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {;
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
<<<<<<< HEAD
    const { category, level, isFree } = req.query;

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

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
