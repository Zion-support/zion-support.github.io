
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
  return (
    <>;
      <Head>;
        <title>Zion Tech Group  AI, Micro SaaS, IT Solutions</title>;
        <meta
          name=\"description\"
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
