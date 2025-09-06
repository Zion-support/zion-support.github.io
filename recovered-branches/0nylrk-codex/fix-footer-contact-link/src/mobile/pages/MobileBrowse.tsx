
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { BrowseFilters } from "../components/browse/BrowseFilters",
import { BrowseCards } from "../components/browse/BrowseCards",
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
// Mock data for demonstration
const jobsData = null;
  return (
    <div className="min-h-screen">
      <MobileHeader
        title={browseType === "jobs" ? "Browse Jobs" : "Browse Talents"}
        showBack
      />
      
      <div className="flex justify-center my-3 px-4">
        <div className="inline-flex rounded-full border border-border p-1">
          <Button
            variant={browseType === "jobs" ? "default" : "ghost"}
            className="rounded-full"
            onClick={() => setBrowseType("jobs")}
          >
            Jobs
          </Button>
          <Button
            variant={browseType === "talents" ? "default" : "ghost"}
            className="rounded-full"
            onClick={() => setBrowseType("talents")}
          >
            Talents
          </Button>
        </div>
      </div>
      
      <BrowseFilters type={browseType} />
      
      <div className="py-4 px-4">
        <BrowseCards
          items={browseType === "jobs" ? jobsData : talentsData}
          type={browseType}
          onViewDetails={handleViewDetails}
        />
      </div>
      
      <BottomNavigation />
    </div>
  )
}
