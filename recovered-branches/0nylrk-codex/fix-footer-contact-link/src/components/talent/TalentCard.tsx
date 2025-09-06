import React from 'react';

<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",
import { useNavigate } from "react-router-dom";
import { TalentProfile } from "@/types/talent";
export interface TalentCardProps {

  talent: TalentProfile
  onViewProfile: (id: string) => void
  onRequestHire: (talent: TalentProfile) => void
  isSaved: boolean
  onToggleSave: (id: string, isSaved: boolean) => void

  isAuthenticated: boolean
=======
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { TalentProfile } from "@/types/talent";
export interface TalentCardProps {


  isAuthenticated: boolean
}
export function TalentCard({
=======
<<<<<<< HEAD
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Star, MapPin, Clock, ArrowRight, CheckCircle2} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {TalentProfile} from "@/types/talent";
=======
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",
import { useNavigate } from "react-router-dom",
import { TalentProfile } from "@/types/talent",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean
<<<<<<< HEAD
}

export function TalentCard({;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
  }
  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) |[];
=======
import { useNavigate } from "react-router-dom",
import { TalentProfile } from "@/types/talent",
export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean
=======
  };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
export function TalentCard({
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
<<<<<<< HEAD
  }
  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) |[];
=======
  },
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


  // Extract skills - limit to 5 for display;
  const skills = talent && talent.skills?.slice(0, 5) || [];

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>;
      <div className="p-6">;
        <div className="flex items-start">;
          {/* Avatar */}
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (
                <img
                  src={talent.profile_picture_url}
                  alt={talent.full_name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
                  {talent.full_name?.charAt(0) |"T"}
                </div>
              )}
            </div>;
            {talent && talent.is_verified && (;
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}
          </div>
          {/* Main Info */}
          <div className="flex-1">;
            <div className="flex justify-between items-start">;
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
<<<<<<< HEAD
                onClick={handleToggleSave}
              >
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>
              </Button>
            </div>
            <p className="text-zion-cyan font-medium">{talent.professional_title}</p>
=======

                onClick={handleToggleSave}>;
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />;
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>;
              </Button>;
            </div>;
            <p className="text-zion-cyan font-medium">{talent && talent.professional_title}</p>;


=======

            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;
                  {skill}
                </span>;
              ))}
              {(talent.skills?.length |0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length |0) - 5} more
                </span>
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
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            )}
          </div>
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                Hire;
              </Button>;
            )}
            <Button
              size="sm"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();

                handleViewProfile()
              }}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light"
            >
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
            </Button>;
          </div>;
        </div>;
      </div>;
    </Card>;
  );
}
    </Card>);
}
