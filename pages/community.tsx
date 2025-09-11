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
import React from 'react';
export default function CommunityPage() {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react';
import Head from 'next/head';
export default function CommunityPage() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
      <Head>;
        <title>Community | Zion Tech Group</title>;
        <meta
          name='description'
          content='Community forum and resources for Zion Tech Group users'
        />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/community' />;
        <meta
          name='description'
          content='Join the Zion Tech Group community and stay updated.'
        />;
      </Head>;
      <div className='max-w-5xl mx-auto space-y-8'>;
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
          Community;
        </h1>;
        <p className='text-slate-300'>;
          Join our community. Ask questions, share solutions, and learn best;
          practices.;
        </p>;
        <div className='grid md:grid-cols-2 gap-6'>;
          <div className='p-6 rounded-2xl bg-white/5 border border-white/10'>;
            <h2 className='text-white text-xl font-semibold mb-2'>Get Help</h2>;
            <p className='text-slate-300'>;
              Visit the{' '}
              <a className='text-cyan-400 underline' href='/support'>;
                Support Center;
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
export default function CommunityPage() {
  return (
    <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>
      <Head>
        <title>Community | Zion Tech Group</title>
        <meta
          name='description'
          content='Community forum and resources for Zion Tech Group users'
        />
        <link rel='canonical' href='https://ziontechgroup.com/community' />
        <meta
          name='description'
          content='Join the Zion Tech Group community and stay updated.'
        />
      </Head>
      <div className='max-w-5xl mx-auto space-y-8'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Community
        </h1>
        <p className='text-slate-300'>
          Join our community. Ask questions, share solutions, and learn best
          practices.
        </p>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='p-6 rounded-2xl bg-white/5 border border-white/10'>
            <h2 className='text-white text-xl font-semibold mb-2'>Get Help</h2>
            <p className='text-slate-300'>
              Visit the{' '}
              <a className='text-cyan-400 underline' href='/support'>
                Support Center
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </a>{' '}
              or email{' '}
              <a
                className='text-purple-400'
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                href='mailto: kleber@ziontechgroup && ziontechgroup.com'>;
                kleber@ziontechgroup && ziontechgroup.com;
=======
                href='mailto: kleber@ziontechgroup && ziontechgroup.com'>;
                kleber@ziontechgroup && ziontechgroup.com;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next / head';
export default /**
 * CommunityPage - Function description
 */
function CommunityPage() {
  return (
    <div className='min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;
      <Head>;
        <title > Community | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Community forum and resources for Zion Tech Group users';
        />;
        <link rel='canonical' href='https://ziontechgroup.com / community' />;
        <meta;
          name='description';
          content='Join the Zion Tech Group community and stay updated.';
        />;
      </Head>;
      <div className='max - w-5xl mx - auto space - y-8'>;
        <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
          Community;
        </h1>;
        <p className='text - slate - 300'>;
          Join our community. Ask questions, share solutions, and learn best;
          practices.;
        </p>;
        <div className='grid md:grid - cols - 2 gap - 6'>;
          <div className='p - 6 rounded - 2xl bg - white / 5 border border - white / 10'>;
            <h2 className='text - white text - xl font - semibold mb - 2'>Get Help</h2>;
            <p className='text - slate - 300'>;
              Visit the{' '}
              <a className='text - cyan - 400 underline' href='/support'>;
                Support Center;
              </a>{' '}
              or email{' '}
              <a;
                className='text - purple - 400';
                href='mailto: kleber@ziontechgroup.com';
              >;
                kleber@ziontechgroup.com;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </a>;
              .;
            </p>;
          </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='p - 6 rounded - 2xl bg - white / 5 border border - white / 10'>;
            <h2 className='text - white text - xl font - semibold mb - 2'>Follow Us</h2>;
            <ul className='text - slate - 300 space - y-1'>;
              <li>;
                <a;
                  className='text - cyan - 400';
                  href='https://linkedin.com / company / ziontechgroup';
                  target='_blank';
                  rel='noopener noreferrer';
                >;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  LinkedIn;
                </a>;
              </li>;
              <li>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <a;
                  className='text - cyan - 400';
                  href='https://github.com / Zion - Holdings';
                  target='_blank';
                  rel='noopener noreferrer';
                >;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  GitHub;
                </a>;
              </li>;
              <li>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <a;
                  className='text - cyan - 400';
                  href='https://instagram.com / ziontechgroup';
                  target='_blank';
                  rel='noopener noreferrer';
                >;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Instagram;
                </a>;
              </li>;
              <li>;
<<<<<<< HEAD
<<<<<<< HEAD
                  rel='noopener noreferrer'>;
=======

                  rel='noopener noreferrer'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                  rel='noopener noreferrer'>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <a;
                  className='text - cyan - 400';
                  href='https://youtube.com/@ziontechgroup';
                  target='_blank';
                  rel='noopener noreferrer';
                >;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  YouTube;
                </a>;
              </li>;
            </ul>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
<<<<<<< HEAD
}

                href='mailto: kleber@ziontechgroup.com'
              >
                kleber@ziontechgroup.com
              </a>
              .
            </p>
          </div>
          <div className='p-6 rounded-2xl bg-white/5 border border-white/10'>
            <h2 className='text-white text-xl font-semibold mb-2'>Follow Us</h2>
            <ul className='text-slate-300 space-y-1'>
              <li>
                <a
                  className='text-cyan-400'
                  href='https://linkedin.com/company/ziontechgroup'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className='text-cyan-400'
                  href='https://github.com/Zion-Holdings'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className='text-cyan-400'
                  href='https://instagram.com/ziontechgroup'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className='text-cyan-400'
                  href='https://youtube.com/@ziontechgroup'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
  );

}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react',
import Head from 'next/head',
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function CommunityPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Community | Zion Tech Group</title>
				<meta name="description" content="Community forum and resources for Zion Tech Group users" />
				<link rel="canonical" href="https://ziontechgroup.com/community" />
				<meta name="description" content="Join the Zion Tech Group community and stay updated." />
			</Head>
			<div className="max-w-5xl mx-auto space-y-8">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Community</h1>
				<p className="text-slate-300">Join our community. Ask questions, share solutions, and learn best practices.</p>
				<div className="grid md: grid-cols-2 gap-6">
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Get Help</h2>
						<p className="text-slate-300">Visit the <a className="text-cyan-400 underline" href="/support">Support Center</a> or email <a className="text-purple-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
					</div>
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Follow Us</h2>
						<ul className="text-slate-300 space-y-1">
<<<<<<< HEAD
							<li><a className="text-cyan-400" href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
							<li><a className="text-cyan-400" href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
							<li><a className="text-cyan-400" href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
							<li><a className="text-cyan-400" href="https://youtube.com/@ziontechgroup" target="_blank" rel="noopener noreferrer">YouTube</Link></li>
=======
							<li><a className="text-cyan-400" href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
							<li><a className="text-cyan-400" href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer">GitHub</a></li>
							<li><a className="text-cyan-400" href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer">Instagram</a></li>
							<li><a className="text-cyan-400" href="https://youtube.com/@ziontechgroup" target="_blank" rel="noopener noreferrer">YouTube</a></li>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
<<<<<<< HEAD
<<<<<<< HEAD
;


</div>);
;

import React from 'react';
import Head from 'next/head';
export default function CommunityPage(req, res) {
  try {
	return (;
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
			<Head>;
				<title>Community | Zion Tech Group</title>;
				<meta name="description" content="Community forum and resources for Zion Tech Group users" />;
				<link rel="canonical" href="https://ziontechgroup.com/community" />;
				<meta name="description" content="Join the Zion Tech Group community and stay updated." />;
			</Head>;
			<div className="max-w-5xl mx-auto space-y-8">;
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Community</h1>;
				<p className="text-slate-300">Join our community. Ask questions, share solutions, and learn best practices.</p>;
				<div className="grid md: grid-cols-2 gap-6">;
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">;
						<h2 className="text-white text-xl font-semibold mb-2">Get Help</h2>;
						<p className="text-slate-300">Visit the <a className="text-cyan-400 underline" href="/support">Support Center</a> or email <a className="text-purple-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>;
					</div>;
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">;
						<h2 className="text-white text-xl font-semibold mb-2">Follow Us</h2>;
						<ul className="text-slate-300 space-y-1">;
							<li><a className="text-cyan-400" href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>;
							<li><a className="text-cyan-400" href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer">GitHub</a></li>;
							<li><a className="text-cyan-400" href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer">Instagram</a></li>;
							<li><a className="text-cyan-400" href="https://youtube.com/@ziontechgroup" target="_blank" rel="noopener noreferrer">YouTube</a></li>;
						</ul>;
					</div>;
				</div>;
			</div>;
		</div>;
	);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

    </div>);
;

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
;


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
