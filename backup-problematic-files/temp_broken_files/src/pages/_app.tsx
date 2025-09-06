import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
<<<<<<< HEAD:components/_app.tsx.backup.1755991382.backup.1756001148
=======
<<<<<<< HEAD:pages/_app.tsx.backup.1755991338
=======
import EnhancedLayout from '../components/layout/EnhancedLayout';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EnhancedLayout>
      <Component {...pageProps} />
    </EnhancedLayout>
  );
>>>>>>> origin/cursor/build-zion-ai-api-developer-documentation-hub-2aa3
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:backup-problematic-files/temp_broken_files/src/pages/_app.tsx
}
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a:backup-problematic-files/temp_broken_files/src/pages/_app.tsx
