

import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",

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

}
;
