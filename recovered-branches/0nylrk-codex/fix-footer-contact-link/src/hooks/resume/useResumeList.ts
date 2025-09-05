 setIsLoading (true);
setError (null);
try {
  // Fetch resume list with basic info for the current user const {
  data: resumeData, error: resumeError 
}= await supabase .from ('talent resumes') .select ('*') .eq ('user id', user.id) if (resumeError) throw resumeError;
// Transform data to match Resume type const transformedResumes: Resume[] = resumeData.map (resume => ({
  id: resume.id, user id: resume.user id, basic info: {
  id: resume.id, title: resume.title, headline: resume.headline, summary: resume.summary 
};
work experience: [];
education: [];
skills: [];
certifications: [];
is active: resume.is active 
}) );
}