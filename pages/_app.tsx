import type { AppProps } from 'next/app';
import '../styles/globals.css';
import ModernLayout from '../components/layout/ModernLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModernLayout>
      <Component {...pageProps} />
    </ModernLayout>
  );
}