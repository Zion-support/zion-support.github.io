
import { ProfileExperience, asProfileExperienceType } from "@/types/profile";
import { Briefcase } from 'lucide-react';
interface ProfileExperienceProps {
  experience: ProfileExperienceType[]
export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return (
