
  }
}
;
export async function getJobById(jobId:string) {;
  try {;
    const { data, error } = await supabase;
      .from('jobs');
      .select('*');
      .eq('id', jobId);
      .single(),;
      ;
    if (error) throw error,;
    return data,;
  } catch (error:any) {;
    console.error("Error fetching job:", error),;
    toast.error("Failed to load job details"),;
    return null,;
  } export async function createJob (jobData: any) {
  try {

}