 export const useJobs = (userId?: string, status?: JobStatus) => {
  const {
  user 
}= useAuth ();
const [jobs, setJobs] = useState<Job[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const [error, setError] = useState<string | null> (null);
const clientId = userId || user?.id;
const fetchJobs = async () => {
  if (!clientId) {
  setIsLoading (false);
return 
}try {
  setIsLoading (true);
let query = supabase 
}const {
  data, error: fetchError 
}= await query;
}finally {
  setIsLoading (false) 
}
};
const updateJobStatus = async (jobId: string, newStatus: JobStatus) => {
  try {
  const {
  error: updateError 
}= await supabase .from ("jobs") .update ({
  status: newStatus 
}) .eq ("id", jobId) .eq ("client id", clientId), //Ensure user can only update their own jobs //Update local state 
}
};
const deleteJob = async (jobId: string) => {
  try {
  const {
  error: deleteError 
}= await supabase .from ("jobs") //Update local state 
}
};
// Fetch jobs when component mounts or dependencies change useEffect ( () => {
  fetchJobs () 
}, [clientId, status]);
return {
  jobs;
isLoading;
error;
refetch: fetchJobs;
updateJobStatus;
deleteJob;
createJob;
updateJob;
getJobById 
}
};
