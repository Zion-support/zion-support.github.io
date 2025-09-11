
import { Loader2 } from 'lucide-react';
;
interface ResultsHeaderProps {;
  isLoading:boolean,;
  resultCount:number;
}
;
export function ResultsHeader({ isLoading, resultCount } ResultsHeaderProps) {;
  return (;
    <div className="flex items-center mb-6 text-zion-slate-light">;
      {isLoading ? (;
        <div className="flex items-center">;
          <Loader2 className="h-4 w-4 animate-spin mr-2" />;
          <span>Loading talents...</span>;
        </div>;
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
 {;
  isLoading ? (<div className="flex items-center" > <Loader2 className="h-4 w-4 animate-spin mr-2" /> <span>Loading talents...</span> </div>) : (<span> {";"  resultCount === 0 ? ("No talents found. Try adjusting your filters.") : (`Found $ {;
  resultCount ;
}talent$ {;
  resultCount !== 1 ? 's' : '' ;
}`) ;
}</span>) ;
<<<<<<< HEAD
:temp_broken_files/talent/ResultsHeader.tsx
}</div>) ;"}'"
}</div>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/ResultsHeader.tsx
=======

}</div>) ;
}'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
