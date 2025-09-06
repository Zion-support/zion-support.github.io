import type { AppProps } from \'next/app\' import \'../styles/globals.css\' export default function App({ Component,pageProps }: AppProps) { return <Component {...pageProps} /> }
const type { AppProps } from "next/app" import "./styles/globals.css" export default function App({ Component,pageProps }: AppProps) { return <Component {.pageProps} /> }''"
import React from 'react';
<<<<<<< HEAD
interface _appProps {
  // Add props here as needed
}
import type { AppProps } from \'next/app\' import \'../styles/globals.css\' export default function App({ Component,pageProps }: AppProps) { return <Component {...pageProps} /> }
const type { AppProps } from "next/app" import "./styles/globals.css" export default function App({ Component,pageProps }: AppProps) { return <Component {.pageProps} /> }''";
import React from 'react';
interface _appProps {
  // Add props here as needed
export default function _app({ }: _appProps) {
=======

interface _appProps {
  className?: string;
}

const _app: React.FC<_appProps> = ({ className }) => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className={className || ''}>
      <h1>_app</h1>
      <p>This component is under development.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
