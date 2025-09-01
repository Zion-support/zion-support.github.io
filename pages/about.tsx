import Head from 'next/head';
import React from 'react';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta
          name='description'
          content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and AI-powered solutions."
        />
        <meta property='og:title' content='About Zion Tech Group' />
        <meta
          property='og:description'
          content="Learn about Zion Tech Group's mission and vision."
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white'>
        <main className='container mx-auto px-6 py-12'>
          <section className='text-center mb-16'>
            <h1 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent'>
              About Zion Tech Group
            </h1>
            <p className='text-xl text-white/80 max-w-3xl mx-auto'>
              Pioneering the future of autonomous technology and AI-driven
              innovation
            </p>
          </section>

          <section className='mx-auto max-w-6xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
              <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-8'>
                <h2 className='text-3xl font-bold mb-6 text-cyan-400'>
                  Our Mission
                </h2>
                <p className='text-lg text-white/80 mb-4'>
                  To create a world where technology operates autonomously,
                  continuously improving and innovating without human
                  intervention.
                </p>
                <p className='text-white/70'>
                  We believe in the power of AI to solve complex problems,
                  automate routine tasks, and unlock new possibilities for
                  humanity.
                </p>
              </div>

              <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-8'>
                <h2 className='text-3xl font-bold mb-6 text-fuchsia-400'>
                  Our Vision
                </h2>
                <p className='text-lg text-white/80 mb-4'>
                  To be the leading force in autonomous technology, creating
                  systems that think, learn, and evolve independently.
                </p>
                <p className='text-white/70'>
                  We envision a future where AI and automation work seamlessly
                  together to enhance human capabilities and drive progress.
                </p>
              </div>
            </div>

            <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16'>
              <h2 className='text-3xl font-bold mb-6 text-green-400'>
                Core Values
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='text-center'>
                  <div className='text-4xl mb-4'>🚀</div>
                  <h3 className='text-xl font-semibold mb-2'>Innovation</h3>
                  <p className='text-white/70'>
                    Constantly pushing boundaries and exploring new frontiers in
                    technology
                  </p>
                </div>
                <div className='text-center'>
                  <div className='text-4xl mb-4'>🤖</div>
                  <h3 className='text-xl font-semibold mb-2'>Autonomy</h3>
                  <p className='text-white/70'>
                    Building systems that can operate independently and make
                    intelligent decisions
                  </p>
                </div>
                <div className='text-center'>
                  <div className='text-4xl mb-4'>🌍</div>
                  <h3 className='text-xl font-semibold mb-2'>Impact</h3>
                  <p className='text-white/70'>
                    Creating technology that makes a positive difference in the
                    world
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16'>
              <h2 className='text-3xl font-bold mb-6 text-blue-400'>
                What We Do
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='text-xl font-semibold mb-3 text-cyan-400'>
                    AI Development
                  </h3>
                  <ul className='space-y-2 text-white/70'>
                    <li>• Advanced machine learning models</li>
                    <li>• Natural language processing</li>
                    <li>• Computer vision systems</li>
                    <li>• Autonomous decision making</li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-3 text-fuchsia-400'>
                    Automation Systems
                  </h3>
                  <ul className='space-y-2 text-white/70'>
                    <li>• Cloud infrastructure automation</li>
                    <li>• CI/CD pipeline optimization</li>
                    <li>• Self-healing applications</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-8'>
              <h2 className='text-3xl font-bold mb-6 text-purple-400'>
                Our Impact
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-cyan-400'>227</div>
                  <div className='text-sm text-white/70'>
                    Active Automations
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-fuchsia-400'>
                    2,960
                  </div>
                  <div className='text-sm text-white/70'>Pages Generated</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-green-400'>12</div>
                  <div className='text-sm text-white/70'>AI Components</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-400'>99.9%</div>
                  <div className='text-sm text-white/70'>Uptime</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">Join Our Mission</h2>
              <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-2xl p-8 border border-cyan-500/30 text-center">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Ready to Experience the Future?</h3>
                <p className="text-lg text-white/80 mb-6">
                  Discover how autonomous technology can transform your business and accelerate your growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold px-8 py-3 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all">
                    Get Started
                  </a>
                  <a href="/reports" className="border border-cyan-400 text-cyan-400 font-semibold px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition-all">
                    View Reports
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
