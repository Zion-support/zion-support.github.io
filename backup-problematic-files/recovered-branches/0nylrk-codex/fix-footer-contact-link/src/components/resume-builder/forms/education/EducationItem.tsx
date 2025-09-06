
=======
import { format } from 'date-fns',;
import { Edit, Trash2 } from 'lucide-react',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
import { Education } from '@/types/resume',;
import { EducationItemProps } from './types',;
;
export function EducationItem({ education, onEdit, onDelete } EducationItemProps) {;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="bg-muted/40">;
      <CardContent className="pt-6">;
        <div className="flex justify-between">;
          <div>;
<<<<<<< HEAD

              onClick={() => onEdit(education)}
            >;
              <Edit className="h-4 w-4" />;
            </Button>;

            >;
              <Trash2 className="h-4 w-4" />;
            </Button>;
          </div>;
        </div>;

