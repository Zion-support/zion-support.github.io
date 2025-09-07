

import {useState} from 'react';''
import {TalentProfile} from '@/types/talent';'
export function useUIState() {;


  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null),
</TalentProfile>
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null),;
</TalentProfile>'