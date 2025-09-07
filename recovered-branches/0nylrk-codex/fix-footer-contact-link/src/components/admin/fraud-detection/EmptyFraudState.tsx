<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  hasFilters,
onResetFilters
import { Button } from "@/components/ui/button","
import { ShieldAlert } from "lucide-react","
    </div>;
);

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
import React from './react';
import { Button  } from '@/components / ui / button';
import { ShieldAlert  } from './lucide-react';
interface EmptyFraudStateProps {
  has_filters: boolean;
<<<<<<< HEAD


import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

>>>>>>> merged-prs-20250907-203621
import React from "react",
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
interface EmptyFraudStateProps {
<<<<<<< HEAD
  hasFilters: boolean,
  onResetFilters: () => void
}

=======
  hasFilters: boolean;
  onResetFilters: () => void
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters
import { Button } from "@/components/ui/button",
import { ShieldAlert } from "lucide-react",
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface EmptyFraudStateProps {

  hasFilters: boolean,
  onResetFilters: () => void;
}

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters,
  onResetFilters 
}) => {
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div className = $2;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>;
);

        <Button variant="outline" onClick={onResetFilters}>
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
          Clear Filters
        </Button>
      )}

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          Clear Filters
        </Button>
      )}

        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>

import React from "react",;
import { Button } from "@/components/ui/button",;

import { ShieldAlert } from "lucide-react",;
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
  onResetFilters: () => void;
}
export const EmptyFraudState: React.FC < EmptyFraudStateProps> = ({}
  has_filters,
  onResetFilters,
}) => {};
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({;
  hasFilters,;
  onResetFilters,;
}) => {;
  return (

    <div className="text - center py - 12">;
      <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;
      <h3 className="text - lg font - medium">No fraud flags found</h3>;

      <p className="text - muted - foreground mb - 6">;
        {has_filters;"
          ? "Try adjusting your filters";"
          : "You don't have any fraud flags yet"}
      </p>;

      {has_filters && (
        <Button variant="outline" on_click={onResetFilters}>;
          Clear Filters;
        </Button>)}
    </div>);
}
;

};
  )

};

      {hasFilters && (;"
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;
  );

    </div>
  );
}

<<<<<<< HEAD
=======
    </div>;
);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>

import React from "react",;
import { Button } from "@/components/ui/button",;

import { ShieldAlert } from "lucide-react",;
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
  onResetFilters: () => void;
}
export const EmptyFraudState: React.FC < EmptyFraudStateProps> = ({}
  has_filters,
  onResetFilters,
<<<<<<< HEAD
}) => {};
=======
}) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({;
  hasFilters,;
  onResetFilters,;
}) => {;
  return (
    <div className="text - center py - 12">;
      <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;
      <h3 className="text - lg font - medium">No fraud flags found</h3>;

      <p className="text - muted - foreground mb - 6">;
        {has_filters;"
          ? "Try adjusting your filters";"
          : "You don't have any fraud flags yet"}
      </p>;

      {has_filters && (
        <Button variant="outline" on_click={onResetFilters}>;
          Clear Filters;
        </Button>)}
    </div>);
}
;

<<<<<<< HEAD
};
  )

};

      {hasFilters && (;"
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;
  );

    </div>
  );

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
=======
};
"
import React from "react",;"
import { Button } from "@/components/ui/button",;"
<<<<<<< HEAD
=======
=======

};
<<<<<<< HEAD

import React from "react",;
import { Button } from "@/components/ui/button",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (;"
    <div className="text-center py-12">;"
      <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;"
      <h3 className="text-lg font-medium">No fraud flags found</h3>;"
      <p className="text-muted-foreground mb-6">;
        {hasFilters;"
          ? "Try adjusting your filters";'"
          :"You don't have any fraud flags yet"}
      </p>;
      {hasFilters && (;"
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;"
<Button variant="outline" onClick={onResetFilters}>
          Clear Filters;
<<<<<<< HEAD
=======
=======
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
<Button variant="outline" onClick={onResetFilters}>
          Clear Filters
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </Button>
      )}
</div>
  );

}

};

  );
};
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
