import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}
<<<<<<< HEAD
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}
export default function Layout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation",
  ogImage = "https: //ziontechgroup.com/og-image.jpg";,
  ogTitle,
  ogDescription,
  ogUrl
}: LayoutProps) {
<<<<<<< HEAD
  const [sidebarOpen, setSidebarOpen] = useState(false);


=======

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Something went wrong.
            </h1>
            <p className="text-gray-600">
              Please refresh the page or try again later.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function Layout({ 
  children, 
  title = 'Zion Tech Group', 
  description = 'Leading technology solutions and innovation' 
}: LayoutProps) {
  return (
    <ErrorBoundary>
      <div className="font-sans">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default Layout;