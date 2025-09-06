<<<<<<< HEAD
=======

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export default function PartnersPage() {


export default function PartnersPage() {

=======

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

export default function PartnersPage() {

export default function PartnersPage() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
      <Head>;
        <title>Partners | Zion Tech Group</title>;
        <meta
          name='description'
          content='Technology and go-to-market partners powering our customer outcomes.'
<<<<<<< HEAD

        />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/partners' />;
      </Head>;
      <div className='max-w-5xl mx-auto space-y-6'>;
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
          Partners;
        </h1>;
        <p className='text-slate-300'>;
          We work with best‑in‑class platforms across AI, cloud, data, security,;
          and DevOps.;
        </p>;
        <ul className='list-disc list-inside text-slate-300 space-y-1'>;
          <li>Cloud & Edge: AWS, Azure, Cloudflare</li>;
          <li>AI & LLM: OpenAI, Anthropic, Groq</li>;
          <li>Data & Analytics: Snowflake, BigQuery, ClickHouse</li>;
          <li>Security: Wiz, Prisma Cloud, HashiCorp Vault</li>;
        </ul>;
        <div className='pt-4 text-slate-300'>;

          Partner with us:{' '}

    </div>;
  );	return (

export default function PartnersPage() {
	return (

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Partners | Zion Tech Group</title>
				<meta name="description" content="Technology and go-to-market partners powering our customer outcomes." />
				<link rel="canonical" href="https://ziontechgroup.com/partners" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Partners</h1>
				<p className="text-slate-300">We work with best‑in‑class platforms across AI, cloud, data, security, and DevOps.</p>
				<ul className="list-disc list-inside text-slate-300 space-y-1">

=======

	),
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
					<li>Cloud & Edge: AWS, Azure, Cloudflare</li>
					<li>AI & LLM: OpenAI, Anthropic, Groq</li>
					<li>Data & Analytics: Snowflake, BigQuery, ClickHouse</li>
					<li>Security: Wiz, Prisma Cloud, HashiCorp Vault</li>
				</ul>
import Head from 'next / head';
export default /**
 * PartnersPage - Function description
 */
function PartnersPage() {
  return (
    <div className='min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;
      <Head>;
        <title > Partners | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Technology and go - to - market partners powering our customer outcomes.';
        />;
        <link rel='canonical' href='https://ziontechgroup.com / partners' />;
      </Head>;
      <div className='max - w-5xl mx - auto space - y-6'>;
        <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
          Partners;
        </h1>;
        <p className='text - slate - 300'>;
          We work with best‑in‑class platforms across AI, cloud, data, security,
          and DevOps.;
        </p>;
        <ul className='list - disc list - inside text - slate - 300 space - y-1'>;
          <li > Cloud & Edge: AWS, Azure, Cloudflare</li>;
          <li > AI & LLM: OpenAI, Anthropic, Groq</li>;
          <li > Data & Analytics: Snowflake, BigQuery, ClickHouse</li>;
          <li > Security: Wiz, Prisma Cloud, HashiCorp Vault</li>;
        </ul>;
        <div className='pt - 4 text - slate - 300'>;
          Partner with us:{' '}
          <a className='text - cyan - 400' href='mailto:kleber@ziontechgroup.com'>;
            kleber@ziontechgroup.com;
          </a>;
        </div>;
      </div>;
    </div>);	return (
  <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
  <Head>;
    <title > Partners | Zion Tech Group</title>;
    <meta name="description" content="Technology and go - to - market partners powering our customer outcomes." />;
    <link rel="canonical" href="https://ziontechgroup.com / partners" />;
  </Head>;
  <div className="max - w-5xl mx - auto space - y-6">;
    <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">Partners</h1>;
    <p className="text - slate - 300">We work with best‑in‑class platforms across AI, cloud, data, security, and DevOps.</p>;
    <ul className="list - disc list - inside text - slate - 300 space - y-1">;
    <li > Cloud & Edge: AWS, Azure, Cloudflare</li>;
    <li > AI & LLM: OpenAI, Anthropic, Groq</li>;
    <li > Data & Analytics: Snowflake, BigQuery, ClickHouse</li>;
    <li > Security: Wiz, Prisma Cloud, HashiCorp Vault</li>;
    </ul>;
    <div className="pt - 4 text - slate - 300">Partner with us: <a className="text - cyan - 400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>;
  </div>;
  </div>),
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
