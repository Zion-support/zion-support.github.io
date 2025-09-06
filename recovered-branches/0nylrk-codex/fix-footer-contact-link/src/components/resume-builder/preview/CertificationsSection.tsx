<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
import { Certification  } from '@/types/resume';
import { format } from 'date-fns';
interface CertificationsSectionProps {
  certifications: Certification[];
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}


import {Certification} from '@/types/resume';
import {format} from 'date-fns';
interface CertificationsSectionProps {
  certifications: Certification[]
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import {Certification} from '@/types / resume';
import {format} from 'date - fns';

interface CertificationsSectionProps {
  certifications: Certification[];
}
<<<<<<< HEAD

<<<<<<< HEAD


<<<<<<< HEAD
=======

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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {Certification} from '@/types/resume';
import {format} from 'date-fns';
interface CertificationsSectionProps {
  certifications: Certification[]
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Certification } from '@/types/resume',;
import { format } from 'date-fns',;
interface CertificationsSectionProps {;
  certifications: Certification[];
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
;
export function CertificationsSection({ certifications }: CertificationsSectionProps) {;
  const formatDate = (date: Date | string | undefined) => {;
    if (!date) return '',;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM yyyy');
<<<<<<< HEAD
    }
<<<<<<< HEAD

  if (certifications.length === 0) return null,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

    return format(date, 'MMM yyyy')
  },

<<<<<<< HEAD

  if (certifications.length === 0) return null,
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    return format(date, 'MMM yyyy');
  };
    return format(date, 'MMM yyyy')
  },

  if (certifications.length === 0) return null,
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {Certification} from '@/types/resume';
import {format} from 'date-fns';
interface CertificationsSectionProps {;
  certifications: Certification[];
}

export function CertificationsSection(): any ({ certifications }: CertificationsSectionProps) {;
  const formatDate = (date: Date | string | undefined) => {;
    if (!date) return '',;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM yyyy');
    }
    return format(date, 'MMM yyyy');
  };

  if (certifications && certifications.length === 0) return null;

  return (
    <div>;
      <h2 className="text-lg font-semibold border-b mb-3">Certifications</h2>;
      <div className="space-y-2">;
        {certifications && certifications.map((cert, index) => (;
          <div key={cert && cert.id || index} className="space-y-1">;
            <div className="flex justify-between">;
              <h3 className="text-sm font-medium">{cert && cert.name}</h3>;
              {cert && cert.issue_date && (;
                <span className="text-sm">;
                  {formatDate(cert && cert.issue_date)}
                  {cert && cert.expiration_date && ` - ${formatDate(cert && cert.expiration_date)}`}
                </span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              )}
            </div>;
            <p className="text-sm">{cert && cert.issuing_organization}</p>;
            {cert && cert.credential_url && (;
              <p className="text-sm">;
                <a href={cert && cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">;
                  View Credential;
                </a>;
              </p>;
            )}
          </div>;
        ))}

      </div>;
    </div>;
  );
}

=======
=======

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
=======
                </span>;
interface CertificationsSectionProps {
  certifications: Certification[];
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              )}
=======
    }              )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </div>;
            <p className="text-sm">{cert.issuing_organization}</p>;
            {cert.credential_url && (;
              <p className="text-sm">;
                <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">;
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