import React from 'react';
import { Handshake, MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";,
import { HireNowCTA } from "./HireNowCTA";,
import { ProfileHero } from "./ProfileHero";,
import { ProfileSkills } from "./ProfileSkills";,
import { ProfileExperience } from "./ProfileExperience";,
import { ProfileProjects } from "./ProfileProjects";,
import { ProfileAvailability } from "./ProfileAvailability";,
import { ProfileContact } from "./ProfileContact";,
import { ProfileRatings } from "./ProfileRatings";,
import { TalentProfile, as, TalentProfileType } from "@/types/talent";,
import { useAuth } from "@/hooks/useAuth";
import { Availability } from "@/types/profile";
interface TalentProfileProps {profile: TalentProfileType;
onRequestHire: () => void;
}
  onMessageTalent?: () => void}