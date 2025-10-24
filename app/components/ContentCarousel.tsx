'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

interface Slide {
  id: number
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  colo,
  r: string
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides: Slide[] = [
    {
      i,
  d: 1,
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "Automated reporting"
      ],
      icon: <BarChart className="h-12 w-12" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions for your business needs.",
      features: [
        "99.9% uptime guarantee",
        "Auto-scaling capabilities",
        "Advanced security",
        "24/7 monitoring"
      ],
      icon: <Cloud className="h-12 w-12" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Cybersecurity Solutions",
      description: "Protect your business with our comprehensive cybersecurity services.",
      features: [
        "Threat detection",
        "Vulnerability assessment",
        "Incident response",
        "Security training"
      ],
      icon: <Shield className="h-12 w-12" />,
      color: "from-red-500 to-pink-500"
    }
  ]

  const nextSlide = ($2) => {
  $3
};
  const prevSlide = $2;
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Additional Info */}
        <div className="mt-16 text-center"></div>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
            <div className="flex items-center justify-center gap-3 text-white"></div>
              <Star className="w-6 h-6 text-yellow-400" />
              <div className="text-left"></div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-gray-400 text-sm">Customer Rating</div>
            <div className="grid md:grid-cols-2 l,
  g:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContentCarouselPage;
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
  )
}

export default ContentCarousel
