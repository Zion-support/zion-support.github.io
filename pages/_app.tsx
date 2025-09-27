import '../styles/animations.css';
import '../src/styles/accessibility.css';
import '../src/styles/improvements.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // Register service worker for performance optimization
  return <Component {...pageProps} />;
}