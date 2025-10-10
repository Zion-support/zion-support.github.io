import '../styles/globals.css';

<<<<<<< HEAD
export default function App({ Component, pageProps }: AppProps) {
  return(<>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>)
      <Component {...pageProps} />)
    </>)
=======
export default function App({ Component, pageProps }: AppProps) {/* TODO: Fix JSX expression */}
      <Component {...pageProps} /></Component>
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  );
}
