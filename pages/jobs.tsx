<<<<<<< HEAD

const Jobs: NextPage = () => {
  const job = {
    title: 'Senior Full-Stack Engineer (Next.js + AI)',
    description: 'Build modern AI-enabled web apps at Zion Tech Solutions.',
datePosted: new Date().toISOString().slice(0, 10);
    employmentType: 'FULL_TIME',
    validThrough: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString().slice(0, 10);
    baseSalary: {
import type { NextPage } from 'next',
import Seo from '../components / seo / Seo',
import { JobPostingJsonLd } from 'next - seo',
const Jobs: NextPage = () => {
  const job = {
    title: 'Senior Full - Stack Engineer (Next.js + AI)',
    description: 'Build modern AI - enabled web apps at Zion Tech Solutions.',
    date_posted: new Date ().toISOString ().slice (0, 10),
    employment_type: 'FULL_TIME',
    valid_through: new Date (Date.now () + 1000 * 60 * 60 * 24 * 30).toISOString ().slice (0, 10),
    base_salary: {
      currency: 'USD',
      value: 160000,
      unit_text: 'YEAR'},
    hiring_organization: {
      name: 'Zion Tech Solutions',
      same_as: 'https://ziontechgroup.netlify.app',
      logo: 'https://ziontechgroup.netlify.app / logo.png'},
    jobLocationType: 'TELECOMMUTE'} as const,
  return (
    <div>;
      <Seo title="Jobs" description="Open roles at Zion Tech Solutions." />;
      <JobPostingJsonLd;
        date_posted={job.date_posted}
        description={job.description}
        employment_type={job.employment_type}
        hiring_organization={job.hiring_organization}
        jobLocationType={job.jobLocationType}
        title={job.title}
        valid_through={job.valid_through}
        base_salary={job.base_salary}
      />;
      <main>;
        <h1 > Jobs</h1>;
        <p>{job.title}</p>;
        <p>{job.description}</p>;
      </main>;
    </div>);
},
export default Jobs,

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

export default Jobs

=======
import type { NextPage } from 'next';
import Seo from '../components/seo/Seo';
import { JobPostingJsonLd } from 'next-seo';

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
<<<<<<< HEAD
      name: 'Zion Tech Solutions'
      sameAs: 'https://ziontechgroup.netlify.app'
      logo: 'https://ziontechgroup.netlify.app/logo.png'}
    jobLocationType: 'TELECOMMUTE'} as const
=======
      name: 'Zion Tech Solutions',
      sameAs: 'https://ziontechgroup.netlify.app',
      logo: 'https://ziontechgroup.netlify.app/logo.png'},
    jobLocationType: 'TELECOMMUTE'} as const,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div>
      <Seo title="Jobs" description="Open roles at Zion Tech Solutions." />
      <JobPostingJsonLd
<<<<<<< HEAD
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
  )
}
export default Jobs;

<<<<<<< HEAD
=======
export default Jobs,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        datePosted={job.datePosted  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        description={job.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        employmentType={job.employmentType  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        hiringOrganization={job.hiringOrganization  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        jobLocationType={job.jobLocationType  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        title={job.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        validThrough={job.validThrough  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        baseSalary={job.baseSalary  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />;
      <main>;
        <h1>Jobs</h1>;
        <p>{job.title}</p>;
        <p>{job.description}</p>;
      </main>;
    </div>;
  );
},;
export default Jobs;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
