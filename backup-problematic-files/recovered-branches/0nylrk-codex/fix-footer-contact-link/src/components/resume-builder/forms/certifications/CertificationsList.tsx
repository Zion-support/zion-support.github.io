
=======
import { Certification } from '@/types/resume',;
import { Card, CardContent } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Edit, Trash2 } from 'lucide-react',;
import { format } from 'date-fns',;
;
interface CertificationsListProps {;
  certifications:Certification[],;
  onEdit:(cert:Certification) => void,;
  onDelete:(id:string) => void;
}
;
export function CertificationsList({ certifications, onEdit, onDelete } CertificationsListProps) {;
  if (certifications.length === 0) {;
    return null,;
  }
;
  return (;
    <div className="space-y-4">;
      <h3 className="text-md font-medium">Added Certifications</h3>;
      {certifications.map((cert) => (;
        <Card key={cert.id} className="bg-muted/40">;
          <CardContent className="pt-6">;
            <div className="flex justify-between">;
              <div>;
                <h4 className="font-medium">{cert.name}</h4>;
                <p className="text-sm text-muted-foreground">{cert.issuing_organization}</p>;
                <p className="text-xs text-muted-foreground mt-1">;
                  Issued:{cert.issue_date ? (typeof cert.issue_date === 'string' ;
                    ? cert.issue_date ;
                    :format(cert.issue_date, 'MMM yyyy')) :'N/A'}
                  {cert.expiration_date && (;
                    <> · Expires:{typeof cert.expiration_date === 'string' ;
                      ? cert.expiration_date ;
                      :format(cert.expiration_date, 'MMM yyyy')}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    </>;
                  )}
                </p>;
              </div>;
              <div className="flex gap-2">;
<<<<<<< HEAD

                  onClick={() => onEdit(cert)}
                >;
                  <Edit className="h-4 w-4" />;
                </Button>;

                >;
                  <Trash2 className="h-4 w-4" />;
                </Button>;
              </div>;
            </div>;

          </CardContent>;
        </Card>;
      ))}
    </div>;

