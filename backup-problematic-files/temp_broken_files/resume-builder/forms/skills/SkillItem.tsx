<<<<<<< HEAD
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types',;
=======
import { SkillItemProps } from './types',;

>>>>>>> merged-prs-20250907-203621
;
export const SkillItem = ({ skill, category, onDelete } SkillItemProps) => {;
  return (;
    <Badge ;
      key={skill.id} ;
<<<<<<< HEAD
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
        aria-label="Delete skill";
=======
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

>>>>>>> merged-prs-20250907-203621
      >;
        <Trash2 className="h-3 w-3" />;
      </Button>;
<<<<<<< HEAD
    </Badge>;
=======
    </Badge>;
  ),;
},; <Badge key= {;
  skill.id ;
}variant="secondary" className="flex items-center gap-1 py-1.5 px-3" > > <Trash2 className="h-3 w-3" /> </Button> </Badge>) ;
<<<<<<< HEAD
};""
=======
<<<<<<< HEAD
:temp_broken_files/resume-builder/forms/skills/SkillItem.tsx
};""
};
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/forms/skills/SkillItem.tsx
=======

};
"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
