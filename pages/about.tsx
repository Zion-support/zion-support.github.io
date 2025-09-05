import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to deliver innovative technology solutions and our commitment to excellence." />
        <meta name="keywords" content="about zion tech group, company mission, technology leadership, innovation" />
      </Head>
      
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Pioneering the future of technology solutions
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-slate-300 mb-6">
                  At Zion Tech Group, we are committed to delivering cutting-edge technology solutions 
                  that empower businesses to thrive in the digital age. Our mission is to bridge the 
                  gap between innovation and implementation, making advanced technology accessible 
                  and practical for organizations of all sizes.
                </p>
                <p className="text-lg text-slate-300">
                  We believe in the transformative power of technology and its ability to solve 
                  complex business challenges while driving sustainable growth and efficiency.
                </p>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <span className="text-slate-300">Innovation and Excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <span className="text-slate-300">Client-Centric Approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <span className="text-slate-300">Continuous Learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <span className="text-slate-300">Ethical Technology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">350+</div>
                <div className="text-slate-300">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-slate-300">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">150+</div>
                <div className="text-slate-300">Micro SaaS Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
                <div className="text-slate-300">IT Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-blue-400 mb-4">AI & Machine Learning</h3>
                <p className="text-slate-300">
                  Our team specializes in developing and implementing AI solutions that 
                  automate processes, enhance decision-making, and drive innovation.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Cloud & DevOps</h3>
                <p className="text-slate-300">
                  We help businesses migrate to the cloud and implement DevOps practices 
                  for improved efficiency, scalability, and reliability.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-green-400 mb-4">Blockchain & Web3</h3>
                <p className="text-slate-300">
                  Our experts develop secure, scalable blockchain solutions and Web3 
                  applications for the decentralized future.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}