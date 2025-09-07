import React from 'react',;
import Head from 'next/head',;
import Card from '../components/ui/Card',;
import Button from '../components/ui/Button',;
import { Brain, Zap, Shield, BarChart3, Users, Clock, CheckCircle, Star, ArrowRight, Play, Download, Code, Globe, Lock, Sparkles } from 'lucide-react',;
;
export default function AIContentGeneratorPage() {;
  const features = [;
    {;
      icon:<Brain className="w-8 h-8 text-white" />,;
      title:'AI-Powered Content Creation',,
  description:'Generate high-quality, engaging content using advanced language models trained on millions of articles, blogs, and marketing copy.',;
      color:'bg-gradient-to-br from-purple-500 to-indigo-600',;
      gradient:'from-purple-400 to-indigo-500'},;
    {;
      icon:<Zap className="w-8 h-8 text-white" />,;
      title:'Real-time Generation',,
  description:'Create content in seconds with our lightning-fast AI engine. No more waiting hours for content creation.',;
      color:'bg-gradient-to-br from-yellow-500 to-orange-600',;
      gradient:'from-yellow-400 to-orange-500'},;
    {;
      icon:<Shield className="w-8 h-8 text-white" />,;
      title:'Plagiarism-Free Content',,
  description:'Every piece of content is unique and original. Our AI ensures 100% plagiarism-free writing.',;
      color:'bg-gradient-to-br from-green-500 to-emerald-600',;
      gradient:'from-green-400 to-emerald-500'},;
    {;
      icon:<BarChart3 className="w-8 h-8 text-white" />,;
      title:'SEO Optimization',,
  description:'Built-in SEO tools that analyze keywords, suggest improvements, and optimize content for search engines.',;
      color:'bg-gradient-to-br from-blue-500 to-cyan-600',;
      gradient:'from-blue-400 to-cyan-500'},;
    {;
      icon:<Users className="w-8 h-8 text-white" />,;
      title:'Multi-Language Support',,
  description:'Generate content in 50+ languages with native-level fluency and cultural understanding.',;
      color:'bg-gradient-to-br from-red-500 to-pink-600',;
      gradient:'from-red-400 to-pink-500'},;
    {;
      icon:<Clock className="w-8 h-8 text-white" />,;
      title:'24/7 Availability',,
  description:'Access our AI content generator anytime, anywhere. No downtime, no waiting, instant results.',;
      color:'bg-gradient-to-br from-teal-500 to-blue-600',;
      gradient:'from-teal-400 to-blue-500'}],;
;
  const pricingPlans = [;
    {;
      name:'Starter',;
      price:'$29',;
      period:'/month',,
  description:'Perfect for individuals and small blogs',;
      features:[;
        '1,000 words per month5 content templates',;
        'Basic SEO optimizationEmail support',;
        'API access (100 calls/month)Content analytics dashboard';
      ],;
      popular:false,;
      color:'border-gray-600',;
      buttonColor:'bg-gray-600 hover:bg-gray-700';
    },;
    {;
      name:'Professional',;
      price:'$99',;
      period:'/month',,
  description:'Ideal for growing businesses and agencies',;
      features:[;
        '10,000 words per month25+ content templates',;
        'Advanced SEO toolsPriority support',;
        'API access (1,000 calls/month)Advanced analytics',;
        'Team collaborationCustom branding';
      ],;
      popular:true,;
      color:'border-blue-500',;
      buttonColor:'bg-blue-600 hover:bg-blue-700';
    },;
    {;
      name:'Enterprise',;
      price:'$299',;
      period:'/month',,
  description:'For large organizations and enterprises',;
      features:[;
        'Unlimited wordsAll templates + custom',;
        'Full SEO suiteDedicated support',;
        'Unlimited API accessAdvanced analytics',;
        'White-label solutionCustom integrations',;
        'SLA guarantee';
      ],;
      popular:false,;
      color:'border-purple-600',;
      buttonColor:'bg-purple-600 hover:bg-purple-700';
    }
  ],;
;
  const useCases = [;
    {;
      title:'Blog Writing',,
  description:'Generate engaging blog posts, articles, and long-form content in minutes.',;
      examples:['Tech reviewsHow-to guides', 'Industry insightsProduct comparisons'];
    },;
    {;
      title:'Marketing Copy',,
  description:'Create compelling ad copy, landing pages, and marketing materials.',;
      examples:['Facebook adsGoogle ads', 'Landing pagesEmail campaigns'];
    },;
    {;
      title:'Social Media',,
  description:'Generate engaging social media posts, captions, and hashtag suggestions.',;
      examples:['Instagram postsTwitter threads', 'LinkedIn articlesTikTok captions'];
    },;
    {;
      title:'E-commerce',,
  description:'Write product descriptions, category pages, and promotional content.',;
      examples:['Product descriptionsCategory pages', 'Promotional emailsFAQ sections'];
    }
  ],;
;
  const integrations = [;
  ],;
;
  return (;
      icon:<Brain className="w-8 h-8 text-white" />,;"
"
      icon:<Zap className="w-8 h-8 text-white" />,;"
      icon:<Shield className="w-8 h-8 text-white" />,;"
      icon:<BarChart3 className="w-8 h-8 text-white" />,;"
</BarChart3>"
      icon:<Users className="w-8 h-8 text-white" />,;"
      icon:<Clock className="w-8 h-8 text-white" />,;"

pr-12325
    <>;
      <Head>;

        <title>AI Content Generator | Zion Tech Group - Advanced AI-Powered Content Creation</title>;"
        <meta name="description" content="Generate high-quality, SEO-optimized content in seconds with our advanced AI content generator. Support for 50+ languages, plagiarism-free writing, and real-time generation." />;"
</meta>"
        <meta property="og:title" content="AI Content Generator | Zion Tech Group" />;"
        <meta property="og:description" content="Advanced AI-powered content creation with real-time generation, SEO optimization, and multi-language support." />;"
        <meta name="twitter:card" content="summary_large_image" />;"
</meta>
      ;"
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">;"
</section>"
        <div className="absolute inset-0">;"
</div>]"
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />;"
</div>"
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />;"
</div>
        </div>;"
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;"
          <div className="mb-8">;"
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">;"
              <Sparkles className="w-4 h-4 mr-2" />;"

            </div>;
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight">;"
</h1>
          </h1>;"
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">;"
</p>
          </p>;"
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">;"
            <Button;"
              href="#pricing";""
              size="lg";""
              className="bg-purple-600 hover:bg-purple-700 shadow-2xl shadow-purple-500/25";"
            >;
              <ArrowRight className="w-5 h-5 ml-2" />;"

              href="#demo";""
              variant="outline";""
              className="border-white/20 hover:border-white/40 hover:bg-white/5";"
              <Play className="w-5 h-5 mr-2" />;"

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">;"
            <div className="text-center">;"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400">50+</div>;""
              <div className="text-gray-400">Languages</div>;"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">10M+</div>;""
              <div className="text-gray-400">Words Generated</div>;"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400">99.9%</div>;""
              <div className="text-gray-400">Uptime</div>;"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400">24/7</div>;""
              <div className="text-gray-400">Support</div>;"
      </section>;"
      <section className="py-24 bg-gray-900 relative overflow-hidden">;"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;"
          <div className="text-center mb-20">;"
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;"
            </p>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;"
              <Card;
                key={index}"
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-purple-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1";"
                style={{ animationDelay:`${(index * 0.1) + 0.2}s` }}
                <div className="relative">;"
</div>`;
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>;
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">;"
</h3>
                </h3>;"
                <p className="text-gray-400 leading-relaxed">;"
      <section className="py-24 bg-black relative overflow-hidden">;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;"
                className="group border border-gray-700 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300";"
                <div className="flex items-start space-x-4">;"
                  <div className="text-4xl">{useCase.icon}</div>;""
                  <div className="flex-1">;"
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">;"
                    <p className="text-gray-400 mb-4 leading-relaxed">;"
                    <div className="grid grid-cols-2 gap-2">;"
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-300">;"
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;"

      <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">;"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;"
                key={index}"`;
                className={`relative group ${plan.popular ? 'ring-2 ring-purple-500 scale-105' :} border ${plan.color} hover:border-purple-500/50 transition-all duration-300`}

                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;"
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;"
</span>
                    </span>;
                <div className="text-center mb-8">;"
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;""
                  <div className="text-4xl font-bold text-white mb-2">;"
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>;"
                  <p className="text-gray-400">{plan.description}</p>;"
                <ul className="space-y-4 mb-8">;"
</ul>"
                    <li key={featureIndex} className="flex items-center text-gray-300">;"
</li>"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;"

                    </li>;
                </ul>;
                  href="/contact";"`;
                  className={`w-full ${plan.buttonColor} text-white`}"
                  size="lg";"

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">;"
                className="text-center group border border-gray-700 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300";"
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">;"
                <h3 className="font-semibold text-white mb-2">{integration.name}</h3>;""
                <p className="text-sm text-gray-400">{integration.description}</p>;"
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">;"
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />;"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">;"
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">;"
          <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">;"
          <div className="flex flex-col sm:flex-row gap-6 justify-center">;"
              href="/contact";""
              variant="secondary";""
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl";"

              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl";"

      </section>;
    </>;
  );
}
"`;