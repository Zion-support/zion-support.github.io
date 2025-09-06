<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { Certification } from '@/types/resume';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react'
import { format } from 'date-fns';
interface CertificationsListProps {
  certifications: Certification[],
  onEdit: (cert: Certification) => void,
  onDelete: (id: string) => void
}

<<<<<<< HEAD
export function CertificationsList({
  certifications,
  onEdit,
  onDelete,
}: CertificationsListProps) {
=======

import { Certification } from '@/types/resume';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react'
import { format } from 'date-fns';
interface CertificationsListProps {
  certifications: Certification[],
  onEdit: (cert: Certification) => void,
  onDelete: (id: string) => void
}

export function CertificationsList({ certifications, onEdit, onDelete }: CertificationsListProps) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export function CertificationsList({ certifications, onEdit, onDelete }: CertificationsListProps) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (certifications.length === 0) {
    return null;
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='space-y-4'>
      <h3 className='text-md font-medium'>Added Certifications</h3>
      {certifications.map(cert => (
        <Card key={cert.id} className='bg-muted/40'>
          <CardContent className='pt-6'>
            <div className='flex justify-between'>
=======
    <div className="space-y-4">
      <h3 className="text-md font-medium">Added Certifications</h3>
      {certifications.map((cert) => (
        <Card key={cert.id} className="bg-muted/40">
          <CardContent className="pt-6">
            <div className="flex justify-between">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <div>
                <h4 className="font-medium">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuing_organization}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Issued: {cert.issue_date ? (typeof cert.issue_date === 'string' 
                    ? cert.issue_date 
                    : format(cert.issue_date, 'MMM yyyy')) : 'N/A'}
                  {cert.expiration_date && (
<<<<<<< HEAD
                    <>
                      {' '}
                      · Expires:{' '}
                      {typeof cert.expiration_date === 'string'
                        ? cert.expiration_date
                        : format(cert.expiration_date, 'MMM yyyy')}
=======
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
                  {cert.expiration_date && (
                    <> · Expires: {typeof cert.expiration_date === 'string' 
                      ? cert.expiration_date 
                      : format(cert.expiration_date, 'MMM yyyy')}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <> · Expires: {typeof cert.expiration_date === 'string' 
                      ? cert.expiration_date 
                      : format(cert.expiration_date, 'MMM yyyy')}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </>
                  )}
                </p>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex gap-2'>
=======
              <div className="flex gap-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(cert)}
                  aria-label="Edit certification"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(cert.id!)}
                  aria-label="Delete certification"
                >
<<<<<<< HEAD
                  <Trash2 className='h-4 w-4' />
=======
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(cert)}
                  aria-label="Edit certification"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(cert.id!)}
                  aria-label="Delete certification"
                >
                  <Trash2 className="h-4 w-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <Trash2 className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </Button>
              </div>
            </div>
            {cert.credential_url && (
<<<<<<< HEAD
<<<<<<< HEAD
              <p className='text-xs mt-2'>
                <a
                  href={cert.credential_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <p className="text-xs mt-2">
                <a 
                  href={cert.credential_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  View credential
                </a>
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
