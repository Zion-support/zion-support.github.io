<<<<<<< HEAD:src/components/profile/TalentCard.tsx

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { TalentProfile } from "@/types/talent";

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
=======
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";
<<<<<<<< HEAD:src/components/talent/TalentCard.tsx
import { useAppDispatch } from "@/store/hooks";
import { addToWishlist, getApiUrl } from "@/store/wishlistSlice";

========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
export interface TalentCardProps {
  talent: TalentProfile;
  onBook: (talent: TalentProfile) => void;
  onMessage: (talent: TalentProfile) => void;
  isAuthenticated: boolean;
}
const TalentCardComponent = ({
  talent,
  onBook,
  onMessage,
  isAuthenticated
}: TalentCardProps) => {
  const navigate = useNavigate();
<<<<<<<< HEAD:src/components/talent/TalentCard.tsx
  const location = useLocation();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  
  const handleViewProfile = () => {
    // Navigate directly to the talent profile
    navigate(`/talent/${talent.id}`);
    
    // Also call the onViewProfile callback if provided
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
    if (onViewProfile) {
      onViewProfile(talent.id);
    }
  };

<<<<<<< HEAD:src/components/profile/TalentCard.tsx
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
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>
=======
========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
  const handleMessage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onMessage) {
      onMessage(talent);
    } else {
      navigate(`/messages?talentId=${talent.id}`);
    }
  };
  const handleBook = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBook) {
      onBook(talent);
    }

    dispatch(addToWishlist({ id: talent.id, type: 'talent', data: talent }));
    fetch(`${getApiUrl()}/wishlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: talent.id, type: 'talent' })
    }).catch(() => {});
  };
  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) || [];
  return (
    <Card
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple"
      onClick={handleViewProfile}
      tabIndex={0}
    >
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
      <div className="p-6">
        <div className="flex items-start">
          {/* Avatar */}
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (
                <img
                  src={talent.profile_picture_url}
<<<<<<< HEAD:src/components/profile/TalentCard.tsx
                  alt={`Avatar of ${talent.full_name}`}
=======
<<<<<<<< HEAD:src/components/talent/TalentCard.tsx
                  alt={`Avatar of ${talent.full_name}`}
========
                  alt={talent.full_name}
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
                  {talent.full_name?.charAt(0) || "T"}
                </div>
              )}
            </div>
            {talent.is_verified && (
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
              </div>
            )}
          </div>
<<<<<<< HEAD:src/components/profile/TalentCard.tsx
          
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
          {/* Main Info */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>
              <Button
                variant="ghost"
                size="sm"
<<<<<<< HEAD:src/components/profile/TalentCard.tsx
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
                onClick={handleToggleSave}
              >
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>
              </Button>
            </div>
            <p className="text-zion-cyan font-medium">{talent.professional_title}</p>
            
=======
                aria-label="save-to-wishlist"
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
                onClick={handleToggleSave}
              >
                <Heart className={`h-5 w-5 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>
              </Button>
            </div>
            <p className="text-white font-medium">{talent.professional_title}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
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
<<<<<<< HEAD:src/components/profile/TalentCard.tsx
        
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
<<<<<<< HEAD:src/components/profile/TalentCard.tsx
                <span 
=======
                <span
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
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
<<<<<<< HEAD:src/components/profile/TalentCard.tsx
        
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
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
<<<<<<< HEAD:src/components/profile/TalentCard.tsx
          
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
                size="sm"
                variant="secondary"
<<<<<<< HEAD:src/components/profile/TalentCard.tsx
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
=======
                onClick={handleBook}
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Book
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
<<<<<<< HEAD:src/components/profile/TalentCard.tsx
              onClick={handleViewProfile}
              className="text-zion-cyan hover:text-white hover:bg-zion-blue-light"
            >
              View <ArrowRight className="ml-1 h-4 w-4" />
=======
              onClick={handleMessage}
              className="text-zion-cyan hover:text-white hover:bg-zion-blue-light"
            >
              Message
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
<<<<<<< HEAD:src/components/profile/TalentCard.tsx
}
=======
};
export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentCard.tsx
