
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import EnhancedButton from './EnhancedButton';

export type PaginationProps = {;
  page: number;
  pageSize: number;
  total: number;
  onChange: (nextPage: number) => void;
<<<<<<< HEAD
}
export default function Pagination({
  page
  pageSize
  total
  onChange
}: PaginationProps) {  const totalPages = Math.max(1, Math.ceil(total / pageSize));export type PaginationProps = {
  page: number
  pageSize: number
  total: number
  onChange: (nextPage: number) => void
}
export default function Pagination({ page, pageSize, total, onChange }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;
  const goTo = (p: number) => {
=======
};

export default function Pagination(): any ({;
  page,;
  pageSize,;
  total,;
  onChange,;
}: PaginationProps) {  const totalPages = Math && Math.max(1, Math && Math.ceil(total / pageSize));export type PaginationProps = {;
  page: number,;
  pageSize: number,;
  total: number,;
  onChange: (nextPage: number) => void;
};

export default function Pagination(): any ({ page, pageSize, total, onChange }: PaginationProps) {;
  const totalPages = Math && Math.max(1, Math && Math.ceil(total / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;

  const goTo = (p: number) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (p >= 1 && p <= totalPages) onChange(p);
  }
  return (
    <div className='flex items-center justify-between gap-2 mt-4'>;
      <EnhancedButton
        variant='secondary'
        size='md'
        onClick={() => goTo(page - 1)}
        disabled={!canPrev}
      >;
        Prev;
      </EnhancedButton>;
      <div className='text-sm'>;
        Page {page} of {totalPages}
      </div>;
      <EnhancedButton
        variant='secondary'
        size='md'
        onClick={() => goTo(page + 1)}
        disabled={!canNext}
      >        Next;
      </EnhancedButton>;
    </div>;
  );
}  }

  return (
    <div className="flex items-center justify-between gap-2 mt-4">;
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page - 1)} disabled={!canPrev}>;
        Prev;
      </EnhancedButton>;
      <div className="text-sm">;
        Page {page} of {totalPages}
<<<<<<< HEAD
      </div>
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page + 1)} disabled={!canNext}>
        Next
      </EnhancedButton>
    </div>
);
=======
      </div>;
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page + 1)} disabled={!canNext}>;
        Next;
      </EnhancedButton>;
    </div>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface PaginationProps {;
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  className?: string;
}
<<<<<<< HEAD
const Pagination: React.FC<PaginationProps> = ({currentPage
  totalPages
  baseUrl
  className = '' ;
}) => {
  const getPageNumbers = () => {const pages = [];
=======

const Pagination: React.FC<PaginationProps> = ({ ;
  currentPage,;
  totalPages,;
  baseUrl,;
  className = '' ;
}) => {;
  const getPageNumbers = () => {;
    const pages = [];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const maxVisiblePages = 5;
    if (totalPages <= maxVisiblePages) {;
      for (let i = 1; i <= totalPages; i++) {;
        pages && pages.push(i);
}
<<<<<<< HEAD
    } else {const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
=======
    } else {;
      const startPage = Math && Math.max(1, currentPage - 2);
      const endPage = Math && Math.min(totalPages, startPage + maxVisiblePages - 1);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (startPage > 1) {;
        pages && pages.push(1);
        if (startPage > 2) {;
          pages && pages.push('...');
}
      }
<<<<<<< HEAD
      for (let i = startPage; i <= endPage; i++) {pages.push(i);
}
      if (endPage < totalPages) {if (endPage < totalPages - 1) {;
          pages.push('...');
=======

      for (let i = startPage; i <= endPage; i++) {;
        pages && pages.push(i);
}

      if (endPage < totalPages) {;
        if (endPage < totalPages - 1) {;
          pages && pages.push('...');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
        pages && pages.push(totalPages);
}
    }
    return pages;
}
  if (totalPages <= 1) return null;
  return (
    <nav className={`flex items-center justify-center space-x-2 ${className}`}>;
      {/* Previous Button */}
      {currentPage > 1 ? (;
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors">;
          <ChevronLeft className="w-4 h-4 mr-1" />;
          Previous;
        </Link>;
      ) : (;
        <span className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">;
          <ChevronLeft className="w-4 h-4 mr-1" />;
          Previous;
        </span>;
      )}
      {/* Page Numbers */}
      <div className="flex items-center space-x-1">;
<<<<<<< HEAD
        {getPageNumbers().map((page, index) => {if (page === '...') {;
            return (;
=======
        {getPageNumbers().map((page, index) => {;
          if (page === '...') {;
            return (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <span key={index} className="px-3 py-2 text-sm text-gray-500">;
                ...;
              </span>;
            );
}
          const pageNumber = page as number;
          const isCurrentPage = pageNumber === currentPage;
          return (
            <Link
              key={pageNumber}
              href={`${baseUrl}?page=${pageNumber}`}
<<<<<<< HEAD
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isCurrentPage;
                  ? 'bg-blue-600 text-white border border-blue-600';
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-900';
}`}
            >;
=======
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isCurrentPage
                  ? 'bg-blue-600 text-white border border-blue-600'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-900'
}`}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              {pageNumber}
            </Link>;
          );
})}
      </div>;
      {/* Next Button */}
      {currentPage < totalPages ? (;
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors">;
          Next;
          <ChevronRight className="w-4 h-4 ml-1" />;
        </Link>;
      ) : (;
        <span className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">;
          Next;
          <ChevronRight className="w-4 h-4 ml-1" />;
        </span>;
      )}
    </nav>;
  );
}
export default Pagination;
}