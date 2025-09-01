
interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string)  => void}

  activeTab: string;
  setActiveTab: tab: string void
}
;
const TabsContext = createContext<TabsContextType | null>(null);