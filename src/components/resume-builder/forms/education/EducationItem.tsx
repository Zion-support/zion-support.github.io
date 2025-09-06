
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </Button>
          </div>
        </div>
        {education.description && (
=======
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
