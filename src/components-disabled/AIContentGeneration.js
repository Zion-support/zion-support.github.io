import React from 'react';
import { Target, TrendingUp, Users, Globe, Cpu, Lightbulb, FileText, PenTool, Image, Video, Music } from 'lucide-react';
const AIContentGeneration = () => {
    const contentFeatures = [
        {
            icon: FileText,
            title: "Text Generation",
            description: "AI-powered content creation for various text formats",
            features: ["Article writing", "Copywriting", "Technical documentation", "Creative storytelling"]
        },
        {
            icon: Image,
            title: "Visual Content",
            description: "Generate images, graphics, and visual elements",
            features: ["Image generation", "Graphic design", "Illustrations", "Visual branding"]
        },
        {
            icon: Video,
            title: "Video Production",
            description: "AI-enhanced video creation and editing",
            features: ["Video generation", "Content editing", "Animation", "Visual effects"]
        },
        {
            icon: Music,
            title: "Audio Content",
            description: "Generate audio content and music compositions",
            features: ["Music generation", "Voice synthesis", "Sound effects", "Audio editing"]
        }
    ];
    const contentTypes = [
        {
            title: "Marketing Content",
            description: "Engaging marketing materials and campaigns",
            icon: Target,
            capabilities: ["Social media posts", "Email campaigns", "Ad copy", "Brand messaging"]
        },
        {
            title: "Educational Content",
            description: "Learning materials and educational resources",
            icon: Users,
            capabilities: ["Course materials", "Tutorials", "Documentation", "Learning guides"]
        },
        {
            title: "Creative Writing",
            description: "Fiction, poetry, and creative content",
            icon: PenTool,
            capabilities: ["Story generation", "Poetry creation", "Character development", "Plot generation"]
        },
        {
            title: "Technical Content",
            description: "Technical documentation and specifications",
            icon: Cpu,
            capabilities: ["API documentation", "User manuals", "Technical guides", "Specifications"]
        },
        {
            title: "Business Content",
            description: "Professional business communications",
            icon: TrendingUp,
            capabilities: ["Reports", "Presentations", "Proposals", "Business plans"]
        },
        {
            title: "Multimedia Content",
            description: "Combined text, image, and video content",
            icon: Globe,
            capabilities: ["Interactive content", "Rich media", "Cross-platform content", "Engagement materials"]
        }
    ];
    const benefits = [
        "Significantly faster content creation",
        "Consistent quality and brand voice",
        "Scalable content production",
        "Cost-effective content generation",
        "Multilingual content capabilities",
        "24/7 content creation availability"
    ];
    const implementation = [
        {
            phase: "Content Strategy",
            description: "Define content goals and requirements",
            duration: "1-2 weeks"
        },
        {
            phase: "AI Training",
            description: "Train AI models on your brand and content style",
            duration: "2-4 weeks"
        },
        {
            phase: "Content Templates",
            description: "Create templates and guidelines for different content types",
            duration: "2-3 weeks"
        },
        {
            phase: "Integration",
            description: "Integrate AI content generation into your workflow",
            duration: "3-5 weeks"
        },
        {
            phase: "Testing & Refinement",
            description: "Test content quality and refine AI parameters",
            duration: "2-4 weeks"
        },
        {
            phase: "Deployment",
            description: "Full deployment and team training",
            duration: "1-2 weeks"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2"/>
              AI Content Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> Content Generation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your content creation process with AI-powered tools 
              that generate high-quality, engaging content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#features" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Features
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Content Generation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI content generation platform supports multiple content types 
              and formats for comprehensive content creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentFeatures.map((feature, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Content Types
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Generate diverse content types to meet all your business 
              and communication needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((contentType, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contentType.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{contentType.title}</h3>
                <p className="text-gray-300 mb-4">{contentType.description}</p>
                <ul className="space-y-2">
                  {contentType.capabilities.map((capability, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {capability}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Content Generation?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI content generation platform revolutionizes how you create, 
                manage, and distribute content across all channels.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (<li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 border border-emerald-500/30">
              <div className="text-center">
                <Lightbulb className="w-24 h-24 text-emerald-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">Content Innovation</h3>
                <p className="text-gray-300 mb-6">
                  Leverage AI to create engaging, high-quality content that 
                  resonates with your audience and drives results.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Quality content</p>
                  <p>• Faster production</p>
                  <p>• Consistent voice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Implementation Process
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A structured approach to implementing AI content generation 
            in your organization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementation.map((phase, index) => (<div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.phase}</h3>
                <p className="text-gray-300 mb-2">{phase.description}</p>
                <p className="text-sm text-emerald-400">{phase.duration}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start generating high-quality content at scale with AI-powered 
            content creation tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Creating
            </a>
            <a href="/solutions" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View All Solutions
            </a>
          </div>
        </div>
      </section>
    </div>);
};
export default AIContentGeneration;
