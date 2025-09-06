import { useEffect, useState } from 'react';
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';

export default function LearnMarketplace() {
  const [filters, setFilters] = useState({
    category: '',
    level: '',
    isFree: '',
<<<<<<< HEAD
  });  const [courses, setCourses] = useState<Course[]>([]);
=======
  });
export default function LearnMarketplace() {
  const [filters, setFilters] = useState({ category: '', level: '', isFree: '' }),
export default function LearnMarketplace() {
  const [filters, setFilters] = useState({ category: '', level: '', isFree: '' }),
ursor/integrate-build-improve-and-re-verify-b76c
  const [courses, setCourses] = useState<Course[]>([]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const params = new URLSearchParams();
      if (filters.category) params.set('category', filters.category);
      if (filters.level) params.set('level', filters.level);
      if (filters.isFree) params.set('isFree', filters.isFree);
      const resp = await fetch(`/api/learn/courses?${params.toString()}`);
      const data = await resp.json();
      setCourses(data.courses || []);
      setLoading(false);
<<<<<<< HEAD
=======
      setLoading(false)
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
    load();
  }, [filters]);

  return (
    <div className='space-y-6'>
      <div className='flex items-end justify-between gap-4'>
        <div>
          <h1 className='text-2xl font-semibold'>Zion Academy</h1>
          <div className='text-gray-500 text-sm'>
            Courses • Certifications • Career Boost
<<<<<<< HEAD
          </div>        </div>
=======
          </div>
      setLoading(false)
    }
    load()
  }, [filters]);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Zion Academy</h1>
          <div className="text-gray-500 text-sm">Courses • Certifications • Career Boost</div>
          <h1 className="text-2xl font-semibold">Zion Academy</h1>
          <div className="text-gray-500 text-sm">Courses • Certifications • Career Boost</div>
ursor/integrate-build-improve-and-re-verify-b76c
        </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </div>

      <FilterBar {...filters} onChange={setFilters} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
<<<<<<< HEAD
          {courses.map(c => (            <CourseCard key={c.id} course={c} />
=======
          {courses.map(c => (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c) => (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c) => (
ursor/integrate-build-improve-and-re-verify-b76c
            <CourseCard key={c.id} course={c} />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          ))}
        </div>
      )}
    </div>
<<<<<<< HEAD
  );
=======
  );
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
