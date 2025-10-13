import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Cube, Smartphone, Globe, Zap, Shield, Users, Award, CheckCircle, Star, Play, Headphones, Camera, Layers } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticBackground from '../../components/FuturisticBackground';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';
import ResponsiveContainer from '../../components/ResponsiveContainer';

const ARVRDevelopmentPage = () => {
  const features = [
    {
      title: "AR Mobile Applications",
      description: "Immersive augmented reality experiences for iOS and Android with real-time object recognition and tracking",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "VR Immersive Experiences",
      description: "Virtual reality applications for Oculus, HTC Vive, and other VR platforms with photorealistic environments",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mixed Reality Solutions",
      description: "Seamless integration of AR and VR technologies for enterprise training and collaboration",
      icon: <Layers className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "3D Content Creation",
      description: "Custom 3D models, animations, and interactive content optimized for AR/VR platforms",
      icon: <Cube className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "AR Mobile App Development",
      description: "Native iOS and Android AR applications using ARKit, ARCore, and Unity",
      features: ["Real-time object tracking", "3D model rendering", "Cloud anchor support", "Multi-platform compatibility"],
      price: "From $15,000"
    },
    {
      title: "VR Application Development",
      description: "Immersive VR experiences for gaming, training, and enterprise applications",
      features: ["Cross-platform VR support", "Hand tracking", "Spatial audio", "Performance optimization"],
      price: "From $25,000"
    },
    {
      title: "Mixed Reality Solutions",
      description: "Enterprise-grade MR applications for training, collaboration, and visualization",
      features: ["HoloLens development", "Spatial mapping", "Gesture recognition", "Cloud integration"],
      price: "From $35,000"
    },
    {
      title: "3D Content & Asset Creation",
      description: "Custom 3D models, animations, and interactive content for AR/VR applications",
      features: ["3D modeling & texturing", "Animation & rigging", "Asset optimization", "Quality assurance"],
      price: "From $5,000"
    }
  ];

  const technologies = [
    { name: "Unity 3D", description: "Cross-platform game engine for AR/VR development" },
    { name: "Unreal Engine", description: "High-fidelity 3D creation platform" },
    { name: "ARKit", description: "Apple's framework for AR development" },
    { name: "ARCore", description: "Google's platform for building AR experiences" },
    { name: "WebXR", description: "Web-based AR/VR experiences" },
    { name: "OpenXR", description: "Open standard for VR and AR applications" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechVision Corp",
      role: "CTO",
      content: "Zion Tech Group delivered an exceptional AR training application that reduced our training time by 60%. The immersive experience was exactly what we needed.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "EduTech Solutions",
      role: "Product Manager",
      content: "The VR educational platform they created has revolutionized how our students learn. The quality and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      company: "Retail Innovations",
      role: "CEO",
      content: "Our AR shopping app has increased customer engagement by 200%. Zion Tech Group's expertise in AR/VR development is unmatched.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AR/VR Development Services | Immersive Technology Solutions | Zion Tech Group"
        description="Professional AR/VR development services for mobile, desktop, and enterprise applications. Create immersive experiences with cutting-edge technology."
        keywords="AR development, VR development, augmented reality, virtual reality, mixed reality, 3D development, immersive technology, ARKit, ARCore, Unity, Unreal Engine"
        canonical="https://ziontechgroup.com/ar-vr-development"
        author="Zion Tech Group"
        section="Technology Services"
        tags={["AR/VR", "Development", "Immersive Technology", "3D", "Mobile Apps"]}
        readingTime={8}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Eye className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Immersive Technology Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AR/VR Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Create immersive augmented and virtual reality experiences that engage users and transform industries. 
            From mobile AR apps to enterprise VR solutions, we bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="#portfolio"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              View Portfolio
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our AR/VR Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We specialize in creating immersive experiences across all major AR/VR platforms and devices. 
              From concept to deployment, we handle every aspect of your project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AR/VR development services tailored to your specific needs and industry requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <span className="text-cyan-400 font-bold text-lg">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Get Quote
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest AR/VR technologies and frameworks to deliver cutting-edge experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-300 text-sm">
                  {tech.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our AR/VR development services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Immersive Experiences?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your AR/VR project and bring your vision to life with cutting-edge technology and expert development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/portfolio"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Our Work
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ARVRDevelopmentPage;