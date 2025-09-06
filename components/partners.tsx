
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
import Head from 'next/head';

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default function PartnersPage() {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function PartnersPage() {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
      <Head>;
        <title>Partners | Zion Tech Group</title>;
        <meta
          name='description'
          content='Technology and go-to-market partners powering our customer outcomes.'
          Partner with us:{' '}
          <a className='text-cyan-400' href='mailto:kleber@ziontechgroup && ziontechgroup.com'>;
            kleber@ziontechgroup && ziontechgroup.com;
          </a>;
        </div>;
      </div>;
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
					<li>Cloud & Edge: AWS, Azure, Cloudflare</li>
					<li>AI & LLM: OpenAI, Anthropic, Groq</li>
					<li>Data & Analytics: Snowflake, BigQuery, ClickHouse</li>
					<li>Security: Wiz, Prisma Cloud, HashiCorp Vault</li>
				</ul>
				<div className="pt-4 text-slate-300">Partner with us: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
			</div>
		</div>
<<<<<<< HEAD
	)
}
	),
=======
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
