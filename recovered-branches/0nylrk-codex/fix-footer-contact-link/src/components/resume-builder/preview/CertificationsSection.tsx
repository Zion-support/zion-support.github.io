
<<<<<<< HEAD
import { Certification } from '@/types/resume',;
import { format } from 'date-fns',;
;
interface CertificationsSectionProps {;
  certifications:Certification[];
}
;
export function CertificationsSection({ certifications } CertificationsSectionProps) {;
  const formatDate = (date:Date | string | undefined) => {;
    if (!date) return '',;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM yyyy'),;
    }
    return format(date, 'MMM yyyy'),;
  },;
;
  if (certifications.length === 0) return null,;
  ;
  return (;
    <div>;
      <h2 className="text-lg font-semibold border-b mb-3">Certifications</h2>;
      <div className="space-y-2">;
        {certifications.map((cert, index) => (;
          <div key={cert.id || index} className="space-y-1">;
            <div className="flex justify-between">;
              <h3 className="text-sm font-medium">{cert.name}</h3>;
              {cert.issue_date && (;
                <span className="text-sm">;
                  {formatDate(cert.issue_date)}
                  {cert.expiration_date && ` - ${formatDate(cert.expiration_date)}`}
                </span>;
              )}
            </div>;
            <p className="text-sm">{cert.issuing_organization}</p>;
            {cert.credential_url && (;
              <p className="text-sm">;
                <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">;
                  View Credential;
                </a>;
              </p>;
=======
import { Certification } from '@/types/resume',
import { format } from 'date-fns',
interface CertificationsSectionProps {
  certifications: Certification[]
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '',
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy')
    }
    return format(date, 'MMM yyyy')
  },
  if (certifications.length === 0) return null,
  
  return (
    <div>
      <h2 className=&quot;text-lg font-semibold border-b mb-3&quot;>Certifications</h2>
      <div className=&quot;space-y-2&quot;>
        {certifications.map((cert, index) => (
          <div key={cert.id || index} className=&quot;space-y-1&quot;>
            <div className=&quot;flex justify-between&quot;>
              <h3 className=&quot;text-sm font-medium&quot;>{cert.name}</h3>
              {cert.issue_date && (
                <span className=&quot;text-sm&quot;>                  {formatDate(cert.issue_date)}
                  {_cert.expiration_date && ` - ${formatDate(cert.expiration_date)}`}
                </span>
              )}
            </div>
            <p className=&quot;text-sm&quot;>{cert.issuing_organization}</p>
            {cert.credential_url && (
              <p className=&quot;text-sm&quot;>
                <a href={cert.credential_url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-blue-600 hover:underline&quot;>                  View Credential
                </Link>
              </p>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            )}
          </div>;
        ))}
<<<<<<< HEAD
      </div>;
    </div>;
  ),;
=======
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
