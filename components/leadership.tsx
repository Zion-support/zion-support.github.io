<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function LeadershipPage() {
=======
export default function LeadershipPage() {;
=======
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export default function LeadershipPage() {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Advisors from cloud, security, data, and venture ecosystems.;
            </p>;
          </div>;
        </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className='mt - 10 text - slate - 300'>;
          Contact:{' '}
          <a className='text - cyan - 400' href='mailto:kleber@ziontechgroup.com'>;
            kleber@ziontechgroup.com;
          </a>{' '}
          •{' '}
<<<<<<< HEAD
          <a className='text - cyan - 400' href='tel:+13024640950'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
          <a className='text-cyan-400' href='tel:+13024640950'>
            +1 302 464 0950
          </a>
        </div>
      </div>
    </div>;
  );	return (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
			<Head>
				<title>Leadership | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Meet the leadership team guiding Zion Tech Group's vision and execution.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/leadership&quot; />
			</Head>
			<div className=&quot;max-w-5xl mx-auto&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8&quot;>Leadership</h1>
				<p className=&quot;text-slate-300 mb-6&quot;>Our leaders bring deep expertise in AI, cloud, cybersecurity, and scaling resilient platforms.</p>
				<div className=&quot;grid sm:grid-cols-2 gap-6&quot;>
					<div className=&quot;p-6 rounded-2xl bg-black/40 border border-cyan-500/20&quot;>
						<h2 className=&quot;text-white text-xl font-semibold mb-2&quot;>Executive Team</h2>
						<p className=&quot;text-slate-300&quot;>Seasoned operators with track records across Fortune 500 and startups.</p>
					</div>
					<div className=&quot;p-6 rounded-2xl bg-black/40 border border-cyan-500/20&quot;>
						<h2 className=&quot;text-white text-xl font-semibold mb-2&quot;>Advisors</h2>
						<p className=&quot;text-slate-300&quot;>Advisors from cloud, security, data, and venture ecosystems.</p>
					</div>
				</div>
				<div className=&quot;mt-10 text-slate-300&quot;>Contact: <a className=&quot;text-cyan-400&quot; href=&quot;mailto:kleber@ziontechgroup.com&quot;>kleber@ziontechgroup.com</a> • <a className=&quot;text-cyan-400&quot; href=&quot;tel:+13024640950&quot;>+1 302 464 0950</a></div>

			</div>
		</div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
	)
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

	),
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
=======
	),
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
	)
}
	),
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
