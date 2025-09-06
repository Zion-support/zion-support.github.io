<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx

<<<<<<< HEAD
<<<<<<< HEAD

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Trash2  } from './lucide-react';
import { SkillItemProps  } from './types';
export const SkillItem = ({ skill, category, on_delete }: SkillItemProps) =>: any {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx

  return (
    <Badge;
      key={skill.id}

=======



========
  return (
    <Badge;
      key={skill.id}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx
=======
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SkillItemProps } from "./types";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Trash2} from 'lucide-react';
import {SkillItemProps} from './types';
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Trash2 } from 'lucide-react',
import { SkillItemProps } from './types',
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <Badge
      key={skill && skill.id} 
      variant="secondary"
      className="flex items-center gap-1 py-1 && 1.5 px-3">;
      {skill && skill.name}
      {skill && skill.proficiency && (;
        <span className="ml-1 text-xs opacity-60">({skill && skill.proficiency}/5)</span>;
=======

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SkillItemProps } from "./types";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        onClick={() => onDelete(skill.id!, category)}
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </Badge>
<<<<<<< HEAD
<<<<<<< HEAD

};

  )
},

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx
        onClick={() => onDelete(skill && skill.id!, category)}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      >;
        <Trash2 className="h-3 w-3" />;
      </Button>;
    </Badge>;
<<<<<<< HEAD
  );
=======

  )
},

=======

};
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
      >;
        <Trash2 className="h - 3 w - 3" />;
      </Button>;
    </Badge>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;
},; <Badge key= {
  skill.id 
}variant="secondary" className="flex items-center gap-1 py-1.5 px-3" > > <Trash2 className="h-3 w-3" /> </Button> </Badge>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillItem.tsx
=======
);

}
};

  )
},

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  );
}

  )
},
};
  )
},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
