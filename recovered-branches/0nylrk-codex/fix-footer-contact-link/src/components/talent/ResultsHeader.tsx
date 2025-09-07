import { Loader2 } from "lucide-react";
interface ResultsHeaderProps {
  isLoading: boolean;
  resultCount: number;
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
<<<<<<< HEAD
          {resultCount === 0
            ? "No talents found. Try adjusting your filters."
            : `Found ${resultCount} talent${resultCount !== 1 ? "s" : ""}`}
        </span>
      )}

=======
  resultCount: number;
}

export function ResultsHeader(): any ({ isLoading, resultCount }: ResultsHeaderProps) {;
  return (
    <div className="flex items-center mb-6 text-zion-slate-light">;
      {isLoading ? (;
        <div className="flex items-center">;
          <Loader2 className="h-4 w-4 animate-spin mr-2" />;
          <span>Loading talents...</span>;
        </div>;
      ) : (;
        <span>;
          {resultCount === 0 ? (;
            "No talents found. Try adjusting your filters.";
          ) : (;
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`;

          {resultCount === 0 ? (
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`

          )}
        </span>;      )}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    </div>

  )
}
;

import { Loader2  } from './lucide-react';
interface ResultsHeaderProps {
  is_loading: boolean;
  result_count: number;
}
export /**
 * ResultsHeader - Function description
 */
function ResultsHeader() {
  return (
<<<<<<< HEAD
    <div className="flex items - center mb - 6 text - zion - slate - light">;
      {is_loading ? (
        <div className="flex items - center">;
          <Loader2 className="h - 4 w - 4 animate - spin mr - 2" />;
=======
    <div className="flex items - center mb - 6 text - zion - slate-light">;
      {is_loading ? (
        <div className="flex items-center">;
          <Loader2 className="h - 4 w - 4 animate - spin mr-2" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          <span > Loading talents...</span>;
        </div>) : (
        <span>;
          {result_count === 0;
            ? "No talents found. Try adjusting your filters.";
            : `Found ${result_count} talent${result_count !== 1 ? "s" : ""}`}
        </span>)}
    </div>);
<<<<<<< HEAD
}

    </div>
  );
}
;

      ) :(;
        <span>;
          {resultCount === 0 ? (;
            "No talents found. Try adjusting your filters.";
          ) :(;
            `Found ${resultCount} talent${resultCount !== 1 ? 's' :''}`;          )}
        </span>;
      )}
    </div>;
  ),;}
 interface ResultsHeaderProps {
  isLoading: boolean;
resultCount: number 
}export function ResultsHeader ({
  isLoading, resultCount 
}: ResultsHeaderProps) {
  return (<div className="flex items-center mb-6 text-zion-slate-light" > isLoading ? (<div className="flex items-center" > <Loader2 className="h-4 w-4 animate-spin mr-2" /> <span>Loading talents...</span> </div>) : (<span> {
  resultCount === 0 ? ("No talents found. Try adjusting your filters.") : (`Found $ {
  resultCount 
}talent$ {
  resultCount !== 1 ? 's' : '' 
}`) 
}</span>) 
}</div>) 
}
);
}
}
;

          )}
        </span>;
      )}
    </div>
  );
}
  )
}
;
=======
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
