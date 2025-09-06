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
        </span>;
=======
          {resultCount === 0
            ? "No talents found. Try adjusting your filters."
            : `Found ${resultCount} talent${resultCount !== 1 ? "s" : ""}`}
        </span>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
    </div>;
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    </div>

  )
}
;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    <div className="flex items - center mb - 6 text - zion - slate - light">;
      {is_loading ? (
        <div className="flex items - center">;
          <Loader2 className="h - 4 w - 4 animate - spin mr - 2" />;
          <span > Loading talents...</span>;
        </div>) : (
        <span>;
          {result_count === 0;
            ? "No talents found. Try adjusting your filters.";
            : `Found ${result_count} talent${result_count !== 1 ? "s" : ""}`}
        </span>)}
    </div>);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
    </div>
  );
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
