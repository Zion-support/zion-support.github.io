
import { Education } from '@/types/resume';
import { format } from 'date-fns';

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  // Sort education by date (newest first)
