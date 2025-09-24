import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  PenTool,;
  Brain, ;
  Image, ;
  Video, ;
  FileText,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Zap,;
  Users,;
  Globe,;
  Target,;
  TrendingUp,;
  Palette,;
  Camera,;
  Mic,;
  Type,;
  Sparkles,;
  Lightbulb,;
  BarChart3;
} from "lucide-react"
import { SEO } from "@/components/SEO"
export default function AIContentCreation() {;
  const features = [;
    {;
      icon: Brain,title: "AI-Powered Writing",description: "Generate high-quality content with advanced language models"
    };
    {;
      icon: Image,title: "Visual Content",description: "Create stunning images, graphics, and visual assets"
    },;
    {;
      icon: Video,title: "Video Production",description: "Generate and edit videos with AI-driven tools"
    };
    {;
      icon: Globe,title: "Multi-Language",description: "Create content in multiple languages automatically"
    };
  ];
  const services = [;
    {;
      title: "Content Writing",description: "AI-powered writing assistance for blogs, articles, and marketing copy",;
      icon: PenTool,features: ["Blog post generation", "SEO-optimized content", "Brand voice consistency"]
    },;
    {;
      title: "Visual Design",description: "Create compelling graphics, logos, and visual content with AI",;
      icon: Palette,features: ["Logo design", "Social media graphics", "Brand assets"]
    },;
    {;
      title: "Video Creation",description: "Generate and edit videos for marketing and social media",icon: Video,features: ["Video generation", "Auto-editing", "Caption generation"]
    },;
    {;
      title: "Audio Content",description: "Create podcasts, voice-overs, and audio content with AI",;
      icon: Mic,features: ["Voice synthesis", "Audio editing", "Podcast generation"]
    };
  ],;

  const technologies = [;
    "Natural Language Processing (NLP)",;
    "Generative Adversarial Networks (GANs)",;
    "Computer Vision",;
    "Speech Synthesis",;
    "Content Optimization",;
    "Brand Voice Training",;
    "Multi-Modal AI",;
    "Content Analytics"
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">;
      <SEO ;
        title="AI Content Creation Services - Zion Tech Group"
        description="Revolutionary AI-powered content creation for writing, visual design, video production, and multimedia content generation."
      />;
      ;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20">;
        <div className="absolute inset-0">;
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></[^>]*>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></[^>]*>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></[^>]*>
        </[^>]*>
        ;
        <div className="relative z-10 container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">;
              <[^>]*/>
              AI-Powered Creation;
            </[^>]*>
            ;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              AI Content Creation;
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-600 bg-clip-text text-transparent">;
                Services;
              </[^>]*>
            </[^>]*>
            ;
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">;
              Transform your content strategy with AI-powered creation tools that generate high-quality ;
              written content, visual assets, videos, and multimedia content in seconds.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Start Creating;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/services"
                className="[^"]*"
              >;
                View All Services;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              AI Content Creation Features;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">;
              Our AI content creation platform combines cutting-edge technology with creative intelligence ;
              to deliver engaging, high-quality content across all media types.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={feature.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-400/40 group-hover:to-pink-500/40 transition-all duration-200">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</[^>]*>
                <p className="text-slate-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Section */};
      <section className="py-20 bg-slate-900/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Comprehensive Content Services;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">;
              From written content to visual media, our AI content creation services cover every aspect ;
              of your content needs.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-2 gap-8">;
            {services.map((service, index) => (;
              <motion.div
                key={service.title};
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</[^>]*>
                <p className="text-slate-300 text-lg mb-6">{service.description}</[^>]*>
                <ul className="space-y-2">;
                  {service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-slate-300">;
                      <[^>]*/>
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Technologies Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Advanced AI Technologies;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">;
              Our platform leverages cutting-edge AI technologies to provide the most advanced content creation capabilities available.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {technologies.map((tech, index) => (;
              <motion.div
                key={tech};
                initial={{ opacity: 0, scale: 0.9 }};
                whileInView={{ opacity: 1, scale: 1 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <[^>]*/>
                <span className="text-white text-sm">{tech}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Ready to Transform Your Content?;
            </[^>]*>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">;
              Join the AI content revolution and create engaging, high-quality content in seconds.;
            </[^>]*>
            ;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Start Creating Today;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/services"
                className="[^"]*"
              >;
                Explore All Services;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};