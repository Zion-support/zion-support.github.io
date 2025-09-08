talent: TalentProfile
  onViewProfile: (id: string) => void
  onRequestHire: (talent: TalentProfile) => void
  isSaved: boolean
  onToggleSave: (id: string, isSaved: boolean) => void



import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Star, MapPin, Clock, ArrowRight, CheckCircle2} from "lucide-react";
import {Link} from "react-router-dom";
import {TalentProfile} from "@/types/talent";


  talent;
  onViewProfile;
  onRequestHire;
  isSaved;
  onToggleSave;



  isAuthenticated;
}: TalentCardProps) {;
  const handleViewProfile = () => {;
    if (onViewProfile) {;

      onViewProfile(talent && talent.id);
    }
  };

  const handleRequestHire = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
    }

  };

  const handleToggleSave = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
    if (onToggleSave) {;
      onToggleSave(talent && talent.id, !isSaved);
    }
  };

  // Extract skills - limit to 5 for display;
  const skills = talent && talent.skills?.slice(0, 5) || [];


  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>;
      <div className="p-6">;

        <div className="flex items-start">;
          {/* Avatar */}


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
            </div>;
            {talent && talent.is_verified && (;"
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;"
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}



                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"




            {/* Location & Availability */}

            <div className="mt-2 flex flex-wrap gap-3 text-sm">;
              {talent && talent.location && (;"
                <div className="flex items-center text-zion-slate-light">;"
                  <MapPin className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.location}</span>;
                </div>;
              )}
              {talent && talent.availability_type && (;"
                <div className="flex items-center text-zion-slate-light">;"
                  <Clock className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.availability_type}</span>;


          </div>;

          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                </span>;

              )}
            </div>;
          </div>;
        )}


            )}
            <Button"
              size="sm""
              variant="ghost"

              onClick={handleViewProfile}

