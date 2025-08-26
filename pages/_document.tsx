import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="color-scheme" content="light dark" />
					{/* Removed external Google Fonts; using next/font in _app */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument