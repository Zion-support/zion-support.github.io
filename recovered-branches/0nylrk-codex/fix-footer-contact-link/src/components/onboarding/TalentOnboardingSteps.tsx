
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {
  const { user } = useAuth();
  const onboardingStatus = null;
  return <OnboardingTracker steps={steps} />
}
