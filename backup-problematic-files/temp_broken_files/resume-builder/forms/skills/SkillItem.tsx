
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx
import { SkillItemProps } from './types',;
=======
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
export const SkillItem = ({ skill, category, onDelete } SkillItemProps) => {;
  return (;
    <Badge ;
      key={skill.id} ;
      variant="secondary";""
      className="flex items-center gap-1 py-1.5 px-3";"
    >;
)"
        <span className="ml-1 text-xs opacity-60">({skill.proficiency}/5)</span>;"
      <Button;"
        variant="ghost";""
        size="icon";""
        className="h-5 w-5 p-0 ml-1";"
        onClick={() => onDelete(skill.id!, category)}
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      >;
        <Trash2 className="h-3 w-3" />;
      </Button>;
    </Badge>;
