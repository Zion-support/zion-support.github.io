import type { AppProps } from \'next/app\' import \'../styles/globals.css\' export default function App({ Component,pageProps }: AppProps) { return <Component {...pageProps} /> }
const type { AppProps } from "next/app" import "./styles/globals.css" export default function App({ Component,pageProps }: AppProps) { return <Component {.pageProps} /> }''"
import React from 'react';
interface _appProps {
  // Add props here as needed
}
export default function _app({ }: _appProps) {
  return (
    <div>
      <h1>_app</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}