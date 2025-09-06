
import { useState, useMemo  } from 'react';
import { TalentProfile } from '@/types/talent';
export function useFilterTalents(talents: TalentProfile[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]);
  const [experienceRange, setExperienceRange] = useState<[number, number]>([0, 15]);
  const [sortOption, setSortOption] = useState<string>('relevance');
  const toggleSkill = (skill: string) => {
<<<<<<< HEAD
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
=======
    setSelectedSkills(prev => 
      prev && prev.includes(skill) 
        ? prev && prev.filter(s => s !== skill)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        : [...prev, skill]
    )
  }
  const toggleAvailability = (availability: string) => {
<<<<<<< HEAD
    setSelectedAvailability(prev =>
      prev.includes(availability)
        ? prev.filter(a => a !== availability)
=======
    setSelectedAvailability(prev => 
      prev && prev.includes(availability) 
        ? prev && prev.filter(a => a !== availability)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        : [...prev, availability]
    )
  }
  const toggleRegion = (region: string) => {
<<<<<<< HEAD
    setSelectedRegions(prev =>
      prev.includes(region)
        ? prev.filter(r => r !== region)
=======
    setSelectedRegions(prev => 
      prev && prev.includes(region) 
        ? prev && prev.filter(r => r !== region)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        : [...prev, region]
    )
  }
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSkills([]);
    setSelectedAvailability([]);
    setSelectedRegions([]);
    setPriceRange([50, 200]);
    setExperienceRange([0, 15]);
    setSortOption('relevance')
  }
  // Filter and sort talents
  const filteredTalents = useMemo(() => {
    let result = [...talents];
    // Filter by search term
    if (searchTerm) {
<<<<<<< HEAD
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(talent =>
        talent.full_name.toLowerCase().includes(lowerSearch) |
        talent.professional_title.toLowerCase().includes(lowerSearch) |
        talent.bio?.toLowerCase().includes(lowerSearch) |
        talent.skills?.some(skill => skill.toLowerCase().includes(lowerSearch))
=======
      const lowerSearch = searchTerm && searchTerm.toLowerCase();
      result = result && result.filter(talent => 
        talent && talent.full_name.toLowerCase().includes(lowerSearch) ||
        talent && talent.professional_title.toLowerCase().includes(lowerSearch) ||
        talent && talent.bio?.toLowerCase().includes(lowerSearch) ||
        talent && talent.skills?.some(skill => skill && skill.toLowerCase().includes(lowerSearch))
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      )
    }
    // Filter by selected skills
<<<<<<< HEAD
    if (selectedSkills.length > 0) {
      result = result.filter(talent =>
        selectedSkills.every(skill =>
          talent.skills?.some(talentSkill =>
            talentSkill.toLowerCase().includes(skill.toLowerCase())
=======
    if (selectedSkills && selectedSkills.length > 0) {
      result = result && result.filter(talent => 
        selectedSkills && selectedSkills.every(skill => 
          talent && talent.skills?.some(talentSkill => 
            talentSkill && talentSkill.toLowerCase().includes(skill && skill.toLowerCase())
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          )
        )
      )
    }
    // Filter by availability
<<<<<<< HEAD
    if (selectedAvailability.length > 0) {
      result = result.filter(talent =>
        selectedAvailability.includes(talent.availability_type |'')
=======
    if (selectedAvailability && selectedAvailability.length > 0) {
      result = result && result.filter(talent => 
        selectedAvailability && selectedAvailability.includes(talent && talent.availability_type || '')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      )
    }
    // Filter by location/region
<<<<<<< HEAD
    if (selectedRegions.length > 0) {
      result = result.filter(talent =>
        selectedRegions.some(region =>
          talent.location?.includes(region)
=======
    if (selectedRegions && selectedRegions.length > 0) {
      result = result && result.filter(talent => 
        selectedRegions && selectedRegions.some(region => 
          talent && talent.location?.includes(region)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        )
      )
    }
    // Filter by price range
<<<<<<< HEAD
    result = result.filter(talent => {
      const hourlyRate = talent.hourly_rate |0;
=======
    result = result && result.filter(talent => {
      const hourlyRate = talent && talent.hourly_rate || 0;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return hourlyRate >= priceRange[0] && hourlyRate <= priceRange[1]
    });
    // Filter by experience range
<<<<<<< HEAD
    result = result.filter(talent => {
      const years = talent.years_experience |0;
=======
    result = result && result.filter(talent => {
      const years = talent && talent.years_experience || 0;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return years >= experienceRange[0] && years <= experienceRange[1]
    });
    // Sort talents
    switch (sortOption) {
      case 'price-low':
<<<<<<< HEAD
        result.sort((a, b) => (a.hourly_rate |0) - (b.hourly_rate |0));
        break;
      case 'price-high':
        result.sort((a, b) => (b.hourly_rate |0) - (a.hourly_rate |0));
        break;
      case 'rating':
        result.sort((a, b) => (b.average_rating |0) - (a.average_rating |0));
        break;
      case 'experience':
        result.sort((a, b) => (b.years_experience |0) - (a.years_experience |0));
=======
        result && result.sort((a, b) => (a && a.hourly_rate || 0) - (b && b.hourly_rate || 0));
        break;
      case 'price-high':
        result && result.sort((a, b) => (b && b.hourly_rate || 0) - (a && a.hourly_rate || 0));
        break;
      case 'rating':
        result && result.sort((a, b) => (b && b.average_rating || 0) - (a && a.average_rating || 0));
        break;
      case 'experience':
        result && result.sort((a, b) => (b && b.years_experience || 0) - (a && a.years_experience || 0));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        break;
      default: // Default sorting by relevance (no specific order)
        break
    }
    return result
  }, [talents, searchTerm, selectedSkills, selectedAvailability, selectedRegions, priceRange, experienceRange, sortOption]);
  return {
    filteredTalents;
    searchTerm;
    setSearchTerm;
    selectedSkills;
    selectedAvailability;
    selectedRegions;
    priceRange;
    setPriceRange;
    experienceRange;
    setExperienceRange;
    sortOption;
    setSortOption;
    toggleSkill;
    toggleAvailability;
    toggleRegion;

    clearFilters}
}