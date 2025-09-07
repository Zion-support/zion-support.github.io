<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
import { Certification  } from '@/types/resume';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Edit, Trash2  } from 'lucide-react';
import { format } from 'date-fns';
<<<<<<< HEAD
interface CertificationsListProps {
  certifications: Certification[],
  onEdit: (cert: Certification) => void,
  onDelete: (id: string) => void
}

=======
<<<<<<< HEAD

=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {Certification} from '@/types/resume';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Edit, Trash2} from 'lucide-react';
import {format} from 'date-fns';

<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Certification  } from '@/types/resume';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Edit, Trash2  } from 'lucide-react';
import { format } from 'date-fns';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface CertificationsListProps {

  certifications: Certification[];
  onEdit: (cert: Certification) => void;
  onDelete: (id: string) => void
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Certification } from '@/types/resume',;
import { Card, CardContent } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Edit, Trash2 } from 'lucide-react',;
import { format } from 'date-fns',;
interface CertificationsListProps {;
  certifications: Certification[],;
  onEdit: (cert: Certification) => void;
  onDelete: (id: string) => void;

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
export function CertificationsList({
  certifications
  onEdit
  onDelete
<<<<<<< HEAD
=======
}: CertificationsListProps) {
  if (certifications.length === 0) {

    return null;
  }

import { Certification } from "@/types/resume";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";

import { Certification } from "@/types/resume";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";

interface CertificationsListProps {
  certifications: Certification[];
  onEdit: (cert: Certification) => void;
  onDelete: (id: string) => void
import { Certification } from '@/types/resume',;
import { Card, CardContent } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Edit, Trash2 } from 'lucide-react',;
import { format } from 'date-fns',;
interface CertificationsListProps {;
  certifications: Certification[],;
  onEdit: (cert: Certification) => void;
  onDelete: (id: string) => void;                  )}

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

<<<<<<< HEAD
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
                </p>
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
                  )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




  return (

<<<<<<< HEAD
  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
                  {cert.issuing_organization}
                </p>;
                <p className="text - xs text - muted - foreground mt - 1">;
                  Issued:{" "}
                  {cert.issue_date;
                    ? typeof cert.issue_date === "string";
                      ? cert.issue_date;
                      : format (cert.issue_date, "MMM yyyy");
                    : "N / A"}
                  {cert.expiration_date && (
                    <>;
                      {" "}
                      · Expires:{" "}
=======

                  {cert.issuing_organization}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> merged-prs-20250907-203621
export function CertificationsList({
  certifications,
  onEdit,
  onDelete,
<<<<<<< HEAD
}: CertificationsListProps) {
  if (certifications.length === 0) {
    return null
  }
=======

}: CertificationsListProps) {
  if (certifications.length === 0) {
    return null;
  }

>>>>>>> merged-prs-20250907-203621
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
                </p>
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
<<<<<<< HEAD
                  )}
                </p>
              </div>
              <div className="flex gap-2">
=======
=======
                    </>;

=======
                </p>
                <p className="text-xs text-muted-foreground mt-1">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Issued: {cert.issue_date ? (typeof cert.issue_date === 'string' 
                    ? cert.issue_date 
                    : format(cert.issue_date, 'MMM yyyy')) : 'N/A'}
                  {cert.expiration_date && (;
                    <> · Expires: {typeof cert.expiration_date === 'string';
                      ? cert.expiration_date;
                      : format(cert.expiration_date, 'MMM yyyy')}
                    </>;
                  )}
<<<<<<< HEAD
                </p>
              </div>
              <div className="flex gap-2">
=======
                </p>;
              </div>;
              <div className="flex gap-2">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(cert)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(cert.id!)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {cert.credential_url && (
              <p className="text-xs mt-2">
                <a
                  href={cert.credential_url}
<<<<<<< HEAD
=======
=======
                >;
                  <Edit className="h-4 w-4" />;
                </Button>;
                <Button
                  variant="ghost"
                  size="icon"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                </p>;
              </div>;"
              <div className="flex gap-2">;

                </Button>;
"
                      {typeof cert.expiration_date === "string";
                        ? cert.expiration_date;"
                        : format (cert.expiration_date, "MMM yyyy")}
                    </>)}
                </p>;
              </div>;"
              <div className="flex gap - 2">;
                <Button;"
                  variant="ghost";"
                  size="icon";
                  on_click={() => on_edit (cert)}
                >;"
                  <Edit className="h - 4 w - 4" />;

                </Button>;
                <Button;"
                  variant="ghost";"
                  size="icon";
                  on_click={() => on_delete (cert.id!)}

                </Button>;
              </div>;
            </div>;

<<<<<<< HEAD
=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View credential
                </Link>
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
<<<<<<< HEAD
  )
}
=======
  )
}
;

<<<<<<< HEAD
  ),;}
 ? cert.issue date : format (cert.issue date, 'MMM yyyy') ) : 'N/A' 
}{
  cert.expiration date && (<> · Expires: {
  typeof cert.expiration date === 'string' ? cert.expiration date : format (cert.expiration date, 'MMM yyyy') 
}</>) 
}</p> </div> <div className="flex gap-2" > <Button > <Edit className="h-4 w-4" /> </Button> <Button > <Trash2 className="h-4 w-4" /> </Button> </div> </div> <a href= {
  cert.credential url 
}target="blank" rel="noopener noreferrer" className="text-primary hover:underline" > View credential </Link> </p>) 
}</CardContent> </Card>) ) 
}</div>) 
}
  );
}
}
;

  );
}
  )
}
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  )

}
;

<<<<<<< HEAD
  ),;}
 ? cert.issue date : format (cert.issue date, 'MMM yyyy') ) : 'N/A' 
}{
  cert.expiration date && (<> · Expires: {
  typeof cert.expiration date === 'string' ? cert.expiration date : format (cert.expiration date, 'MMM yyyy') 
}</>) 
}</p> </div> <div className="flex gap-2" > <Button > <Edit className="h-4 w-4" /> </Button> <Button > <Trash2 className="h-4 w-4" /> </Button> </div> </div> <a href= {
  cert.credential url 
}target="blank" rel="noopener noreferrer" className="text-primary hover:underline" > View credential </Link> </p>) 
}</CardContent> </Card>) ) 
}</div>) 
});
}
}
;

  );
}
  )
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
