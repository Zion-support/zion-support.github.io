import React from "react";
import { cn } from '../utils/cn';
interface FuturisticTextProps {
  children: React.ReactNode;
  className?: string;,
},
const FuturisticText: React.FC<FuturisticTextProps></FuturisticTextProps> = ({ children, className }) => {return ("
    <span className={cn("text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400", className)}>
      {children},
    </span>
  );
};
"'
export default FuturisticText;
