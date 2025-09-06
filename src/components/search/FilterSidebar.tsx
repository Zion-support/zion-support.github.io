<<<<<<< HEAD

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
import React from 'react';
<<<<<<< HEAD
interface FilterSidebarProps {;
  className?: string;
  children?: React && React.ReactNode;
=======
<<<<<<< HEAD
interface FilterSidebarProps {;
  className?: string;
  children?: React && React.ReactNode;
=======
interface FilterSidebarProps {
  className?: string;
  children?: React.ReactNode
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}

<<<<<<< HEAD
export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  className
  children
},) => {  return (
    <div className={`filter-sidebar ${className |''}`}>
=======
import React from 'react';
interface FilterSidebarProps {
  class_name?: string;
  children?: React.ReactNode;
}
export const FilterSidebar: React.FC < FilterSidebarProps> = ({
  class_name,
  children;
}, ) => {  return (
    <div className={`filter - sidebar ${class_name || ''}`}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {children}
    </div>);
}
export default FilterSidebar;
interface FilterOption {
  value: string;
  label: string;
  count?: number;
}
interface FilterGroup {
  title: string;
  key: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio' | 'range'}
interface FilterSidebarProps extends React.PropsWithChildren<{}> {
<<<<<<< HEAD
  filters: FilterGroup[]
  selectedFilters: Record<string, any>
  onFilterChange: key: string, value: string, checked: boolean void
  onClearFilters: : unknown void
  isOpen: boolean
  onClose: ()  => void}
export function FilterSidebar({
  filters
  selectedFilters
  onFilterChange
  onClearFilters
  isOpen
  onClose
}: FilterSidebarProps) {
  return ()
    <>
      {/* Mobile overlay */}
      {isOpen && (
=======
export const FilterSidebar: React.FC<FilterSidebarProps> = ({ ;
  className,;
  children ;
},) => {  return (
    <div className={`filter-sidebar ${className || ''}`}>;
      {children}
    </div>;
  );
};

export default FilterSidebar;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

interface FilterOption {;
  value: string;
  label: string;
  count?: number;
}

interface FilterGroup {;
  title: string;
  key: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio' | 'range'}

interface FilterSidebarProps extends React && React.PropsWithChildren<{}> {;

  filters: FilterGroup[];
  selectedFilters: Record<string, any>;
  onFilterChange: key: string, value: string, checked: boolean void;
  onClearFilters: : unknown void;
  isOpen: boolean;
  onClose: ()  => void}

export function FilterSidebar(): any ({;

  filters,;
  selectedFilters,;
  onFilterChange,;
  onClearFilters,;
  isOpen,;
  onClose;
}: FilterSidebarProps) {;

  return ();
    <>;
      {/* Mobile overlay */}
      {isOpen && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <div
          className="fixed inset-0 bg-black/50 z-40 lg: hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
<<<<<<< HEAD
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-zion-blue-dark/95 backdrop-blur-xl border-r border-zion-blue-light/20 transform transition-transform duration-300 lg:transform-none'
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`
      `}>"
        <div className="flex items-center justify-between p-4 border-b border-zion-blue-light/20">"
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">"
            <Filter className="w-5 h-5"  />
            Filters                      <span className="text-sm text-zion-slate-light">
                        {option.label}
                        {option.count && ("
                          <span className="ml-2 text-zion-slate-light/60">
                            ({option.count})
                          </span>
                        )}
                      </span>
                    </label>
=======
      <divclassName={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-zion-blue-dark/95 backdrop-blur-xl border-r border-zion-blue-light/20 transform transition-transform duration-300 lg:transform-none'
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`
      `}>";
        <div className="flex items-center justify-between p-4 border-b border-zion-blue-light/20">";
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">";
            <Filter className="w-5 h-5"  />;
            Filters                      <span className="text-sm text-zion-slate-light">;
                        {option && option.label}
                        {option && option.count && (";
                          <span className="ml-2 text-zion-slate-light/60">;
                            ({option && option.count});
                          </span>;
                        )};
                      </span>;
                    </label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  )})}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )}
'"`

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  filters: FilterGroup[];
  selected_filters: Record < string, any>;
  onFilterChange: key: string, value: string, checked: boolean void;
  onClearFilters: : unknown void;
  is_open: boolean;
  on_close: ()  => void}
export /**
 * FilterSidebar - Function description
 */
function FilterSidebar() {
  return ();
    <>;
      {/* Mobile overlay */}
      {is_open && (
        <div;
          className="fixed inset - 0 bg - black / 50 z - 40 lg: hidden";
          on_click={on_close}
        />)}
      {/* Sidebar */}
      <div className={`;
        fixed lg:static inset - y-0 left - 0 z - 50 w - 80 bg - zion - blue - dark / 95 backdrop - blur - xl border - r border - zion - blue - light / 20 transform transition - transform duration - 300 lg:transform - none';
        ${is_open ? 'translate - x-0' : '-translate - x-full lg:translate - x-0'}`;
      `}>";
        <div className="flex items - center justify - between p - 4 border - b border - zion - blue - light / 20">";
          <h3 className="text - lg font - semibold text - white flex items - center gap - 2">";
            <Filter className="w - 5 h - 5"  />;
            Filters                      <span className="text - sm text - zion - slate - light">;
                        {option.label}
                        {option.count && (";
                          <span className="ml - 2 text - zion - slate - light / 60">;
                            ({option.count});
                          </span>)}
                      </span>;
                    </label>)})}
              </div>;
            </div>))}
        </div>;
      </div>;
    </>)}
'"`;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
