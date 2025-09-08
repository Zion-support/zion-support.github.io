import type { AppProps } from 'next/app';
import SiteLayout from '../components/layout/SiteLayout';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}