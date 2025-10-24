<<<<<<< HEAD:all-pages-backup/components/AnalyticsProvider.tsx
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(;
  undefined
)

export const useAnalytics = () => {;
  const context = useContext(AnalyticsContext);
<<<<<<< HEAD:all-pages-backup/components/AnalyticsProvider.tsx
  consttrackEvent= (
    eventName: string
    parameters?: Record<string, unknown>
  ) => {
<<<<<<< HEAD:all-pages-backup/components/AnalyticsProvider.tsx
        page_title: pageName,
  page_location: window.location.href
<<<<<<< HEAD:all-pages-backup/components/AnalyticsProvider.tsx
{};

export default AnalyticsProviderPage
