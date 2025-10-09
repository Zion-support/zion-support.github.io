import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Eye, Headphones, Target, Zap } from 'lucide-react';

const ARVRSolutionsPage: React.FC = () => {
  const arvrServices = [
    {
      title: 'Augmented Reality Applications',
      description: 'Create immersive AR experiences that overlay digital content onto the real world for enhanced user engagement.',
      icon: '🥽',
      price: '$2,500/month',
      features: [
        'AR App Development',
        '3D Object Recognition',
        'Real-time Tracking',
        'Cross-platform Support',
        'Cloud Integration',
        'Analytics & Insights'
      ],
      benefits: [
        'Increase user engagement by 300%',
        'Improve conversion rates by 40%',
        'Enhance customer experience',
        'Enable remote collaboration'
      ],
      marketPrice: '$5,000-12,000/month',
      category: 'AR Development',
      technologies: ['ARKit', 'ARCore', 'Unity', 'Unreal Engine', 'WebXR', 'OpenCV'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Virtual Reality Experiences',
      description: 'Build immersive VR applications for training, entertainment, and business applications.',
      icon: '🥽',
      price: '$3,000/month',
      features: [
        'VR App Development',
        '3D Environment Design',
        'Haptic Feedback',
        'Multi-user Support',
        'Performance Optimization',
        'Content Management'
      ],
      benefits: [
        'Create realistic training simulations',
        'Improve learning retention by 80%',
        'Enable remote experiences',
        'Reduce training costs by 60%'
      ],
      marketPrice: '$6,000-15,000/month',
      category: 'VR Development',
      technologies: ['Unity', 'Unreal Engine', 'Oculus SDK', 'SteamVR', 'WebXR', 'OpenVR'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mixed Reality Solutions',
      description: 'Combine AR and VR technologies to create seamless mixed reality experiences for enterprise applications.',
      icon: '🔮',
      price: '$3,500/month',
      features: [
        'MR App Development',
        'Spatial Computing',
        'Hand Tracking',
        'Voice Commands',
        'Cloud Rendering',
        'Enterprise Integration'
      ],
      benefits: [
        'Enable next-gen collaboration',
        'Improve productivity by 50%',
        'Reduce physical space requirements',
        'Enhance remote work capabilities'
      ],
      marketPrice: '$8,000-20,000/month',
      category: 'Mixed Reality',
      technologies: ['HoloLens', 'Magic Leap', 'Unity', 'Unreal Engine', 'Azure Spatial Anchors'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AR/VR Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AR/VR development services. Augmented reality, virtual reality, and mixed reality solutions for immersive experiences." />
        <meta name="keywords" content="AR VR development, augmented reality, virtual reality, mixed reality, immersive technology, XR solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/ar-vr-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AR/VR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create immersive experiences that transform how users interact with digital content and the world around them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Immersive Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AR/VR development services designed for various industries and use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {arvrServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-sm text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Enter the Metaverse?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join innovative companies using our AR/VR solutions to create immersive experiences that engage and delight their customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                Start Your AR/VR Journey
              </a>
              <a
                href="tel:+13024640950"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ARVRSolutionsPage;