import React from 'react';

export default function Home() {
export const metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Professional page services by Zion Tech Group',
  keywords: 'page, technology, services',
  openGraph: {
    title: 'Page | Zion Tech Group',
    description: 'Professional page services by Zion Tech Group',
    type: 'website',
  },
};
import { ErrorBoundary } from './components/ErrorBoundary'


;
import Head from 'next/head'



import Footer from '../components/Footer'




function Page() {
  return (
    <div>
      <h1>Welcome to Zion Tech Group</h1>
      <p>AI-Powered Business Solutions</p>
    </div>
  )
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <PageComponent {...props} />
    </ErrorBoundary>
  );
}