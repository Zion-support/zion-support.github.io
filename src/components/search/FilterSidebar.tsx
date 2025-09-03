
interface FilterOption {
  value: string;
  label: string;
  count?: number
}

interface FilterGroup {
  title: string;
  key: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio' | 'range'}

interface FilterSidebarProps extends React.PropsWithChildren<{}> {

  filters: FilterGroup[];
  selectedFilters: Record<string, any>;
  onFilterChange: key: string, value: string, checked: boolean void;
  onClearFilters: : unknown void;
  isOpen: boolean;
  onClose: ()  => void}

export function FilterSidebar({

  filters,
  selectedFilters,
  onFilterChange,
  onClearFilters,
  isOpen,
  onClose
}: FilterSidebarProps) {

  return ()
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg: hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
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
                            ({option.count});
                          </span>;
                        )};
                      </span>;
                    </label>;
                  )})}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )}
'"`