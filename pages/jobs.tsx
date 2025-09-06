
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
      name: 'Zion Tech Solutions',
      same_as: 'https://ziontechgroup.netlify.app',
      logo: 'https://ziontechgroup.netlify.app / logo.png'},
    jobLocationType: 'TELECOMMUTE'} as const,

  return (
    <div>
      <Seo title="Jobs" description="Open roles at Zion Tech Solutions." />
      <JobPostingJsonLd




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
        <h1 > Jobs</h1>;
        <p>{job.title}</p>;
        <p>{job.description}</p>;
      </main>;

    </div>;
  );
},;
export default Jobs;







>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



