import Link from 'next/link';
import Head from 'next/head';

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson"
      position: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years in technology innovation and business strategy.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      twitter: "#"
    },,,
    {
      name: "Michael Chen"
      position: "Chief Technology Officer"
      bio: "AI and quantum computing expert with extensive experience in cutting-edge technologies."
      image: "/api/placeholder/300/300",
      linkedin: "#",
      twitter: "#"
    },,,
    {
      name: "Dr. Emily Rodriguez"
      position: "Head of AI Research"
      bio: "Leading researcher in machine learning and artificial intelligence applications."
      image: "/api/placeholder/300/300",
      linkedin: "#",
      twitter: "#"
    },,,
    {
      name: "David Kim"
      position: "VP of Engineering"
      bio: "Full-stack development expert specializing in scalable micro SaaS architectures."
      image: "/api/placeholder/300/300",
      linkedin: "#",
      twitter: "#"
    },,,
    {
      name: "Lisa Thompson"
      position: "Head of Cybersecurity"
      bio: "Cybersecurity specialist with expertise in threat detection and incident response."
      image: "/api/placeholder/300/300",
      linkedin: "#",
      twitter: "#"
    },,,
    {
      name: "James Wilson"
      position: "VP of Cloud Operations"
      bio: "DevOps and cloud infrastructure expert with focus on automation and scalability."
      image: "/api/placeholder/300/300",
      linkedin: "#",
      twitter: "#"
    },,
  ];

  return (
    <>
      <Head>
        <title>Team - Zion Tech Group | Meet Our Expert Team</title>
        <meta name="description" content="Meet the talented team of experts at Zion Tech Group, leading innovation in AI, quantum computing, micro SaaS, and cutting-edge technology solutions." />
        <meta name="keywords" content="team, leadership, experts, AI researchers, engineers, cybersecurity specialists, cloud experts, Zion Tech Group team" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Team - Zion Tech Group | Meet Our Expert Team" />
        <meta property="og:description" content="Meet the talented team of experts at Zion Tech Group, leading innovation in technology." />
        <meta property="og:url" content="https://ziontechgroup.com/team" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Team - Zion Tech Group | Meet Our Expert Team" />
        <meta name="twitter:description" content="Meet the talented team of experts at Zion Tech Group." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  Zion Tech Group
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/team" className="text-blue-600 font-medium">Team</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Talented professionals dedicated to pushing the boundaries of technology and innovation.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600">
                Meet the visionaries and experts driving innovation at Zion Tech Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.linkedin} className="text-blue-600 hover:text-blue-800">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href={member.twitter} className="text-blue-600 hover:text-blue-800">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and technology.
            </p>
            <Link
              href="/careers"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
            >
              View Open Positions
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400">
                  Leading provider of innovative technology solutions and services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services" className="hover:text-white">All Services</Link></li>
                  <li><Link href="/ai-services" className="hover:text-white">AI Services</Link></li>
                  <li><Link href="/micro-saas" className="hover:text-white">Micro SaaS</Link></li>
                  <li><Link href="/it-services" className="hover:text-white">IT Services</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="/team" className="hover:text-white">Team</Link></li>
                  <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                  <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                  <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}