<<<<<<< HEAD
;
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { "hasError": false }}
  static getDerivedStateFromError(error) {return { "hasError": true 
}
  componentDidCatch(error, errorInfo) {console.error('Error caught by "boundary":', error, errorInfo)}'
  render() {if (this.state.hasError) ;
  }
  return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}import React from 'react';'
import clsx from 'clsx';'

import React from "react";"
import clsx from "clsx";"

export type EnhancedButtonProps =;
  React && React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: "primary" | "secondary" | "ghost";"
    }
    size?: "sm" | "md" | "lg";"
=======

;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }
}
  componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
<<<<<<< HEAD
  return <div />Something went wrong.</div>;}
=======
  return <div    />Something went wrong.</div>;}
>>>>>>> merged-prs-20250907-203621
    }
    return this.props.children;
  }
}import React from 'react';
import clsx from 'clsx';
<<<<<<< HEAD
export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean
};
=======

import React from \'react\';"
import clsx from \'clsx\';

export type EnhancedButtonProps =;"
  React && React.ButtonHTMLAttributes<HTMLButtonElement    /> & {variant?: \"primary\" | \"secondary\" | \'ghost\';}"
    size?: \"sm\" | \"md\" | \'lg\';}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    fullWidth?: boolean;}}}

const baseStyles =;"
  \'inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]\';
"
const sizeStyles: Record<NonNullable<EnhancedButtonProps[\"size\"]    />, string> = {sm: \"text-sm px-3 py-2\",md: \"text-sm px-4 py-3\",lg: \"text-base px-5 py-3}
}

const variantStyles: Record<;"
  NonNullable<EnhancedButtonProps[\"variant\"]    />,string;"
> = {primary: \"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400\",secondary:;"
    \"bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100\",ghost:;}"
    \"bg-transparent hover: bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100}
}
"
export default function EnhancedButton(): any ({className,variant = \"primary\",size = \"md\",fullWidth,...props;}
}: EnhancedButtonProps) {return (<button;
      className = {clsx;
  return (<button;
      className={clsx(export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement    /> & {variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';}
  fullWidth?: boolean;}
}

const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus: outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]';

const sizeStyles: Record<NonNullable<EnhancedButtonProps['size']    />, string> = {sm: 'text-sm px-3 py-2'}
  md: 'text-sm px-4 py-3',lg: 'text-base px-5 py-3';}
}

const variantStyles: Record<NonNullable<EnhancedButtonProps['variant']    />, string> = {primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400'}
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100';}
}

export default function EnhancedButton() {return (<button;
className={clsx(baseStyles;
        sizeStyles[size];
        variantStyles[variant];"
        fullWidth && \'w-full\';}
        className;}
      )}
      {...props}}}
<<<<<<< HEAD
}}import React from './react';'
import clsx from './clsx';'

export type EnhancedButtonProps =;
  React.ButtonHTMLAttributes < HTMLButtonElement> & {variant?: "primary" | "secondary" | "ghost";"
    }
    size?: "sm" | "md" | "lg";"
    full_width?: boolean;
  }
=======
}}import React from './react';
import clsx from './clsx';

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const base_styles =;
  "inline - flex items - center justify - center font - semibold rounded - md transition "focus":outline - none "focus":ring - 2 "focus":ring - offset - 2 min - h-[44px]";"

const "size_styles": Record < NonNullable < EnhancedButtonProps["size"]>, string> = {"sm": "text - sm px - 3 py - 2","md": "text - sm px - 4 py - 3","lg": "text - base px - 5 py - 3";"
}

const "variant_styles": Record<;
  NonNullable < EnhancedButtonProps["variant"]>,string;"
> = {"primary": "bg - blue - 600 "hover":bg - blue - 700 text - white "focus":ring - blue - 400","secondary":;"
    "bg - gray - 100 "hover":bg - gray - 200 text - gray - 900 "focus":ring - gray - 300 "dark":bg - gray - 800 "dark":"hover":bg - gray - 700 "dark":text - gray - 100","ghost":;"
    "bg - transparent "hover":bg - gray - 100 text - gray - 900 "focus":ring - gray - 300 "dark":"hover":bg - gray - 800 "dark":text - gray - 100";"
}

export default /**;
 * EnhancedButton - Function description;
 */;
function EnhancedButton() {return (<button;
      }
      className={clsx (base_styles,size_styles[size],variant_styles[variant],full_width && "w - full",class_name,)}"
      {...props} />)}}
    />;
)}ursor/fix-website-loading-errors-and-merge-6662;
    />;
)/>;
  )}

const "EnhancedButton": React.FC<EnhancedButtonProps> = ({ className    }) => {

<<<<<<< HEAD

}


<<<<<<< HEAD
return (<div className={className || ',;'
}>;
      <h1>EnhancedButton</h1>;
      <p>This component is under development.</p>;
    </div>;
  )}

export default EnhancedButton;
}}}
    fullWidth?: boolean
};


const baseStyles =;
  "inline-flex items-center justify-center font-semibold rounded-md transition "focus":outline-none "focus":ring-2 "focus":ring-offset-2 min-h-[44px]";"

const "sizeStyles": Record<NonNullable<EnhancedButtonProps["size"]>, string> = {;"
  }
  "sm": "text-sm px-3 py-2",;"
  "md": "text-sm px-4 py-3",;"
  "lg": "text-base px-5 py-3","
};

const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus: outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]',
const sizeStyles: Record<NonNullable<EnhancedButtonProps['size']>, string> = {
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-3',
  lg: 'text-base px-5 py-3'},
const variantStyles: Record<NonNullable<EnhancedButtonProps['variant']>, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100'},

const "variantStyles": Record<;
  NonNullable<EnhancedButtonProps["variant"]>,;"
  string;
> = {;
  }
  "primary": "bg-blue-600 "hover":bg-blue-700 text-white "focus":ring-blue-400",;"
  "secondary":;
    "bg-gray-100 "hover":bg-gray-200 text-gray-900 "focus":ring-gray-300 "dark":bg-gray-800 "dark":"hover":bg-gray-700 "dark":text-gray-100",;"
  "ghost":;
    "bg-transparent "hover":bg-gray-100 text-gray-900 "focus":ring-gray-300 "dark":"hover":bg-gray-800 "dark":text-gray-100","
};


export default function EnhancedButton(): any ({;
  }
  className,;
  variant = "primary",;"
  size = "md",;"
  fullWidth,;
  ...props;
}: EnhancedButtonProps) {;

}

return (;
    <button,
className={clsx(
}
import React from 'react';'

export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  }
  variant?: 'primary' | 'secondary' | 'ghost';'
  size?: 'sm' | 'md' | 'lg';'
  fullWidth?: boolean
};
const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus: outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]';
const sizeStyles: Record<NonNullable<EnhancedButtonProps['size']>, string> = {
=======
=======
export type EnhancedButtonProps =;"
  React.ButtonHTMLAttributes < HTMLButtonElement    /> & {variant?: \"primary\" | \"secondary\" | \'ghost\';"
    size?: \"sm\" | \"md\" | \'lg\';}
    full_width?: boolean;}
  }

const base_styles =;"
  \'inline - flex items - center justify - center font - semibold rounded - md transition focus:outline - none focus:ring - 2 focus:ring - offset - 2 min - h-[44px]\';
"
const size_styles: Record < NonNullable < EnhancedButtonProps[\"size\"]>, string> = {sm: \"text - sm px - 3 py - 2\",md: \"text - sm px - 4 py - 3\",lg: \'text - base px - 5 py - 3\';}
}

const variant_styles: Record<;"
  NonNullable < EnhancedButtonProps[\"variant\"]>,string;"
> = {primary: \"bg - blue - 600 hover:bg - blue - 700 text - white focus:ring - blue - 400\",secondary:;"
    \"bg - gray - 100 hover:bg - gray - 200 text - gray - 900 focus:ring - gray - 300 dark:bg - gray - 800 dark:hover:bg - gray - 700 dark:text - gray - 100\",ghost:;}"
    \'bg - transparent hover:bg - gray - 100 text - gray - 900 focus:ring - gray - 300 dark:hover:bg - gray - 800 dark:text - gray - 100\';}
}

export default /**;
 * EnhancedButton - Function description;
 */;
function EnhancedButton() {return (<button;}"
      className={clsx (base_styles,size_styles[size],variant_styles[variant],full_width && \"w - full\",class_name,)}
      {...props}
       />)}}
    />;
)}ursor/fix-website-loading-errors-and-merge-6662;
    />;
)/>;
  )}

const EnhancedButton: React.FC<EnhancedButtonProps    /> = ({ className    }) => {

}
return (<div className={className || '}
}    />;
      <h1    />EnhancedButton</h1>;
      <p    />This component is under development.</p>;
    </div>;
  )}
>>>>>>> origin/chore/fix-lint-and-merge

export default EnhancedButton;
}}}
    fullWidth?: boolean;
};
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";
import clsx from "clsx";
export type EnhancedButtonProps =;
  React && React.ButtonHTMLAttributes<HTMLButtonElement> & {;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
<<<<<<< HEAD
  };
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const baseStyles =;
  "inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]";
const sizeStyles: Record<NonNullable<EnhancedButtonProps["size"]>, string> = {;
  sm: "text-sm px-3 py-2",;
  md: "text-sm px-4 py-3",;
  lg: "text-base px-5 py-3",;
};
>>>>>>> merged-prs-20250907-203621

const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus: outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]',
const sizeStyles: Record<NonNullable<EnhancedButtonProps['size']>, string> = {
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-3',
  lg: 'text-base px-5 py-3'},
const variantStyles: Record<NonNullable<EnhancedButtonProps['variant']>, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400',
<<<<<<< HEAD
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100'}
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100'}
}
export default function EnhancedButton({
  className,
  variant = 'primary',
  size = 'md',
  fullWidth,
export type EnhancedButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement    /> & {;"
    variant?: \"primary\" | \"secondary\" | \'ghost\';"
    size?: \"sm\" | \"md\" | \'lg\';}
    fullWidth?: boolean;}
=======
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100'},
=======
const baseStyles =;"
  \'inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]\';
"
const sizeStyles: Record<NonNullable<EnhancedButtonProps[\"size\"]    />, string> = {;"
  sm: \"text-sm px-3 py-2\",;"
  md: \"text-sm px-4 py-3\",;}"
  lg: \"text-base px-5 py-3\"}
};

>>>>>>> origin/chore/fix-lint-and-merge

const variantStyles: Record<;"
  NonNullable<EnhancedButtonProps[\"variant\"]    />,;
  string;
> = {;"
  primary: \"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400\",;
  secondary:;"
    \"bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100\",;
  ghost:;}"
    \"bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100\"}
};


export default function EnhancedButton(): any ({;
  className,;"
  variant = \"primary\",;"
  size = \"md\",;
  fullWidth,;}
  ...props;}
}: EnhancedButtonProps) {;

<<<<<<< HEAD
}


pr-12243
class ErrorBoundary extends React.Component {

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


pr-12243
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
}import React from 'react';
import clsx from 'clsx';
export type EnhancedButtonProps = any;
import React from "react";
import clsx from "clsx";
export type EnhancedButtonProps =
  React && React.ButtonHTMLAttributes<HTMLButtonElement> & {;"
    variant?: "primary" | "secondary" | "ghost";"
    size?: "sm" | "md" | "lg"
    fullWidth?: boolean
  }
  lg: "text-base px-5 py-3",
}
const variantStyles: Record<;"
  NonNullable<EnhancedButtonProps[\"variant\"]    />,string;"
> = {primary: \"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400\",secondary:;"
    \"bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100\",ghost:;}"
    \"bg-transparent hover: bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100}
>>>>>>> merged-prs-20250907-203621

const baseStyles ="
  \"inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]\";
"
<<<<<<< HEAD
export default function EnhancedButton(): any ({className,variant = \"primary\",size = \"md\",fullWidth,...props;}
=======
<<<<<<< HEAD
const sizeStyles: Record<NonNullable<EnhancedButtonProps[\"size\"] />, string> = {"
  sm: \"text-sm px-3 py-2\"
  md: \"text-sm px-4 py-3\"}"
  lg: \"text-base px-5 py-3\"}
}

const variantStyles: Record<"
  NonNullable<EnhancedButtonProps[\"variant\"] />
  string;
> = {"
  primary: \"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400\"
  secondary:"
    \"bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100\"
  ghost:}"
    \"bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100\"}
}

export default function EnhancedButton({
  className;
  variant = 'primary';
  size = 'md';
  fullWidth;
}
  ...props}
  ...props
}: EnhancedButtonProps) {
  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], fullWidth && 'w-full', className)}
      {...props}
    />
  )
}
=======
export default function EnhancedButton(): any ({className,variant = \primary\,size = \"md\",fullWidth,...props;}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}: EnhancedButtonProps) {return (<button;
      className = {clsx;
  return (<button;
      className={clsx(export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement /> & {variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';}
  fullWidth?: boolean;}
}

const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition "focus": outline-none "focus":ring-2 "focus":ring-offset-2 min-h-[44px]';'

<<<<<<< HEAD
const "sizeStyles": Record<NonNullable<EnhancedButtonProps['size']>, string> = {'
  }
  "sm": 'text-sm px-3 py-2','
  "md": 'text-sm px-4 py-3','
  "lg": 'text-base px-5 py-3','
};

const "variantStyles": Record<NonNullable<EnhancedButtonProps['variant']>, string> = {'
=======
const sizeStyles: Record<NonNullable<EnhancedButtonProps['size'] />, string> = {sm: 'text-sm px-3 py-2'}
  md: 'text-sm px-4 py-3',lg: 'text-base px-5 py-3';}
}

const variantStyles: Record<NonNullable<EnhancedButtonProps['variant'] />, string> = {primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400'}
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100';}
}
export default function EnhancedButton() {return (<button;
className={clsx(baseStyles;
        sizeStyles[size];
        variantStyles[variant];"
        fullWidth && \'w-full\';}
        className;}
      )}
      {...props}}}
}}
import React from './react';
import clsx from './clsx';
export type EnhancedButtonProps =;"
  React.ButtonHTMLAttributes < HTMLButtonElement    /> & {variant?: \"primary\" | \"secondary\" | \'ghost\';"
    size?: \"sm\" | \"md\" | \'lg\';}
    full_width?: boolean;}

const base_styles =;"
  \'inline - flex items - center justify - center font - semibold rounded - md transition focus:outline - none focus:ring - 2 focus:ring - offset - 2 min - h-[44px]\'
"
const size_styles: Record < NonNullable < EnhancedButtonProps[\"size\"]>, string> = {sm: \"text - sm px - 3 py - 2\",md: \"text - sm px - 4 py - 3\",lg: \'text - base px - 5 py - 3\';}

const variant_styles: Record<;"
  NonNullable < EnhancedButtonProps[\"variant\"]>,string;"
> = {primary: \"bg - blue - 600 hover:bg - blue - 700 text - white focus:ring - blue - 400\",secondary:;"
    \"bg - gray - 100 hover:bg - gray - 200 text - gray - 900 focus:ring - gray - 300 dark:bg - gray - 800 dark:hover:bg - gray - 700 dark:text - gray - 100\",ghost:;}"
    \"bg - transparent hover:bg - gray - 100 text - gray - 900 focus:ring - gray - 300 dark:hover:bg - gray - 800 dark:text - gray - 100\";}
}
export default /**;
 * EnhancedButton - Function description;
 */;
function EnhancedButton() {return (<button;}"
      className={clsx (base_styles,size_styles[size],variant_styles[variant],full_width && \"w - full\",class_name,)}
      {...props}
       />)}}
    />
)}ursor/fix-website-loading-errors-and-merge-6662
    />
)/>
  )}

const EnhancedButton: React.FC<EnhancedButtonProps    /> = ({ className    }) => {

return (<div className={className || '}
}    />
      <h1    />EnhancedButton</h1>
      <p    />This component is under development.</p>
    </div>
  )}
export default EnhancedButton;
}}}
    fullWidth?: boolean;
};

const baseStyles =;"
  \'inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]\'
"
const sizeStyles: Record<NonNullable<EnhancedButtonProps[\"size\"]    />, string> = {;"
  sm: \"text-sm px-3 py-2\",;"
  md: \"text-sm px-4 py-3\",;}"
  lg: \"text-base px-5 py-3\"}
};

const variantStyles: Record<;"
  NonNullable<EnhancedButtonProps[\"variant\"]    />,
  string
> = {;"
  primary: \"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400\",
  secondary:;"
    \"bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100\",
  ghost:;}"
    \"bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100\"}
};
export default function EnhancedButton(): any ({;
  className,;"
  variant = \"primary\",;"
  size = \"md\",
  fullWidth,;}
  ...props;}
}: EnhancedButtonProps) {;

  return (
    <button;
className={clsx(
import React from 'react';
export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement /> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';}
  fullWidth?: boolean}
}
const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus: outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]'
const sizeStyles: Record<NonNullable<EnhancedButtonProps['size']    />, string> = {
}
pr-12243


import React from "react";


import React from "react";"
import clsx from "clsx";
export type EnhancedButtonProps =;
  React && React.ButtonHTMLAttributes<HTMLButtonElement> & {;"
    variant?: "primary" | "secondary" | "ghost";"
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
  };

pr-12243
  };
const baseStyles =;
  "inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]";
const sizeStyles: Record<NonNullable<EnhancedButtonProps["size"]>, string> = {;
  sm: "text-sm px-3 py-2",;
  md: "text-sm px-4 py-3",;
  lg: "text-base px-5 py-3",;
};
const variantStyles: Record<;"
  NonNullable<EnhancedButtonProps["variant"]>,;
  string;
> = {;"
  primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400",;
  secondary:;"
    "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100",;
  ghost:;"
    "bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100",;
};
export default function EnhancedButton(): any ({;
  className,;"
  variant = "primary",;"
  size = "md",;
  fullWidth,;
  ...props;
}: EnhancedButtonProps) {;
<<<<<<< HEAD
  return (
    <button
      className={clsx(
import React from 'react';
import clsx from 'clsx';
export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean
};
const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus: outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]';
const sizeStyles: Record<NonNullable<EnhancedButtonProps['size']>, string> = {
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-3',
  lg: 'text-base px-5 py-3'
};
const variantStyles: Record<NonNullable<EnhancedButtonProps['variant']>, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100'
};
export default function EnhancedButton({
  className,
  variant = 'primary',
  size = 'md',
  fullWidth,
import React from "react";
import clsx from "clsx";
export type EnhancedButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
  }
const baseStyles =
  "inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]";
const sizeStyles: Record<NonNullable<EnhancedButtonProps["size"]>, string> = {
  sm: "text-sm px-3 py-2"
  md: "text-sm px-4 py-3"
  lg: "text-base px-5 py-3"
}
const variantStyles: Record<
  NonNullable<EnhancedButtonProps["variant"]>
  string
> = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400"
  secondary:
    "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100"
  ghost:
    "bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100"
}
export default function EnhancedButton({
  className
  variant = "primary"
  size = "md"
  fullWidth

import React from 'react';
import clsx from 'clsx';
export type EnhancedButtonProps = any;
origin/cursor/automate-test-improve-and-merge-code-2533


  ...props
}: EnhancedButtonProps) {
  return (
    <button
className={clsx(
pr-12243



pr-12243
=======
<<<<<<< HEAD
import React from 'react';
import clsx from 'clsx';
export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean
};
const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus: outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]';
const sizeStyles: Record<NonNullable<EnhancedButtonProps['size']>, string> = {
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-3',
  lg: 'text-base px-5 py-3'
};
const variantStyles: Record<NonNullable<EnhancedButtonProps['variant']>, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100'
};
export default function EnhancedButton({
  className,
  variant = 'primary',
  size = 'md',
  fullWidth,
import React from "react";
import clsx from "clsx";
export type EnhancedButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
  }
const baseStyles =
  "inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]";
const sizeStyles: Record<NonNullable<EnhancedButtonProps["size"]>, string> = {
  sm: "text-sm px-3 py-2"
  md: "text-sm px-4 py-3"
  lg: "text-base px-5 py-3"
}
const variantStyles: Record<
  NonNullable<EnhancedButtonProps["variant"]>
  string
> = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400"
  secondary:
    "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100"
  ghost:
    "bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100"
}
export default function EnhancedButton({
  className
  variant = "primary"
  size = "md"
  fullWidth

  ...props
}: EnhancedButtonProps) {
  return (
    <button
className={clsx(
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return (
    <button
      className={clsx(
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        baseStyles



        baseStyles;
        sizeStyles[size]
        variantStyles[variant]"
        fullWidth && "w-full"
        className;
      )}
      {...props}
<<<<<<< HEAD
}



}

pr-12243
=======
<<<<<<< HEAD
/>;
  );
}
=======

}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from './react';
export type EnhancedButtonProps =;
  React.ButtonHTMLAttributes < HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    full_width?: boolean;
  }
;
const base_styles =;
  "inline - flex items - center justify - center font - semibold rounded - md transition focus:outline - none focus:ring - 2 focus:ring - offset - 2 min - h-[44px]";
const size_styles: Record < NonNullable < EnhancedButtonProps["size"]>;, string> = {
  sm: "text - sm px - 3 py - 2";,
  md: "text - sm px - 4 py - 3";,
  lg: "text - base px - 5 py - 3";,
}
const variant_styles: Record<;
  NonNullable < EnhancedButtonProps["variant"]>,
const baseStyles ="
  \"inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]\";
"
const sizeStyles: Record<NonNullable<EnhancedButtonProps[\"size\"] />;, string> = {"
  sm: \"text-sm px-3 py-2\"
  md: \"text-sm px-4 py-3\";}"
  lg: \"text-base px-5 py-3\";}
}

export default function EnhancedButton() {
 ;
}
export default function EnhancedButton({
  className;"
variant = \"primary\"
  size = \"md\"
  fullWidth;
}
  ...props}
export default function EnhancedButton ({
  className, variant = 'primary', size = 'md', fullWidth, ...props 
import React from react";


import React from "react;
export type EnhancedButtonProps =;
  React && React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: primary" | "secondary | ghost";"
    size?: sm | "md" | lg;
    fullWidth?: boolean;

  }


  lg: "text-base px-5 py-3"}
  NonNullable<EnhancedButtonProps[variant"]>,
  string;
> = {"
  primary: bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400,
  secondary:;"
    "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100,
  ghost:;
    "bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100"}
export default function EnhancedButton(): any ({
  className,
  variant = primary","
  size = md,
  fullWidth,
  ...props;
}: EnhancedButtonProps) {

import React from 'react';
import clsx from clsx;
export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | secondary | 'ghost';
  size?: sm | 'md' | lg;
  fullWidth?: boolean
}
const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus: outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]';
const sizeStyles: Record<NonNullable<EnhancedButtonProps[size]>, string> = {
  sm: 'text-sm px-3 py-2',
  md: text-sm px-4 py-3,
  lg: 'text-base px-5 py-3'
}
const variantStyles: Record<NonNullable<EnhancedButtonProps[variant]>, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400',
  secondary: bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100,
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100'
}
export default function EnhancedButton({
  className,
  variant = primary,
  size = 'md',
  fullWidth,
import React from "react";
export type EnhancedButtonProps =

  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | secondary | "ghost";
    size?: sm | "md" | lg;
    fullWidth?: boolean;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
  "primary": 'bg-blue-600 "hover":bg-blue-700 text-white "focus":ring-blue-400','
  "secondary": 'bg-gray-100 "hover":bg-gray-200 text-gray-900 "focus":ring-gray-300 "dark":bg-gray-800 "dark":"hover":bg-gray-700 "dark":text-gray-100','
  "ghost": 'bg-transparent "hover":bg-gray-100 text-gray-900 "focus":ring-gray-300 "dark":"hover":bg-gray-800 "dark":text-gray-100','
};

export default function EnhancedButton() {
 ;
}
<<<<<<< HEAD
return (;
    <button,
=======
const variantStyles: Record<
  NonNullable<EnhancedButtonProps[variant]>
  string
> = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400"
  secondary:
    bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100
  ghost:
    "bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100"
}
export default function EnhancedButton({
  className
  variant = primary
  size = "md"
  fullWidth





  ...props
}: EnhancedButtonProps) {
  return (
    <button
pr-12243
        baseStyles



        baseStyles;
        sizeStyles[size]
        variantStyles[variant]
        fullWidth && w-full"
        className;
      )}
      {...props}

}



}


import React from ./react;
export type EnhancedButtonProps =;
  React.ButtonHTMLAttributes < HTMLButtonElement> & {
    variant?: "primary | secondary" | "ghost;
    size?: sm" | "md | lg";
    full_width?: boolean;
  }
const base_styles =;
  "inline - flex items - center justify - center font - semibold rounded - md transition focus:outline - none focus:ring - 2 focus:ring - offset - 2 min - h-[44px];
const size_styles: Record < NonNullable < EnhancedButtonProps[size"]>;, string> = {
  sm: "text - sm px - 3 py - 2;,
  md: text - sm px - 4 py - 3";,
  lg: "text - base px - 5 py - 3;}
const variant_styles: Record<;
  NonNullable < EnhancedButtonProps[variant"]>,
const baseStyles ="
  \inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]\;
"
const sizeStyles: Record<NonNullable<EnhancedButtonProps[\"size\] />;, string> = {
  sm: \"text-sm px-3 py-2\"
  md: \text-sm px-4 py-3\;}"
  lg: \"text-base px-5 py-3\;}
}

  NonNullable<EnhancedButtonProps[\"variant\"] />
  string;
> = {
  primary: \bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400\"
  secondary:"
    \bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100\
  ghost:}"
    \"bg-transparent hover: bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100\;}
}
export default function EnhancedButton({
  className;
variant = \"primary\"
  size = \md\
  fullWidth;
}
  ...props}
export default function EnhancedButton ({
  className, variant = 'primary', size = md, fullWidth, ...props 
  ...props
}: EnhancedButtonProps) {
  return (
    <button
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
className={clsx(
        }
        baseStyles,
sizeStyles[size]
variantStyles[variant];
        fullWidth && "w-full""
        className
      )}
      {...props}

}

import React from './react';
import clsx from './clsx';
export type EnhancedButtonProps =;
  React.ButtonHTMLAttributes < HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    full_width?: boolean;
  }
;
const base_styles =;
  "inline - flex items - center justify - center font - semibold rounded - md transition focus:outline - none focus:ring - 2 focus:ring - offset - 2 min - h-[44px]";
const size_styles: Record < NonNullable < EnhancedButtonProps["size"]>, string> = {
  sm: "text - sm px - 3 py - 2",
  md: "text - sm px - 4 py - 3",
  lg: "text - base px - 5 py - 3",
}
const variant_styles: Record<;
  NonNullable < EnhancedButtonProps["variant"]>,
  string;
> = {
  primary: "bg - blue - 600 hover:bg - blue - 700 text - white focus:ring - blue - 400",
  secondary:;
    "bg - gray - 100 hover:bg - gray - 200 text - gray - 900 focus:ring - gray - 300 dark:bg - gray - 800 dark:hover:bg - gray - 700 dark:text - gray - 100",
  ghost:;
    "bg - transparent hover:bg - gray - 100 text - gray - 900 focus:ring - gray - 300 dark:hover:bg - gray - 800 dark:text - gray - 100",
}
export default /**
 * EnhancedButton - Function description
 */
<<<<<<< HEAD
function EnhancedButton() {
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <button;
className={clsx(
import React from 'react';

export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement    /> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';}
  fullWidth?: boolean}
};

const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus: outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]';

const sizeStyles: Record<NonNullable<EnhancedButtonProps['size']    />, string> = {
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-3'}
  lg: 'text-base px-5 py-3'}
};

const variantStyles: Record<NonNullable<EnhancedButtonProps['variant']    />, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100'}
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100'}
};

export default function EnhancedButton({
  className,
  variant = 'primary',
  size = 'md',
  fullWidth,
export type EnhancedButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement    /> & {;"
    variant?: \"primary\" | \"secondary\" | \'ghost\';"
    size?: \"sm\" | \"md\" | \'lg\';}
    fullWidth?: boolean;}
  }

const baseStyles ="
  \'inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]\';
"
const sizeStyles: Record<NonNullable<EnhancedButtonProps[\"size\"]    />, string> = {"
  sm: \"text-sm px-3 py-2\"
  md: \"text-sm px-4 py-3\"}"
  lg: \"text-base px-5 py-3\"}
}

const variantStyles: Record<"
  NonNullable<EnhancedButtonProps[\"variant\"]    />
  string;
> = {"
  primary: \"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400\"
  secondary:"
    \"bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100\"
  ghost:}"
    \"bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100\"}
}

export default function EnhancedButton({
  className;"
variant = \"primary\"
  size = \"md\"
  fullWidth;
}
  ...props}
}: EnhancedButtonProps) {
 ;
  return (
    <button;
className={clsx(
        baseStyles;
sizeStyles[size]
        variantStyles[variant]"
        fullWidth && \"w-full\"}
        className}
      )}
      {...props}
<<<<<<< HEAD
=======
    />);
}
<<<<<<< HEAD

    />
  );
}
<<<<<<< HEAD



}

}


} />;
);
}

    />
  );
ursor/fix-website-loading-errors-and-merge-6662
    />
  );
}

const "EnhancedButton": React.FC<EnhancedButtonProps> = ({ className    }) => {



=======
}
    />;
);
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnhancedButton</h1>
      <p>This component is under development.</p>
    </div>
<<<<<<< HEAD
  )
};
=======
  );
};

export default EnhancedButton;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export default EnhancedButton;
}

}
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD

=======
}
<<<<<<< HEAD


}

}
    />;
);
}

<<<<<<< HEAD
    />
  );
ursor/fix-website-loading-errors-and-merge-6662
    />
  );
}

=======
       />;
);
}

    />;
);
}

const EnhancedButton: React.FC<EnhancedButtonProps    /> = ({ className    }) => {

>>>>>>> origin/chore/fix-lint-and-merge

    />
  );
main
pr-12243
ursor/fix-website-loading-errors-and-merge-6662
    />
  );
    />;
);
}
  return (}
    <div className={className || ''}    />
      <h1    />EnhancedButton</h1>
      <p    />This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
export default EnhancedButton;
}

}
origin/cursor/automate-test-improve-and-merge-code-2533


>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
origin/cursor/automate-test-improve-and-merge-code-2533
    />;
);
/>
  );
    />
  );
main
pr-12243
    />;
);
}

const EnhancedButton: React.FC<EnhancedButtonProps /> = ({ className    }) => {

}
  return (}
    <div className={className || ''} />
      <h1 />EnhancedButton</h1>
      <p />This component is under development.</p>
    </div>
    />
  );
};
export default EnhancedButton;
}


<<<<<<< HEAD
=======
}
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
"
=======

export default EnhancedButton;
}

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
