import {useState, useMemo} from 'react';
import {TalentProfile} from '@/types/talent';
export function useFilterTalents(talents: TalentProfile[]) {;

        : [...prev, availability]
    )
  }
  const toggleRegion = (region: string) => {
    

    // Filter by price range
      return hourlyRate >= priceRange[0] && hourlyRate <= priceRange[1]
    });
    // Filter by experience range        break;
      default: // Default sorting by relevance (no specific order)
        break;
    }

    

    return result

  }, [talents, searchTerm, selectedSkills, selectedAvailability, selectedRegions, priceRange, experienceRange, sortOption]);
  return {}
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
    toggleSkill;    toggleAvailability;
    toggleRegion;

    clearFilters}
}
