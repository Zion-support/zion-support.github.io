export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a technology company focused on delivering enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the leading provider of AI-powered solutions that transform how businesses operate and compete.
          </p>
        </div>
      </div>
    </div>
  );
}