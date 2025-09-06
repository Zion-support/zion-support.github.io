<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/EmptyFraudState.tsx


import React from "react",
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/EmptyFraudState.tsx
import React from './react';
import { Button  } from '@/components / ui / button';
import { ShieldAlert  } from './lucide-react';
interface EmptyFraudStateProps {
  has_filters: boolean;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react",
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
interface EmptyFraudStateProps {
  hasFilters: boolean;
  onResetFilters: () => void
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
import { Button } from "@/components/ui/button",
import { ShieldAlert } from "lucide-react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface EmptyFraudStateProps {
  hasFilters: boolean,
  onResetFilters: () => void
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters,
  onResetFilters 
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}) => {
  return (
    <div className="text-center py-12">
      <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-medium">No fraud flags found</h3>
      <p className="text-muted-foreground mb-6">
        {hasFilters
          ? "Try adjusting your filters"
          : "You don't have any fraud flags yet"}
      </p>
      {hasFilters && (
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
    </div>;
);

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        <Button variant="outline" onClick={onResetFilters}>
          Clear Filters
        </Button>
      )}
    </div>
  );
}

    </div>;
);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
import React from "react",;
import { Button } from "@/components/ui/button",;
import { ShieldAlert } from "lucide-react",;
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  onResetFilters: () => void;
}
export const EmptyFraudState: React.FC < EmptyFraudStateProps> = ({
  has_filters,
  onResetFilters,
}) => {
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({;
  hasFilters,;
  onResetFilters,;
}) => {;
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/EmptyFraudState.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/EmptyFraudState.tsx
    <div className="text - center py - 12">;
      <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;
      <h3 className="text - lg font - medium">No fraud flags found</h3>;
      <p className="text - muted - foreground mb - 6">;
        {has_filters;
          ? "Try adjusting your filters";
          : "You don't have any fraud flags yet"}
      </p>;
<<<<<<< HEAD
      {hasFilters && (;
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;
  );

};

=======
      {has_filters && (
        <Button variant="outline" on_click={onResetFilters}>;
          Clear Filters;
        </Button>)}
    </div>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/EmptyFraudState.tsx

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

import React from "react",;
import { Button } from "@/components/ui/button",;
import { ShieldAlert } from "lucide-react",;
;
interface EmptyFraudStateProps {;
  hasFilters:boolean,;
  onResetFilters:() => void;
}
;
export const EmptyFraudState:React.FC<EmptyFraudStateProps> = ({ ;
  hasFilters,;
  onResetFilters ;
}) => {;
  return (;
    <div className="text-center py-12">;
      <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
      <h3 className="text-lg font-medium">No fraud flags found</h3>;
      <p className="text-muted-foreground mb-6">;
        {hasFilters;
          ? "Try adjusting your filters";
          :"You don't have any fraud flags yet"}
      </p>;
      {hasFilters && (;
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;
<<<<<<< HEAD
  ),;
},; interface EmptyFraudStateProps {
  hasFilters: boolean;
onResetFilters: () => void 
}export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters;
onResetFilters 
}) => {
  return (<div className="text-center py-12" > <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" /> <h3 className="text-lg font-medium" >No fraud flags found</h3> <p className="text-muted-foreground mb-6" > hasFilters ? "Try adjusting your filters" : "You don't have any fraud flags yet" 
}</p>) 
}</div>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/EmptyFraudState.tsx
=======
<Button variant="outline" onClick={onResetFilters}>
          Clear Filters
        </Button>
      )}
</div>
  );

}

};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  );
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
