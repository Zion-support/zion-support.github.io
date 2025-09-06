<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
interface EmptyFraudStateProps {;
  hasFilters: boolean;
=======
import React from './react';
import { Button  } from '@/components / ui / button';
import { ShieldAlert  } from './lucide-react';
interface EmptyFraudStateProps {
  has_filters: boolean;
=======


export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters
=======
import { Button } from "@/components/ui/button",
import { ShieldAlert } from "lucide-react",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface EmptyFraudStateProps {
  hasFilters: boolean,
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  onResetFilters: () => void
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters
}) => {
<<<<<<< HEAD
=======
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
        <Button variant="outline" onClick={onResetFilters}>
          Clear Filters
        </Button>
      )}
<<<<<<< HEAD
    </div>
  );
}

=======
    </div>;
);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}) => {
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({;
  hasFilters,;
  onResetFilters,;
}) => {;
  return (
    <div className="text-center py-12">;
      <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
      <h3 className="text-lg font-medium">No fraud flags found</h3>;
      <p className="text-muted-foreground mb-6">;
        {hasFilters;
          ? "Try adjusting your filters";
          : "You don't have any fraud flags yet"}
      </p>;
      {hasFilters && (;
<<<<<<< HEAD
        <Button variant="outline" onClick={onResetFilters}>;
          Clear Filters;
        </Button>;
      )}
    </div>;
  );
}

=======
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;
  );
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
