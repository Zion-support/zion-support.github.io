import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Target } from 'lucide-react';
const CybersecurityAuditPage = () => {,
  const features = [
    {,
      title: "Comprehensive Security Assessment"
      description: "Thorough evaluation of your entire security infrastructure and policies"
      icon: <Search className="w-8 h-8" /></Search>
      color: "from-blue-500 to-cyan-500"
    }
    {,
      title: "Vulnerability Scanning"
      description: "Advanced scanning tools to identify security weaknesses and potential threats"
      icon: <Target className="w-8 h-8" /></Target>
      color: "from-green-500 to-emerald-500"
    }
    {,
      title: "Penetration Testing"
      description: "Simulated cyber attacks to test your defenses and identify real vulnerabilities"
      icon: <Zap className="w-8 h-8" /></Zap>
      color: "from-purple-500 to-pink-500"
    }
    {,
      title: "Compliance Verification"
      description: "Ensure adherence to industry standards like GDPR, HIPAA, and SOC 2"
      icon: <CheckCircle className="w-8 h-8" /></CheckCircle>
      color: "from-orange-500 to-red-500"
    }]
  ];
export default function CybersecurityAuditPage() {,
  return()
    <div className="min-h-screen bg-gray-900 text-white" /></div>
      <Helmet /></Helmet>
        <title>Cybersecurity Audit - Zion Tech Group</title>
        <meta name="description" content="Cybersecurity Audit solutions by Zion Tech Group" / /></meta>
      </Helmet>
      
      <div className="container mx-auto px-4 py-20" /></div>
        <h1 className="text-4xl font-bold mb-8">Cybersecurity Audit</h1>
        <div className="prose prose-invert max-w-none" /></div>
          <p className="text-xl text-gray-300 mb-8" /></p>
            Discover our comprehensive cybersecurity audit solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" /></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6" /></div>
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300" /></p>
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6" /></div>
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300" /></p>
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6" /></div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300" /></p>
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}