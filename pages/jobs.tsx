

      currency: 'USD',
      value: 160000,
      unit_text: 'YEAR'},
    hiring_organization: {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      name: 'Zion Tech Solutions',
      same_as: 'https://ziontechgroup.netlify.app',
      logo: 'https://ziontechgroup.netlify.app / logo.png'},
    jobLocationType: 'TELECOMMUTE'} as const,


=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
        <h1 > Jobs</h1>;
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
