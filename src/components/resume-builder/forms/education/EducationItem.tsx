
import { Button } from '@/components/ui/button'
import { EducationItemProps } from './types'
export function EducationItem({
  education
  onEdit
  onDelete
}: EducationItemProps) {

          </div>;
          <div className='flex gap-2'>;
            <Button
              variant='ghost'
              size='icon'
              onClick={() => onEdit(education)}
              aria-label='Edit education'            >;
              <Edit className='h-4 w-4' />;
            </Button>;
