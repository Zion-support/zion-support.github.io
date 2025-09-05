import type {_NextPage} from 'next';
import Seo from '../components/seo/Seo';

const Jobs: NextPage = () => {_const _job = {
    title: 'Senior Full-Stack Engineer (Next.js + AI)', _description: 'Build modern AI-enabled web apps at Zion Tech Solutions.', _datePosted: new Date().toISOString().slice(0, _10), _employmentType: 'FULL_TIME', _validThrough: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString().slice(0, _10), _baseSalary: {
      currency: 'USD', _value: 160000, _unitText: 'YEAR'},
    hiringOrganization: {_name: 'Zion Tech Solutions', _sameAs: 'https://ziontechgroup.netlify.app', _logo: 'https://ziontechgroup.netlify.app/logo.png'},
    jobLocationType: 'TELECOMMUTE'} as const;

  return (
    <div>
      <Seo title="Jobs" description="Open roles at Zion Tech Solutions." />
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
  );
};

export default Jobs;