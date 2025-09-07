
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {useState} from 'react';
import {TalentProfile} from '@/types/talent';
export function useUIState() {;

<<<<<<< HEAD

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null),
  const [expandedSections, setExpandedSections] = useState({
    skills: true;
    availability: true;
    region: true;

    experience: true
    price: true});

;
  // Toggle expanded sections in the sidebar;
  const toggle_section = (section_name: keyof typeof expanded_sections) =>: any {
    setExpandedSections (prev => ({
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return {
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    setSelectedTalent,;



    expandedSections;
    toggleSection;

    expandedSections;
    toggleSection;

    expanded_sections;
    toggle_section;
    closeMobileFilter}
}
    expandedSections;
=======
    setSelectedTalent,;    expandedSections;
    toggleSection;
    expanded_sections;
    toggle_section;
    closeMobileFilter}
}    expandedSections;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    toggleSection;

    expanded_sections;
    toggle_section;
    closeMobileFilter}
}
