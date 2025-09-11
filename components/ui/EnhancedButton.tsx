
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import clsx from "clsx";
export type EnhancedButtonProps =;
  React && React.ButtonHTMLAttributes<HTMLButtonElement> & {;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
  };
=======

  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======

  return (
    <button
      className={clsx(
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        baseStyles
        sizeStyles[size]
        variantStyles[variant]
        fullWidth && "w-full"
        className
      )}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD
/>;
  );
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD

    />
  );
}
}
    />;
);
}
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}
=======
    />;
);
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
