
<<<<<<< HEAD

interface EmptyFraudStateProps {
  hasFilters: boolean
  onResetFilters: () => void
=======
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
  onResetFilters: () => void;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters

<<<<<<< HEAD
},) => {
=======
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ ;
  hasFilters,;
  onResetFilters ;
},) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
<<<<<<< HEAD
    </div>
  )
}
'"
import React from "react"
import {Button} from "@/components/ui/button"
import {ShieldAlert} from 'lucide-react'
interface EmptyFraudStateProps {

  hasFilters: boolean
  onResetFilters: () => void
}
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters
}) => {
=======
    </div>;
  );
};
'";

import React from "react";
import {Button} from "@/components/ui/button";
import {ShieldAlert} from 'lucide-react';

interface EmptyFraudStateProps {;
  hasFilters: boolean,;
  onResetFilters: () => void;
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ ;
  hasFilters,;
  onResetFilters ;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
<<<<<<< HEAD
    </div>
  )
}

=======
    </div>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
