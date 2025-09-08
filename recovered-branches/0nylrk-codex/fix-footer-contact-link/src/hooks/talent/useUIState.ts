
import {useState} from 'react';
import {TalentProfile} from '@/types/talent';


=======
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
export function useUIState() { return null; }
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
  // Effect to listen for the custom event to close mobile filter;'
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    closeMobileFilter}
}
