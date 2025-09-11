<<<<<<< HEAD
import React from 'react';

interface GradientHeadingProps {
  text: string;
  className?: string;
}

export const GradientHeading: React.FC<GradientHeadingProps> = ({ 
  text, 
  className = '' 
}) => {
  return (
    <h1 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent ${className}`}>
      {text}
    </h1>
  );
};
=======
import { cn } from "@/lib/utils";
import React from "react";
export function GradientHeading({ children, className, level = "h2", id }) {
    const Tag = level;
    return (<Tag id={id} className = {
  cn("text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",
  className)

}>
      {children}
    </Tag>)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
