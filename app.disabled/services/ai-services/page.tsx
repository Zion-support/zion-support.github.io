import Link from 'next/link';
import {
  Brain,
  MessageSquare,
  Eye,
  BarChart3,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
} from 'lucide-react';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description:
    'Comprehensive AI services including machine learning, natural language processing, computer vision, and AI consulting to transform your business.',
  keywords:
    'AI services, machine learning, NLP, computer vision, AI consulting, artificial intelligence',
};

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  features,
}: {
  title: string;
  description: string;
  icon: any;
  features: string[];
}) => (
  <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
    <div className='bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6'>
      <Icon className='h-8 w-8 text-blue-600' />
    </div>
    <h3 className='text-2xl font-bold text-gray-900 mb-4'>{title}</h3>
    <p className='text-gray-600 mb-6'>{description}</p>
    <ul className='space-y-2'>
      {features.map((feature, index) => (
        <li key={index} className='flex items-center text-sm text-gray-600'>
          <CheckCircle className='h-4 w-4 text-green-500 mr-2' />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default function AiServicesPage() {
  const services = [
    {
      title: 'Machine Learning',
      description:
        'Build intelligent systems that learn and adapt to your business needs with custom ML models and algorithms.',
      icon: Brain,
      features: [
        'Predictive Analytics',
        'Custom Model Development',
        'Data Preprocessing',
        'Model Training & Optimization',
      ],
    },
    {
      title: 'Natural Language Processing',
      description:
        'Process and understand human language for better customer interactions and automated text analysis.',
      icon: MessageSquare,
      features: [
        'Chatbots & Virtual Assistants',
        'Sentiment Analysis',
        'Text Classification',
        'Language Translation',
      ],
    },
    {
      title: 'Computer Vision',
      description:
        'Extract insights from images and videos using advanced AI algorithms for visual recognition and analysis.',
      icon: Eye,
      features: [
        'Image Recognition',
        'Object Detection',
        'Facial Recognition',
        'Video Analytics',
      ],
    },
    {
      title: 'AI Analytics',
      description:
        'Transform your data into actionable insights with AI-powered analytics and business intelligence.',
      icon: BarChart3,
      features: [
        'Predictive Modeling',
        'Anomaly Detection',
        'Pattern Recognition',
        'Real-time Analytics',
      ],
    },
    {
      title: 'AI Automation',
      description:
        'Automate complex business processes with intelligent AI solutions that work 24/7.',
      icon: Zap,
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Intelligent Routing',
        'Smart Scheduling',
      ],
    },
    {
      title: 'AI Security',
      description:
        'Protect your AI systems and data with advanced security measures and compliance frameworks.',
      icon: Shield,
      features: [
        'AI Model Security',
        'Data Privacy Protection',
        'Threat Detection',
        'Compliance Auditing',
      ],
    },
  ];

  const benefits = [
    'Increased operational efficiency by up to 40%',
    'Reduced manual processing time by 60%',
    'Improved decision-making with data-driven insights',
    'Enhanced customer experience through personalization',
    'Cost savings through process automation',
    'Scalable solutions that grow with your business',
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>AI Services</h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              Transform Your Business with Cutting-Edge Artificial Intelligence
            </p>
            <p className='text-lg text-blue-200 max-w-3xl mx-auto mb-12'>
              Leverage the power of AI to automate processes, gain insights, and
              drive innovation across your organization. Our comprehensive AI
              services help you stay ahead of the competition.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center'
              >
                Get Free Consultation
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
              <Link
                href='/solutions'
                className='border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300'
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Our AI Services
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive AI solutions tailored to your specific business
              needs and objectives.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <div>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                  Why Choose Our AI Services?
                </h2>
                <p className='text-xl text-gray-600 mb-8'>
                  Our AI solutions deliver measurable results and provide a
                  competitive advantage for your business.
                </p>
                <ul className='space-y-4'>
                  {benefits.map((benefit, index) => (
                    <li key={index} className='flex items-start'>
                      <CheckCircle className='h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0' />
                      <span className='text-lg text-gray-700'>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl'>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='text-center'>
                    <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <span className='text-2xl font-bold'>40%</span>
                    </div>
                    <p className='text-sm text-gray-600'>Efficiency Increase</p>
                  </div>
                  <div className='text-center'>
                    <div className='bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <span className='text-2xl font-bold'>60%</span>
                    </div>
                    <p className='text-sm text-gray-600'>Time Reduction</p>
                  </div>
                  <div className='text-center'>
                    <div className='bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <span className='text-2xl font-bold'>95%</span>
                    </div>
                    <p className='text-sm text-gray-600'>Accuracy Rate</p>
                  </div>
                  <div className='text-center'>
                    <div className='bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <span className='text-2xl font-bold'>24/7</span>
                    </div>
                    <p className='text-sm text-gray-600'>Automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Our AI Development Process
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              A proven methodology that ensures successful AI implementation and
              maximum ROI.
            </p>
          </div>

          <div className='max-w-4xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              <div className='text-center'>
                <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                  1
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Discovery
                </h3>
                <p className='text-gray-600'>
                  Analyze your business needs and identify AI opportunities.
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                  2
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Design</h3>
                <p className='text-gray-600'>
                  Create a comprehensive AI strategy and solution architecture.
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                  3
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Develop
                </h3>
                <p className='text-gray-600'>
                  Build and train AI models with your specific data and
                  requirements.
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                  4
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Deploy</h3>
                <p className='text-gray-600'>
                  Implement and monitor AI solutions with ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Ready to Transform Your Business with AI?
          </h2>
          <p className='text-xl mb-8 text-blue-100 max-w-3xl mx-auto'>
            Let's discuss how our AI services can help you achieve your business
            goals and stay ahead of the competition.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300'
            >
              Start Your AI Journey
            </Link>
            <Link
              href='/solutions'
              className='border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300'
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
