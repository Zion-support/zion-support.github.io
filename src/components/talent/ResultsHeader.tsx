<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Loader2 } from 'lucide-react'
interface ResultsHeaderProps {
  isLoading: boolean
  resultCount: number
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Loader2 } from 'lucide-react';
interface ResultsHeaderProps {;
  isLoading: boolean;
  resultCount: number;

<<<<<<< HEAD


  return (
<<<<<<< HEAD
    <div className="flex items-center mb-6 text-zion-slate-light">;
      {isLoading ? (;
        <div className="flex items-center">;
          <Loader2 className="h-4 w-4 animate-spin mr-2" />;
          <span>Loading talents...</span>;
        </div>;
      ) : (;
        <span>;
          {resultCount === 0;
            ? 'No talents found. Try adjusting your filters.';
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}          {resultCount === 0 ? (;
            "No talents found. Try adjusting your filters.";
          ) : (;
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`;
          )}
=======
    <div className="flex items-center mb-6 text-zion-slate-light">
      {isLoading ? (
        <div className="flex items-center">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
          {resultCount === 0
            ? 'No talents found. Try adjusting your filters.'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}        </span>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      )}

    </div>;
  );
  );
};


}

}
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
<<<<<<< HEAD
          {resultCount === 0
            ? 'No talents found. Try adjusting your filters.'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}          {resultCount === 0 ? (
          {resultCount === 0 ? (

=======
          {resultCount === 0 ? (

import { Loader2 } from 'lucide-react';
interface ResultsHeaderProps {;
  isLoading: boolean;
  resultCount: number;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="flex items-center mb-6 text-zion-slate-light">
      {isLoading ? (
        <div className="flex items-center">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
          {resultCount === 0
            ? 'No talents found. Try adjusting your filters.'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}        </span>
      )}
    </div>
  )
}
        <div className="flex items-center">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
interface ResultsHeaderProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  isLoading: boolean

<<<<<<< HEAD
=======
  resultCount: number
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
  return (
    <div className="flex items-center mb-6 text-zion-slate-light">
      {isLoading ? (
        <div className="flex items-center">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
<<<<<<< HEAD
          {resultCount === 0
            ? 'No talents found. Try adjusting your filters.'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}          {resultCount === 0 ? (
          {resultCount === 0 ? (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
          )}
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );
};
};


import { Loader2 } from 'lucide-react';
<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662
      )}
    </div>
  )
  )
}
}
  );
};
};
=======
interface ResultsHeaderProps {
  is_loading: boolean;
  result_count: number;
export /**
 * ResultsHeader - Function description
 */
function ResultsHeader() {
  return (
    <div className='flex items - center mb - 6 text - zion - slate - light'>;
      {is_loading ? (
        <div className='flex items - center'>;
          <Loader2 className='h - 4 w - 4 animate - spin mr - 2' />          <span > Loading talents...</span>;
        </div>) : (
        <span>;
          {result_count === 0;
            ? 'No talents found. Try adjusting your filters.';
            : `Found ${result_count} talent${result_count !== 1 ? 's' : ''}`}        </span>)}
    </div>);
        </span>;
      )}
    </div>;
  );
}
        <div className="flex items - center">;
          <Loader2 className="h - 4 w - 4 animate - spin mr - 2" />;
interface ResultsHeaderProps {
  is_loading: boolean,
  result_count: number;
}
export /**
 * ResultsHeader - Function description
 */
function ResultsHeader() {
  return (
    <div className="flex items - center mb - 6 text - zion - slate - light">;
      {is_loading ? (
        <div className="flex items - center">;
          <Loader2 className="h - 4 w - 4 animate - spin mr - 2" />;
          <span > Loading talents...</span>;
        </div>) : (
        <span>;
          {result_count === 0;
            ? 'No talents found. Try adjusting your filters.';
            : `Found ${result_count} talent${result_count !== 1 ? 's' : ''}`}          {result_count === 0 ? (
            "No talents found. Try adjusting your filters.") : (
            `Found ${result_count} talent${result_count !== 1 ? 's' : ''}`)}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        </span>;
      )}
    </div>;
  );
}
<<<<<<< HEAD
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
