<<<<<<< HEAD
import { Loader2 } from 'lucide-react';

interface ResultsHeaderProps {
  isLoading: boolean;
  resultCount: number;

export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
  return (
    <div className='flex items-center mb-6 text-zion-slate-light'>
      {isLoading ? (
        <div className='flex items-center'>
          <Loader2 className='h-4 w-4 animate-spin mr-2' />
=======

import { Loader2 } from 'lucide-react'

interface ResultsHeaderProps {
  isLoading: boolean,
  resultCount: number
}

export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
  return (
    <div className="flex items-center mb-6 text-zion-slate-light">
      {isLoading ? (
        <div className="flex items-center">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
<<<<<<< HEAD
          {resultCount === 0
            ? 'No talents found. Try adjusting your filters.'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}
=======
          {resultCount === 0 ? (
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
          )}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        </span>
      )}
    </div>
  );
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
