
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Edit, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { EducationItemProps } from './types'
export function EducationItem({
  education
  onEdit
  onDelete
}: EducationItemProps) {

  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
              aria-label='Edit education'            >
              <Edit className='h-4 w-4' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => onDelete(education.id!)}
              aria-label='Delete education'            >
              <Trash2 className='h-4 w-4' />            </Button>
          </div>
        </div>
        {education.description && (
<<<<<<< HEAD
          <p className='text-sm mt-3 line-clamp-2'>{education.description}</p>        )}
      </CardContent>
    </Card>
  )
}              <Trash2 className="h-4 w-4" />
    <Card className="bg-muted/40">
      <CardContent className="pt-6">
        <div className="flex justify-between">
          <div>
            <h4 className="font-medium">{education.degree}</h4>
            <p className="text-sm text-muted-foreground">{education.institution}</p>
            {education.field_of_study && (
              <p className="text-sm text-muted-foreground">{education.field_of_study}</p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {typeof education.start_date === 'string' 
                ? education.start_date 
                : format(education.start_date, 'MMM yyyy')} - {education.is_current 
                ? 'Present' 
                : (education.end_date ? (typeof education.end_date === 'string' 
                  ? education.end_date 
                  : format(education.end_date, 'MMM yyyy')) : '')}
            </p>
            {education.location && (
              <p className="text-xs text-muted-foreground">{education.location}</p>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onEdit(education)}
              aria-label="Edit education"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(education.id!)}
              aria-label="Delete education"
            >
              <Trash2 className="h-4 w-4" />
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            </Button>
          </div>
        </div>
        {education.description && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


              onClick={() => onDelete(education && education.id!)}
              aria-label='Delete education'            >;
              <Trash2 className='h-4 w-4' />            </Button>;
          </div>;
        </div>;
        {education && education.description && (;
          <p className='text-sm mt-3 line-clamp-2'>{education && education.description}</p>        )}
      </CardContent>;
    </Card>;
  );
}              <Trash2 className="h-4 w-4" />;
            </Button>;
          </div>;
        </div>;
        {education && education.description && (;
          <p className='text-sm mt-3 line-clamp-2'>{education && education.description}</p>          <p className="text-sm mt-3 line-clamp-2">{education && education.description}</p>;

    </Card>;
  );
};
<<<<<<< HEAD

          <p className="text-sm mt-3 line-clamp-2">{education.description}</p>
        )}
      </CardContent>;
    </Card>;
  );

}

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <p className="text-sm mt-3 line-clamp-2">{education.description}</p>
        )}
      </CardContent>;
    </Card>;
  );
}
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
