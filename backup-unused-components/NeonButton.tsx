import React from "react";
import { ArrowRight } from "lucide-react";
interface NeonButtonProps 
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  disabled?: boolean;

  variant = "primary",
  size = "md",
  className = "",
//   icon,
  disabled = false,
) => 
  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  const neonEffect =
    "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10";
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;
  const content = (
//     <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
  );
  if (href) 
    return (
      <a href="{href}" className="{buttonClasses}"></a>
        {content}
</a>
    );

  return (
    <button onClick="{onClick}" disabled="{disabled}" className="{buttonClasses}"></button>
      {content}
</button>
  );
;
export default NeonButton;
</ArrowRight>
</NeonButtonProps>