<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from 'lucide-react'
interface EmptyFraudStateProps {
  hasFilters: boolean,
  onResetFilters: () => void
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
  onResetFilters: () => void;
}
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ ;
  hasFilters,;
  onResetFilters ;
},) => {;
  return (
=======

import React from "react",;
import { Button } from "@/components/ui/button",;
import { ShieldAlert } from 'lucide-react';
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="text-center py-12">;
      <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
      <h3 className="text-lg font-medium">No fraud flags found</h3>;
      <p className="text-muted-foreground mb-6">;
        {hasFilters;
          ? "Try adjusting your filters";
<<<<<<< HEAD
          : "You don't have any fraud flags yet"}
=======
          :"You don't have any fraud flags yet"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      </p>;
      {hasFilters && (;
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
<<<<<<< HEAD
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
}) => {
    </div>;
  );
};
'";
    </div>;
  );
};
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
=======
    </div>;
  ),;
},; import {;
  {;
  {;
  ShieldAlert ;
}from 'lucide-react' interface EmptyFraudStateProps {;
  hasFilters: boolean;
onResetFilters: () => void ;
}export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({;
  hasFilters;
onResetFilters ;
}) => {';
  return (<div className="text-center py-12" > <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" /> <h3 className="text-lg font-medium" >No fraud flags found</h3> <p className="text-muted-foreground mb-6" > hasFilters ? "Try adjusting your filters" : "You don't have any fraud flags yet" ;
}</p>) ;
}</div>) ;
};
'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
