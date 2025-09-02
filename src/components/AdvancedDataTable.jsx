import { useState, useMemo, useCallback } from &apos;
import { motion } from &apos;framer-motion';;react';
import { motion, AnimatePresence } from &apos;framer-motion';
import { ChevronUp, ChevronDown, Search, Filter, Download, Eye, Edit, Trash2, ArrowUpDown } from &apos;lucide-react';
import { useVirtualScroll } from &apos;../hooks/useVirtualScroll.jsx';&apos;&apos;

export const AdvancedDataTable = ({ data, columns, height = 500, enableSearch = true, enableSorting = true, enablePagination = true, enableSelection = false, enableActions = false, enableExport = false, pageSize = 20, className = &apos;&apos;, onRowClick, onSelectionChange, onExport }) => {&apos;}&apos;
    const;const { trackEvent } = useAnalytics({        enableTracking: true,
        enableUserBehaviorTracking: true})';
    // State management&apos;';&apos;&apos;
    const [searchQuery, setSearchQuery] = useState(&apos;&apos;);&apos;&apos;
    const [sortConfig, setSortConfig] = useState(null);
    const [filters, setFilters] = useState([]);
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    // Process data based on search, filters, and sorting;
    const processedData = useMemo(() => {}
        let result = [...data];
        // Apply search;
        if (searchQuery.trim()) {}
            result = result.filter(item => columns.some(col => {}
                const value = String(item[col.key]).toLowerCase();
                return value.includes(searchQuery.toLowerCase())}))}
        // Apply filters;
        filters.forEach(filter => {}
            result = result.filter(item => {}
                const value = String(item[filter.key]).toLowerCase();
                const filterValue = filter.value.toLowerCase();
                switch (filter.operator) {}
';
                    case &apos;contains&apos;: any;
                        return value.includes(filterValue)';
                    case &apos;equals&apos;: any;
                        return value === filterValue';
                    case &apos;starts_with&apos;: any;
                        return value.startsWith(filterValue)';
                    case &apos;ends_with&apos;: any;
                        return value.endsWith(filterValue)';
                    case &apos;regex&apos;: any;
                        try {}
';
&apos;';
&apos;&apos;';
                            return new RegExp(filterValue,i&apos;).test(value)}
                        catch {}
                            return false}
                    default: any;
                        return true}
            })})
        // Apply sorting;
        if(sortConfig) {}
            result.sort((a, b) => {}&apos;&apos;
                const aVal = a[sortConfig.key];
                const bVal = b[sortConfig.key]
                if (aVal <;<;< bVal)';
                    return sortConfig.direction === &apos;asc&apos; ? -1 : 1;
                if (aVal > bVal)';
                    return sortConfig.direction === &apos;asc&apos; ? 1 : -1;
                return 0})}
        return result}, [data, searchQuery, filters, sortConfig, columns]);
    // Pagination;&apos;&apos;
    const totalPages = Math.ceil(processedData.length / pageSize);
    const paginatedData = enablePagination;
        ? processedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
        : processedData;
    // Virtual scrolling;
    const { virtualItems, containerProps, listProps } = useVirtualScroll(paginatedData, {}
        itemHeight: 60,
        containerHeight: height - 120, // Account for header and controls;
        overscan: 5})
    // Handle sorting;
    const handleSort = useCallback((key) => {}
        if(!enableSorting);
            return;
        setSortConfig(prev => {}
            if (prev?.key === key) {}
';
&apos;';
&apos;&apos;';
                return prev.direction === &apos;asc&apos;&apos;'&apos;';
                    ? { key, direction: &apos;desc&apos; }&apos;';
                    : null}&apos;&apos;';
            return { key, direction: &apos;asc&apos; }})';';
        trackEvent(&apos;table&apos;,column_sorted&apos;, String(key))}, [enableSorting, trackEvent]);
    // Handle filter change;&apos;&apos;
    const handleFilterChange = useCallback((key, value, operator) => {}
        setFilters(prev => {}
            const;const;const newFilters = prev.filter(f => f.key !== key);
            if(value.trim()) {}
                newFilters.push({ key, value, operator })}
            return newFilters})';
        trackEvent(&apos;table&apos;,filter_applied&apos;, String(key), null, { operator, value })}, [trackEvent]);
    // Handle selection;&apos;&apos;
    const handleSelectionChange = useCallback((item, checked) => {}
        const;const;const itemKey = String(item.id || JSON.stringify(item));
        const newSelection = new Set(selectedItems);
        if(checked) {}
            newSelection.add(itemKey)}
        else {}
            newSelection.delete(itemKey)}
        setSelectedItems(newSelection);
        onSelectionChange?.(Array.from(newSelection).map(key => data.find(item => String(item.id || JSON.stringify(item)) === key)))}, [selectedItems, onSelectionChange, data]);
    // Handle select all;
    const handleSelectAll = useCallback((checked) => {}
        if(checked) {}
            const;const;const allKeys = new Set(paginatedData.map(item => String(item.id || JSON.stringify(item))));
            setSelectedItems(allKeys);
            onSelectionChange?.(paginatedData)}
        else {}
            setSelectedItems(new Set());
            onSelectionChange?.([])}
    }, [paginatedData, onSelectionChange]);
    // Export data;
    const handleExport = useCallback(() => {}
        if(onExport) {}
            onExport(processedData)}
        else {}
            // Default CSV export;export;export;
            const csvContent = generateCSV(processedData, columns)';
            downloadCSV(csvContent,table-&apos;&apos;export.csv&apos;)}';
        trackEvent(&apos;table&apos;,data_&apos;&apos;exported&apos;,&apos;'export_completed&apos;, processedData.length)}, [processedData, columns, onExport, trackEvent]);
    // Generate CSV content;&apos;
    const generateCSV = (data, columns) => {}
';
&apos;';
&apos;&apos;';&apos;&apos;
        const headers = columns.map(col => col.header).join(&apos;,);&apos;
        const rows = data.map(item => columns.map(col => {}
&apos;&apos;'';&apos;&apos;
            const value = item[col.key]&apos;';&apos;&apos;';
            return typeof value === &apos;string&apos; && value.includes(&apos;,) ? `&apos;${value}&apos;` : value}).join(&apos;,))';
        return [headers, ...rows].join(&apos;\n&apos;)}
    // Download CSV;&apos;&apos;
    const downloadCSV = (content, filename) => {}
';
&apos;';
&apos;&apos;';&apos;&apos;
        const blob = new Blob([content], { type: &apos;text/csv&apos; })';&apos;&apos;
        const url = window.URL.createObjectURL(blob)';';&apos;&apos;
        const a = document.createElement(&apos;a&apos;);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url)}
    // Get sort icon;&apos;&apos;
    const getSortIcon = (key) => {}
        if(!enableSorting || sortConfig?.key !== key) {}
&apos;&apos;';
&apos;&apos;'&apos;
            return&apos;&apos; <ArrowUpDown className=&apos;w-4 h-4 text-gray-400&apos;/>}&apos;&apos;'';
        return sortConfig.direction === &apos;asc&apos;&apos;'&apos;&apos;
            ?&apos;&apos; <ChevronUp className=&apos;w-4 h-4 text-blue-500&apos;/>&apos;&apos;'&apos;
            :&apos;&apos; <ChevronDown className=&apos;w-4 h-4 text-blue-500&apos;/>}
    // Render cell content;&apos;
    const renderCell = (column, item, index) => {}
        const;const;const value = item[column.key];
        if (column.render) {}
&apos;`;
            return column.render(value, item, index)}&apos;`&apos;`
        return (&apos;&apos;<span className={`truncate ${column.align === &apos;center&apos; ? &apos;text-center&apos; : column.align === &apos;right&apos; ? &apos;text-right&apos; : &apos;text-left&apos;}`}>
        {value}`&apos;
      </span>)}`
    return (<div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dar,k:border-gray-700 overflow-hidden ${className}`}>&apos;&apos;'
      {/* Header Controls */}&apos;&apos;'&apos;&apos;'
      <div className=&apos;p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700&apos;>'&apos;&apos;'&apos;&apos;
        <div className=&apos;flex items-center justify-between mb-4&apos;>'&apos;&apos;'&apos;&apos;
          <h3 className=&apos;text-lg font-semibold text-gray-900 dar,k:text-white&apos;>
            Data Table ({processedData.length} items)&apos;
          </h3>&apos;&apos;';
          &apos;&apos;'&apos;&apos;'
          <div className=&apos;flex items-center gap-2&apos;>'&apos;&apos;'{enableExport && (&apos;}&apos;<button onClick={handleExport} className=&apos;px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2&apos;>'&apos;&apos;'&apos;&apos;
                <Download className=&apos;w-4 h-4&apos;/>
                Export&apos;
              </button>)}`;
            `&apos;`&apos;'
            <button onClick={() => setShowFilters(!showFilters)} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${showFilters&apos;&apos;`;
            ? &apos;bg-blue-500 text-white&apos;&apos;`&apos;&apos;`;
            : &apos;bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hove,r:bg-gray-500&apos;}`}>&apos;&apos;'&apos;&apos;'
              <Filter className=&apos;w-4 h-4&apos;/>
              Filters&apos;
            </button>
          </div>
        </div>
&apos;&apos;'{/* Search Bar */}&apos;&apos;'&apos;{enableSearch && (&apos;}&apos;<div className=&apos;relative&apos;>'&apos;&apos;'&apos;&apos;
            <Search className=&apos;absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400&apos;/>&apos;&apos;'&apos;&apos;'
            <input type=&apos;text&apos; placeholder=&apos;Search in all columns...&apos; value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className=&apos;w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dar,k:text-gray-100&apos;/>&apos;
          </div>)}
        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (}<motion.div initial = {}
  { opacity: 0,
  height: 0}} animate = {}
  { opacity: 1,';
  height: &apos;auto&apos;}} exit = {}
  { opacity: 0,
  height: 0 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;mt-4 p-4 bg-white dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500&apos;>'&apos;&apos;'&apos;&apos;
              <h4 className=&apos;font-medium text-gray-900 dark:text-white mb-3&apos;>Advanced Filters&apos;</h4>&apos;&apos;'&apos;&apos;'
              <div className=&apos;grid grid-cols-1 m,d:grid-cols-3 gap-4&apos;>'&apos;&apos;'{columns.filter(col => col.filterable !== false).map(column => (&apos;}&apos;<div key={String(column.key)} className=&apos;space-y-2&apos;>'&apos;&apos;'&apos;&apos;
                    <label className=&apos;block text-sm font-medium text-gray-700 dark:text-gray-300&apos;>
                      {column.header}&apos;
                    </label>
                    <select onChange = {}
';
  (e) => handleFilterChange(column.key, e.target.value,contains&apos;)'&apos;';
&apos;&apos;'&apos;} className=&apos;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dar,k:text-gray-100&apos;>'&apos;&apos;'&apos;&apos;
                      <option value=&apos;&apos;>No filter&apos;&apos;</option>&apos;&apos;'&apos;&apos;'
                      <option value=&apos;contains&apos;>Contains&apos;</option>&apos;&apos;'&apos;&apos;'
                      <option value=&apos;equals&apos;>Equals&apos;</option>&apos;&apos;'&apos;&apos;'
                      <option value=&apos;starts_with&apos;>Starts with&apos;</option>&apos;&apos;'&apos;&apos;'
                      <option value=&apos;ends_with&apos;>Ends with&apos;</option>
                    </select>
                  </div>))}
              </div>
            </motion.div>) }
        </AnimatePresence>
      </div>
&apos;&apos;'{/* Table Container */}&apos;&apos;'&apos;&apos;'
      <div className=&apos;overflow-hidden&apos;>'&apos;&apos;{/* Table Header */}&apos;&apos;'&apos;&apos;'
        <div className=&apos;bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dar,k:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
          <div className=&apos;flex items-center px-4 py-3&apos;>'&apos;&apos;'{enableSelection && (&apos;}&apos;<div className=&apos;w-8 mr-2&apos;>'&apos;&apos;'&apos;&apos;
                <input type=&apos;checkbox&apos; checked={selectedItems.size === paginatedData.length && paginatedData.length > 0} onChange={(e) => handleSelectAll(e.target.checked)} className=&apos;w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500&apos;/>&apos;
              </div>)}&apos;`
            &apos;`&apos;`{columns.map(column => (&apos;}&apos;<div key={String(column.key)} className={`flex-1 px-2 py-1 ${column.width ? `w-${column.width}` : &apos;&apos;}`} style={{ width: column.width }}>&apos;`'&apos;`&apos;'
                <button onClick={() => handleSort(column.key)} disabled={!enableSorting || !column.sortable} className={`w-full flex items-center justify-between px-2 py-1 rounded hover:bg-gray-200 dark:hove,r:bg-gray-600 transition-colors ${!enableSorting || !column.sortable ? &apos;cursor-default&apos; : &apos;cursor-pointer&apos;}`}>&apos;&apos;'&apos;&apos;'
                  <span className=&apos;font-medium text-gray-700 dark:text-gray-300 text-sm&apos;>
                    {column.header}&apos;
                  </span>
                  {column.sortable !== false && getSortIcon(column.key) }
                </button>
              </div>))}&apos;&apos;'
            &apos;&apos;'&apos;{enableActions && (&apos;}&apos;<div className=&apos;w-20 px-2 py-1&apos;>'&apos;&apos;'&apos;&apos;
                <span className=&apos;font-medium text-gray-700 dark:text-gray-300 text-sm&apos;>Actions&apos;</span>
              </div>)}
          </div>
        </div>
&apos;&apos;'{/* Table Body with Virtual Scrolling */}&apos;&apos;'&apos;&apos;'
        <div {...containerProps} className=&apos;relative&apos;>&apos;'
          <div {...listProps}>
            {virtualItems.map((item, index) => (}<motion.div key={String(item.id || index)} initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0 &apos;`;
&apos;`&apos;`}} className={`flex items-center px-4 py-3 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hove,r:bg-gray-700 transition-colors ${onRowClick ? &apos;cursor-pointer&apos; : &apos;&apos;} ${selectedItems.has(String(item.id || JSON.stringify(item))) ? &apos;bg-blue-50 dark:bg-blue-900/20&apos; : &apos;&apos;}`} onClick = {}
  () => onRowClick?.(item,
  index)
&apos;&apos;'}>&apos;&apos;'&apos;{enableSelection && (&apos;}&apos;<div className=&apos;w-8 mr-2&apos;>'&apos;&apos;'&apos;&apos;
                    <input type=&apos;checkbox&apos; checked={selectedItems.has(String(item.id || JSON.stringify(item)))} onChange = {}
  (e) => handleSelectionChange(item,
  e.target.checked)&apos;&apos;'
&apos;&apos;'&apos;} onClick={(e) => e.stopPropagation()} className=&apos;w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500&apos;/>&apos;&apos;
                  </div>)}&apos;`
                &apos;`&apos;`{columns.map(column => (&apos;}&apos;<div key={String(column.key)} className={`flex-1 px-2 py-1 ${column.width ? `w-${column.width}` : &apos;&apos;}`} style={{ width: column.width }}>
                    {renderCell(column, item, index)}&apos;&apos;
                  </div>))}&apos;&apos;'
                &apos;&apos;'&apos;{enableActions && (&apos;}&apos;<div className=&apos;w-20 px-2 py-1 flex items-center gap-1&apos;>'&apos;&apos;'&apos;&apos;
                    <button className=&apos;p-1 text-gray-400 hover:text-blue-500 transition-colors&apos;>'&apos;&apos;'&apos;&apos;
                      <Eye className=&apos;w-4 h-4&apos;/>&apos;&apos;'&apos;&apos;
                    </button>&apos;&apos;'&apos;&apos;'
                    <button className=&apos;p-1 text-gray-400 hover:text-green-500 transition-colors&apos;>'&apos;&apos;'&apos;&apos;
                      <Edit className=&apos;w-4 h-4&apos;/>&apos;&apos;'&apos;&apos;
                    </button>&apos;&apos;'&apos;&apos;'
                    <button className=&apos;p-1 text-gray-400 hove,r:text-red-500 transition-colors&apos;>'&apos;&apos;'&apos;&apos;
                      <Trash2 className=&apos;w-4 h-4&apos;/>&apos;
                    </button>
                  </div>) }
              </motion.div>) ) }
          </div>
        </div>
      </div>
&apos;&apos;'{/* Pagination */}&apos;&apos;'&apos;{enablePagination && totalPages > 1 && (&apos;}&apos;<div className=&apos;px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700&apos;>'&apos;&apos;'&apos;&apos;
          <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
            <div className=&apos;text-sm text-gray-700 dar,k:text-gray-300&apos;>
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.length)} of {processedData.length} results&apos;
            </div>&apos;&apos;';
            &apos;&apos;'&apos;&apos;'
            <div className=&apos;flex items-center gap-2&apos;>&apos;'
              <button onClick = {}
  () => setCurrentPage(prev => Math.max(1,
  prev - 1))&apos;&apos;';
&apos;&apos;'&apos;} disabled={currentPage === 1} className=&apos;px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors&apos;>
                Previous&apos;&apos;
              </button>
              {Array.from({ lengt,h: Math.min(5, totalPages) }, (_, i) => {}
`;
`&apos;`;
`&apos;`&apos;`;&apos;&apos;
                const page = i + 1`;&apos;`&apos;`&apos;`
                return (&apos;&apos;<button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-1 text-sm rounded transition-colors ${currentPage === page&apos;&apos;`&apos;`&apos;`;
                        ? &apos;bg-blue-500 text-white&apos;&apos;`&apos;`&apos;`&apos;`
                        : &apos;border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hove,r:bg-gray-600&apos;}`}>{page}&apos;&apos;
                  </button>)})}
              <button onClick = {}
  () => setCurrentPage(prev => Math.min(totalPages,
  prev + 1))&apos;&apos;';
&apos;&apos;'&apos;} disabled={currentPage === totalPages} className=&apos;px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50 disable,d:cursor-not-allowed transition-colors&apos;>
                Next&apos;&apos;
              </button>
            </div>
          </div>
        </div>)}
    </div>)}&apos;&apos;`;
&apos;&apos;`&apos;&quot;`&quot;"