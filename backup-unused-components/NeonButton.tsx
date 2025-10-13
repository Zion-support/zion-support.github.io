import React from 'react';
interface NeonButtonProps {
import React from "react"lucide-react";
interface NeonButtonProps;
  children?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}
  title?: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  variant?: " | "secondary"accent";
  size?: " | "md"lg";
  icon?: React.ReactNode;
  disabled?: boolean;

const NeonButton: React.FC<NeonButtonProps> = (
  children,
  href,
  onClick,
const NeonButton: React.FC<NeonButtonProps> = ({
//   children,
//   href,
//   onClick,
  variant = ",
  size = "md""relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"px-4 py-2 text-sm",
      md: ",
      lg: "px-8 py-4 text-lg"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25 hover:shadow-2 xl",
      secondary:
      ",
      accent:
      "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2 xl"px-4 py-2 text-sm",
//     md: ",
//     lg: "px-8 py-4 text-lg"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25 hover:shadow-2 xl",
//     secondary:
//       ",
//     accent:
//       "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2 xl"before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10";
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;
  const content = (
//     <>
      {icon && <span className="w-5 h-5 ml-2" />}</ArrowRight>
    </>
      {!icon && <ArrowRight className="{href}" className="{onClick}" disabled=" className="{buttonClasses}"></button>
      {content}
</button>
className?: string;

export default function NeonButton({ className = '', children }: NeonButtonProps) {
  return (
  );
