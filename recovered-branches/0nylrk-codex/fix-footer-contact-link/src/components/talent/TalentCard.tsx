


export function TalentCard(): any ({;


  onToggleSave;







  const handleToggleSave = (e: React && React.MouseEvent) => {;
    if (onToggleSave) {;
      onToggleSave(talent && talent.id, !isSaved);

    }
  };





          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
              {talent && talent.profile_picture_url ? (;
                <img
                  src={talent && talent.profile_picture_url} 
                  alt={talent && talent.full_name} 
                  className="w-full h-full object-cover" 
                />;
              ) : (;
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;
                  {talent && talent.full_name?.charAt(0) || "T"}
                </div>;



















            )}




import { Button } from '@/components / ui / button';
import { Card } from '@/components / ui / card';
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from './lucide-react';
import { use_navigate } from './react-router-dom';


              View <ArrowRight className="ml - 1 h - 4 w - 4" />;
            {talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) :(;
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}
          </div>;
          ;
          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
              <Button;
                size="sm";
                variant="secondary";
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white";
              >;
                Hire;
              </Button>;
            )}
            <Button;
              size="sm";
              variant="ghost";
              onClick={(e) => {;
                e.stopPropagation(),;
                handleViewProfile(),;
              }}
              className="text-zion-cyan hover:text-white hover:bg-zion-blue-light";
            >;
              View <ArrowRight className="ml-1 h-4 w-4" />;


      </div>;
    </Card>;
  );}
 export interface TalentCardProps {
  talent: TalentProfile;
onViewProfile: (id: string) => void;
onRequestHire: (talent: TalentProfile) => void;
isSaved: boolean;
onToggleSave: (id: string, isSaved: boolean) => void;
isAuthenticated: boolean 
}export function TalentCard ({
  talent;
onViewProfile;
onRequestHire;
isSaved;
onToggleSave;
isAuthenticated 
}: TalentCardProps) {
  const navigate = useNavigate ();
//Navigate directly to the talent profile navigate (`/talent/$ {
  talent.id 
}`);
//Also call the onViewProfile callback if provided </div>) 
}</div> </Button> </div> <p className="text-zion-cyan font-medium"> {
  talent.professional title 
}</p> {
  /* Location & Availability */ 
}<div className="mt-2 flex flex-wrap gap-3 text-sm"> {
  talent.location && (<div className="flex items-center text-zion-slate-light"> <MapPin className="h-4 w-4 mr-1" /> <span> {
  talent.location 
}</span> </div>) 
}{
  talent.availability type && (<div className="flex items-center text-zion-slate-light"> <Clock className="h-4 w-4 mr-1" /> <span> {
  talent.availability type 
}</span> </div>) 
}</div> </div> </div> {
  /* Skills */ 
}{
  skills.length > 0 && (<div className="mt-4"> <div className="flex flex-wrap gap-2"> {
  skills.map ( (skill, index) => (<span key= {
  index 
}className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light" > {
  skill 
}</span>) ) 
}{
  (talent.skills?.length || 0) > 5 && (<span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan"> + {
  (talent.skills?.length || 0) - 5 
}more </span>) 
}</div> </div>) 
}{
  /* Hourly Rate & Actions */ 
}<div className="mt-5 flex items-center justify-between"> <div> {
  talent.hourly rate ? (<div className="text-white font-bold"> $ {
  talent.hourly rate 
}<span className="text-zion-slate-light font-normal">/hr</span> </div>) : (<div className="text-zion-slate-light">Rate not specified</div>) 
}</div> <Button size="sm" variant="secondary" onClick= {
  handleRequestHire 
}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) 
}<Button > View <ArrowRight className="ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) 
}
}


