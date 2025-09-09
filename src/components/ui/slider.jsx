import React from 'react';

export function Slider({ 
    ariaLabel, 
    defaultValue = [0, 100], 
    min = 0, 
    max = 100, 
    step = 1, 
    value, 
    onValueChange, 
    className = '' 
}) {
    const handleChange = (e) => {
        const newValue = parseInt(e.target.value);
        if (onValueChange) {
            onValueChange([newValue, value ? value[1] : defaultValue[1]]);
        }
    };

    const handleSecondChange = (e) => {
        const newValue = parseInt(e.target.value);
        if (onValueChange) {
            onValueChange([value ? value[0] : defaultValue[0], newValue]);
        }
    };

    const currentValue = value || defaultValue;

    return (
        <div className={`space-y-4 ${className}`}>
            <div className="flex justify-between text-sm text-gray-600">
                <span>${min}</span>
                <span>${max}</span>
            </div>
            <div className="relative">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={currentValue[0]}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    aria-label={`${ariaLabel} min`}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={currentValue[1]}
                    onChange={handleSecondChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider mt-2"
                    aria-label={`${ariaLabel} max`}
                />
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-blue-600 font-medium">${currentValue[0]}</span>
                <span className="text-blue-600 font-medium">${currentValue[1]}</span>
            </div>
        </div>
    );
}