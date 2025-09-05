 export interface HireRequestData {
  talent: {
  id: string;
full name: string;
professional title: string;
email?: string 
};
requester: {
  name: string;
email: string;
id?: string 
};
project: {
  overview: string;
timeline: string;
budgetMin: number;
budgetMax: number 
}
}export function useHireRequest () {
  const [isSubmitting, setIsSubmitting] = useState (false);
const [error, setError] = useState<string | null> (null);
const submitHireRequest = async (requestData: HireRequestData) => {
  setIsSubmitting (true);
setError (null);
try {
  //Call the edge function to process the hire request const {
  data: response, error 
}= await supabase.functions.invoke ('process-hire-request', {
  body: requestData 
});
// Show success message return {
  success: true, requestId: response?.request id 
}
}catch (error) {
  ? error.message : "There was a problem submitting your request. Please try again.";
toast ({
  return {
  success: false, error: errorMessage 
}
}finally {
  setIsSubmitting (false) 
}
};
return {
  submitHireRequest;
isSubmitting;
error 
}
}