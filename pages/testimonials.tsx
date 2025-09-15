import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Testimonials: NextPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      company: "TechCorp Manufacturing",
      industry: "Manufacturing",
      rating: 5,
      testimonial: "Zion Tech Solutions transformed our entire supply chain operations. The blockchain solution they implemented gave us complete visibility across all our facilities and reduced our operational costs by 40%. Their team's expertise and dedication to our success was evident throughout the project.",
      project: "Blockchain Supply Chain Platform",
      duration: "6 months",
      image: "sarah-johnson"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "VP of Marketing",
      company: "RetailMax Corporation",
      industry: "Retail",
      rating: 5,
      testimonial: "The AI analytics platform they built for us has revolutionized our customer engagement strategies. We've seen a 35% increase in customer satisfaction and a 25% boost in conversion rates. The personalized recommendations are spot-on and our customers love the experience.",
      project: "AI-Powered Customer Analytics",
      duration: "4 months",
      image: "michael-chen"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Chief Executive Officer",
      company: "FinanceFlow Inc.",
      industry: "Financial Services",
      rating: 5,
      testimonial: "Their cloud migration expertise saved us from a potential disaster. The new system is 300% faster and 50% more cost-effective than our previous setup. The team's attention to detail and project management was outstanding throughout the entire process.",
      project: "Cloud-Native Application Migration",
      duration: "8 months",
      image: "emily-rodriguez"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Director of Operations",
      company: "SmartCity Solutions",
      industry: "Smart Cities",
      rating: 5,
      testimonial: "Managing 50,000+ IoT devices across our city was a nightmare until Zion Tech Solutions stepped in. Their IoT management platform reduced device downtime by 90% and gave us real-time insights we never had before. It's been a game-changer for our operations.",
      project: "IoT Device Management Suite",
      duration: "5 months",
      image: "david-kim"
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      position: "Chief Information Officer",
      company: "HealthTech Partners",
      industry: "Healthcare",
      rating: 5,
      testimonial: "In healthcare, security is paramount. Zion Tech Solutions implemented a comprehensive cybersecurity platform that has kept us breach-free for over a year. Their 24/7 monitoring and rapid response capabilities give us peace of mind in an increasingly dangerous digital landscape.",
      project: "Cybersecurity Defense Platform",
      duration: "3 months",
      image: "lisa-thompson"
    },
    {
      id: 6,
      name: "Robert Martinez",
      position: "President",
      company: "TraditionalCorp Ltd.",
      industry: "Manufacturing",
      rating: 5,
      testimonial: "We were a traditional manufacturing company struggling to keep up with digital transformation. Zion Tech Solutions guided us through a complete digital overhaul. We've achieved 50% increase in operational efficiency and our employees are more engaged than ever.",
      project: "Digital Transformation Consulting",
      duration: "12 months",
      image: "robert-martinez"
    },
    {
      id: 7,
      name: "Jennifer Lee",
      position: "Head of Technology",
      company: "E-commerce Plus",
      industry: "E-commerce",
      rating: 5,
      testimonial: "Their AI-powered marketplace solution has transformed our online platform. The personalized recommendations and intelligent search features have increased our sales by 45% and customer retention by 30%. The ROI has been incredible.",
      project: "AI-Powered Marketplace Platform",
      duration: "7 months",
      image: "jennifer-lee"
    },
    {
      id: 8,
      name: "James Wilson",
      position: "Chief Data Officer",
      company: "DataDriven Corp",
      industry: "Data Analytics",
      rating: 5,
      testimonial: "The business intelligence platform they developed for us has revolutionized how we make decisions. Real-time analytics, predictive insights, and beautiful dashboards have made data accessible to everyone in our organization. It's been transformational.",
      project: "AI-Powered Business Intelligence",
      duration: "5 months",
      image: "james-wilson"
    }
  ];

  const industries = ["All", "Manufacturing", "Retail", "Financial Services", "Smart Cities", "Healthcare", "E-commerce", "Data Analytics"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Client Testimonials | Zion Tech Solutions</title>
        <meta name="description" content="Read testimonials from our satisfied clients across various industries. Discover how Zion Tech Solutions has helped businesses achieve remarkable results with our technology solutions." />
        <meta name="keywords" content="client testimonials, customer reviews, success stories, technology solutions, business transformation" />
      </Head>
      
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Hear from our satisfied clients across various industries about how our technology solutions 
            have transformed their businesses and driven remarkable results.
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
          </div>
        </div>

        {/* Industry Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.industry}
                </span>
              </div>
              
              <blockquote className="text-gray-600 mb-6 italic">
                "{testimonial.testimonial}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p><span className="font-semibold">Project:</span> {testimonial.project}</p>
                  <p><span className="font-semibold">Duration:</span> {testimonial.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
            <blockquote className="text-2xl font-medium mb-8">
              "Zion Tech Solutions doesn't just deliver technology solutions; they deliver business transformation. 
              Their team's expertise, dedication, and commitment to our success has been exceptional. 
              I would recommend them to any organization looking to leverage technology for growth."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                SJ
              </div>
              <div className="text-left">
                <p className="text-xl font-semibold">Sarah Johnson</p>
                <p className="text-blue-200">Chief Technology Officer, TechCorp Manufacturing</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us help you achieve similar results. Our team of experts is ready to transform your business 
              with cutting-edge technology solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Your Project
              </Link>
              <Link href="/case-studies" className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Testimonials;