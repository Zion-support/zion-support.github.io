import Link from 'next/link';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export type Course = {
  id: string;
  title: string;
  durationMinutes: number;
  level: string;
  isFree: boolean;
  category: string;
  certificationBadge: string;
<<<<<<< HEAD
  description?: string;};

export default function CourseCard({ course }: { course: Course }) {
  return (
=======
  description?: string;
=======
export type Course = {
=======
export type Course = {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  id: string,
  title: string,
  durationMinutes: number,
  level: string,
  isFree: boolean,
  category: string,
  certificationBadge: string,
  description?: string
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default function CourseCard({ course }: { course: Course }) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <div className='border rounded-lg p-4 hover:shadow-md transition'>
      <div className='flex items-center justify-between'>
        <h3 className='font-semibold text-lg'>{course.title}</h3>
        <span className='text-xs border px-2 py-0.5 rounded bg-green-50 text-green-700'>
<<<<<<< HEAD
          {course.isFree ? 'Free' : 'Paid'}
        </span>
      </div>
      <div className='text-xs text-gray-500 mt-1'>
        {course.category} • {course.level} •{' '}
        {Math.round(course.durationMinutes / 60)}h
=======
=======
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <span className="text-xs border px-2 py-0.5 rounded bg-green-50 text-green-700">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {course.isFree ? 'Free' : 'Paid'}
        </span>
      </div>
      <div className="text-xs text-gray-500 mt-1">{course.category} • {course.level} • {Math.round(course.durationMinutes / 60)}h</div>
      <div className="text-sm mt-2 line-clamp-2">{course.description}</div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">Badge: {course.certificationBadge}</span>
        <Link href={`/learn/${course.id}`}>
<<<<<<< HEAD
          <a className='text-blue-600 hover:underline text-sm'>View course</a>
=======
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <span className="text-xs border px-2 py-0.5 rounded bg-green-50 text-green-700">
          {course.isFree ? 'Free' : 'Paid'}
        </span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </div>
      <div className='text-sm mt-2 line-clamp-2'>{course.description}</div>
      <div className='mt-3 flex items-center justify-between'>
        <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded'>
          Badge: {course.certificationBadge}
        </span>
        <Link href={`/learn/${course.id}`}>
<<<<<<< HEAD
          <a className='text-blue-600 hover:underline text-sm'>View course</a>        </Link>
      </div>
    </div>
  );
}
=======
          <a className="text-blue-600 hover: underline text-sm">View course</a>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <a className="text-blue-600 hover: underline text-sm">View course</a>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </Link>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
