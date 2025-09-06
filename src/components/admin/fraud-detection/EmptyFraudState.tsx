<<<<<<< HEAD

<<<<<<< HEAD
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
  onResetFilters: () => void;
=======
<<<<<<< HEAD
<<<<<<< HEAD

interface EmptyFraudStateProps {
  hasFilters: boolean
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from 'lucide-react'

interface EmptyFraudStateProps {
  hasFilters: boolean,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  onResetFilters: () => void
=======
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
  onResetFilters: () => void;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
=======
interface EmptyFraudStateProps {
  has_filters: boolean,
  onResetFilters: () => void;
}
export const EmptyFraudState: React.FC < EmptyFraudStateProps> = ({
  has_filters,
  onResetFilters;
}, ) => {
  return (
    <div className="text - center py - 12">;
      <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;
      <h3 className="text - lg font - medium">No fraud flags found</h3>;
      <p className="text - muted - foreground mb - 6">;
        {has_filters;
          ? "Try adjusting your filters";
          : "You don't have any fraud flags yet"}
      </p>;
      {has_filters && (
        <Button variant="outline" on_click={onResetFilters}>Clear Filters</Button>)}
    </div>);
}
'";
import React from './react';
import { Button } from '@/components / ui / button';
import {ShieldAlert} from 'lucide-react';
interface EmptyFraudStateProps {
  has_filters: boolean,
  onResetFilters: () => void;
}
export const EmptyFraudState: React.FC < EmptyFraudStateProps> = ({
  has_filters,
  onResetFilters;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}) => {
=======
    </div>;
  );
};
'";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
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
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    <div className="text - center py - 12">;
      <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;
      <h3 className="text - lg font - medium">No fraud flags found</h3>;
      <p className="text - muted - foreground mb - 6">;
        {has_filters;
          ? "Try adjusting your filters";
          : "You don't have any fraud flags yet"}
      </p>;
      {has_filters && (
        <Button variant="outline" on_click={onResetFilters}>Clear Filters</Button>)}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
