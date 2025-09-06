export const metadata = {
  title: "About | Zion Tech Group",
  description: "Learn about Zion Tech Group&apos;s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology solutions provider specializing in AI, 
            cybersecurity, cloud infrastructure, and digital transformation services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg mb-6">
              To empower businesses with cutting-edge technology solutions that drive 
              innovation, enhance security, and accelerate growth in the digital age.
            </p>
            <p className="text-gray-300 text-lg">
              We believe in the transformative power of technology and are committed 
              to delivering solutions that make a real difference for our clients.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg mb-6">
              To be the world&apos;s most trusted technology partner, known for our 
              innovation, reliability, and commitment to client success.
            </p>
            <p className="text-gray-300 text-lg">
              We envision a future where technology seamlessly integrates with 
              business operations to create unprecedented value and opportunities.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Expertise</h3>
              <p className="text-gray-300">
                Our team consists of industry-leading professionals with deep 
                expertise in AI, cybersecurity, and cloud technologies.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                We stay at the forefront of technology trends and continuously 
                innovate to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Reliability</h3>
              <p className="text-gray-300">
                We are committed to delivering reliable, scalable solutions that 
                meet the highest standards of quality and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}