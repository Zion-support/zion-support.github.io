import { useEffect, useState  } from 'react';
import {useEffect, useState} from 'react';
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';
export default function LearnMarketplace() {
  const [filters, setFilters] = useState({ category: '', level: '', isFree: '' });
  const [courses, setCourses] = useState<Course[]>([]),
origin/cursor/automate-test-improve-and-merge-code-2533
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function load() {
    category: '',
    level: '',
    isFree: '',;
  });  const [courses, setCourses] = useState<Course[]>([]);


import {useEffect, useState} from 'react';


import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';



export default function LearnMarketplace() {;
  const [filters, setFilters] = useState({;
    category: '',;
    level: '',;
    isFree: '',;
  });  const [courses, setCourses] = useState<Course[]>([]);

    category: '',
    level: '',
    isFree: '',;
  });  const [courses, setCourses] = useState<Course[]>([]);

import { useEffect, useState } from 'react';
import CourseCard, { Course } from '../../components/learn/CourseCard';
import FilterBar from '../../components/learn/FilterBar';
export default function LearnMarketplace(req, res) {
  try {
  const [filters, setFilters] = useState({ category: '', level: '', isFree: '' });
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {;
    async function load() {;
      setLoading(true);
      setCourses(data.courses || []);
setLoading(false);
origin/cursor/automate-test-improve-and-merge-code-2533
    }
    load ();
  }, [filters]);
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
      setCourses(data.courses || []);
      setLoading(false)
    }
    load()
  }, [filters]);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    load()
  }, [filters]),


  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className='text-2xl font-semibold'>Zion Academy</h1>
          <div className='text-gray-500 text-sm'>
            Courses • Certifications • Career Boost
          </div>
        </div>
origin/cursor/automate-test-improve-and-merge-code-2533
      </div>
      <FilterBar {...filters} onChange={setFilters} />
      {loading ? (
        <div>Loading...</div>
      ) : (
<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {courses.map(c => (
origin/cursor/automate-test-improve-and-merge-code-2533
            <CourseCard key={c.id} course={c} />
          ))}
        </div>;
      )}
    </div>
);
origin/cursor/automate-test-improve-and-merge-code-2533
