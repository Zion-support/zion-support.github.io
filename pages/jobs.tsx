
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      currency: 'USD',
      value: 160000,
      unit_text: 'YEAR'},
    hiring_organization: {

      name: 'Zion Tech Solutions',
      same_as: 'https://ziontechgroup.netlify.app',
      logo: 'https://ziontechgroup.netlify.app / logo.png'},
    jobLocationType: 'TELECOMMUTE'} as const,

=======  return (

    <div>;
      <Seo title="Jobs" description="Open roles at Zion Tech Solutions." />;
      <JobPostingJsonLd;
        date_posted={job.date_posted}

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

=======const Jobs: NextPage = () => {
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
      name: 'Zion Tech Solutions',
export default Jobs,;
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
=======
=======
        description={job.description}
        employment_type={job.employment_type}
        hiring_organization={job.hiring_organization}
        jobLocationType={job.jobLocationType}
        title={job.title}

=======
        valid_through={job.valid_through}
        base_salary={job.base_salary}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      />;
      <main>;
        <h1 > Jobs</h1>;
        <p>{job.title}</p>;
        <p>{job.description}</p>;
      </main>;
    </div>;
  );
},;
export default Jobs;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
