import Link from 'next/link'
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
        <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">Badge: {course.certificationBadge}</span>
        <Link href={`/learn/${course.id}`}>
          <a className="text-blue-600 hover: underline text-sm">View course</a>
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
        </Link>
          <a className=&quot;text-blue-600 hover:underline text-sm&quot;>View course</a>
        </a>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      </div>
    </div>
  )
}