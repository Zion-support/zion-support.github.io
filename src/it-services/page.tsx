import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ITServicesPage() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            IT Services & Infrastructure
          </h1>
          <p className="text-lg text-gray-300 text-center mb-12">
            Comprehensive IT solutions to support and optimize your business infrastructure.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}