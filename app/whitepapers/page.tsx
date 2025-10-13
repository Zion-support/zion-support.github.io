import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Target } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Cloud } from 'lucide-react';
const WhitepapersPage = () => {,
  const whitepapers = [
    {,
      title: "The Future of AI in Business"
      description: "Comprehensive analysis of AI adoption trends and business impact"
      category: "Artificial Intelligence"
      pages: "24 pages"
      downloads: "5,200+"
      icon: <Brain className="w-6 h-6" / /></Brain>
    }
    {,
      title: "Cybersecurity Best Practices 2024"
      description: "Essential security strategies for modern businesses"
      category: "Cybersecurity"
      pages: "18 pages"
      downloads: "3,800+"
      icon: <Shield className="w-6 h-6" / /></Shield>
    }
    {,
      title: "Cloud Migration Guide"
      description: "Step-by-step guide to successful cloud transformation"
      category: "Cloud Technology"
      pages: "32 pages"
      downloads: "4,500+"
      icon: <Globe className="w-6 h-6" / /></Globe>
    }
    {,
      title: "5G Technology Impact"
      description: "How 5G will transform industries and business operations"
      category: "5G Technology"
      pages: "28 pages"
      downloads: "2,900+"
      icon: <Settings className="w-6 h-6" / /></Settings>
    }
    {,
      title: "Micro SAAS Market Analysis"
      description: "Market trends and opportunities in micro SAAS solutions"
      category: "Business Strategy"
      pages: "20 pages"
      downloads: "3,200+"
      icon: <Target className="w-6 h-6" / /></Target>
    }
    {,
      title: "Digital Transformation Roadmap"
      description: "Complete guide to digital transformation success"
      category: "Digital Transformation"
      pages: "35 pages"
      downloads: "6,100+"
      icon: <BookOpen className="w-6 h-6" / /></BookOpen>
    }]
  ];
export default function WhitepapersPage() {,
  return()
    <div className="min-h-screen bg-gray-900 text-white" /></div>
      <Helmet /></Helmet>
        <title>Whitepapers - Zion Tech Group</title>
        <meta name="description" content="Whitepapers solutions by Zion Tech Group" / /></meta>
      </Helmet>
      
      <div className="container mx-auto px-4 py-20" /></div>
        <h1 className="text-4xl font-bold mb-8">Whitepapers</h1>
        <div className="prose prose-invert max-w-none" /></div>
          <p className="text-xl text-gray-300 mb-8" /></p>
            Discover our comprehensive whitepapers solutions designed to meet your business needs.
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