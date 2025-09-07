

export function TalentCard(): any ({;




import {Button} from "@/components/ui/button";""
import {Card} from "@/components/ui/card";""
import {Star, MapPin, Clock, ArrowRight, CheckCircle2} from "lucide-react";""
import {useNavigate} from "react-router-dom";""
import {TalentProfile} from "@/types/talent";"
pr-12325
  talent;
  onViewProfile;
  onRequestHire;
  isSaved;
  onToggleSave;  isAuthenticated;
}: TalentCardProps) {;
  const navigate = useNavigate();

  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;
  onToggleSave;
  isAuthenticated;
}: TalentCardProps) {

  const navigate = useNavigate();
  const handleViewProfile = () => {
    // Navigate directly to the talent profile;
    navigate(`/talent/${talent.id}`);
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {
      onViewProfile(talent.id)
    }
  const handleRequestHire = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent)
  const handleToggleSave = (e: React.MouseEvent) => {
    if (onToggleSave) {
      onToggleSave(talent.id, !isSaved)
  // Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice(0, 5) |[];"
import { useNavigate } from "react-router-dom",""
import { TalentProfile } from "@/types/talent","
export interface TalentCardProps {
  // TODO: Implement
  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean;
  };"
import { Button } from "@/components/ui/button",;""
import { Card } from "@/components/ui/card",;""
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",;""
import { useNavigate } from "react-router-dom",;""
import { TalentProfile } from "@/types/talent",;"
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire: (talent: TalentProfile) => void,;
  isSaved: boolean,;
  onToggleSave: (id: string, isSaved: boolean) => void,;

export function TalentCard(): any ({;

)



  isAuthenticated;)
}: TalentCardProps) {;

  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;`;
pr-12325
    navigate(`/talent/${talent && talent.id}`);

    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(talent && talent.id);
    }
pr-12325
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
  const skills = talent && talent.skills?.slice(0, 5) || [];

  return (              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
                onClick={handleToggleSave}>;
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />;
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>;
              </Button>;
            </div>;
            <p className="text-zion-cyan font-medium">{talent && talent.professional_title}</p>;

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
              {skills && skills.map((skill, index) => (;
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;
                  {skill}
                </span>;
              ))}              )}
            </div>;
          </div>;
        )}                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}            )}

          </div>;

          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                Hire;
              </Button>;                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                Hire;
              </Button>;
            )}
            <Button
              size="sm"
              variant="ghost"            </Button>;
          </div>;
        </div>;
      </div>;

    </Card>);
}

  const handleToggleSave = (e: React && React.MouseEvent) => {;
    if (onToggleSave) {;
      onToggleSave(talent && talent.id, !isSaved);
  // Extract skills - limit to 5 for display;
  const skills = talent && talent.skills?.slice(0, 5) || [];

  return ("
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>;"
"
      <div className="p-6">;"
</div>"
        <div className="flex items-start">;"
          <div className="relative mr-4">;"
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;"
</div>
                <img;
                  src={talent && talent.profile_picture_url} 
                  alt={talent && talent.full_name} "
                  className="w-full h-full object-cover""
                />;
</img>"
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;"
                </div>;
            </div>;"
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;"
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;"
</CheckCircle2>
          <div className="flex-1">;"
            <div className="flex justify-between items-start">;"
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;"
              <Button;"
                variant="ghost"""
                size="sm"""
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan""
                onClick={handleToggleSave}>;
"`;
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />;"
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>;"
              ;
            <p className="text-zion-cyan font-medium">{talent && talent.professional_title}</p>;""
            <div className="mt-2 flex flex-wrap gap-3 text-sm">;"
                <div className="flex items-center text-zion-slate-light">;"
                  <MapPin className="h-4 w-4 mr-1" />;"

                  <span>{talent && talent.location}</span>;
                  <Clock className="h-4 w-4 mr-1" />;"

                  <span>{talent && talent.availability_type}</span>;
          <div className="mt-4">;"
            <div className="flex flex-wrap gap-2">;"
                <span;
                  key={index}"
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;"
</span>
                </span>;"
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;"
                </span>;
        <div className="mt-5 flex items-center justify-between">;"
          <div>;
              <div className="text-white font-bold">;"
                <span className="text-zion-slate-light font-normal">/hr</span>;"
              <div className="text-zion-slate-light">Rate not specified</div>;"
          <div className="flex items-center gap-2">;"
          <div className="flex items-center gap-2">"
                variant="secondary""
                onClick={handleRequestHire}"
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;"

              variant="ghost"")
              onClick={(e) => {
              View <ArrowRight className="ml-1 h-4 w-4" />"

            
              View <ArrowRight className="ml-1 h-4 w-4" />;"
    <Card className="overflow - hidden transition - all hover:shadow - lg border - zion - blue - light bg - zion - blue cursor - pointer" on_click={handleViewProfile}>;"
      <div className="p - 6">;"
        <div className="flex items - start">;"
          <div className="relative mr - 4">;"
            <div className="w - 16 h - 16 rounded - full overflow - hidden bg - zion - blue - dark border border - zion - blue - light">;"
                  src={talent.profile_picture_url}
                  alt={talent.full_name}"
                  className="w - full h - full object - cover";"
                />) : (
                <div className="w - full h - full flex items - center justify - center text - zion - slate - light text - xl font - bold">;"
</div>)
                </div>)}
              <div className="absolute -bottom - 1 -right - 1 bg - zion - blue p - 0.5 rounded - full">;"
                <CheckCircle2 className="w - 5 h - 5 text - zion - cyan" />;"
          <div className="flex - 1">;"
            <div className="flex justify - between items - start">;"
              <h3 className="text - lg font - bold text - white">{talent.full_name}</h3>;"
                variant="ghost";""
                size="sm";""
                className="p - 1 h - auto text - zion - slate - light hover:text - zion - cyan";"
                on_click={handleToggleSave}
              >;
                <Star className={`h - 5 w - 5 ${is_saved ? "fill - yellow - 400 text - yellow - 400" : ""}`} />;"
                <span className="sr - only">{is_saved ? "Saved" : "Save"}</span>;"
            <p className="text - zion - cyan font - medium">{talent.professional_title}</p>;""
            <div className="mt - 2 flex flex - wrap gap - 3 text - sm">;"
                <div className="flex items - center text - zion - slate - light">;"
                  <MapPin className="h - 4 w - 4 mr - 1" />;"

                  <span>{talent.location}</span>;
                </div>)}"
                  <Clock className="h - 4 w - 4 mr - 1" />;"

                  <span>{talent.availability_type}</span>;
          <div className="mt - 4">;"
            <div className="flex flex - wrap gap - 2">;"
                  className="px - 2 py - 1 text - xs rounded - full bg - zion - blue - light text - zion - slate - light";"
                </span>))}"
                <span className="px - 2 py - 1 text - xs rounded - full bg - zion - purple / 20 text - zion - cyan">;"
                </span>)}
        <div className="mt - 5 flex items - center justify - between">;"
              <div className="text - white font - bold">;"
                <span className="text - zion - slate - light font - normal">/hr</span>;"
              </div>) : ()"
              <div className="text - zion - slate - light">Rate not specified</div>)}"
          <div className="flex items - center gap - 2">;"
                variant="secondary";"
                on_click={handleRequestHire}"
                className="bg - zion - purple hover:bg - zion - purple - light text - white";"

              )}
              variant="ghost";"
              on_click={(e) => {
              View <ArrowRight className="ml - 1 h - 4 w - 4" />;"
                className="bg-zion-purple hover:bg-zion-purple-light text-white";"

              onClick={(e) => {;

    );"`;
pr-12325
