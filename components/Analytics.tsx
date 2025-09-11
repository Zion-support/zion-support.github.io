import React, { useEffect } from 'react';
import Head from 'next/head';

interface AnalyticsProps {
  tracking_id?: string;
}

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }
  
  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if ((this.state as any).hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

const Analytics: React.FC<AnalyticsProps> = ({ tracking_id = 'G-XXXXXXXXXX' }) => {
  useEffect(() => {
    // Google Analytics initialization
    if (typeof window !== 'undefined' && tracking_id) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${tracking_id}`;
      document.head.appendChild(script);

      const configScript = document.createElement('script');
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${tracking_id}');
      `;
      document.head.appendChild(configScript);
    }
  }, [tracking_id]);

  return (
    <ErrorBoundary>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${tracking_id}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${tracking_id}');
            `,
          }}
        />
      </Head>
    </ErrorBoundary>
  );
};

export default Analytics;