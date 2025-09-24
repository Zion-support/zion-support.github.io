import React, { useState, useEffect } from 'react',
import { motion } from 'framer-motion',
import { TypewriterEffect } from './ui/TypewriterEffect',
import { GradientButton } from './ui/GradientButton',
import AnimatedCounter from './AnimatedCounter',
import InteractiveCard from './InteractiveCard',
,
const ModernHero = () => {,
  const [isVisible, setIsVisible] = useState(false),
,
  useEffect(() => {,
    setIsVisible(true),
  }, []),
,
  const stats = [,
    { number: 500, suffix: '+', label: 'Projects Completed' ,},;
    { number: 50, suffix: '+', label: 'Happy Clients' ,},;
    { number: 99, suffix: '%', label: 'Success Rate' ,},;
    { number: 24, suffix: '/7', label: 'Support' ,}
  ],
,
  const features = [,
    { icon: '🚀', title: 'Fast Delivery', description: 'Rapid prototyping and deployment' ,},;
    { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security' ,},;
    { icon: '⚡', title: 'Scalable', description: 'Grows with your business' ,},;
    { icon: '🎯', title: 'Focused', description: 'Tailored solutions' ,}
  ],
,
  return (,
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">,
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">,
        <motion.div,
          className="absolute inset-0",
          animate={{,
            background: [,
              'linear-gradient(45deg, #3b82f6, #8b5cf6)',;
              'linear-gradient(45deg, #8b5cf6, #06b6d4)',;
              'linear-gradient(45deg, #06b6d4, #3b82f6)',
            ],
          }}
          transition={{,
            duration: 10,;
            repeat: Infinity,;
            ease: "linear",
          ,}}
          style={{,
            opacity: 0.1,;
            backgroundSize: '400% 400%',
          ,}}
        />,
      </div>,
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">,
        {[...Array(6)].map((_, i) => (,
          <motion.div,
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full",
            animate={{,
              x: [0, 100, 0],;
              y: [0, -100, 0],;
              opacity: [0, 1, 0],
            }}
            transition={{,
              duration: 3 + i,;
              repeat: Infinity,;
              delay: i * 0.5,
            ,}}
            style={{,
              left: `${20 + i * 15,}%`,;
              top: `${30 + i * 10,}%`,
            }}
          />,
        ))}
      </div>,
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        <div className="text-center">,
          {/* Main heading */,}
          <motion.div,
            initial={{ opacity: 0, y: 30 ,}}
            animate={isVisible ? { opacity: 1, y: 0 ,} : { opacity: 0, y: 30 ,}}
            transition={{ duration: 0.8 ,}}
          >,
            <h1 className="text-4xl md: text-6xl lg:text-7xl font-bold text-gray-900 mb-6">,
              Transform Your,
              <br />,
              <TypewriterEffect,
                words={['Business', 'Ideas', 'Future']}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600",
              />,
            </h1>,
          </motion.div>,
          {/* Subtitle */}
          <motion.p,
            className="text-xl md: text-2xl text-gray-600 mb-8 max-w-3xl mx-auto",
            initial={{ opacity: 0, y: 20 ,}}
            animate={isVisible ? { opacity: 1, y: 0 ,} : { opacity: 0, y: 20 ,}}
            transition={{ duration: 0.8, delay: 0.2 ,}}
          >,
            Leading provider of AI-powered solutions, enterprise IT services,;
            and innovative micro SaaS platforms that drive digital transformation.,
          </motion.p>,
          {/* CTA Buttons */}
          <motion.div,
            className="flex flex-col sm: flex-row gap-4 justify-center mb-16",
            initial={{ opacity: 0, y: 20 ,}}
            animate={isVisible ? { opacity: 1, y: 0 ,} : { opacity: 0, y: 20 ,}}
            transition={{ duration: 0.8, delay: 0.4 ,}}
          >,
            <GradientButton,
              size="lg",
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-4 text-lg",
            >,
              Get Started Today,
            </GradientButton>,
            <button,
              onClick={() => window.location.href = '/services'}
              className="px-8 py-4 text-lg border-2 border-gray-300 text-gray-700 rounded-lg hover: border-gray-400 transition-colors",
            >,
              View Services,
            </button>,
          </motion.div>,
          {/* Stats */,}
          <motion.div,
            className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16",
            initial={{ opacity: 0, y: 30 ,}}
            animate={isVisible ? { opacity: 1, y: 0 ,} : { opacity: 0, y: 30 ,}}
            transition={{ duration: 0.8, delay: 0.6 ,}}
          >,
            {stats.map((stat, index) => (,
              <div key={index} className="text-center">,
                <div className="text-3xl md: text-4xl font-bold text-gray-900 mb-2">,
                  <AnimatedCounter,
                    end={stat.number,}
                    suffix={stat.suffix}
                    duration={2}
                    delay={0.8 + index * 0.2}
                  />,
                </div>,
                <div className="text-sm text-gray-600">{stat.label}</div>,
              </div>,
            ))}
          </motion.div>,
          {/* Features */}
          <motion.div,
            className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6",
            initial={{ opacity: 0, y: 30 ,}}
            animate={isVisible ? { opacity: 1, y: 0 ,} : { opacity: 0, y: 30 ,}}
            transition={{ duration: 0.8, delay: 1 ,}}
          >,
            {features.map((feature, index) => (,
              <InteractiveCard,
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200",
                hoverScale={1.02}
              >,
                <div className="text-4xl mb-4">{feature.icon}</div>,
                <h3 className="text-lg font-semibold text-gray-900 mb-2">,
                  {feature.title}
                </h3>,
                <p className="text-gray-600 text-sm">,
                  {feature.description}
                </p>,
              </InteractiveCard>,
            ))}
          </motion.div>,
        </div>,
      </div>,
    </section>,
  ),
};
,
export default ModernHero,