

<<<<<<< HEAD



export type PaginationProps = any;


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

        onClick={() => goTo(page - 1)}

=======
import React from 'react';'
import EnhancedButton from './EnhancedButton';'

  }
}
import React from 'react';
import EnhancedButton from './EnhancedButton';

export type PaginationProps = any;



export default function Pagination() {
  }
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

const canNext = page < totalPages;

const goTo = ("p": number) => {if (p >= 1 && p <= totalPages) onChange(p);

  }
  return (
    <div className='flex items-center justify-between gap-2 mt-4'>;
      <EnhancedButton
        variant='secondary'
        size='md'
        onClick={() => goTo(page - 1)}
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
        disabled={!canPrev}
      >;
        Prev;
      </EnhancedButton>;
<<<<<<< HEAD

      <div className='text-sm'    />;
        Page {page} of {totalPages}

      </div>;
      <EnhancedButton;
        variant='secondary';
        size='md';
        onClick={() =    /> goTo(page + 1)}


        disabled={!canNext}

      >
        Next;
      </EnhancedButton>
    </div>
  );
}

const Pagination: React.FC < PaginationProps> = ({
  current_page,
  total_pages,
  base_url,
  class_name = '' ;
}) => {
  const getPageNumbers = () =>: any {

}
      if (startPage > 1) {pages && pages.push(1)if (startPage > 2) {pages && pages.push('...')}

      }


=======
      <div className='text-sm'>;'
        Page {page} of {totalPages}
      </div>;
      <EnhancedButton;
        variant='secondary';'
        size='md';'
        onClick={() => goTo(page + 1)}

  return (
    <div className="flex items-center justify-between gap-2 mt-4">;
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page - 1)} disabled={!canPrev}>;
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page - 1)} disabled={!canPrev}>;"
        Prev;
      </EnhancedButton>;
      <div className="text-sm">;
        Page {page} of {totalPages}

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

interface PaginationProps  {currentPage: number;
  totalPages: number;
  baseUrl: string;}
  className?: string;}
      if (startPage > 1) {;
        pages && pages.push(1);
        if (startPage > 2) {;
          pages && pages.push('...');
}
      if (startPage > 1) {pages && pages.push(1)if (startPage > 2) {pages && pages.push('...')}
      }
      for (let i = startPage; i <= endPage; i++) {;
        pages && pages.push(i);
}
      if (endPage < totalPages) {;
        if (endPage < totalPages - 1) {;
          pages && pages.push('...');
}
        pages && pages.push(totalPages);
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
      if (startPage > 1) {pages && pages.push(1)if (startPage > 2) {pages && pages.push('...')}'
      }
        pages && pages.push(totalPages)}
    }
    return pages;
}
  if (totalPages <= 1) return null;
  return (<nav className={`flex items-center justify-center space-x-2 ${className}`}    />

      {/* Previous Button */}
<<<<<<< HEAD

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


=======
      {currentPage > 1 ? (<Link;
          }
          href={`${baseUrl}?page=${currentPage - 1}`}`          className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg "hover":bg-gray-50 "hover":text-gray-700 transition-colors">;"
          <ChevronLeft className="w-4 h-4 mr-1" />;"
          Previous;
        </Link>;
      ) : (<span className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">;"
          <ChevronLeft className="w-4 h-4 mr-1" />;"
          Previous;
        </span>;
      )}
      {/* Page Numbers */}

      <div className="flex items-center space-x-1">;
        {getPageNumbers().map((page, index) => {;
          if (page === '...') {;
            return (
              <span key={index} className="px-3 py-2 text-sm text-gray-500">;
      <div className="flex items-center space-x-1">;"
              <span key={index} className="px-3 py-2 text-sm text-gray-500">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                ...;
              </span>;
            )}

const pageNumber = page as number;

const isCurrentPage = pageNumber === currentPage;
          return (<Link;
              key={pageNumber}
              href={`${baseUrl}?page=${pageNumber}`}

<<<<<<< HEAD

              {pageNumber}
            </Link    />;
          )})}
      </div>;
      {/* Next Button */}

      {currentPage < totalPages ? (<Link;}
          href={`${baseUrl}?page=${currentPage + 1}`}"
          className=\"flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors\"    />;

    // Check condition;
if ( {) {$2;}
}for (let index = 1; i <= total_pages; i++) {pages.push (i)}
    } else {const start_page = Math.max (1, current_page - 2;
  const end_page = Math.min (total_pages, start_page + maxVisiblePages - 1)// Check condition;}
if ( {) {$2;}

=======
  }
  const end_page = Math.min (total_pages, start_page + maxVisiblePages - 1)// Check condition;
if ( {) {$2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

export default Pagination;
}
<<<<<<< HEAD

          className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 500 bg - white border border - gray - 300 rounded - lg hover:bg - gray - 50 hover:text - gray - 700 transition - colors">;

          Next;
          <ChevronRight className=w - 4 h-4 ml-1" />;
        </Link>) : (<span className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 300 bg - gray - 100 border border - gray - 200 rounded - lg cursor-not-allowed>;
          Next;
=======
origin/cursor/automate-test-improve-and-merge-code-2533
        pages.push (1)// Check condition;
if ( {) {$2;
}
          pages.push ('...')}
      }
      for (let index = start_page; i <= end_page; i++) {pages.push (i)}
      // Check condition;
if ( {) {$2;
}
        // Check condition;
if ( {) {$2;
}
          pages.push ('...')}
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
          className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 500 bg - white border border - gray - 300 rounded - lg hover:bg - gray - 50 hover:text - gray-700 transition-colors">;
          <ChevronLeft className="w - 4 h-4 mr-1" />;
          Previous;
        </Link>) : (<span className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 300 bg - gray - 100 border border - gray - 200 rounded - lg cursor-not-allowed">;
          <ChevronLeft className="w - 4 h-4 mr-1" />;
          Previous;
        </span>)}
      {/* Page Numbers */}
      <div className="flex items-center space-x-1">;
        {getPageNumbers ().map ((page, index) => {// Check condition;
if ( {) {$2;
}
            return (<span key={index} className="px - 3 py - 2 text - sm text-gray-500">;
                ...;
              </span>)}
          const page_number = page as number;
          const isCurrentPage = page_number === current_page;
          return (<Link;
              key={page_number}
              href={`${base_url}?page=${page_number}`}
              className={`px - 3 py - 2 text - sm font - medium rounded - lg transition - colors ${isCurrentPage;
                  ? 'bg - blue - 600 text - white border border - blue - 600';
                  : 'text - gray - 700 bg - white border border - gray - 300 hover:bg - gray - 50 hover:text - gray - 900';
}`}
            >;
              {page_number}
            </Link>)})}
      </div>;{/* Next Button */}
      {current_page < total_pages ? (<Link;
          href={`${base_url}?page=${current_page + 1}`}
>>>>>>> origin/cursor/delete-old-data-records-6bba

          className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 500 bg - white border border - gray - 300 rounded - lg hover:bg - gray - 50 hover:text - gray-700 transition-colors">;
          Next;
          <ChevronRight className="w - 4 h-4 ml-1" />;
        </Link>) : (<span className="flex items - center px - 3 py - 2 text - sm font - medium text - gray - 300 bg - gray - 100 border border - gray - 200 rounded - lg cursor-not-allowed">;
          Next;

<<<<<<< HEAD

=======
}
          <ChevronRight className="w - 4 h-4 ml-1" />;
        </span>)}
    </nav>)})export default Pagination;

  );

}

import React from 'react';
import EnhancedButton from './EnhancedButton';
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
          <ChevronRight className="w - 4 h - 4 ml - 1" />;
        </span>)}
    </nav>);
}
export default Pagination;


<<<<<<< HEAD

=======
}
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
