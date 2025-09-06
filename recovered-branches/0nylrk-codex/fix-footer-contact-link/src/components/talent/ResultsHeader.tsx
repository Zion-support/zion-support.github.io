<<<<<<< HEAD

import { Loader2 } from "lucide-react";
import { Loader2 } from "lucide-react",
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import { Loader2 } from "lucide-react",

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Loader2} from "lucide-react";
=======
import { Loader2 } from "lucide-react",
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ResultsHeaderProps {
  isLoading: boolean;
  resultCount: number
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Loader2 } from "lucide-react";
interface ResultsHeaderProps {
  isLoading: boolean;
  resultCount: number;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          {resultCount === 0 ? (
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
import { Loader2 } from "lucide-react",;
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {Loader2} from "lucide-react";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ResultsHeaderProps {;
  isLoading: boolean,;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  resultCount: number;
}

export function ResultsHeader(): any ({ isLoading, resultCount }: ResultsHeaderProps) {;
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
          {resultCount === 0 ? (
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
<<<<<<< HEAD
=======
import { Loader2 } from "lucide-react",;
interface ResultsHeaderProps {;
  isLoading: boolean;
  resultCount: number;
}
;
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

          )}
        </span>;

      )}
    </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

          {resultCount === 0 ? (
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`


          )}
        </span>;
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
<<<<<<< HEAD

=======
    </div>

  )
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
