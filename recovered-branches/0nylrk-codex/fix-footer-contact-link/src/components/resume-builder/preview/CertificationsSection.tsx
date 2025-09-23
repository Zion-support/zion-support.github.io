
import { Certification } from '@/types/resume';
import { format } from 'date-fns';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    if (typeof date === 'string') {
