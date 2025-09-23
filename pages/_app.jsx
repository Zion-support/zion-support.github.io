import '../styles/globals.css'
import PerformanceMonitor from '../components/PerformanceMonitor'
import AccessibilityHelper from '../components/AccessibilityHelper'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AccessibilityHelper />
      <Component {...pageProps} />
      <PerformanceMonitor />
    </>
  )
}

export default MyApp

