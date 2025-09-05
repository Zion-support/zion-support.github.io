<<<<<<< HEAD
import Link from 'next/link',
import EnhancedLayout from '../components/layout/EnhancedLayout',
export default function IncubatorPage() {
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-3xl&quot;>
        <h1 className=&quot;text-3xl font-semibold mb-3&quot;>Zion Incubator</h1>
        <p className=&quot;text-gray-700 dark:text-gray-300 mb-4&quot;>Support for builders accelerating tools, research, and regional growth aligned with Zion’s mission. Apply to join the incubator and receive mentorship, milestone-based funding, and community resources.</p>
        <div className=&quot;flex gap-3&quot;>
          <Link href=&quot;/grants/apply&quot;><a className=&quot;px-4 py-2 bg-purple-600 text-white rounded&quot;>Apply to Incubator</a></a>
          <Link href={{ pathname: '/grants', query: { program: 'incubator' } }}><a className=&quot;px-4 py-2 border rounded&quot;>View Incubator Projects</a></a>
=======
import Link from 'next/link';
import EnhancedLayout from '../components/layout/EnhancedLayout';

export default function IncubatorPage() {_return (
    <EnhancedLayout>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold mb-3">Zion Incubator</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Support for builders accelerating tools, _research, _and regional growth aligned with Zion’s mission. Apply to join the incubator and receive mentorship, _milestone-based funding, _and community resources.</p>
        <div className="flex gap-3">
          <Link href="/grants/apply"><a className="px-4 py-2 bg-purple-600 text-white rounded">Apply to Incubator</a></Link>
          <Link href={{ pathname: '/grants', _query: { program: 'incubator'} }}><a className="px-4 py-2 border rounded">View Incubator Projects</a></Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>
    </EnhancedLayout>
  )
}