import type { AppProps } from 'next/app';
import '../src/index.css';
import { AppLayout } from '@/layout/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	);
}
