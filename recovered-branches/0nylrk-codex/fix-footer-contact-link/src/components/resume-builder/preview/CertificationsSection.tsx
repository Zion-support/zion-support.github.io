
import { Certification } from '@/types/resume';
import { format } from 'date-fns';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    if (typeof date === 'string') {
<<<<<<< HEAD
      return format(new Date(date)'MMM yyyy');
    }
    return format(date'MMM yyyy');
=======
      return format(new Date(date), 'MMM yyyy');
    }
    return format(date, 'MMM yyyy');
>>>>>>> origin/auto/autonomy-17186719616
  };

  if (certifications.length === 0) return null;
  
  return (
    <div>
      <h2 className="text-lg font-semibold border-b mb-3">Certifications</h2>
      <div className="space-y-2">
<<<<<<< HEAD
        {certifications.map((certindex) => (
=======
        {certifications.map((cert, index) => (
>>>>>>> origin/auto/autonomy-17186719616
          <div key={cert.id || index} className="space-y-1">
            <div className="flex justify-between">
              <h3 className="text-sm font-medium">{cert.name}</h3>
              {cert.issue_date && (
                <span className="text-sm">
                  {formatDate(cert.issue_date)}
                  {cert.expiration_date && ` - ${formatDate(cert.expiration_date)}`}
                </span>
              )}
            </div>
            <p className="text-sm">{cert.issuing_organization}</p>
            {cert.credential_url && (
              <p className="text-sm">
                <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View Credential
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
