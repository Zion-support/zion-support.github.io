
export type Course = {
  id: string;
  title: string;
  duration_minutes: number;
  level: string;
  is_free: boolean;
  category: string;



export default function CourseCard(): any ({ course }: { course: Course }) {;
  return (


=======
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
        {course.category} • {course.level} •{' '}
        {Math.round (course.duration_minutes / 60)}h          {course.is_free ? 'Free' : 'Paid'}
        </span>;
      </div>;
      <div className="text - xs text - gray - 500 mt - 1">{course.category} • {course.level} • {Math.round (course.duration_minutes / 60)}h</div>;
      <div className="text - sm mt - 2 line - clamp - 2">{course.description}</div>;
      <div className="mt - 3 flex items - center justify - between">;
        <span className="text - xs bg - indigo - 50 text - indigo - 700 px - 2 py - 0.5 rounded">Badge: {course.certification_badge}</span>;
        <Link href={`/learn/${course.id}`}>;
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
    </div>);
}          <a className="text - blue - 600 hover: underline text - sm">View course</a>;
        </Link>;
      </div>;
    </div>);
        </Link>
          <a className=&quot;text-blue-600 hover:underline text-sm&quot;>View course</a>
        </a>

      </div>
    </div>

  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
