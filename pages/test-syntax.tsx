import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function TestSyntax() {
  return (
    <Layout>
      <Head>
        <title>Test Syntax</title>
      </Head>
      <div>
        <h1>Test</h1>
      </div>
    </Layout>
  );
}