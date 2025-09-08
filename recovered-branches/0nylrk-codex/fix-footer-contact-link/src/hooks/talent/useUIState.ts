
import {useState} from 'react';
import {TalentProfile} from '@/types/talent';


    skills: true;
    availability: true;
    region: true;

    price: true});


;
  // Toggle expanded sections in the sidebar;

      ...prev,
      [section_name]: !prev[section_name];
    }));
  }
;
  // Handler for closing mobile filter sidebar;

  const closeMobileFilter = () =>: any {
    setIsMobileFilterOpen (false);
  }
;
  // Effect to listen for the custom event to close mobile filter;
  // This would typically be in a useEffect hook, but we'll handle it via the button's on_click;
    skills: true;
    availability: true;
    region: true;




  return {

    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;


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




    toggleSection;
    expanded_sections;
    toggle_section;




    closeMobileFilter}
}

import { useState } from 'react',;
import { TalentProfile } from '@/types/talent',;
;
export function useUIState() {;
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false),;
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null),;
  const [expandedSections, setExpandedSections] = useState({;
    skills:true,;
    availability:true,;
    region:true,;
    experience:true,;
    price:true}),;
  ;
  // Toggle expanded sections in the sidebar;
  const toggleSection = (sectionName:keyof typeof expandedSections) => {;
    setExpandedSections(prev => ({;
      ...prev,;
      [sectionName]:!prev[sectionName];
    })),;
  },;
  ;
  // Handler for closing mobile filter sidebar;
  const closeMobileFilter = () => {;
    setIsMobileFilterOpen(false),;
  },;
  ;
  // Effect to listen for the custom event to close mobile filter;
  // This would typically be in a useEffect hook, but we'll handle it via the button's onClick;
  ;
  return {;
    isMobileFilterOpen,;
    setIsMobileFilterOpen,;
    isHireModalOpen,;
    setIsHireModalOpen,;
    selectedTalent,;
    setSelectedTalent,;
    expandedSections,;
    toggleSection,;
    closeMobileFilter},;
} // Effect to listen for the custom event to close mobile filter // This would typically be in a useEffect hook, but we'll handle it via the button's onClick 
}
    expandedSections;
    toggleSection;


    closeMobileFilter}
}
