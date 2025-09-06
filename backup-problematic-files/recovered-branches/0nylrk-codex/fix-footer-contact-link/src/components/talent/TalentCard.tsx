
=======
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",;
import { useNavigate } from "react-router-dom",;
import { TalentProfile } from "@/types/talent",;
;
export interface TalentCardProps {;
  talent:TalentProfile,;
  onViewProfile:(id:string) => void,;
  onRequestHire:(talent:TalentProfile) => void,;
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
;
  const handleToggleSave = (e:React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onToggleSave) {;
      onToggleSave(talent.id, !isSaved),;
    }
  },;
;
  // Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice(0, 5) || [],;
;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>;
      <div className="p-6">;
        <div className="flex items-start">;
          {/* Avatar */}
          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
<<<<<<< HEAD

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

            </Button>;
          </div>;
        </div>;
      </div>;

