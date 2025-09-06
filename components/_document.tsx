import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document',

export default function Document() {
  return (
    <Html lang=&quot;en&quot;>
import Document, {_Html, _Head, _Main, _NextScript, _DocumentContext} from 'next/document';

export default function Document() {_return (
    <Html lang="en">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )}
