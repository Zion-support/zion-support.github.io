export const metadata = {
  title: "About | Zion Tech Group",
  description:
    "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a technology consulting firm specializing in AI, micro SaaS development, and enterprise IT solutions. Our mission is to help businesses leverage cutting-edge technology to drive growth and efficiency.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To democratize access to enterprise-grade technology solutions, making AI, cloud infrastructure, and software development accessible to businesses of all sizes. We believe every company should have the tools to compete in the digital age.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A world where every business can leverage advanced technology to compete effectively and scale efficiently, regardless of their technical expertise. We envision a future where technology barriers don't limit business potential.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Results-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on delivering measurable business outcomes and ROI for every project we undertake.
              </p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of technology trends and best practices to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                We work as an extension of your team, building long-term relationships based on trust.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">AI & Machine Learning</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Large Language Model (LLM) applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Retrieval-Augmented Generation (RAG)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  AI agents and automation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  MLOps and model deployment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Custom AI model training
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cloud & Infrastructure</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  AWS, GCP, and Azure migration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Kubernetes and containerization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  DevOps and CI/CD pipelines
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Security and compliance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Cost optimization and monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                KJ
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kleber Johnson</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Technology visionary with 10+ years in AI, cloud architecture, and enterprise solutions.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                AS
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Alex Smith</h3>
              <p className="text-green-600 font-medium mb-4">CTO</p>
              <p className="text-gray-600 text-sm">
                Full-stack architect specializing in scalable microservices and AI integration.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                MR
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Rodriguez</h3>
              <p className="text-purple-600 font-medium mb-4">Head of AI</p>
              <p className="text-gray-600 text-sm">
                ML engineer and AI researcher focused on practical business applications.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help your business leverage technology for growth.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}