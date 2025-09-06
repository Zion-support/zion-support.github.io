import { Certification } from '@/types/resume';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

export function CertificationsList({
  certifications,
  onEdit,
  onDelete,
}: CertificationsListProps) {  if (certifications.length === 0) {

  if (certifications.length === 0) {

    return null;
  }

  return (

              <div>
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

                    </>
                  )}
                </p>
              </div>

                >
                  <Edit className='h-4 w-4' />
                </Button>
                <Button

                >
                  <Trash2 className='h-4 w-4' />                </Button>
              </div>
            </div>
            {cert.credential_url && (

                </Button>
              </div>
            </div>
            {cert.credential_url && (