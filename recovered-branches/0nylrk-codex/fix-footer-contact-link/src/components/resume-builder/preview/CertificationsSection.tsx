
<<<<<<< HEAD
<<<<<<< HEAD
import { Certification  } from '@/types/resume';
import { format } from 'date-fns';
interface CertificationsSectionProps {
  certifications: Certification[]
}
export function CertificationsSection({ certifications }: CertificationsSectionProps) {

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return ''
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy')
    }
    return format(date, 'MMM yyyy')
  }
  if (certifications.length === 0) return null;

=======
import {Certification} from '@/types/resume';
import {format} from 'date-fns';
interface CertificationsSectionProps {
  certifications: Certification[]
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { Certification } from '@/types/resume',;
import { format } from 'date-fns',;
interface CertificationsSectionProps {;
  certifications: Certification[];
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
export function CertificationsSection({ certifications }: CertificationsSectionProps) {;
  const formatDate = (date: Date | string | undefined) => {;
    if (!date) return '',;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM yyyy');
    }
<<<<<<< HEAD
    return format(date, 'MMM yyyy');
  };
=======
    return format(date, 'MMM yyyy')
  },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  if (certifications.length === 0) return null,
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div>
      <h2 className="text-lg font-semibold border-b mb-3">Certifications</h2>
      <div className="space-y-2">
        {certifications.map((cert, index) => (
          <div key={cert.id |index} className="space-y-1">
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
                </Link>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}