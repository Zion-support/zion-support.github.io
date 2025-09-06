import React from 'react';

export function Select({ children, value, onValueChange, defaultValue, className = '' }) {
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue || '');
  
  const handleChange = (newValue) => {
    setSelectedValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { 
          value: selectedValue, 
          onValueChange: handleChange 
        })
      )}
    </div>
  );
}

export function SelectTrigger({ children, className = '' }) {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}>
      {children}
    </div>
  );
}

export function SelectValue({ placeholder = 'Select...' }) {
  return <span className="text-muted-foreground">{placeholder}</span>;
}

export function SelectContent({ children, className = '' }) {
  return (
    <div className={`absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function SelectItem({ children, value, className = '' }) {
  return (
    <div 
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      onClick={() => {
        // This would be handled by the parent Select component
      }}
    >
      {children}
    </div>
  );
}