
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
<<<<<<< HEAD
export type PaginationProps = {;
=======

<<<<<<< HEAD

  page: number;
  page_size: number;
  total: number;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export type PaginationProps = {
  on_change: (next_page: number) => void;
}
<<<<<<< HEAD
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
=======
;
export default /**
 * Pagination - Function description
 */
function Pagination() {  const total_pages = Math.max (1, Math.ceil (total / page_size));export type PaginationProps = {

  page: number,
  page_size: number,
  total: number,


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;
  const goTo = (p: number) => {
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface PaginationProps {;
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  className?: string;
}
    const maxVisiblePages = 5;
      if (startPage > 1) {;
        pages && pages.push(1);
        if (startPage > 2) {;
          pages && pages.push('...');
}
      }
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
    // Check condition
if ( {) {
  $2
}
      for (let index = 1; i <= total_pages; i++) {
        pages.push (i);
}
    } else {
      const start_page = Math.max (1, current_page - 2);
      const end_page = Math.min (total_pages, start_page + maxVisiblePages - 1);
      // Check condition
if ( {) {
  $2
}
        pages.push (1);
        // Check condition
if ( {) {
  $2
}
          pages.push ('...');
}
      }
      for (let index = start_page; i <= end_page; i++) {
        pages.push (i);
}
      // Check condition
if ( {) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          pages.push ('...');
}
        pages.push (total_pages);
}
    }
    return pages;
}
  // Check condition
if (return null) {
  $2
}
  return (
    <nav className={`flex items - center justify - center space - x-2 ${class_name}`}>;
      {/* Previous Button */}
      {current_page > 1 ? (
        <Link;
          href={`${base_url}?page=${current_page - 1}`}
          className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 500 bg - white border border - gray - 300 rounded - lg hover:bg - gray - 50 hover:text - gray - 700 transition - colors">;
          <ChevronLeft className="w - 4 h - 4 mr - 1" />;
          Previous;
        </Link>) : (
        <span className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 300 bg - gray - 100 border border - gray - 200 rounded - lg cursor - not - allowed">;
          <ChevronLeft className="w - 4 h - 4 mr - 1" />;
          Previous;
        </span>)}
      {/* Page Numbers */}
      <div className="flex items - center space - x-1">;
        {getPageNumbers ().map ((page, index) => {
          // Check condition
if ( {) {
  $2
}
            return (
              <span key={index} className="px - 3 py - 2 text - sm text - gray - 500">;
                ...;
              </span>);
}
          const page_number = page as number;
          const isCurrentPage = page_number === current_page;
          return (
            <Link;
              key={page_number}
              href={`${base_url}?page=${page_number}`}
              className={`px - 3 py - 2 text - sm font - medium rounded - lg transition - colors ${
                isCurrentPage;
                  ? 'bg - blue - 600 text - white border border - blue - 600';
                  : 'text - gray - 700 bg - white border border - gray - 300 hover:bg - gray - 50 hover:text - gray - 900';
}`}
            >;
              {page_number}
            </Link>);
})}
      </div>;
;
      {/* Next Button */}
      {current_page < total_pages ? (
        <Link;
          href={`${base_url}?page=${current_page + 1}`}
          className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 500 bg - white border border - gray - 300 rounded - lg hover:bg - gray - 50 hover:text - gray - 700 transition - colors">;
          Next;
          <ChevronRight className="w - 4 h - 4 ml - 1" />;
        </Link>) : (
        <span className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 300 bg - gray - 100 border border - gray - 200 rounded - lg cursor - not - allowed">;
          Next;
<<<<<<< HEAD


}
export default Pagination;
}
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <ChevronRight className="w - 4 h - 4 ml - 1" />;
        </span>)}
    </nav>);
}
export default Pagination;
<<<<<<< HEAD
<<<<<<< HEAD
        Next
      </EnhancedButton>
    </div>
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
