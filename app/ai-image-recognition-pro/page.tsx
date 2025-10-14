import React from 'react';
import { ArrowRight, CheckCircle, Image, Scan } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton;

const AIImageRecognitionPro = () => {
  const features = [
    {
          title: ';Object Detection",
      description: "Identify and classify objects in images with high accuracy",
      icon: <Eye className="w-6 h-6" />
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Facial Recognition",
      description: "Advanced facial recognition and analysis capabilities",
      icon: <Users className="w-6 h-6" />
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Text Extraction",
      description: "Extract text from images using OCR technology",
      icon: <Scan className="w-6 h-6" />
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Scene Analysis",
      description: "Understand and analyze complex scenes and contexts",
      icon: <Image className="w-6 h-6" />
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    
    <div>
    <EnhancedSEO />
      {/* Hero Section */}
      <section>
        <div>
    <div />
          <div />
  </div>
  <ResponsiveContainer />
          <div>
    <Camera />
            <span className="text-cyan-400 text-sm font-medium">Computer Vision AI</span>
          </div>
          
          <h1>  <span>AI Image Recognition Pro
            </span></h1>
          
          <p />
            Transform images into actionable insights with AI-powered recognition. 
            Object detection, facial recognition, and text extraction for modern applications.
          </p>
          
          <div>
    <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5">}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Camera className="w-5 h-5">}
            >
              Try Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section />
        <ResponsiveContainer />
          <div>
    <h2 />
              Advanced Vision Features
            </h2>
            <p />
              Everything you need to build intelligent image recognition systems.
            </p>
          </div>
          <div />
            {features.map((feature, index) => (
              <FuturisticCard />
                <div />
                  {feature.icon}
                </div>
                <h3 />
                  {feature.title}
                </h3>
                <p />
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section />
        <ResponsiveContainer />
          <div>
    <h2 />
              Why Choose AI Image Recognition Pro?
            </h2>
            <p />
              Experience the power of computer vision that delivers accurate results.
            </p>
          </div>
          <div />
            {benefits.map((benefit, index) => (
              <div>
    <CheckCircle />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section />
        <ResponsiveContainer />
          <div>
    <h2 />
              Ready to See with AI?
            </h2>
            <p />
              Join leading companies using AI Image Recognition Pro to build intelligent vision systems.
            </p>
            <div>
    <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5">}
              >
                Start Your Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5">}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

    </div>
  );
};

export default AIImageRecognitionPro;
',
'