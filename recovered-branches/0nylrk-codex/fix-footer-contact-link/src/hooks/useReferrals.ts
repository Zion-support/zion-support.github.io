 export function useReferrals () {
  const {
  user 
}= useAuth ();
const [referralCode, setReferralCode] = useState<ReferralCode | null> (null);
const [isLoading, setIsLoading] = useState (true);
const [referrals, setReferrals] = useState<Referral[]> ([]);
const [rewards, setRewards] = useState<ReferralReward[]> ([]);
const [stats, setStats] = useState<ReferralStats> ({
  totalReferrals: 0;
pendingReferrals: 0;
completedReferrals: 0;
totalRewards: 0 
});
useEffect ( () => {
  if (user) {
  fetchReferralCode ();
fetchReferralStats ();
fetchReferrals ();
fetchRewards () 
}
}, [user]);
const fetchReferralCode = async () => {
  try {
  setIsLoading (true);
const {
  data, error 
}= await supabase 
}setReferralCode (data) 
}catch (error) {
  
}finally {
  setIsLoading (false) 
}
};
const fetchReferrals = async () => {
  try {
  if (!user) return;
data, error 
}= await supabase .from ('referrals') .select ('*') .eq ('referrer id', user.id) if (error) throw error;
}
};
const fetchRewards = async () => {
  try {
  if (!user) return;
data, error 
}= await supabase .from ('referral rewards') .select ('*') .eq ('user id', user.id) if (error) throw error;
}
};
const fetchReferralStats = async () => {
  try {
  if (!user) return;
data: referrals, error: refError 
}= await supabase .from ('referrals') .select ('id, status') .eq ('referrer id', user.id);
if (refError) throw refError;
//Get rewards const {
  data: rewards, error: rewardsError 
}= await supabase .from ('referral rewards') .select ('amount') .eq ('user id', user.id);
if (rewardsError) throw rewardsError;
//Calculate stats 
}
};
try {
  if (!user) {
  toast ({
  return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}if (error) throw error;
}
};
//Get the referral link for the current user const baseUrl = window.location.origin;
return `$ {
  baseUrl 
}/?ref=$ {
  referralCode.code 
}` 
};
//Copy the referral link to clipboard const copyReferralLink = () => {
  const link = getReferralLink ();
navigator.clipboard.writeText (link);
toast ({
  
}
};
//Share on social media platforms return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
}