import React, { useState, useCallback, useMemo } from 'react';
import { 
  ChevronUp, 
  ChevronDown, 
  ArrowUpDown, 
  Search, 
  Filter, 
  Download,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';

export function AdvancedDataTable({
  data = [],
  columns = [],
  className = '',
  enableSorting = true,
  enableSearch = true,
  enableFiltering = true,
  enableExport = true,
  enablePagination = true,
  pageSize = 10,
  onSelectionChange,
  onExport,
  onRowClick,
  trackEvent = () => {}
}) {
  const [sortConfig, setSortConfig] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Process data based on search and filters
  const processedData = useMemo(() => {
    let result = [...data];

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item =>
        columns.some(col => {
          const value = item[col.key];
          return value && String(value).toLowerCase().includes(query);
        })
      );
    }

    // Apply filters
    if (filters.length > 0) {
      result = result.filter(item =>
        filters.every(filter => {
          const value = item[filter.key];
          const filterValue = filter.value.toLowerCase();
          
          switch (filter.operator) {
            case 'contains':
              return String(value).toLowerCase().includes(filterValue);
            case 'equals':
              return String(value).toLowerCase() === filterValue;
            case 'starts_with':
              return String(value).toLowerCase().startsWith(filterValue);
            case 'ends_with':
              return String(value).toLowerCase().endsWith(filterValue);
            default:
              return String(value).toLowerCase().includes(filterValue);
          }
        })
      );
    }

    // Apply sorting
    if (sortConfig) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [data, searchQuery, filters, sortConfig, columns]);

  // Paginate data
  const paginatedData = useMemo(() => {
    if (!enablePagination) return processedData;
    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return processedData.slice(startIndex, endIndex);
  }, [processedData, currentPage, pageSize, enablePagination]);

  const totalPages = Math.ceil(processedData.length / pageSize);

  // Handle sorting
  const handleSort = useCallback((key) => {
    if (!enableSorting) return;

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
    trackEvent('table', 'filter_applied', String(key), null, { operator, value });
  }, [trackEvent]);

  // Handle selection
  const handleSelectionChange = useCallback((item, checked) => {
    const itemKey = String(item.id || JSON.stringify(item));
    const newSelection = new Set(selectedItems);
    
    if (checked) {
      newSelection.add(itemKey);
    } else {
      newSelection.delete(itemKey);
    }
    
    setSelectedItems(newSelection);
    onSelectionChange?.(Array.from(newSelection).map(key => 
      data.find(item => String(item.id || JSON.stringify(item)) === key)
    ));
  }, [selectedItems, onSelectionChange, data]);

  // Handle select all
  const handleSelectAll = useCallback((checked) => {
    if (checked) {
      const allKeys = new Set(paginatedData.map(item => String(item.id || JSON.stringify(item))));
      setSelectedItems(allKeys);
      onSelectionChange?.(paginatedData);
    } else {
      setSelectedItems(new Set());
      onSelectionChange?.([]);
    }
  }, [paginatedData, onSelectionChange]);

  // Export data
  const handleExport = useCallback(() => {
    if (onExport) {
      onExport(processedData);
    } else {
      // Default CSV export
      const csvContent = generateCSV(processedData, columns);
      downloadCSV(csvContent, 'table-export.csv');
    }
    trackEvent('table', 'data_exported', 'export_completed', processedData.length);
  }, [processedData, columns, onExport, trackEvent]);

  // Generate CSV content
  const generateCSV = (data, columns) => {
    const headers = columns.map(col => col.header).join(',');
    const rows = data.map(item => 
      columns.map(col => {
        const value = item[col.key];
        return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
      }).join(',')
    );
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
      return <ArrowUpDown className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc'
      ? <ChevronUp className="w-4 h-4 text-blue-500" />
      : <ChevronDown className="w-4 h-4 text-blue-500" />;
  };

  // Render cell content
  const renderCell = (column, item, index) => {
    const value = item[column.key];
    if (column.render) {
      return column.render(value, item, index);
    }
    return (
      <span className={`truncate ${
        column.align === 'center' ? 'text-center' : 
        column.align === 'right' ? 'text-right' : 'text-left'
      }`}>
        {value}
      </span>
    );
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      {/* Header Controls */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Data Table ({processedData.length} items)
          </h3>

          <div className="flex items-center gap-2">
            {enableExport && (
              <button
                onClick={handleExport}
                className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
            )}

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                showFilters
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {enableSearch && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search in all columns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
        )}

        {/* Filters */}
        {showFilters && enableFiltering && (
          <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Filters</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {columns.map(column => (
                <div key={column.key}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {column.header}
                  </label>
                  <input
                    type="text"
                    placeholder={`Filter ${column.header}...`}
                    onChange={(e) => handleFilterChange(column.key, e.target.value, 'contains')}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {onSelectionChange && (
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedItems.size === paginatedData.length && paginatedData.length > 0}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
              )}
              {columns.map(column => (
                <th
                  key={column.key}
                  className={`px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider ${
                    enableSorting ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600' : ''
                  }`}
                  onClick={() => enableSorting && handleSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {enableSorting && getSortIcon(column.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {paginatedData.map((item, index) => (
              <tr
                key={item.id || index}
                className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  onRowClick ? 'cursor-pointer' : ''
                }`}
                onClick={() => onRowClick?.(item)}
              >
                {onSelectionChange && (
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(String(item.id || JSON.stringify(item)))}
                      onChange={(e) => handleSelectionChange(item, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                )}
                {columns.map(column => (
                  <td key={column.key} className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                    {renderCell(column, item, index)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {enablePagination && totalPages > 1 && (
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.length)} of {processedData.length} results
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
