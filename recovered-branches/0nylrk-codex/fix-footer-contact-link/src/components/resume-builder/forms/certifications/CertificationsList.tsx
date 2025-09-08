

import { Certification  } from '@/types/resume';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Edit, Trash2  } from 'lucide-react';
import { format } from 'date-fns';


import {Certification} from '@/types/resume';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Edit, Trash2} from 'lucide-react';
import {format} from 'date-fns';



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
  onDelete: (id: string) => void;





}
export function CertificationsList({
  certifications
  onEdit
  onDelete

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


                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(cert)}



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

  )
}
;




