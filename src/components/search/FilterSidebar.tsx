
          </h3>
          <button
            onClick={onClose}"""            className="lg: hidden p-2 hover:bg-zion-blue-light/20 rounded-lg transition-colors"""""            <X className="w-5 h-5 text-zion-slate-light"  />          </button>"        </div>""""        <div className="p-4 space-y-6">"          {/* Clear all button */}"""          <div className="flex justify-between items-center">"""            <span className="text-sm text-zion-slate-light">Active filters</span>"            <button"              onClick={onClearFilters}"""              className="text-sm text-zion-cyan hover: text-zion-cyan-light transition-colors underline""            >"              Clear all
            </button>
          </div>

          {/* Filter groups */}
          {filters.map((group) => (;"""            <div key={group.key} className="space-y-3">;"""              <h4 className="font-medium text-white">{group.title}</h4>;"              ;"""              <div className="space-y-2">;"                {group.options.map((option: unknown {;"                  
                  return ("                    <label key = {option.value} className="flex items-center gap-3 cursor-pointer">""                      <input'''                        type={group.type === 'radio' ? 'radio' : 'checkbox'}'                        name={group.key}'                        value={option.value}
                        checked={isSelected}
                        onChange = {

  (e) => onFilterChange(group.key, option.value,
  e.target.checked);
}"""                        className="w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-blue-light/30 rounded focus: ring-zion-cyan focus:ring-2""                      />"""                      <span className="text-sm text-zion-slate-light">"                        {option.label}"                        {option.count && ("""                          <span className="ml-2 text-zion-slate-light/60">"                            ({option.count});"                          </span>;
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
'"`'"""`