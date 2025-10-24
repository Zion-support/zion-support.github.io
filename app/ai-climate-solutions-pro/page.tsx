import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AIClimateSolutionsProZionTechGroup() {
  return (
    <div>
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            AI Climate Solutions Pro
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      title: 'Feature 1',
      description: 'Description of feature 1',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
    {
      title: 'Feature 2',
      description: 'Description of feature 2',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
    {
      title: 'Feature 3',
      description: 'Description of feature 3',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    }
  ];

  const benefits = [
    'Benefit 1',
    'Benefit 2',
    'Benefit 3',
    'Benefit 4',
    'Benefit 5',
    'Benefit 6'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional page solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Page
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0234
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional AI climate solutions pro services coming soon.
          </p>
          <Link
<<<<<<< HEAD
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
=======
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
<<<<<<< HEAD
</div>
=======
      <Footer />
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
  );
<<<<<<< HEAD
}
=======
};

export default PagePage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0234
