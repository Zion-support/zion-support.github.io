<<<<<<< HEAD
import React from 'react';

interface NeonButtonProps {
=======
import React from "react";
import { ArrowRight } from "lucide-react";
interface NeonButtonProps;
  children?: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode;
}
=======
  title?: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  disabled?: boolean;

<<<<<<< HEAD
const NeonButton: React.FC<NeonButtonProps> = (
  children,
  href,
  onClick,
=======
const NeonButton: React.FC<NeonButtonProps> = ({
//   children,
//   href,
//   onClick,
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  variant = "primary",
  size = "md",
  className = "",
//   icon,
  disabled = false,
) => 
  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
<<<<<<< HEAD
  const sizeClasses = 
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
;
  const variantClasses = 
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25 hover:shadow-2xl",
    secondary:
      "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl",
    accent:
      "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl",
;
=======

  const sizeClasses = {
//     sm: "px-4 py-2 text-sm",
//     md: "px-6 py-3 text-base",
//     lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
//     primary:
//       "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25 hover:shadow-2xl",
//     secondary:
//       "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl",
//     accent:
//       "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl",
  };

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  const neonEffect =
    "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10";
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;
  const content = (
//     <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
<<<<<<< HEAD
      {!icon && <ArrowRight className="w-5 h-5 ml-2" />}</ArrowRight>
    </>
=======
      {!icon && <ArrowRight className="w-5 h-5 ml-2" />}
//     </>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  );
  if (href) 
    return (
      <a href="{href}" className="{buttonClasses}"></a>
        {content}
</a>
    );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f

export default function NeonButton({ className = '', children }: NeonButtonProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
    <button onClick="{onClick}" disabled="{disabled}" className="{buttonClasses}"></button>
      {content}
</button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  );
}