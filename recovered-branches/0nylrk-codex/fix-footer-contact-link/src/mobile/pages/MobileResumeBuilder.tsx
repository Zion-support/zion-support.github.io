
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
<<<<<<< HEAD
import { BottomNavigation } from "../components/common/BottomNavigation";
import { MobileResumeBuilder as ResumeBuilderComponent } from "../components/resume/MobileResumeBuilder";
=======
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileResumeBuilder as ResumeBuilderComponent } from "../components/resume/MobileResumeBuilder",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function MobileResumeBuilder() {
  return (
    <div className="min-h-screen">
      <MobileHeader
        title="Resume Builder"
        showBack
      />
      <main className="py-4">
        <ResumeBuilderComponent />
      </main>
      <BottomNavigation />
    </div>
  )
<<<<<<< HEAD
}
=======
import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { MobileResumeBuilder as ResumeBuilderComponent } from "../components/resume/MobileResumeBuilder";
export function MobileResumeBuilder() {;
  return (;
    <div className="min-h-screen">;
      <MobileHeader;
        title="Resume Builder";
        showBack;
      />;
      <main className="py-4">;
        <ResumeBuilderComponent />;
      </main>;
      <BottomNavigation />;
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
