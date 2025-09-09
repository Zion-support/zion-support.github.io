import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const themeScript = `(() => {try {var t=localStorage.getItem('theme');var d=t==='dark'||(t==='system'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);var c=d?'dark':'light';var r=document.documentElement;r.classList.add(c);r.setAttribute('data-theme',c);} catch(e) {}})();`;
    const loaderTimeoutScript = `setTimeout(function(){var el=document.getElementById('initial-loader');if(el) el.style.display='none';},10000);`;

    return (
      <Html lang="en">
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
          <script dangerouslySetInnerHTML={{ __html: loaderTimeoutScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
