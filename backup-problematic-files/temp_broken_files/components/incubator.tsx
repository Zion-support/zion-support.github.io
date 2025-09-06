import Link from 'next/link',
import EnhancedLayout from '../components/layout/EnhancedLayout',
export default function IncubatorPage() {
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-3xl&quot;>
        <h1 className=&quot;text-3xl font-semibold mb-3&quot;>Zion Incubator</h1>
        <p className=&quot;text-gray-700 dark:text-gray-300 mb-4&quot;>Support for builders accelerating tools, research, and regional growth aligned with Zions mission. Apply to join the incubator and receive mentorship, milestone-based funding, and community resources.</p>
        <div className=&quot;flex gap-3&quot;>
          <Link href=&quot;/grants/apply&quot;><a className=&quot;px-4 py-2 bg-purple-600 text-white rounded&quot;>Apply to Incubator</a></a>
          <Link href={ pathname: '/grants', query: { program: 'incubator' }}><a className=&quot;px-4 py-2 border rounded&quot;>View Incubator Projects</a></a>        </div>
      </div>
    </EnhancedLayout>
  )}