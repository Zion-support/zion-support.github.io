
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation";
import { MobileProjectView } from "../components/projects/MobileProjectView";
// Mock data
const projectData = null;
export function MobileProjects() {
  return (
    <div className="min-h-screen">
      <MobileHeader
        title="Project Details"
        showBack
      />
      
      <main className="py-4">
        <MobileProjectView 
          project={projectData} 
          milestones={milestonesData}
        />
      </main>
      
      <BottomNavigation />
    </div>
  )
}
;