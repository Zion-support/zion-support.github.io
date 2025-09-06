<<<<<<< HEAD
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';

export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
  return (
    <Badge
      key={skill.id}
      variant='secondary'
      className='flex items-center gap-1 py-1.5 px-3'
    >
      {skill.name}
      {skill.proficiency && (
        <span className='ml-1 text-xs opacity-60'>({skill.proficiency}/5)</span>
      )}
      <Button
        variant='ghost'
        size='icon'
        className='h-5 w-5 p-0 ml-1'
        onClick={() => onDelete(skill.id!, category)}
        aria-label='Delete skill'
      >
        <Trash2 className='h-3 w-3' />
      </Button>
    </Badge>
  );
=======
 <Badge key= {;
  skill.id ;
}variant="secondary" className="flex items-center gap-1 py-1.5 px-3" > > <Trash2 className="h-3 w-3" /> </Button> </Badge>) ;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
"