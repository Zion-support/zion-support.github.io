export default function CommunityPage() {
  const communityFeatures = [
    {
      title: "Developer Forums",
      description: "Connect with developers and share knowledge",
      icon: MessageCircle,
      features: ["Technical Discussions", "Code Sharing", "Problem Solving"]
    },
    {
      title: "Events & Webinars",
      description: "Join our regular events and learning sessions",
      icon: Calendar,
      features: ["Monthly Webinars", "Tech Talks", "Workshops"]
    },
    {
      title: "Expert Network",
      description: "Access to our network of technology experts",
      icon: Users,
      features: ["Mentorship", "Consultations", "Collaboration"]
    },
    {
      title: "Recognition Program",
      description: "Get recognized for your contributions",
      icon: Award,
      features: ["Community Badges", "Contributor Recognition", "Special Access"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our <span className="text-blue-600">Community</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connect with developers, technologists, and innovators from around the world. 
                Share knowledge, learn new skills, and grow together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Join Community
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/events"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Events
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover what makes our community special and how you can get involved.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Connect with like-minded individuals and be part of our growing community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Join Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
=======
import React from 'react';
import Head from 'next/head';

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
				<div className="grid md:grid-cols-2 gap-6">
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Get Help</h2>
						<p className="text-slate-300">Visit the <a className="text-cyan-400 underline" href="/support">Support Center</a> or email <a className="text-purple-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
					</div>
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Follow Us</h2>
						<ul className="text-slate-300 space-y-1">
							<li><a className="text-cyan-400" href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
							<li><a className="text-cyan-400" href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer">GitHub</a></li>
							<li><a className="text-cyan-400" href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer">Instagram</a></li>
							<li><a className="text-cyan-400" href="https://youtube.com/@ziontechgroup" target="_blank" rel="noopener noreferrer">YouTube</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}