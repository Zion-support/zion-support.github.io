
<<<<<<< HEAD
import { format } from 'date-fns',
import { Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button',
import { Card, CardContent } from '@/components/ui/card',
import { Education } from '@/types/resume',
import { EducationItemProps } from './types',
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
=======

export function EducationItem(_{_education, _onEdit, _onDelete}: EducationItemProps) {_return (
    <Card className="bg-muted/40">
      <CardContent className="pt-6">
        <div className="flex justify-between">
          <div>
            <h4 className="font-medium">{education.degree}</h4>
            <p className="text-sm text-muted-foreground">{_education.institution}</p>
            {_education.field_of_study && (
              <p className="text-sm text-muted-foreground">{education.field_of_study}</p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {_typeof education.start_date === 'string' 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ? education.start_date 
                : format(education.start_date, _'MMM yyyy')} - {_education.is_current 
                ? 'Present' 
                : (education.end_date ? (typeof education.end_date === 'string' 
                  ? education.end_date 
                  : format(education.end_date, _'MMM yyyy')) : '')}
            </p>
<<<<<<< HEAD
            {education.location && (
              <p className=&quot;text-xs text-muted-foreground&quot;>{education.location}</p>
=======
            {_education.location && (
              <p className="text-xs text-muted-foreground">{education.location}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            )}
          </div>
          <div className=&quot;flex gap-2&quot;>
            <Button
<<<<<<< HEAD
              variant=&quot;ghost&quot;
              size=&quot;icon&quot;
              onClick={() => onEdit(education)}
              aria-label=&quot;Edit education&quot;
=======
              variant="ghost"
              size="icon"
              onClick={_() => onEdit(education)}
              aria-label="Edit education"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Edit className=&quot;h-4 w-4&quot; />
            </Button>
            <Button
<<<<<<< HEAD
              variant=&quot;ghost&quot;
              size=&quot;icon&quot;
              onClick={() => onDelete(education.id!)}
              aria-label=&quot;Delete education&quot;
=======
              variant="ghost"
              size="icon"
              onClick={_() => onDelete(education.id!)}
              aria-label="Delete education"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Trash2 className=&quot;h-4 w-4&quot; />
            </Button>
          </div>
        </div>
<<<<<<< HEAD
        {education.description && (
          <p className=&quot;text-sm mt-3 line-clamp-2&quot;>{education.description}</p>
=======
        {_education.description && (
          <p className="text-sm mt-3 line-clamp-2">{education.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )}
      </CardContent>
    </Card>
  )
}
