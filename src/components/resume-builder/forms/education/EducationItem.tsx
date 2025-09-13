import { Edit, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { EducationItemProps } from './types'
export function EducationItem({
  education
  onEdit
  onDelete
}: EducationItemProps) {


import { format } from 'date-fns';
import { Edit, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Education } from '@/types/resume';
import { EducationItemProps } from './types';


  return (
