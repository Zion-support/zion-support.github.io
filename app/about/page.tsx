export const metadata = {
  title: "About | Zion Tech Group",
  description: "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600">
            Delivering enterprise-grade AI, micro SaaS, and IT solutions that drive real business results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We specialize in creating intelligent solutions that transform how businesses operate. 
                From AI-powered automation to custom micro SaaS applications, we deliver technology 
                that drives measurable results.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Why Choose Us</h3>
              <p className="text-blue-800 text-sm">
                We combine deep technical expertise with business acumen to deliver solutions 
                that not only work but drive real business value.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🤖</div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI & Machine Learning</h3>
                  <p className="text-gray-600 text-sm">Custom AI solutions that automate complex processes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Micro SaaS Development</h3>
                  <p className="text-gray-600 text-sm">Scalable applications that solve specific business problems</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🔧</div>
                <div>
                  <h3 className="font-semibold text-gray-900">IT Services</h3>
                  <p className="text-gray-600 text-sm">Comprehensive technology solutions and support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ready to transform your business with technology?</p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}