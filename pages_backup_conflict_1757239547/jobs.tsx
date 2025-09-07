import type { NextPage } from 'next';
import Seo from '../components/seo/Seo';
import { JobPostingJsonLd } from 'next-seo';
const Jobs: NextPage;
const Jobs: NextPage = () => {
  const job = {
    title: 'Senior Full-Stack Engineer (Next.js + AI)'
    description: 'Build modern AI-enabled web apps at Zion Tech Solutions.'
    datePosted: new Date().toISOString().slice(0, 10)
    employmentType: 'FULL_TIME'
    validThrough: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString().slice(0, 10)
    baseSalary: {
      currency: 'USD'
      value: 160000
      unitText: 'YEAR'}
    hiringOrganization: {
      name: 'Zion Tech Solutions'
      sameAs: 'https://ziontechgroup.netlify.app'
      logo: 'https://ziontechgroup.netlify.app/logo.png'}
    jobLocationType: 'TELECOMMUTE'} as const
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
export default Jobs;
