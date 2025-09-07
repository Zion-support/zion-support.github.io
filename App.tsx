import ServiceCard from './src/components/ServiceCard';
const services = [
    {
      title: 'AI Solutions',
  description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
      icon: '🤖',}
  features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],}
    },
    {
      title: 'IT Services',
  description: 'Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
      icon: '💻',}
  features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support'],}
    },
    {
      title: 'Cloud Solutions',
  description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.',
      icon: '☁️',}
  features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling'],}
    },
    {
      title: 'Cybersecurity',
  description: 'Advanced security solutions to protect your business from evolving threats and ensure compliance.',
      icon: '🔒',}
  features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits'],}
    },
    {
      title: 'Data Analytics',
  description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
      icon: '📊',}
  features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],}
    },
    {
      title: 'Digital Transformation',
  description: 'Complete digital transformation services to modernize your business processes and improve efficiency.',
      icon: '🚀',}
  features: ['Process Automation', 'Workflow Optimization', 'Digital Strategy', 'Change Management'],}
    },
  ];

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
return (
    <div className=\"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100\" />
      <ScrollToTop />
      <Header />
      
      <main className=\"container mx-auto px-4 py-8\" />
        <div className=\"text-center mb-12\" />
          <h1 className=\"text-5xl font-bold text-gray-900 mb-6\" />
            Welcome to Zion Tech Group;
          </h1>
          <p className=\"text-xl text-gray-600 mb-8\" />
            Leading the future of technology with AI, blockchain, and innovative solutions;
          </p>
          <div className=\"flex justify-center space-x-4\" />
            <button className=\"bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors\" />
              Get Started;
            </button>
            <button className=\"border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors\" />
              Learn More;
            </button>
          </div>
        </div>

        <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12\" />
          <div className=\"bg-white p-6 rounded-lg shadow-lg\" />
            <div className=\"text-4xl mb-4\" />🤖</div>
            <h3 className=\"text-xl font-semibold mb-2\" />AI Solutions</h3>
            <p className=\"text-gray-600\" />
              Cutting-edge artificial intelligence solutions for your business needs.
            </p>
          </div>
          
          <div className=\"bg-white p-6 rounded-lg shadow-lg\" />
            <div className=\"text-4xl mb-4\" />🔗</div>
            <h3 className=\"text-xl font-semibold mb-2\" />Blockchain</h3>
            <p className=\"text-gray-600\" />
              Secure, decentralized solutions powered by blockchain technology.
            </p>
          </div>
          
          <div className=\"bg-white p-6 rounded-lg shadow-lg\" />
            <div className=\"text-4xl mb-4\" />☁️</div>
            <h3 className=\"text-xl font-semibold mb-2\" />Cloud Services</h3>
            <p className=\"text-gray-600\" />
              Scalable cloud infrastructure and deployment solutions.
            </p>
          </div>
        </div>

        <div className=\"text-center\" />
          <h2 className=\"text-3xl font-bold text-gray-900 mb-4\" />
            Why Choose Zion Tech Group?
          </h2>
          <p className=\"text-lg text-gray-600 max-w-3xl mx-auto\" />
            We combine cutting-edge technology with deep industry expertise to deliver;
solutions that drive real business value. Our team of experts is dedicated;
to helping you succeed in the digital age.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
export default function App(): React.JSX.Element {
  return (
    <main />
      <h1 />Hello App</h1>
    </main>
    <div className=\"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50\" />}
      <main className=\"relative\" />}
        {/* Hero Section */}
        <section className=\"relative py-20 px-4 text-center\" />
          <div className=\"container mx-auto max-w-6xl\" />
            <h1 className=\"text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent\" />
              Zion Tech Group;
            </h1>
            <p className=\"text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto\" />
              Your trusted partner for AI and IT solutions. We help businesses transform through;
cutting-edge technology and innovative solutions.
            </p>
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />
              <button className=\"bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors\" />
                Get Started;
              </button>
              <button className=\"border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors\" />
                Learn More;
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className=\"py-16 px-4 bg-white\" />
          <div className=\"container mx-auto max-w-6xl\" />
            <h2 className=\"text-4xl font-bold text-center mb-12\" />Our Services</h2>
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\" />
              {services.map((service, index) => (}
                <ServiceCard;}
key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                  pricing={service.pricing}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
export default function App(): React.JSX.Element {
    <main />
      <h1 />Hello App</h1>
    </main>
    <div className=\"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50\" />
      <ParticleBackground />
      <Header />
}
      <main className=\"relative\" />}
        {/* Hero Section */}
        <section className=\"relative py-20 px-4 text-center\" />
          <div className=\"container mx-auto max-w-6xl\" />
            <h1 className=\"text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent\" />
              Welcome to Zion Tech;
            </h1>
            <p className=\"text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto\" />
              Your trusted partner for AI and IT solutions. We help businesses transform through;
cutting-edge technology and innovative solutions.
            </p>
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />
              <button className=\"bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors\" />
                Get Started;
              </button>
              <button className=\"border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors\" />
                Learn More;
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className=\"py-16 px-4 bg-white\" />
          <div className=\"container mx-auto max-w-6xl\" />
            <h2 className=\"text-4xl font-bold text-center mb-12\" />Our Services</h2>
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\" />
              {services.map((service, index) => (}
                <ServiceCard;}
key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                  pricing={service.pricing}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <BenefitsSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Testimonials Section */}
        <section className=\"py-16 px-4 bg-gray-50\" />
          <div className=\"container mx-auto max-w-6xl\" />
            <h2 className=\"text-4xl font-bold text-center mb-12\" />What Our Clients Say</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
      <ChatAssistant />
      <ScrollToTop />
    </div>
export default function App(): React.JSX.Element {}
  );}
}