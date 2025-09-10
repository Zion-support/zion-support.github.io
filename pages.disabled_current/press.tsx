import React from 'react';
const pressReleases = [
  {
    title: "Zion Tech Group Launches Revolutionary AI-Powered Drug Discovery Platform",
    date: "2025-01-15",
    summary: "New platform reduces drug discovery time by 50% and lowers R&D costs by 40%",
    category: "Product Launch",
    link: "#"
  },
  {
    title: "Company Expands Quantum Computing Infrastructure Services",
    date: "2025-01-10",
    summary: "Leading provider of quantum computing solutions announces new service offerings",
    category: "Service Expansion",
    link: "#"
  },
  {
    title: "Zion Tech Group Partners with Major Healthcare Organizations",
    date: "2025-01-05",
    summary: "Strategic partnerships to advance AI-powered healthcare solutions",
    category: "Partnership",
    link: "#"
  },
  {
    title: "Company Recognized as Top AI Services Provider",
    date: "2024-12-20",
    summary: "Industry recognition for excellence in AI and technology solutions",
    category: "Award",
    link: "#"
  }
];

const mediaKit = {
  logo: "/images/logo.png",
  pressPhotos: [
    { title: "CEO Headshot", url: "/images/ceo-headshot.jpg" },
    { title: "Team Photo", url: "/images/team-photo.jpg" },
    { title: "Office Building", url: "/images/office-building.jpg" }
  ],
  companyFacts: [
    "Founded in 2006",
    "235+ Services & Solutions",
    "3,200+ Projects Completed",
    "180+ Expert Team Members",
    "18+ Years Experience"
  ]
};

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

export default function PressPage() {
  return (
    <Layout
      title="Press & Media - Zion Tech Group"
      description="Latest news, press releases, and media resources from Zion Tech Group. Stay updated with our latest announcements and achievements."
      keywords="press, media, news, announcements, Zion Tech Group, AI services, technology solutions"
      canonical="https://ziontechgroup.com/press"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Press & Media
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay updated with our latest news, announcements, and achievements in AI and technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Press Releases
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our latest announcements, product launches, and company milestones.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {release.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(release.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {release.summary}
                  </p>
                  
                  <Link
                    href={release.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Kit
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Download our media resources including logos, photos, and company information.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Company Facts */}
              <motion.div
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-blue-600" />
                  Company Facts
                </h3>
                <ul className="space-y-2">
                  {mediaKit.companyFacts.map((fact, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Press Photos */}
              <motion.div
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-blue-600" />
                  Press Photos
                </h3>
                <ul className="space-y-2">
                  {mediaKit.pressPhotos.map((photo, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ExternalLink className="w-4 h-4 mr-2 text-blue-500" />
                      <a href={photo.url} className="hover:text-blue-600 transition-colors">
                        {photo.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-blue-600" />
                  Media Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Need More Information?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Contact our media team for additional resources, interviews, or press inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Contact Media Team
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
=======
import SEO from '../components/SEO';

export default function PressPage() {
	return (
		<>
			<SEO title="Press | Zion Tech Group" description="News, media resources, and press inquiries." canonical="/press" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Press</h1>
				<p className="text-gray-300">Media kit and announcements coming soon.</p>
			</div>
		</>
	);
}