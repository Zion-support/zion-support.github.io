/*;
  Minimal React type declarations.;
  ---------------------------------------------------------------------------;
  These definitions are **not** a replacement for `@types/react` – they only;
  exist so that isolated compilation of individual files (e.g., in CI or code;
  review bots) will not fail when full React type declarations are not;
  present.  They purposefully model just enough surface-area used throughout;
  the code-base.  If you have `@types/react` available in `node_modules`;
  TypeScript will prefer those and ignore this file, because paths declared in;
  `typeRoots` are merged with normal type resolution.;
*/;

  }
;
  // Common hooks we rely on.;

  export type Key = string | number;
;
  // Default export so `import React from 'react'` keeps working even without;
  // the real react package being installed.;

  }
}/* Minimal React type declarations. --------------------------------------------------------------------------- These definitions are **not** a replacement for `@types/react` – they only exist so that isolated compilation of individual files (e.g., in CI or code review bots) will not fail when full React type declarations are not present. They purposefully model just enough surface-area used throughout the code-base. If you have `@types/react` available in `node modules`;
TypeScript will prefer those and ignore this file, because paths declared in `typeRoots` are merged with normal type resolution. */ export type Key = string | number;
// Default export so `import React from 'react'` keeps working even without // the real react package being installed. export default React
}declare namespace React {
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements" // errors when `@types/react` is not present. export interface IntrinsicElements {

}
