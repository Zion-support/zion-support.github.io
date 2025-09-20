import React from "react";


import { TalentProfile } from "@/types/talent, ";
import { ActiveFilters } from "@/components/talent/ActiveFilters, ";
import { ResultsHeader } from "@/components/talent/ResultsHeader, ";
import { TalentGrid } from "@/components/talent/TalentGrid, ";

interface TalentResultsProps {
  
talents: TalentProfile[];
totalCount: number;
isLoading: boolean;
viewProfile: (id: string) => void;
handleBook: (talent: TalentProfile) => void;
handleMessage: (talent: TalentProfile) => void;
isAuthenticated: boolean;
activeFiltersProps: {
selectedSkills: string[];
toggleSkill: (skill: string) => void;
selectedAvailability: string[];
toggleAvailability: (availability: string) => void;
selectedRegions: string[];
toggleRegion: (region: string) => void;
priceRange: [number; number];
setPriceRange: (range: [number; number]) => void;,
experienceRange: [number; number];,
setExperienceRange: (range: [number; number]) => void;,
