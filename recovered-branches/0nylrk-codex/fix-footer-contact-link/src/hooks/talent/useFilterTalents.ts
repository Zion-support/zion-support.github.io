

=======
import {useState, useMemo} from 'react';
import {TalentProfile} from '@/types/talent';
export function useFilterTalents(talents: TalentProfile[]) {;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]);
  const [experienceRange, setExperienceRange] = useState<[number, number]>([0, 15]);
  const [sortOption, setSortOption] = useState<string>('relevance');
  const toggleSkill = (skill: string) => {

    setSelectedSkills(prev => 
      prev && prev.includes(skill) 
        ? prev && prev.filter(s => s !== skill)

        : [...prev, skill]
    )
  }
  const toggleAvailability = (availability: string) => {

    setSelectedAvailability(prev => 
      prev && prev.includes(availability) 
        ? prev && prev.filter(a => a !== availability)

        : [...prev, availability]
    )
  }
  const toggleRegion = (region: string) => {

    setSelectedRegions(prev => 
      prev && prev.includes(region) 
        ? prev && prev.filter(r => r !== region)

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

      const lowerSearch = searchTerm && searchTerm.toLowerCase();
      result = result && result.filter(talent => 
        talent && talent.full_name.toLowerCase().includes(lowerSearch) ||
        talent && talent.professional_title.toLowerCase().includes(lowerSearch) ||
        talent && talent.bio?.toLowerCase().includes(lowerSearch) ||
        talent && talent.skills?.some(skill => skill && skill.toLowerCase().includes(lowerSearch))

      )

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
    // Filter by selected skills

    if (selectedSkills && selectedSkills.length > 0) {
      result = result && result.filter(talent => 
        selectedSkills && selectedSkills.every(skill => 
          talent && talent.skills?.some(talentSkill => 
            talentSkill && talentSkill.toLowerCase().includes(skill && skill.toLowerCase())

          )
        )
      )
    }
    // Filter by availability

    if (selectedAvailability && selectedAvailability.length > 0) {
      result = result && result.filter(talent => 
        selectedAvailability && selectedAvailability.includes(talent && talent.availability_type || '')

      )
    }
    // Filter by location/region

    if (selectedRegions && selectedRegions.length > 0) {
      result = result && result.filter(talent => 
        selectedRegions && selectedRegions.some(region => 
          talent && talent.location?.includes(region)

        )
      )
    }

    // Filter by price range

    result = result && result.filter(talent => {
      const hourlyRate = talent && talent.hourly_rate || 0;

      return hourlyRate >= priceRange[0] && hourlyRate <= priceRange[1]
    });
    // Filter by experience range

    result = result && result.filter(talent => {
      const years = talent && talent.years_experience || 0;

      return years >= experienceRange[0] && years <= experienceRange[1]
    });
    // Sort talents
    switch (sortOption) {
      case 'price-low':

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        break;
      case 'price-high':
        result && result.sort((a, b) => (b && b.hourly_rate || 0) - (a && a.hourly_rate || 0));
        break;
      case 'rating':
        result && result.sort((a, b) => (b && b.average_rating || 0) - (a && a.average_rating || 0));
        break;
      case 'experience':
        result.sort((a, b) => (b.years_experience || 0) - (a.years_experience || 0));

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    toggleAvailability;
    toggleRegion;

    clearFilters}
}