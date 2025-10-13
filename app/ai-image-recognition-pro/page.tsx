import { ArrowRight, Camera, Brain, Shield, Zap, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, Eye, Image, Target, Scan } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIImageRecognitionPro = () => {
  const features = [
    {
      title: "Object Detection",
      description: "Identify and classify objects in images with high accuracy",
      icon: <Eye className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Facial Recognition",
      description: "Advanced facial recognition and analysis capabilities",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Text Extraction",
      description: "Extract text from images using OCR technology",
      icon: <Scan className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Scene Analysis",
      description: "Understand and analyze complex scenes and contexts",
      icon: <Image className="w-6 h-6" />,
    "99.2% recognition accuracy",
    "Real-time processing",
    "Multi-format support",
    "Advanced security",
    "Scalable infrastructure",
    "Easy integration"
        title="AI Image Recognition Pro - Advanced Computer Vision | Zion Tech Group"
        description="Transform images into actionable insights with AI-powered recognition. Object detection, facial recognition, and text extraction for modern applications."
        keywords="AI image recognition, computer vision, object detection, facial recognition, OCR, image analysis"
            <Camera className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Computer Vision AI</span>
              AI Image Recognition Pro
            Transform images into actionable insights with AI-powered recognition. 
            Object detection, facial recognition, and text extraction for modern applications.
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
              icon={<Camera className="w-5 h-5" />}
            >
              Try Demo
              Advanced Vision Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to build intelligent image recognition systems.
              <FuturisticCard
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
        <ResponsiveContainer>
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Image Recognition Pro?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of computer vision that delivers accurate results.
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">"
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to See with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies using AI Image Recognition Pro to build intelligent vision systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Free Trial;
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Pricing;
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
export default AIImageRecognitionPro;
