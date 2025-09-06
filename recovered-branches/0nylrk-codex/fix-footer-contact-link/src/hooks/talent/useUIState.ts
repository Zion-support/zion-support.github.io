
import { useState } from 'react';
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
