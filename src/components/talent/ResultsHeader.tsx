<<<<<<< HEAD
=======
import { Loader2 } from 'lucide-react'
interface ResultsHeaderProps {
  isLoading: boolean
  resultCount: number
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Loader2 } from 'lucide-react';
interface ResultsHeaderProps {;
  isLoading: boolean;
  resultCount: number;



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
          {resultCount === 0
            ? 'No talents found. Try adjusting your filters.'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}          {resultCount === 0 ? (
          {resultCount === 0 ? (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
          )}
<<<<<<< HEAD


  );
};
};


import { Loader2 } from 'lucide-react';
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
        </span>;
      )}
    </div>;
  );
}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
