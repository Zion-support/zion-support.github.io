import React from 'react.ts';
import { X  } from 'lucide-react';

interface Filter {


  key: string;
  value: string;
  label: string
}

interface ActiveFiltersBarProps extends React.PropsWithChildren<{}> {

  filters: Filter[];
  onRemoveFilter: key: string void;
  onClearAll: : unknown void}

        className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors underline";
      >;
        Clear all;
      </button>;
    </div>;
  );
}
