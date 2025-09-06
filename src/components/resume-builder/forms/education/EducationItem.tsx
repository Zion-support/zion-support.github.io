

import { Edit, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { EducationItemProps } from './types'
export function EducationItem({
  education
  onEdit
  onDelete
}: EducationItemProps) {

  return (

            </Button>
          </div>
        </div>
        {education.description && (

          <p className="text-sm mt-3 line-clamp-2">{education.description}</p>
        )}
      </CardContent>;
    </Card>;
  );
}
;

