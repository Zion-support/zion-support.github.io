'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Star, Users, TrendingUp, Shield } from 'lucide-react'
const ContentPromotionBanner: React.FC = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Happy Clients' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' }
  ]
  const features = [
    { title: 'AI-Powered Solutions', description: 'Cutting-edge artificial intelligence' },
    { title: '24/7 Support', description: 'Round-the-clock assistance' },
    { title: 'Scalable Infrastructure', description: 'Grows with your business' },
    { title: 'Expert Team', description: 'Industry-leading professionals' }
  ]
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce operational costs by 30%',
    'Improve customer satisfaction',
    'Scale without limits',
    'Stay ahead of competition',
    'Future-proof your business'
  ]
  return (
    <div> </div><div>{/* Hero Section */}
        </div><div> </div><h1>Transform Your Business
            </h1><span>with AI & Technology
            </span></span>
          </h1>
          <p>Join thousands of businesses already using our AI and IT solutions to drive growth and innovation.
          </p></p>
        </div>

        {/* Stats Section */}
        <div>{stats.map((stat, index) => (
            </div><div> </div><div>{stat.icon}
              </div></div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div>{features.map((feature, index) => (
            </div><div> </div><h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div> </div><h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Solutions?</h2>
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p>Join thousands of satisfied customers and transform your business today.
            </p></p>
            <div> </div><Link> </Link><span>Get Started Now</span>
                <ArrowRight> </ArrowRight></Link>
              <Link> </Link><span>Schedule Demo</span>
                <ArrowRight> </ArrowRight></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentPromotionBanner