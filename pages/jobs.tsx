import type { NextPage } from 'next';
import Seo from '../components/seo/Seo';
import { JobPostingJsonLd } from 'next-seo';
      <JobPostingJsonLd
        datePosted={job.datePosted}
        description={job.description}
        employmentType={job.employmentType}
        hiringOrganization={job.hiringOrganization}
        jobLocationType={job.jobLocationType}
        title={job.title}
        validThrough={job.validThrough}
        baseSalary={job.baseSalary}
      />
      <main>
        <h1>Jobs</h1>
        <p>{job.title}</p>
        <p>{job.description}</p>
      </main>
    </div>
  );
};

export default Jobs;
