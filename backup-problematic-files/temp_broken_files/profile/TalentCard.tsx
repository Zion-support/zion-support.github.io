 export interface TalentCardProps {;
  talent: TalentProfile;
onViewProfile: (id: string) => void;
onRequestHire: (talent: TalentProfile) => void;
isSaved: boolean;
onToggleSave: (id: string, isSaved: boolean) => void;
isAuthenticated: boolean ;
export function TalentCard ({;
  talent;
onViewProfile;
onRequestHire;
isSaved;
onToggleSave;
isAuthenticated ;
 TalentCardProps) {;
  const [avatarError, setAvatarError] = useState (false);
if (onViewProfile) {;
  return (<Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={;"  handleViewProfile ";"}> <div className="p-6" > <div className="flex items-start" > <div className="relative mr-4" > 
more </span>) ;"}</div> </div>) ";"}<div className="mt-5 flex items-center justify-between"> <div> {";"  talent.hourly rate ? (<div className="text-white font-bold"> $ {;"  talent.hourly rate ";"}<span className="text-zion-slate-light font-normal">/hr</span> </div>) : (<div className="text-zion-slate-light">Rate not specified</div>) ";"}</div> <Button size="sm" variant="secondary" onClick={;"  handleRequestHire ";"}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) ";"}<Button > View <ArrowRight className="ml-1 h-4 w-4" /> </Button> </div> </div> </div> 