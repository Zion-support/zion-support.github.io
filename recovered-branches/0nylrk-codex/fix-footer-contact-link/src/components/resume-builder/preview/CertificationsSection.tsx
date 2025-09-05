
<<<<<<< HEAD
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
=======

interface CertificationsSectionProps {_certifications: Certification[];}

export function CertificationsSection(_{_certifications}: CertificationsSectionProps) {_const _formatDate = (_date: Date | string | undefined) => {
    if (!date) return '';
    if (typeof date === 'string') {
      return format(new Date(date), _'MMM yyyy');}
    return format(date, 'MMM yyyy');
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (certifications.length === 0) return null,
  
<<<<<<< HEAD
  return (
    <div>
      <h2 className=&quot;text-lg font-semibold border-b mb-3&quot;>Certifications</h2>
      <div className=&quot;space-y-2&quot;>
        {certifications.map((cert, index) => (
          <div key={cert.id || index} className=&quot;space-y-1&quot;>
            <div className=&quot;flex justify-between&quot;>
              <h3 className=&quot;text-sm font-medium&quot;>{cert.name}</h3>
              {cert.issue_date && (
                <span className=&quot;text-sm&quot;>
=======
  return (_<div>
      <h2 className="text-lg font-semibold border-b mb-3">Certifications</h2>
      <div className="space-y-2">
        {_certifications.map((cert, _index) => (
          <div key={cert.id || index} className="space-y-1">
            <div className="flex justify-between">
              <h3 className="text-sm font-medium">{_cert.name}</h3>
              {_cert.issue_date && (
                <span className="text-sm">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  {formatDate(cert.issue_date)}
                  {_cert.expiration_date && ` - ${formatDate(cert.expiration_date)}`}
                </span>
              )}
            </div>
<<<<<<< HEAD
            <p className=&quot;text-sm&quot;>{cert.issuing_organization}</p>
            {cert.credential_url && (
              <p className=&quot;text-sm&quot;>
                <a href={cert.credential_url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-blue-600 hover:underline&quot;>
=======
            <p className="text-sm">{_cert.issuing_organization}</p>
            {_cert.credential_url && (
              <p className="text-sm">
                <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
