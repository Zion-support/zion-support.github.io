import React, { JSX } from 'react';
import React from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import SEO from './src/components/SEO';
import ErrorBoundary from './src/components/ErrorBoundary';
import LoadingSpinner from './src/components/LoadingSpinner';
import { BackToTopButton  } from './src/components/BackToTopButton';
import ScrollToTop from './src/components/ScrollToTop';
import PerformanceMonitor from './src/components/PerformanceMonitor';
import { ThemeProvider  } from './src/components/ThemeProvider';
const App: React.FC = () => {return (<ErrorBoundary>;
      <ThemeProvider>;
        <SEO />;
        <PerformanceMonitor />;
        <ScrollToTop />;
        <Header />;
        <main>;
          <div className="container mx-auto px-4 py-8">;
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech Group</h1>;
            <p className="text-center text-lg text-gray-600 dark:text-gray-300">;
              Your trusted partner for innovative technology solutions.;
            </p>;
          </div>;
        </main>;
        <Footer />;
        <BackToTopButton />;
        <LoadingSpinner />;
      </ThemeProvider>;
    </ErrorBoundary>;
  )}export default App;
import ParticleBackground from './src/components/ParticleBackground';

export default function App() {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
      icon: '🤖',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
      icon: '💻',
      features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.',
      icon: '☁️',
      features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving threats and ensure compliance.',
      icon: '🔒',
      features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
      icon: '📊',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and improve efficiency.',
      icon: '🚀',
      features: ['Process Automation', 'Workflow Optimization', 'Digital Strategy', 'Change Management']
    }
  ];

export default function App(): JSX.Element {
export default function App(): React.JSX.Element {
export default function App(): React.JSX.Element {
export default function App(): JSX.Element {
  return (
    <main>
      <h1>Hello App</h1>
    </main>

  return (
    <main>

    </main>
  );
}
