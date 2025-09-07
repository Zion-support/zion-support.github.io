import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="Zion Tech Group builds autonomous innovation systems and advanced technology solutions." />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Zion Tech Group" />
					<link rel="icon" href="/favicon.svg" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
					<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
					<link rel="dns-prefetch" href="https://fonts.gstatic.com" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}