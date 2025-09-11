
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
<<<<<<< HEAD
export default function InvestorsPage() {;
import React from 'react';
import Head from 'next/head';

export default function InvestorsPage() {
=======


export default function InvestorsPage() {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function InvestorsPage() {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import Head from 'next/head';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

export default function InvestorsPage() {
=======

export default function InvestorsPage() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
      <Head>;
        <title>Investors | Zion Tech Group</title>;
        <meta
          name='description'
          content='Investor relations and key metrics overview.'
        />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/investors' />;
      </Head>;
      <div className='max-w-5xl mx-auto space-y-6'>;
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
          Investors;
        </h1>;
        <p className='text-slate-300'>;
          We pursue durable growth via product‑led innovation and customer;
          outcomes.;
        </p>;
        <div className='grid sm:grid-cols-3 gap-4'>;
          <div className='p-4 rounded-xl bg-black/40 border border-cyan-500/20'>;
            <div className='text-2xl font-bold text-white'>500+</div>;
            <div className='text-slate-400 text-sm'>Services shipped</div>;
          </div>;
          <div className='p-4 rounded-xl bg-black/40 border border-cyan-500/20'>;
            <div className='text-2xl font-bold text-white'>200+</div>;
            <div className='text-slate-400 text-sm'>Happy clients</div>;
          </div>;
          <div className='p-4 rounded-xl bg-black/40 border border-cyan-500/20'>;
            <div className='text-2xl font-bold text-white'>15+</div>;
            <div className='text-slate-400 text-sm'>Years experience</div>;
          </div>;
        </div>;
        <div className='pt-4 text-slate-300'>;
          Contact IR:{' '}
          <a className='text-cyan-400' href='mailto:kleber@ziontechgroup.com'>
            kleber@ziontechgroup.com
          </a>
        </div>
      </div>
    </div>;
  );	return (
<<<<<<< HEAD
<<<<<<< HEAD
export default function InvestorsPage() {
	return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function InvestorsPage() {
	return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
		<div className="min-h-screen pt-24 pb-20 px-4 sm: px-6 lg:px-8">
			<Head>
				<title>Investors | Zion Tech Group</title>
				<meta name="description" content="Investor relations and key metrics overview." />
				<link rel="canonical" href="https://ziontechgroup.com/investors" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Investors</h1>
				<p className="text-slate-300">We pursue durable growth via product‑led innovation and customer outcomes.</p>
				<div className="grid sm:grid-cols-3 gap-4">
					<div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><div className="text-2xl font-bold text-white">500+</div><div className="text-slate-400 text-sm">Services shipped</div></div>
					<div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><div className="text-2xl font-bold text-white">200+</div><div className="text-slate-400 text-sm">Happy clients</div></div>
					<div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><div className="text-2xl font-bold text-white">15+</div><div className="text-slate-400 text-sm">Years experience</div></div>
				</div>
				<div className="pt-4 text-slate-300">Contact IR: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>

			<Head>
				<title>Investors | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Investor relations and key metrics overview.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/investors&quot; />
			</Head>
			<div className=&quot;max-w-5xl mx-auto space-y-6&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Investors</h1>
				<p className=&quot;text-slate-300&quot;>We pursue durable growth via product‑led innovation and customer outcomes.</p>
				<div className=&quot;grid sm:grid-cols-3 gap-4&quot;>
					<div className=&quot;p-4 rounded-xl bg-black/40 border border-cyan-500/20&quot;><div className=&quot;text-2xl font-bold text-white&quot;>500+</div><div className=&quot;text-slate-400 text-sm&quot;>Services shipped</div></div>
					<div className=&quot;p-4 rounded-xl bg-black/40 border border-cyan-500/20&quot;><div className=&quot;text-2xl font-bold text-white&quot;>200+</div><div className=&quot;text-slate-400 text-sm&quot;>Happy clients</div></div>
					<div className=&quot;p-4 rounded-xl bg-black/40 border border-cyan-500/20&quot;><div className=&quot;text-2xl font-bold text-white&quot;>15+</div><div className=&quot;text-slate-400 text-sm&quot;>Years experience</div></div>
				</div>
				<div className=&quot;pt-4 text-slate-300&quot;>Contact IR: <a className=&quot;text-cyan-400&quot; href=&quot;mailto:kleber@ziontechgroup.com&quot;>kleber@ziontechgroup.com</a></div>

			</div>
		</div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

		<div className="min-h-screen pt-24 pb-20 px-4 sm: px-6 lg:px-8">;
			<Head>;
				<title>Investors | Zion Tech Group</title>;
				<meta name="description" content="Investor relations and key metrics overview." />;
				<link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/investors" />;
			</Head>;
			<div className="max-w-5xl mx-auto space-y-6">;
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Investors</h1>;
				<p className="text-slate-300">We pursue durable growth via product‑led innovation and customer outcomes.</p>;
				<div className="grid sm:grid-cols-3 gap-4">;
					<div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><div className="text-2xl font-bold text-white">500+</div><div className="text-slate-400 text-sm">Services shipped</div></div>;
					<div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><div className="text-2xl font-bold text-white">200+</div><div className="text-slate-400 text-sm">Happy clients</div></div>;
					<div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><div className="text-2xl font-bold text-white">15+</div><div className="text-slate-400 text-sm">Years experience</div></div>;
				</div>;
				<div className="pt-4 text-slate-300">Contact IR: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup && ziontechgroup.com">kleber@ziontechgroup && ziontechgroup.com</a></div>;
			</div>;
		</div>;
	),;
}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Head from 'next / head';
export default /**
 * InvestorsPage - Function description
 */
function InvestorsPage() {
  return (
    <div className='min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;
      <Head>;
        <title > Investors | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Investor relations and key metrics overview.';
        />;
        <link rel='canonical' href='https://ziontechgroup.com / investors' />;
      </Head>;
      <div className='max - w-5xl mx - auto space - y-6'>;
        <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
          Investors;
        </h1>;
        <p className='text - slate - 300'>;
          We pursue durable growth via product‑led innovation and customer;
          outcomes.;
        </p>;
        <div className='grid sm:grid - cols - 3 gap - 4'>;
          <div className='p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20'>;
            <div className='text - 2xl font - bold text - white'>500+</div>;
            <div className='text - slate - 400 text - sm'>Services shipped</div>;
          </div>;
          <div className='p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20'>;
            <div className='text - 2xl font - bold text - white'>200+</div>;
            <div className='text - slate - 400 text - sm'>Happy clients</div>;
          </div>;
          <div className='p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20'>;
            <div className='text - 2xl font - bold text - white'>15+</div>;
            <div className='text - slate - 400 text - sm'>Years experience</div>;
          </div>;
        </div>;
        <div className='pt - 4 text - slate - 300'>;
          Contact IR:{' '}
          <a className='text - cyan - 400' href='mailto:kleber@ziontechgroup.com'>;
            kleber@ziontechgroup.com;
          </a>;
        </div>;
      </div>;
    </div>);	return (
  <div className="min - h-screen pt - 24 pb - 20 px - 4 sm: px - 6 lg:px - 8">;
  <Head>;
    <title > Investors | Zion Tech Group</title>;
    <meta name="description" content="Investor relations and key metrics overview." />;
    <link rel="canonical" href="https://ziontechgroup.com / investors" />;
  </Head>;
  <div className="max - w-5xl mx - auto space - y-6">;
    <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">Investors</h1>;
    <p className="text - slate - 300">We pursue durable growth via product‑led innovation and customer outcomes.</p>;
    <div className="grid sm:grid - cols - 3 gap - 4">;
    <div className="p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20"><div className="text - 2xl font - bold text - white">500+</div><div className="text - slate - 400 text - sm">Services shipped</div></div>;
    <div className="p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20"><div className="text - 2xl font - bold text - white">200+</div><div className="text - slate - 400 text - sm">Happy clients</div></div>;
    <div className="p - 4 rounded - xl bg - black / 40 border border - cyan - 500 / 20"><div className="text - 2xl font - bold text - white">15+</div><div className="text - slate - 400 text - sm">Years experience</div></div>;
    </div>;
    <div className="pt - 4 text - slate - 300">Contact IR: <a className="text - cyan - 400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>;
  </div>;
  </div>),
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

	),
}

<<<<<<< HEAD

	),
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
	)
}
	),
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
