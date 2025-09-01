import type { AppProps } from 'next/app';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import defaultSeo from '../components/seo/DefaultSeoConfig';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EnhancedLayout>
      <Component {...pageProps} />
    </EnhancedLayout>
  );
}
