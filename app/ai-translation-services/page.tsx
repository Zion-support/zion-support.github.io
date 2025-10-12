
import { Globe, Zap, Shield, Users, CheckCircle, ArrowRight, BarChart3, Brain, FileText, Mic } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AITranslationServicesPage;
const AITranslationServicesPage: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-5h-5ml-2" />,
      title: '100+ Languages',
      description: 'Support for over 100 languages with native-level accuracy and cultural context.'</Globe>
    },</Globe>
    {</Globe>
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support.'</Zap>
    },</Zap>
    {</Zap>
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI-Powered Context',
      description: 'Advanced AI understands context, tone, and cultural nuances for accurate translations.'</Brain>
    },</Brain>
    {</Brain>
      icon: <FileText className="w-5h-5ml-2" />,
      title: 'Document Translation',
      description: 'Translate documents, websites, and content while preserving formatting and structure.'</FileText>
    },</FileText>
    {</FileText>
      icon: <Mic className="w-5h-5ml-2" />,
      title: 'Voice Translation',
      description: 'Convert speech to text and translate in real-time with natural voice synthesis.'</Mic>
    },</Mic>
    {</Mic>
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption for sensitive business communications.'
    }
  ]

  const useCases = [
    {</Shield>
      title: 'Global Customer Support',</Shield>
      description: 'Provide support in any language with instant translation and cultural adaptation.',</Shield>
      icon: <Users className="w-5h-5ml-2" /&gt;</Users&gt;
    },
    {
      title: 'Multilingual Content',
      description: 'Translate websites, apps, and marketing materials for global audiences.',
      icon: <FileText className="w-5h-5ml-2" /&gt;</FileText&gt;
    },
    {
      title: 'International Meetings',
      description: 'Break down language barriers in real-time during video conferences and calls.',
      icon: <Globe className="w-5h-5ml-2" /&gt;</Globe&gt;
    },
    {
      title: 'E-commerce Expansion',
      description: 'Expand to new markets with localized product descriptions and customer communications.',
      icon: <BarChart3 className="w-5h-5ml-2" /&gt;</BarChart3&gt;
    }
  ]

    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500,000 words/month',
        '100+ languages',
        'Real-time translation',
        'Priority support',
        'Custom integrations'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Custom AI training',
        'Dedicated support',
        'White-label options'
      ],
      popular: false;
    }
  ]

  return (

        <></Users>
      <title>AiTranslationServices - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AiTranslationServices</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aitranslationservices services coming soon.</p>

      </>
  );
}

