import type { AppProps } from \'next/app\' import \'../styles/globals.css\' export default function App({ Component,pageProps }: AppProps) { return <Component {...pageProps} /> }
const type { AppProps } from "next/app" import "./styles/globals.css" export default function App({ Component,pageProps }: AppProps) { return <Component {.pageProps} /> }''"
import React from 'react';

<<<<<<< HEAD
=======
interface _appProps {
  className?: string;
}

const _app: React.FC<_appProps> = ({ className }) => {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <div className={className || ''}>
      <h1>_app</h1>
      <p>This component is under development.</p>
    </div>
  );

