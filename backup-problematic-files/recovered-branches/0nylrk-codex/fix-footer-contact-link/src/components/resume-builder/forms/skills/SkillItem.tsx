
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { Trash2 } from 'lucide-react',;
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
      >;
        <Trash2 className="h-3 w-3" />;
      </Button>;
    </Badge>;
  ),;
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/resume-builder/forms/skills/SkillItem.tsx
},; <Badge key= {;
  skill.id ;
}variant="secondary" className="flex items-center gap-1 py-1.5 px-3" > > <Trash2 className="h-3 w-3" /> </Button> </Badge>) ;
:temp_broken_files/resume-builder/forms/skills/SkillItem.tsx
};""
};
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/forms/skills/SkillItem.tsx
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx
