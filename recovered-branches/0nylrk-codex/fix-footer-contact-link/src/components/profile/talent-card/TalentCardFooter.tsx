 interface TalentCardFooterProps {
  profile: TalentProfile;
onViewProfile: (id: string) => void;
onRequestHire?: (profile: TalentProfile) => void 
}export function TalentCardFooter ({
  profile, onViewProfile, onRequestHire 
}: TalentCardFooterProps) {
  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
const {
  userDetails 
}= useAuthStatus ();
const navigate = useNavigate ();
//Create a compatible UserProfile from UserDetails const userProfile: UserProfile = {
  id: userDetails?.id;
displayName: userDetails?.name || '';
email: userDetails?.email || '';
userType: '';
profileComplete: false;
createdAt: new Date () .toISOString ();
updatedAt: new Date () .toISOString () 
};
//Handle request to hire const handleRequestHire = (e: React.MouseEvent) => {
  e.stopPropagation ();
if (onRequestHire) {
  onRequestHire (profile) 
}else {
  //Open hire modal directly if no handler provided setIsHireModalOpen (true) 
}
};
//Handle view profile const handleViewProfile = (e: React.MouseEvent) => {
  e.stopPropagation ();
profile.id || '' 
}`);
//Also call the onViewProfile callback if provided <div> {
  profile.hourly rate ? (<div> <span className="text-zion-slate-light text-xs" >Hourly Rate</span> <div className="text-white font-bold" >$ {
  profile.hourly rate 
}/hr</div> </div>) : (</div>) 
}</div> > Hire </Button> <Button > View <ExternalLink className="h-3 w-3 ml-1" /> </Button> </div> </div> {
  /* Hire Request Modal */ 
}<HireRequestModal talent= {
  profile 
}isOpen= {
  isHireModalOpen 
}onClose= {
  () => setIsHireModalOpen (false) 
}userDetails= {
  userProfile 
}/> </>) 
}