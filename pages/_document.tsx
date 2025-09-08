import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a1a" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}