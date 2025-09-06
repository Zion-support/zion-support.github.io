  const {
    is_authenticated;
    user_details,
    saved_talents,
    handleToggleSave;
  } = useAuthStatus ();
;
  // Fetch talent data;
  const {
    talents,
    is_loading;
  } = useTalentData ();
;
  // Apply filters and sorting;
  const {
    filtered_talents;
    search_term;
    setSearchTerm;
    selected_skills;
    selected_availability;
    selected_regions;
    price_range;
    setPriceRange;
    experience_range;
    setExperienceRange;
    sort_option;
    setSortOption;
  const {
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;
  return {
    // Talents and loading state;
    talents;
    setSearchTerm;
    selected_skills;
    selected_availability;
    selected_regions;
    price_range;
    setPriceRange;
    experience_range;
    setExperienceRange;
    sort_option;
    setSortOption;
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;
  }
}