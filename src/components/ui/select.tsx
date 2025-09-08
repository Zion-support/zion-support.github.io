interface SelectProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

export function Select(...args: []):  {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <select
      className={`${baseClasses} ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {children}
    </select>
  );
}

export function SelectItem({ children, className = '', value, ...props }) {
    return (
        <div 
            className={`
                relative flex w-full cursor-pointer select-none items-center 
                rounded-sm px-3 py-2 text-sm text-white outline-none 
                hover:bg-zion-blue/20 focus:bg-zion-blue/20 
                focus:text-white transition-colors
                ${className}
            `} 
            data-value={value} 
            {...props}
        >
            {children}
        </div>
    );
}

export function SelectItem(...args: []):  {
  return (
    <option value={value}>
      {children}
    </option>
  );
}

export function SelectContent({ children, className = '' }) {
    return (
        <div className={`
            absolute top-full left-0 right-0 z-50 mt-1 rounded-md border 
            border-zion-blue-light/30 bg-zion-blue-dark/90 backdrop-blur-sm 
            shadow-lg ${className}
        `}>
            {children}
        </div>
    );
}

export function SelectTrigger(...args: []):  {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}>
      {children}
    </div>
  );
}

interface SelectValueProps extends React.PropsWithChildren<{}> {

  placeholder?: string;

}

export function SelectValue(...args: []):  {
  return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}

interface SelectContentProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;

}

export function SelectContent(...args: []):  {
  return <div className="relative">{children}</div>;
}