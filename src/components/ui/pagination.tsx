import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "./Button"

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className = "",
}: PaginationProps) {
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);
    
    // Adjust if we're near the beginning or end
    if (currentPage <= halfVisible) {
      endPage = Math.min(totalPages, maxVisiblePages);
    }
    if (currentPage > totalPages - halfVisible) {
      startPage = Math.max(1, totalPages - maxVisiblePages + 1);
    }
    
    // Add first page
    if (showFirstLast && startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }
    
    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    // Add last page
    if (showFirstLast && endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={cn("flex items-center justify-center space-x-1", className)}>
      {showPrevNext && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
      
      {visiblePages.map((page, index) => {
        if (page === "...") {
          return (
            <div key={`ellipsis-${index}`} className="flex items-center justify-center h-8 w-8">
              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </div>
          );
        }
        
        const pageNumber = page as number;
        const isCurrentPage = pageNumber === currentPage;
        
        return (
          <Button
            key={pageNumber}
            variant={isCurrentPage ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(pageNumber)}
            className="h-8 w-8 p-0"
          >
            {pageNumber}
          </Button>
        );
      })}
      
      {showPrevNext && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-8 w-8 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

export interface PaginationInfoProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  className?: string;
}

export function PaginationInfo({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  className = "",
}: PaginationInfoProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  
  return (
    <div className={cn("text-sm text-muted-foreground", className)}>
      Showing {startItem} to {endItem} of {totalItems} results
    </div>
  );
}

// Additional pagination components for compatibility
export const PaginationContent = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center space-x-1">{children}</div>
);

export const PaginationItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center">{children}</div>
);

export const PaginationLink = ({ 
  children, 
  isActive = false, 
  onClick 
}: { 
  children: React.ReactNode; 
  isActive?: boolean; 
  onClick?: () => void; 
}) => (
  <Button
    variant={isActive ? "default" : "outline"}
    size="sm"
    onClick={onClick}
    className="h-8 w-8 p-0"
  >
    {children}
  </Button>
);

export const PaginationNext = ({ onClick, disabled }: { onClick?: () => void; disabled?: boolean }) => (
  <Button
    variant="outline"
    size="sm"
    onClick={onClick}
    disabled={disabled}
    className="h-8 w-8 p-0"
  >
    <ChevronRight className="h-4 w-4" />
  </Button>
);

export const PaginationPrevious = ({ onClick, disabled }: { onClick?: () => void; disabled?: boolean }) => (
  <Button
    variant="outline"
    size="sm"
    onClick={onClick}
    disabled={disabled}
    className="h-8 w-8 p-0"
  >
    <ChevronLeft className="h-4 w-4" />
  </Button>
);