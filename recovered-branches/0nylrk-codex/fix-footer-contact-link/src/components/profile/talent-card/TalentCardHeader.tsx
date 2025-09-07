

import React from "react";
import {BadgeCheck} from "lucide-react";
import {TalentCardAvatar} from "./TalentCardAvatar";
import {TalentCardAvailability} from "./TalentCardAvailability";
import React from "react",
import { BadgeCheck } from "lucide-react",
import { TalentCardAvatar } from "./TalentCardAvatar";
import { TalentCardAvailability } from "./TalentCardAvailability";
interface TalentCardHeaderProps {

  fullName: string
  professionalTitle: string  profilePicture?: string;
  availabilityType: string,;
  yearsExperience: number;
}
  availabilityType;import React from "react",
import { BadgeCheck } from "lucide-react",
import { TalentCardAvatar } from "./TalentCardAvatar";
import { TalentCardAvailability } from "./TalentCardAvailability";
interface TalentCardHeaderProps {

  fullName: string
  professionalTitle: string



import React from "react";""
import {BadgeCheck} from "lucide-react";""
import {TalentCardAvatar} from "./TalentCardAvatar";""
import {TalentCardAvailability} from "./TalentCardAvailability";"
interface TalentCardHeaderProps {;
  fullName: string,;
  professionalTitle: string,;
pr-12325
  profilePicture?: string;
  availabilityType: string,;
  yearsExperience: number;
}
  availabilityType;
import { TalentCardAvatar } from "./TalentCardAvatar",
import { TalentCardAvailability } from "./TalentCardAvailability",

export function TalentCardHeader(): any ({ ;
  fullName;
  professionalTitle, ;
  profilePicture, ;

  availabilityType;
  yearsExperience;)
}: TalentCardHeaderProps) {;"
import React from "react",""
import { BadgeCheck } from "lucide-react",""
import { TalentCardAvatar } from "./TalentCardAvatar";""
import { TalentCardAvailability } from "./TalentCardAvailability";"
interface TalentCardHeaderProps {
  // TODO: Implement
  fullName: string;,
  professionalTitle: string;
  availabilityType;"
import { TalentCardAvatar } from "./TalentCardAvatar",""
import { TalentCardAvailability } from "./TalentCardAvailability","
  // TODO: Implement
pr-12325
  fullName: string,
  professionalTitle: string,
  profilePicture?: string,
  availabilityType: string,
  yearsExperience: number
}
pr-12325

  professionalTitle, 
  profilePicture, 
  availabilityType,
  yearsExperience
}: TalentCardHeaderProps) {
  return (  return (

    <div className="flex items-start gap-4 mb-4">;
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />;

      <div className="flex-1">;
        <div className="flex items-center justify-between">;
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">;
            {fullName}
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (;
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />;
            )}
  yearsExperience;
}: TalentCardHeaderProps) {
  return (
"
    <div className="flex items-start gap-4 mb-4">;"
</div>
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />;

      <div className="flex-1">;"
</div>"
        <div className="flex items-center justify-between">;"
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">;"
</h3>"
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />;"
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />"

          </h3>;
          <TalentCardAvailability availabilityType={availabilityType} />;

        </div>;"
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>;"
      </div>;
    <div className="flex items - start gap - 4 mb - 4">;"
      <TalentCardAvatar profile_picture={profile_picture} full_name={full_name} />;
      <div className="flex - 1">;"
        <div className="flex items - center justify - between">;"
          <h3 className="text - lg font - semibold text - white flex items - center gap - 1">;"
</h3>)"
              <BadgeCheck className="h - 4 w - 4 text - zion - cyan" aria - label="Verified Expert" />)}"

          <TalentCardAvailability availability_type={availability_type} />;

        <p className="text - zion - cyan text - sm">{professional_title}</p>;"
    </div>);

  return (<div className="flex items-start gap-4 mb-4" > <TalentCardAvatar profilePicture= {"
}/> <div className="flex-1" > <div className="flex items-center justify-between" > <h3 className="text-lg font-semibold text-white flex items-center gap-1" > {"
  yearsExperience > 5 && (<BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />"

}</h3> <TalentCardAvailability availabilityType= {
  availabilityType;)
}/> </div> </div> </div>) 
pr-12325
