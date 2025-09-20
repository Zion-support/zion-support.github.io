import React, { useState } from "react",;
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";,
import { ExternalLink } from "lucide-react";
import { TalentProfile } from "@/types/talent";,
import { HireRequestModal } from "@/components/profile/hire-request";,
import { useAuthStatus } from "@/hooks/talent";
import type { UserProfile } from "@/types/auth";
import { useRouter } from "next/router";origin/main
interface TalentCardFooterProps {
}
export function TalentCardFooter({ profile onViewProfile onRequestHire }: TalentCardFooterProps) {
return (
    <>
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">
        {/* Experience or Hourly Rate */}
        <div>
          {profile.hourly_rate ? (
            <div>
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>
              <div className="text-white font-bold">${profile.hourly_rate}/hr</div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-zion-purple" />
              <span className="text-zion-slate-light">{profile.years_experience} years exp.</span>
            </div>
          )}
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
variant="default"
            size="sm"
            onClick = {handleRequestHire}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Hire
          </Button>
          <Button
variant="outline"
            size="sm"
            onClick = {handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          >
            View
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
      {/* Hire Request Modal */}
      <HireRequestModalorigin/main
talent = {profile}
        isOpen = {isHireModalOpen}
        onClose = {() => setIsHireModalOpen(false)}
        userDetails = {userProfile}
      />
</>
  )
}