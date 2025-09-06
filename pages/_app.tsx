import React from 'react';
import type { AppProps } from 'next/app';
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;

import '../styles/globals.css';

export default function App(): any ({ Component, pageProps }: AppProps) {;
  return <Component {...pageProps} />;

import Layout from '../components/layout/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  );
import type { AppProps } from 'next / app';
import '../src / styles / globals.css';

export default /**
 * App - Function description
 */
function App() {
return <Component {...page_props} />;
import '../styles / globals.css';

export default /**
 * App - Function description
 */
function App() {
  return <Component {...page_props} />;
