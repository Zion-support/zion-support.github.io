import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type Course = any;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
<<<<<<< HEAD
export type Course = {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export type Course = {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  id: string;
  title: string;
  durationMinutes: number;
  level: string;
  isFree: boolean;
  category: string;
  certificationBadge: string;
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  description?: string;
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
        {Math.round(course.durationMinutes / 60)}h          {course.isFree ? 'Free' : 'Paid'}
        </span>
      </div>
      <div className="text-xs text-gray-500 mt-1">{course.category} • {course.level} • {Math.round(course.durationMinutes / 60)}h</div>
      <div className="text-sm mt-2 line-clamp-2">{course.description}</div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">Badge: {course.certificationBadge}</span>
        <Link href={`/learn/${course.id}`}>
          <a className='text-blue-600 hover:underline text-sm'>View course</a>
=======
        {Math.round(course.durationMinutes / 60)}h
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
    </div>;
  );
}          <a className="text-blue-600 hover: underline text-sm">View course</a>
=======
          <a className='text-blue-600 hover:underline text-sm'>View course</a>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        </Link>
      </div>
    </div>
<<<<<<< HEAD
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
}
=======
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
