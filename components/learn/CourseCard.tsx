<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import Link from 'next/link';
export type Course = any;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

export type Course = {

  id: string;

;
import Link from 'next/link';
export type Course = any;export type Course = {id: string;
;
import Link from 'next/link';
export type Course = any;export type Course = {id: string;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import Link from 'next/link';

<<<<<<< HEAD
=======
export type Course = {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  title: string;
  duration_minutes: number;
  level: string;
  is_free: boolean;
<<<<<<< HEAD
  category: string;certification_badge: string,description?: string;
export default /**;
 * CourseCard - Function description;
 */;
function CourseCard() {return (<div className='border rounded - lg p - 4 hover:shadow - md transition'>;
  category: string;
  certification_badge: string,
  description?: string;
export default /**
 * CourseCard - Function description
 */
function CourseCard() {
  return (
    <div className='border rounded - lg p - 4 hover:shadow - md transition'>;
      <div className='flex items - center justify - between'>;
        <h3 className='font - semibold text - lg'>{course.title}</h3>;
        <span className='text - xs border px - 2 py - 0.5 rounded bg - green - 50 text - green - 700'>;
          {course.is_free ? 'Free' : 'Paid'}
        </span>;
      </div>;
      <div className='text - xs text - gray - 500 mt - 1'>;
        {Math.round (course.duration_minutes / 60)}h          {course.is_free ? 'Free' : 'Paid'}
        </span>;
      </div>;
=======
  category: string;
  certification_badge: string,
  description?: string;
export default /**;
 * CourseCard - Function description;
 */
function CourseCard() {}
=======
export type Course = any;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <div className='border rounded - lg p - 4 hover:shadow - md transition'>;'
      <div className='flex items - center justify - between'>;'
        <h3 className='font - semibold text - lg'>{course.title}</h3>;'
        <span className='text - xs border px - 2 py - 0.5 rounded bg - green - 50 text - green - 700'>;'
          {course.is_free ? 'Free' : 'Paid'}
        </span>;
      </div>;'
      <div className='text - xs text - gray - 500 mt - 1'>;'
        {Math.round (course.duration_minutes / 60)}h          {course.is_free ? 'Free' : 'Paid'}
        </span>;
      </div>;
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      <div className="text - xs text - gray-500 mt-1">{course.category} • {course.level} • {Math.round (course.duration_minutes / 60)}h</div>;
      <div className="text - sm mt - 2 line-clamp-2">{course.description}</div>;
      <div className="mt - 3 flex items-center justify-between">;
        <span className="text - xs bg - indigo - 50 text - indigo - 700 px-2 py-0.5 rounded">Badge: {course.certification_badge}</span>;
        <Link href={`/learn/${course.id}`}>;
<<<<<<< HEAD
          <a className='text - blue - 600 hover:underline text - sm'>View course</a>;
      </div>;
      <div className='text - sm mt - 2 line - clamp - 2'>{course.description}</div>;
      <div className='mt - 3 flex items - center justify - between'>;
        <span className='text - xs bg - indigo - 50 text - indigo - 700 px - 2 py - 0.5 rounded'>;
          Badge: {course.certification_badge}
        </span>;
        <Link href={`/learn/${course.id}`}>;
          <a className='text - blue - 600 hover:underline text - sm'>View course</a>        </Link>;
      </div>;
    </div>)}          <a className="text - blue-600 hover: underline text-sm">View course</a>;
        </Link>;
      </div>;
    </div>))certificationBadge: string;
  description?: string;
}export default function CourseCard() {return (<div className='border rounded-lg p-4 hover:shadow-md transition'>;
export default function CourseCard() {return (<div className='border rounded-lg p-4 hover:shadow-md transition'>;
      <div className='flex items-center justify-between'>;
        <h3 className='font-semibold text-lg'>{course.title}</h3>;
        <span className='text-xs border px-2 py-0.5 rounded bg-green-50 text-green-700'>;
=======
=======
      <div className="text - xs text - gray - 500 mt - 1">{course.category} • {course.level} • {Math.round (course.duration_minutes / 60)}h</div>;"
      <div className="text - sm mt - 2 line - clamp - 2">{course.description}</div>;"
      <div className="mt - 3 flex items - center justify - between">;"
        <span className="text - xs bg - indigo - 50 text - indigo - 700 px - 2 py - 0.5 rounded">Badge: {course.certification_badge}</span>;
        <Link href={`/learn/${course.id}`}>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <a className='text - blue - 600 hover:underline text - sm'>View course</a>;
      </div>;'
      <div className='text - sm mt - 2 line - clamp - 2'>{course.description}</div>;'
      <div className='mt - 3 flex items - center justify - between'>;'
        <span className='text - xs bg - indigo - 50 text - indigo - 700 px - 2 py - 0.5 rounded'>;
          Badge: {course.certification_badge}
        </span>;`
        <Link href={`/learn/${course.id}`}>;'
          <a className='text - blue - 600 hover:underline text - sm'>View course</a>        </Link>;
      </div>;
<<<<<<< HEAD
    </div>);
}          <a className="text - blue-600 hover: underline text-sm">View course</a>;
=======
    </div>);"
}          <a className="text - blue - 600 hover: underline text - sm">View course</a>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </Link>;
      </div>;
    </div>);

  );

<<<<<<< HEAD
<<<<<<< HEAD
  certificationBadge: string;
  description?: string;
};
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  certificationBadge: string;
}
  description?: string;}
}

export default function CourseCard() {return (<div className='border rounded-lg p-4 hover:shadow-md transition' />;

export default function CourseCard() {return (<div className='border rounded-lg p-4 hover:shadow-md transition' />;}
      <div className='flex items-center justify-between' />;}
        <h3 className='font-semibold text-lg' />{course.title}</h3>;
        <span className='text-xs border px-2 py-0.5 rounded bg-green-50 text-green-700' />;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          {course.isFree ? 'Free' : 'Paid'}
        </span>;
      </div>;
      <div className='text-xs text-gray-500 mt-1'>;
        {course.category} • {course.level} •{' '}
        {Math.round(course.durationMinutes / 60)}h;
      </div>;
      <div className='text-sm mt-2 line-clamp-2'>{course.description}</div>;
      <div className='mt-3 flex items-center justify-between'>;
        <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded'>;
          Badge: {course.certificationBadge}
        </span>;
        <Link href={`/learn/${course.id}`}>;
          <a className='text-blue-600 hover:underline text-sm'>View course</a>;
        </Link>;
      </div>;
    </div>;
  )}
    </div>);

  );

  )}
import Link from 'next/link';
export type Course = $2;
  title: string,
  durationMinutes: number,
  level: string,
  isFree: boolean,
  category: string,
  certificationBadge: string,
  description?: string
},

export default function CourseCard({ course }: { course: Course}) {
  return (
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
        </Link>
      </div>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
</Link> 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
