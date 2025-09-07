<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
import React from './react';
import { Button  } from '@/components / ui / button';
import { ShieldAlert  } from './lucide-react';
interface EmptyFraudStateProps {
  has_filters: boolean;
import React from "react",
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
interface EmptyFraudStateProps {
  has_filters: boolean;


export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters
import { Button } from "@/components/ui/button",
import { ShieldAlert } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface EmptyFraudStateProps {
=======


import React from "react",";
import { Button } from "@/components/ui/button";"
import { ShieldAlert } from "lucide-react";
interface EmptyFraudStateProps {}
  has_filters: boolean;



interface EmptyFraudStateProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  hasFilters: boolean,
  onResetFilters: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
interface EmptyFraudStateProps {
  hasFilters: boolean,
  onResetFilters: () => void
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    </div>;
);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    </div>;
);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <Button variant="outline" onClick={onResetFilters}>
          Clear Filters
        </Button>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
);
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
=======
=======        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    </div>;
);
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",;
import { Button } from "@/components/ui/button",;
=======


"
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>"
import React from "react",;"
import { Button } from "@/components/ui/button",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="text - center py - 12">;
      <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;
      <h3 className="text - lg font - medium">No fraud flags found</h3>;
=======
"
    <div className="text - center py - 12">;"
      <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;"
      <h3 className="text - lg font - medium">No fraud flags found</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <p className="text - muted - foreground mb - 6">;
        {has_filters;"
          ? "Try adjusting your filters";"
          : "You don't have any fraud flags yet"}
      </p>;
<<<<<<< HEAD
<<<<<<< HEAD
      {hasFilters && (;
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======

    <div className="text - center py - 12">;
      <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;
      <h3 className="text - lg font - medium">No fraud flags found</h3>;
      <p className="text - muted - foreground mb - 6">;
        {has_filters;
          ? "Try adjusting your filters";
          : "You don't have any fraud flags yet"}
      </p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {has_filters && (
        <Button variant="outline" on_click={onResetFilters}>;
          Clear Filters;
        </Button>)}
    </div>);
}
;

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
  )
=======

=======
};
      {hasFilters && (;
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;
  );
    </div>
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};



      {hasFilters && (;"
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;
  );




    </div>
  );
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
};
"
import React from "react",;"
import { Button } from "@/components/ui/button",;"
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
        </Button>
      )}
</div>
  );

}

};

  );
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
