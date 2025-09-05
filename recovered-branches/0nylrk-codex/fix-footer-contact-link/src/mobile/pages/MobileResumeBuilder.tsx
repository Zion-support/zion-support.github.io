
import React from "react";

export function MobileResumeBuilder() {_return (
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
  );}
