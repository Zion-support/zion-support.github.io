import React from 'react';

interface TabsProps {
=======
import React from 'react';

interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

interface TabsListProps {
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  children: React.ReactNode;
  className?: string;
=======
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  value?: string;
  onValueChange?: (value: string) => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
const Tabs: React.FC<TabsProps> = ({ children, className = '', value, onValueChange, defaultValue }) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  
  const contextValue: TabsContextType = {
    value: value || internalValue,
    onValueChange: onValueChange || setInternalValue,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={`${className}`}>
=======
export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

const TabsContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
} | undefined>(undefined);

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
  ...props
}) => {
  const [currentValue, setCurrentValue] = React.useState(value || defaultValue || '');

  React.useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value);
    }
  }, [value]);

  const handleValueChange = (newValue: string) => {
    setCurrentValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <div className={cn('w-full', className)} {...props}>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList: React.FC<TabsProps> = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}>
      {children}
    </div>
  );
}

=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
interface TabsTriggerProps {
>>>>>>> origin/cursor/build-and-fix-errors-e276
  children: React.ReactNode;
  className?: string;
}

const TabsList: React.FC<TabsListProps> = ({ children, className = '' }) => {
=======
export const TabsList: React.FC<TabsListProps> = ({ children, className, ...props }) => {
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  return (
    <div
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

<<<<<<< HEAD
interface TabsTriggerProps {
  children: React.ReactNode;
<<<<<<< HEAD
  className?: string;
  value: string;
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
}

const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, className = '', value }) => {
  const context = useContext(TabsContext);
  
  const isActive = context?.value === value;
  
  const handleClick = () => {
    context?.onValueChange(value);
  };

  return (
    <button 
      onClick={handleClick}
      data-state={isActive ? 'active' : 'inactive'}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`}
=======
export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, className, ...props }) => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }

<<<<<<< HEAD
  const isActive = context.value === value;

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'bg-background text-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground',
        className
      )}
      onClick={() => context.onValueChange(value)}
      {...props}
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
    >
      {children}
    </button>
  );
};

<<<<<<< HEAD
interface TabsContentProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

const TabsContent: React.FC<TabsContentProps> = ({ children, className = '', value }) => {
  const context = useContext(TabsContext);
  
  if (context?.value !== value) {
    return null;
  }

=======
export const TabsContent: React.FC<TabsContentProps> = ({ value, children, className, ...props }) => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }

  if (context.value !== value) {
    return null;
  }

>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  return (
    <div
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
