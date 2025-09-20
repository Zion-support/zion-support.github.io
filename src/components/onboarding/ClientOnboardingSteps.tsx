
import React from "react";;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";origin/main
export function ClientOnboardingSteps() {
return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}