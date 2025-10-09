


import { Link } from 'react-router-dom';

import { Star, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      id: 'ai-chat',
      title: 'AI Chat API',
      method: 'POST',
      endpoint: '/api/v1/ai/chat',
      description: 'Send messages to our AI chatbot and get intelligent responses.',
      example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/chat" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Hello, how can you help me?",
    "context": "customer_support"
  }'`
    },
    {
      id: 'ai-analysis',
      title: 'AI Data Analysis',
      method: 'POST',
      endpoint: '/api/v1/ai/analyze',
      description: 'Analyze data using our AI models for insights and predictions.',
      example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/analyze" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "data": [1, 2, 3, 4, 5],
    "analysis_type": "trend_analysis"
  }'`
    }
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b

const ApiDocs: React.FC = () => {
  return (
    <div>Coming Soon</div>

  )
    
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigation>"
      <main className="pt-20"></main>"
        <section className="container mx-auto px-4 py-16 text-center"></section>"
          <h1 className="text-4xl,"
  md:text-6xl font-bold text-white mb-6 neon-text"></h1>
// Api Docs;
          </h1>"
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
// API documentation and developer resources;

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact" className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"

// >
              
          
          
          
          
          
          
          
          "
          <Phone className="w-5 h-5 mr-2" /></Phone>
// Get Free Consultation;
          </Link>

            <a
              href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              <Phone className="w-4 h-4 mr-2" />

// (302) 464-0950;
          </a>
          </div>
        </section>

      </main>
      <Footer /></Footer>

    </div>
  );
};


export default ApiDocsPage;


