import ErrorBoundary from '../components/ErrorBoundary';


import Head from 'next/head';


import Footer from '../components/Footer';





export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
}
