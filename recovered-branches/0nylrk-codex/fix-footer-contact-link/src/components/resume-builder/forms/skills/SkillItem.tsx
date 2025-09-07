<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Trash2  } from './lucide-react';
import { SkillItemProps  } from './types';
export const SkillItem = ({ skill, category, on_delete }: SkillItemProps) =>: any {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
=======
  return (
    <Badge;
      key={skill.id}
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SkillItemProps } from "./types";
=======

=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Trash2} from 'lucide-react';
import {SkillItemProps} from './types';
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Trash2 } from 'lucide-react',
import { SkillItemProps } from './types',

<<<<<<< HEAD
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SkillItemProps } from "./types";
=======

<<<<<<< HEAD
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
  return (
    <Badge
      key={skill && skill.id} 
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {

  return (
    <Badge
<<<<<<< HEAD
      key={skill.id}
=======
      key={skill && skill.id} 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      variant="secondary"

      className="flex items-center gap-1 py-1 && 1.5 px-3">;
      {skill && skill.name}
      {skill && skill.proficiency && (;"
        <span className="ml-1 text-xs opacity-60">({skill && skill.proficiency}/5)</span>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SkillItemProps } from "./types";

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      )}
      <Button"
        variant="ghost""
        size="icon""
        className="h-5 w-5 p-0 ml-1"
<<<<<<< HEAD
        onClick={() => onDelete(skill.id!, category)}
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </Badge>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
};
  )
},

  );
};

=======
        onClick={() => onDelete(skill && skill.id!, category)}

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
<<<<<<< HEAD
=======
  );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  )
},

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

      </Button>;
    </Badge>);
}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  ),;
},; <Badge key= {
  skill.id 
}variant="secondary" className="flex items-center gap-1 py-1.5 px-3" > > <Trash2 className="h-3 w-3" /> </Button> </Badge>) 
};
);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}
};

  )
},

  );
}

  )
},
};
  )
<<<<<<< HEAD
},
=======
},
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
