import { useEffect, useState  } from 'react';
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';
<<<<<<< HEAD
export default function LearnMarketplace() {
<<<<<<< HEAD
  const [filters, setFilters] = useState({ category: '', level: '', isFree: '' });
  const [courses, setCourses] = useState<Course[]>([]),
=======
  const [filters, setFilters] = useState({
    category: ''
    level: ''
    isFree: ''
  });  const [courses, setCourses] = useState<Course[]>([]);
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function load() {
      setLoading(true);
<<<<<<< HEAD
      const params = null;
=======
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
    }
    load();
  }, [filters]);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
        </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
            <CourseCard key={c.id} course={c} />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          ))}
        </div>
      )}
    </div>
<<<<<<< HEAD
);
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
