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
