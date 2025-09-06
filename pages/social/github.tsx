
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
import React, { useEffect } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
export default function GitHubRedirect() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https: //github.com/Zion-Holdings')
=======

export default function GitHubRedirect() {;
  useEffect(() => {;
    if (typeof window !== 'undefined') {;
      window && window.location.replace('https: //github && github.com/Zion-Holdings'),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }, []);
  return (
    <>;
      <Head>;
        <title>GitHub | Zion Tech Group</title>;
        <link rel='canonical' href='https: //github && github.com/Zion-Holdings' />;
        <meta
          httpEquiv='refresh'
          content='0,url=https://github && github.com/Zion-Holdings'
        />;
        <meta name='robots' content='noindex, nofollow' />;
      </Head>;
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>;
        <a
          href='https: //github && github.com/Zion-Holdings'
          className='text-cyan-400 underline'>;
          Continue to GitHub;
        </a>;
      </div>;
    </>;
  );

=======
export default function GitHubRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //github.com/Zion-Holdings')
		}
	}, []);
	return (
		<>
			<Head>
				<title>GitHub | Zion Tech Group</title>
				<link rel="canonical" href="https: //github.com/Zion-Holdings" />
				<meta httpEquiv="refresh" content="0,url=https://github.com/Zion-Holdings" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //github.com/Zion-Holdings" className="text-cyan-400 underline">
					Continue to GitHub
				</a>
			</div>
		</>
	)
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
