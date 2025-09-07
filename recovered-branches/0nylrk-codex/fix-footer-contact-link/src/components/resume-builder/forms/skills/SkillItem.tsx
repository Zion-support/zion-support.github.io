<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SkillItemProps } from "./types";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Trash2  } from './lucide-react';
import { SkillItemProps  } from './types';
export const SkillItem = ({ skill, category, on_delete }: SkillItemProps) =>: any {

<<<<<<< HEAD
  return (
    <Badge;
      key={skill.id}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Trash2} from 'lucide-react';
import {SkillItemProps} from './types';
<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Trash2 } from 'lucide-react',
import { SkillItemProps } from './types',
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <Badge
      key={skill && skill.id} 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SkillItemProps } from "./types";
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      )}
      <Button"
        variant="ghost""
        size="icon""
        className="h-5 w-5 p-0 ml-1"
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  );

  )
},

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
  )
},
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
        <Trash2 className="h - 3 w-3" />;
=======
};"
      variant="secondary";"
      className="flex items - center gap - 1 py - 1.5 px - 3";
    >;
      {skill.name}
      {skill.proficiency && ("
        <span className="ml - 1 text - xs opacity - 60">({skill.proficiency}/5)</span>)}
      <Button;"
        variant="ghost";"
        size="icon";"
        className="h - 5 w - 5 p - 0 ml - 1";
        on_click={() => on_delete (skill.id!, category)}
      >;"
        <Trash2 className="h - 3 w - 3" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <Trash2 className="h - 3 w - 3" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      </Button>;
    </Badge>);
}
;
<<<<<<< HEAD
<<<<<<< HEAD
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  ),;
},; <Badge key= {
  skill.id 
}variant="secondary" className="flex items-center gap-1 py-1.5 px-3" > > <Trash2 className="h-3 w-3" /> </Button> </Badge>) 
};
);
=======
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Trash2  } from './lucide-react';
import { SkillItemProps  } from './types';
export const SkillItem = ({ skill, category, on_delete }: SkillItemProps) =>: any {


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
