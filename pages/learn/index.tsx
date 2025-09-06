<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState  } from 'react';
=======
import {useEffect, useState} from 'react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';
<<<<<<< HEAD
export default function LearnMarketplace() {

  const [filters, setFilters] = useState({
<<<<<<< HEAD
    category: ''
    level: ''
    isFree: ''
  });  const [courses, setCourses] = useState<Course[]>([]);
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
}

export default function LearnMarketplace() {
  const [filters, setFilters] = useState({
    category: '',
    level: '',
    isFree: '',
  });
  const [courses, setCourses] = useState<Course[]>([]);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function load() {
=======
    category: '',
    level: '',
    isFree: '',;
  });  const [courses, setCourses] = useState<Course[]>([]);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useEffect, useState } from 'react';
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';
export default function LearnMarketplace(req, res) {
  try {
  const [filters, setFilters] = useState({ category: '', level: '', isFree: '' });
  const [courses, setCourses] = useState<Course[]>([]);
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
      setCourses(data.courses |[]);
=======
      setCourses(data.courses || []);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
<<<<<<< HEAD
          <h1 className='text-2xl font-semibold'>Zion Academy</h1>
          <div className='text-gray-500 text-sm'>
            Courses • Certifications • Career Boost
<<<<<<< HEAD
          </div>        </div>
=======
          </div>
        </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
          <h1 className="text-2xl font-semibold">Zion Academy</h1>
          <div className="text-gray-500 text-sm">Courses • Certifications • Career Boost</div>
        </div>
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      </div>
      <FilterBar {...filters} onChange={setFilters} />
      {loading ? (
        <div>Loading...</div>
      ) : (
<<<<<<< HEAD
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
<<<<<<< HEAD
          {courses.map(c => (            <CourseCard key={c.id} course={c} />
=======
          {courses.map(c => (
            <CourseCard key={c.id} course={c} />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          ))}
        </div>
      )}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
);
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
);
<<<<<<< HEAD
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
