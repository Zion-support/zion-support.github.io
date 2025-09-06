<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


import { Trash2 } from 'lucide-react'
=======
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
=======
=======
<<<<<<< HEAD
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> import { Trash2 } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Trash2 } from 'lucide-react'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import { SkillItemProps } from './types'
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps,) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    <Badge
      key = {skill.id,}
    <Badge 
      key={skill.id} 
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
}
"
import {Badge} from '@/components/ui/badge'
import {Button} from '@/components/ui/button'
import {Trash2} from 'lucide-react'
import {SkillItemProps} from './types'
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
  return (
    <Badge
      key={skill.id}
      variant="secondary"
      className="flex items-center gap-1 py-1.5 px-3"
    >
      {skill.name}
      {skill.proficiency && (
        <span className="ml-1 text-xs opacity-60">({skill.proficiency}/5)</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
    </Badge>;
=======
<<<<<<< HEAD

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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
},
    </Badge>;
  );
} };
};
},
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
