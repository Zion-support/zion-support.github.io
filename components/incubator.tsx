

  return (
    <EnhancedLayout>;
      <div className='max-w-3xl'>;
        <h1 className='text-3xl font-semibold mb-3'>Zion Incubator</h1>;
        <p className='text-gray-700 dark:text-gray-300 mb-4'>;
          Support for builders accelerating tools, research, and regional growth;
          aligned with Zion’s mission. Apply to join the incubator and receive;
          mentorship, milestone-based funding, and community resources.;
        </p>;
        <div className='flex gap-3'>;
          <Link href='/grants/apply'>;
            <a className='px-4 py-2 bg-purple-600 text-white rounded'>;
              Apply to Incubator;
            </a>;
          </Link>;
          <Link href={{ pathname: '/grants', query: { program: 'incubator' } }}>;
            <a className='px-4 py-2 border rounded'>View Incubator Projects</a>;
          </Link>        </div>;
      </div>;
    </EnhancedLayout>;
  );
}      <div className="max-w-3xl">;
        <h1 className="text-3xl font-semibold mb-3">Zion Incubator</h1>;
        <p className="text-gray-700 dark:text-gray-300 mb-4">Support for builders accelerating tools, research, and regional growth aligned with Zion’s mission. Apply to join the incubator and receive mentorship, milestone-based funding, and community resources.</p>;
        <div className="flex gap-3">;
          <Link href="/grants/apply"><a className="px-4 py-2 bg-purple-600 text-white rounded">Apply to Incubator</a></Link>;
          <Link href={{ pathname: '/grants', query: { program: 'incubator' } }}><a className="px-4 py-2 border rounded">View Incubator Projects</a></Link>;
      </div>;
    </EnhancedLayout>;

  );
}
=======
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function IncubatorPage() {
  return (
    <EnhancedLayout>
      <div className="max-w-3xl">
=======
import Link from 'next/link';
import EnhancedLayout from '../components/layout/EnhancedLayout';
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function IncubatorPage() {
  return (
    <EnhancedLayout>
      <div className='max-w-3xl'>
        <h1 className='text-3xl font-semibold mb-3'>Zion Incubator</h1>
        <p className='text-gray-700 dark:text-gray-300 mb-4'>
          Support for builders accelerating tools, research, and regional growth
          aligned with Zion’s mission. Apply to join the incubator and receive
          mentorship, milestone-based funding, and community resources.
        </p>
        <div className='flex gap-3'>
          <Link href='/grants/apply'>
            <a className='px-4 py-2 bg-purple-600 text-white rounded'>
              Apply to Incubator
            </a>
          </Link>
          <Link href={{ pathname: '/grants', query: { program: 'incubator' } }}>
            <a className='px-4 py-2 border rounded'>View Incubator Projects</a>
          </Link>        </div>
      </div>
    </EnhancedLayout>;
  );
}      <div className="max-w-3xl">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <h1 className="text-3xl font-semibold mb-3">Zion Incubator</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Support for builders accelerating tools, research, and regional growth aligned with Zion’s mission. Apply to join the incubator and receive mentorship, milestone-based funding, and community resources.</p>
        <div className="flex gap-3">
          <Link href="/grants/apply"><a className="px-4 py-2 bg-purple-600 text-white rounded">Apply to Incubator</a></Link>
          <Link href={{ pathname: '/grants', query: { program: 'incubator' } }}><a className="px-4 py-2 border rounded">View Incubator Projects</a></Link>
        </div>
      </div>
    </EnhancedLayout>

import Link from 'next / link';
import EnhancedLayout from '../components / layout / EnhancedLayout';
export default /**
 * IncubatorPage - Function description
 */
function IncubatorPage() {
  return (
    <EnhancedLayout>;
      <div className='max - w-3xl'>;
        <h1 className='text - 3xl font - semibold mb - 3'>Zion Incubator</h1>;
        <p className='text - gray - 700 dark:text - gray - 300 mb - 4'>;
          Support for builders accelerating tools, research, and regional growth;
          aligned with Zion’s mission. Apply to join the incubator and receive;
          mentorship, milestone - based funding, and community resources.;
        </p>;
        <div className='flex gap - 3'>;
          <Link href='/grants / apply'>;
            <a className='px - 4 py - 2 bg - purple - 600 text - white rounded'>;
              Apply to Incubator;
            </a>;
          </Link>;
          <Link href={{ pathname: '/grants', query: { program: 'incubator' } }}>;
            <a className='px - 4 py - 2 border rounded'>View Incubator Projects</a>;
          </Link>        </div>;
      </div>;
    </EnhancedLayout>);
}      <div className="max - w-3xl">;
        <h1 className="text - 3xl font - semibold mb - 3">Zion Incubator</h1>;
        <p className="text - gray - 700 dark:text - gray - 300 mb - 4">Support for builders accelerating tools, research, and regional growth aligned with Zion’s mission. Apply to join the incubator and receive mentorship, milestone - based funding, and community resources.</p>;
        <div className="flex gap - 3">;
          <Link href="/grants / apply"><a className="px - 4 py - 2 bg - purple - 600 text - white rounded">Apply to Incubator</a></Link>;
          <Link href={{ pathname: '/grants', query: { program: 'incubator' } }}><a className="px - 4 py - 2 border rounded">View Incubator Projects</a></Link>;
      </div>;
    </EnhancedLayout>);
        </div>
      </div>
    </EnhancedLayout>
  )

}

=======

  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
