<<<<<<< HEAD
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react'
import { SkillItemProps } from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
=======

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps,) => {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
  return (
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
        onClick = {() => onDelete(skill.id!, category),}
        aria-label="Delete skill"
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </Badge>
  )
<<<<<<< HEAD
};
"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react'
import { SkillItemProps } from './types';
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
    </Badge>
  )
};
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
},
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
