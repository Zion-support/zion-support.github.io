<<<<<<< HEAD


import { Trash2 } from 'lucide-react'
=======
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
>>>>>>> import { Trash2 } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import { SkillItemProps } from './types'
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps,) => {
  return (
<<<<<<< HEAD

      variant="secondary"
      className="flex items-center gap-1 py-1.5 px-3"
    >
      {skill.name}
      {skill.proficiency && (
        <span className="ml-1 text-xs opacity-60">({skill.proficiency}/5)</span>
=======
    <Badge
      key = {skill.id,}
      variant="secondary"
      className="flex items-center gap-1 py-1.5 px-3"
    >
      {skill.name}
      {skill.proficiency && (
        <span className="ml-1 text-xs opacity-60">({skill.proficiency}/5)</span>
      )}
      <Button
        variant="ghost"
        size="icon"
        className="h-5 w-5 p-0 ml-1"
        onClick={() => onDelete(skill.id!, category)}
        aria-label="Delete skill"
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </Badge>
  )
    </Badge>
  )
} }
}


import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps,) => {;
  return (
    <Badge
      key = {skill && skill.id,}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      variant="secondary"
      className="flex items-center gap-1 py-1 && 1.5 px-3">;
      {skill && skill.name}
      {skill && skill.proficiency && (;
        <span className="ml-1 text-xs opacity-60">({skill && skill.proficiency}/5)</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
      <Button
        variant="ghost"
        size="icon"
        className="h-5 w-5 p-0 ml-1"
<<<<<<< HEAD
        onClick={() => onDelete(skill.id!, category)}
        aria-label="Delete skill"
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </Badge>
  )

    </Badge>;
=======

        onClick = {() => onDelete(skill && skill.id!, category),}
        aria-label="Delete skill";
      >;
        <Trash2 className="h-3 w-3" />;
      </Button>;
>>>>>>>     </Badge>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  );
};
<<<<<<< HEAD

},

=======
},
>>>>>>> >>>>>>> 
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
