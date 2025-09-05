 export function useInterviews () {
  const [interviews, setInterviews] = useState<Interview[]> ([]);
const [isLoading, setIsLoading] = useState (false);
const [error, setError] = useState<string | null> (null);
const {
  user 
}= useAuth ();
if (!user) {
  toast ({
  return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}setIsLoading (true);
setError (null);
try {
  //Insert the interview into the database const {
  data, error: insertError 
}= await supabase .from ('interviews') .insert ({
  client id: interviewRequest.client id, talent id: interviewRequest.talent id, scheduled date: interviewRequest.scheduled date, duration minutes: interviewRequest.duration minutes, notes: interviewRequest.notes, meeting link: interviewRequest.meeting link, meeting platform: interviewRequest.meeting platform, interview type: interviewRequest.interview type, title: interviewRequest.title, status: 'requested' 
}) .select ('*') .single ();
}data.id);
}finally {
  setIsLoading (false) 
}
};
//Fetch interviews for the current user (as client or talent) const fetchInterviews = async () : Promise<Interview[]> => {
  if (!user?.id) {
  setInterviews ([]);
return [] 
}setError (null);
try {
  //Get interviews where the user is either the client or the talent const {
  data, error: fetchError 
}= await supabase .from ('interviews') .select (`*;
clients: client id (id, display name, avatar url);
talents:talent id (id, full name, profile picture url) `) 
}//Transform the data to match Interview type const formattedInterviews = data.map ( (interview: any) : Interview => ({
  id: interview.id;
client id: interview.client id;
talent id: interview.talent id;
scheduled date: interview.scheduled date;
end time: interview.end time || '';
duration minutes: interview.duration minutes;
status: interview.status;
notes: interview.notes;
meeting link: interview.meeting link;
meeting platform: interview.meeting platform;
created at: interview.created at;
updated at: interview.updated at;
title: interview.title;
interview type: interview.interview type;
client name: interview.clients?.display name;
talent name: interview.talents?.full name;
client avatar: interview.clients?.avatar url;
talent avatar: interview.talents?.profile picture url 
}) );
setInterviews (formattedInterviews);
return formattedInterviews;
}catch (err: any) {
  
}finally {
  setIsLoading (false) 
}
};
response: InterviewResponse) : Promise<boolean> => {
  if (!user?.id) {
  toast ({
  return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}setIsLoading (true);
setError (null);
try {
  //Update the interview status const {
  error: updateError 
}= await supabase .from ('interviews') 
}data: interview, error: fetchError 
}= await supabase .from ('interviews') .select ('*') .eq ('id', interviewId) .single ();
}//Create notification for client let notificationType = 'interview confirmed';
let title = 'Interview Confirmed';
let message = `Your interview request for $ {
  interview.scheduled date 
}has been confirmed`;
if (response.status === 'declined') {
  notificationType = 'interview declined';
title = 'Interview Declined';
message = `Your interview request has been declined` 
}else if (response.status === 'rescheduled') {
  notificationType = 'interview rescheduled';
title = 'Interview Rescheduled';
message = `Your interview has been rescheduled to $ {
  response.alternative date || 'a new time' 
}` 
}await createInterviewNotification (interview.client id;
notificationType;
title;
message;
interviewId);
//Refresh the interviews list 
}finally {
  setIsLoading (false) 
}
};
try {
  await supabase.from ('notifications') .insert ({
  
}
};
//Cancel an interview (either client or talent can cancel) const cancelInterview = async (interviewId: string) : Promise<boolean> => {
  if (!user?.id) return false;
setError (null);
try {
  //Get the interview first to check permissions and get IDs for notifications const {
  data: interview, error: fetchError 
}= await supabase .from ('interviews') .select ('*') .eq ('id', interviewId) .single ();
}error: updateError 
}= await supabase .from ('interviews') //Determine who to notify const notifyUserId = interview.client id === user.id ? interview.talent id : interview.client id;
//Create notification for the other party await createInterviewNotification (notifyUserId;
interviewId);
// Refresh the interviews list 
}finally {
  setIsLoading (false) 
}
};
return {
  interviews;
isLoading;
error;
requestInterview;
fetchInterviews;
respondToInterview;
cancelInterview 
}
}