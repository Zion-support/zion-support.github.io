export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of engineers, designers, and strategists who believe that 
            technology should be accessible, powerful, and transformative for every business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To democratize access to enterprise-grade technology solutions, making AI, 
              cloud infrastructure, and software development accessible to businesses of all sizes.
            </p>
            <p className="text-lg text-gray-600">
              We believe that every company, regardless of size, should have access to 
              the same powerful tools and technologies that drive innovation at the world's 
              largest enterprises.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Innovation through simplicity</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Client success is our success</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Transparency in everything we do</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Continuous learning and improvement</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Let's discuss how we can help you achieve your goals with our 
              comprehensive technology solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}