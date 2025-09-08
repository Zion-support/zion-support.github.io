import React from 'react';
import { cn } from '@/lib/utils';

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, min = 0, max = 100, step = 1, value, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      onChange?.(newValue);
    };

    return (
      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className={cn(
          "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider",
          className
        )}
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((value || 0) - min) / (max - min) * 100}%, #e5e7eb ${((value || 0) - min) / (max - min) * 100}%, #e5e7eb 100%)`
        }}
        {...props}
      />
    );
  }
);
Slider.displayName = "Slider";

export { Slider };