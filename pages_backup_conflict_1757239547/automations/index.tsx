import type { NextPage } from 'next';
import Link from 'next/link';
const AutomationsIndex: NextPage;
const AutomationsIndex: NextPage = () => {
  const items = [
    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' }
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }]
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-4xl mx-auto py-8'>
        <h1 className='text-2xl font-bold mb-6'>Page</h1>
        <div className='bg-white rounded-lg shadow p-6'>
          <p className='text-gray-600'>Content coming soon.</p>
        </div>
      </div>
    </div>
  )
}
export default AutomationsIndex;
