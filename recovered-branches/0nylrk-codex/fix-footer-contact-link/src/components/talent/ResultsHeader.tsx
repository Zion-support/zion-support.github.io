
<<<<<<< HEAD
<<<<<<< HEAD
import { Loader2 } from "lucide-react",
=======
import { Loader2 } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ResultsHeaderProps {
  isLoading: boolean,
  resultCount: number
}

export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
  return (
    <div className=&quot;flex items-center mb-6 text-zion-slate-light&quot;>
      {isLoading ? (
        <div className=&quot;flex items-center&quot;>
          <Loader2 className=&quot;h-4 w-4 animate-spin mr-2&quot; />
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
          {resultCount === 0 ? (
            &quot;No talents found. Try adjusting your filters.&quot;
          ) : (
            `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          )}
        </span>;
      )}
    </div>;
  );
}
;