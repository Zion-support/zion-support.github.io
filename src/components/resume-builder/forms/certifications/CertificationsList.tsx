<<<<<<< HEAD

<<<<<<< HEAD
=======
import { Certification  } from '@/types/resume';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

import { Certification  } from '@/types/resume';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
=======
import { Certification } from '@/types/resume'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Edit, Trash2 } from 'lucide-react'
import { format } from 'date-fns';
interface CertificationsListProps {

<<<<<<< HEAD
=======
  certifications: Certification[]
  onEdit: (cert: Certification) => void
  onDelete: (id: string) => void
export function CertificationsList({
  certifications
  onEdit
  onDelete
}: CertificationsListProps) {  if (certifications.length === 0) {
export function CertificationsList({ certifications, onEdit, onDelete }: CertificationsListProps) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface CertificationsListProps {
  certifications: Certification[]
  onEdit: (cert: Certification) => void

  onDelete: (id: string) => void
}
export function CertificationsList({ certifications, onEdit, onDelete }: CertificationsListProps) {
  if (certifications.length === 0) {
    return null
  }
<<<<<<< HEAD
  return (
    <div className='space-y-4'>
      <h3 className='text-md font-medium'>Added Certifications</h3>
      {certifications.map(cert => (
        <Card key={cert.id} className='bg-muted/40'>
          <CardContent className='pt-6'>
            <div className='flex justify-between'>
                <h4 className='font-medium'>{cert.name}</h4>
                <p className='text-sm text-muted-foreground'>
                  {cert.issuing_organization}
                </p>
                <p className='text-xs text-muted-foreground mt-1'>
                  Issued:{' '}
                  {cert.issue_date
                    ? typeof cert.issue_date === 'string'
                      ? cert.issue_date
                      : format(cert.issue_date, 'MMM yyyy')
                    : 'N/A'}
                  {cert.expiration_date && (
                    <>
                      {' '}
                      · Expires:{' '}
                      {typeof cert.expiration_date === 'string'
                        ? cert.expiration_date
                        : format(cert.expiration_date, 'MMM yyyy')}                    </>
                  )}
                </p>
              </div>
              <div className='flex gap-2'>
                    <> · Expires: {typeof cert.expiration_date === 'string'
                      ? cert.expiration_date
                      : format(cert.expiration_date, 'MMM yyyy')}
              <div>
                <h4 className="font-medium">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuing_organization}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Issued: {cert.issue_date ? (typeof cert.issue_date === 'string'
                    ? cert.issue_date
                    : format(cert.issue_date, 'MMM yyyy')) : 'N/A'}
                  {cert.expiration_date && (
                    <> · Expires: {typeof cert.expiration_date === 'string'
                      ? cert.expiration_date
                      : format(cert.expiration_date, 'MMM yyyy')}
                    </>
                  )}
                </p>
              </div>
              <div className='flex gap-2'>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => onEdit(cert)}
                  aria-label='Edit certification'                  variant="ghost"
                  size="icon"
                  onClick = {() => onEdit(cert),}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Certification } from '@/types/resume',;
import { Card, CardContent } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Edit, Trash2 } from 'lucide-react';
import { format } from 'date-fns',;
interface CertificationsListProps {;
  certifications: Certification[];
  onEdit: (cert: Certification) => void;
  onDelete: (id: string) => void;
export function CertificationsList(): any ({;
  certifications,;
  onEdit,;
  onDelete,;
}: CertificationsListProps) {  if (certifications && certifications.length === 0) {;
export function CertificationsList(): any ({ certifications, onEdit, onDelete }: CertificationsListProps) {;
import { Certification } from '@/types/resume';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
interface CertificationsListProps {;
  certifications: Certification[],;
  onEdit: (cert: Certification) => void,;
  onDelete: (id: string) => void;
}

  return (
    <div className="space-y-4">
      <h3 className="text-md font-medium">Added Certifications</h3>
      {certifications.map((cert) => (
        <Card key={cert.id} className="bg-muted/40">
          <CardContent className="pt-6">
            <div className="flex justify-between">
=======
  return (
    <div className='space-y-4'>
      <h3 className='text-md font-medium'>Added Certifications</h3>
      {certifications.map(cert => (
        <Card key={cert.id} className='bg-muted/40'>
          <CardContent className='pt-6'>
            <div className='flex justify-between'>
                <h4 className='font-medium'>{cert.name}</h4>
                <p className='text-sm text-muted-foreground'>
                  {cert.issuing_organization}
                </p>
                <p className='text-xs text-muted-foreground mt-1'>
                  Issued:{' '}
                  {cert.issue_date
                    ? typeof cert.issue_date === 'string'
                      ? cert.issue_date
                      : format(cert.issue_date, 'MMM yyyy')
                    : 'N/A'}
                  {cert.expiration_date && (
                    <>
                      {' '}
                      · Expires:{' '}
                      {typeof cert.expiration_date === 'string'
                        ? cert.expiration_date
                        : format(cert.expiration_date, 'MMM yyyy')}                    </>
                  )}
                </p>
              </div>
              <div className='flex gap-2'>
                    <> · Expires: {typeof cert.expiration_date === 'string'
                      ? cert.expiration_date
                      : format(cert.expiration_date, 'MMM yyyy')}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div>
                <h4 className="font-medium">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuing_organization}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Issued: {cert.issue_date ? (typeof cert.issue_date === 'string' 
                    ? cert.issue_date 
                    : format(cert.issue_date, 'MMM yyyy')) : 'N/A'}
                  {cert.expiration_date && (;
                    <> · Expires: {typeof cert.expiration_date === 'string';
                      ? cert.expiration_date;
                      : format(cert.expiration_date, 'MMM yyyy')}
<<<<<<< HEAD
                    </>;
                  )}
                </p>
              </div>
              <div className="flex gap-2">
=======
                    </>
                  )}
                </p>
              </div>
              <div className='flex gap-2'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(cert)}
<<<<<<< HEAD
<<<<<<< HEAD

                  aria-label="Edit certification"
=======
>>>>>>>                   aria-label="Edit certification"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  aria-label='Edit certification'                  variant="ghost"
                  size="icon"
                  onClick = {() => onEdit(cert),}
=======

import { Certification } from '@/types/resume',;
import { Card, CardContent } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Edit, Trash2 } from 'lucide-react';
import { format } from 'date-fns',;
interface CertificationsListProps {;
  certifications: Certification[],;
  onEdit: (cert: Certification) => void;
  onDelete: (id: string) => void;
}
;
export function CertificationsList({ certifications, onEdit, onDelete }: CertificationsListProps) {;
  if (certifications.length === 0) {;
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-md font-medium">Added Certifications</h3>
      {certifications.map((cert) => (
        <Card key={cert.id} className="bg-muted/40">
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuing_organization}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Issued: {cert.issue_date ? (typeof cert.issue_date === 'string' 
                    ? cert.issue_date 
                    : format(cert.issue_date, 'MMM yyyy')) : 'N/A'}
                  {cert.expiration_date && (;
                    <> · Expires: {typeof cert.expiration_date === 'string';
                      ? cert.expiration_date;
                      : format(cert.expiration_date, 'MMM yyyy')}
                    </>;
                  )}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(cert)}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  aria-label="Edit certification"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
<<<<<<< HEAD
<<<<<<< HEAD

=======
                  variant='ghost'
                  size='icon'
                  onClick={() => onDelete(cert.id!)}
                  aria-label='Delete certification'                >
                  <Trash2 className='h-4 w-4' />                </Button>
              </div>
            </div>
            {cert.credential_url && (                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {cert.credential_url && (
              <p className='text-xs mt-2'>
                <a
                  href={cert.credential_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'                >              <p className="text-xs mt-2">
                <a
                  href = {cert.credential_url,}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                  View credential
                </a>
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>;
  );
};
}
<<<<<<< HEAD
=======
}
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(cert.id!)}
                  aria-label="Delete certification"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {cert.credential_url && (
              <p className="text-xs mt-2">
                <a 
                  href={cert.credential_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
<<<<<<< HEAD

                >

>>>>>>>                   View credential
                </a>;
              </p>;
=======
                >
                  View credential
                </Link>
              </p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            )}
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
