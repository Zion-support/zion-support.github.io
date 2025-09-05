 export function useSavedTalents () {
  const {
  isAuthenticated, userDetails 
}= useAuthStatus ();
const [savedTalents, setSavedTalents] = useState<TalentProfile[]> ([]);
const [savedTalentIds, setSavedTalentIds] = useState<string[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const fetchSavedTalents = async () => {
  if (!isAuthenticated || !userDetails.id) {
  setIsLoading (true);
try {
  //Get saved talent IDs const {
  data: savedData, error: savedError 
}= await supabase .from ('saved talents') .select ('talent id') .eq ('user id', userDetails.id);
if (savedError) throw savedError;
if (talentIds.length > 0) {
  //Fetch full talent profiles for saved talents const {
  data: talentData, error: talentError 
}= await supabase .from ('talent profiles') .select ('*') .in ('id', talentIds);
if (talentError) throw talentError;
}finally {
  setIsLoading (false) 
}
};
}, [isAuthenticated, userDetails.id]);
//Toggle save talent const toggleSaveTalent = async (talent: TalentProfile) => {
  if (!isAuthenticated || !userDetails.id || !talent.id) {
  toast ({
  return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}try {
  if (isSaved) {
  //Remove from saved talents const {
  error 
}= await supabase .from ('saved talents') .delete () .eq ('user id', userDetails.id) .eq ('talent id', talent.id);
if (error) throw error;
setSavedTalents (prev => prev.filter (t => t.id !== talent.id) );
setSavedTalentIds (prev => prev.filter (id => id !== talent.id) );
}else {
  //Add to saved talents const {
  error 
}= await supabase .from ('saved talents') .insert ({
  user id: userDetails.id;
talent id: talent.id 
});
setSavedTalents (prev => [...prev, talent]);
setSavedTalentIds (prev => [...prev, talent.id]);
}
}catch (error) {
  console.error ('Error toggling saved talent:', error);
toast ({
  
}
};
// Check if talent is saved 
}