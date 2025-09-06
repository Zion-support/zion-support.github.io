import Link from 'next/link';
<<<<<<< HEAD

export type Course = {
  id: string;
  title: string;
  durationMinutes: number;
  level: string;
  isFree: boolean;
  category: string;
  certificationBadge: string;
  description?: string;
=======
export type Course = {
  id: string,
  title: string,
  durationMinutes: number,
  level: string,
  isFree: boolean,
  category: string,
  certificationBadge: string,
  description?: string
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
};

export default function CourseCard({ course }: { course: Course }) {
  return (
<<<<<<< HEAD
    <div className='border rounded-lg p-4 hover:shadow-md transition'>
      <div className='flex items-center justify-between'>
        <h3 className='font-semibold text-lg'>{course.title}</h3>
        <span className='text-xs border px-2 py-0.5 rounded bg-green-50 text-green-700'>
          {course.isFree ? 'Free' : 'Paid'}
        </span>
      </div>
      <div className='text-xs text-gray-500 mt-1'>
        {course.category} • {course.level} •{' '}
        {Math.round(course.durationMinutes / 60)}h
      </div>
      <div className='text-sm mt-2 line-clamp-2'>{course.description}</div>
      <div className='mt-3 flex items-center justify-between'>
        <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded'>
          Badge: {course.certificationBadge}
        </span>
        <Link href={`/learn/${course.id}`}>
          <a className='text-blue-600 hover:underline text-sm'>View course</a>
=======
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <span className="text-xs border px-2 py-0.5 rounded bg-green-50 text-green-700">
          {course.isFree ? 'Free' : 'Paid'}
        </span>
      </div>
      <div className="text-xs text-gray-500 mt-1">{course.category} • {course.level} • {Math.round(course.durationMinutes / 60)}h</div>
      <div className="text-sm mt-2 line-clamp-2">{course.description}</div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">Badge: {course.certificationBadge}</span>
        <Link href={`/learn/${course.id}`}>
          <a className="text-blue-600 hover: underline text-sm">View course</a>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        </Link>
      </div>
    </div>
  );
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
