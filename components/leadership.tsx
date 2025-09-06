
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
<<<<<<< HEAD


export default function LeadershipPage() {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

export default function LeadershipPage() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export default function LeadershipPage() {;
import React from 'react';
import Head from 'next/head';

export default function LeadershipPage() {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
      <Head>;
        <title>Leadership | Zion Tech Group</title>;
        <meta
          name='description'
          content="Meet the leadership team guiding Zion Tech Group's vision and execution."
        />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/leadership' />;
      </Head>;
      <div className='max-w-5xl mx-auto'>;
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8'>;
          Leadership;
        </h1>;
        <p className='text-slate-300 mb-6'>;
          Our leaders bring deep expertise in AI, cloud, cybersecurity, and;
          scaling resilient platforms.;
        </p>;
        <div className='grid sm:grid-cols-2 gap-6'>;
          <div className='p-6 rounded-2xl bg-black/40 border border-cyan-500/20'>;
            <h2 className='text-white text-xl font-semibold mb-2'>;
              Executive Team;
            </h2>;
            <p className='text-slate-300'>;
=======
import Head from 'next / head';
export default /**
 * LeadershipPage - Function description
 */
function LeadershipPage() {
  return (
    <div className='min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;
      <Head>;
        <title > Leadership | Zion Tech Group</title>;
        <meta;
          name='description';
          content="Meet the leadership team guiding Zion Tech Group's vision and execution.";
        />;
        <link rel='canonical' href='https://ziontechgroup.com / leadership' />;
      </Head>;
      <div className='max - w-5xl mx - auto'>;
        <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 8'>;
          Leadership;
        </h1>;
        <p className='text - slate - 300 mb - 6'>;
          Our leaders bring deep expertise in AI, cloud, cybersecurity, and;
          scaling resilient platforms.;
        </p>;
        <div className='grid sm:grid - cols - 2 gap - 6'>;
          <div className='p - 6 rounded - 2xl bg - black / 40 border border - cyan - 500 / 20'>;
            <h2 className='text - white text - xl font - semibold mb - 2'>;
              Executive Team;
            </h2>;
            <p className='text - slate - 300'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              Seasoned operators with track records across Fortune 500 and;
              startups.;
            </p>;
          </div>;
<<<<<<< HEAD

          <div className='p - 6 rounded - 2xl bg - black / 40 border border - cyan - 500 / 20'>;
            <h2 className='text - white text - xl font - semibold mb - 2'>Advisors</h2>;
            <p className='text - slate - 300'>;

=======
          <div className='p - 6 rounded - 2xl bg - black / 40 border border - cyan - 500 / 20'>;
            <h2 className='text - white text - xl font - semibold mb - 2'>Advisors</h2>;
            <p className='text - slate - 300'>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              Advisors from cloud, security, data, and venture ecosystems.;
            </p>;
          </div>;
        </div>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className='mt - 10 text - slate - 300'>;
          Contact:{' '}
          <a className='text - cyan - 400' href='mailto:kleber@ziontechgroup.com'>;
            kleber@ziontechgroup.com;
          </a>{' '}
          •{' '}
<<<<<<< HEAD
          <a className='text - cyan - 400' href='tel:+13024640950'>;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            +1 302 464 0950;
          </a>;
        </div>;
      </div>;
<<<<<<< HEAD

export default function LeadershipPage() {
	return (

=======
export default function LeadershipPage() {
	return (
          <a className='text-cyan-400' href='tel:+13024640950'>
            +1 302 464 0950
          </a>
        </div>
      </div>
    </div>;
  );	return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Leadership | Zion Tech Group</title>
				<meta name="description" content="Meet the leadership team guiding Zion Tech Group's vision and execution." />
				<link rel="canonical" href="https://ziontechgroup.com/leadership" />
			</Head>
			<div className="max-w-5xl mx-auto">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">Leadership</h1>
				<p className="text-slate-300 mb-6">Our leaders bring deep expertise in AI, cloud, cybersecurity, and scaling resilient platforms.</p>
				<div className="grid sm:grid-cols-2 gap-6">
					<div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/20">
						<h2 className="text-white text-xl font-semibold mb-2">Executive Team</h2>
						<p className="text-slate-300">Seasoned operators with track records across Fortune 500 and startups.</p>
					</div>
					<div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/20">
						<h2 className="text-white text-xl font-semibold mb-2">Advisors</h2>
						<p className="text-slate-300">Advisors from cloud, security, data, and venture ecosystems.</p>
					</div>
				</div>
				<div className="mt-10 text-slate-300">Contact: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> • <a className="text-cyan-400" href="tel:+13024640950">+1 302 464 0950</a></div>
			</div>
		</div>
<<<<<<< HEAD

		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
			<Head>;
				<title>Leadership | Zion Tech Group</title>;
				<meta name="description" content="Meet the leadership team guiding Zion Tech Group's vision and execution." />;
				<link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/leadership" />;
			</Head>;
			<div className="max-w-5xl mx-auto">;
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">Leadership</h1>;
				<p className="text-slate-300 mb-6">Our leaders bring deep expertise in AI, cloud, cybersecurity, and scaling resilient platforms.</p>;
				<div className="grid sm:grid-cols-2 gap-6">;
					<div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/20">;
						<h2 className="text-white text-xl font-semibold mb-2">Executive Team</h2>;
						<p className="text-slate-300">Seasoned operators with track records across Fortune 500 and startups.</p>;
					</div>;
					<div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/20">;
						<h2 className="text-white text-xl font-semibold mb-2">Advisors</h2>;
						<p className="text-slate-300">Advisors from cloud, security, data, and venture ecosystems.</p>;
					</div>;
				</div>;
				<div className="mt-10 text-slate-300">Contact: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup && ziontechgroup.com">kleber@ziontechgroup && ziontechgroup.com</a> • <a className="text-cyan-400" href="tel:+13024640950">+1 302 464 0950</a></div>;
			</div>;
		</div>;
	),;
}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>);	return (
  <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
  <Head>;
    <title > Leadership | Zion Tech Group</title>;
    <meta name="description" content="Meet the leadership team guiding Zion Tech Group's vision and execution." />;
    <link rel="canonical" href="https://ziontechgroup.com / leadership" />;
  </Head>;
  <div className="max - w-5xl mx - auto">;
    <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 8">Leadership</h1>;
    <p className="text - slate - 300 mb - 6">Our leaders bring deep expertise in AI, cloud, cybersecurity, and scaling resilient platforms.</p>;
    <div className="grid sm:grid - cols - 2 gap - 6">;
    <div className="p - 6 rounded - 2xl bg - black / 40 border border - cyan - 500 / 20">;
      <h2 className="text - white text - xl font - semibold mb - 2">Executive Team</h2>;
      <p className="text - slate - 300">Seasoned operators with track records across Fortune 500 and startups.</p>;
    </div>;
    <div className="p - 6 rounded - 2xl bg - black / 40 border border - cyan - 500 / 20">;
      <h2 className="text - white text - xl font - semibold mb - 2">Advisors</h2>;
      <p className="text - slate - 300">Advisors from cloud, security, data, and venture ecosystems.</p>;
    </div>;
    </div>;
    <div className="mt - 10 text - slate - 300">Contact: <a className="text - cyan - 400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> • <a className="text - cyan - 400" href="tel:+13024640950">+1 302 464 0950</a></div>;
  </div>;
  </div>),
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

	),
}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

	),
}
	)
}
	),
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
