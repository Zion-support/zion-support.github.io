<<<<<<< HEAD
import { Loader2 } from 'lucide-react'
interface ResultsHeaderProps {
  isLoading: boolean
  resultCount: number
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
=======
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
    </div>
  )
}
        <div className="flex items-center">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
interface ResultsHeaderProps {

  isLoading: boolean

  resultCount: number
}
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
=======
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
}