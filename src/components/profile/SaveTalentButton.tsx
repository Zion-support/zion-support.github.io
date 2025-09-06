import React from 'react'
import { Button } from '@/components/ui/button'

import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react'
import { Star } from 'lucide-react';


interface SaveTalentButtonProps {
  talentId: string,
  onSave: (talentId: string,) => void,
  isSaved: boolean

  talentId: string
  onSave: (talentId: string,) => void

  isSaved: boolean
}
