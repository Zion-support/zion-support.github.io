import { useEffect, useState } from 'react';
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';

export default function LearnMarketplace() {
  const [filters, setFilters] = useState({ category: '', level: '', isFree: '' });
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
      setLoading(false);
    }
    load();
  }, [filters]);

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-end justify-between gap-4&quot;>
        <div>
          <h1 className=&quot;text-2xl font-semibold&quot;>Zion Academy</h1>
          <div className=&quot;text-gray-500 text-sm&quot;>Courses • Certifications • Career Boost</div>
        </div>
      </div>

      <FilterBar {...filters} onChange={setFilters} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className=&quot;grid sm:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      )}
    </div>
  );
}