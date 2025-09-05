<<<<<<< HEAD
import type { NextPage } from 'next',;
import Seo from '../components/seo/Seo',;
import { JobPostingJsonLd } from 'next-seo',;
;
const Jobs:NextPage = () => {;
  const job = {;
    title:'Senior Full-Stack Engineer (Next.js + AI)',;
    description:'Build modern AI-enabled web apps at Zion Tech Solutions.',;
    datePosted:new Date().toISOString().slice(0, 10),;
    employmentType:'FULL_TIME',;
    validThrough:new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString().slice(0, 10),;
    baseSalary:{;
      currency:'USD',;
      value:160000,;
      unitText:'YEAR'},;
    hiringOrganization:{;
      name:'Zion Tech Solutions',;
      sameAs:'https://ziontechgroup.netlify.app',;
      logo:'https://ziontechgroup.netlify.app/logo.png'},;
    jobLocationType:'TELECOMMUTE'} as const,;
;
  return (;
    <div>;
      <Seo title="Jobs" description="Open roles at Zion Tech Solutions." />;
      <JobPostingJsonLd;
        datePosted={job.datePosted}
        description={job.description}
        employmentType={job.employmentType}
        hiringOrganization={job.hiringOrganization}
        jobLocationType={job.jobLocationType}
        title={job.title}
        validThrough={job.validThrough}
        baseSalary={job.baseSalary}
      />;
      <main>;
        <h1>Jobs</h1>;
        <p>{job.title}</p>;
        <p>{job.description}</p>;
      </main>;
    </div>;
  ),;
},;
;
=======
import type { NextPage } from 'next',
import Seo from '../components/seo/Seo',
import { JobPostingJsonLd } from 'next-seo',
const Jobs: NextPage = () => {
  const job = {
    title: 'Senior Full-Stack Engineer (Next.js + AI)',
    description: 'Build modern AI-enabled web apps at Zion Tech Solutions.',
    datePosted: new Date().toISOString().slice(0, 10),
    employmentType: 'FULL_TIME',
    validThrough: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString().slice(0, 10),
    baseSalary: {
      currency: 'USD',
      value: 160000,
      unitText: 'YEAR'},
    hiringOrganization: {
      name: 'Zion Tech Solutions',
      sameAs: 'https://ziontechgroup.netlify.app',
      logo: 'https://ziontechgroup.netlify.app/logo.png'},
    jobLocationType: 'TELECOMMUTE'} as const,
  return (
    <div>
      <Seo title=&quot;Jobs&quot; description=&quot;Open roles at Zion Tech Solutions.&quot; />
      <JobPostingJsonLd
        datePosted={_job.datePosted}
        description={_job.description}
        employmentType={_job.employmentType}
        hiringOrganization={_job.hiringOrganization}
        jobLocationType={_job.jobLocationType}
        title={_job.title}
        validThrough={_job.validThrough}
        baseSalary={_job.baseSalary}
      />
      <main>
        <h1>Jobs</h1>
        <p>{_job.title}</p>
        <p>{_job.description}</p>
      </main>
    </div>
  )
},

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default Jobs,