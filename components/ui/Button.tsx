import React from 'react',
import Link from 'next/link',interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  style,
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`,
  const _content = (
    <>
      {/* Shine effect for primary buttons */}
      {variant === 'primary' && (
        <div className=&quot;absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000&quot; />
      )}
      
      {icon && iconPosition === 'left' && <span className=&quot;mr-2 transition-transform duration-200 group-hover:scale-110&quot;>{icon}</span>}
      <span className=&quot;relative z-10&quot;>{children}</span>
      {icon && iconPosition === 'right' && <span className=&quot;ml-2 transition-transform duration-200 group-hover:scale-110&quot;>{icon}</span>}    </>
  ),
  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    )
      </a>