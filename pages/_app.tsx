import type { AppProps } from 'next/app';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import { TenantProvider } from '../components/multiverse/TenantProvider';
import { getServerSideTenant } from '../utils/tenant';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EnhancedLayout>
      <Component {...pageProps} />
    </EnhancedLayout>
  );
}

export default MyApp;
