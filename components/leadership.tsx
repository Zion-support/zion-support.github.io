
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
export default function LeadershipPage() {
=======


export default function LeadershipPage() {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

export default function LeadershipPage() {
=======

export default function LeadershipPage() {  return (
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
          <div className='p - 6 rounded - 2xl bg - black / 40 border border - cyan - 500 / 20'>;
            <h2 className='text - white text - xl font - semibold mb - 2'>Advisors</h2>;
            <p className='text - slate - 300'>;

export default function LeadershipPage() {
	return (
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

==============    </div>);	return (
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
	),
}

<<<<<<< HEAD

	),
}
	)
}
	),
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
