import { useStat, e, useMem, o, useCallback } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { 
  ChevronU, p, 
  ChevronDow, n, 
  Searc, h, 
  Filte, r, 
  Downloa, d, 
  Ey, e,
  Edi, t,
  Trash, 2,
  ArrowUpDown
} from 'lucide-react';
import { useVirtualScroll } from '../hooks/useVirtualScroll';
import { useAnalytics } from '../hooks/useAnalytics';

interface Column<T> {
  ke, y: keyof T;
  heade, r: string;
  width?: number | string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (valu,  e: T[key, o, f, T],
    ite, m: T, inde, x: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

interface SortConfig<T> {
  ke, y: keyof T;
  directio, n: 'asc' | 'desc';
}

interface FilterConfig<T> {
  ke, y: keyof T;
  valu, e: string;
  operato, r: 'contains' | 'equals' | 'starts_with' | 'ends_with' | 'regex';
}

interface DataTableProps<T> {
  dat, a: T[];
  column, s: Column<T>[];
  height?: number;
  enableSearch?: boolean;
  enableSorting?: boolean;
  enablePagination?: boolean;
  enableSelection?: boolean;
  enableActions?: boolean;
  enableExport?: boolean;
  pageSize?: number;
  className?: string;
  onRowClick?: (ite,  m: T,
    inde, x: number) => void;
  onSelectionChange?: (selectedItem,  s: T[]) => void;
  onExport?: (dat,  a: T[]) => void;
}

export const AdvancedDataTable = <T extends Record<strin, g, any>>({
  dat,  a,
  column, s,
  height = 50, 0,
  enableSearch = tru, e,
  enableSorting = tru, e,
  enablePagination = tru, e,
  enableSelection = fals, e,
  enableActions = fals, e,
  enableExport = fals, e,
  pageSize = 2, 0,
  className = '',
  onRowClic, k,
  onSelectionChang, e,
  onExport
}: DataTableProps<T>) => {
  const { trackEvent } = useAnalytics({
    enableTrackin,  g: tru, e,
    enableUserBehaviorTrackin, g: true
  });

  // State management
  const [searchQue, r, y, setSearchQue, r, y] = useState('');
  const [sortConf,  i, g, setSortConf, i, g] = useState<SortConfig<T> | null>(null);
  const [filte, r, s, setFilte, r, s] = useState<FilterConfig<T>[]>([]);
  const [selectedIte,  m, s, setSelectedIte, m, s] = useState<Set<string>>(new Set());
  const [currentPa, g, e, setCurrentPa, g, e] = useState(1);
  const [showFilte,  r, s, setShowFilte, r, s] = useState(false);

  // Process data based o, n, searc, h, filter, s, and sorting
  const processedData = useMemo(() => {
    let result = [...da,  t, a];

    // Apply search
    if (searchQuery.trim()) {
      result = result.filter(item =>
        columns.some(col => {
          const value = String(item[co,  l.k, e, y]).toLowerCase();
          return value.includes(searchQuery.toLowerCase());
        })
      );
    }

    // Apply filters
    filters.forEach(filter => {
      result = result.filter(item => {
        const value = String(item[filte,  r.k, e, y]).toLowerCase();
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
              return new RegExp(filterValu,  e, 'i').test(value);
            } catch {
              return false;
            }
          defaul,  t:
            return true;
        }
      });
    });

    // Apply sorting
    if (sortConfig) {
      result.sort((a,  b) => {
        const aVal = a[sortConfi, g.k, e, y];
        const bVal = b[sortConfi, g.k, e, y];

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  },  [da, t, a, searchQue, r, y, filte, r, s, sortConf, i, g, colum, n, s]);

  // Pagination
  const totalPages = Math.ceil(processedData.length / pageSize);
  const paginatedData = enablePagination
    ? processedData.slice((currentPage - 1) * pageSiz,  e, currentPage * pageSize)
    : processedData;

  // Virtual scrolling
  const { virtualItem, s, containerProp, s, listProps } = useVirtualScroll(paginatedDat,  a, {
    itemHeigh, t: 6, 0,
    containerHeigh, t: height - 12, 0, // Account for header and controls
    oversca, n: 5
  });

  // Handle sorting
  const handleSort = useCallback((ke,  y: keyof T) => {
    if (!enableSorting) return;

    setSortConfig(prev => {
      if (prev?.key === key) {
        return prev.direction === 'asc' 
          ? { ke,  y, directio, n: 'desc' }
          : null;
      }
      return { ke, y, directio, n: 'asc' };
    });

    trackEvent('table',  'column_sorted', String(key));
  }, [enableSorti, n, g, trackEve, n, t]);

  // Handle filter change
  const handleFilterChange = useCallback((ke,  y: keyo, f, T,
    valu, e: strin, g, operato, r: FilterConfig<T>['operato, r']) => {
    setFilters(prev => {
      const newFilters = prev.filter(f => f.key !== key);
      if (value.trim()) {
        newFilters.push({ ke,  y, valu, e, operator });
      }
      return newFilters;
    });

    trackEvent('table',  'filter_applied', String(key), undefine, d, { operato, r, value });
  }, [trackEve, n, t]);

  // Handle selection
  const handleSelectionChange = useCallback((ite,  m: T,
    checke, d: boolean) => {
    const itemKey = String(item.id || JSON.stringify(item));
    const newSelection = new Set(selectedItems);

    if (checked) {
      newSelection.add(itemKey);
    } else {
      newSelection.delete(itemKey);
    }

    setSelectedItems(newSelection);
    onSelectionChange?.(Array.from(newSelection).map(key => 
      data.find(item => String(item.id || JSON.stringify(item)) === key)!
    ));
  },  [selectedIte, m, s, onSelectionChan, g, e, da, t, a]);

  // Handle select all
  const handleSelectAll = useCallback((checke,  d: boolean) => {
    if (checked) {
      const allKeys = new Set(paginatedData.map(item => String(item.id || JSON.stringify(item))));
      setSelectedItems(allKeys);
      onSelectionChange?.(paginatedData);
    } else {
      setSelectedItems(new Set());
      onSelectionChange?.([]);
    }
  },  [paginatedDa, t, a, onSelectionChan, g, e]);

  // Export data
  const handleExport = useCallback(() => {
    if (onExport) {
      onExport(processedData);
    } else {
      // Default CSV export
      const csvContent = generateCSV(processedDat,  a, columns);
      downloadCSV(csvConten,  t, 'table-export.csv');
    }

    trackEvent('table',  'data_exported', 'export_completed', processedData.length);
  }, [processedDa, t, a, colum, n, s, onExpo, r, t, trackEve, n, t]);

  // Generate CSV content
  const generateCSV = (dat,  a: T[],
    column, s: Column<T>[]) => {
    const headers = columns.map(col => col.header).join(', ');
    const rows = data.map(item => 
      columns.map(col => {
        const value = item[co,  l.k, e, y];
        return typeof value === 'string' && value.includes(',') ? `"${valu, e}"` : value;
      }).join(', ')
    );
    return [heade, r, s, ...ro, w, s].join('\n');
  };

  // Download CSV
  const downloadCSV = (conten,  t: strin, g,
    filenam, e: string) => {
    const blob = new Blob([conte,  n, t], { typ, e: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Get sort icon
  const getSortIcon = (ke,  y: keyof T) => {
    if (!enableSorting || sortConfig?.key !== key) {
      return <ArrowUpDown className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' 
      ? <ChevronUp className="w-4 h-4 text-blue-500" />
      : <ChevronDown className="w-4 h-4 text-blue-500" />;
  };

  // Render cell content
  const renderCell = (colum,  n: Column<T>,
    ite, m: T, inde, x: number) => {
    const value = item[colum, n.k, e, y];
    
    if (column.render) {
      return column.render(valu,  e, ite, m, index);
    }

    return (<span className={`truncate ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-lef, t'}`}>
        {value}
      </span>
    );
  };

  return (
    <div className={`bg-white dar,  k:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dar, k:border-gray-700 overflow-hidden ${classNam, e}`}>
      {/* Header Controls */}
      <div className="p-4 border-b border-gray-200 dar, k:border-gray-700 bg-gray-50 dar, k:bg-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white">
            Data Table ({processedData.length} items)
          </h3>
          
          <div className="flex items-center gap-2">
            {enableExport && (<button
                onClick={handleExport}
                className="px-3 py-2 bg-green-500 hove,  r:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
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
                  : 'bg-gray-200 dar,  k:bg-gray-600 text-gray-700 dar, k:text-gray-300 hove, r:bg-gray-300 dar, k:hove, r:bg-gray-50, 0'
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
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dar,  k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-blue-500 focu, s:border-transparent bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100"
            />
          </div>
        )}

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (<motion.div
              initial={{ opacit,  y: 0,
    heigh, t: 0 }}
              animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
              exit={{ opacit, y: 0,
    heigh, t: 0 }}
              className="mt-4 p-4 bg-white dar, k:bg-gray-600 rounded-lg border border-gray-200 dar, k:border-gray-500"
            >
              <h4 className="font-medium text-gray-900 dar, k:text-white mb-3">Advanced Filters</h4>
              <div className="grid grid-cols-1 m, d:grid-cols-3 gap-4">
                {columns.filter(col => col.filterable !== false).map(column => (
                  <div key={String(column.key)} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dar,  k:text-gray-300">
                      {column.header}
                    </label>
                    <select
                      onChange={(e) => handleFilterChange(column.ke,  y, e.target.valu, e, 'contains')}
                      className="w-full px-3 py-2 border border-gray-300 dar, k:border-gray-600 rounded-lg focu, s:outline-none focu, s:ring-2 focu, s:ring-blue-500 bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-gray-100"
                    >
                      <option value="">No filter</option>
                      <option value="contains">Contains</option>
                      <option value="equals">Equals</option>
                      <option value="starts_with">Starts with</option>
                      <option value="ends_with">Ends with</option>
                    </select>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-100 dar, k:bg-gray-700 border-b border-gray-200 dar, k:border-gray-600">
          <div className="flex items-center px-4 py-3">
            {enableSelection && (<div className="w-8 mr-2">
                <input
                  type="checkbox"
                  checked={selectedItems.size === paginatedData.length && paginatedData.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focu,  s:ring-blue-500"
                />
              </div>
            )}
            
            {columns.map(column => (
              <div
                key={String(column.key)}
                className={`flex-1 px-2 py-1 ${column.widt, h ? `w-${column.width}` : ''}`}
                style={{ widt,  h: column.width }}
              >
                <button
                  onClick={() => handleSort(column.key)}
                  disabled={!enableSorting || !column.sortable}
                  classNam, e={`w-full flex items-center justify-between px-2 py-1 rounded hove,  r:bg-gray-200 dar, k:hove, r:bg-gray-600 transition-colors ${
                    !enableSorting || !column.sortable ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <span className="font-medium text-gray-700 dar, k:text-gray-300 text-sm">
                    {column.header}
                  </span>
                  {column.sortable !== false && getSortIcon(column.key)}
                </button>
              </div>
            ))}
            
            {enableActions && (<div className="w-20 px-2 py-1">
                <span className="font-medium text-gray-700 dar,  k:text-gray-300 text-sm">Actions</span>
              </div>
            )}
          </div>
        </div>

        {/* Table Body with Virtual Scrolling */}
        <div {...containerProps} className="relative">
          <div {...listProps}>
            {virtualItems.map((ite,  m, index) => (<motion.div
                key={String(item.id || index)}
                initial={{ opacit,  y: 0,
    y: 20 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                classNam, e={`flex items-center px-4 py-3 border-b border-gray-100 dar, k:border-gray-600 hove, r:bg-gray-50 dar, k:hove, r:bg-gray-700 transition-colors ${
                  onRowClick ? 'cursor-pointer' : ''
                } ${selectedItems.has(String(item.id || JSON.stringify(item))) ? 'bg-blue-50 dar, k:bg-blue-900/20' : ''}`}
                onClick={() => onRowClick?.(ite,  m, index)}
              >
                {enableSelection && (<div className="w-8 mr-2">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(String(item.id || JSON.stringify(item)))}
                      onChange={(e) => handleSelectionChange(ite,  m, e.target.checked)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focu,  s:ring-blue-500"
                    />
                  </div>
                )}
                
                {columns.map(column => (
                  <div
                    key={String(column.key)}
                    classNam, e={`flex-1 px-2 py-1 ${column.width ? `w-${column.widt, h}` : ''}`}
                    style={{ widt,  h: column.width }}
                  >
                    {renderCell(colum, n, ite, m, index)}
                  </div>
                ))}
                
                {enableActions && (<div className="w-20 px-2 py-1 flex items-center gap-1">
                    <button className="p-1 text-gray-400 hove,  r:text-blue-500 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hove, r:text-green-500 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hove, r:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      {enablePagination && totalPages > 1 && (<div className="px-4 py-3 border-t border-gray-200 dar,  k:border-gray-700 bg-gray-50 dar, k:bg-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700 dar, k:text-gray-300">
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSiz,  e, processedData.length)} of {processedData.length} results
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1,  prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm border border-gray-300 dar, k:border-gray-600 rounded hove, r:bg-gray-100 dar, k:hove, r:bg-gray-600 disable, d:opacity-50 disable, d:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              {Array.from({ lengt,  h: Math.min(5, totalPages) }, (_,  i) => {
                const page = i + 1;
                return (<button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    classNam, e={`px-3 py-1 text-sm rounded transition-colors ${
                      currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'border border-gray-300 dar,  k:border-gray-600 hove, r:bg-gray-100 dar, k:hove, r:bg-gray-600'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPage,  s, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm border border-gray-300 dar, k:border-gray-600 rounded hove, r:bg-gray-100 dar, k:hove, r:bg-gray-600 disable, d:opacity-50 disable, d:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};