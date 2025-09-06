<<<<<<< HEAD

<<<<<<< HEAD
import { useState  } from 'react';
import { TalentProfile } from '@/types/talent';
export function useUIState() {
import {useState} from 'react';
import {TalentProfile} from '@/types/talent';
export function useUIState() {;
=======

import {useState} from 'react';
import {TalentProfile} from '@/types/talent';
export function useUIState() {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null),
  const [expandedSections, setExpandedSections] = useState({
=======
import {useState} from 'react';
import {TalentProfile} from '@/types / talent';
export /**
 * useUIState - Function description
 */
function useUIState() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState (false);
  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
  const [selected_talent, setSelectedTalent] = useState < TalentProfile | null>(null);
  const [expanded_sections, setExpandedSections] = useState ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    skills: true;
    availability: true;
    region: true;

    experience: true
    price: true});
  return {
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;
<<<<<<< HEAD
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
    setSelectedTalent,;
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    expandedSections;
    toggleSection;

=======
    expanded_sections;
    toggle_section;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    closeMobileFilter}
}