import React from 'react';
import type { AppProps } from 'next/app';
<<<<<<< HEAD
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {;
return <Component {...pageProps} />;
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
}
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {;
  return <Component {...pageProps} />;
}
=======
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-e10e
=======
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  return <Component {...pageProps} />;
import '../styles/globals.css';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import '../styles/globals.css';

<<<<<<< HEAD
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
}
=======
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
}
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}