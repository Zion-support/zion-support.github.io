import Link from "next/link";
import Image from 'next/image'; // Import next/image
import React, {_useState} from 'react'; // Import React and useState

export interface TalentCardProps {_talent: TalentProfile;
  onViewProfile: (_id: string) => void;
  onRequestHire: (_talent: TalentProfile) => void;
  isSaved: boolean;
  onToggleSave: (_id: string, _isSaved: boolean) => void;
  isAuthenticated: boolean;}

export function TalentCard(_{_talent, _onViewProfile, _onRequestHire, _isSaved, _onToggleSave, _isAuthenticated}: TalentCardProps) {_const [avatarError, _setAvatarError] = useState(false);

  const _handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile(talent.id);}
  };

  const _handleRequestHire = (_e: React.MouseEvent) => {_e.preventDefault();
    e.stopPropagation();
    if (onRequestHire) {
      onRequestHire(talent);}
  };

  const _handleToggleSave = (_e: React.MouseEvent) => {_e.preventDefault();
    e.stopPropagation();
    if (onToggleSave) {
      onToggleSave(talent.id, _!isSaved);}
  };

  const _skills = talent.skills?.slice(0, 5) || [];
  const _talentNameInitial = talent.full_name?.charAt(0) || "T";

  return (_<Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={_handleViewProfile}>
      <div className="p-6">
        <div className="flex items-start">
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative"> {_/* Added relative for Image */}
              {_talent.profile_picture_url && !avatarError ? (
                <Image
                  src={talent.profile_picture_url} 
                  alt={_talent.full_name || 'Talent Avatar'}
                  fill={_true}
                  style={_{ objectFit: 'cover'}}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
                  onError={_() => setAvatarError(true)}
                  priority={_false}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
                  {_talentNameInitial}
                </div>
              )}
            </div>
            {_talent.is_verified && (
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{_talent.full_name}</h3>
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
                onClick={_handleToggleSave}
              >
                <Star className={_`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />
                <span className="sr-only">{_isSaved ? "Saved" : "Save"}</span>
              </Button>
            </div>
            <p className="text-zion-cyan font-medium">{_talent.professional_title}</p>
            
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {_talent.location && (
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
              )}
              {_talent.availability_type && (
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{talent.availability_type}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {_skills.length > 0 && (_<div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, _index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {_skill}
                </span>
              ))}
              {_(talent.skills?.length || 0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="mt-5 flex items-center justify-between">
          <div>
            {_talent.hourly_rate ? (
              <div className="text-white font-bold">
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>
              </div>
            ) : (
              <div className="text-zion-slate-light">Rate not specified</div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {_isAuthenticated && (
              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              onClick={_handleViewProfile}
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
