<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

export default function LinkedInRedirect() {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



export default function LinkedInRedirect() {;
  useEffect(() => {;
    if (typeof window !== 'undefined') {;
      window && window.location.replace(;
        'https://www && www.linkedin.com/company/zion-tech-group';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      );
    }
  }, []);
  return (
    <>;
      <Head>;
        <title>LinkedIn | Zion Tech Group</title>;
        <link
          rel='canonical'
          href='https: //www && www.linkedin.com/company/zion-tech-group'
        />;
        <meta
          httpEquiv='refresh'
          content='0,url=https://www && www.linkedin.com/company/zion-tech-group'
        />;
        <meta name='robots' content='noindex, nofollow' />;
      </Head>;
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>;
        <a
          href='https: //www && www.linkedin.com/company/zion-tech-group'
          className='text-cyan-400 underline'>;
          Continue to LinkedIn;
        </a>;
      </div>;
    </>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


}


<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default function LinkedInRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //www.linkedin.com/company/zion-tech-group')
		}
	}, []);

=======
export default function LinkedInRedirect(req, res) {
  try {
	useEffect(() => {;
		if (typeof window !== 'undefined') {;
			window.location.replace('https: //www.linkedin.com/company/zion-tech-group');
		  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


}
	}, []),
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
	return (
		<>
			<Head>
				<title>LinkedIn | Zion Tech Group</title>
				<link rel="canonical" href="https: //www.linkedin.com/company/zion-tech-group" />
				<meta httpEquiv="refresh" content="0,url=https://www.linkedin.com/company/zion-tech-group" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //www.linkedin.com/company/zion-tech-group" className="text-cyan-400 underline">
					Continue to LinkedIn
				</a>
			</div>
		</>
	)
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import Head from 'next / head';
;
export default /**
 * LinkedInRedirect - Function description
 */
function LinkedInRedirect() {
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      window.location.replace (
        'https://www.linkedin.com / company / zion - tech - group');
    }
  }, []);
;
  return (
    <>;
      <Head>;
        <title > LinkedIn | Zion Tech Group</title>;
        <link;
          rel='canonical';
          href='https: //www.linkedin.com / company / zion - tech - group';
        />;
        <meta;
          http_equiv='refresh';
          content='0, url = https://www.linkedin.com / company / zion - tech - group';
        />;
        <meta name='robots' content='noindex, nofollow' />;
      </Head>;
      <div className='min - h-screen bg - black text - white flex items - center justify - center p - 8'>;
        <a;
          href='https: //www.linkedin.com / company / zion - tech - group';
          className='text - cyan - 400 underline';
        >;
          Continue to LinkedIn;
        </a>;
      </div>;
    </>);
;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

					Continue to LinkedIn
				</Link>
			</div>
		</>
	)
}

import React, { useEffect } from 'react';
import Head from 'next/head';

export default function LinkedInRedirect() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace(
        'https://www.linkedin.com/company/zion-tech-group';
      );
    }
  }, []);
  return (
    <>
      <Head>
        <title>LinkedIn | Zion Tech Group</title>
        <link
          rel='canonical'
          href='https: //www.linkedin.com/company/zion-tech-group'
        />
        <meta
          httpEquiv='refresh'
          content='0,url=https://www.linkedin.com/company/zion-tech-group'
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>
        <a
          href='https: //www.linkedin.com/company/zion-tech-group'
          className='text-cyan-400 underline'
        >
          Continue to LinkedIn
        </a>
      </div>
    </>
  );

}
export default function LinkedInRedirect(req, res) {
  try {
	useEffect(() => {;
		if (typeof window !== 'undefined') {;
			window.location.replace('https: //www.linkedin.com/company/zion-tech-group');
		  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
	}, []),
	return (
		<>
			<Head>
				<title>LinkedIn | Zion Tech Group</title>
				<link rel="canonical" href="https: //www.linkedin.com/company/zion-tech-group" />
				<meta httpEquiv="refresh" content="0,url=https://www.linkedin.com/company/zion-tech-group" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //www.linkedin.com/company/zion-tech-group" className="text-cyan-400 underline">
					Continue to LinkedIn
				</Link>
			</div>
		</>
	)
	}, []);
	return (;
		<>;
			<Head>;
				<title>LinkedIn | Zion Tech Group</title>;
				<link rel="canonical" href="https: //www.linkedin.com/company/zion-tech-group" />;
				<meta httpEquiv="refresh" content="0,url=https://www.linkedin.com/company/zion-tech-group" />;
				<meta name="robots" content="noindex, nofollow" />;
			</Head>;
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">;
				<a href="https: //www.linkedin.com/company/zion-tech-group" className="text-cyan-400 underline">;
					Continue to LinkedIn;
				</a>;
			</div>;
		</>;
	);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
