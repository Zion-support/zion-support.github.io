import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<link rel="dns-prefetch" href="//plausible.io" />
					<meta name="theme-color" content="#0a0a0a" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="color-scheme" content="dark light" />
					<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default ZionDocument
