<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react';
import EnhancedButton from './EnhancedButton';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/chore/fix-lint-and-merge
export type PaginationProps = any;

<<<<<<< HEAD
export type PaginationProps = {page: number;
  pageSize: number;
  total: number;}
  onChange: (nextPage: number) => void;}
}
=======
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
<<<<<<< HEAD
  page: number,
  page_size: number,
  total: number,
};
=======

  page: number,
  page_size: number,
  total: number,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default function Pagination({
  page,
  pageSize,
  total}
  onChange}
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

<<<<<<< HEAD
<<<<<<< HEAD
=======
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
import React from 'react';
import EnhancedButton from './EnhancedButton';
export type PaginationProps = {;

export type PaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onChange: (nextPage: number) => void;
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
  const goTo = (p: number) => {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (p >= 1 && p <= totalPages) onChange(p);
  }
  return (
    <div className='flex items-center justify-between gap-2 mt-4'>;
      <EnhancedButton
        variant='secondary'
        size='md'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        onClick={() => goTo(page - 1)}
=======
const canPrev = page > 1;

const canNext = page < totalPages;

const goTo = (if (p >= 1 && p <= totalPages) onChange(p);
  return (<div className='flex items-center justify-between gap-2 mt-4'    />;
      <EnhancedButton;
        variant='secondary';
        size='md';) =    /> {
  return $3;}
}
        onClick={() = /> goTo(page - 1)}
>>>>>>> origin/chore/fix-lint-and-merge
        disabled={!canPrev}
      >;
        Prev;
      </EnhancedButton>;
<<<<<<< HEAD

        onClick={() => goTo(page + 1)}
<<<<<<< HEAD
=======
      <div className='text-sm'    />;
        Page {page} of {totalPages}
=======
        disabled={!canNext}
      >        Next;
      </EnhancedButton>;
    </div>;
  );

}  }
    if (p >= 1 && p <= totalPages) onChange(p)
  };
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface PaginationProps {;
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  className?: string;
}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </div>;
      <EnhancedButton;
        variant='secondary';
        size='md';
        onClick={() =    /> goTo(page + 1)}

>>>>>>> origin/chore/fix-lint-and-merge
        disabled={!canNext}

      >
        Next;
      </EnhancedButton>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
return (;
    <div className="flex items-center justify-between gap-2 mt-4">;"

=======
const Pagination: React.FC < PaginationProps> = ({
  current_page,
  total_pages,
  base_url,
  class_name = '' ;
}) => {
  const getPageNumbers = () =>: any {
<<<<<<< HEAD
    const pages = [];
    const maxVisiblePages = 5;
    } else {;
      const startPage = Math && Math.max(1, currentPage - 2);
      const endPage = Math && Math.min(totalPages, startPage + maxVisiblePages - 1);
=======

    const pages = [];
    const maxVisiblePages = 5;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

=======
  return (
    <div className=\"flex items-center justify-between gap-2 mt-4\"    />;
"
      <EnhancedButton variant=\"secondary\" size=\"md\" onClick={() =    /> goTo(page - 1)} disabled={!canPrev}>;
        Prev;
      </EnhancedButton>;"
      <div className=\"text-sm\"    />;
        Page {page} of {totalPages}
import Link from 'next/link';
import { ChevronLeft, ChevronRight  } from 'lucide-react';

<<<<<<< HEAD
interface PaginationProps  {currentPage: number;
  totalPages: number;
  baseUrl: string;}
  className?: string;}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (startPage > 1) {;
        pages && pages.push(1);
        if (startPage > 2) {;
          pages && pages.push('...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
      if (startPage > 1) {pages && pages.push(1)if (startPage > 2) {pages && pages.push('...')}
>>>>>>> origin/chore/fix-lint-and-merge
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      for (let i = startPage; i <= endPage; i++) {;
        pages && pages.push(i);
}
      if (endPage < totalPages) {;
        if (endPage < totalPages - 1) {;
          pages && pages.push('...');
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
        pages && pages.push(totalPages);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
        pages && pages.push(totalPages)}
    }
    return pages;
}
  if (totalPages <= 1) return null;
  return (<nav className={`flex items-center justify-center space-x-2 ${className}`}    />

      {/* Previous Button */}
<<<<<<< HEAD
      {currentPage > 1 ? (<Link;

          Previous;
        </span>;
      )}
      {/* Page Numbers */}
<<<<<<< HEAD

=======
      {currentPage > 1 ? (<Link;}
          href={`${baseUrl}?page=${currentPage - 1}`}"
          className=\"flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors\"    />;"
          <ChevronLeft className=\"w-4 h-4 mr-1\"    />;
          Previous;
        </Link>;"
      ) : (<span className=\"flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed\"    />;"
          <ChevronLeft className=\"w-4 h-4 mr-1\"    />;
          Previous;
        </span>;
      )}
      {/* Page Numbers */}"
      <div className=\"flex items-center space-x-1\"    />;"
              <span key={index} className=\"px-3 py-2 text-sm text-gray-500\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
=======
      <div className="flex items-center space-x-1">;
<<<<<<< HEAD
        {getPageNumbers().map((page, index) => {;
          if (page === '...') {;
            return (
=======

        {getPageNumbers().map((page, index) => {;
          if (page === '...') {;
            return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <span key={index} className="px-3 py-2 text-sm text-gray-500">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                ...;
              </span>;
            )}

const pageNumber = page as number;

const isCurrentPage = pageNumber === currentPage;
          return (<Link;
              key={pageNumber}
              href={`${baseUrl}?page=${pageNumber}`}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isCurrentPage
                  ? 'bg-blue-600 text-white border border-blue-600'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-900'
}`}>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              {pageNumber}
            </Link    />;
          )})}
      </div>;
      {/* Next Button */}
<<<<<<< HEAD
      {currentPage < totalPages ? (<Link;
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
    if (p >= 1 && p <= totalPages) onChange(p);
  }
  return (
    <div className='flex items-center justify-between gap-2 mt-4'>
      <EnhancedButton
        variant='secondary'
        size='md';) =    /> {
  return $3;}

        onClick={() = /> goTo(page - 1)}
        disabled={!canPrev}
      >
        Prev
      </EnhancedButton>
      <div className='text-sm'    />
        Page {page} of {totalPages}
      </div>
      <EnhancedButton
        variant='secondary'
        size='md'
        onClick={() =    /> goTo(page + 1)}

        disabled={!canNext}

      >
        Next
      </EnhancedButton>
    </div>
  )
  return (
    <div className=\"flex items-center justify-between gap-2 mt-4\"    />
"
      <EnhancedButton variant=\"secondary\" size=\"md\" onClick={() =    /> goTo(page - 1)} disabled={!canPrev}>
        Prev
      </EnhancedButton>;"
      <div className=\"text-sm\"    />
        Page {page} of {totalPages}
import Link from 'next/link'
import { ChevronLeft, ChevronRight  } from 'lucide-react'
interface PaginationProps  {currentPage: number
  totalPages: number
  baseUrl: string;}
  className?: string;}
  if($2) {pages && pages.push(1)if (startPage > 2) {pages && pages.push('...')}

        pages && pages.push(totalPages)}

    return pages
  if (totalPages <= 1) return null
  return (<nav className={`flex items-center justify-center space-x-2 ${className}`}    />

      {/* Previous Button */}
      {currentPage > 1 ? (<Link;}
          href={`${baseUrl}?page=${currentPage - 1}`}"
          className=\"flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors\"    />;"
          <ChevronLeft className=\"w-4 h-4 mr-1\"    />
          Previous
        </Link>;"
      ) : (<span className=\"flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed\"    />;"
          <ChevronLeft className=\"w-4 h-4 mr-1\"    />
          Previous
        </span>
      )}
      {/* Page Numbers */}"
      <div className=\"flex items-center space-x-1\"    />;"
              <span key={index} className=\"px-3 py-2 text-sm text-gray-500\"    />
                ...
              </span>
            )}

const pageNumber = page as number
const isCurrentPage = pageNumber === currentPage
          return (<Link
              key={pageNumber}
              href={`${baseUrl}?page=${pageNumber}`}
              {pageNumber}
            </Link    />
          )})}
      </div>
      {/* Next Button */}
      {currentPage < totalPages ? (;
        <Link;
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors">;
<<<<<<< HEAD
=======
      {currentPage < totalPages ? (<Link;}
          href={`${baseUrl}?page=${currentPage + 1}`}"
          className=\"flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
    // Check condition;
if ( {) {$2;}
}for (let index = 1; i <= total_pages; i++) {pages.push (i)}
    } else {const start_page = Math.max (1, current_page - 2;
  const end_page = Math.min (total_pages, start_page + maxVisiblePages - 1)// Check condition;}
if ( {) {$2;}
=======
    // Check condition
if ( {) {
  $2
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

export default Pagination;
}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
        pages.push (1)// Check condition;
if ( {) {$2;
}
          pages.push ('...)}
      }
      for (let index = start_page; i <= end_page; i++) {pages.push (i)}
      // Check condition;
if ( {) {$2;
}
        // Check condition;
if ( {) {$2;
}
          pages.push (...')}
        pages.push (total_pages)}
    }
    return pages;
}
  // Check condition;
if (return null) {$2;
}
  return (<nav className={`flex items - center justify - center space - x-2 ${class_name}`}>;
      {/* Previous Button */}
      {current_page > 1 ? (<Link;
          href={`${base_url}?page=${current_page - 1}`}
          className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 500 bg - white border border - gray - 300 rounded - lg hover:bg - gray - 50 hover:text - gray-700 transition-colors>;
          <ChevronLeft className=w - 4 h-4 mr-1" />;
          Previous;
        </Link>) : (<span className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 300 bg - gray - 100 border border - gray - 200 rounded - lg cursor-not-allowed>;
          <ChevronLeft className=w - 4 h-4 mr-1" />;
          Previous;
        </span>)}
      {/* Page Numbers */}
      <div className="flex items-center space-x-1>;
        {getPageNumbers ().map ((page, index) => {// Check condition;
if ( {) {$2;
}
            return (<span key={index} className=px - 3 py - 2 text - sm text-gray-500">;
                ...;
              </span>)}
          const page_number = page as number;
          const isCurrentPage = page_number === current_page;
          return (<Link;
              key={page_number}
              href={`${base_url}?page=${page_number}`}
              className={`px - 3 py - 2 text - sm font - medium rounded - lg transition - colors ${isCurrentPage;
                  ? 'bg - blue - 600 text - white border border - blue - 600;
                  : text - gray - 700 bg - white border border - gray - 300 hover:bg - gray - 50 hover:text - gray - 900';
}`}
            >;
              {page_number}
            </Link>)})}
      </div>;{/* Next Button */}
      {current_page < total_pages ? (<Link;
          href={`${base_url}?page=${current_page + 1}`}
<<<<<<< HEAD
          className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 500 bg - white border border - gray - 300 rounded - lg hover:bg - gray - 50 hover:text - gray-700 transition-colors>;
=======
          className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 500 bg - white border border - gray - 300 rounded - lg hover:bg - gray - 50 hover:text - gray - 700 transition - colors">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          Next;
          <ChevronRight className=w - 4 h-4 ml-1" />;
        </Link>) : (<span className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 300 bg - gray - 100 border border - gray - 200 rounded - lg cursor-not-allowed>;
          Next;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
}
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
}
}
<<<<<<< HEAD
          <ChevronRight className=w - 4 h-4 ml-1" />;
        </span>)}
    </nav>)})export default Pagination;

  );

}
import React from 'react;
import EnhancedButton from ./EnhancedButton';
export type PaginationProps = $2;
  pageSize: number,
  total: number,
  onChange: (nextPage: number) => void
},

export default function Pagination({ page, pageSize, total, onChange }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize)),
  const canPrev = $2;
  const canNext = $2;
  const goTo = $2;
  return (
    <div className="flex items-center justify-between gap-2 mt-4>
      <EnhancedButton variant=secondary" size="md onClick={() => goTo(page - 1)} disabled={!canPrev}>
        Prev
      </EnhancedButton>
      <div className=text-sm">
        Page {page} of {totalPages}
      </div>
      <EnhancedButton variant="secondary size=md" onClick={() => goTo(page + 1)} disabled={!canNext}>
        Next
      </EnhancedButton>
    </div>
  )
}

"
=======

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <ChevronRight className="w - 4 h - 4 ml - 1" />;
        </span>)}
    </nav>);
}
export default Pagination;
<<<<<<< HEAD

  );

}
  );
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
