import React from 'react';';
}

export function Select({ children, className="",  value, onValueChange }) {;
    return (<select className={`${baseClasses} ${className}`} value={value} onChange={onChange} disabled={disabled}>;
      {children}
    </select>);
}

export function SelectItem({ children, value }) {;
    
      `} {...props}>;
      {children}
    </div>);
}

export function SelectValue({ placeholder }) {';
    return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}';
}

export function SelectContent({ children, className="" }) {;
    
    `}>;
      {children}
    </div>);
}';
}

export function SelectItem({ children, className="",  value, ...props }) {;
    
      `} data-value={value} {...props}>;
      {children}
    </div>);

'"