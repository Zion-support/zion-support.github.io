import { Loader2 } from "lucide-react";
interface ResultsHeaderProps {
  isLoading: boolean;
  resultCount: number;
}
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {}
  return ("
    <div className="flex items-center mb-6 text-zion-slate-light">
      {isLoading ? ("
        <div className="flex items-center">"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
          {resultCount === 0
            ? "No talents found. Try adjusting your filters."
            : `Found ${resultCount} talent${resultCount !== 1 ? "s" : ""}`}
        </span>
      )}
<<<<<<< HEAD
<<<<<<< HEAD

        </span>;
      )}
    </div>;
  );
}
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

=======
        </span>;      )}

>>>>>>> origin/cursor/delete-old-data-records-6bba
          <span > Loading talents...</span>;
        </div>) : (
        <span>;
          {result_count === 0;"
            ? "No talents found. Try adjusting your filters.";"`
            : `Found ${result_count} talent${result_count !== 1 ? "s" : ""}`}
        </span>)}
    </div>);

<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD
=======

}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
        </span>;
      )}
    </div>
  );
}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  )
}

;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
