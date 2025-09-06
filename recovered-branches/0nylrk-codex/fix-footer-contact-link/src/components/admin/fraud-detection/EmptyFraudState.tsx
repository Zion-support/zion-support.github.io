
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from './react';
import { Button  } from '@/components / ui / button';
import { ShieldAlert  } from './lucide-react';
interface EmptyFraudStateProps {
  has_filters: boolean;
<<<<<<< HEAD
=======


=======


import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from "react",
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
interface EmptyFraudStateProps {
  has_filters: boolean;


interface EmptyFraudStateProps {
  hasFilters: boolean,
  onResetFilters: () => void
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
    </div>;
);
=======
<<<<<<< HEAD
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters,
  onResetFilters 
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
=======
    </div>;
);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

    </div>;
);

        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
import React from "react",;
import { Button } from "@/components/ui/button",;
import { ShieldAlert } from "lucide-react",;
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
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
    <div className="text - center py - 12">;
      <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;
      <h3 className="text - lg font - medium">No fraud flags found</h3>;
      <p className="text - muted - foreground mb - 6">;
        {has_filters;
          ? "Try adjusting your filters";
          : "You don't have any fraud flags yet"}
      </p>;
};
      {hasFilters && (;
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;
  );
    </div>
  );
};

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
<Button variant="outline" onClick={onResetFilters}>
          Clear Filters
        </Button>
      )}
</div>
  );

}

};

  );
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
