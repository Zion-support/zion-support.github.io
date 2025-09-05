
<<<<<<< HEAD
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
                    </>;
                  )}
                </p>;
              </div>;
              <div className="flex gap-2">;
                <Button;
                  variant="ghost";
                  size="icon";
                  onClick={() => onEdit(cert)}
                >;
                  <Edit className="h-4 w-4" />;
                </Button>;
                <Button;
                  variant="ghost";
                  size="icon";
                  onClick={() => onDelete(cert.id!)}
                >;
                  <Trash2 className="h-4 w-4" />;
                </Button>;
              </div>;
            </div>;
            {cert.credential_url && (;
              <p className="text-xs mt-2">;
                <a ;
                  href={cert.credential_url} ;
                  target="_blank" ;
                  rel="noopener noreferrer";
                  className="text-primary hover:underline";
                >;
                  View credential;
                </a>;
              </p>;
=======
import { Certification } from '@/types/resume',
import { Card, CardContent } from '@/components/ui/card',
import { Button } from '@/components/ui/button',
import { Edit, Trash2 } from 'lucide-react',
import { format } from 'date-fns',
interface CertificationsListProps {
  certifications: Certification[],
  onEdit: (cert: Certification) => void,
  onDelete: (id: string) => void
}

export function CertificationsList({ certifications, onEdit, onDelete }: CertificationsListProps) {
  if (certifications.length === 0) {
    return null
  }

  return (
    <div className=&quot;space-y-4&quot;>
      <h3 className=&quot;text-md font-medium&quot;>Added Certifications</h3>
      {certifications.map((cert) => (
        <Card key={cert.id} className=&quot;bg-muted/40&quot;>
          <CardContent className=&quot;pt-6&quot;>
            <div className=&quot;flex justify-between&quot;>
              <div>
                <h4 className=&quot;font-medium&quot;>{cert.name}</h4>
                <p className=&quot;text-sm text-muted-foreground&quot;>{cert.issuing_organization}</p>
                <p className=&quot;text-xs text-muted-foreground mt-1&quot;>
                  Issued: {cert.issue_date ? (typeof cert.issue_date === 'string'                     ? cert.issue_date 
                    : format(cert.issue_date, _'MMM yyyy')) : 'N/A'}
                  {_cert.expiration_date && (
                    <> · Expires: {typeof cert.expiration_date === 'string' 
                      ? cert.expiration_date 
                      : format(cert.expiration_date, _'MMM yyyy')}
                    </>
                  )}
                </p>
              </div>
              <div className=&quot;flex gap-2&quot;>
                <Button
                  variant=&quot;ghost&quot;
                  size=&quot;icon&quot;
                  onClick={() => onEdit(cert)}                >
                  <Edit className=&quot;h-4 w-4&quot; />
                </Button>
                <Button
                  variant=&quot;ghost&quot;
                  size=&quot;icon&quot;
                  onClick={() => onDelete(cert.id!)}                >
                  <Trash2 className=&quot;h-4 w-4&quot; />
                </Button>
              </div>
            </div>
            {cert.credential_url && (
              <p className=&quot;text-xs mt-2&quot;>                <a 
                  href={cert.credential_url} 
                  target=&quot;_blank&quot; 
                  rel=&quot;noopener noreferrer&quot;
                  className=&quot;text-primary hover:underline&quot;
                >
                  View credential
                </Link>
              </p>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            )}
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
    </div>;
  ),;
=======
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
