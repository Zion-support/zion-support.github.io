import {useState} from 'react';
import {TalentProfile} from '@/types/talent';
export function useUIState() {;

  return {
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;
    selected_talent;
    setSelectedTalent;
import { useState } from 'react',;
import { TalentProfile } from '@/types/talent',;
export function useUIState() {;
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false),;
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null),;
  const [expandedSections, setExpandedSections] = useState({;
    skills: true,;
    availability: true,;
    region: true,;
    experience: true,;
    price: true}),;
  // Toggle expanded sections in the sidebar;
  const toggleSection = (sectionName: keyof typeof expandedSections) => {;
    setExpandedSections(prev => ({;
      ...prev,;
      [sectionName]: !prev[sectionName];
    }));
  },;
  // Handler for closing mobile filter sidebar;
  const closeMobileFilter = () => {;
    setIsMobileFilterOpen(false);
  },;
  // Effect to listen for the custom event to close mobile filter;
  // This would typically be in a useEffect hook, but we'll handle it via the button's onClick;
  return {;
    isMobileFilterOpen,;
    setIsMobileFilterOpen,;
    isHireModalOpen,;
    setIsHireModalOpen,;
    selectedTalent,;
    setSelectedTalent,;    expandedSections;
    toggleSection;
    expanded_sections;
    toggle_section;
    closeMobileFilter}
}    expandedSections;
    toggleSection;

    expanded_sections;
    toggle_section;
import { useState  } from 'react';
import { TalentProfile } from '@/types/talent';
export function useUIState() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState($2);
  const [isHireModalOpen, setIsHireModalOpen] = useState($2);
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null),
  const [expandedSections, setExpandedSections] = useState($2);
  // Toggle expanded sections in the sidebar
  const toggleSection = $2;
      [sectionName]: !prev[sectionName]
    }))
  },
  
  // Handler for closing mobile filter sidebar
  const closeMobileFilter = $2;
  // Effect to listen for the custom event to close mobile filter
  // This would typically be in a useEffect hook, but we'll handle it via the button's onClick
  return {
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
    toggleSection,
    closeMobileFilter}
}
