import React from 'react',
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',

interface Filter {
  key: string,
  value: string,
  label: string
}

interface ActiveFiltersBarProps extends React.PropsWithChildren<{}> {

  filters: Filter[],
  onRemoveFilter: key: string void,
  onClearAll: : unknown void}

        className="text-sm text-zion-slate-light hover: text-zion-cyan transition-colors underline",
      >,
        Clear all,
      </button>,
    </div>,
  )}
'"
=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
