import { format } from 'date-fns';
import { Edit, Trash2 } from 'lucide-react';import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Education } from '@/types/resume';
import { EducationItemProps } from './types';
=======

import { format } from 'date-fns';
import { Edit, Trash2 } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Education } from '@/types/resume';
import { EducationItemProps } from './types';
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function EducationItem({
  education,
  onEdit,
  onDelete,
}: EducationItemProps) {
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  return (
    <Card className='bg-muted/40'>
      <CardContent className='pt-6'>
        <div className='flex justify-between'>
          <div>
            <h4 className='font-medium'>{education.degree}</h4>
            <p className='text-sm text-muted-foreground'>
              {education.institution}
            </p>
            {education.field_of_study && (
              <p className='text-sm text-muted-foreground'>
                {education.field_of_study}
              </p>
            )}
            <p className='text-xs text-muted-foreground mt-1'>
              {typeof education.start_date === 'string'
                ? education.start_date
                : format(education.start_date, 'MMM yyyy')}{' '}
              -{' '}
              {education.is_current
                ? 'Present'
                : education.end_date
                  ? typeof education.end_date === 'string'
                    ? education.end_date
                    : format(education.end_date, 'MMM yyyy')
                  : ''}
            </p>
            {education.location && (
              <p className='text-xs text-muted-foreground'>
                {education.location}
              </p>
            )}
          </div>
          <div className='flex gap-2'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => onEdit(education)}
              aria-label='Edit education'
            >
              <Edit className='h-4 w-4' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => onDelete(education.id!)}
              aria-label='Delete education'
            >
              <Trash2 className='h-4 w-4' />            </Button>
          </div>
        </div>
        {education.description && (
          <p className='text-sm mt-3 line-clamp-2'>{education.description}</p>        )}
      </CardContent>
    </Card>
  );
}
=======
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {education.description && (
<<<<<<< HEAD
          <p className='text-sm mt-3 line-clamp-2'>{education.description}</p>
=======
          <p className="text-sm mt-3 line-clamp-2">{education.description}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        )}
      </CardContent>
    </Card>
  );
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
