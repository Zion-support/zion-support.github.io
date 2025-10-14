import React from "react";
import { Helmet } from "react-helmet-async";

const FuturisticText: React.FC<FuturisticTextProps> = ({ children, className }) => {
  return (
    <span className={cn("text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400", className)}>
      {children}
    </span>
  );
};

export default FuturisticText;
