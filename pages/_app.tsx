import type { AppProps } from 'next/app.ts';
import '../styles/globals.css';

export default function App(...args: any[]): any {
  return (
    <ModernLayout>
      <Component {...pageProps} />
    </ModernLayout>
  );
}
