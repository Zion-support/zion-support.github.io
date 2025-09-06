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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SkillItemProps } from "./types";
export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
  return (
    <Badge
      key={skill.id}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      variant="secondary"
      className="flex items-center gap-1 py-1 && 1.5 px-3">;
      {skill && skill.name}
      {skill && skill.proficiency && (;
        <span className="ml-1 text-xs opacity-60">({skill && skill.proficiency}/5)</span>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      )}
      <Button
        variant="ghost"
        size="icon"
        className="h-5 w-5 p-0 ml-1"
<<<<<<< HEAD
<<<<<<< HEAD

        onClick={() => onDelete(skill && skill.id!, category)}
      >;
        <Trash2 className="h-3 w-3" />;
      </Button>;
    </Badge>;
=======
        onClick={() => onDelete(skill.id!, category)}
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </Badge>
<<<<<<< HEAD
  );
}

  )
},
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
  );

  )
},


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
        <Trash2 className="h - 3 w - 3" />;
      </Button>;
    </Badge>);
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),;
},; <Badge key= {
  skill.id 
}variant="secondary" className="flex items-center gap-1 py-1.5 px-3" > > <Trash2 className="h-3 w-3" /> </Button> </Badge>) 
};
);

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
