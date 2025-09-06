<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
=======

import { Loader2 } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ResultsHeaderProps {
  isLoading: boolean;
  resultCount: number;

export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
  return (
    <div className='flex items-center mb-6 text-zion-slate-light'>
      {isLoading ? (
<<<<<<< HEAD
        <div className='flex items-center'>
          <Loader2 className='h-4 w-4 animate-spin mr-2' />          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
          {resultCount === 0
            ? 'No talents found. Try adjusting your filters.'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}        </span>
      )}
    </div>
  );
}
=======
<<<<<<< HEAD
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
=======
        <div className="flex items-center">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
<<<<<<< HEAD
<<<<<<< HEAD
          {resultCount === 0
            ? 'No talents found. Try adjusting your filters.'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {resultCount === 0 ? (
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
          )}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </span>
      )}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
