import Navigation from '../components/Navigation';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Online Learning Platform | Zion Tech Group',
  description: 'AI-powered online learning platform solutions',
  keywords: 'online learning, AI, education, platform',
  openGraph: {
    title: 'Online Learning Platform | Zion Tech Group',
    description: 'AI-powered online learning platform solutions',
    type: 'website',
  }
};

const features = [
  {
    icon: CheckCircle,
    title: 'AI-Powered Learning',
    description: 'Personalized learning experiences with AI',
    benefits: ['Adaptive content', 'Smart recommendations', 'Progress tracking']
  },
  {
    icon: CheckCircle,
    title: 'Interactive Content',
    description: 'Engaging multimedia learning materials',
    benefits: ['Video lessons', 'Interactive quizzes', 'Virtual labs']
  },
  {
    icon: CheckCircle,
    title: 'Real-time Analytics',
    description: 'Comprehensive learning analytics',
    benefits: ['Performance metrics', 'Learning paths', 'Progress reports']
  },
  {
    icon: CheckCircle,
    title: 'Mobile Learning',
    description: 'Learn anywhere, anytime',
    benefits: ['Mobile app', 'Offline access', 'Sync across devices']
  }
];

const benefits = [
  'Improved learning outcomes',
  'Personalized education',
  'Flexible scheduling',
  'Cost-effective solutions'
];

function OnlinelearningplatformPage() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Page Title
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Page description
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Powerful Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-emerald-200">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose Our Solution?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <ArrowRight className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who trust our solutions
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnlinelearningplatformPage;