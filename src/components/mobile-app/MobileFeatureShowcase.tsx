
<<<<<<< HEAD
import React from "react",
=======
import React from &quot;react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { CheckCircle, Smartphone, Users, Star, Mail } from 'lucide-react'

export const MobileFeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: <Users className=&quot;h-8 w-8 text-zion-cyan&quot; />,
      title: &quot;Hire from Anywhere&quot;,
      description: &quot;Browse and hire top AI talent on the go with a streamlined mobile interface.&quot;
    },
    {
      icon: <Star className=&quot;h-8 w-8 text-zion-purple&quot; />,
      title: &quot;AI-Match Instantly&quot;,
      description: &quot;Get matched with the perfect talent or jobs using our advanced AI algorithm.&quot;
    },
    {
      icon: <CheckCircle className=&quot;h-8 w-8 text-zion-cyan&quot; />,
      title: &quot;Track Milestones&quot;,
      description: &quot;Monitor project progress and approve milestones directly from your phone.&quot;
    },
    {
      icon: <Mail className=&quot;h-8 w-8 text-zion-purple&quot; />,
      title: &quot;Instant Messaging&quot;,
      description: &quot;Chat with candidates or clients and receive notifications in real-time.&quot;
    },
    {
      icon: <Smartphone className=&quot;h-8 w-8 text-zion-cyan&quot; />,
      title: &quot;Biometric Security&quot;,
      description: &quot;Login quickly and securely with Face ID or Touch ID on supported devices.&quot;
    }
  ],

  return (
    <section id=&quot;features&quot; className=&quot;py-16 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent&quot;>
            Everything You Need On The Go
          </h2>
          <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
            The Zion mobile app brings the power of our AI marketplace to your pocket with these key features
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className=&quot;bg-zion-blue-dark border border-zion-blue-light p-6 rounded-lg hover:border-zion-purple/50 transition-all duration-300&quot;
            >
              <div className=&quot;mb-4&quot;>
                {feature.icon}
              </div>
              <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{feature.title}</h3>
              <p className=&quot;text-zion-slate-light&quot;>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
},
