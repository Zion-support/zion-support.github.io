<<<<<<< HEAD
import Document{ HtmlHeadMainNextScriptDocumentContext } from 'next/document';
=======
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
>>>>>>> origin/auto/autonomy-17186719616

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
<<<<<<< HEAD
        <meta name="viewport" content="width=device-widthinitial-scale=1viewport-fit=cover" />
=======
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
>>>>>>> origin/auto/autonomy-17186719616
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
