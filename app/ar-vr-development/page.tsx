import { ArrowRight, Glasses, Brain, Shield, Zap, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, Eye, Image, Target, Scan } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ARVRDevelopment = () => {
  const features = [
    {
      title: "AR Application Development",
      description: "Create immersive augmented reality experiences for mobile and web",
      icon: <Glasses className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "VR Experience Design",
      description: "Build virtual reality applications for various platforms",
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "3D Modeling & Animation",
      description: "Create stunning 3D assets and animations for AR/VR",
      icon: <Image className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cross-Platform Support",
      description: "Deploy across multiple AR/VR platforms and devices",
      icon: <Globe className="w-6 h-6" />,
  const benefits = [
    "Immersive user experiences",
    "Cross-platform compatibility",
    "Advanced 3D graphics",
    "Real-time rendering",
    "Interactive interfaces",
    "Scalable solutions"
        title="AR/VR Development - Immersive Technology Solutions | Zion Tech Group"
        description="Create immersive AR/VR experiences with our expert development team. Augmented reality, virtual reality, and 3D applications for modern businesses."
        keywords="AR development, VR development, augmented reality, virtual reality, 3D applications, immersive technology"
            <Glasses className="w-4 h-4 text-cyan-400 mr-2" />
            Create immersive AR/VR experiences that engage and captivate your audience. 
            From concept to deployment, we build cutting-edge augmented and virtual reality solutions.
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
              icon={<Glasses className="w-5 h-5" />}
              Immersive Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create stunning AR/VR experiences.
              <FuturisticCard
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AR/VR Development?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of immersive technology with our expert development team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Go Immersive?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies using our AR/VR development services to create engaging experiences.
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
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
export default ARVRDevelopment;
