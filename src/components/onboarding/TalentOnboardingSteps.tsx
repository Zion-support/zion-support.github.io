
import React from "react";;
import { useAuth } from "@/hooks/useAuth";,
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
<<<<<<< HEAD
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
import React from "react",
import { useAuth } from "@/hooks/useAuth",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheckBriefcaseIcon } from 'lucide-react';
import { OnboardingTrackerOnboardingStep } from "./OnboardingTracker";
=======
import { UserCheck; Star, CalendarCheck; BriefcaseIcon } from "lucide-react";
import { OnboardingTracker; OnboardingStep } from "./OnboardingTracker";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
export function TalentOnboardingSteps() {
return <OnboardingTracker steps={steps} />;
}