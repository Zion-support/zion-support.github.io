import React from 'react';

export function Select({ children, className = '', value, onValueChange, disabled }) {
    return (
        <select 
            className={`w-full px-3 py-2 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent ${className}`} 
            value={value} 
            onChange={onValueChange} 
            disabled={disabled}
        >
            {children}
        </select>
    );
}

export function SelectTrigger({ children, className = '', onClick, ...props }) {
    return (
        <button
            type="button"
            className={`
                w-full px-3 py-2 bg-zion-blue-dark/50 border border-zion-blue-light/30 
                rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan 
                focus:border-transparent flex items-center justify-between ${className}
            `}
            onClick={onClick}
            {...props}
        >
            {children}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    );
}

export function SelectItem({ children, className = '', value, ...props }) {
    return (
        <div 
            className={`
                relative flex w-full cursor-pointer select-none items-center 
                rounded-sm px-3 py-2 text-sm text-white outline-none 
                hover:bg-zion-blue/20 focus:bg-zion-blue/20 
                focus:text-white transition-colors
                ${className}
            `} 
            data-value={value} 
            {...props}
        >
            {children}
        </div>
    );
}

export function SelectValue({ placeholder }) {
    return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}

export function SelectContent({ children, className = '' }) {
    return (
        <div className={`
            absolute top-full left-0 right-0 z-50 mt-1 rounded-md border 
            border-zion-blue-light/30 bg-zion-blue-dark/90 backdrop-blur-sm 
            shadow-lg ${className}
        `}>
            {children}
        </div>
    );
}
