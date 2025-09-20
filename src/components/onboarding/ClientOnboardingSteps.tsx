
import React from "react",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIconInboxIcon } from 'lucide-react';
import { OnboardingTrackerOnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {
return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}