import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow Right, Bot} from 'lucide-react';
import { Arrow Right, Code, Check Circle, Clock, Target, Trending Up, Smartphone, Shield, Bot, Star, Smartphone as Mobile, Database, Git Branch, Search } from 'lucide-react';

export default function A ICode Assistant Pro Page() {
  const features = [
    {
      icon: <B otclass Name="w-6h-6t e xt-c y an-400" />,
      title: 'A I Code Generation',
      description: 'Generate high-quality code from natural language descriptions with 95% accuracy'
    },
    {
      icon: <C odeclass Name="w-6h-6t e xt-e m erald-400" />,
      title: 'Smart Code Completion',
      description: 'Intelligent autocomplete that understands context and suggests optimal solutions'
    },
    {
      icon: <S earchclass Name="w-6h-6t e xt-p u rple-400" />,
      title: 'Code Analysis & Debugging',
      description: 'Automatically detect bugs, security vulnerabilities, and performance issues'
    },
    {
      icon: <G it Branchclass Name="w-6h-6t e xt-o r ange-400" />,
      title: 'Version Control Integration',
      description: 'Seamless integration with Git, Git Hub, Git Lab, and other version control systems'
    },
    {
      icon: <D atabaseclass Name="w-6h-6t e xt-p i nk-400" />,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, Java Script, Java, C++, and more'
    },
    {
      icon: <S hieldclass Name="w-6h-6t e xt-r e d-400" />,
      title: 'Security & Compliance',
      description: 'Built-in security scanning and compliance checking for enterprise-grade code quality'
    }
  ]

  const pricing Plans = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code generations/month',
        'Basic A I features',
        '5 programming languages',
        'Email support',
        'Basic analytics',
        'V S Code extension'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 10,000 code generations/month',
        'Advanced A I features',
        'All programming languages',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations',
        'A P I access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'All A I features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'S L A guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'Senior Software Engineer',
      content: 'Increased my coding speed by 300% and reduced bugs by 80%. The A I suggestions are incredibly accurate.',
      rating: 5,
      avatar: 'A C'
    },
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup C T O',
      content: 'Our team productivity skyrocketed. The code generation quality is enterprise-grade and saves us hours daily.',
      rating: 5,
      avatar: 'S J'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Full-Stack Developer',
      content: 'The debugging features are game-changing. It catches issues I would have missed and suggests perfect fixes.',
      rating: 5,
      avatar: 'M R'
    }
  ]

  const benefits = [
    {
      icon: <T rending Upclass Name="w-8h-8t e xt-c y an-400" />,
      title: '300% Faster Development',
      description: 'A I-powered code generation accelerates development cycles'
    },
    {
      icon: <T argetclass Name="w-8h-8t e xt-e m erald-400" />,
      title: '80% Fewer Bugs',
      description: 'Advanced analysis and debugging reduce code issues significantly'
    },
    {
      icon: <C lockclass Name="w-8h-8t e xt-p u rple-400" />,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated code generation and optimization eliminate repetitive tasks'
    },
    {
      icon: <S hieldclass Name="w-8h-8t e xt-o r ange-400" />,
      title: 'Enterprise Security',
      description: 'Built-in security scanning ensures code quality and compliance'
    }
  ]

  const integrations = [
    { name: 'V S Code', icon: '💻' },
    { name: 'Intelli J I D E A', icon: '☕' },
    { name: 'Sublime Text', icon: '📝' },
    { name: 'Atom', icon: '⚛️' },
    { name: 'Vim', icon: '📄' },
    { name: 'Git Hub', icon: '🐙' },
    { name: 'Git Lab', icon: '🦊' },
    { name: 'Bitbucket', icon: '🪣' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚓' }
  ]

  const supported Languages = [
    'Python', 'Java Script', 'Type Script', 'Java', 'C++', 'C#', 'Go', 'Rust',
    'P H P', 'Ruby', 'Swift', 'Kotlin', 'Scala', 'R', 'M A T L A B', 'S Q L',
    'H T M L', 'C S S', 'React', 'Vue.js', 'Angular', 'Node.js', 'Django', 'Flask'
  ]

  return (

    <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Code Assistant Pro - Zion Tech Group | Intelligent Code Generation</t itle>
        <m eta name="description" content="Revolutionary A I-powered code assistant with intelligent generation, debugging, and analysis. Increase development speed by 300%. Starting at $29/month." / / />
        <m eta name="keywords" content="A I code assistant, code generation, intelligent debugging, code analysis, programming A I, development tools" / / />
        <m eta name="robots" content="index, follow" / / />
        <l inkrel="canonical" href="https://ziontechgroup.com/ai-code-assistant-pro" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r e l a tive py-20px-4overflow-hidden" />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
          <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
            <C odeclass Name="w-4h-4" / />
            <s pan>A I-Powered Code Generation</s pan>
          </d iv>
          
          <h1 c lass Name="t e x t-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            A I Code Assistant

            <b r / />
            <s pan class Name="b g-g r a dient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Pro
            </s pan>
          </h1>
          
          <p c lass Name="t e x t-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
            Transform your development workflow with A I-powered code generation, intelligent debugging, and analysis. 
            Increase development speed by 300% while reducing bugs by 80%.
          </p>

          <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
            <L ink to="/contact" class Name="g r o u p bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="#pricing" class Name="g r o u p border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>View Pricing</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>

          {/* Key Stats */}

          <d iv class Name="g r id g r id-cols-2 md:grid-cols-4 gap-8 max-w-4xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="t e xt-3 xl f o nt-boldtext-cyan-400mb-2">300%</d iv>
              <d iv class Name="t e xt-g r ay-300text-sm">Faster Development</d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="t e xt-3 xl f o nt-boldtext-purple-400mb-2">80%</d iv>
              <d iv class Name="t e xt-g r ay-300text-sm">Fewer Bugs</d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="t e xt-3 xl f o nt-boldtext-pink-400mb-2">50+</d iv>
              <d iv class Name="t e xt-g r ay-300text-sm">Languages Supported</d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="t e xt-3 xl f o nt-boldtext-emerald-400mb-2">25 K+</d iv>
              <d iv class Name="t e xt-g r ay-300text-sm">Active Developers</d iv>
          </d iv>
      </s ection>

      {/* Benefits Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="a b s o lute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Why Choose Our <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">A I Code Assistant?</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto">
              Experience the future of software development with cutting-edge A I technology that works for your team.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
            {benefits.map((benefit, index) => (

              <d ivkey="{index}" class Name="t e x t-centergroup" />
                <d iv class Name="f l ex i t ems-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon}
                </d iv>
                <h3 c lass Name="t e xt-xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title}
                </h3>
                <p c lass Name="t e xt-g r ay-300" />
                  {benefit.description}

                </p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Supported Languages Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Support for <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">50+ Languages</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto">
              From popular languages to cutting-edge frameworks, our A I understands and generates code in any language you need.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-2 md:grid-cols-4lg:grid-cols-6gap-4">
        </d iv>
            {supported Languages.map((language, index) => (

              <d ivkey="{index}" class Name="g r o u ptext-center" />
                <d iv class Name="w-f u ll h-16 bg-w h ite/10 backdrop-blur-lg rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:bg-white/20 transition-allduration-300group-hover:scale-105">
        </d iv>
                  <s pan class Name="t e xt-g r ay-300 group-hover:text-whitetransition-colorsfont-medium">{language}
                  </s pan>
                </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20 p x-4 bg-g r adient-to-br from-slate-800/50to-purple-900/50relative" />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Powerful Features for <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Development</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto">
              Everything you need to accelerate development with A I-powered intelligence and automation.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                </h3>
                <p c lass Name="t e xt-g r ay-300leading-relaxed" />
                  {feature.description}

                </p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Integrations Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Seamless <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Integrations</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto">
              Works with your favorite development tools and platforms for a unified coding experience.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-2md:grid-cols-5gap-8">
        </d iv>
            {integrations.map((integration, index) => (

              <d ivkey="{index}" class Name="g r o u ptext-center" />
                <d iv class Name="w-20 h-20 b g-w h i te/10 backdrop-blur-lg rounded-2 xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-allduration-300group-hover:scale-110">
        </d iv>
                  <s pan class Name="t e xt-3xl">{integration.icon}</s pan>
                </d iv>
                <d iv class Name="t e xt-g r ay-300group-hover:text-whitetransition-colors">{integration.name}
                </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ectionid="pricing" class Name="p y-20p x-4r e lative" />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Simple, Transparent <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto">
              Choose the plan that fits your development needs. All plans include our core A I features.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing Plans.map((plan, index) => (
              <d ivkey="{index}" class Name="{`r e l a tive" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (

                  <d iv class Name="a b s o lute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                    <d iv class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </d iv>
                )}

                <d iv class Name="t e x t-centermb-8">
        </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t e xt-g r ay-300text-smmb-4">{plan.description}</p>
                  <d iv class Name="f l e x items-baselinejustify-center" />
                    <s pan class Name="t e xt-5 x l font-boldtext-cyan-400">{plan.price}</s pan>
                    <s pan class Name="t e xt-g r ay-300ml-2">{plan.period}</s pan>
                  </d iv>
                
                <u lclass Name="s p a c e-y-4mb-8" />
                  {plan.features.map((feature, feature Index) => (

                    <l ikey="{feature Index}" class Name="f l e x items-centerspace-x-3" />
                      <C heck Circleclass Name="w-5 h-5t e xt-g r een-400flex-shrink-0" / />
                      <s pan class Name="t e xt-g r ay-300">{feature}</s pan>
                    </l i>
                  ))}
                </u l>
                
                <L ink 
                  to="/contact"
                  class Name="{`b l o c k" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started

                </L ink>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Testimonials Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Trusted by <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">25,000+</s pan> Developers
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto">
              See what our customers are saying about their success with our A I code assistant.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {testimonials.map((testimonial, index) => (

              <d ivkey="{index}" class Name="b g-w h i te/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <d iv class Name="f l e x items-centermb-4">
        </d iv>
                  <d iv class Name="w-12 h-12 b g-g r a dient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                  </d iv>
                  <d iv />
                    <d iv class Name="f o nt-s e miboldtext-white">{testimonial.name}</d iv>
                    <d iv class Name="t e xt-g r ay-400text-sm">{testimonial.company}</d iv>
                </d iv>
                <d iv class Name="f l e x mb-4">
        </d iv>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <S tarkey="{i}" class Name="w-5 h-5t e xt-y e llow-400fill-current" />
                  ))}

                </d iv>
                <p c lass Name="t e xt-g r ay-300italic">"{testimonial.content}"</p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* C T A Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-center" />
            <d iv class Name="b g-g r a dient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </d iv>
              <d iv class Name="r e l a tivez-10">
        </d iv>
                <h2 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                  Ready to Transform Your <s pan class Name="b g-g r a dient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Development Workflow?</s pan>
                </h2>
                
                <p c lass Name="t e xt-xl sm:t e xt-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                  Join thousands of developers already coding 300% faster with our A I-powered code assistant. 
                  Start your free trial today and experience the future of software development.
                </p>

                <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-8">
        </d iv>
                  <L ink to="/contact" class Name="g r o u p bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <s pan>Start Free Trial</s pan>
                    <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
                  </L ink>
                  <L ink to="#pricing" class Name="g r o u p border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <s pan>View All Plans</s pan>
                    <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
                  </L ink>
                </d iv>

                <d iv class Name="t e xt-w h ite/80text-sm">
        </d iv>
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </d iv>
            </d iv>
        </d iv>
      </s ection>
    </d iv>
  );
}
