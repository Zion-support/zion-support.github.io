
import { format } from 'date-fns';
import { Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Education } from '@/types/resume';
import { EducationItemProps } from './types';

export function EducationItem({ education, onEdit, onDelete }: EducationItemProps) {
  return (
    <Card className=&quot;bg-muted/40&quot;>
      <CardContent className=&quot;pt-6&quot;>
        <div className=&quot;flex justify-between&quot;>
          <div>
            <h4 className=&quot;font-medium&quot;>{education.degree}</h4>
            <p className=&quot;text-sm text-muted-foreground&quot;>{education.institution}</p>
            {education.field_of_study && (
              <p className=&quot;text-sm text-muted-foreground&quot;>{education.field_of_study}</p>
            )}
            <p className=&quot;text-xs text-muted-foreground mt-1&quot;>
              {typeof education.start_date === 'string' 
                ? education.start_date 
                : format(education.start_date, 'MMM yyyy')} - {education.is_current 
                ? 'Present' 
                : (education.end_date ? (typeof education.end_date === 'string' 
                  ? education.end_date 
                  : format(education.end_date, 'MMM yyyy')) : '')}
            </p>
            {education.location && (
              <p className=&quot;text-xs text-muted-foreground&quot;>{education.location}</p>
            )}
          </div>
          <div className=&quot;flex gap-2&quot;>
            <Button
              variant=&quot;ghost&quot;
              size=&quot;icon&quot;
              onClick={() => onEdit(education)}
              aria-label=&quot;Edit education&quot;
            >
              <Edit className=&quot;h-4 w-4&quot; />
            </Button>
            <Button
              variant=&quot;ghost&quot;
              size=&quot;icon&quot;
              onClick={() => onDelete(education.id!)}
              aria-label=&quot;Delete education&quot;
            >
              <Trash2 className=&quot;h-4 w-4&quot; />
            </Button>
          </div>
        </div>
        {education.description && (
          <p className=&quot;text-sm mt-3 line-clamp-2&quot;>{education.description}</p>
        )}
      </CardContent>
    </Card>
  );
}
