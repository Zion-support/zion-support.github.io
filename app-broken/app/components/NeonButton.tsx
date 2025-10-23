import React from &quot;react&quot;
import { ArrowRight } from &quot;lucide-react&quot;
interface NeonButtonProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  variant?: &quot;primary&quot; | &quot;secondary&quot; | &quot;accent&quot;;
  size?: &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  href,
  onClick,
  variant = &quot;primary&quot;,
  size = &quot;md&quot;,
  className = &quot;",
  icon,
  disabled = false
}) => {
  const baseClasses =
    &quot;relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100&quot;;

  const sizeClasses = {
    sm: &quot;px-4 py-2 text-sm&quot;,
    md: &quot;px-6 py-3 text-base&quot;,
    lg: &quot;px-8 py-4 text-lg&quot;
  };

  const variantClasses = {
    primary:
      &quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25 hover:shadow-2xl&quot;,
    secondary:
      &quot;bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl&quot;,
    accent:
      &quot;bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl&quot;
  };

  const neonEffect =
    &quot;before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10&quot;;

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;

  const content = (
    <div></div>
      {icon && <span className=&quot;mr-2&quot;>{icon}</span>}
      {children}
      {!icon && <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />}
    </div>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>
      {content}
    </button>
  );
};

export default NeonButton;