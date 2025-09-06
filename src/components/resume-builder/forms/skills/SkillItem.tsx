<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Trash2 } from 'lucide-react'

import { SkillItemProps } from './types'
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps,) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <Badge
      key = {skill.id,}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {;

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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {;

<<<<<<< HEAD
=======


import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps,) => {;
  return (
    <Badge
      key = {skill && skill.id,}
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
    </Badge>
  )
} }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps,) => {;
  return (
    <Badge
      key = {skill && skill.id,}
<<<<<<< HEAD
=======
      variant="secondary"
      className="flex items-center gap-1 py-1 && 1.5 px-3">;
      {skill && skill.name}
      {skill && skill.proficiency && (;
        <span className="ml-1 text-xs opacity-60">({skill && skill.proficiency}/5)</span>;
    <Badge
      key = {skill.id,}
    <Badge 
      key={skill.id} 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      variant="secondary"
      className="flex items-center gap-1 py-1 && 1.5 px-3">;
      {skill && skill.name}
      {skill && skill.proficiency && (;
        <span className="ml-1 text-xs opacity-60">({skill && skill.proficiency}/5)</span>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      )}
      <Button
        variant="ghost"
        size="icon"
        className="h-5 w-5 p-0 ml-1"
<<<<<<< HEAD

        onClick = {() => onDelete(skill && skill.id!, category),}
        aria-label="Delete skill";
      >;
        <Trash2 className="h-3 w-3" />;
      </Button>;
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

    <Badge 
      key={skill.id} 

=======
        onClick={() => onDelete(skill.id!, category)}
        aria-label="Delete skill"
      >
        <Trash2 className="h-3 w-3" />
      </Button>
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD


=======
},

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    </Badge>;
  );
};},;

};
<<<<<<< HEAD


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
<<<<<<< HEAD
}
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
},
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
