 return (<div> <Seo title="Jobs" description="Open roles at Zion Tech Solutions." /> <JobPostingJsonLd datePosted= {
  job.datePosted 
}description= {
  job.description 
}employmentType= {
  job.employmentType 
}hiringOrganization= {
  job.hiringOrganization 
}jobLocationType= {
  job.jobLocationType 
}title= {
  job.title 
}validThrough= {
  job.validThrough 
}baseSalary= {
  job.baseSalary 
}/> <main> <h1>Jobs</h1> <p> {
  job.title 
}</p> <p> {
  job.description 
}</p> </main> </div>) 
};
export default Jobs;
