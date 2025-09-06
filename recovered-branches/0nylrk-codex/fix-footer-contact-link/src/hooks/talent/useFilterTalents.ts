
import { useState, useMemo } from 'react';
import { TalentProfile } from '@/types/talent';
export function useFilterTalents(talents: TalentProfile[]) {
  const [searchTerm, setSearchTerm] = useState($2);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]),
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]),
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]),
  const [experienceRange, setExperienceRange] = useState<[number, number]>([0, 15]),
  const [sortOption, setSortOption] = useState<string>('relevance'),
  
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    )
  },
  
  const toggleAvailability = (availability: string) => {
    setSelectedAvailability(prev => 
      prev.includes(availability) 
        ? prev.filter(a => a !== availability)
        : [...prev, availability]
    )
  },
  
  const toggleRegion = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region) 
        ? prev.filter(r => r !== region)
        : [...prev, region]
    )
  },
  
  const clearFilters = () => {
    setSearchTerm($2);
    setSelectedSkills($2);
    setSelectedAvailability($2);
    setSelectedRegions($2);
    setPriceRange($2);
    setExperienceRange($2);
    setSortOption('relevance')
  },
  
  // Filter and sort talents
  const filteredTalents = $2;
    // Filter by search term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase($2);
      result = result.filter(talent => 
        talent.full_name.toLowerCase().includes(lowerSearch) ||
        talent.professional_title.toLowerCase().includes(lowerSearch) ||
        talent.bio?.toLowerCase().includes(lowerSearch) ||
        talent.skills?.some(skill => skill.toLowerCase().includes(lowerSearch))
      )
    }
    
    // Filter by selected skills
    if (selectedSkills.length > 0) {
      result = result.filter(talent => 
        selectedSkills.every(skill => 
          talent.skills?.some(talentSkill => 
            talentSkill.toLowerCase().includes(skill.toLowerCase())
          )
        )
      )
    }
    
    // Filter by availability
    if (selectedAvailability.length > 0) {
      result = result.filter(talent => 
        selectedAvailability.includes(talent.availability_type || '')
      )
    }
    
    // Filter by location/region
    if (selectedRegions.length > 0) {
      result = result.filter(talent => 
        selectedRegions.some(region => 
          talent.location?.includes(region)
        )
      )
    }
    
    // Filter by price range
    result = result.filter($2);
    // Filter by experience range
    result = result.filter($2);
    // Sort talents
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => (a.hourly_rate || 0) - (b.hourly_rate || 0)),
        break,
      case 'price-high':
        result.sort((a, b) => (b.hourly_rate || 0) - (a.hourly_rate || 0)),
        break,
      case 'rating':
        result.sort((a, b) => (b.average_rating || 0) - (a.average_rating || 0)),
        break,
      case 'experience':
        result.sort((a, b) => (b.years_experience || 0) - (a.years_experience || 0)),
        break,
      default: // Default sorting by relevance (no specific order)
        break
    }
    
    return result
  }, [talents, searchTerm, selectedSkills, selectedAvailability, selectedRegions, priceRange, experienceRange, sortOption]),
  
  return {
    filteredTalents,
    searchTerm,
    setSearchTerm,
    selectedSkills,
    selectedAvailability,
    selectedRegions,
    priceRange,
    setPriceRange,
    experienceRange,
    setExperienceRange,
    sortOption,
    setSortOption,
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters}
}
