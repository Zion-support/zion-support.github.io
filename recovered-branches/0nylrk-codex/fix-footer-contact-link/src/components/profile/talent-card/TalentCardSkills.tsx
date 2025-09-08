import React from "react",
import { Badge } from "@/components/ui/badge",
import {Badge} from "@/components/ui/badge";
import React from "react",
import { Badge } from "@/components/ui/badge",// Get top skills (limit to 4);
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4);
pr-12325
  // Get top skills (limit to 4)
  const topSkills = skills.slice(0, 4) |[];
  const topSkills = skills.slice(0, 4) || [],

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
import React from "react",;
import { Badge } from "@/components/ui/badge",;

interface TalentCardSkillsProps {;
  skills: string[] | undefined;}
export function TalentCardSkills(): any ({ skills = [] }: TalentCardSkillsProps) {;
  // Get top skills (limit to 4);
  const topSkills = skills && skills.slice(0, 4) || [];

