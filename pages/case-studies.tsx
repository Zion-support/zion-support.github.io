import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Supply Chain Transformation",
      client: "TechCorp Manufacturing",
      industry: "Manufacturing",
      challenge: "Inefficient supply chain visibility and tracking across 15 countries",
      solution: "Implemented blockchain-based supply chain platform with real-time tracking",
      results: [
        "99.9% reduction in traceability time",
        "40% reduction in supply chain costs",
        "100% compliance with international standards",
        "Real-time visibility across all operations"
      ],
      image: "supply-chain",
      duration: "6 months",
      team: "8 experts"
    },
    {
      id: 2,
      title: "AI-Powered Customer Analytics Platform",
      client: "RetailMax Corporation",
      industry: "Retail",
      challenge: "Lack of customer insights and personalized experiences",
      solution: "Developed comprehensive AI analytics platform with machine learning models",
      results: [
        "35% increase in customer engagement",
        "25% boost in conversion rates",
        "60% improvement in customer satisfaction",
        "Real-time personalized recommendations"
      ],
      image: "ai-analytics",
      duration: "4 months",
      team: "6 experts"
    },
    {
      id: 3,
      title: "Cloud-Native Application Migration",
      client: "FinanceFlow Inc.",
      industry: "Financial Services",
      challenge: "Legacy system limitations and scalability issues",
      solution: "Complete migration to cloud-native architecture with microservices",
      results: [
        "300% improvement in application performance",
        "50% reduction in infrastructure costs",
        "99.99% uptime achieved",
        "Seamless scalability for peak loads"
      ],
      image: "cloud-migration",
      duration: "8 months",
      team: "12 experts"
    },
    {
      id: 4,
      title: "IoT Device Management Solution",
      client: "SmartCity Solutions",
      industry: "Smart Cities",
      challenge: "Managing 50,000+ IoT devices across the city",
      solution: "Comprehensive IoT management platform with real-time monitoring",
      results: [
        "90% reduction in device downtime",
        "Real-time monitoring of all devices",
        "Predictive maintenance capabilities",
        "Centralized management dashboard"
      ],
      image: "iot-management",
      duration: "5 months",
      team: "10 experts"
    },
    {
      id: 5,
      title: "Cybersecurity Defense Implementation",
      client: "HealthTech Partners",
      industry: "Healthcare",
      challenge: "Increasing cybersecurity threats and compliance requirements",
      solution: "Comprehensive cybersecurity platform with 24/7 monitoring",
      results: [
        "Zero security breaches since implementation",
        "100% compliance with healthcare regulations",
        "Real-time threat detection and response",
        "Comprehensive security training program"
      ],
      image: "cybersecurity",
      duration: "3 months",
      team: "7 experts"
    },
    {
      id: 6,
      title: "Digital Transformation Consulting",
      client: "TraditionalCorp Ltd.",
      industry: "Traditional Manufacturing",
      challenge: "Digital transformation and modernization of legacy processes",
      solution: "End-to-end digital transformation strategy and implementation",
      results: [
        "Complete digital transformation achieved",
        "50% increase in operational efficiency",
        "Modern cloud-based infrastructure",
        "Employee training and change management"
      ],
      image: "digital-transformation",
      duration: "12 months",
      team: "15 experts"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Case Studies | Zion Tech Solutions</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform their operations with cutting-edge technology solutions." />
        <meta name="keywords" content="case studies, success stories, technology solutions, digital transformation, AI implementation, cloud migration" />
      </Head>
      
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Success Stories & Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how we've helped businesses across industries transform their operations 
            and achieve remarkable results with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Your Success Story
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Our Solutions
            </Link>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${
                study.image === 'supply-chain' ? 'from-green-500 to-teal-600' :
                study.image === 'ai-analytics' ? 'from-blue-500 to-purple-600' :
                study.image === 'cloud-migration' ? 'from-orange-500 to-red-600' :
                study.image === 'iot-management' ? 'from-purple-500 to-pink-600' :
                study.image === 'cybersecurity' ? 'from-red-500 to-orange-600' :
                'from-gray-500 to-gray-700'
              } flex items-center justify-center`}>
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{study.industry}</h3>
                  <p className="text-sm opacity-90">Success Story</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Client:</span> {study.client}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Duration:</span> {study.duration}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Team:</span> {study.team}
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-600 mb-3">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-sm text-gray-600 mb-3">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    {study.results.slice(0, 2).map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                    {study.results.length > 2 && (
                      <li className="text-blue-600">+{study.results.length - 2} more achievements</li>
                    )}
                  </ul>
                </div>
                
                <Link 
                  href="/contact"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Zion Tech Solutions transformed our entire supply chain. The blockchain solution they implemented 
                gave us complete visibility and reduced our costs by 40%. Their team was professional and delivered beyond our expectations."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-500">CTO, TechCorp Manufacturing</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The AI analytics platform they built for us has revolutionized our customer engagement. 
                We've seen a 35% increase in customer satisfaction and 25% boost in sales. Highly recommended!"
              </p>
              <div>
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-500">VP Marketing, RetailMax Corporation</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Their cloud migration expertise saved us from a potential disaster. The new system is 300% faster 
                and 50% more cost-effective. The team's attention to detail and project management was outstanding."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                <p className="text-sm text-gray-500">CEO, FinanceFlow Inc.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the hundreds of companies that have transformed their operations with our technology solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Your Project
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn About Our Process
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;