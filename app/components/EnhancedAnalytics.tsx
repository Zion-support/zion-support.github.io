
      interface AnalyticsContextType {},
      track: (_event: string, properties?: Record<string, _unknown>) => void,
      identify: (_userId: string, traits?: Record<string, _unknown>) => void,
      page: (_name: string, properties?: Record<string, _unknown>) => void
interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void
  identify: (userId: string, traits?: Record<string, unknown>) => void
  page: (name: string, properties?: Record<string, unknown>) => void

  }
  return context

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
}) => {
  useEffect(() => {

    // Initialize analytics
script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`
        document.head.appendChild(script)
        (window as any).dataLayer = (window as any).dataLayer || []
      }


  }, []),
      const: track = (_event: string, properties?: Record<string, _unknown>) => {},
      if (typeof window !== "undefined") {}"
if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {};"
        (_window as unknown as { gtag: (...args: unknown[]) => void }).gtag()"
"
          "event","
"
const Page = () => {"
  return ("
    <div className="min-h-screen bg-gray-50 py-12">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">"
            Service Page"
          </h1>"
          <p className="text-xl text-gray-600">"
  );"
"
"