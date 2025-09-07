<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

;
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }}
  componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}import React from 'react';
import clsx from 'clsx';

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
import React from "react";
import clsx from "clsx";
export type EnhancedButtonProps =;
  React && React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;}}}const baseStyles =;
  "inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]";
const sizeStyles: Record<NonNullable<EnhancedButtonProps["size"]>, string> = {sm: "text-sm px-3 py-2",md: "text-sm px-4 py-3",lg: "text-base px-5 py-3"}const variantStyles: Record<;
  NonNullable<EnhancedButtonProps["variant"]>,string;
> = {primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400",secondary:;
    "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100",ghost:;
    "bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100"}export default function EnhancedButton(): any ({className,variant = "primary",size = "md",fullWidth,...props;
}: EnhancedButtonProps) {return (<button;
      className={clsx(return (<button;
      className={clsx(export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus: outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]';
const sizeStyles: Record<NonNullable<EnhancedButtonProps['size']>, string> = {sm: 'text-sm px-3 py-2',md: 'text-sm px-4 py-3',lg: 'text-base px-5 py-3';
}const variantStyles: Record<NonNullable<EnhancedButtonProps['variant']>, string> = {primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400',secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100';
}export default function EnhancedButton() {return (<button;
className={clsx(baseStyles;
        sizeStyles[size];
        variantStyles[variant];
        fullWidth && "w-full";
        className;
      )}
      {...props}}}
}}import React from './react';
import clsx from './clsx';
export type EnhancedButtonProps =;
  React.ButtonHTMLAttributes < HTMLButtonElement> & {variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    full_width?: boolean;
  }const base_styles =;
  "inline - flex items - center justify - center font - semibold rounded - md transition focus:outline - none focus:ring - 2 focus:ring - offset - 2 min - h-[44px]";
const size_styles: Record < NonNullable < EnhancedButtonProps["size"]>, string> = {sm: "text - sm px - 3 py - 2",md: "text - sm px - 4 py - 3",lg: "text - base px - 5 py - 3";
}
const variant_styles: Record<;
  NonNullable < EnhancedButtonProps["variant"]>,string;
> = {primary: "bg - blue - 600 hover:bg - blue - 700 text - white focus:ring - blue - 400",secondary:;
    "bg - gray - 100 hover:bg - gray - 200 text - gray - 900 focus:ring - gray - 300 dark:bg - gray - 800 dark:hover:bg - gray - 700 dark:text - gray - 100",ghost:;
    "bg - transparent hover:bg - gray - 100 text - gray - 900 focus:ring - gray - 300 dark:hover:bg - gray - 800 dark:text - gray - 100";
}
export default /**;
 * EnhancedButton - Function description;
 */;
function EnhancedButton() {return (<button;
      className={clsx (base_styles,size_styles[size],variant_styles[variant],full_width && "w - full",class_name,)}
      {...props}
    />)}}
    />;
)}ursor/fix-website-loading-errors-and-merge-6662;
    />;
)/>;
  )}const EnhancedButton: React.FC<EnhancedButtonProps> = ({ className }) => {return (<div className={className || ''}>;
      <h1>EnhancedButton</h1>;
      <p>This component is under development.</p>;
    </div>;
  )}export default EnhancedButton;
}}}
    fullWidth?: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  };

=======



  };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
const baseStyles =;
  "inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]";
const sizeStyles: Record<NonNullable<EnhancedButtonProps["size"]>, string> = {;
  sm: "text-sm px-3 py-2",;
  md: "text-sm px-4 py-3",;
  lg: "text-base px-5 py-3",;
};
const variantStyles: Record<;
  NonNullable<EnhancedButtonProps["variant"]>,;
  string;
> = {;
  primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400",;
  secondary:;
    "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100",;
  ghost:;
    "bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100",;
};
export default function EnhancedButton(): any ({;
  className,;
  variant = "primary",;
  size = "md",;
  fullWidth,;
  ...props;
}: EnhancedButtonProps) {;

  return (
    <button
      className={clsx(
<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from 'react';
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

<<<<<<< HEAD
import React from 'react';
import clsx from 'clsx';
export type EnhancedButtonProps = any;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  ...props
}: EnhancedButtonProps) {
  return (
    <button
className={clsx(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
        baseStyles
        sizeStyles[size]
        variantStyles[variant]
        fullWidth && "w-full"
        className
      )}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

}

=======
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
function EnhancedButton() {
  return (
    <button;
      className={clsx (
        base_styles,
        size_styles[size],
        variant_styles[variant],
        full_width && "w - full",
        class_name,
      )}
      {...props}
    />);
}
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

}
=======
}



}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    />;
);
}

<<<<<<< HEAD
<<<<<<< HEAD
    />;
);
<<<<<<< HEAD
<<<<<<< HEAD
=======
    />
  );
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/fix-website-loading-errors-and-merge-6662
    />
  );
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}


<<<<<<< HEAD
export default EnhancedButton;
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


    />;
);
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnhancedButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EnhancedButton;


}




}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
