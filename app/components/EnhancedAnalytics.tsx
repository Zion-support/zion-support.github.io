
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>

// Extend Window interface for TypeScript
declare global {
  interface Window {

export default function AiCrmPage() {
  return (
    <>
      
      </div>
    </>
  );
=======
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
>>>>>>> 9dec2721a0f50ac14397b8d140dbd45d3cfacd15
