
<<<<<<< HEAD
import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIconInboxIcon } from 'lucide-react';
import { OnboardingTrackerOnboardingStep } from "./OnboardingTracker";
=======
import React from "react";;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
export function ClientOnboardingSteps() {
return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}