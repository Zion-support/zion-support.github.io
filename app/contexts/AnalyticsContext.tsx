
>>>>>>> origin/main
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

  const [isEnabled, setIsEnabled] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    // Check if analytics is enabled
    setIsEnabled(true)
  }, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isEnabled) return}
    // Track event logic here
=======
>>>>>>> 3d33b64448bdb81cd2984819501ea4fc0c6fb47c
    console.log('Analytics Event:', eventName, properties)
  }

  const trackPageView = (pageName: string) => {
    if (!isEnabled) return}
    // Track page view logic here
    console.log('Page View:', pageName)
  }

  const setUser = (newUserId: string, properties?: Record<string, any>) => {
    if (!isEnabled) return}
    
    setUserId(newUserId)
    console.log('User Set:', newUserId, properties)
  }
>>>>>>> origin/main

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    isEnabled,
  }

=======
    isEnabled,}
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
;
>>>>>>> origin/main;
