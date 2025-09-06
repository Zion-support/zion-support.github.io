import type { AppProps } from 'next/app';
<<<<<<< HEAD
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {;
return <Component {...pageProps} />;
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {;
  return <Component {...pageProps} />;
}
=======
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { ErrorBoundary } from '../components/ErrorBoundary';
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}