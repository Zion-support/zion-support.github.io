

<<<<<<< HEAD
interface ResultsHeaderProps {
  isLoading: boolean,
  resultCount: number
}

export function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
  return (
    <div className=&quot;flex items-center mb-6 text-zion-slate-light&quot;>
=======
interface ResultsHeaderProps {_isLoading: boolean;
  resultCount: number;}

export function ResultsHeader(_{_isLoading, _resultCount}: ResultsHeaderProps) {_return (
    <div className="flex items-center mb-6 text-zion-slate-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
            `Found ${resultCount} talent${_resultCount !== 1 ? 's' : ''}`
          )}
        </span>
      )}
    </div>
  )
}
