<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx

=======
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",;
import { useNavigate } from "react-router-dom",;
import { TalentProfile } from "@/types/talent",;
=======
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/TalentCard.tsx
;
export interface TalentCardProps {;
  talent:TalentProfile,;
  onViewProfile:(id:string) => void,;
  onRequestHire:(talent:TalentProfile) => void,;
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
  isAuthenticated:boolean;
}
;
const TalentCardComponent = ({;
  talent,;
  onViewProfile,;
  onRequestHire,;
  isAuthenticated;
} TalentCardProps) => {;
  const router = useRouter(),;
  ;
  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;
    router.push(`/talent/${talent.id}`),;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/TalentCard.tsx
    ;
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(talent.id),;    }
  },;
;
  const handleRequestHire = (e:React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
    }
  },;
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
  // Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice(0, 5) || [],;
;
  return (;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>;
=======
    <Card;
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple";
      onClick={handleViewProfile}
      tabIndex={0}
    >;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/TalentCard.tsx
      <div className="p-6">;
        <div className="flex items-start">;
          {/* Avatar */}
          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx

                </div>;
              )}
            </div>;
          </div>;
        </div>;

            </div>;
          </div>;
        )}
        ;
        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">;
          <div>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx

=======
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/TalentCard.tsx
            </Button>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/TalentCard.tsx

=======
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
//Also call the onViewProfile callback if provided </div>) ;
}</div> <span >{;
  talent.availability type ;
}</span> </div>) ;
}</div> </div> </div> <span key= {;
  index ;
}className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light" >{;
  skill ;
}</span>) ) ;
}+ {;
  (talent.skills?.length || 0) - 5 ;
}more </span>) ;
}</div> </div>) ;
:temp_broken_files/talent/TalentCard.tsx
}$ {;"  talent.hourly rate ";"}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) : (<div className="text-zion-slate-light" >Rate not specified</div>) ";"}</div> <Button size="sm" variant="secondary" onClick={;"  handleRequestHire ";"}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) ";"}<Button ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) ;
};""
}$ {;
  talent.hourly rate ";
}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) : (<div className="text-zion-slate-light" >Rate not specified</div>) ";
}</div> <Button size="sm" variant="secondary" onClick={;
  handleRequestHire ";
}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) ";
}<Button ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) ;
};
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/TalentCard.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/TalentCard.tsx
