
<<<<<<< HEAD
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileResumeBuilder, as, ResumeBuilderComponent} from "../components/resume/MobileResumeBuilder";
=======
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileResumeBuilder as ResumeBuilderComponent } from "../components/resume/MobileResumeBuilder",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
