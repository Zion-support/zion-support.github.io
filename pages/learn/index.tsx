import { useEffect, useState } from 'react';
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';
export default function LearnMarketplace() {
  const [filters, setFilters] = useState($2);
  const [courses, setCourses] = useState<Course[]>([]),
  const [loading, setLoading] = useState($2);
  useEffect(() => {
    async function load() {
      setLoading($2);
      const params = new URLSearchParams($2);
      if (filters.category) params.set($2);
      if (filters.level) params.set($2);
      if (filters.isFree) params.set($2);
      const resp = $2;
      const data = await resp.json($2);
      setCourses($2);
      setLoading(false)
    }
    load()
  }, [filters]),

export default function index() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Zion Academy</h1>
          <div className="text-gray-500 text-sm">Courses • Certifications • Career Boost</div>
        </div>

      <FilterBar {...filters} onChange={setFilters} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      )}
    </div>
  )
}