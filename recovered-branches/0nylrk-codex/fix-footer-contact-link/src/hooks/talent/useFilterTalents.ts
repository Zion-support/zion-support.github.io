

export function useFilterTalents(_talents: TalentProfile[]) {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedSkills, _setSelectedSkills] = useState<string[]>([]);
  const [selectedAvailability, _setSelectedAvailability] = useState<string[]>([]);
  const [selectedRegions, _setSelectedRegions] = useState<string[]>([]);
  const [priceRange, _setPriceRange] = useState<[number, _number]>([50, _200]);
  const [experienceRange, _setExperienceRange] = useState<[number, _number]>([0, _15]);
  const [sortOption, _setSortOption] = useState<string>('relevance');
  
  const _toggleSkill = (_skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, _skill]
    );};
  
  const _toggleAvailability = (_availability: string) => {_setSelectedAvailability(prev => 
      prev.includes(availability) 
        ? prev.filter(a => a !== availability)
        : [...prev, _availability]
    );};
  
  const _toggleRegion = (_region: string) => {_setSelectedRegions(prev => 
      prev.includes(region) 
        ? prev.filter(r => r !== region)
        : [...prev, _region]
    );};
  
  const _clearFilters = () => {_setSearchTerm('');
    setSelectedSkills([]);
    setSelectedAvailability([]);
    setSelectedRegions([]);
    setPriceRange([50, _200]);
    setExperienceRange([0, _15]);
    setSortOption('relevance');};
  
  // Filter and sort talents
  const _filteredTalents = useMemo__(() => {_let _result = [...talents];
    
    // Filter by search term
    if (searchTerm) {
      const _lowerSearch = searchTerm.toLowerCase();
      result = result.filter(talent => 
        talent.full_name.toLowerCase().includes(lowerSearch) ||
        talent.professional_title.toLowerCase().includes(lowerSearch) ||
        talent.bio?.toLowerCase().includes(lowerSearch) ||
        talent.skills?.some(skill => skill.toLowerCase().includes(lowerSearch))
      );}
    
    // Filter by selected skills
    if (selectedSkills.length > 0) {_result = result.filter(talent => 
        selectedSkills.every(skill => 
          talent.skills?.some(talentSkill => 
            talentSkill.toLowerCase().includes(skill.toLowerCase())
          )
        )
      );}
    
    // Filter by availability
    if (selectedAvailability.length > 0) {_result = result.filter(talent => 
        selectedAvailability.includes(talent.availability_type || '')
      );}
    
    // Filter by location/region
    if (selectedRegions.length > 0) {_result = result.filter(talent => 
        selectedRegions.some(region => 
          talent.location?.includes(region)
        )
      );}
    
    // Filter by price range
    result = result.filter(talent => {_const _hourlyRate = talent.hourly_rate || 0;
      return hourlyRate >= priceRange[0] && hourlyRate <= priceRange[1];});
    
    // Filter by experience range
    result = result.filter(talent => {_const _years = talent.years_experience || 0;
      return years >= experienceRange[0] && years <= experienceRange[1];});
    
    // Sort talents
    switch (sortOption) {_case 'price-low':
        result.sort(_(a, _b) => (a.hourly_rate || 0) - (b.hourly_rate || 0));
        break;
      case 'price-high':
        result.sort(_(a, _b) => (b.hourly_rate || 0) - (a.hourly_rate || 0));
        break;
      case 'rating':
        result.sort(_(a, _b) => (b.average_rating || 0) - (a.average_rating || 0));
        break;
      case 'experience':
        result.sort(_(a, _b) => (b.years_experience || 0) - (a.years_experience || 0));
        break;
      default:
        // Default sorting by relevance (no specific order)
        break;}
    
    return result;
  }, [talents, searchTerm, selectedSkills, selectedAvailability, selectedRegions, priceRange, experienceRange, sortOption]);
  
  return {_filteredTalents, _searchTerm, _setSearchTerm, _selectedSkills, _selectedAvailability, _selectedRegions, _priceRange, _setPriceRange, _experienceRange, _setExperienceRange, _sortOption, _setSortOption, _toggleSkill, _toggleAvailability, _toggleRegion, _clearFilters};
}
