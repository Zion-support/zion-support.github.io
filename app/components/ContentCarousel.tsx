'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react'
interface Slide {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  stats: { value: string; label: string }[]
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides: Slide[] = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making',
        'Real-time Insights'
      ],
      stats: [
        { value: '95%', label: 'Accuracy' },
        { value: '50%', label: 'Cost Reduction' },
        { value: '24/7', label: 'Availability' }
      ]
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: Globe,
      features: [
        'Auto-scaling Resources',
        'Global CDN',
        'Disaster Recovery',
        'Security Compliance',
        'Cost Optimization',
        '24/7 Monitoring'
      ],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '40%', label: 'Faster Deploy' },
        { value: '60%', label: 'Cost Savings' }
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: Shield,
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Incident Response',
        'Compliance Management',
        'Security Training',
        'Continuous Monitoring'
      ],
      stats: [
        { value: '100%', label: 'Secure' },
        { value: '0', label: 'Breaches' },
        { value: '24/7', label: 'Protection' }
      ]
    },
    {
      id: 4,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights and business intelligence',
      icon: TrendingUp,
      features: [
        'Real-time Dashboards',
        'Predictive Modeling',
        'Custom Reports',
        'Data Visualization',
        'Business Intelligence',
        'Performance Metrics'
      ],
      stats: [
        { value: '85%', label: 'Better Decisions' },
        { value: '30%', label: 'Revenue Growth' },
        { value: '50%', label: 'Time Saved' }
      ]
    }
  ]
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }
  const currentSlideData = slides[currentSlide]
  return (
    <div> </div><div>{/* Header */}
        </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
          <p>Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p></p>
        </div>

        {/* Carousel */}
        <div> </div><div> </div><div> </div><div> </div><div> </div><currentSlideData> </currentSlideData></div>
                <div> </div><h3>{currentSlideData.title}
                  </h3></h3>
                  <p>{currentSlideData.description}
                  </p></p>
                </div>
              </div>
            </div>

            <div>{currentSlideData.features.map((feature, index) => (
                </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div>{currentSlideData.stats.map((stat, index) => (
                </div><div> </div><div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button> </button><ChevronLeft> </ChevronLeft></button>
          <button> </button><ChevronRight> </ChevronRight></button>
        </div>

        {/* Slide Indicators */}
        <div>{slides.map((_, index) => (
            </div><button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div> </div><div> </div><h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p>Join thousands of businesses already using our solutions to drive growth and innovation.
            </p></p>
            <button>Get Started Today
              </button><ArrowRight> </ArrowRight></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentCarousel