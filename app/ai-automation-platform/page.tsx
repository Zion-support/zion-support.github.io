import { Right, Circle, Workflow, Brain, Settings, Zap, Play } from 'lucide-react';
import ResponsiveContainer from '../components/ResponsiveContainer;';
import FuturisticCard from '../components/FuturisticCard;';
import FuturisticButton from '../components/FuturisticButton;
const AIAutomationPlatform = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with AI-powered workflows",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Decision Making",
      description: "AI-driven decision making for automated business processes",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Process Optimization",
      description: "Continuously optimize processes using machine learning",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Integration Hub",
      description: "Connect and automate across all your business systems",
      icon: <Circle className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
  }
  ];
  return (
    <div className="page-container">
      <div className="container mx-auto px-4 py-8">
        <h1>page</h1>
        <div className="prose max-w-none">
          <p></p>
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
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                    {feature.icon;
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title;
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                    {feature.description;
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;';