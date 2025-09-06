<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      currency: 'USD',
      value: 160000,
      unit_text: 'YEAR'},
    hiring_organization: {
=======

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      name: 'Zion Tech Solutions',
      same_as: 'https://ziontechgroup.netlify.app',
      logo: 'https://ziontechgroup.netlify.app / logo.png'},
    jobLocationType: 'TELECOMMUTE'} as const,
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (

    <div>;
      <Seo title="Jobs" description="Open roles at Zion Tech Solutions." />;
      <JobPostingJsonLd;
        date_posted={job.date_posted}

<<<<<<< HEAD
<<<<<<< HEAD
=======
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

import type { NextPage } from 'next';
import Seo from '../components/seo/Seo';
import { JobPostingJsonLd } from 'next-seo';

  return (
    <div>
      <Seo title="Jobs" description="Open roles at Zion Tech Solutions." />
      <JobPostingJsonLd
      name: 'Zion Tech Solutions',
      sameAs: 'https://ziontechgroup.netlify.app',
      logo: 'https://ziontechgroup.netlify.app/logo.png'},
    jobLocationType: 'TELECOMMUTE'} as const,
  return (
    <div>
      <Seo title="Jobs" description="Open roles at Zion Tech Solutions." />
      <JobPostingJsonLd
        datePosted={job.datePosted}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        description={job.description}
        employmentType={job.employmentType}
        hiringOrganization={job.hiringOrganization}
        jobLocationType={job.jobLocationType}
        title={job.title}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
        valid_through={job.valid_through}
        base_salary={job.base_salary}
=======
        valid_through={job.valid_through}
        base_salary={job.base_salary}
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default Jobs,;
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        valid_through={job.valid_through}
        base_salary={job.base_salary}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


=======
        valid_through={job.valid_through}
        base_salary={job.base_salary}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        valid_through={job.valid_through}
        base_salary={job.base_salary}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      />;
      <main>;
        <h1 > Jobs</h1>;
        <p>{job.title}</p>;
        <p>{job.description}</p>;
      </main>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    </div>;
  );
},;
export default Jobs;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    </div>;
  );
},;
=======
import type { NextPage } from 'next';
import Seo from '../components/seo/Seo';
import { JobPostingJsonLd } from 'next-seo';
const Jobs: NextPage;
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
export default Jobs;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
