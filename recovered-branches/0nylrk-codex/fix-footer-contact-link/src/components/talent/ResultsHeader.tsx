
<<<<<<< HEAD
<<<<<<< HEAD
import { Loader2 } from "lucide-react";
=======
import { Loader2 } from "lucide-react",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import {Loader2} from "lucide-react";
=======
import { Loader2 } from "lucide-react",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ResultsHeaderProps {
  isLoading: boolean;
  resultCount: number
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
=======
          {resultCount === 0 ? (
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Loader2 } from "lucide-react",;
interface ResultsHeaderProps {;
  isLoading: boolean;
  resultCount: number;
}
;
export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {;
  return (;
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          )}
        </span>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      )}
    </div>
<<<<<<< HEAD
  );
}
=======
  )
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
