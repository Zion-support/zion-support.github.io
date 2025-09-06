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
export default function PartnersPage() {
=======
export default function PartnersPage() {;
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

export default function PartnersPage() {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
      <Head>;
        <title>Partners | Zion Tech Group</title>;
        <meta
          name='description'
          content='Technology and go-to-market partners powering our customer outcomes.'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Partner with us:{' '}
<<<<<<< HEAD
          <a className='text-cyan-400' href='mailto:kleber@ziontechgroup && ziontechgroup.com'>;
            kleber@ziontechgroup && ziontechgroup.com;
          </a>;
        </div>;
      </div>;
=======
          <a className='text-cyan-400' href='mailto:kleber@ziontechgroup.com'>
            kleber@ziontechgroup.com
          </a>
        </div>
      </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    </div>;
  );	return (
<<<<<<< HEAD

export default function PartnersPage() {
	return (

=======
export default function PartnersPage() {
	return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
			<Head>
				<title>Partners | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Technology and go-to-market partners powering our customer outcomes.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/partners&quot; />
			</Head>
			<div className=&quot;max-w-5xl mx-auto space-y-6&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Partners</h1>
				<p className=&quot;text-slate-300&quot;>We work with best‑in‑class platforms across AI, cloud, data, security, and DevOps.</p>
				<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
					<li>Cloud & Edge: AWS, Azure, Cloudflare</li>
					<li>AI & LLM: OpenAI, Anthropic, Groq</li>
					<li>Data & Analytics: Snowflake, BigQuery, ClickHouse</li>
					<li>Security: Wiz, Prisma Cloud, HashiCorp Vault</li>
				</ul>
<<<<<<< HEAD
				<div className="pt-4 text-slate-300">Partner with us: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
			</div>
		</div>

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
<div className="pt-4 text-slate-300">Partner with us: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
			</div>
		</div>
	)
}
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

	),
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
				<div className="pt-4 text-slate-300">Partner with us: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
			</div>
		</div>
	)
}
	),
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
