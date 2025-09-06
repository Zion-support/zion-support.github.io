import React from 'react';
import EnhancedButton from './EnhancedButton';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type PaginationProps = any;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
<<<<<<< HEAD
export type PaginationProps = {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export type PaginationProps = {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  page: number;
  pageSize: number;
  total: number;
  onChange: (nextPage: number) => void;
<<<<<<< HEAD
}
export default function Pagination({
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
};
}

export default function Pagination({
  page,
  pageSize,
  total,
  onChange,
}: PaginationProps) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  page,
  pageSize,
  total,
  onChange,;
}: PaginationProps) {  const totalPages = Math.max(1, Math.ceil(total / pageSize));export type PaginationProps = {
  page: number,
  pageSize: number,
  total: number,
  onChange: (nextPage: number) => void;
};

export default function Pagination({ page, pageSize, total, onChange }: PaginationProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;
  const goTo = (p: number) => {
    if (p >= 1 && p <= totalPages) onChange(p);
  }
  return (
    <div className='flex items-center justify-between gap-2 mt-4'>
      <EnhancedButton
        variant='secondary'
        size='md'
        onClick={() => goTo(page - 1)}
        disabled={!canPrev}
      >
        Prev
      </EnhancedButton>
      <div className='text-sm'>
        Page {page} of {totalPages}
      </div>
      <EnhancedButton
        variant='secondary'
        size='md'
        onClick={() => goTo(page + 1)}
        disabled={!canNext}
<<<<<<< HEAD
      >        Next
      </EnhancedButton>
    </div>
  );
}  }

  return (
    <div className="flex items-center justify-between gap-2 mt-4">
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page - 1)} disabled={!canPrev}>
        Prev
      </EnhancedButton>
      <div className="text-sm">
        Page {page} of {totalPages}
      </div>
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page + 1)} disabled={!canNext}>
        Next
      </EnhancedButton>
    </div>
<<<<<<< HEAD
);
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  className?: string;
}
const Pagination: React.FC<PaginationProps> = ({currentPage
  totalPages
  baseUrl
  className = '' ;
}) => {
  const getPageNumbers = () => {const pages = [];
    const maxVisiblePages = 5;
    if (totalPages <= maxVisiblePages) {;
      for (let i = 1; i <= totalPages; i++) {;
        pages.push(i);
}
    } else {const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      if (startPage > 1) {;
        pages.push(1);
        if (startPage > 2) {;
          pages.push('...');
}
      }
      for (let i = startPage; i <= endPage; i++) {pages.push(i);
}
      if (endPage < totalPages) {if (endPage < totalPages - 1) {;
          pages.push('...');
}
        pages.push(totalPages);
}
    }
    return pages;
}
  if (totalPages <= 1) return null;
  return (;
    <nav className={`flex items-center justify-center space-x-2 ${className}`}>;
      {/* Previous Button */}
      {currentPage > 1 ? (;
        <Link;
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
        {getPageNumbers().map((page, index) => {if (page === '...') {;
            return (;
              <span key={index} className="px-3 py-2 text-sm text-gray-500">;
                ...;
              </span>;
            );
}
          const pageNumber = page as number;
          const isCurrentPage = pageNumber === currentPage;
          return (;
            <Link;
              key={pageNumber}
              href={`${baseUrl}?page=${pageNumber}`}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isCurrentPage;
                  ? 'bg-blue-600 text-white border border-blue-600';
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-900';
}`}
            >;
              {pageNumber}
            </Link>;
          );
})}
      </div>;
      {/* Next Button */}
      {currentPage < totalPages ? (;
        <Link;
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
=======
<<<<<<< HEAD
      >
        Next
      </EnhancedButton>
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
