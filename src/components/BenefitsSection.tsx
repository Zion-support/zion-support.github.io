import React from 'react';
<<<<<<< HEAD

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '🚀',
      title: 'Faster Implementation',
      description: 'Get your solutions up and running quickly with our streamlined processes.',
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Reduce operational costs while improving efficiency and productivity.',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all services.',
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Grow your business with solutions that scale with your needs.',
    },
    {
      icon: '🎯',
      title: 'Expert Support',
      description: '24/7 support from our team of certified professionals.',
    },
    {
      icon: '⚡',
      title: 'Latest Technology',
      description: 'Stay ahead with cutting-edge AI and IT solutions.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Zion Tech?</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We deliver exceptional value through innovative solutions, expert support, and proven results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
const getBenefits = (t: any) => [


  {

    title: t('benefits.ai_matchmaking'),
    description: t('benefits.ai_matchmaking_desc'),
    icon: <Bot className="w-8 h-8" />},
  {
    title: t('benefits.global_availability'),
    description: t('benefits.global_availability_desc'),
    icon: <Globe className="w-8 h-8" />},
  {
    title: t('benefits.support_24_7'),
    description: t('benefits.support_24_7_desc'),
    icon: <Clock className="w-8 h-8" />},
  {
    title: t('benefits.cost_reduction'),
    description: t('benefits.cost_reduction_desc'),

          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>
            {t('home.benefits_subtitle')}
          </p>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>          {benefits.map((benefit, index) => (        


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
=======
import { CheckCircle, Shield, Zap, Users, Clock, Award, Bot, Globe, TrendingDown  } from 'lucide-react';
interface Benefit  {title: string;
  description: string;
  icon: React.ReactNode;
}const BenefitsSection: React.FC = () => {const benefits: Benefit[] = [;
    {icon: <CheckCircle className="w-8 h-8 text-green-500" />,title: 'Proven Results',description: 'We deliver measurable results with a 98% client satisfaction rate and proven ROI.';
    },{icon: <Shield className="w-8 h-8 text-blue-500" />,title: 'Enterprise Security',description: 'Bank-level security with SOC 2 compliance and advanced threat protection.';
    },{icon: <Bot className="w-8 h-8 text-purple-500" />,title: 'AI-Powered Solutions',description: 'Our advanced AI algorithms provide cutting-edge solutions tailored to your specific needs.';
    },{icon: <Globe className="w-8 h-8 text-indigo-500" />,title: 'Global Reach',description: 'Access a worldwide network of skilled professionals and cutting-edge services.';
    },{icon: <Clock className="w-8 h-8 text-orange-500" />,title: '24/7 Support',description: 'Round-the-clock assistance from our dedicated team to ensure your success.';
    },{icon: <TrendingDown className="w-8 h-8 text-red-500" />,title: 'Cost Reduction',description: 'Save up to 40% on your projects through direct connections and competitive pricing.';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    }
  ];return (<section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold text-gray-900 mb-4">;
            Why Choose Zion Tech?;
          </h2>;
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
            We combine cutting-edge technology with exceptional service to deliver;
            solutions that drive real business value.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">;
          {benefits.map((benefit, index) => (<div;
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2";
            >;
              <div className="text-blue-600 mb-4 flex justify-center">;
                {benefit.icon}
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">;
                {benefit.title}
              </h3>;
              <p className="text-gray-600 text-center">;
                {benefit.description}
              </p>;
            </div>;
          ))}
        </div>;
        <div className="mt-16 text-center">;
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">;
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>;
            <p className="text-xl mb-6 opacity-90">;
              Join hundreds of companies that trust Zion Tech for their technology needs.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                Start Your Project;
              </button>;
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">;
                Schedule a Demo;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
  );


  );
}
";
    title: "24 / 7 Support", ";
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.", ";
    icon: <Clock className="w - 8 h - 8"  />, ";
    color: "from - zion - blue to - zion - blue - dark", ";
    bg_color: "from - zion - blue / 20 to - zion - blue - dark / 20", "    stats: "99.9% Uptime",
    features: [";
      "Round - the - clock assistance", ";
      "Expert technical support", ";
      "Rapid response times", ";
      "Proactive monitoring" ];
},
  {
";
    title: "Cost Reduction", ";
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.", ";
    icon: <TrendingDown className="w - 8 h - 8"  />, ";
    color: "from - zion - green to - zion - green - dark", ";
    bg_color: "from - zion - green / 20 to - zion - green - dark / 20", "    stats: "40% Cost Savings",
    features: [";
      "Direct provider connections", ";
      "Competitive pricing", ";
      "Bulk discount options", ";
      "Transparent cost structure" ];
}
;
=======
  )}export default BenefitsSection;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
