
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Education } from '@/types/resume';
import { useResume } from '@/hooks/useResume';
import { format } from 'date-fns';
import { EducationFormProps } from './types';
import { EducationList } from './EducationList';
import { EducationFormFields } from './EducationFormFields';

export function EducationForm({ 
