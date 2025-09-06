import { useEffect, useState } from 'react';
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';
<<<<<<< HEAD

export default function LearnMarketplace() {
  const [filters, setFilters] = useState({
    category: '',
    level: '',
    isFree: '',
  });
=======
export default function LearnMarketplace() {
  const [filters, setFilters] = useState({ category: '', level: '', isFree: '' }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const [courses, setCourses] = useState<Course[]>([]);
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
<<<<<<< HEAD
      setLoading(false);
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
          </div>
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        </div>
      </div>

      <FilterBar {...filters} onChange={setFilters} />

      {loading ? (
        <div>Loading...</div>
      ) : (
<<<<<<< HEAD
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {courses.map(c => (
=======
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      )}
    </div>
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
