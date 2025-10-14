const AiServicesPage: React.FC = () => {
  const services = [{
      icon: Brain,'
      title: 'AI Consulting',';
      description: 'Strategic AI consulting to help you identify opportunities and develop AI roadmaps.',';
      color: 'from-purple-500 to-pink-500'';}
    },
    {
      icon: BarChart3,'
      title: 'AI Analytics',';
      description: 'Advanced analytics solutions powered by machine learning and AI algorithms.',';
      color: 'from-blue-500 to-cyan-500'';}
    },
    {
      icon: Zap,'
      title: 'AI Automation',';
      description: 'Intelligent automation solutions to streamline your business processes.',';
      color: 'from-green-500 to-emerald-500'';}
    },
    {
      icon: FileText,'
      title: 'AI Content Generation',';
      description: 'AI-powered content creation for marketing, documentation, and communication.',';
      color: 'from-orange-500 to-red-500'';}
    },
    {
      icon: MessageSquare,'
      title: 'AI Customer Service',';
      description: 'Intelligent chatbots and customer service solutions powered by AI.',';
      color: 'from-indigo-500 to-purple-500'';}
    },
    {


    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "MedTech Solutions",
      role: "CTO",
      content: "Zion's AI healthcare solutions have revolutionized our diagnostic capabilities. We've seen a 40% improvement in accuracy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The AI automation tools have transformed our operations. We've reduced manual work by 80% and increased productivity significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "FinanceFlow",
      role: "Head of Analytics",
      content: "Their AI analytics platform has given us insights we never had before. Our decision-making process is now data-driven and highly effective.",
      rating: 5;
  ];
  return (
    <div className="page-container">
      <div className="container mx-auto px-4 py-8">
        <h1>page</h1>
        <div className="prose max-w-none">
          <p>
            Discover our comprehensive page solutions designed to transform your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 1</h3>
              <p>Description of feature 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
              <p>Description of feature 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 3</h3>
              <p>Description of feature 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default pagePage;