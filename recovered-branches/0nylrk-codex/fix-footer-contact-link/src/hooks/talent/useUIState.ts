<<<<<<< HEAD

import {useState} from 'react';
import {TalentProfile} from '@/types/talent';


=======
import {useState} from 'react';
import {TalentProfile} from '@/types/talent';


export function useUIState() {;

import { useState  } from 'react';
import { TalentProfile } from '@/types/talent';
export function useUIState() {
import {useState} from 'react';
import {TalentProfile} from '@/types/talent';
export function useUIState() {;


  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null),


>>>>>>> origin/cursor/delete-old-data-records-6bba
    skills: true;
    availability: true;
    region: true;

    price: true});

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
  // Toggle expanded sections in the sidebar;

      ...prev,
      [section_name]: !prev[section_name];
    }));
  }
;
  // Handler for closing mobile filter sidebar;
<<<<<<< HEAD

  const closeMobileFilter = () =>: any {
    setIsMobileFilterOpen (false);
  }
;
  // Effect to listen for the custom event to close mobile filter;
  // This would typically be in a useEffect hook, but we'll handle it via the button's on_click;
    skills: true;
    availability: true;
    region: true;




=======


    experience: true
    price: true});
  // Toggle expanded sections in the sidebar
  const toggleSection = (sectionName: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev
      [sectionName]: !prev[sectionName]
    }))
  }
  // Handler for closing mobile filter sidebar
  const closeMobileFilter = () => {
    setIsMobileFilterOpen(false)
  }
  // Effect to listen for the custom event to close mobile filter
  // This would typically be in a useEffect hook, but we'll handle it via the button's onClick
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return {

    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
<<<<<<< HEAD


=======


    selected_talent;
    setSelectedTalent;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD


    toggleSection;
    expanded_sections;
    toggle_section;




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    closeMobileFilter}
}