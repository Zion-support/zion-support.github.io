import React from 'react'; import { motion  } from 'framer-motion'; import { Link  } from 'react-router-dom'; import { SEO } from '@/components/SEO'; ; export default function Consulting(props: any) {; const consultingServices = [ {; title: "Technology Assessment",";" description: "Comprehensive evaluation of your current technology landscape and capabilities",";" features: ["Infrastructure Review", "Technology Stack Analysis", "Gap Identification", "Recommendations"],";" icon: "🔍"; }, {;" ";" title: "Strategic Planning",";" description: "Develop long-term technology strategy aligned with business objectives",";" features: ["Technology Roadmap", "Investment Planning", "Risk Assessment", "Success Metrics"],";" icon: "📋"; }, {;" ";" title: "Vendor Selection",";" description: "Expert guidance in selecting the right technology partners and solutions",";" features: ["Requirements Analysis", "Vendor Evaluation", "Contract Negotiation", "Implementation Support"],";" icon: "🤝"; }, {;" ";" title: "Project Management",";" description: "Professional project management for successful technology implementations",";" features: ["Project Planning", "Team Coordination", "Timeline Management", "Quality Assurance"],";" icon: "📊"; }; ]; ;" const consultingApproach = [";" { step: "Discovery", icon: "🔍", description: "Understand your business needs and challenges" },";" { step: "Analysis", icon: "📊", description: "Analyze current state and identify opportunities" },";" { step: "Strategy", icon: "🎯", description: "Develop comprehensive recommendations" },";" { step: "Implementation", icon: "🚀", description: "Execute strategy with ongoing support" }; ]; ;" const consultingAreas = [";" { area: "Enterprise Architecture", solutions: ["Technology strategy", "System design", "Integration planning", "Scalability assessment"] },";" { area: "Digital Strategy", solutions: ["Digital transformation", "Technology roadmap", "Innovation strategy", "Change management"] },";" { area: "Security & Compliance", solutions: ["Security assessment", "Compliance audit", "Risk management", "Security strategy"] },";" { area: "Cloud Strategy", solutions: ["Cloud assessment", "Migration planning", "Cost optimization", "Multi-cloud strategy"] }; ]; ;" return (";" <div className="min-h-screen bg-background">;" <SEO ";" title="Technology Consulting - Zion Tech Group";" description="Get expert technology consulting services to align your business strategy with cutting-edge solutions.";" keywords="technology consulting, strategic consulting, team training, project management, performance optimization";" canonical="https:

const Consulting: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Consulting | Zion Tech Group</title>
        <meta name="description" content="Consulting - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Consulting</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
