import React from 'react';
import Head from 'next/head';
import Layout from './components/layout/MainLayout';

export default function TestSyntax() {
  return (
    <MainLayout>
      <Head>
        <title>Test Syntax</title>
      </Head>
      <div>
        <h1>Test</h1>
      </div>
    </MainLayout>
  );
}