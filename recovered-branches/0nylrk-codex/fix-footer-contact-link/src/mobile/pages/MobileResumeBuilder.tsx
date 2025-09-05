
<<<<<<< HEAD
import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { MobileResumeBuilder as ResumeBuilderComponent } from "../components/resume/MobileResumeBuilder",;
;
export function MobileResumeBuilder() {;
  return (;
    <div className="min-h-screen">;
      <MobileHeader;
        title="Resume Builder";
        showBack;
      />;
      ;
      <main className="py-4">;
        <ResumeBuilderComponent />;
      </main>;
      ;
      <BottomNavigation />;
    </div>;
  ),;
}
=======
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileResumeBuilder as ResumeBuilderComponent } from "../components/resume/MobileResumeBuilder",export function MobileResumeBuilder() {
  return (
    <div className=&quot;min-h-screen&quot;>
import React from "react";

export function MobileResumeBuilder() {_return (
    <div className="min-h-screen">
      <MobileHeader
        title=&quot;Resume Builder&quot;
        showBack
      />
      
      <main className=&quot;py-4&quot;>
        <ResumeBuilderComponent />
      </main>
      
      <BottomNavigation />
    </div>
  )
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
