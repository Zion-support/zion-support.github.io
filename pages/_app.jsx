import '../styles/globals.css'
import Layout from '../components/Layout'
import PerformanceMonitor from '../components/PerformanceMonitor'
import AccessibilityHelper from '../components/AccessibilityHelper'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AccessibilityHelper />
      <Component {...pageProps} />
      <PerformanceMonitor />
    </Layout>
  )
}

export default MyApp

