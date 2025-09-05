
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileResumeBuilder as ResumeBuilderComponent } from "../components/resume/MobileResumeBuilder",
=======
import React from &quot;react&quot;;
import { MobileHeader } from &quot;../components/common/MobileHeader&quot;;
import { BottomNavigation } from &quot;../components/common/BottomNavigation&quot;;
import { MobileResumeBuilder as ResumeBuilderComponent } from &quot;../components/resume/MobileResumeBuilder&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function MobileResumeBuilder() {
  return (
    <div className=&quot;min-h-screen&quot;>
=======
import React from "react";

export function MobileResumeBuilder() {_return (
    <div className="min-h-screen">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <MobileHeader
        title=&quot;Resume Builder&quot;
        showBack
      />
      
      <main className=&quot;py-4&quot;>
        <ResumeBuilderComponent />
      </main>
      
      <BottomNavigation />
    </div>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
