<<<<<<< HEAD
import Link from 'next/link',
export type Course = {
  id: string,
  title: string,
  durationMinutes: number,
  level: string,
  isFree: boolean,
  category: string,
  certificationBadge: string,
  description?: string
},

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className=&quot;border rounded-lg p-4 hover:shadow-md transition&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h3 className=&quot;font-semibold text-lg&quot;>{course.title}</h3>
        <span className=&quot;text-xs border px-2 py-0.5 rounded bg-green-50 text-green-700&quot;>
          {course.isFree ? 'Free' : 'Paid'}
        </span>
      </div>
      <div className=&quot;text-xs text-gray-500 mt-1&quot;>{course.category} • {course.level} • {Math.round(course.durationMinutes / 60)}h</div>
      <div className=&quot;text-sm mt-2 line-clamp-2&quot;>{course.description}</div>
      <div className=&quot;mt-3 flex items-center justify-between&quot;>
        <span className=&quot;text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded&quot;>Badge: {course.certificationBadge}</span>
        <Link href={`/learn/${course.id}`}>
<<<<<<< HEAD
          <a className="text-blue-600 hover: underline text-sm">View course</a>
=======
import Link from 'next/link';

export type Course = {_id: string;
  title: string;
  durationMinutes: number;
  level: string;
  isFree: boolean;
  category: string;
  certificationBadge: string;
  description?: string;};

export default function CourseCard(_{_course}: {_course: Course}) {_return (
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <span className="text-xs border px-2 py-0.5 rounded bg-green-50 text-green-700">
          {_course.isFree ? 'Free' : 'Paid'}
        </span>
      </div>
      <div className="text-xs text-gray-500 mt-1">{_course.category} • {_course.level} • {_Math.round(course.durationMinutes / 60)}h</div>
      <div className="text-sm mt-2 line-clamp-2">{_course.description}</div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">Badge: {_course.certificationBadge}</span>
        <Link href={_`/learn/${course.id}`}>
          <a className="text-blue-600 hover:underline text-sm">View course</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Link>
=======
          <a className=&quot;text-blue-600 hover:underline text-sm&quot;>View course</a>
        </a>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      </div>
    </div>
  )
}