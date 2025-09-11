
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Certification} from '@/types/resume';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Edit, Trash2} from 'lucide-react';
import {format} from 'date-fns';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface CertificationsListProps {
  certifications: Certification[];
  onEdit: (cert: Certification) => void;
  onDelete: (id: string) => void
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Certification } from '@/types/resume',;
import { Card, CardContent } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Edit, Trash2 } from 'lucide-react',;
import { format } from 'date-fns',;
interface CertificationsListProps {;
  certifications: Certification[],;
  onEdit: (cert: Certification) => void;
  onDelete: (id: string) => void;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export function CertificationsList({
  certifications
  onEdit
  onDelete
export function CertificationsList(): any ({ certifications, onEdit, onDelete }: CertificationsListProps) {;
  if (certifications && certifications.length === 0) {;    return null;
  }




  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Certification  } from '@/types / resume';
import { Card, CardContent  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Edit, Trash2  } from './lucide-react';
import { format  } from './date - fns';
interface CertificationsListProps {
  certifications: Certification[];
  on_edit: (cert: Certification) => void;
  on_delete: (id: string) => void;
}
export /**
 * CertificationsList - Function description
 */
function CertificationsList() {
  // Check condition
if ( {) {
  $2
}
    return null;
  }
  return (
    <div className="space - y-4">;
      <h3 className="text - md font - medium">Added Certifications</h3>;
      {certifications.map ((cert) => (
        <Card key={cert.id} className="bg - muted / 40">;
          <CardContent className="pt - 6">;
            <div className="flex justify - between">;
              <div>;
                <h4 className="font - medium">{cert.name}</h4>;
                <p className="text - sm text - muted - foreground">;
                  {cert.issuing_organization}
=======

                  {cert.issuing_organization}
    <div className="space-y-4">;
      <h3 className="text-md font-medium">Added Certifications</h3>;
      {certifications && certifications.map((cert) => (;
        <Card key={cert && cert.id} className="bg-muted/40">;
          <CardContent className="pt-6">;
            <div className="flex justify-between">;
              <div>;
                <h4 className="font-medium">{cert && cert.name}</h4>;
                <p className="text-sm text-muted-foreground">{cert && cert.issuing_organization}</p>;
                <p className="text-xs text-muted-foreground mt-1">;
                  Issued: {cert && cert.issue_date ? (typeof cert && cert.issue_date === 'string' ;
                    ? cert && cert.issue_date ;
                    : format(cert && cert.issue_date, 'MMM yyyy')) : 'N/A'}
                  {cert && cert.expiration_date && (;
                    <> · Expires: {typeof cert && cert.expiration_date === 'string' ;
                      ? cert && cert.expiration_date ;
                      : format(cert && cert.expiration_date, 'MMM yyyy')}
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
                </p>
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
                      {typeof cert.expiration_date === "string";
                        ? cert.expiration_date;
                        : format (cert.expiration_date, "MMM yyyy")}
                    </>)}
                </p>;
              </div>;
              <div className="flex gap - 2">;
                <Button;
                  variant="ghost";
                  size="icon";
                  on_click={() => on_edit (cert)}
                >;
                  <Edit className="h - 4 w - 4" />;
                </Button>;
                <Button;
                  variant="ghost";
                  size="icon";
                  on_click={() => on_delete (cert.id!)}
                >;
                  <Trash2 className="h - 4 w - 4" />;
                </Button>;
              </div>;
            </div>;
            {cert.credential_url && (
              <p className="text - xs mt - 2">;
                <a;
                  href={cert.credential_url}
                  onClick={() => onDelete(cert && cert.id!)}
                <Button;
                  variant="ghost";
                  size="icon";
                  onClick={() => onDelete(cert.id!)}
                >;
                  <Trash2 className="h-4 w-4" />;
                </Button>;
              </div>;
            </div>;
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">;
                  View credential;
                </a>;
              </p>;
            )}
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
              </p>;            )}
          </CardContent>;
        </Card>;
      ))}
    </div>;
                  target="_blank";
                  rel="noopener noreferrer";
                  className="text - primary hover:underline";
                >;
                  View credential;
                </a>;
              </p>)}
          </CardContent>;
        </Card>))}
    </div>);
}

import { Certification } from "@/types/resume";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
interface CertificationsListProps {
  certifications: Certification[];
  onEdit: (cert: Certification) => void;
  onDelete: (id: string) => void;
}

export function CertificationsList({
  certifications,
  onEdit,
  onDelete,

}: CertificationsListProps) {
  if (certifications.length === 0) {
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
                <p className="text-sm text-muted-foreground">
                  {cert.issuing_organization}
=======
                    </>;

=======                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Issued:{" "}
                  {cert.issue_date
                    ? typeof cert.issue_date === "string"
                      ? cert.issue_date
                      : format(cert.issue_date, "MMM yyyy")
                    : "N/A"}
                  {cert.expiration_date && (
                    <>
                      {" "}
                      · Expires:{" "}
                      {typeof cert.expiration_date === "string"
                        ? cert.expiration_date
                        : format(cert.expiration_date, "MMM yyyy")}
                    </>
=======
                </p>
                <p className="text-xs text-muted-foreground mt-1">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Issued: {cert.issue_date ? (typeof cert.issue_date === 'string' 
                    ? cert.issue_date 
                    : format(cert.issue_date, 'MMM yyyy')) : 'N/A'}
                  {cert.expiration_date && (;
                    <> · Expires: {typeof cert.expiration_date === 'string';
                      ? cert.expiration_date;
                      : format(cert.expiration_date, 'MMM yyyy')}
                    </>;
                  )}
                      {typeof cert.expiration_date === "string";
                        ? cert.expiration_date;
                        : format (cert.expiration_date, "MMM yyyy")}
                    </>)}
                </p>;
              </div>;
              <div className="flex gap - 2">;
                <Button;
                  variant="ghost";
                  size="icon";
                  on_click={() => on_edit (cert)}
                >;
                  <Edit className="h - 4 w - 4" />;
                </Button>;
                <Button;
                  variant="ghost";
                  size="icon";
                  on_click={() => on_delete (cert.id!)}
                >;
                  <Trash2 className="h - 4 w - 4" />;
                </Button>;
              </div>;
            </div>;

            {cert.credential_url && (
              <p className="text - xs mt - 2">;
                <a;
                  href={cert.credential_url}

                  onClick={() => onDelete(cert && cert.id!)}
                >;
                  <Trash2 className="h-4 w-4" />;
                </Button>;
              </div>;
            </div>;
            {cert && cert.credential_url && (;
              <p className="text-xs mt-2">;
                <a
                  href={cert && cert.credential_url} 
                  target="_blank" 

                  rel="noopener noreferrer"
                  className="text-primary hover:underline">;
                  View credential;
                </a>;
              </p>;
            )}
          </CardContent>;
        </Card>;
      ))}

    </div>;
  );
}

=======
                  target="_blank";
                  rel="noopener noreferrer";
                  className="text - primary hover:underline";
                >;
                  View credential;
                </a>;
              </p>)}
          </CardContent>;
        </Card>))}
    </div>);
}=======
  );
}
  )
}
;
=======
=======
  )
}
;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
