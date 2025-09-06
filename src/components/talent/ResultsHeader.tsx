<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Loader2 } from 'lucide-react'
interface ResultsHeaderProps {
  isLoading: boolean
  resultCount: number
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import { Loader2 } from 'lucide-react';
interface ResultsHeaderProps {;
  isLoading: boolean;
  resultCount: number;

export function ResultsHeader(): any ({ isLoading, resultCount }: ResultsHeaderProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='flex items-center mb-6 text-zion-slate-light'>;
      {isLoading ? (;
        <div className='flex items-center'>;
          <Loader2 className='h-4 w-4 animate-spin mr-2' />          <span>Loading talents...</span>;
        </div>;
      ) : (;
        <span>;
          {resultCount === 0;
            ? 'No talents found. Try adjusting your filters.';
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}        </span>;
      )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
    </div>
  )
=======

import { Loader2 } from 'lucide-react'

interface ResultsHeaderProps {
  isLoading: boolean,
  resultCount: number
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
}
        <div className="flex items-center">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
<<<<<<< HEAD
interface ResultsHeaderProps {

  isLoading: boolean

  resultCount: number
}
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    </div>;
  );
}
        <div className="flex items-center">;
          <Loader2 className="h-4 w-4 animate-spin mr-2" />;

interface ResultsHeaderProps {;
  isLoading: boolean,;
  resultCount: number;
}

export function ResultsHeader(): any ({ isLoading, resultCount }: ResultsHeaderProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
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
      )}
<<<<<<< HEAD
    </div>
  )
  )
=======
    </div>;
  );
  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD
=======
}
=======
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
          {resultCount === 0 ? (
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
          )}
        </span>
      )}
    </div>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import { Loader2 } from 'lucide-react';
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
      )}
    </div>));
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
