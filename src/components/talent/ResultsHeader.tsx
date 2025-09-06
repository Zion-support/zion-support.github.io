

import { Loader2 } from 'lucide-react';
interface ResultsHeaderProps {;
  isLoading: boolean;
  resultCount: number;

<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

    </div>;
  );
  );
};


}

}
=======
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
          {resultCount === 0 ? (
=======


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

          {resultCount === 0 ? (
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
          )}
<<<<<<< HEAD


  );
};
};


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
=======
<<<<<<< HEAD
      )}
    </div>
  )
<<<<<<< HEAD
  )
}
}
=======
  );
};
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        </span>;
      )}
    </div>;
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

;
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
