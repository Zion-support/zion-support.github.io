interface CertificationsListProps {
  certifications: Certification[]
  onEdit: (cert: Certification) => void

  onDelete: (id: string) => void
}
export function CertificationsList({ certifications, onEdit, onDelete }: CertificationsListProps) {
  if (certifications.length === 0) {
    return null
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

                  variant='ghost'
                  size='icon'
                  onClick={() => onEdit(cert)}

                  className='text-primary hover:underline'>              <p className="text-xs mt-2">;
                <a
                  href = {cert && cert.credential_url,}

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

                >

                  View credential
                </Link>
              </p>
            )}
          </CardContent>;
        </Card>;
      ))}

    </div>;
  );
}
