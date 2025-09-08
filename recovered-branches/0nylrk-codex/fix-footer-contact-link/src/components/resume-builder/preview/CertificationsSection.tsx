










                <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">;

export /**
 * CertificationsSection - Function description
 */
function CertificationsSection() {
  const format_date = (date: Date | string | undefined) =>: any {
    // Check condition
if (return '', ) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      return format (new Date (date), 'MMM yyyy');
    }
    return format (date, 'MMM yyyy');
  }

;
interface CertificationsSectionProps {;
  certifications:Certification[];
}
;

    return format(date, 'MMM yyyy'),;
  },;
;
  if (certifications.length === 0) return null,;
  ;
  return (;

            <p className="text-sm">{cert.issuing_organization}</p>;
            {cert.credential_url && (;"
              <p className="text-sm">;"
                <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">;
                  View Credential;

                </a>;
              </p>)}
          </div>))}
      </div>;
    </div>);
}



