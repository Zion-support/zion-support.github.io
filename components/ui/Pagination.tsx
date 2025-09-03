import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage;
  totalPages;
  baseUrl;
  className = '' 
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if() {

      for() {

        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      if() {

        pages.push(1);
        if() {

          pages.push('...');
        }
      }
      
      for() {

        pages.push(i);
      }
      
      if() {

        if() {

          pages.push('...');
        }
        pages.push(totalPages);
      }
    }
    
    return pages;
  }

  if (totalPages <= 1) return null;

  return (
    <nav className={`flex items-center justify-center space-x-2 ${className}`}>
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link;
          href={`${baseUrl}?page=${currentPage - 1}`}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous;
        </Link>
      ) : (
        <span className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous;
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {getPageNumbers().map((page, index) => {
          if() {

            return (
              <span key={index} className="px-3 py-2 text-sm text-gray-500">
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isCurrentPage = pageNumber === currentPage;

          return (
            <Link;
              key={pageNumber}
              href={`${baseUrl}?page=${pageNumber}`}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isCurrentPage;
                  ? 'bg-blue-600 text-white border border-blue-600'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {pageNumber}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link;
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          Next;
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      ) : (
        <span className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
          Next;
          <ChevronRight className="w-4 h-4 ml-1" />
        </span>
      )}
    </nav>
  );
}

export default Pagination;