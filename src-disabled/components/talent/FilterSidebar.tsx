

:src_backup/components/talent/FilterSidebar.tsx
        <Button
          onClick={() =>
            window.dispatchEvent(new CustomEvent('closeMobileFilter'))
          }

import React from 'react';
import { Button } from '@/components/ui/ button';
import { Filter } from 'lucide-react';
import { SearchFilter } from './filters / SearchFilter';
import { SortFilter } from './filters / SortFilter';
import { SkillsFilter } from './filters / SkillsFilter';
import { AvailabilityFilter } from './filters / AvailabilityFilter';
import { RegionFilter } from './filters / RegionFilter';
import { ExperienceFilter } from './filters / ExperienceFilter';
import { PriceFilter } from './filters / PriceFilter';
import { FilterSidebarProps } from '@/types/ filters';
export /**
 * FilterSidebar - Function description
import { FilterSidebarProps } from '@/types / filters';
