import React from 'react';

export function Pagination({ children, className = '' }) {
    return (
        <nav className={`flex items-center space-x-1 ${className}`}>
            {children}
        </nav>
    );
}

export function PaginationContent({ children }) {
    return (
        <div className="flex items-center space-x-1">
            {children}
        </div>
    );
}

export function PaginationItem({ children }) {
    return (
        <div className="flex items-center">
            {children}
        </div>
    );
}

export function PaginationLink({ children, href, isActive = false, onClick, className = '' }) {
    const baseClasses = 'px-3 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500';
    const activeClasses = isActive 
        ? 'bg-blue-600 text-white' 
        : 'text-gray-700 hover:bg-gray-100';
    
    return (
        <button
            className={`${baseClasses} ${activeClasses} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export function PaginationPrevious({ children, href, onClick, className = '' }) {
    return (
        <button
            className={`px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            onClick={onClick}
        >
            {children || 'Previous'}
        </button>
    );
}

export function PaginationNext({ children, href, onClick, className = '' }) {
    return (
        <button
            className={`px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            onClick={onClick}
        >
            {children || 'Next'}
        </button>
    );
}