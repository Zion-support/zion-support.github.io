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

  page: number;
  page_size: number;
  total: number;

export type PaginationProps = {
  on_change: (next_page: number) => void;
}
;
export default /**
 * Pagination - Function description
 */
function Pagination() {  const total_pages = Math.max (1, Math.ceil (total / page_size));export type PaginationProps = {
  page: number,
  page_size: number,
  total: number,


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


  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;
  const goTo = (p: number) => {

};

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="flex items-center justify-between gap-2 mt-4">;
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page - 1)} disabled={!canPrev}>;
        Prev;
      </EnhancedButton>;
      <div className="text-sm">;
        Page {page} of {totalPages}

);
=======

=======
);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface PaginationProps {;
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  className?: string;
}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const Pagination: React.FC<PaginationProps> = ({ ;
  currentPage,;
  totalPages,;
  baseUrl,;
  className = '' ;
}) => {;
  const getPageNumbers = () => {;
  on_change: (next_page: number) => void;
}
;
export default /**
 * Pagination - Function description
 */
function Pagination() {
  const total_pages = Math.max (1, Math.ceil (total / page_size));
  const can_prev = page > 1;
  const can_next = page < total_pages;
;
  const go_to = (p: number) =>: any {
    if (on_change (p)) {
  $2
}
  }
;
  return (
    <div className='flex items - center justify - between gap - 2 mt - 4'>;
      <EnhancedButton;
        variant='secondary';
        size='md';
        on_click={() => go_to (page - 1)}
        disabled={!can_prev}
      >;
        Prev;
      </EnhancedButton>;
      <div className='text - sm'>;
        Page {page} of {total_pages}
      </div>;
      <EnhancedButton;
        variant='secondary';
        size='md';
        on_click={() => go_to (page + 1)}
        disabled={!can_next}
      >        Next;
      </EnhancedButton>;
    </div>);
}  }
;
  return (
    <div className="flex items - center justify - between gap - 2 mt - 4">;
      <EnhancedButton variant="secondary" size="md" on_click={() => go_to (page - 1)} disabled={!can_prev}>;
        Prev;
      </EnhancedButton>;
      <div className="text - sm">;
        Page {page} of {total_pages}
      </div>;
      <EnhancedButton variant="secondary" size="md" on_click={() => go_to (page + 1)} disabled={!can_next}>;
        Next;
      </EnhancedButton>;
    </div>);
import Link from 'next / link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface PaginationProps {
  current_page: number;
  total_pages: number;
  base_url: string;
  class_name?: string;
}
const Pagination: React.FC < PaginationProps> = ({
  current_page,
  total_pages,
  base_url,
  class_name = '' ;
}) => {
  const getPageNumbers = () =>: any {
    const pages = [];
    const maxVisiblePages = 5;

    } else {;
      const startPage = Math && Math.max(1, currentPage - 2);
      const endPage = Math && Math.min(totalPages, startPage + maxVisiblePages - 1);

      for (let i = startPage; i <= endPage; i++) {;
        pages && pages.push(i);
}
      if (endPage < totalPages) {;
        if (endPage < totalPages - 1) {;
          pages && pages.push('...');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
        {getPageNumbers().map((page, index) => {;
          if (page === '...') {;
            return (

}
export default Pagination;
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  );

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
