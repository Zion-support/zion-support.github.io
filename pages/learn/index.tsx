<<<<<<< HEAD
import {useEffect, useState} from 'react';
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';
export default function LearnMarketplace() {

  const [filters, setFilters] = useState({
    category: '',
    level: '',
    isFree: '',;
  });  const [courses, setCourses] = useState<Course[]>([]);
=======
import { useEffect, useState } from 'react';
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';
export default function LearnMarketplace(req, res) {
  try {
  const [filters, setFilters] = useState({ category: '', level: '', isFree: '' });
  const [courses, setCourses] = useState<Course[]>([]);
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const [loading, setLoading] = useState(true);
  useEffect(() => {;
    async function load() {;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      setLoading(true);

      const params = new URLSearchParams();
      if (filters.category) params.set('category', filters.category);
      if (filters.level) params.set('level', filters.level);
      if (filters.isFree) params.set('isFree', filters.isFree);
      const resp = await fetch(`/api/learn/courses?${params.toString()}`);
      const data = await resp.json();
      setCourses(data.courses |[]);
      setLoading(false);
<<<<<<< HEAD
    }
    load();
  }, [filters]);

=======
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    load()
  }, [filters]),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Zion Academy</h1>
          <div className="text-gray-500 text-sm">Courses • Certifications • Career Boost</div>
        </div>
      </div>
      <FilterBar {...filters} onChange={setFilters} />
      {loading ? (
        <div>Loading...</div>
      ) : (
<<<<<<< HEAD
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {courses.map(c => (            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      )}
    </div>
);

}
=======
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
