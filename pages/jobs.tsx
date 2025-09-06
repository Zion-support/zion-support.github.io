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
      name: 'Zion Tech Solutions'
      sameAs: 'https://ziontechgroup.netlify.app'
      logo: 'https://ziontechgroup.netlify.app/logo.png'}
    jobLocationType: 'TELECOMMUTE'} as const
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
    <div>
      <Seo title="Jobs" description="Open roles at Zion Tech Solutions." />
      <JobPostingJsonLd
        datePosted={job.datePosted}
        description={job.description}
        employment_type={job.employment_type}
        hiring_organization={job.hiring_organization}
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
        valid_through={job.valid_through}
        base_salary={job.base_salary}
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      />;
      <main>;
        <h1 > Jobs</h1>;
        <p>{job.title}</p>;
        <p>{job.description}</p>;
      </main>;
<<<<<<< HEAD
    </div>);
},
export default Jobs,
=======

    </div>;
  );
},;
export default Jobs;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
