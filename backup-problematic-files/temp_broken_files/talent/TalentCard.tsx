<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx

=======
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",;
import { useNavigate } from "react-router-dom",;
import { TalentProfile } from "@/types/talent",;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from 'react',;
import { useRouter } from 'next/router',;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FavoriteButton } from "@/components/FavoriteButton",;
import { TalentProfile } from "@/types/talent",;
import { RatingStars } from '@/components/RatingStars',;
import { useAuth } from '@/context/auth/AuthProvider',;
import { useCart } from '@/context/CartContext',;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/TalentCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
export interface TalentCardProps {;
  talent:TalentProfile,;
  onViewProfile:(id:string) => void,;
  onRequestHire:(talent:TalentProfile) => void,;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx
  isSaved:boolean,;
  onToggleSave:(id:string, isSaved:boolean) => void,;
  isAuthenticated:boolean;
}
;
export function TalentCard({;
  talent,;
  onViewProfile,;
  onRequestHire,;
  isSaved,;
  onToggleSave,;
  isAuthenticated;
} TalentCardProps) {;
  const navigate = useNavigate(),;
  ;
  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;
    navigate(`/talent/${talent.id}`),;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from 'react';
import { useRouter } from 'next/router';
import { Badge } from "@/components/ui/badge";""
import { Button } from "@/components/ui/button";""
import { Card, CardContent, CardFooter } from "@/components/ui/card";""
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FavoriteButton } from "@/components/FavoriteButton";""
import { TalentProfile } from "@/types/talent";""
import { RatingStars } from '@/components/RatingStars';
import { useAuth } from '@/context/auth/AuthProvider';
import { useCart } from '@/context/CartContext';
;
export interface TalentCardProps {;
  talent: TalentProfile;,;
  onViewProfile: (id:string) => void;,;
  onRequestHire: (talent:TalentProfile) => void;,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  isAuthenticated:boolean;
}
const TalentCardComponent = ({;
  talent,;
  onViewProfile,;
  onRequestHire,;
  isAuthenticated;)
} TalentCardProps) => {;
  const router = useRouter(),;
  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;
    router.push(`/talent/${talent.id}`),;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/TalentCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    ;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(talent.id),;    }
  },;
  const handleRequestHire = (e:React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
<<<<<<< HEAD
    }
  },;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx
;
  const handleToggleSave = (e:React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onToggleSave) {;
      onToggleSave(talent.id, !isSaved),;
    }
  },;
;
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/TalentCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice(0, 5) || [],;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <Card;
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple";"
      onClick={handleViewProfile}
      tabIndex={0}
    >;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/TalentCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className="p-6">;
        <div className="flex items-start">;
          {/* Avatar */}
          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx

                </div>;
              )}
            </div>;
          </div>;
        </div>;

=======
              {talent.profile_picture_url ? (;
=======
"
      <div className="p-6">;"
</div>"
        <div className="flex items-start">;"
          <div className="relative mr-4">;"
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;"
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <img;
                  src={talent.profile_picture_url}
                  alt={talent.full_name}"
                  className="w-full h-full object-cover";""
                  loading="lazy";"
                />;
</img>"
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;"
                </div>;
            </div>;"
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">;"
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;"
</CheckCircle2>)
              </div>;            )}
          <div className="flex-1">;"
            <div className="flex justify-between items-start">;"
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>;""
              <FavoriteButton itemId={talent.id} className="-mt-1" />;"

            <p className="text-white font-medium">{talent.professional_title}</p>;""
            <div className="mt-2 flex flex-wrap gap-3 text-sm">;"
                <div className="flex items-center text-zion-slate-light">;"
                  <MapPin className="h-4 w-4 mr-1" />;"

                  <span>{talent.location}</span>;
                  <Clock className="h-4 w-4 mr-1" />;"

                  <span>{talent.availability_type}</span>;
                </div>;              )}
          <div className="mt-4">;"
            <div className="flex flex-wrap gap-2">;"
                <span ;
                  key={index}"
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light";"
                >;                  {skill}
</span>
                </span>;"
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;"
                </span>;              )}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </div>;
          </div>;
        )}
        ;
        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">;
          <div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/TalentCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </Button>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </Card>;
  );
},;
;
export const TalentCard = React.memo(TalentCardComponent),;
TalentCard.displayName = 'TalentCard',; export interface TalentCardProps {;
  talent: TalentProfile;
onViewProfile: (id: string) => void;
onRequestHire: (talent: TalentProfile) => void;
isAuthenticated: boolean ;
}const TalentCardComponent = ({;
  talent;
onViewProfile;
onRequestHire;
isAuthenticated ;
}: TalentCardProps) => {;
  const router = useRouter ();
//Navigate directly to the talent profile router.push (`/talent/$ {;
  talent.id ;
}`);
=======
        <div className="mt-5 flex items-center justify-between">;"
          <div>;
              <div className="text-white font-bold">;"
                <span className="text-zion-slate-light font-normal">/hr</span>;"
              <div className="text-zion-slate-light">Rate not specified</div>;"
          <div className="flex items-center gap-2">;"
              <Button;"
                size="sm";""
                variant="secondary";"
                onClick={handleRequestHire}"
                className="bg-zion-purple hover:bg-zion-purple-light text-white";"

              variant="ghost";"
              onClick={(e) => {;
              View <ArrowRight className="ml-1 h-4 w-4" />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
//Also call the onViewProfile callback if provided </div>) ;
}</div> <span >{;
}</span> </div>) ;
}</div> </div> </div> <span key= {;
  index ;"
}className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light" >{;"
}</span>) ) ;
}more </span>) ;
}</div> </div>) ;
:temp_broken_files/talent/TalentCard.tsx
<<<<<<< HEAD
}$ {;"  talent.hourly rate ";"}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) : (<div className="text-zion-slate-light" >Rate not specified</div>) ";"}</div> <Button size="sm" variant="secondary" onClick={;"  handleRequestHire ";"}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) ";"}<Button ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) ;
=======
}$ {;"  talent.hourly rate ";"}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) : (<div className="text-zion-slate-light" >Rate not specified</div>) ";"}</div> <Button size="sm" variant="secondary" onClick={;"  handleRequestHire ";"}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) ";"}<Button ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};""
}$ {;
  talent.hourly rate ";
}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) : (<div className="text-zion-slate-light" >Rate not specified</div>) ";
}</div> <Button size="sm" variant="secondary" onClick={;
  handleRequestHire ";
}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) ";
<<<<<<< HEAD
}<Button ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) ;
};
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/TalentCard.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/TalentCard.tsx
=======
}<Button ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) 
};
"
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/TalentCard.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
ursor/fix-lint-push-and-merge-to-main-e10e: src/components/talent/TalentCard.tsx;
}</div> </div>) ;"
}$ {;"  talent.hourly rate ";"}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) : (<div className="text-zion-slate-light" >Rate not specified</div>) ";"}</div> <Button size="sm" variant="secondary" onClick={;"  handleRequestHire ";"}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire ) ";"}<Button ml-1 h-4 w-4" />  </div> </div> </div> ) ;""
}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) : (<div className="text-zion-slate-light" >Rate not specified</div>) ";""
}</div> <Button size="sm" variant="secondary" onClick={;""
  handleRequestHire ";""
}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire ) ";""
}<Button ml-1 h-4 w-4" />  </div> </div> </div> ) ;""`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
