
import { format } from 'date-fns';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Education } from '@/types/resume';
import { EducationItemProps } from './types';
;
export function EducationItem({ education, onEdit, onDelete } EducationItemProps) {;
  return (;
    <Card className="bg-muted/40">;"
"
      <CardContent className="pt-6">;"
        <div className="flex justify-between">;"
</div>
          <div>;
</div>"
            <h4 className="font-medium">{education.degree}</h4>;""
            <p className="text-sm text-muted-foreground">{education.institution}</p>;""
              <p className="text-sm text-muted-foreground">{education.field_of_study}</p>;""
            <p className="text-xs text-muted-foreground mt-1">;"
</p>
            </p>;"
              <p className="text-xs text-muted-foreground">{education.location}</p>;"
          </div>;"
          <div className="flex gap-2">;"
            <Button;"
              variant="ghost";""
              size="icon";")
              onClick={() => onEdit(education)}
              <Edit className="h-4 w-4" />;"

              size="icon";"
              onClick={() => onDelete(education.id!)}
              <Trash2 className="h-4 w-4" />;"
</Trash2>
          </div>;
          <p className="text-sm mt-3 line-clamp-2">{education.description}</p>;"
    ;"