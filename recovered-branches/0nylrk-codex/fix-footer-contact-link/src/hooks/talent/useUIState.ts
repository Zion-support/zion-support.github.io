
import { useState  } from 'react';
import { TalentProfile } from '@/types/talent';
export function useUIState() {
import {useState} from 'react';
import {TalentProfile} from '@/types/talent';
export function useUIState() {;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

  return {
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    expandedSections;
    toggleSection;

=======
    expanded_sections;
    toggle_section;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    closeMobileFilter}
}