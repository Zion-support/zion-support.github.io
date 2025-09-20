
<<<<<<< HEAD
import React from "react",
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheckBriefcaseIcon } from 'lucide-react';
import { OnboardingTrackerOnboardingStep } from "./OnboardingTracker";
=======
import React from "react";;
import { useAuth } from "@/hooks/useAuth";,
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
export function TalentOnboardingSteps() {
return <OnboardingTracker steps={steps} />
}