import Link from 'next/link';
import Head from 'next/head';

export default function Blog() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Updates</title>
        <meta name="description" content="Stay updated with the latest technology insights, AI developments, and industry trends from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI insights, tech trends, software development, digital transformation" />
        <link rel="canonical" href={`${contact.site}/blog`} />
        <meta property="og:title" content="Blog - Zion Tech Group | Technology Insights & Updates" />
        <meta property="og:description" content="Stay updated with the latest technology insights, AI developments, and industry trends from Zion Tech Group's expert team." />
        <meta property="og:url" content={`${contact.site}/blog`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Zion Tech Group | Technology Insights & Updates" />
        <meta name="twitter:description" content="Stay updated with the latest technology insights, AI developments, and industry trends from Zion Tech Group's expert team." />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Technology Blog</h1>
            <p className="text-xl text-gray-300">
              Stay updated with the latest technology insights, AI developments, and industry trends
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <article className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="mb-4">
                <span className="text-sm text-blue-400 font-semibold">AI & Machine Learning</span>
                <time className="text-sm text-gray-400 ml-2">January 26, 2025</time>
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                The Future of AI in Business Automation
              </h2>
              <p className="text-gray-300 mb-4">
                Explore how artificial intelligence is revolutionizing business processes and what it means for your organization.
              </p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
                Read More →
              </Link>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="mb-4">
                <span className="text-sm text-green-400 font-semibold">Cloud Computing</span>
                <time className="text-sm text-gray-400 ml-2">January 25, 2025</time>
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Cloud Migration Best Practices for 2025
              </h2>
              <p className="text-gray-300 mb-4">
                Learn the essential strategies for successful cloud migration and optimization in the modern digital landscape.
              </p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
                Read More →
              </Link>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="mb-4">
                <span className="text-sm text-purple-400 font-semibold">Cybersecurity</span>
                <time className="text-sm text-gray-400 ml-2">January 24, 2025</time>
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Emerging Cybersecurity Threats and Solutions
              </h2>
              <p className="text-gray-300 mb-4">
                Stay ahead of the latest cybersecurity threats and discover proactive measures to protect your business.
              </p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
                Read More →
              </Link>
            </article>

            {/* Blog Post 4 */}
            <article className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="mb-4">
                <span className="text-sm text-yellow-400 font-semibold">Micro SaaS</span>
                <time className="text-sm text-gray-400 ml-2">January 23, 2025</time>
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Building Scalable Micro SaaS Solutions
              </h2>
              <p className="text-gray-300 mb-4">
                Discover the key principles and technologies behind creating successful micro SaaS products.
              </p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
                Read More →
              </Link>
            </article>

            {/* Blog Post 5 */}
            <article className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="mb-4">
                <span className="text-sm text-red-400 font-semibold">DevOps</span>
                <time className="text-sm text-gray-400 ml-2">January 22, 2025</time>
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                DevOps Automation: Streamlining Development Workflows
              </h2>
              <p className="text-gray-300 mb-4">
                Learn how to implement effective DevOps practices to accelerate your development and deployment processes.
              </p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
                Read More →
              </Link>
            </article>

            {/* Blog Post 6 */}
            <article className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="mb-4">
                <span className="text-sm text-indigo-400 font-semibold">Digital Transformation</span>
                <time className="text-sm text-gray-400 ml-2">January 21, 2025</time>
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Digital Transformation Roadmap for Small Businesses
              </h2>
              <p className="text-gray-300 mb-4">
                A comprehensive guide to digital transformation strategies tailored for small and medium businesses.
              </p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
                Read More →
              </Link>
            </article>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest technology insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
              <Link href="/services" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}