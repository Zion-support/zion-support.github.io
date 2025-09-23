import '../styles/globals.css'
import PerformanceMonitor from '../components/PerformanceMonitor'
import AccessibilityHelper from '../components/AccessibilityHelper'
import PerformanceOptimizer from '../components/PerformanceOptimizer'
import AccessibilityEnhancer from '../components/AccessibilityEnhancer'
import ErrorBoundary from '../components/ErrorBoundary'

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <AccessibilityHelper />
      <AccessibilityEnhancer />
      <PerformanceOptimizer />
      <Component {...pageProps} />
      <PerformanceMonitor />
    </ErrorBoundary>
  )
}

export default MyApp

