import React from 'react';
import { cn } from '@/lib/utils';
export const Steps = ({ children, className, currentStep = 0 }) => {
    return (<div className={cn("flex items-center space-x-2", className)}>
      {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    isActive: index === currentStep,
                    isCompleted: index < currentStep,
                });
            }
            return child;
        })}
    </div>);
};
export const Step = ({ children, className, isActive, isCompleted }) => {
    return (<div className={cn("flex items-center space-x-2", isActive && "text-primary", isCompleted && "text-green-600", className)}>
      <div className={cn("flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium", isActive && "border-primary bg-primary text-white", isCompleted && "border-green-600 bg-green-600 text-white", !isActive && !isCompleted && "border-gray-300 text-gray-500")}>
        {isCompleted ? "✓" : children}
      </div>
    </div>);
};
