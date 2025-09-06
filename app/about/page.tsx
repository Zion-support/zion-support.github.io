export const metadata = {
  title: "About | Zion Tech Group",
  description: "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Zion Tech Group
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We are a technology consulting firm specializing in AI, micro SaaS
            development, and enterprise IT solutions. Our mission is to help
            businesses leverage cutting-edge technology to drive growth and
            efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To democratize access to enterprise-grade technology
                solutions, making AI, cloud infrastructure, and software
                development accessible to businesses of all sizes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of innovative technology solutions
                that transform how businesses operate and compete in the
                digital economy.
              </p>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  AI & Machine Learning
                </h3>
                <p className="text-gray-600">
                  We build intelligent systems that automate processes,
                  analyze data, and provide insights that drive business
                  decisions.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Micro SaaS Development
                </h3>
                <p className="text-gray-600">
                  We create scalable, cloud-native applications that solve
                  specific business problems and generate recurring revenue.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Enterprise IT
                </h3>
                <p className="text-gray-600">
                  We help organizations modernize their infrastructure,
                  migrate to the cloud, and implement DevOps best practices.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Our team consists of experienced engineers, data scientists,
                  and consultants with deep expertise in modern technologies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Proven Track Record
                </h3>
                <p className="text-gray-600">
                  We have successfully delivered projects for startups to
                  Fortune 500 companies across various industries.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  End-to-End Solutions
                </h3>
                <p className="text-gray-600">
                  From strategy and design to development and deployment, we
                  provide comprehensive solutions tailored to your needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ongoing Support
                </h3>
                <p className="text-gray-600">
                  We don't just build and leave. We provide ongoing support
                  and maintenance to ensure your systems continue to perform
                  optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}