
import { Loader2 } from "lucide-react",

import {Loader2} from "lucide-react";

interface ResultsHeaderProps {
  isLoading: boolean;
  resultCount: number

}
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {}
  return ("
    <div className="flex items-center mb-6 text-zion-slate-light">
      {isLoading ? ("
        <div className="flex items-center">"
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>

          {resultCount === 0
            ? "No talents found. Try adjusting your filters."

            : `Found ${resultCount} talent${resultCount !== 1 ? "s" : ""}`}
        </span>


import {Loader2} from "lucide-react";
interface ResultsHeaderProps {;
  isLoading: boolean,;

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

          <span > Loading talents...</span>;
        </div>) : (
        <span>;
          {result_count === 0;"
            ? "No talents found. Try adjusting your filters.";"`
            : `Found ${result_count} talent${result_count !== 1 ? "s" : ""}`}
        </span>)}
    </div>);


    </div>

  );
}
;
    </div>
  );
import { Loader2 } from "lucide-react";"
interface ResultsHeaderProps {
  // TODO: Implement
}
  isLoading: boolean;,
  resultCount: number;


}

export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {

  return ("
    <div className="flex items-center mb-6 text-zion-slate-light">"
</div>"
        <div className="flex items-center">"
          <Loader2 className="h-4 w-4 animate-spin mr-2" />"
</Loader2>
          <span>Loading talents...</span>
        </div>
        <span>
</span>
    <div className="flex items - center mb - 6 text - zion - slate - light">;"
        <div className="flex items - center">;"
          <Loader2 className="h - 4 w - 4 animate - spin mr - 2" />;"
          <span > Loading talents...</span>;)
        </div>) : (
        <span>;


            `Found ${resultCount} talent${resultCount !== 1 ? 's' :''}`;          )}
        </span>;
      )}
    </div>;
  ),;}


}`) 
}</span>) 
}</div>) 
    </div>`;
pr-12325

        </span>;
      )}
    </div>
  );
}
  )
}

;
