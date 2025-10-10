'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Users, MessageCircle, Calendar } from 'lucide-react'
const CommunityPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Active Community',
      description: 'Join our vibrant community of developers, entrepreneurs, and tech enthusiasts'
    },
    {
      icon: MessageCircle,
      title: 'Knowledge Sharing',
      description: 'Share knowledge, ask questions, and collaborate with like-minded professionals'
    },
    {
      icon: Calendar,
      title: 'Events & Meetups',
      description: 'Participate in regular events, workshops, and networking opportunities'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with professionals from around the world'
    }
  ]
  const benefits = [
    'Access to exclusive community resources',
    'Networking opportunities with industry leaders',
    'Regular workshops and training sessions',
    'Early access to new features and updates',
    '24/7 community support',
    'Collaboration opportunities',
    'Career development resources',
    'Proven track record of success'
  ]
  return (
    <div> </div><Helmet> </Helmet><title>Community | Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>
      <div> </div><div> </div><h1>Community>
          </h1><p>Join our vibrant community of developers, entrepreneurs, and tech enthusiasts. 
            Connect, learn, and grow together.
          </p></p>
          <p>Our community provides opportunities for networking, learning, and collaboration.
          </p></p>
        </div>
        <div>{features.map((feature, index) => (
            </div><div> </div><feature> </feature><h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div> </div><h2>Why Join Our Community?
          </h2></h2>
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div> </div><h2>Ready to Join?
          </h2></h2>
          <p>Become part of our growing community and start connecting with like-minded professionals.
          </p></p>
          <div> </div><button> </button><Users>Join Community>
            </Users><button> </button><MessageCircle>Learn More>
          </MessageCircle></div>
        </div>
      </div>
    </div>
  )
}
export default CommunityPage
  </button>
  </button>
  </h1>