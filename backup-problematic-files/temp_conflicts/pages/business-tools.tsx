import React from 'react',;
import Head from 'next/head',;
import Card from '../components/ui/Card',;
import Button from '../components/ui/Button',;
import { ExternalLink, Check, Star, Zap, Users, Globe, BarChart3, Bot, Cloud, Lock, Database, Code, Palette, Search, Mail, Calendar, CreditCard, FileText, Video, Music, Image, Globe2, Smartphone, Monitor, Server, Cpu, HardDrive, Brain, Target, TrendingUp, Shield, Rocket, Briefcase, Cog, Lightbulb, ChartBar, Clock, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react',;
;
export default function BusinessToolsPage() {;
  const businessTools = [;
    {;
      category:'Project Management',;
      tools:[;
          name:'Notion',;
          description:'All-in-one workspace for notes, docs, projects, and team collaboration.',;']
          features:['TemplatesDatabase views', 'Real-time editingIntegrations', 'Team spaces'],;
          pricing:'Free - $8/month',;
          website:'https://notion.so',;
          icon:<FileText className="w-6 h-6" />,;"
"
          icon:<CheckCircle className="w-6 h-6" />,;"
          icon:<Calendar className="w-6 h-6" />,;"
          icon:<MessageSquare className="w-6 h-6" />,;"
          icon:<Users className="w-6 h-6" />,;"
          icon:<Video className="w-6 h-6" />,;"
          icon:<Target className="w-6 h-6" />,;"
          icon:<Mail className="w-6 h-6" />,;"
          icon:<TrendingUp className="w-6 h-6" />,;"
          icon:<CreditCard className="w-6 h-6" />,;"
          icon:<ChartBar className="w-6 h-6" />,;"
          icon:<Palette className="w-6 h-6" />,;"
          icon:<Image className="w-6 h-6" />,;"
          icon:<BarChart3 className="w-6 h-6" />,;"
</BarChart3>"
      icon:<CheckCircle className="w-6 h-6 text-green-400" />;"
      icon:<Cog className="w-6 h-6 text-blue-400" />;"
      icon:<ChartBar className="w-6 h-6 text-purple-400" />;"
        icon:<Users className="w-6 h-6 text-orange-400" />;"

    <>;
      <Head>;

        <title>Business Tools & Productivity - Zion Tech Group</title>;"
        <meta name="description" content="Essential business tools for project management, communication, marketing, finance, and productivity. Real pricing and features for growing businesses." />;"
</meta>"
        <meta property="og:title" content="Business Tools & Productivity - Zion Tech Group" />;"
        <meta property="og:description" content="Comprehensive business tools directory with pricing and features." />;"
        <meta name="twitter:card" content="summary_large_image" />;"
</meta>
      ;"
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">;"
</section>"
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />;"
</div>"
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />;"
        <div className="absolute inset-0 bg-grid opacity-10" />;"
        <div className="relative z-10 container-cursor text-center">;"
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">;"
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />;"
</span>
          </div>;"
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">;"
</h1>
          </h1>;"
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">;"
</p>
          </p>;
        </div>;
      </section>;"
      <section className="section-padding bg-gradient-cursor-accent">;"
        <div className="container-cursor">;"
          <div className="text-center mb-16">;"
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">;"
</h2>
            </h2>;"
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;"
</div>
              <Card;
                key={index}"
                className="card-hover border-gradient-blue text-center";"
                style={{ animationDelay:`${index * 0.1}s` }}
              >;
                <h3 className="text-xl font-bold text-white mb-3">{insight.title}</h3>;""
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{insight.description}</p>;"`;
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${insight.color} bg-gray-800/50`}>;
      <section className="section-padding bg-gradient-cursor">;"
          <div className="text-center mb-20">;"
            <div key={categoryIndex} className="mb-20">;"
              <div className="text-center mb-12">;"
                <h3 className="text-3xl font-bold text-white mb-4">{category.category}</h3>;""
                <div className="w-24 h-1 bg-gradient-to-r from-cursor-blue to-purple-500 mx-auto rounded-full" />;"
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
                    key={toolIndex}"`;
                    className={`card-hover border-gradient-blue group ${tool.popular ? 'ring-2 ring-cursor-blue/50' :}`}`;
                    style={{ animationDelay:`${(categoryIndex * 0.2) + (toolIndex * 0.1)}s` }}

                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">;"
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium">;"
                          <Star className="w-3 h-3 mr-1" />;"

                    <div className="text-center mb-6">;"
</div>`;
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>;
                      <h4 className="text-xl font-bold text-white mb-2">{tool.name}</h4>;""
                      <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>;"
                    <div className="mb-6">;"
                      <div className="text-center mb-4">;"
                        <span className="text-2xl font-bold text-cursor-blue">{tool.pricing}</span>;"
                      <ul className="space-y-2">;"
</ul>"
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">;"
</li>"
                            <Check className="w-4 h-4 text-cursor-blue mr-3 flex-shrink-0" />;"

                          </li>;
                      </ul>;
                    <Button;
                      href={tool.website}"
                      variant="primary";""
                      size="sm";""
                      className="w-full group-hover:scale-105 transition-transform duration-300";"
                      external;
                      <ExternalLink className="w-4 h-4 ml-2" />;"

                className="card-hover border-gradient-blue text-center";"`;
                <div className="flex justify-center mb-4">;"
                <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>;""
                <p className="text-gray-400 text-sm leading-relaxed">{tip.description}</p>;"
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-purple-600 relative overflow-hidden">;"
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />;"
        <div className="container-cursor text-center relative z-10">;"
          <h2 className="text-responsive-lg font-bold text-white mb-8">;"
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">;"
          </p>;"
          <div className="flex flex-col sm:flex-row gap-6 justify-center">;"
            <Button;"
              href="/micro-saas";""
              variant="secondary";""
              size="lg";""
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl";"

              href="/contact";""
              variant="outline";""
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl";"

      </section>;
    </>;
  );
}"`;