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
<<<<<<< HEAD

                <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">;

=======


                <a href={cert && cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  View Credential;
                </a>;
              </p>;            )}
          </div>;
        ))}

      </div>;
    </div>;
 if (certifications.length === 0) return null;
{
  formatDate (cert.issue date) 
}{
  cert.expiration date && ` - $ {
  formatDate (cert.expiration date) 
}` 
}</span>) 
}</div> View Credential </Link> </p>) 
}</div>) ) 
}</div> </div>) 
}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df