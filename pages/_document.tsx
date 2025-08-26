import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static override async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<meta name="theme-color" content="#000000" />
					<meta name="color-scheme" content="dark light" />
					<meta name="format-detection" content="telephone=no" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<link rel="dns-prefetch" href="https://plausible.io" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
					<link rel="apple-touch-icon" href="/favicon.svg" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
