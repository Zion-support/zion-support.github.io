





export default function TestPage() {
  return (


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

export default function TestPage() {
  return (
    <Layout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </Layout>
export default function TestPage() {;
  return (
    <Layout title="Test Page">;
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">;
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>;
      </div>;
    </Layout>;


  );
}

export default function TestPage() {;
  return (

    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>




  );
    </>;
);
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>
      </div>
    </>
  )
}
    <>;
      <Head>;
        <title>Test Page | Zion Tech Group</title>;
      </Head>;
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>;
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>;
      </div>;
    </>;
  );
      <div className="min-h-screen bg-black text-white flex items-center justify-center">;
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>;
      </div>;
    </>;
  );

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


}
import React from 'react';
import Layout from '../components / Layout';
;
export default /**
 * TestPage - Function description
 */
function TestPage() {
  return (
    <Layout title="Test Page">;
      <div className="min - h-screen bg - gray - 100 flex items - center justify - center">;
        <h1 className="text - 4xl font - bold text - gray - 900">Test Page</h1>;
      </div>;
    </Layout>);
}
export default /**
 * TestPage - Function description
 */
function TestPage() {
  return (
    <>;
      <Head>;
        <title > Test Page | Zion Tech Group</title>;
      </Head>;
      <div className='min - h-screen bg - black text - white flex items - center justify - center'>;
        <h1 className='text - 4xl font - bold text - cyan - 400'>Test Page Working</h1>;
      </div>;
    </>);
      <div className="min - h-screen bg - black text - white flex items - center justify - center">;
        <h1 className="text - 4xl font - bold text - cyan - 400">Test Page Working</h1>;
      </div>;
    </>);
}
