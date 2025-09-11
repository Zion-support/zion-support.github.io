
  talent: TalentProfile
  onViewProfile: (id: string) => void
  onRequestHire: (talent: TalentProfile) => void
  isSaved: boolean
  onToggleSave: (id: string, isSaved: boolean) => void

  isAuthenticated: boolean
}
export function TalentCard({







import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Star, MapPin, Clock, ArrowRight, CheckCircle2} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {TalentProfile} from "@/types/talent";
export function TalentCard({;
  talent;
  onViewProfile;
  onRequestHire;
  isSaved;
  onToggleSave;
  isAuthenticated
}: TalentCardProps) {

  const navigate = useNavigate();
  const handleViewProfile = () => {
    // Navigate directly to the talent profile
    navigate(`/talent/${talent.id}`);
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(talent.id)
    }
  }
  const handleRequestHire = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent)
    }
  }
  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation()
    if (onToggleSave) {
      onToggleSave(talent.id, !isSaved)
    }
  }
  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) |[];
import { useNavigate } from "react-router-dom",
import { TalentProfile } from "@/types/talent",
export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean
  };
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",;
import { useNavigate } from "react-router-dom",;
import { TalentProfile } from "@/types/talent",;



export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire: (talent: TalentProfile) => void,;
  isSaved: boolean,;
  onToggleSave: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean;
}
export function TalentCard(): any ({;

export function TalentCard(): any ({;

  talent;
  onViewProfile;
  onRequestHire;
  isSaved;
  onToggleSave;
  isAuthenticated;
}: TalentCardProps) {;
  const navigate = useNavigate();

  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;
    navigate(`/talent/${talent && talent.id}`);

  // Extract skills - limit to 5 for display;
  const skills = talent && talent.skills?.slice(0, 5) || [];

            {/* Location & Availability */}
            <div className="mt-2 flex flex-wrap gap-3 text-sm">;
              {talent && talent.location && (;
                <div className="flex items-center text-zion-slate-light">;
                  <MapPin className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.location}</span>;
                </div>;
              )}
              {talent && talent.availability_type && (;
                <div className="flex items-center text-zion-slate-light">;
                  <Clock className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.availability_type}</span>;
                </div>;
              )}


            </div>;
          </div>;
        </div>;
        {/* Skills */}
        {skills && skills.length > 0 && (;
          <div className="mt-4">;
            <div className="flex flex-wrap gap-2">;
              {skills && skills.map((skill, index) => (;                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;
                  {skill}
                </span>;
              ))}

              {(talent && talent.skills?.length || 0) > 5 && (;
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent && talent.skills?.length || 0) - 5} more;
                </span>;

        {/* Skills */}
        {skills && skills.length > 0 && (;
          <div className="mt-4">;
            <div className="flex flex-wrap gap-2">;
              {skills && skills.map((skill, index) => (;                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;
                  {skill}
                </span>;
              ))}

              {(talent && talent.skills?.length || 0) > 5 && (;
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent && talent.skills?.length || 0) - 5} more;
                </span>;

              )}
            </div>;
          </div>;
        )}


        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent && talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent && talent.hourly_rate}
            )}

          </div>;

          <div className="flex items-center gap-2">;
            {isAuthenticated && (;

              onClick={(e) => {

                e.stopPropagation(),

