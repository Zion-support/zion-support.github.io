
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
export default function PartnersPage() {;
import React from 'react';
import Head from 'next/head';

export default function PartnersPage() {
=======


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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import Head from 'next/head';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

export default function PartnersPage() {
=======

export default function PartnersPage() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
      <Head>;
        <title>Partners | Zion Tech Group</title>;
        <meta
          name='description'
          content='Technology and go-to-market partners powering our customer outcomes.'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Partner with us:{' '}
          <a className='text-cyan-400' href='mailto:kleber@ziontechgroup.com'>
            kleber@ziontechgroup.com
          </a>
        </div>
      </div>
    </div>;
  );	return (
<<<<<<< HEAD
<<<<<<< HEAD
export default function PartnersPage() {
	return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function PartnersPage() {
	return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
				<div className="pt-4 text-slate-300">Partner with us: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
			</div>
		</div>

		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
			<Head>;
				<title>Partners | Zion Tech Group</title>;
				<meta name="description" content="Technology and go-to-market partners powering our customer outcomes." />;
				<link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/partners" />;
			</Head>;
			<div className="max-w-5xl mx-auto space-y-6">;
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Partners</h1>;
				<p className="text-slate-300">We work with best‑in‑class platforms across AI, cloud, data, security, and DevOps.</p>;
				<ul className="list-disc list-inside text-slate-300 space-y-1">;
					<li>Cloud & Edge: AWS, Azure, Cloudflare</li>;
					<li>AI & LLM: OpenAI, Anthropic, Groq</li>;
					<li>Data & Analytics: Snowflake, BigQuery, ClickHouse</li>;
					<li>Security: Wiz, Prisma Cloud, HashiCorp Vault</li>;
				</ul>;
				<div className="pt-4 text-slate-300">Partner with us: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup && ziontechgroup.com">kleber@ziontechgroup && ziontechgroup.com</a></div>;
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

	),
}

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
				<div className="pt-4 text-slate-300">Partner with us: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
			</div>
		</div>
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
