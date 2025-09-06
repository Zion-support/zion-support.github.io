import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button';
import { ExternalLink, Check, Star, Zap, Users, Globe, BarChart3, Bot, Cloud, Lock, Database, Code, Palette, Search, Mail, Calendar, CreditCard, FileText, Video, Music, Image, Globe2, Smartphone, Monitor, Server, Cpu, HardDrive, Brain, Target, TrendingUp, Shield, Rocket, Briefcase, Cog, Lightbulb, ChartBar, Clock, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
export default function BusinessToolsPage() {
  const businessTools = null;
            communicate effectively, market their products, and grow their operations. Real pricing and features.
          </p>
        </div>
      </section>

      {/* Business Insights */}
      <section className='section-padding bg-gradient-cursor-accent'>
        <div className='container-cursor'>
          <div className='text-center mb-16'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
              Business Tool Trends & Insights
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Stay ahead of the curve with our analysis of the business tools
              landscape and emerging opportunities.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {businessInsights.map((insight, index) => (
              <Card
                key={index}
                className='card-hover border-gradient-blue text-center'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className='text-xl font-bold text-white mb-3'>
                  {insight.title}
                </h3>
                <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
                  {insight.description}
                </p>
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${insight.color} bg-gray-800/50`}
                >                  {insight.trend}              Business Tool Trends & Insights
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with our analysis of the business tools landscape and emerging opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessInsights.map((insight, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{insight.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{insight.description}</p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${insight.color} bg-gray-800/50`}>
                  {insight.trend}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Tools */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
              Essential Business Tools
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Hand-picked business tools that deliver real value for your
              organization. Each tool has been evaluated for features, pricing,
              and business impact.            </p>
          </div>

          {businessTools.map((category, categoryIndex) => (      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Essential Business Tools
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Hand-picked business tools that deliver real value for your organization. Each tool has been evaluated 
              for features, pricing, and business impact.
          </div>

          {businessTools.map((category, categoryIndex) => (
            <div key={categoryIndex} className='mb-20'>
              <div className='text-center mb-12'>
                <h3 className='text-3xl font-bold text-white mb-4'>
                  {category.category}
                </h3>
                <div className='w-24 h-1 bg-gradient-to-r from-cursor-blue to-purple-500 mx-auto rounded-full' />
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>                {category.tools.map((tool, toolIndex) => (
                  <Card
                    key={toolIndex}
                    className={`card-hover border-gradient-blue group ${tool.popular ? 'ring-2 ring-cursor-blue/50' : ''}`}            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{category.category}</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-cursor-blue to-purple-500 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card
                    key={toolIndex}
                    className={`card-hover border-gradient-blue group ${tool.popular ? 'ring-2 ring-cursor-blue/50' : ''}`}
                    style={{
                      animationDelay: `${categoryIndex * 0.2 + toolIndex * 0.1}s`,
                    }}
                  >
                    {tool.popular && (
                      <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                        <div className='inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium'>
                          <Star className='w-3 h-3 mr-1' />                          Popular Choice                    style={{ animationDelay: `${(categoryIndex * 0.2) + (toolIndex * 0.1)}s` }}
                  >
                    {tool.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium">
                          <Star className="w-3 h-3 mr-1" />
                        </div>
                      </div>
                    )}

                    <div className='text-center mb-6'>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {tool.icon}
                      </div>
                      <h4 className='text-xl font-bold text-white mb-2'>
                        {tool.name}
                      </h4>
                      <p className='text-gray-400 text-sm leading-relaxed'>
                        {tool.description}
                      </p>
                    </div>

                    <div className='mb-6'>
                      <div className='text-center mb-4'>
                        <span className='text-2xl font-bold text-cursor-blue'>
                          {tool.pricing}
                        </span>
                      </div>
                      <ul className='space-y-2'>
                        {tool.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className='flex items-center text-gray-300 text-sm'
                          >
                            <Check className='w-4 h-4 text-cursor-blue mr-3 flex-shrink-0' />                            {feature}                        {tool.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{tool.name}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-cursor-blue">{tool.pricing}</span>
                      </div>
                      <ul className="space-y-2">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <Check className="w-4 h-4 text-cursor-blue mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      href={tool.website}
                      variant='primary'
                      size='sm'
                      className='w-full group-hover:scale-105 transition-transform duration-300'
                      external
                    >
                      Visit Website
                      <ExternalLink className='w-4 h-4 ml-2' />                    </Button>                      variant="primary"
                      size="sm"
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                      external
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Productivity Tips */}
      <section className='section-padding bg-gradient-cursor-accent'>
        <div className='container-cursor'>
          <div className='text-center mb-16'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Maximize the value of your business tools with these proven
              strategies and best practices.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {productivityTips.map((tip, index) => (
              <Card
                key={index}
                className='card-hover border-gradient-blue text-center'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='flex justify-center mb-4'>{tip.icon}</div>
                <h3 className='text-xl font-bold text-white mb-3'>
                  {tip.title}
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  {tip.description}
                </p>              </Card>                <div className="flex justify-center mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tip.description}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='section-padding bg-gradient-to-r from-cursor-blue to-purple-600 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='container-cursor text-center relative z-10'>
          <h2 className='text-responsive-lg font-bold text-white mb-8'>
          </h2>
          <p className='text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            These business tools can streamline your operations, improve team
            collaboration, and drive growth. Start with the essentials and build
            your tech stack strategically.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <Button
              href='/micro-saas'
              variant='secondary'
              size='lg'
              className='bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl'            >
              Explore Micro SaaS
            </Button>
            <Button
              href='/contact'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl'            >              href="/micro-saas"
              variant="secondary"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl"
              Explore Micro SaaS
            </Button>
            <Button
              href='/contact'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl'              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
              Get Business Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
);
}
