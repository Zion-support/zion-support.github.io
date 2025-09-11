

import Link from 'next / link';
export type Course = {
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export type Course = {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  title: string;
  duration_minutes: number;
  level: string;
  is_free: boolean;
  category: string;
export type Course = {
  id: string;
  title: string;
  durationMinutes: number;
  level: string;
  isFree: boolean;
  category: string;
  certificationBadge: string;
  description?: string;}
export default function CourseCard({ course }: { course: Course }) {
  return (  id: string
  title: string
  durationMinutes: number
  level: string
  isFree: boolean
  category: string
  certificationBadge: string
  description?: string

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className='border rounded-lg p-4 hover:shadow-md transition'>
      <div className='flex items-center justify-between'>
        <h3 className='font-semibold text-lg'>{course.title}</h3>
        <span className='text-xs border px-2 py-0.5 rounded bg-green-50 text-green-700'>
          {course.isFree ? 'Free' : 'Paid'}
        </span>
      </div>
      <div className='text-xs text-gray-500 mt-1'>
        {course.category} • {course.level} •{' '}
        {Math.round(course.durationMinutes / 60)}h          {course.isFree ? 'Free' : 'Paid'}
        </span>
      </div>
      <div className="text-xs text-gray-500 mt-1">{course.category} • {course.level} • {Math.round(course.durationMinutes / 60)}h</div>
      <div className="text-sm mt-2 line-clamp-2">{course.description}</div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">Badge: {course.certificationBadge}</span>
        <Link href={`/learn/${course.id}`}>
          <a className="text-blue-600 hover: underline text-sm">View course</a>
</Link>
      </div>
    </div>;
  );
}
=======
=======


export default function CourseCard(): any ({ course }: { course: Course }) {;
  return (


=======
      </div>
    </div>

  );
}
  );
=======
}=======

  );
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
