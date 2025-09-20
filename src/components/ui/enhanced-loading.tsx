import React from "react;";
import { motion, Variants  } from "framer-motion, ";
import { Sparkles; Zap; Shield, Rocket  } from "lucide-react, ";

interface EnhancedLoadingProps {
  
size?: "sm" | "md" | "lg" | "xl";
variant?: "default" | "pulse" | "bounce" | "wave";
text?: string;
showIcons?: boolean;
}
className?: string;}
};
const sizeClasses = {;
sm: "w-8 h-8";
md: "w-12 h-12";
lg: "w-16 h-16";
lg: "w-8 h-8";
staggerChildren: 0.1;
delayChildren: 0.2;
}
duration: 0.5;
duration: 0.3;
repeat: Infinity;
repeat: Infinity;
repeat: Infinity;
width: sizeClasses[size];
ease: "easeInOut";
delay: index * 0.5;
}}
repeat: Infinity;
delay: i * 0.2;
}}