import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, PenTool, FileText, Zap, Target, CheckCircle, Users } from "lucide-react";

const AIContentWriterPage = () => {
  const features = [
    {
      icon: <PenTool className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Writing',
      description: 'Generate high-quality content using advanced AI that understands context and tone.'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: 'Multiple Formats',
      description: 'Create blogs, articles, social media posts, emails, and more with ease.'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Fast Generation',
      description: 'Produce content 10x faster than traditional writing methods.'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'SEO Optimized',
      description: 'Automatically optimize content for search engines and better rankings.'
    }
  ];

  const benefits = [
    'Save 80% of your writing time',
    'Generate unlimited content ideas',
    'Maintain consistent brand voice',
    'Improve SEO rankings',
    'Scale content production',
    'Reduce content creation costs'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Create high-quality content with our AI-powered writing platform. Generate blogs, articles, social media posts, and more with advanced AI technology." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Content Writer</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create high-quality, engaging content at scale with our AI-powered writing platform. 
            Generate blogs, articles, social media posts, and more in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Start Writing
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              <PenTool className="mr-2 w-5 h-5" />
              Try Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Writing Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to create compelling content that engages and converts
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Writer?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI content writer understands your brand voice and creates content that resonates 
                with your audience while saving you time and resources.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <FileText className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Write?</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of content creators using our AI to produce amazing content.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Start Writing Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Transform Your Content Strategy</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let writer's block or time constraints hold you back. Let our AI content writer 
              help you create engaging content that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Writing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentWriterPage;</PenTool></PenTool></FileText></FileText></Zap></Target></meta></ArrowRight></ArrowRight></ArrowRight></CheckCircle>