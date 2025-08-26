import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content="#111827" />
					<meta name="color-scheme" content="light dark" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="canonical" href="https://ziontechgroup.com/" />
					<meta property="og:site_name" content="Zion Tech Group" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://ziontechgroup.com/" />
					<meta property="og:title" content="Zion Tech Group" />
					<meta property="og:description" content="Real Micro SaaS, IT, and AI services by Zion Tech Group." />
				</Head>
				<body>
					<a href="#main" style={{position:'absolute',left:-10000,top:'auto',width:1,height:1,overflow:'hidden'}}>Skip to content</a>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument