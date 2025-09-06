 export function useJobMatches (jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const [isProcessing, setIsProcessing] = useState (false);
const fetchMatches = async () => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase .from ("job talent matches") talent profile: talent id (id;
user id;
full name;
professional title;
profile picture url;
hourly rate;
bio;
years experience;
key projects;
skills) `) if (error) throw error;
setMatches (data || []) 
}catch (error) {
  
}finally {
  setIsLoading (false) 
}
};
const triggerAIMatching = async () => {
  setIsProcessing (true);
try {
  const response = await supabase.functions.invoke ('job-talent-matcher', {
  body: {
  jobId 
}
});
// Refresh the matches list await fetchMatches () 
}catch (error) {
  
}finally {
  setIsProcessing (false) 
}
};
useEffect ( () => {
  fetchMatches () 
}, [jobId]);
return {
  matches;
isLoading;
isProcessing;
triggerAIMatching 
}
}