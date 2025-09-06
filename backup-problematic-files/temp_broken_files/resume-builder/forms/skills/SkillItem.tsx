
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx
=======
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { Trash2 } from 'lucide-react',;
=======
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { Trash2 } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/forms/skills/SkillItem.tsx
import { SkillItemProps } from './types',;
;
export const SkillItem = ({ skill, category, onDelete } SkillItemProps) => {;
  return (;
    <Badge ;
      key={skill.id} ;
      variant="secondary";
      className="flex items-center gap-1 py-1.5 px-3";
    >;
      {skill.name}
      {skill.proficiency && (;
        <span className="ml-1 text-xs opacity-60">({skill.proficiency}/5)</span>;
      )}
      <Button;
        variant="ghost";
        size="icon";
        className="h-5 w-5 p-0 ml-1";
        onClick={() => onDelete(skill.id!, category)}
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        aria-label="Delete skill";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/forms/skills/SkillItem.tsx
      >;
        <Trash2 className="h-3 w-3" />;
      </Button>;
    </Badge>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx

