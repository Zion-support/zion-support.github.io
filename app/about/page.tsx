export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">About Zion Tech Group</h1>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 mb-6">
          We are a technology company focused on delivering enterprise-grade AI, micro SaaS, 
          and IT solutions that drive real business results.
        </p>
        
        <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
        <p className="text-gray-300 mb-6">
          To empower businesses with cutting-edge technology solutions that scale efficiently 
          and deliver measurable value.
        </p>
        
        <h2 className="text-2xl font-semibold text-white mb-4">Our Services</h2>
        <ul className="text-gray-300 mb-6 space-y-2">
          <li>• AI and Machine Learning Solutions</li>
          <li>• Micro SaaS Development</li>
          <li>• Cloud Infrastructure and Migration</li>
          <li>• DevOps and Site Reliability Engineering</li>
          <li>• Enterprise Software Development</li>
        </ul>
      </div>
    </div>
  );
}