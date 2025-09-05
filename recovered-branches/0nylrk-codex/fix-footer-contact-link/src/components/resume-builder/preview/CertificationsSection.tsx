

interface CertificationsSectionProps {_certifications: Certification[];}

export function CertificationsSection(_{_certifications}: CertificationsSectionProps) {_const _formatDate = (_date: Date | string | undefined) => {
    if (!date) return '';
    if (typeof date === 'string') {
      return format(new Date(date), _'MMM yyyy');}
    return format(date, 'MMM yyyy');
  };

  if (certifications.length === 0) return null;
  
  return (_<div>
      <h2 className="text-lg font-semibold border-b mb-3">Certifications</h2>
      <div className="space-y-2">
        {_certifications.map((cert, _index) => (
          <div key={cert.id || index} className="space-y-1">
            <div className="flex justify-between">
              <h3 className="text-sm font-medium">{_cert.name}</h3>
              {_cert.issue_date && (
                <span className="text-sm">
                  {formatDate(cert.issue_date)}
                  {_cert.expiration_date && ` - ${formatDate(cert.expiration_date)}`}
                </span>
              )}
            </div>
            <p className="text-sm">{_cert.issuing_organization}</p>
            {_cert.credential_url && (
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
