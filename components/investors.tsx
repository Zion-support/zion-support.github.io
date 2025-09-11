
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
export default function InvestorsPage() {


export default function InvestorsPage() {

export default function InvestorsPage() {

export default function InvestorsPage() {  return (
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
export default function InvestorsPage() {
	return (

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
	),
}


	),
}
