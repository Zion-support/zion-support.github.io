
import { TalentCardAvatar } from "./TalentCardAvatar",;
import { TalentCardAvailability } from "./TalentCardAvailability",;

;
interface TalentCardHeaderProps {;
  fullName: string;,;
  professionalTitle: string;,;
  profilePicture?:string,;
  availabilityType: string;,;
  yearsExperience:number;
}


  yearsExperience;)
} TalentCardHeaderProps) {;
  return (;"
    <div className="flex items-start gap-4 mb-4">;"
</div>
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />;




          <TalentCardAvailability availabilityType={availabilityType} />;

        </div>;"
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>;"
      </div>;
  return (<div className="flex items-start gap-4 mb-4" > <TalentCardAvatar profilePicture= {;"
}fullName= {;"  fullName ";"}/> <div className="flex-1" > <div className="flex items-center justify-between" > <h3 className="text-lg font-semibold text-white flex items-center gap-1" > {;"
  /* AI score could be used for verification badge */ ;"}{";"  yearsExperience > 5 && (<BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" /> ;"
}</h3> <TalentCardAvailability availabilityType= {;


