

import React from 'react;
import Link from next/link';
interface ButtonProps  {children: React.ReactNode;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

interface ButtonProps {
  }
  "children": React.ReactNode;

interface ButtonProps {
  }
  "children": React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | default'
    | 'destructive
    | outline'
    | 'secondary
    | ghost'
      </Link>;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {variant?:;
    | 'default;
    | destructive';
    | 'outline;
    | secondary';
    | 'ghost;
    | link';
  size?: 'default | sm' | 'lg | icon';
  asChild?: boolean;
}const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className,variant = 'default,size = default',asChild = false,...props;
    },ref;
  ) => {return (<button;
        className={cn('inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;,{bg-primary text-primary-foreground hover: bg-primary/90':;
              variant === 'default,bg-destructive text-destructive-foreground hover: bg-destructive/90':;
              variant === 'destructive,border border-input bg-background hover: bg-accent hover:text-accent-foreground':;
              variant === 'outline,bg-secondary text-secondary-foreground hover: bg-secondary/80':;
              variant === 'secondary,hover: bg-accent hover:text-accent-foreground':;
              variant === 'ghost,text-primary underline-offset-4 hover: underline':;
              variant === 'link;
          },{h-10 px-4 py-2': size === 'default,h-9 rounded-md px-3': size === 'sm,h-11 rounded-md px-8': size === 'lg,h-10 w-10': size === 'icon;
          },className;
        )}
        ref={ref}
        {...props}

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from "react;

origin/cursor/automate-test-improve-and-merge-code-2533
interface ButtonProps {
  children: React.ReactNode;
  variant?: primary' | 'secondary | ghost' | 'outline;
  size?: sm' | 'md | lg';
  href?: string;

interface ButtonProps  {children: React && React.ReactNode;
  variant?: \primary\" | \"secondary\ | \outline\" | \"ghost\;
  size?: \"sm\" | \md\ | \"lg\";}
}
const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (asChild) {return React.cloneElement(children as React.ReactElement, {className: classes;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
      onClick;
      disabled;
      type;
      ...props;

  }

const size_classes = {"sm": "h - 8 px - 3 text - xs","md": "h - 10 px - 4 py - 2","lg": "h - 12 px - 8 text - lg";"
    }
    "lg": "h - 12 px - 8 text - lg";"
  }

const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${class_name}`;// Check condition;`if ( {) {$2;
}
    return React.clone_element (children as React.ReactElement, {"class_name": classes,on_click,disabled,type,...props;
      }
      disabled,type,...props;
    })}
  return (<button;
      className={classes}
      on_click={on_click}
      disabled={disabled}
      type={type}onClick?: () => void;
=======
const Button: React.FC < ButtonProps> = ({
  children,
  variant = "primary",
  size = md,
  class_name = "",
  on_click,
  disabled = false,
  type = button,
  ...props;
}) => {
  const base_classes =;
    "inline - flex items - center justify - center rounded - md font - medium transition - colors focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:pointer - events - none disabled:opacity - 50";
  const variant_classes = {
    primary: bg - blue - 600 text - white hover:bg - blue - 700,
    secondary: "bg - gray - 200 text - gray - 900 hover:bg - gray - 300",
    outline: border border - gray - 300 bg - transparent hover:bg - gray - 50,
    ghost: "hover:bg - gray - 100"}
  const size_classes = {
    sm: h - 8 px - 3 text - xs,
    md: "h - 10 px - 4 py - 2",
    lg: h - 12 px - 8 text - lg}
  const classes = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${class_name}`;
  // Check condition
if ( {) {
  $2
}
    return React.clone_element (children as React.ReactElement, {
      class_name: classes,
      on_click,
      disabled,
      type,
      ...props});
  }
  return (
    <button;
      className={classes}
      on_click={on_click}
      disabled={disabled}
      type={type}
  onClick?: () => void;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  className?: string;
  disabled?: boolean;

=======
  type?: 'button | submit' | 'reset,
  icon?: React.ReactNode;
  iconPosition?: left' | 'right,
  style?: React.CSSProperties
}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
import React from "react";

>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
interface ButtonProps {

      {/* Shine effect for primary buttons */}
      {variant === primary' && (
        <div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 />
      )}

      {icon && iconPosition === left' && (
        <span className='mr-2 transition-transform duration-200 group-hover:scale-110>
          {icon}
        </span>
      )}

=======
      <span className=relative z-10'>{children}</span>
      {icon && iconPosition === 'right && (
        <span className=ml-2 transition-transform duration-200 group-hover:scale-110'>
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        {content}
      </Link>

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: classes
      onClick
      disabled
      type
      ...props
const Button: React.FC<ButtonProps> = ({
  children,
  variant = primary,
  size = "md",
  className = ,
  onClick,
  disabled = false,
  type = "button",
  asChild = false,
  ...props;
}) => {
  const baseClasses =;
    inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: bg-gray-200 text-gray-900 hover:bg-gray-300,
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
    ghost: hover:bg-gray-100}
  const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: h-10 px-4 py-2,
    lg: "h-12 px-8 text-lg"}
  class_name?: string;
  on_click?: () => void;
>>>>>>> origin/main
  disabled?: boolean;
  type?: 'button | submit' | 'reset';
}

  );
}
export default Button;"