import * as React from "react"
import { cn } from "@/lib/utils"

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, min = 0, max = 100, step = 1, value, defaultValue, onValueChange, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value ?? defaultValue ?? min);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setInternalValue(newValue);
      onValueChange?.(newValue);
    };

    return (
      <div className="relative w-full">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value ?? internalValue}
          onChange={handleChange}
          className={cn(
            "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    )
  }
)
Slider.displayName = "Slider"

export { Slider }