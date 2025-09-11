<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
interface FilterSidebarProps {
  className?: string;
  children?: React.ReactNode
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}


import React from 'react';
interface FilterSidebarProps {
=======
}


import React from 'react';
interface FilterSidebarProps {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  class_name?: string;
  children?: React.ReactNode;
}
export const FilterSidebar: React.FC < FilterSidebarProps> = ({
  class_name,
  children;
}, ) => {  return (
    <div className={`filter - sidebar ${class_name || ''}`}>;

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div
          className="fixed inset-0 bg-black/50 z-40 lg: hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  )})}
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
<<<<<<< HEAD
      </div>;
    </>)}
'"`;



import React from 'react',;
      </div>
    </>
  )}
'"`

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </>;
  )};
'"`;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react',;
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
<<<<<<< HEAD
export default FilterSidebar;
=======
export default FilterSidebar;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
