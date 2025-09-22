<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SkillItemProps } from "./types";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Trash2  } from './lucide-react';
import { SkillItemProps  } from './types';
export const SkillItem = ({ skill, category, on_delete }: SkillItemProps) =>: any {

return (
    <Badge;
      key={skill.id}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Trash2} from 'lucide-react';
import {SkillItemProps} from './types';

import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Trash2 } from 'lucide-react',
import { SkillItemProps } from './types',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <Badge
      key={skill && skill.id} 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SkillItemProps } from "./types";
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <Badge
      key={skill.id}
      variant="secondary"
=======
import { Badge } from "@/components/ui/badge";"
import { Button } from "@/components/ui/button";"
import { Trash2 } from "lucide-react";"
import { SkillItemProps } from "./types";
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {}
  return (;
    <Badge;
      key={skill.id}"
      variant="secondary""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      className="flex items-center gap-1 py-1 && 1.5 px-3">;
      {skill && skill.name}
      {skill && skill.proficiency && (;"
        <span className="ml-1 text-xs opacity-60">({skill && skill.proficiency}/5)</span>;

      )}
      <Button"
        variant="ghost""
        size="icon""
        className="h-5 w-5 p-0 ml-1"
<<<<<<< HEAD
        onClick={() => onDelete(skill.id!, category)}
      >"
        <Trash2 className="h-3 w-3" />
      </Button>
    </Badge>
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD
}

  )
},
};
  )
},
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        onClick={() => onDelete(skill.id!, category)}
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </Badge>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  );
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<Trash2 className="h - 3 w-3" />;
=======
        <Trash2 className="h - 3 w - 3" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      </Button>;
    </Badge>);
}
;

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
},
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
