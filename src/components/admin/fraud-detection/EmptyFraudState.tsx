<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from 'lucide-react'

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters,
  onResetFilters 
=======
interface EmptyFraudStateProps {
  hasFilters: boolean
  onResetFilters: () => void
}
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
},) => {
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
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
      )}
    </div>
  )
}
'"
import React from "react"
import {Button} from "@/components/ui/button"
import {ShieldAlert} from 'lucide-react'
interface EmptyFraudStateProps {
<<<<<<< HEAD
  hasFilters: boolean;
  onResetFilters: () => void
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters;
  onResetFilters 
}) => {
  return (
    <div className;
=======
  hasFilters: boolean
  onResetFilters: () => void
}
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
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
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
      )}
    </div>
  )
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldAlert } from 'lucide-react';

interface EmptyFraudStateProps {
  hasFilters: boolean;
  onResetFilters: () => void;
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters,
  onResetFilters,
}) => {
  return (
    <div className='text-center py-12'>
      <ShieldAlert className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
      <h3 className='text-lg font-medium'>No fraud flags found</h3>
      <p className='text-muted-foreground mb-6'>
        {hasFilters
          ? 'Try adjusting your filters'
          : "You don't have any fraud flags yet"}
      </p>
      {hasFilters && (
        <Button variant='outline' onClick={onResetFilters}>
          Clear Filters
        </Button>
      )}
    </div>
  );
};
'"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
