import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
export default function Page() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const stats = [
    { number: "500+", label: "Demos Available" }
    { number: "50K+", label: "Users Trained" }
    { number: "95%", label: "Success Rate" }
    { number: "24/7", label: "Support Available" }]
  ];
  const benefits = [
    {,
      icon: <Play className="w-8 h-8 text-cyan-400" /></Play>
      title: "Interactive Demos"
      description: "Hands-on experience with our solutions"
    }
    {,
      icon: <Users className="w-8 h-8 text-green-400" /></Users>
      title: "Expert Guidance"
      description: "Learn from our experienced team"
    }
    {,
      icon: <Award className="w-8 h-8 text-purple-400" /></Award>
      title: "Proven Results"
      description: "See real-world success stories"
    }
    {,
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" /></BarChart3>
      title: "Data-Driven"
      description: "Make informed decisions with data"
    }]
  ];
  const demos = [
    {,
      id: 'ai-analytics'
      title: 'AI Analytics Dashboard'
      description: 'See how our AI-powered analytics platform transforms raw data into actionable insights with real-time dashboards and predictive analytics.'
      duration: '3:45'
      category: 'AI Analytics',]
      features: ['Real-time Data Processing', 'Predictive Analytics', 'Interactive Dashboards', 'Automated Reporting']
      thumbnail: '/api/placeholder/800/450'
      videoUrl: '#'
    }
    {,
      id: 'ai-customer-support'
      title: 'AI Customer Support Bot'
      description: 'Experience our intelligent chatbot in action with natural language processing, sentiment analysis, and seamless human handoff.'
      duration: '2:30'
      category: 'AI Customer Service'
      features: ['Natural Language Processing', 'Sentiment Analysis', 'Multi-language Support', 'Human Handoff']
      thumbnail: '/api/placeholder/800/450'
      videoUrl: '#'
    }
    {,
      id: 'ai-content-generation'
      title: 'AI Content Generation Studio'
      description: 'Watch our AI create high-quality content including blog posts, social media content, and marketing materials with SEO optimization.'
      duration: '4:15'
      category: 'AI Content'
      features: ['SEO Optimization', 'Brand Voice Training', 'Multi-format Output', 'Content Calendar']
      thumbnail: '/api/placeholder/800/450'
      videoUrl: '#'
    }
    {,
      id: 'ai-cybersecurity'
      title: 'AI Cybersecurity Defense'
      description: 'See our advanced threat detection system in action with real-time monitoring, automated response, and compliance reporting.'
      duration: '3:20'
      category: 'Cybersecurity'
      features: ['Threat Detection', 'Automated Response', 'Real-time Monitoring', 'Compliance Reports']
      thumbnail: '/api/placeholder/800/450'
      videoUrl: '#'
    }
    {,
      id: '5g-solutions'
      title: '5G Network Solutions'
      description: 'Explore our 5G network infrastructure solutions with ultra-low latency, massive IoT connectivity, and edge computing capabilities.'
      duration: '5:00'
      category: '5G Technology'
      features: ['Ultra-low Latency', 'IoT Connectivity', 'Edge Computing', 'Smart City Solutions']
      thumbnail: '/api/placeholder/800/450'
      videoUrl: '#'
    }
    {,
      id: 'cloud-infrastructure'
      title: 'Cloud Infrastructure Management'
      description: 'Discover our comprehensive cloud solutions with automated scaling, backup, disaster recovery, and cost optimization.'
      duration: '4:30'
      category: 'Cloud Services'
      features: ['Auto-scaling', 'Disaster Recovery', 'Cost Optimization', 'Multi-cloud Support']
      thumbnail: '/api/placeholder/800/450'
      videoUrl: '#'
    }
  ];
  const handlePlayPause = () => {,
    setIsPlaying(!isPlaying);
  };
  const handleNextDemo = () => {,
    setCurrentDemo((prev) => (prev + 1) % demos.length);
    setIsPlaying(false);
  };
  const handlePrevDemo = () => {,
    setCurrentDemo((prev) => (prev - 1 + demos.length) % demos.length);
    setIsPlaying(false);
  };
export default function DemoPage() {,
  return()
    <div className="min-h-screen bg-gray-900 text-white" /></div>
      <Helmet /></Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Demo solutions by Zion Tech Group" / /></meta>
      </Helmet>
      
      <div className="container mx-auto px-4 py-20" /></div>
        <h1 className="text-4xl font-bold mb-8">Demo</h1>
        <div className="prose prose-invert max-w-none" /></div>
          <p className="text-xl text-gray-300 mb-8" /></p>
            Discover our comprehensive demo solutions designed to meet your business needs.
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

}