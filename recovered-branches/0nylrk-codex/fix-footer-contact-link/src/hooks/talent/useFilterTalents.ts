
import { useState, useMemo  } from 'react';
import { TalentProfile } from '@/types/talent';
export function useFilterTalents(talents: TalentProfile[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]),
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]),
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]),
  const [experienceRange, setExperienceRange] = useState<[number, number]>([0, 15]),
  const [sortOption, setSortOption] = useState<string>('relevance'),
  
  const toggleSkill = null;
    clearFilters}
}
;