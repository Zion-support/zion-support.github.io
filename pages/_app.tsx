import type { AppProps } from 'next/app.ts';
import '../styles/globals.css';
import ModernLayout from '../components/layout/ModernLayout';

export default function App(...args: any[]): any {
  return (
    <ModernLayout>
      <Component {...pageProps} />
    </ModernLayout>
  );
}
