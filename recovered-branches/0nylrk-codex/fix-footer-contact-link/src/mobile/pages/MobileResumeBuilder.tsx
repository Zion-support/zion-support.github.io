
import React from &quot;react&quot;;
import { MobileHeader } from &quot;../components/common/MobileHeader&quot;;
import { BottomNavigation } from &quot;../components/common/BottomNavigation&quot;;
import { MobileResumeBuilder as ResumeBuilderComponent } from &quot;../components/resume/MobileResumeBuilder&quot;;

export function MobileResumeBuilder() {
  return (
    <div className=&quot;min-h-screen&quot;>
      <MobileHeader
        title=&quot;Resume Builder&quot;
        showBack
      />
      
      <main className=&quot;py-4&quot;>
        <ResumeBuilderComponent />
      </main>
      
      <BottomNavigation />
    </div>
  );
}
