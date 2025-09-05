
import { Button } from &quot;@/components/ui/button&quot;;
import { Card } from &quot;@/components/ui/card&quot;;
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from &quot;lucide-react&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;

export interface TalentCardProps {
  talent: TalentProfile;
  onViewProfile: (id: string) => void;
  onRequestHire: (talent: TalentProfile) => void;
  isSaved: boolean;
  onToggleSave: (id: string, isSaved: boolean) => void;
  isAuthenticated: boolean;
}

export function TalentCard({
  talent,
  onViewProfile,
  onRequestHire,
  isSaved,
  onToggleSave,
  isAuthenticated
}: TalentCardProps) {
  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile(talent.id);
    }
  };

  const handleRequestHire = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRequestHire) {
      onRequestHire(talent);
    }
  };

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleSave) {
      onToggleSave(talent.id, !isSaved);
    }
  };

  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) || [];

  return (
    <Card className=&quot;overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer&quot; onClick={handleViewProfile}>
      <div className=&quot;p-6&quot;>
        <div className=&quot;flex items-start&quot;>
          {/* Avatar */}
          <div className=&quot;relative mr-4&quot;>
            <div className=&quot;w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light&quot;>
              {talent.profile_picture_url ? (
                <img 
                  src={talent.profile_picture_url} 
                  alt={talent.full_name} 
                  className=&quot;w-full h-full object-cover&quot; 
                />
              ) : (
                <div className=&quot;w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold&quot;>
                  {talent.full_name?.charAt(0) || &quot;T&quot;}
                </div>
              )}
            </div>
            {talent.is_verified && (
              <div className=&quot;absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full&quot;>
                <CheckCircle2 className=&quot;w-5 h-5 text-zion-cyan&quot; />
              </div>
            )}
          </div>
          
          {/* Main Info */}
          <div className=&quot;flex-1&quot;>
            <div className=&quot;flex justify-between items-start&quot;>
              <h3 className=&quot;text-lg font-bold text-white&quot;>{talent.full_name}</h3>
              <Button
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                className=&quot;p-1 h-auto text-zion-slate-light hover:text-zion-cyan&quot;
                onClick={handleToggleSave}
              >
                <Star className={`h-5 w-5 ${isSaved ? &quot;fill-yellow-400 text-yellow-400&quot; : ""}`} />
                <span className="sr-only&quot;>{isSaved ? &quot;Saved&quot; : &quot;Save"}</span>
              </Button>
            </div>
            <p className="text-zion-cyan font-medium">{talent.professional_title}</p>
            
            {/* Location & Availability */}
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
              )}
              {talent.availability_type && (
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{talent.availability_type}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {skill}
                </span>
              ))}
              {(talent.skills?.length || 0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            {talent.hourly_rate ? (
              <div className="text-white font-bold">
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>
              </div>
            ) : (
              <div className="text-zion-slate-light">Rate not specified</div>
            )}
          </div>
          
          <div className="flex items-center gap-2&quot;>
            {isAuthenticated && (
              <Button
                size=&quot;sm&quot;
                variant=&quot;secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white&quot;
              >
                Hire
              </Button>
            )}
            <Button
              size=&quot;sm&quot;
              variant=&quot;ghost"
              onClick={handleViewProfile}
              className="text-zion-cyan hover:text-white hover:bg-zion-blue-light"
            >
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
