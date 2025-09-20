
import React from "react",
import { useAuth } from "@/hooks/useAuth",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheckBriefcaseIcon } from 'lucide-react';
import { OnboardingTrackerOnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {
return <OnboardingTracker steps={steps} />
}