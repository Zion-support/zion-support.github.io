export const metadata = { 
  title: 'Cybersecurity Services | Zion Tech Group',
  description: 'Comprehensive cybersecurity solutions to protect your business from threats.',
};

export default function CybersecurityPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cybersecurity Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Protect your business with comprehensive cybersecurity solutions and best practices.
        </p>
      </div>
      
      <div className="text-center">
        <a 
          href="/contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}