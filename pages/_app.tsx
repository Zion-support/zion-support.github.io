import type { AppProps } from 'next/app';
import '../styles/globals.css';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import EnhancedFooter from '../components/layout/EnhancedFooter';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <EnhancedNavigation />
      <Component {...pageProps} />
      <EnhancedFooter />
    </>
  );
}