<<<<<<< HEAD


=======

import { Certification  } from '@/types/resume';
import { format } from 'date-fns';
interface CertificationsSectionProps {
  certifications: Certification[]
}
export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  const formatDate = $2;
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy')
    }
    return format(date, 'MMM yyyy')
  },

  if (certifications.length = $2;
interface CertificationsSectionProps {
  certifications: Certification[];

}

import { Certification  } from '@/types/resume';
import { format } from 'date-fns';
interface CertificationsSectionProps {
  certifications: Certification[]
}
export function CertificationsSection({ certifications }: CertificationsSectionProps) {

import {Certification} from '@/types / resume';

import {format} from 'date - fns';

interface CertificationsSectionProps {}
  certifications: Certification[];
}


import {Certification} from '@/types/resume';
import {format} from 'date-fns';
interface CertificationsSectionProps {
  certifications: Certification[]

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Certification } from '@/types/resume',;
import { format } from 'date-fns',;
interface CertificationsSectionProps {;
  certifications: Certification[];


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
;
export function CertificationsSection({ certifications }: CertificationsSectionProps) {;
  const formatDate = (date: Date | string | undefined) => {;
    if (!date) return '',;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM yyyy');

    }

    return format(date, 'MMM yyyy');
  };
    return format(date, 'MMM yyyy')
  },
<<<<<<< HEAD
=======

  if (certifications.length === 0) return null,
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div>
      <h2 className="text-lg font-semibold border-b mb-3">Certifications</h2>
      <div className="space-y-2">
        {certifications.map((cert, index) => (
          <div key={cert.id |index} className="space-y-1">
            <div className="flex justify-between">
              <h3 className="text-sm font-medium">{cert.name}</h3>
              {cert.issue_date && (

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <span className="text-sm">
                  {formatDate(cert.issue_date)}
                  {cert.expiration_date && ` - ${formatDate(cert.expiration_date)}`}
                </span>


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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              )}
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
              </p>;
            )}
          </div>;
        ))}

      </div>;
    </div>;

<<<<<<< HEAD
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



=======
                </a>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
