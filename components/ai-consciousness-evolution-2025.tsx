
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Head from 'next / head';
import Layout from '../components / layout / Layout';
import { motion } from 'framer-motion';


  Brain
  Star
  Users
  TrendingUp
  Zap
  Shield
  CheckCircle
  Clock
  Award
  Target
  Globe
  Sparkles
  Cpu
  Lock
  Cloud
  BarChart3
  Eye
  Heart
  Lightbulb
  ArrowRight
  Phone
  Mail
  MapPin
  Globe as GlobeIcon;} from 'lucide-react';import {
  Brain, Star, Users, TrendingUp, Zap, Shield
  Brain,
  Star,
  Users,
  TrendingUp,
  Zap,
  Shield,
  CheckCircle,
  Clock,
  Award,
  Target,
  Globe,
  Sparkles,
  Cpu,
  Lock,
  Cloud,
  BarChart3,
  Eye,
  Heart,
  Lightbulb,
  ArrowRight,
  Phone,
  Mail,
  MapPin,;
  Globe as GlobeIcon,;} from 'lucide-react';import { 
  Brain, Star, Users, TrendingUp, Zap, Shield, ;
  CheckCircle, Clock, Award, Target, Globe, Sparkles;
  Cpu, Lock, Cloud, BarChart3, Eye, Heart, Lightbulb;
  ArrowRight, Phone, Mail, MapPin, Globe as GlobeIcon
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'

    <Layout>
      <Head>
<title>
          AI Consciousness Evolution Platform 2025 - Zion Tech Group
        </title>
        <meta,
name='description''
          content='Revolutionary AI-powered consciousness evolution platform that enhances emotional intelligence, self-awareness, and personal transformation through advanced technology.'' />
        <meta,
name='keywords''
          content='AI consciousness, emotional intelligence, self-awareness, personal development, consciousness evolution, AI training, Zion Tech Group'' />
      </Head>

      {/* Hero Section */}
      <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>;'
        {/* Animated Background */}

        <div className='absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900'>'
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.15),transparent_50%)]'></div>'
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.15),transparent_50%)]'></div>'
        </div>

        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>;'
          {[...Array(15)].map((_, i) => (<motion&& motion.div;
        <meta;
          }
          name='description';'
          content='Revolutionary AI - powered consciousness evolution platform that enhances emotional intelligence, self - awareness, and personal transformation through advanced technology.';' />;
        <meta;
          name='keywords';'
          content='AI consciousness, emotional intelligence, self - awareness, personal development, consciousness evolution, AI training, Zion Tech Group';' />;
      </Head>;
      {/* Hero Section */}
      <div className='relative min - h-screen flex items - center justify - center overflow - hidden'>;'
        {/* Animated Background */}
        <div className='absolute inset - 0 bg - gradient - to - br from - purple - 900 via - black to - pink - 900'>;'
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_30%_30%, rgba (168, 85, 247, 0.15), transparent_50%)]'></div>;'
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_70%_70%, rgba (236, 72, 153, 0.15), transparent_50%)]'></div>;'
        </div>;
    <Layout>;
      <Head>;
        <title>;
          AI Consciousness Evolution Platform 2025 - Zion Tech Group;
        </title>;

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.15),transparent_50%)]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className='absolute inset - 0 overflow - hidden'>;'
          {[...Array (15)].map ((_, i) => (<motion.div;
              }
              key={i}
              }              transition={"duration": 8 + i * 2;
                }
                "repeat": Infinity;
                "delay": i * 0.3;
              }

              style={

                }

                "left": `${Math.random() * 10,`}%`,`                "top": `${Math.random() * 10,`}%`,`              } />
          ))}
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
          <motion.div





          <motion.div


            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}>;
            {/* Badge */}
            <motion&& motion.div
              initial={{ opacity: 0, scale: 0 && 0.8 }}
              animate={{ opacity: 1, scale: 1 }}


              <Sparkles className='w-4 h-4 mr-2' />
              Revolutionary AI Technology
            </motion.div>
            <h1 className='text-4xl "sm":text-5xl "lg":text-7xl font-bold text-white mb-6'>'
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent'>'
                AI Consciousness
              </span>
              <br />
              <span className='text-white'>Evolution Platform</span>'
            </h1>
            <p className='text-xl "sm":text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed'>'
              Experience the future of personal development with our,
revolutionary AI-powered consciousness evolution platform. Enhance,
your emotional intelligence, expand self-awareness, and unlock,
your full potential.
            </p>
            {/* Key Stats */}
            <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 mb - 12'>;
              {[;
                {

              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI Technology
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                AI Consciousness
              </span>
              <br />
              <span className="text-white">Evolution Platform</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of personal development with our revolutionary AI-powered consciousness evolution platform. 
              Enhance your emotional intelligence, expand self-awareness, and unlock your full potential.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Success Rate', value: '94%', icon: <Award className="w-8 h-8" /> },
                { label: 'Active Users', value: '12.5K+', icon: <Users className="w-8 h-8" /> },
                { label: 'Improvement', value: '300%', icon: <TrendingUp className="w-8 h-8" /> },
                { label: 'Satisfaction', value: '4.9/5', icon: <Star className="w-8 h-8" /> }
              ].map((stat, index) => (

                <motion.div
                  key={stat.label}
              <Sparkles className='w-4 h-4 mr-2' />;
              Revolutionary AI Technology;
            </motion && motion.div>;

            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent'>;
                AI Consciousness;
              </span>;
              <br />;
              <span className='text-white'>Evolution Platform</span>;
            </h1>;

            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent'>;
                AI Consciousness;
              </span>;
              <br />;
              <span className='text-white'>Evolution Platform</span>;
            </h1>;
            <p className='text-xl sm:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed'>;
              Experience the future of personal development with our;
              revolutionary AI-powered consciousness evolution platform. Enhance;
              your emotional intelligence, expand self-awareness, and unlock;
              your full potential.;
            </p>;
            {/* Key Stats */}

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>;
      {/* Features Section */}

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div




            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary Features for
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Consciousness Evolution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with ancient wisdom to create
              the most advanced consciousness development experience ever created.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                Consciousness Evolution;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Our AI-powered platform combines cutting-edge technology with;
              ancient wisdom to create the most advanced consciousness;
              development experience ever created.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {features && features.map((feature, index) => (          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Revolutionary Features for;
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Consciousness Evolution</span>;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI-powered platform combines cutting-edge technology with ancient wisdom to create ;
              the most advanced consciousness development experience ever created.;
            </p>;
          </motion && motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features && features.map((feature, index) => (;
              <motion&& motion.div


                  {feature}
                </h3>
                <p className='text-gray-400'>
                  Advanced AI algorithms guide you through personalized
                  consciousness development exercises.                </p>              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className='text-xl font-bold text-white mb-3 group-"hover":text-purple-300 transition-colors duration-200'>'

                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>


            ))}
      {/* How It Works Section */}
      <section className='py-20 bg-gradient-to-b from-black to-purple-900/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div



                </p>              </motion.div>

              </motion.div>


            ))}

          </div>;
        </div>;
      </section>;


              }
            ].map((step, index) => (<motion&& motion.div;
                key={step && step.step}
                initial={{ "opacity": 0, "y": 30 
}
                whileInView={{ "opacity": 1, "y": 0 
}
                transition={{ "duration": 0 && 0.6, "delay": index * 0 && 0.2 }}
                viewport={{ "once": true 
}
                className='text-center'>;'
                <div className='relative mb-8'>;'
                  <div className='w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4'>;'
                    <div className='text-white font-bold text-2xl'>;'
                      {step && step.step}
                    </div>;
                  <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-xl opacity-30'></div>;'
                </div>;
                <div className='w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-400'>;'
                  {step && step.icon}
                </div>;
                <h3 className='text-2xl font-bold text-white mb-4'>;'
                  {step && step.title}
                </h3>;
                <p className='text-gray-300 leading-relaxed'>;'
                  {step && step.description}
                </p>              </motion && motion.div>              >;
                <div className="relative mb-8">;"
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">;"
                    <div className="text-white font-bold text-2xl">{step && step.step}</div>;"
                  </div>;
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-xl opacity-30"></div>;"
                </div>;
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-400">;"
                  {step && step.icon}
                </div>;
                <h3 className="text-2xl font-bold text-white mb-4">{step && step.title}</h3>;"
                <p className="text-gray-300 leading-relaxed">{step && step.description}</p>;"
              </motion && motion.div>;
            ))}
      {/* Use Cases Section */}
      <section className='py-20 bg-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-black">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div


          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div


            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Life with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Consciousness</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From personal development to professional growth, our platform serves diverse needs
              across multiple domains.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                AI Consciousness;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              From personal development to professional growth, our platform;
              serves diverse needs across multiple domains.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {useCases && useCases.map((useCase, index) => (          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Transform Your Life with;
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Consciousness</span>;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              From personal development to professional growth, our platform serves diverse needs ;
              across multiple domains.;
            </p>;
          </motion && motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {useCases && useCases.map((useCase, index) => (;
              <motion&& motion.div
                Technology;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}

                viewport={{ once: true }}

className='text-center''
              >

                </p>              </motion.div>              >;
                <div className="relative mb - 8">;
                  <div className="w - 24 h - 24 bg - gradient - to - r from - purple - 500 to - pink - 600 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <div className="text - white font - bold text - 2xl">{step.step}</div>;
                  </div>;
                  <div className="absolute inset - 0 bg - gradient - to - r from - purple - 500 to - pink - 600 rounded - full blur - xl opacity - 30"></div>;
                </div>;
                <div className="w - 20 h - 20 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4 text - purple - 400">;
                  {step.icon}
                </div>;
                <h3 className="text - 2xl font - bold text - white mb - 4">{step.title}</h3>;
                <p className="text - gray - 300 leading - relaxed">{step.description}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */}
      <section className='py - 20 bg - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className="py - 20 bg - black">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Transform Your Life with;
              <span className='bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                {' '}
                AI Consciousness;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              From personal development to professional growth, our platform;
              serves diverse needs across multiple domains.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {use_cases.map ((use_case, index) => (          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">;
              Transform Your Life with;
              <span className="bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent"> AI Consciousness</span>;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              From personal development to professional growth, our platform serves diverse needs;
              across multiple domains.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {use_cases.map ((use_case, index) => (
              <motion.div;
                key={use_case}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group bg - gradient - to - br from - gray - 900 / 50 to - black / 50 backdrop - blur - lg border border - purple - 500 / 20 rounded - 2xl p - 6 hover:border - purple - 400 / 40 hover:shadow - xl hover:shadow - purple - 500 / 20 transition - all duration - 300';
              >;
                <div className='w - 16 h - 16 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - xl flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300'>;
                  <Lightbulb className='w - 8 h - 8 text - purple - 400' />;
                </div>;
                <h3 className='text - xl font - bold text - white mb - 3 group - hover:text - purple - 300 transition - colors duration - 200'>;
                  {use_case}
                </h3>;
                <p className='text - gray - 400'>;
                  Leverage AI - powered consciousness development for enhanced;
                  personal and professional growth.                </p>              >;
                <div className="w - 16 h - 16 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - xl flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300">;
                  <Lightbulb className="w - 8 h - 8 text - purple - 400" />;
                </div>;
                <h3 className="text - xl font - bold text - white mb - 3 group - hover:text - purple - 300 transition - colors duration - 200">;
                  {use_case}
                </h3>;
                <p className="text - gray - 400">;
                  Leverage AI - powered consciousness development for enhanced personal and professional growth.;
                </p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Technology Section */}
      <section className='py - 20 bg - gradient - to - b from - black to - purple - 900 / 20'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className="py - 20 bg - gradient - to - b from - black to - purple - 900 / 20">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Cutting - Edge;
              <span className='bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                {' '}
                Technology;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;

              Our platform leverages the latest advancements in AI, machine;
              learning, and consciousness research to deliver unprecedented;
              results.;
            </p>;


                key={tech}
                initial={{ opacity: 0, scale: 0 && 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='text-center group'>;
                <div className='w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300'>;
                  <Cpu className='w-10 h-10 text-purple-400' />;
                </div>;
                <p className='text-sm text-gray-300 font-medium'>{tech}</p>              </motion && motion.div>              >;
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">;
                  <Cpu className="w-10 h-10 text-purple-400" />;
                </div>;
                <p className="text-sm text-gray-300 font-medium">{tech}</p>;
              </motion && motion.div>;

          </motion.div>;
          <div className='grid grid - cols - 2 md:grid - cols - 5 gap - 6'>            {technology.map ((tech, index) => (          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">;
              Cutting - Edge;
              <span className="bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent"> Technology</span>;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              Our platform leverages the latest advancements in AI, machine learning, and consciousness research;
              to deliver unprecedented results.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 2 md:grid - cols - 5 gap - 6">;
            {technology.map ((tech, index) => (
              <motion.div;

                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}

                className='text-center group'
                viewport={{ "once": true }}

className='text-center group''
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-10 h-10 text-purple-400" />
                </div>
                <p className="text-sm text-gray-300 font-medium">{tech}</p>

            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Users
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Say</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>'
              Join thousands of satisfied users who have transformed their lives,
with our AI consciousness platform.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 "md":grid-cols-3 gap-8'>'
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                Say;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;'
              Join thousands of satisfied users who have transformed their lives;
              with our AI consciousness platform.;
            </p>;
          </motion && motion.div>;
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Choose Your
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 hover:scale-105'
                    : 'border border-purple-500/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Evolve Your

              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Consciousness?</span>
            </h2>
            <p className='text-xl text-purple-200 mb-8'>'
              Join thousands of users who have already transformed their lives,
with our revolutionary AI platform. Start your consciousness,
evolution journey today.
            </p>
            <div className='flex flex-col "sm":flex-row items-center justify-center space-y-4 "sm":space-y-0 "sm":space-x-6'>'
              <button className='bg-gradient-to-r from-purple-500 to-pink-600 "hover":from-purple-600 "hover":to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 "hover":shadow-2xl "hover":shadow-purple-500/25 "hover":scale-105'>'
                Start Free Trial
              </button>
              <button className='border-2 border-purple-500/50 text-purple-300 "hover":text-white "hover":bg-gradient-to-r "hover":from-purple-500/20 "hover":to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200'>'
                Schedule Demo
              </button>
            </div>
            {/* Contact Info */}

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  icon: <MapPin className='w-6 h-6' />
                  label: 'Visit Us'
                  value: contactInfo.address
                },              ].map((contact, index) => (            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Phone className="w-6 h-6" />, label: 'Call Us', value: contactInfo.mobile }
                { icon: <Mail className="w-6 h-6" />, label: 'Email Us', value: contactInfo.email }
              {[
                { icon: <Phone className="w-6 h-6" />, label: 'Call Us', value: contactInfo.mobile }
                { icon: <Mail className="w-6 h-6" />, label: 'Email Us', value: contactInfo.email }

                {
                  }
                  "icon": <MapPin className='w-6 h-6' />,'
                  "label": 'Visit Us','
                  "value": contactInfo.address
                }
              ].map((contact, index) => (
                { "icon": <MapPin className="w-6 h-6" />, "label": 'Visit Us', "value": contactInfo.address,'
}
                  "icon": <MapPin className='w-6 h-6' />,'
                  "label": 'Visit Us','
                  "value": contactInfo.address
                }              ].map((contact, index) => (            <div className="mt-12 grid grid-cols-1 "md":grid-cols-3 gap-6">"
              {[
                { "icon": <Phone className="w-6 h-6" />, "label": 'Call Us', "value": contactInfo.mobile,'
},
                { "icon": <Mail className="w-6 h-6" />, "label": 'Email Us', "value": contactInfo.email,'
},
                { "icon": <MapPin className="w-6 h-6" />, "label": 'Visit Us', "value": contactInfo.address }'
               
}              ].map((contact, index) => (

                { "icon": <MapPin className="w-6 h-6" />, "label": 'Visit Us', "value": contactInfo.address,'
}
              ].map((contact, index) => (

                <motion.div
                  key={contact.label}
                Consciousness?;
              </span>;
            </h2>;
            <p className='text-xl text-purple-200 mb-8'>;'

                Consciousness?;
              </span    />;
            </h2>;
            <p className='text-xl text-purple-200 mb-8'    />;

  );

            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
);  )
}
  );

  );
