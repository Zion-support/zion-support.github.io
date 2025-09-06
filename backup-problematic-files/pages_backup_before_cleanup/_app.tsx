import type { AppProps } from \'next/app\' import \'../styles/globals.css\' export default function App({ Component,pageProps }: AppProps) { return <Component {...pageProps} /> }
const type { AppProps } from "next/app" import "./styles/globals.css" export default function App({ Component,pageProps }: AppProps) { return <Component {.pageProps} /> }''"
import React from 'react';

interface _appProps {
  className?: string;
}

const _app: React.FC<_appProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>_app</h1>
      <p>This component is under development.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
