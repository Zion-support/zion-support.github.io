

interface ResultsHeaderProps {_isLoading: boolean;
  resultCount: number;}

export function ResultsHeader(_{_isLoading, _resultCount}: ResultsHeaderProps) {_return (
    <div className="flex items-center mb-6 text-zion-slate-light">
      {isLoading ? (
        <div className="flex items-center">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span>Loading talents...</span>
        </div>
      ) : (
        <span>
          {resultCount === 0 ? (
            "No talents found. Try adjusting your filters."
          ) : (
            `Found ${resultCount} talent${_resultCount !== 1 ? 's' : ''}`
          )}
        </span>
      )}
    </div>
  );
}
