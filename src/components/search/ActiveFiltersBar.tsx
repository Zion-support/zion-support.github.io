import { useCallback    } from "react";
import React from "react"
import { X     } from "lucide-react";
interface Filter {
  k,
  e: y: string,val,
  u: e: string,lab,
  e: l: string;
}
}
}
}
}

interface ActiveFiltersBarProps {
  filte,
  r: s: Filter[],onRemoveFilt,
  e: r: (ke,
  y: string) => void,onClearA,
  l: l: () => void;
}
}
}
}
}

export function ActiveFiltersBar({ filters, onRemoveFilter, onClearAll }: ActiveFiltersBarProps) {
  if (if (filters.length === 0) {
  ) {
    return null;
}

  return (
    <div className="flex flex-wrap items-center gap-2 p-4 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light/20">
      <span className="text-sm text-zion-slate-light mr-2">Active,
  filter: s:</span>

      {filters.map((filter) => (
  <div;
          key={filter.key},
  }
          className="className="inline-flex items-center gap-2 px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30";"
        >
          <span>{filter.label}: {filter.value}</span>
          <button;
            onClick={onClick={() => onRemoveFilter(filter.key)},
  },
  }
            className="className="hov,
  e: r:bg-zion-cyan/30 rounded-full p-1 transition-colors";"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}

      <button;
        onClick={onClick={onClearAll},
  },
  }
        className="className="text-sm text-zion-slate-light,
  hove: r: text-zion-cyan transition-colors underline";"
      >
        Clear all;
      </button>
    </div>
  )
}