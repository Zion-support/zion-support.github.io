export const metadata = {
  title: "About | Zion Tech Group",
  description: "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
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
            cybersecurity, cloud infrastructure, and digital transformation
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg mb-6">
              To empower businesses with cutting-edge technology solutions that
              drive growth, efficiency, and innovation. We believe in the
              transformative power of AI, blockchain, and modern IT
              infrastructure.
            </p>
            <p className="text-gray-300 text-lg">
              Our team of experts is dedicated to delivering solutions that not
              only meet today's challenges but also prepare our clients for
              tomorrow's opportunities.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg mb-6">
              To be the world's most trusted technology partner, known for
              delivering innovative solutions that transform businesses and
              create lasting value.
            </p>
            <p className="text-gray-300 text-lg">
              We envision a future where technology seamlessly integrates with
              business processes, enabling organizations to achieve their full
              potential.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Expert Team
              </h3>
              <p className="text-gray-300">
                Our team consists of industry experts with years of experience
                in AI, blockchain, and IT solutions.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Proven Track Record
              </h3>
              <p className="text-gray-300">
                We have successfully delivered projects for clients across
                various industries and scales.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Innovation Focus
              </h3>
              <p className="text-gray-300">
                We stay at the forefront of technology trends and continuously
                innovate our solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}