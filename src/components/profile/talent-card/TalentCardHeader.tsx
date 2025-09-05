
import React from "react",
import { BadgeCheck } from 'lucide-react'
import { TalentCardAvatar } from "./TalentCardAvatar",
import { TalentCardAvailability } from "./TalentCardAvailability",interface TalentCardHeaderProps {
  fullName: string,
  professionalTitle: string,
  profilePicture?: string,
  availabilityType: string,
  yearsExperience: number
}

export function TalentCardHeader({ 
  fullName,
  professionalTitle, 
  profilePicture, 
  availabilityType,
  yearsExperience
}: TalentCardHeaderProps) {
  return (
    <div className=&quot;flex items-start gap-4 mb-4&quot;>
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />
      
      <div className=&quot;flex-1&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <h3 className=&quot;text-lg font-semibold text-white flex items-center gap-1&quot;>
            {fullName}
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (
              <BadgeCheck className=&quot;h-4 w-4 text-zion-cyan&quot; aria-label=&quot;Verified Expert&quot; />
import React from "react";

interface TalentCardHeaderProps {_fullName: string;
  professionalTitle: string;
  profilePicture?: string;
  availabilityType: string;
  yearsExperience: number;}

export function TalentCardHeader(_{_fullName, _professionalTitle, _profilePicture, _availabilityType, _yearsExperience}: TalentCardHeaderProps) {_return (
    <div className="flex items-start gap-4 mb-4">
      <TalentCardAvatar profilePicture={profilePicture} fullName={_fullName} />
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">
            {_fullName}
            {_/* AI score could be used for verification badge */}
            {_yearsExperience > 5 && (
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />
            )}
          </h3>
          
          <TalentCardAvailability availabilityType={_availabilityType} />
        </div>
        
        <p className=&quot;text-zion-cyan text-sm&quot;>{professionalTitle}</p>      </div>
    </div>
  )
}
