
import { Education } from '@/types/resume';
import { EducationItem } from './EducationItem';

interface EducationListProps {
  educationEntries: Education[];
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
}

