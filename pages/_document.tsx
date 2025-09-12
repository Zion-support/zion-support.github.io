import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // Minimal client scripts
    const themeScript = `(() => {
      try {
        var theme = localStorage.getItem('theme');
        var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
        var className = isDark ? 'dark' : 'light';
        var root = document.documentElement;
        root.classList.add(className);
        root.setAttribute('data-theme', className);
      } catch(e) {}
    })();`;

    const loaderTimeoutScript = `setTimeout(function(){
      var el = document.getElementById('initial-loader');
      if (el) el.style.display = 'none';
    }, 10000);`;

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
