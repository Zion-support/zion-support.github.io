
import React from "react";;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
<<<<<<< HEAD
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
import React from "react",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIconInboxIcon } from 'lucide-react';
import { OnboardingTrackerOnboardingStep } from "./OnboardingTracker";
=======
import { PlusCircle; SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker; OnboardingStep } from "./OnboardingTracker";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
export function ClientOnboardingSteps() {
return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}