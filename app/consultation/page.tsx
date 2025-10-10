'use client';
interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}
const ConsultationPage: React.FC = () => {
  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'Strategy Consultation',
      description: 'Comprehensive business strategy and technology roadmap planning',
      duration: '2 hours',
      price: '$500',
      features: [
        'Business analysis and assessment',
        'Technology roadmap development',
        'Competitive analysis',
        'Implementation timeline',
        'Follow-up support'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Consultation',
      description: 'Deep dive into technical architecture and implementation details',
      duration: '1.5 hours',
      price: '$350',
      features: [
        'Technical architecture review',
        'Technology stack recommendations',
        'Performance optimization',
        'Security assessment',
        'Implementation guidance'
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Solutions Consultation',
      description: 'Specialized consultation for AI and machine learning implementation',
      duration: '2.5 hours',
      price: '$750',
      features: [
        'AI strategy development',
        'Use case identification',
        'Model selection and training',
        'Data pipeline design',
        'ROI analysis'
      ],
      popular: false
    {
      icon: Zap,
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and data-driven insights'
    },
    {
      icon: Target,
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and cost-effective cloud infrastructure and services'
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Complete digital overhaul to modernize your business processes'
    },
    {
      icon: Award,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and compliance'
    }
  ];
  };
  return (
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get a free consultation with our technology experts. Discuss your AI, cloud, and digital transformation needs with Zion Tech Group." />
        <meta name="keywords" content="free consultation, technology consulting, AI consultation, cloud consulting, digital transformation" />
      </Helmet>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleBooking(type.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    Book Consultation;
  </
                </div>
              ))}
            </div>
          </div>
        </section>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ConsultationPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-d277
