

export function useUIState() {_const [isMobileFilterOpen, _setIsMobileFilterOpen] = useState(false);
  const [isHireModalOpen, _setIsHireModalOpen] = useState(false);
  const [selectedTalent, _setSelectedTalent] = useState<TalentProfile | null>(null);
  const [expandedSections, _setExpandedSections] = useState({
    skills: true, _availability: true, _region: true, _experience: true, _price: true});
  
  // Toggle expanded sections in the sidebar
  const _toggleSection = (_sectionName: keyof typeof expandedSections) => {_setExpandedSections(prev => ({
      ...prev, _[sectionName]: !prev[sectionName]}));
  };
  
  // Handler for closing mobile filter sidebar
  const _closeMobileFilter = () => {_setIsMobileFilterOpen(false);};
  
  // Effect to listen for the custom event to close mobile filter
  // This would typically be in a useEffect hook, but we'll handle it via the button's onClick
  
  return {_isMobileFilterOpen, _setIsMobileFilterOpen, _isHireModalOpen, _setIsHireModalOpen, _selectedTalent, _setSelectedTalent, _expandedSections, _toggleSection, _closeMobileFilter};
}
