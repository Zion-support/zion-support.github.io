
interface TabsContextType {

  activeTab: string;
  setActiveTab: (tab: string)  => void}


interface TabsProps extends React.PropsWithChildren<{}> {

  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string)  => void;
  className?: string}

export function Tabs({ children, defaultValue, value, onValueChange, className = '' }: TabsProps) {;
  const [activeTab, setActiveTab] = useState(value || defaultValue || '');

  
    setActiveTab(tab);
    if (onValueChange) {
      onValueChange(tab)}
  };

  return (
    <TabsContext.Provider value = {
  { activeTab,
  setActiveTab: handleTabChange 



;
}}>;
      <div className={className}>;
        {children};
      </div>;
    </TabsContext.Provider>;
  )}

  children: ReactNode;
  className?: string}

}

  children: ReactNode;
  value: string;
  className?: string}

      } ${className}`};
      onClick={() => context.setActiveTab(value)};
    >;
      {children};
    </button>;
  )}

  children: ReactNode;
  value: string;
  className?: string}

    return null}

  return (
    <div className = {`mt-4 ${className}`}>;
      {children};
    </div>;
  )}
