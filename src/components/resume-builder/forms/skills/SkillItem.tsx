<<<<<<< HEAD
<<<<<<< HEAD

import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Trash2 } from 'lucide-react'
import { SkillItemProps } from './types',
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Trash2 } from 'lucide-react'
'
import { SkillItemProps } from './types'
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
  return (
<<<<<<< HEAD
=======

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {;

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
=======
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {}
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps,) => {}
  return (
;
';
import { Badge } from '@/components/ui/badge';'
import { Button } from '@/components/ui/button';'
import { Trash2 } from 'lucide-react';'
import { SkillItemProps } from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {;


'
import { Badge } from '@/components/ui/badge';'
import { Button } from '@/components/ui/button';'
import { Trash2 } from 'lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { SkillItemProps } from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps,) => {;
  return (
    <Badge;
      key = {skill && skill.id,}
<<<<<<< HEAD
      variant="secondary"

=======
      variant="secondary""
      className="flex items-center gap-1 py-1.5 px-3"
    >
      {skill.name}
      {skill.proficiency && ("
        <span className="ml-1 text-xs opacity-60">({skill.proficiency}/5)</span>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      )}
      <Button"
        variant="ghost""
        size="icon""
        className="h-5 w-5 p-0 ml-1"

        onClick = {() => onDelete(skill && skill.id!, category),}"
        aria-label="Delete skill";
      >;"
        <Trash2 className="h-3 w-3" />;
      </Button>;
    </Badge>;
  );
};"
";
'
import {Badge} from '@/components/ui/badge';'
import {Button} from '@/components/ui/button';'
import {Trash2} from 'lucide-react';'
import {SkillItemProps} from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {;
  return (
    <Badge;
      key={skill && skill.id} 
"
      variant="secondary""
      className="flex items-center gap-1 py-1.5 px-3"
    >
      {skill.name}
      {skill.proficiency && ("
        <span className="ml-1 text-xs opacity-60">({skill.proficiency}/5)</span>
      )}
      <Button"
        variant="ghost""
        size="icon""
        className="h-5 w-5 p-0 ml-1"

        onClick={() => onDelete(skill && skill.id!, category)}"
        aria-label="Delete skill";
      >;"
        <Trash2 className="h-3 w-3" />;
      </Button>;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <Badge 
=======
    <Badge;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      key={skill.id} 
"
      variant="secondary""
      className="flex items-center gap-1 py-1.5 px-3"
    >
      {skill.name}
      {skill.proficiency && ("
        <span className="ml-1 text-xs opacity-60">({skill.proficiency}/5)</span>
      )}
      <Button"
        variant="ghost""
        size="icon""
        className="h-5 w-5 p-0 ml-1"
        onClick={() => onDelete(skill.id!, category)}"
        aria-label="Delete skill"
      >"
        <Trash2 className="h-3 w-3" />
      </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </Badge>
  )
},
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </Badge>
  )

},


    </Badge>;
  );
<<<<<<< HEAD
} };
=======
};},;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};


import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';
export const SkillItem = ({ skill, category, on_delete }: SkillItemProps) =>: any {
export const SkillItem = ({ skill, category, on_delete }: SkillItemProps, ) =>: any {
  return (
    <Badge;
      key = {skill.id, }
      variant="secondary";
      className="flex items - center gap - 1 py - 1.5 px - 3";
    >;
      {skill.name}
      {skill.proficiency && (
        <span className="ml - 1 text - xs opacity - 60">({skill.proficiency}/5)</span>)}
      <Button;
        variant="ghost";
        size="icon";
        className="h - 5 w - 5 p - 0 ml - 1";
        on_click = {() => on_delete (skill.id!, category), }
        aria - label="Delete skill";
      >;
        <Trash2 className="h - 3 w - 3" />;
      </Button>;
    </Badge>);
}
";
import {Badge} from '@/components / ui / badge';
import {Button} from '@/components / ui / button';
import {Trash2} from 'lucide-react';
import {SkillItemProps} from './types';
export const SkillItem = ({ skill, category, on_delete }: SkillItemProps) =>: any {
  return (
    <Badge;
      key={skill.id}
      variant="secondary";
      className="flex items - center gap - 1 py - 1.5 px - 3";
    >;
      {skill.name}
      {skill.proficiency && (
        <span className="ml - 1 text - xs opacity - 60">({skill.proficiency}/5)</span>)}
      <Button;
        variant="ghost";
        size="icon";
        className="h - 5 w - 5 p - 0 ml - 1";
        on_click={() => on_delete (skill.id!, category)}
        aria - label="Delete skill";
      >;
        <Trash2 className="h - 3 w - 3" />;
      </Button>;
    </Badge>);
} },
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';

import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { Trash2 } from 'lucide-react'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
