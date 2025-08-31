import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = ''
}) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {/* Page Info */}
      <div className="text-sm text-zion-slate-light text-center">
        Page {currentPage} of {totalPages}
      </div>
      
      {/* Navigation Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-3 py-2 text-sm font-medium text-zion-slate-light bg-zion-blue-dark border border-zion-purple/20 rounded-lg hover:bg-zion-purple/20 hover:text-zion-cyan disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 w-full sm:w-auto justify-center"
        aria-label={`Go to previous page, page ${currentPage - 1}`}
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        <span className="hidden sm:inline">Previous</span>
        <span className="sm:hidden">Prev</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1 flex-wrap justify-center">
        {getVisiblePages().map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-zion-slate-light">
                <MoreHorizontal className="w-4 h-4" />
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 min-w-[40px] ${
                  currentPage === page
                    ? 'bg-zion-cyan text-zion-blue-dark'
                    : 'text-zion-slate-light bg-zion-blue-dark border border-zion-purple/20 hover:bg-zion-purple/20 hover:text-zion-cyan'
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-3 py-2 text-sm font-medium text-zion-slate-light bg-zion-blue-dark border border-zion-purple/20 rounded-lg hover:bg-zion-purple/20 hover:text-zion-cyan disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 w-full sm:w-auto justify-center"
        aria-label={`Go to next page, page ${currentPage + 1}`}
      >
        <span className="hidden sm:inline">Next</span>
        <span className="sm:hidden">Next</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
      </div>
    </div>
  );
};