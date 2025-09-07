import React from "react";
import {useAuth} from "@/hooks/useAuth";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {UserCheck, Star, CalendarCheck, BriefcaseIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

export function TalentOnboardingSteps() {
  const { user } = useAuth(),
  const onboardingStatus = useOnboardingStatus(),
  
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {
  const { user } = useAuth();  const onboardingStatus = useOnboardingStatus();

  const steps: OnboardingStep[] = [
    {
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
      action: "Update",
    },
    {
      id: "skills",
      label: "Add your top skills",
      completed: onboardingStatus.skillsAdded,
      link: "/profile/skills",
      action: "Add Skills",
    },
    {
      id: "availability",
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability",
      action: "Set",
    },
    {
import React from "react";""
import {useAuth} from "@/hooks/useAuth";""
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";""
import {UserCheck, Star, CalendarCheck, BriefcaseIcon} from "lucide-react";""
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";"
export function TalentOnboardingSteps() {;

  const { user } = useAuth();

  const onboardingStatus = useOnboardingStatus();

  const steps: OnboardingStep[] = [
    {"
      id: "profile",""
      label: "Complete your profile","
      completed: onboardingStatus.profileCompleted,"
      link: "/profile",""
      action: "Update","
    },
      id: "skills",""
      label: "Add your top skills","
      completed: onboardingStatus.skillsAdded,"
      link: "/profile/skills",""
      action: "Add Skills","
      id: "availability",""
      label: "Set your availability","
      completed: onboardingStatus.availabilitySet,"
      link: "/profile/availability",""
      action: "Set","
    {

"
id: "match"","
  id: "match"""
      label: "Receive your first job match"",
  completed: onboardingStatus.matchReceived;"
      link: "/talent-dashboard"","
  action: "View Matches""
    }]
  ];"
      id: "match",""
      label: "Receive your first job match","
      completed: onboardingStatus.matchReceived,"
      link: "/talent-dashboard",""
      action: "View Matches","
  ];

  return <OnboardingTracker steps={steps} />;


  return <OnboardingTracker steps={steps} />,;}

return <OnboardingTracker steps= {
  steps;
}/> 


pr-12325
