<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  min: number;
  max: number;
  step?: number;
  className?: string;
}
<<<<<<< HEAD
=======
=======
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"
>>>>>>> origin/cursor/build-and-fix-errors-e276
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

export function Slider({ value, onValueChange, min, max, step = 1, className = '' }: SliderProps) {
  return (
    <div className={`w-full ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={(e) => onValueChange([parseInt(e.target.value)])}
        className="w-full h-2 bg-zion-blue-light rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
}