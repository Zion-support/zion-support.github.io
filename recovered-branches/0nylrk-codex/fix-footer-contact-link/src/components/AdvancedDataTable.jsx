<<<<<<< HEAD
import React from 'react';
=======
import { useState, useMemo, useCallback } from 'react';

import { ChevronUp, ChevronDown, Search, Filter, Download, Eye, Edit, Trash2, ArrowUpDown } from 'lucide-react';
import { useVirtualScroll } from '../hooks/useVirtualScroll';
import { useAnalytics } from '../hooks/useAnalytics';
export const AdvancedDataTable = ({ data, columns, height = 500, enableSearch = true, enableSorting = true, enablePagination = true, enableSelection = false, enableActions = false, enableExport = false, pageSize = 20, className = '', onRowClick, onSelectionChange, onExport }) => {
    const { trackEvent } = useAnalytics({
        enableTracking: true,
        enableUserBehaviorTracking: true
    });
    // State management
    const [searchQuery, setSearchQuery] = useState('');
    const [sortConfig, setSortConfig] = useState(null);
    const [filters, setFilters] = useState([]);
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    // Process data based on search, filters, and sorting
    const processedData = useMemo(() => {
        let result = [...data];
        // Apply search
        if (searchQuery.trim()) {
            result = result.filter(item => columns.some(col => {
                const value = String(item[col.key]).toLowerCase();
                return value.includes(searchQuery.toLowerCase());
            }));
        }
        // Apply filters
        filters.forEach(filter => {
            result = result.filter(item => {
                const value = String(item[filter.key]).toLowerCase();
                const filterValue = filter.value.toLowerCase();
                switch (filter.operator) {
                    case 'contains':
                        return value.includes(filterValue);
                    case 'equals':
                        return value === filterValue;
                    case 'starts_with':
                        return value.startsWith(filterValue);
                    case 'ends_with':
                        return value.endsWith(filterValue);
                    case 'regex':
                        try {
                            return new RegExp(filterValue, 'i').test(value);
                        }
                        catch {
                            return false;
                        }
                    default:
                        return true;
                }
            });
        });
        // Apply sorting
        if (sortConfig) {
            result.sort((a, b) => {
                const aVal = a[sortConfig.key];
                const bVal = b[sortConfig.key];
                if (aVal < bVal)
                    return sortConfig.direction === 'asc' ? -1 : 1;
                if (aVal > bVal)
                    return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return result;
    }, [data, searchQuery, filters, sortConfig, columns]);
    // Pagination
    const totalPages = Math.ceil(processedData.length / pageSize);
    const paginatedData = enablePagination
        ? processedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        : processedData;
    // Virtual scrolling
    const { virtualItems, containerProps, listProps } = useVirtualScroll(paginatedData, {
        itemHeight: 60,
        containerHeight: height - 120, // Account for header and controls
        overscan: 5
    });
    // Handle sorting
    const handleSort = useCallback((key) => {
        if (!enableSorting)
            return;
        setSortConfig(prev => {
            if (prev?.key === key) {
                return prev.direction === 'asc'
                    ? { key, direction: 'desc' }
                    : null;
            }
            return { key, direction: 'asc' };
        });
        trackEvent('table', 'column_sorted', String(key));
    }, [enableSorting, trackEvent]);
    // Handle filter change
    const handleFilterChange = useCallback((key, value, operator) => {
        setFilters(prev => {
            const newFilters = prev.filter(f => f.key !== key);
            if (value.trim()) {
                newFilters.push({ key, value, operator });
            }
            return newFilters;
        });
        trackEvent('table', 'filter_applied', String(key), undefined, { operator, value });
    }, [trackEvent]);
    // Handle selection
    const handleSelectionChange = useCallback((item, checked) => {
        const itemKey = String(item.id || JSON.stringify(item));
        const newSelection = new Set(selectedItems);
        if (checked) {
            newSelection.add(itemKey);
        }
        else {
            newSelection.delete(itemKey);
        }
        setSelectedItems(newSelection);
        onSelectionChange?.(Array.from(newSelection).map(key => data.find(item => String(item.id || JSON.stringify(item)) === key)));
    }, [selectedItems, onSelectionChange, data]);
    // Handle select all
    const handleSelectAll = useCallback((checked) => {
        if (checked) {
            const allKeys = new Set(paginatedData.map(item => String(item.id || JSON.stringify(item))));
            setSelectedItems(allKeys);
            onSelectionChange?.(paginatedData);
        }
        else {
            setSelectedItems(new Set());
            onSelectionChange?.([]);
        }
    }, [paginatedData, onSelectionChange]);
    // Export data
    const handleExport = useCallback(() => {
        if (onExport) {
            onExport(processedData);
        }
        else {
            // Default CSV export
            const csvContent = generateCSV(processedData, columns);
            downloadCSV(csvContent, 'table-export.csv');
        }
        trackEvent('table', 'data_exported', 'export_completed', processedData.length);
    }, [processedData, columns, onExport, trackEvent]);
    // Generate CSV content
    const generateCSV = (data, columns) => {
        const headers = columns.map(col => col.header).join(',');
        const rows = data.map(item => columns.map(col => {
            const value = item[col.key];
            return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
        }).join(','));
        return [headers, ...rows].join('\n');
    };
    // Download CSV
    const downloadCSV = (content, filename) => {
        const blob = new Blob([content], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    // Get sort icon
    const getSortIcon = (key) => {
        if (!enableSorting || sortConfig?.key !== key) {
            return <ArrowUpDown className="w-4 h-4 text-gray-400"/>;
        }
        return sortConfig.direction === 'asc'
            ? <ChevronUp className="w-4 h-4 text-blue-500"/>
            : <ChevronDown className="w-4 h-4 text-blue-500"/>;
    };
    // Render cell content
    const renderCell = (column, item, index) => {
        const value = item[column.key];
        if (column.render) {
            return column.render(value, item, index);
        }
        return (<span className={`truncate ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}`}>
        {value}
      </span>);
    };
    return (<div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      {/* Header Controls */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Data Table ({processedData.length} items)
          </h3>
          
          <div className="flex items-center gap-2">
            {enableExport && (<button onClick={handleExport} className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                <Download className="w-4 h-4"/>
                Export
              </button>)}
            
            <button onClick={() => setShowFilters(!showFilters)} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${showFilters
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'}`}>
              <Filter className="w-4 h-4"/>
              Filters
            </button>
          </div>
        </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const AdvancedDataTable: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AdvancedDataTable</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AdvancedDataTable;