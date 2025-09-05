
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