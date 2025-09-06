<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import React from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface FilterSidebarProps {
  className?: string;
  children?: React.ReactNode
>>>>>>> }


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

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import React from 'react'
interface FilterSidebarProps {
  className?: string;
  children?: React.ReactNode
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  className
  children
},) => {  return (
    <div className={`filter-sidebar ${className |''}`}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {children}
    </div>
  )
}
export default FilterSidebar
interface FilterOption {
  value: string
  label: string
  count?: number
}
interface FilterGroup {
  title: string
  key: string
  options: FilterOption[]
  type: 'checkbox' | 'radio' | 'range'}
interface FilterSidebarProps extends React.PropsWithChildren<{}> {
<<<<<<< HEAD

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

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div
          className="fixed inset-0 bg-black/50 z-40 lg: hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
<<<<<<< HEAD

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

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  )})}
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react',;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>
    </>
  )}
'"`

<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>;
    </>;
  )};
'"`;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> >>>>>>> import React from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface FilterSidebarProps {;
  className?: string,;
  children?: React.ReactNode;
}
;
export const FilterSidebar: React.FC<FilterSidebarProps> = ({;
  className,;
  children;
}) => {;
  return (;
    <div className={`filter-sidebar ${className || ''}`}>;
      {children}
    </div>;
  );
};
export default FilterSidebar;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
