import React from 'react';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { Button } from '@/components / ui / button';

interface ActiveFiltersProps {}
  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (status: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void;
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];
  setExperienceRange: (range: [number, number]) => void;
  clear_filters: () => void;interface ActiveFiltersProps {}

  selected_skills: string[],
  toggle_skill: (skill: string, ) => void,
  selected_availability: string[],
  toggle_availability: (status: string, ) => void,
  selected_regions: string[],
  toggle_region: (region: string, ) => void,
  price_range: [number, number],
  setPriceRange: (range: [number, number], ) => void,
  experience_range: [number, number],
  setExperienceRange: (range: [number, number], ) => void,
  clear_filters: () => void;
}
export /**;
 * ActiveFilters - Function description;
 */
function ActiveFilters() {}
  // Check if any filters are active;
  const hasActiveFilters =;
    selected_skills.length > 0 ||;
    selected_availability.length > 0 ||;
    selected_regions.length > 0 ||;,
    experience_range[0] !== 0 ||;,
    experience_range[1] !== 15 ||;,
    price_range[0] !== 50 ||;,
    price_range[1] !== 200;

}
  return ('
    <div className='mb - 6 flex flex - wrap gap - 2 items - center'>;'
      <span className='text - zion - slate - light text - sm'>Active filters:</span>;
      {selected_skills.map (skill => (
        <ClickableBadge;

          on_click={() => toggle_skill (skill)}        >;
          {skill}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {selected_availability.map (status => (
        <ClickableBadge;

              : 'Project - based'}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {selected_regions.map (region => (
        <ClickableBadge;

          on_click={() => toggle_region (region)}        >;
          {region}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}

        Clear All;
      </Button>;
    </div>);
