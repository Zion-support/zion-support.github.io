<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import { useState, useMemo  } from 'react';
import { TalentProfile } from '@/types/talent';
export function useFilterTalents(talents: TalentProfile[]) {
import {useState, useMemo} from 'react';
import {TalentProfile} from '@/types/talent';
export function useFilterTalents(talents: TalentProfile[]) {;
import {useState, useMemo} from 'react';
import {TalentProfile} from '@/types/talent';
export function useFilterTalents(talents: TalentProfile[]) {;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useState, useMemo} from 'react';
import {TalentProfile} from '@/types/talent';
export function useFilterTalents(talents: TalentProfile[]) {;

import { useState, useMemo  } from 'react';
import { TalentProfile } from '@/types/talent';
export function useFilterTalents(talents: TalentProfile[]) {
import {useState, useMemo} from 'react';
import {TalentProfile} from '@/types/talent';
export function useFilterTalents(talents: TalentProfile[]) {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        : [...prev, skill]
    )
  }
  const toggleAvailability = (availability: string) => {
<<<<<<< HEAD
    setSelectedAvailability(prev => 
      prev && prev.includes(availability) 
        ? prev && prev.filter(a => a !== availability)
    setSelectedAvailability(prev =>
      prev.includes(availability)
        ? prev.filter(a => a !== availability)
=======

    setSelectedAvailability(prev => 
      prev && prev.includes(availability) 
        ? prev && prev.filter(a => a !== availability)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        : [...prev, availability]
    )
  }
  const toggleRegion = (region: string) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { useState, useMemo  } from 'react';
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
  
=======
    setSelectedRegions(prev => 
      prev && prev.includes(region) 
        ? prev && prev.filter(r => r !== region)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setSelectedRegions(prev =>
      prev.includes(region)
        ? prev.filter(r => r !== region)
=======

    setSelectedRegions(prev => 
      prev && prev.includes(region) 
        ? prev && prev.filter(r => r !== region)

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        : [...prev, region]
    )
  }
  const clearFilters = () => {'

    setSearchTerm('');
    setSelectedSkills([]);
    setSelectedAvailability([]);
    setSelectedRegions([]);
    setPriceRange([50, 200]);
<<<<<<< HEAD
=======
    setExperienceRange([0, 15]);
    setSortOption('relevance')
  }
  // Filter and sort talents
  const filteredTalents = useMemo(() => {
    let result = [...talents];
    // Filter by search term
    if (searchTerm) {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const lowerSearch = searchTerm && searchTerm.toLowerCase();
      result = result && result.filter(talent => 
        talent && talent.full_name.toLowerCase().includes(lowerSearch) ||
        talent && talent.professional_title.toLowerCase().includes(lowerSearch) ||
        talent && talent.bio?.toLowerCase().includes(lowerSearch) ||
        talent && talent.skills?.some(skill => skill && skill.toLowerCase().includes(lowerSearch))
<<<<<<< HEAD
      )

      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(talent =>
        talent.full_name.toLowerCase().includes(lowerSearch) |
        talent.professional_title.toLowerCase().includes(lowerSearch) |
        talent.bio?.toLowerCase().includes(lowerSearch) |
        talent.skills?.some(skill => skill.toLowerCase().includes(lowerSearch))
      )
=======

<<<<<<< HEAD
=======
      )

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState, useMemo } from 'react',;

import { TalentProfile } from '@/types/talent',;
export function useFilterTalents() { return null; }

  },;
  const toggleAvailability = (availability: string) => {;
    setSelectedAvailability(prev =>;
      prev.includes(availability);
        ? prev.filter(a => a !== availability);
        : [...prev, availability];
    );
  },;
  const toggleRegion = (region: string) => {;
    setSelectedRegions(prev =>;
      prev.includes(region);
        ? prev.filter(r => r !== region);
        : [...prev, region];
    );
  },;

    setSearchTerm(''),;
    setSelectedSkills([]),;
    setSelectedAvailability([]),;
    setSelectedRegions([]),;
    setPriceRange([50, 200]),;

    setSortOption('relevance');
  },;
  // Filter and sort talents;
  const filteredTalents = useMemo(() => {;
    let result = [...talents],;
    // Filter by search term;
    if (searchTerm) {;
      const lowerSearch = searchTerm.toLowerCase(),;
      result = result.filter(talent =>;
        talent.full_name.toLowerCase().includes(lowerSearch) ||;
        talent.professional_title.toLowerCase().includes(lowerSearch) ||;
        talent.bio?.toLowerCase().includes(lowerSearch) ||;
        talent.skills?.some(skill => skill.toLowerCase().includes(lowerSearch));
      );

<<<<<<< HEAD
=======

<<<<<<< HEAD
    }
    // Filter by selected skills
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
    // Filter by selected skills

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (selectedSkills && selectedSkills.length > 0) {

      result = result && result.filter(talent => 
        selectedSkills && selectedSkills.every(skill => 
          talent && talent.skills?.some(talentSkill => 
            talentSkill && talentSkill.toLowerCase().includes(skill && skill.toLowerCase())
<<<<<<< HEAD
    }
    // Filter by selected skills
    if (selectedSkills.length > 0) {
      result = result.filter(talent =>
        selectedSkills.every(skill =>
          talent.skills?.some(talentSkill =>
            talentSkill.toLowerCase().includes(skill.toLowerCase())
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          )
        )
      )
    }
<<<<<<< HEAD

=======
    // Filter by availability
<<<<<<< HEAD
    if (selectedAvailability.length > 0) {
      result = result.filter(talent => 
        selectedAvailability.includes(talent.availability_type || '')
      )
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (selectedAvailability && selectedAvailability.length > 0) {
      result = result && result.filter(talent => 
        selectedAvailability && selectedAvailability.includes(talent && talent.availability_type || '')
      )
    }
    // Filter by location/region
    if (selectedRegions && selectedRegions.length > 0) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      result = result && result.filter(talent => 
        selectedRegions && selectedRegions.some(region => 
          talent && talent.location?.includes(region)

<<<<<<< HEAD
      return hourlyRate >= priceRange[0] && hourlyRate <= priceRange[1]
    });
    // Filter by experience range;
=======
    


    // Filter by price range

    result = result && result.filter(talent => {
      const hourlyRate = talent && talent.hourly_rate || 0;

      return hourlyRate >= priceRange[0] && hourlyRate <= priceRange[1]
    });
    // Filter by experience range

    result = result && result.filter(talent => {
      const years = talent && talent.years_experience || 0;

<<<<<<< HEAD
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
    if (selectedAvailability.length > 0) {
      result = result.filter(talent =>
        selectedAvailability.includes(talent.availability_type |'')
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
    result = result.filter(talent => {
      const hourlyRate = talent.hourly_rate |0;
      return hourlyRate >= priceRange[0] && hourlyRate <= priceRange[1]
    });
    // Filter by experience range
    result = result.filter(talent => {
      const years = talent.years_experience |0;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return years >= experienceRange[0] && years <= experienceRange[1]
    });
    // Sort talents;
    switch (sortOption) {'
      case 'price-low':
<<<<<<< HEAD
        result && result.sort((a, b) => (a && a.hourly_rate || 0) - (b && b.hourly_rate || 0));

        result.sort((a, b) => (a.hourly_rate || 0) - (b.hourly_rate || 0));

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
        result.sort((a, b) => (a.hourly_rate || 0) - (b.hourly_rate || 0));
=======

        result && result.sort((a, b) => (a && a.hourly_rate || 0) - (b && b.hourly_rate || 0));

        result.sort((a, b) => (a.hourly_rate || 0) - (b.hourly_rate || 0));

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
    // Filter by price range;
    result = result.filter(talent => {;
      const hourlyRate = talent.hourly_rate || 0,;
      return hourlyRate >= priceRange[0] && hourlyRate <= priceRange[1];
    }),;
    // Filter by experience range;
    result = result.filter(talent => {;
      const years = talent.years_experience || 0,;
      return years >= experienceRange[0] && years <= experienceRange[1];
    }),;
    // Sort talents;
    switch (sortOption) {;'
      case 'price-low':;
        result.sort((a, b) => (a.hourly_rate || 0) - (b.hourly_rate || 0)),;
        break,;'
      case 'price-high':;
        result.sort((a, b) => (b.hourly_rate || 0) - (a.hourly_rate || 0)),;
        break,;'
      case 'rating':;
        result.sort((a, b) => (b.average_rating || 0) - (a.average_rating || 0)),;
        break,;'
      case 'experience':;
        result.sort((a, b) => (b.years_experience || 0) - (a.years_experience || 0)),;
        break,;
      default: // Default sorting by relevance (no specific order);

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        break;

      case 'price-high':
        result && result.sort((a, b) => (b && b.hourly_rate || 0) - (a && a.hourly_rate || 0));
        break;'
      case 'rating':
        result && result.sort((a, b) => (b && b.average_rating || 0) - (a && a.average_rating || 0));
        break;'
      case 'experience':
<<<<<<< HEAD

=======
        result && result.sort((a, b) => (b && b.years_experience || 0) - (a && a.years_experience || 0));
<<<<<<< HEAD
        break;
      case 'price-high':
        result.sort((a, b) => (b.hourly_rate || 0) - (a.hourly_rate || 0));
        break;
      case 'rating':
        result.sort((a, b) => (b.average_rating || 0) - (a.average_rating || 0));
        break;
      case 'experience':
        result.sort((a, b) => (b.years_experience || 0) - (a.years_experience || 0));
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        break;

    // Filter by price range
      return hourlyRate >= priceRange[0] && hourlyRate <= priceRange[1]
    });

      default: // Default sorting by relevance (no specific order)
        break;
    }
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    


<<<<<<< HEAD
    
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

    toggleSkill;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
    return result;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }, [talents, searchTerm, selectedSkills, selectedAvailability, selectedRegions, priceRange, experienceRange, sortOption]),;
  return {;
    filteredTalents,;
    searchTerm,;
    setSearchTerm,;
    selectedSkills,;
    selectedAvailability,;
    selectedRegions,;
    priceRange,;
    setPriceRange,;
    experienceRange,;
    setExperienceRange,;
    sortOption,;
    setSortOption,;
    toggleSkill,;

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    toggleAvailability;
    toggleRegion;
    clearFilters}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState, useMemo} from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {TalentProfile} from '@/types / talent';
export /**;
 * useFilterTalents - Function description;
 */
function useFilterTalents() { return null; }
  const toggle_skill = (skill: string) =>: any {}

    setSelectedSkills ([]);
    setSelectedAvailability ([]);
    setSelectedRegions ([]);
    setPriceRange ([50, 200]);

    setSortOption ('relevance');
  // Filter and sort talents;

}

      const lower_search = search_term.toLowerCase ();
      result = result.filter (talent =>;)
        talent.full_name.toLowerCase ().includes (lower_search) ||;
        talent.professional_title.toLowerCase ().includes (lower_search) ||;
        talent.bio?.toLowerCase ().includes (lower_search) ||;
        talent.skills?.some (skill => skill.toLowerCase ().includes (lower_search)));
    // Filter by selected skills;

}

      result = result.filter (talent =>;
        selected_skills.every (skill =>;
          talent.skills?.some (talent_skill =>;)
            talent_skill.toLowerCase ().includes (skill.toLowerCase ()))));
    // Filter by availability;

}
      result = result.filter (talent =>;
        selected_regions.some (region =>;

          talent.location?.includes (region)));
    // Filter by price range;

      const hourly_rate = talent.hourly_rate || 0;
      return hourly_rate >= price_range[0] && hourly_rate <= price_range[1];)
    // Filter by experience range;

      const years = talent.years_experience || 0;
      return years >= experience_range[0] && years <= experience_range[1];)
    // Sort talents;

      case 'experience':;

        result.sort ((a, b) => (b.years_experience || 0) - (a.years_experience || 0));
  }, [talents, search_term, selected_skills, selected_availability, selected_regions, price_range, experience_range, sort_option]);

    filtered_talents;
    search_term;
    selected_skills;
    selected_availability;
    selected_regions;
    price_range;
    experience_range;
    sort_option;
    toggle_skill;
    toggle_availability;
    toggle_region;
    clear_filters}
<<<<<<< HEAD

    toggleRegion;

    clearFilters}
}
=======
<<<<<<< HEAD
}

import { useState, useMemo } from 'react',;
import { TalentProfile } from '@/types/talent',;
;
export function useFilterTalents(talents:TalentProfile[]) {;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]),;
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),;
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]),;
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]),;
  const [experienceRange, setExperienceRange] = useState<[number, number]>([0, 15]),;
  const [sortOption, setSortOption] = useState<string>('relevance'),;
  ;
  const toggleSkill = (skill:string) => {;
    setSelectedSkills(prev => ;
      prev.includes(skill) ;
        ? prev.filter(s => s !== skill);
        :[...prev, skill];
    ),;
  },;
  ;
  const toggleAvailability = (availability:string) => {;
    setSelectedAvailability(prev => ;
      prev.includes(availability) ;
        ? prev.filter(a => a !== availability);
        :[...prev, availability];
    ),;
  },;
  ;
  const toggleRegion = (region:string) => {;
    setSelectedRegions(prev => ;
      prev.includes(region) ;
        ? prev.filter(r => r !== region);
        :[...prev, region];
    ),;
  },;
  ;
  const clearFilters = () => {;
    setSearchTerm(''),;
    setSelectedSkills([]),;
    setSelectedAvailability([]),;
    setSelectedRegions([]),;
    setPriceRange([50, 200]),;
    setExperienceRange([0, 15]),;
    setSortOption('relevance'),;
  },;
  ;
  // Filter and sort talents;
  const filteredTalents = useMemo(() => {;
    let result = [...talents],;
    ;
    // Filter by search term;
    if (searchTerm) {;
      const lowerSearch = searchTerm.toLowerCase(),;
      result = result.filter(talent => ;
        talent.full_name.toLowerCase().includes(lowerSearch) ||;
        talent.professional_title.toLowerCase().includes(lowerSearch) ||;
        talent.bio?.toLowerCase().includes(lowerSearch) ||;
        talent.skills?.some(skill => skill.toLowerCase().includes(lowerSearch));
      ),;
>>>>>>> merged-prs-20250907-203621
    }
    ;
    // Filter by selected skills;
    if (selectedSkills.length > 0) {;
      result = result.filter(talent => ;
        selectedSkills.every(skill => ;
          talent.skills?.some(talentSkill => ;
            talentSkill.toLowerCase().includes(skill.toLowerCase());
          );
        );
      ),;
    }
    ;
    // Filter by availability;
    if (selectedAvailability.length > 0) {;
      result = result.filter(talent => ;
        selectedAvailability.includes(talent.availability_type || '');
      ),;
    }
    ;
    // Filter by location/region;
    if (selectedRegions.length > 0) {;
      result = result.filter(talent => ;
        selectedRegions.some(region => ;
          talent.location?.includes(region);
        );
      ),;
    }
    ;
    // Filter by price range;
    result = result.filter(talent => {;
      const hourlyRate = talent.hourly_rate || 0,;
      return hourlyRate >= priceRange[0] && hourlyRate <= priceRange[1],;
    }),;
    ;
    // Filter by experience range;
    result = result.filter(talent => {;
      const years = talent.years_experience || 0,;
      return years >= experienceRange[0] && years <= experienceRange[1],;
    }),;
    ;
    // Sort talents;
    switch (sortOption) {;
      case 'price-low':;
        result.sort((a, b) => (a.hourly_rate || 0) - (b.hourly_rate || 0)),;
        break,;
      case 'price-high':;
        result.sort((a, b) => (b.hourly_rate || 0) - (a.hourly_rate || 0)),;
        break,;
      case 'rating':;
        result.sort((a, b) => (b.average_rating || 0) - (a.average_rating || 0)),;
        break,;
      case 'experience':;
        result.sort((a, b) => (b.years_experience || 0) - (a.years_experience || 0)),;
        break,;
      default:// Default sorting by relevance (no specific order);
        break;
    }
    ;
    return result,;
  }, [talents, searchTerm, selectedSkills, selectedAvailability, selectedRegions, priceRange, experienceRange, sortOption]),;
  ;
  return {;
    filteredTalents,;
    searchTerm,;
    setSearchTerm,;
    selectedSkills,;
    selectedAvailability,;
    selectedRegions,;
    priceRange,;
    setPriceRange,;
    experienceRange,;
    setExperienceRange,;
    sortOption,;
    setSortOption,;
    toggleSkill,;
    toggleAvailability,;
    toggleRegion,;
    clearFilters},;
} const toggleSkill = (skill: string) => {
  setSelectedSkills (prev => prev.includes (skill) ? prev.filter (s => s !== skill) const toggleAvailability = (availability: string) => {
  setSelectedAvailability (prev => prev.includes (availability) ? prev.filter (a => a !== availability) const toggleRegion = (region: string) => {
  setSelectedRegions (prev => prev.includes (region) ? prev.filter (r => r !== region) result = result.filter (talent => talent.full name.toLowerCase () .includes (lowerSearch) || talent.professional title.toLowerCase () .includes (lowerSearch) || talent.bio?.toLowerCase () .includes (lowerSearch) || talent.skills?.some (skill => skill.toLowerCase () .includes (lowerSearch) ) // Filter by selected skills if (selectedSkills.length > 0) {
  result = result.filter (talent => selectedSkills.every (skill => talent.skills?.some (talentSkill => talentSkill.toLowerCase () .includes (skill.toLowerCase () ) ) ) // Filter by availability if (selectedAvailability.length > 0) {
  result = result.filter (talent => selectedAvailability.includes (talent.availability type || '') // Filter by location/region if (selectedRegions.length > 0) {
  result = result.filter (talent => selectedRegions.some (region => talent.location?.includes (region) ) return result 
}, [talents, searchTerm, selectedSkills, selectedAvailability, selectedRegions, priceRange, experienceRange, sortOption]);
}
    toggleAvailability;
    toggleRegion;

    clearFilters}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
