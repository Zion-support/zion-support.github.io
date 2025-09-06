<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import React from "react",
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
interface EmptyFraudStateProps {
  has_filters: boolean;
=======


<<<<<<< HEAD
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters
import { Button } from "@/components/ui/button",
import { ShieldAlert } from "lucide-react",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface EmptyFraudStateProps {
  hasFilters: boolean,
  onResetFilters: () => void
}

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
        <Button variant="outline" onClick={onResetFilters}>
          Clear Filters
        </Button>
      )}
    </div>
  );
}

    </div>;
);
=======

    </div>;
);

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({;
  hasFilters,;
  onResetFilters,;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (

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
=======
      {has_filters && (
        <Button variant="outline" on_click={onResetFilters}>;
          Clear Filters;
        </Button>)}
    </div>);
}
;

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
