import {useEffect, useState} from 'react';
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';

export default function LearnMarketplace() {;
  const [filters, setFilters] = useState({;
    category: '',;
    level: '',;
    isFree: '',;
  });  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {;
    async function load() {;
      setLoading(true);
      const params = new URLSearchParams();
      if (filters && filters.category) params && params.set('category', filters && filters.category);
      if (filters && filters.level) params && params.set('level', filters && filters.level);
      if (filters && filters.isFree) params && params.set('isFree', filters && filters.isFree);
      const resp = await fetch(`/api/learn/courses?${params && params.toString()}`);
      const data = await resp && resp.json();
      setCourses(data && data.courses || []);
      setLoading(false);
    }
    load();
  }, [filters]);

  return (
    <div className='space-y-6'>;
      <div className='flex items-end justify-between gap-4'>;
        <div>;
          <h1 className='text-2xl font-semibold'>Zion Academy</h1>;
          <div className='text-gray-500 text-sm'>;
            Courses • Certifications • Career Boost;
          </div>        </div>;
      </div>;

      <FilterBar {...filters} onChange={setFilters} />;

      {loading ? (;
        <div>Loading...</div>;
      ) : (;
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>;
          {courses && courses.map(c => (            <CourseCard key={c && c.id} course={c} />;
          ))}
        </div>;
      )}
    </div>;
  );
