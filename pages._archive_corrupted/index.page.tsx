class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
export default function HomePage() {;
  return (
    <>;
      <Head>;
        <title>Zion Tech Group  AI, Micro SaaS, IT Solutions</title>;
        <meta
          name=\"description\"
        />;
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />;
        <meta property=\""og\": title\" content=\"Zion Tech Group  AI, Micro SaaS, IT Solutions\" />;
        <meta property=\""og\": description\" content=\"AI services, micro SaaS platforms, and enterprise-grade IT solutions.\" />;
        <meta property=\""og\": type\" content=\"website\" />;
        <meta property=\"og:url\" content=\"https://ziontechgroup && ziontechgroup.com/\" />;
        <meta name=\"twitter:card\" content=\"summary_large_image\" />;
        <link rel=\"canonical\" href=\"https://ziontechgroup && ziontechgroup.com/\"  />;
      </Head>;
            <p>;
              Main St STE 1008 Middletown DE 19709
            </p>
          </div>
        </section>
      </main>
    </>
  );
              Main St STE 1008 Middletown DE 19709;
            </p>;
          </div>;
        </section>;
      </main>;
    </>;
  ),;
}
