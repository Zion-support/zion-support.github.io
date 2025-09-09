import {Certification} from '@/types / resume';
import {format} from 'date - fns';

interface CertificationsSectionProps {
  certifications: Certification[];
}
import { Certification } from '@/types/resume',;
import { format } from 'date-fns',;
interface CertificationsSectionProps {;
  certifications: Certification[];

}
;
export function CertificationsSection({ certifications }: CertificationsSectionProps) {;
  const formatDate = (date: Date | string | undefined) => {;
    if (!date) return '',;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM yyyy');
    }              )}
            </div>;
            <p className="text-sm">{cert.issuing_organization}</p>;
            {cert.credential_url && (;
              <p className="text-sm">;

                <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">;

