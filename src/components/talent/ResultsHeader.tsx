<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
interface ResultsHeaderProps {;
  isLoading: boolean;
  resultCount: number;
}

<<<<<<< HEAD
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}        </span>
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
          {resultCount === 0
            ? 'No talents found. Try adjusting your filters.'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}          {resultCount === 0 ? (
          {resultCount === 0 ? (


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
          )}
<<<<<<< HEAD
<<<<<<< HEAD
      )}
    </div>
  )
  )
}
}
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  );
};
};


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
=======
=======
        </span>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      )}
    </div>;
  );
}
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
