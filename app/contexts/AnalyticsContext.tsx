  trackPageView: (pageName: string) => void
  setUser: (userId: string, properties?: Record<string, any>) => void
  isEnabled: boolean }
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
const  ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  useEffect(() => {
    // if analytics is enabled
    setIsEnabled(true)}, [])
    // if analytics is enabled;
    setIsEnabled(true);}
    trackPageView,
    setUser,
    isEnabled, }
    isEnabled,}
  return (
    <AnalyticsContext.Provider value={value}>
      { children }
    </AnalyticsContext.Provider>
    </AnalyticsContext.Provider>
  )
export { AnalyticsContext }
