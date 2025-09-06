import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button';
import { Search, TrendingUp, CheckCircle, AlertTriangle, ArrowRight, Target, BarChart3, Globe, Smartphone, Zap } from 'lucide-react';
export default function SEOAnalyzerToolPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [url, setUrl] = useState('');
  const features = null;
            keyword research, and optimization recommendations to improve your search rankings and drive more organic traffic.
          </p>
          
          {/* URL Input */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="url"
                placeholder="Enter your website URL (e.g., https://example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Button
                onClick={handleAnalyzeSEO}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover-glow whitespace-nowrap"
                disabled={isAnalyzing || !url.trim()}
              >
                {isAnalyzing ? (
                  <>
                    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2' />                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className='w-5 h-5 mr-2' />                    <Search className="w-5 h-5 mr-2" />
                    Analyze SEO
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <Button
              href='#pricing'
              variant='outline'
              size='lg'
              className='border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl'            >
              View Pricing
            </Button>
            <Button
              href='/contact'
              variant='outline'
              size='lg'
              className='border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl'            >              href="#pricing"
              variant="outline"
              size="lg"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl"
              View Pricing
            </Button>
            <Button
              href='/contact'
              variant='outline'
              size='lg'
              className='border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl'              href="/contact"
              variant="outline"
              size="lg"
              className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl"
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='section-padding bg-gradient-cursor-accent'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
              Powerful SEO Features
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Our SEO analyzer provides comprehensive insights and tools to help
              you dominate search rankings.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='card-hover group border-gradient-green'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='flex items-start space-x-6'>
                  <div className='relative'>
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                    />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold mb-4 text-white'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-400 leading-relaxed'>                      {feature.description}              Powerful SEO Features
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our SEO analyzer provides comprehensive insights and tools to help you dominate search rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-green"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Factors Section */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
              Comprehensive SEO Analysis
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              We analyze every aspect of your website's SEO to provide
              actionable insights and recommendations.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {seoFactors.map((category, index) => (
              <Card
                key={index}
                className='card-hover border-gradient-green'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='flex items-center mb-6'>
                  <div className='text-3xl mr-4'>{category.icon}</div>
                  <h3 className={`text-xl font-bold ${category.color}`}>
                    {category.category}
                  </h3>
                </div>
                <ul className='space-y-3'>
                  {category.factors.map((factor, factorIndex) => (
                    <li
                      key={factorIndex}
                      className='flex items-center text-gray-300'
                    >
                      <CheckCircle className='w-4 h-4 text-green-400 mr-3 flex-shrink-0' />                      {factor}              Comprehensive SEO Analysis
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We analyze every aspect of your website's SEO to provide actionable insights and recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoFactors.map((category, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-green"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <h3 className={`text-xl font-bold ${category.color}`}>{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.factors.map((factor, factorIndex) => (
                    <li key={factorIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Analysis Results */}
      {analysisResults && (
        <section className='section-padding bg-gradient-cursor-accent'>
          <div className='container-cursor'>
            <div className='text-center mb-12'>
              <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
                SEO Analysis Results
              </h2>
              <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
                Here's a sample analysis of a website. Get comprehensive
                insights for your own website.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
              {/* Overall Score */}
              <Card className='border-gradient-green text-center'>
                <h3 className='text-2xl font-bold mb-6 text-white'>
                  Overall SEO Score
                </h3>
                <div className='text-6xl font-bold text-green-400 mb-4'>
                  {analysisResults.overallScore}/100
                </div>
                <div className='w-32 h-32 mx-auto mb-6'>
                  <svg
                    className='w-full h-full transform -rotate-90'
                    viewBox='0 0 36 36'
                  >
                    <path
                      d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeDasharray={`${(analysisResults.overallScore / 100) * 100}, 100`}
                      className='text-green-500'
                    />
                  </svg>
                </div>
                <p className='text-gray-400'>
                  Good SEO foundation with room for improvement
                </p>
              </Card>

              {/* Detailed Scores */}
              <Card className='border-gradient-green'>
                <h3 className='text-2xl font-bold mb-6 text-white'>
                  Detailed Scores
                </h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-400'>On-Page SEO</span>
                    <span className='font-bold text-green-400'>
                      {analysisResults.onPageScore}/100
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-400'>Technical SEO</span>
                    <span className='font-bold text-orange-400'>
                      {analysisResults.technicalScore}/100
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-400'>Content SEO</span>
                    <span className='font-bold text-blue-400'>
                      {analysisResults.contentScore}/100
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-400'>Mobile SEO</span>
                    <span className='font-bold text-green-400'>
                      {analysisResults.mobileScore}/100
                    </span>                  </div>                SEO Analysis Results
              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample analysis of a website. Get comprehensive insights for your own website.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Overall Score */}
              <Card className="border-gradient-green text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Overall SEO Score</h3>
                <div className="text-6xl font-bold text-green-400 mb-4">{analysisResults.overallScore}/100</div>
                <div className="w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${(analysisResults.overallScore / 100) * 100}, 100`}
                      className="text-green-500"
                    />
                  </svg>
                </div>
                <p className="text-gray-400">Good SEO foundation with room for improvement</p>
              </Card>

              {/* Detailed Scores */}
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Detailed Scores</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">On-Page SEO</span>
                    <span className="font-bold text-green-400">{analysisResults.onPageScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Technical SEO</span>
                    <span className="font-bold text-orange-400">{analysisResults.technicalScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Content SEO</span>
                    <span className="font-bold text-blue-400">{analysisResults.contentScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Mobile SEO</span>
                    <span className="font-bold text-green-400">{analysisResults.mobileScore}/100</span>
                  </div>
                </div>
              </Card>

              {/* Issues */}
              <Card className='border-gradient-green'>
                <h3 className='text-2xl font-bold mb-6 text-white'>
                  Issues Found
                </h3>
                <div className='space-y-3'>
                  {analysisResults.issues.map((issue, index) => (
                    <div key={index} className='flex items-start space-x-3'>
                      {issue.type === 'error' ? (
                        <AlertTriangle className='w-5 h-5 text-red-400 mt-1 flex-shrink-0' />
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className='w-5 h-5 text-yellow-400 mt-1 flex-shrink-0' />
                      ) : (
                        <CheckCircle className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />
                      )}
                      <div>
                        <span className='text-gray-300'>{issue.message}</span>
                        <div className='text-xs text-gray-500 mt-1'>
                          Priority: {issue.priority}
                        </div>                      </div>                  {analysisResults.issues.map((issue, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {issue.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <span className="text-gray-300">{issue.message}</span>
                        <div className="text-xs text-gray-500 mt-1">Priority: {issue.priority}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Recommendations and Keywords */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <Card className='border-gradient-green'>
                <h3 className='text-2xl font-bold mb-6 text-white'>
                  Optimization Recommendations
                </h3>
                <div className='space-y-3'>
                  {analysisResults.recommendations.map((rec, index) => (
                    <div key={index} className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />
                      <span className='text-gray-300'>{rec}</span>                    </div>            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-gradient-green">
                <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>
                <div className="space-y-3">
                  {analysisResults.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{rec}</span>
                  ))}
                </div>
              </Card>

              <Card className='border-gradient-green'>
                <h3 className='text-2xl font-bold mb-6 text-white'>
                  Keyword Opportunities
                </h3>
                <div className='space-y-4'>
                    <div
                      key={index}
                      className='border-b border-gray-700 pb-3 last:border-b-0'
                    >
                      <div className='flex justify-between items-center mb-2'>
                        <span className='font-semibold text-white'>
                          {keyword.keyword}
                        </span>
                        <span className='text-sm text-gray-400'>
                          Volume: {keyword.volume}
                        </span>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-sm text-gray-400'>
                          Difficulty: {keyword.difficulty}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            keyword.difficulty === 'low'
                              ? 'bg-green-500/20 text-green-400'
                              : keyword.difficulty === 'medium'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-red-500/20 text-red-400'
                          }`}
                        >                          {keyword.difficulty}                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Difficulty: {keyword.difficulty}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          keyword.difficulty === 'low' ? 'bg-green-500/20 text-green-400' :
                          keyword.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      <section id='pricing' className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
              Simple Pricing
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Choose the SEO analysis plan that best fits your business needs
              and goals.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricing.map((plan, index) => (              Simple Pricing
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the SEO analysis plan that best fits your business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`card-hover border-gradient-green ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium'>                      Most Popular
                    </span>
                  </div>
                )}                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {plan.name}
                  </h3>
                  <div className='mb-6'>
                    <span className='text-4xl font-bold text-white'>
                      {plan.price}
                    </span>
                    <span className='text-gray-400'>{plan.period}</span>
                  </div>
                  <p className='text-gray-400'>{plan.description}</p>
                </div>

                <ul className='space-y-4 mb-8'>
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-300'
                    >
                      <CheckCircle className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' />                      {feature}                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href='/contact'
                  size='lg'
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>                  href="/contact"
                  size="lg"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='section-padding bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='container-cursor text-center relative z-10'>
          <h2 className='text-responsive-lg font-bold text-white mb-8 text-shadow-lg'>
          </h2>
          <p className='text-responsive-md text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Join thousands of businesses using our SEO analyzer to improve their
            search rankings and drive more organic traffic.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-green-600 hover:bg-gray-100 shadow-2xl'
            >
              Start Free Trial
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              href='/contact'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-green-600 shadow-2xl'            >              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
);
}
