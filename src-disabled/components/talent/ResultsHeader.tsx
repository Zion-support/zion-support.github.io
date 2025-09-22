import { Loader2 } from 'lucide-react';
interface ResultsHeaderProps {;
  isLoading: boolean;
  resultCount: number;
<<<<<<< HEAD
}

<<<<<<< HEAD

  return (
    <div className="flex items-center mb-6 text-zion-slate-light">;
      {isLoading ? (;"
        <div className="flex items-center">;"
          <Loader2 className="h-4 w-4 animate-spin mr-2" />;
          <span>Loading talents...</span>;
        </div>;
      ) : (;
        <span>;
{resultCount === 0;'
            ? 'No talents found. Try adjusting your filters.';'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}          {resultCount === 0 ? (;"
            "No talents found. Try adjusting your filters.";
          ) : (;'`
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`;
          )}
      )}

    </div>;
  );
  )
};

}
}
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
{resultCount === 0'
            ? 'No talents found. Try adjusting your filters.''`
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}          {resultCount === 0 ? (
          {resultCount === 0 ? (

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

interface ResultsHeaderProps {
  isLoading: boolean
  resultCount: number
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
  return (
    <div className='flex items-center mb-6 text-zion-slate-light'>
      {isLoading ? (
        <div className='flex items-center'>
  isLoading: boolean;
  resultCount: number
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
  return (
    <div className="flex items-center mb-6 text-zion-slate-light">
      {isLoading ? ("
        <div className="flex items-center">"
=======
origin/cursor/automate-test-improve-and-merge-code-2533
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
  return (
    <div className="flex items-center mb-6 text-zion-slate-light">"
      {isLoading ? (
        <div className="flex items-center">"
          <Loader2 className="h-4 w-4 animate-spin mr-2" />"
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
          {resultCount === 0 ? (
            "No talents found. Try adjusting your filters.""
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}``
          )}
  );
};
};
import { Loader2 } from 'lucide-react';
interface ResultsHeaderProps {
  is_loading: boolean;,
  result_count: number;,
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
            : `Found ${result_count} talent${result_count !== 1 ? 's' : ''}`}        </span>)}`
    </div>);
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
            : `Found ${result_count} talent${result_count !== 1 ? 's' : ''}`}          {result_count === 0 ? (`
            "No talents found. Try adjusting your filters.") : ("
            `Found ${result_count} talent${result_count !== 1 ? 's' : ''}`)}`
      )}
    </div>));
}
;)

import { Loader2 } from 'lucide-react';
interface ResultsHeaderProps {;
  isLoading: boolean;
  resultCount: number;
}

export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
  return (
    <div className="flex items-center mb-6 text-zion-slate-light">
      {isLoading ? (
        <div className="flex items-center">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {resultCount === 0 ? (

            "No talents found. Try adjusting your filters."
          ) : ('`
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
          )}
<<<<<<< HEAD
        </span>;
      )}
    </div>;
  );
}
;
{resultCount === 0
            ? 'No talents found. Try adjusting your filters.'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}
        </span>
      )}
    </div>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
