import React from 'react.ts';
import { X  } from 'lucide-react';
interface Filter {
  key: string;
  value: string;
  label: string}
interface ActiveFiltersBarProps extends React.PropsWithChildren<{}> {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  filters: Filter[];
  onRemoveFilter: (key: string)  => void;
  onClearAll: ()  => void}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors underline";
      >;
        Clear all;
      </button>;
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
