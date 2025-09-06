

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

    </div>;
  );
},;
export default Jobs;



