<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
=======
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Trash2 } from 'lucide-react'

import { SkillItemProps } from './types'
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps,) => {
  return (
<<<<<<< HEAD
    <Badge
      key = {skill.id,}
=======
    <Badge 
      key={skill.id} 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
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
<<<<<<< HEAD
    </Badge>
  )
} }
}

=======
},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
    </Badge>;
  );
};
";

import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Trash2} from 'lucide-react';
import {SkillItemProps} from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {;
  return (
    <Badge
      key={skill && skill.id} 

      variant="secondary"
      className="flex items-center gap-1 py-1 && 1.5 px-3">;
      {skill && skill.name}
      {skill && skill.proficiency && (;
        <span className="ml-1 text-xs opacity-60">({skill && skill.proficiency}/5)</span>;
      )}
      <Button
        variant="ghost"
        size="icon"
        className="h-5 w-5 p-0 ml-1"

        onClick={() => onDelete(skill && skill.id!, category)}
        aria-label="Delete skill";
      >;
        <Trash2 className="h-3 w-3" />;
      </Button>;
=======

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

},
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
