
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';

} from 'lucide-react';import { Code, CheckCircle, AlertTriangle, Zap, BarChart3, ArrowRight, Play, Shield, Clock, TrendingUp } from 'lucide-react';



import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import {
  Code
  CheckCircle
  AlertTriangle
  Zap
  BarChart3
  ArrowRight
  Play
  Shield
  Clock
  TrendingUp;
} from 'lucide-react';import { Code, CheckCircle, AlertTriangle, Zap, BarChart3, ArrowRight, Play, Shield, Clock, TrendingUp } from 'lucide-react';

      icon: <Code className='w-8 h-8 text-white' />
      description:
        'Support for JavaScript, TypeScript, Python, Java, C++, Go, and many more programming languages.'
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
  gradient: 'from-teal-400 to-cyan-500'
}
   ,}
}
    {icon: <CheckCircle className='w-8 h-8 text-white'    />;
      title: 'Code Quality Metrics';
      description:;
        'Comprehensive analysis including complexity, maintainability, test coverage, and security vulnerabilities.';
      color: 'bg-gradient-to-br from-green-500 to-emerald-600';}
      gradient: 'from-green-400 to-emerald-500';}
    }
    {icon: <Zap className='w-8 h-8 text-white'    />;
      title: 'Real-Time Analysis';
      description:;
        'Instant code quality feedback with detailed explanations and improvement suggestions.';
      color: 'bg-gradient-to-br from-orange-500 to-red-600';}
      gradient: 'from-orange-400 to-red-500';}
    }
    {icon: <Shield className='w-8 h-8 text-white'    />;
      title: 'Security Scanning';
      description:;
        'Automated detection of security vulnerabilities, dependency issues, and best practice violations.';
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600';}
      gradient: 'from-purple-400 to-indigo-500';}
    }
  ];

const supportedLanguages = [
  {name: 'JavaScript/TypeScript';
      icon: '⚡';}
      features: ['ESLint rules', 'TypeScript checks', 'React best practices'];}
    }
    {name: 'Python';
      icon: '🐍';}
      features: ['PEP 8 compliance', 'Type hints', 'Security scanning'];}
    }
    {name: 'Java';
      icon: '☕';}
      features: ['PMD rules', 'Checkstyle', 'SonarQube integration'];}
    }
    {name: 'C++';
      icon: '⚙️';}
      features: ['Clang-tidy', 'Static analysis', 'Memory leak detection'];}
    }
    {name: 'Go';
      icon: '🟢';}
      features: ['Golangci-lint', 'Go vet', 'Performance analysis'];}
    }

  const features = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'Multi-Language Support',
      description: 'Support for JavaScript, TypeScript, Python, Java, C++, Go, and many more programming languages.';
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500'},
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: 'Code Quality Metrics',
      description: 'Comprehensive analysis including complexity, maintainability, test coverage, and security vulnerabilities.';
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500'},
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Real-Time Analysis',
      description: 'Instant code quality feedback with detailed explanations and improvement suggestions.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500'},
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Security Scanning',
      description: 'Automated detection of security vulnerabilities, dependency issues, and best practice violations.';
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500'}],

  const supportedLanguages = [
    { name: 'JavaScript/TypeScript', icon: '⚡', features: ['ESLint rulesTypeScript checksReact best practices'] },
    { name: 'Python', icon: '🐍', features: ['PEP 8 complianceType hintsSecurity scanning'] },
    { name: 'Java', icon: '☕', features: ['PMD rulesCheckstyleSonarQube integration'] },
    { name: 'C++', icon: '⚙️', features: ['Clang-tidyStatic analysisMemory leak detection'] },
    { name: 'Go', icon: '🟢', features: ['Golangci-lintGo vetPerformance analysis'] },
    { name: 'PHP', icon: '🐘', features: ['PHPStanPHP CS FixerSecurity analysis'] }
  ];
              Schedule Demo
              Our code quality checker provides comprehensive analysis and;
              improvement suggestions for better code.;
            </p>;
          </div>;

      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Powerful Analysis Features

            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Our code quality checker provides comprehensive analysis and improvement suggestions for better code.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {features.map((feature, index) => (
                      className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature && feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                    />;
                  </div>;
                  <div className='flex-1'>;
                    <h3 className='text-2xl font-bold mb-4 text-white'>;
                      {feature && feature.title}
                    </h3>;
                    <p className='text-gray-400 leading-relaxed'>                      {feature && feature.description}              Powerful Analysis Features;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              Our code quality checker provides comprehensive analysis and improvement suggestions for better code.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {features && features.map((feature, index) => (;
              <Card
                key={index}
                className="card-hover group border-gradient-teal"

                      {feature.description}

                    </p>
                  </div>
                </div>
              </Card>
            ))}



          </div>;
        </div>;
      </section>;

      {/* Supported Languages Section */}
      <section className='section-padding bg-gradient-cursor'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Multi-Language Support;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              We support a wide range of programming languages with;
              language-specific analysis rules and best practices.;
            </p>;
          </div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
            {supportedLanguages && supportedLanguages.map((language, index) => (;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>;
                    <div className={`absolute -inset - 2 bg - gradient - to - r from - transparent via-${feature.gradient} to - transparent rounded - 2xl opacity - 0 group - hover:opacity - 20 transition - opacity duration - 300 blur - sm`} />;
                  </div>;
                  <div className="flex-1">;
                    <h3 className="text - 2xl font - bold mb-4 text-white">;
                      {feature.title}
                    </h3>;
                    <p className="text - gray-400 leading-relaxed">;
                      {feature.description}

                      {feature.description}

                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Languages Section */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>

              Multi-Language Support
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              We support a wide range of programming languages with
              language-specific analysis rules and best practices.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {supportedLanguages.map((language, index) => (
            ))}
              <Card
                key={index}
                className='card-hover border-gradient-teal'
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className='text-center mb-4'>;
                  <div className='text-4xl mb-3'>{language && language.icon}</div>;
                  <h3 className='text-xl font-bold text-white mb-3'>;
                    {language && language.name}
                  </h3>;
                </div>;
                <ul className='space-y-2'>;
                  {language && language.features.map((feature, featureIndex) => (;
                    <li
                      key={featureIndex}

      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Multi-Language Support

            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              We support a wide range of programming languages with language-specific analysis rules and best practices.
            </p>
          </div>

            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              We support a wide range of programming languages with language-specific analysis rules and best practices.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {supportedLanguages && supportedLanguages.map((language, index) => (;
              <Card
                key={index}
                className="card-hover border-gradient-teal"


              <Card
                key={index}
                className="card-hover border-gradient-teal"
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className="text-center mb-4">;
                  <div className="text-4xl mb-3">{language && language.icon}</div>;
                  <h3 className="text-xl font-bold text-white mb-3">{language && language.name}</h3>;
                </div>;
                <ul className="space-y-2">;
                  {language && language.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">;
                      <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
              </Card>;
            ))}

      {/* Demo Analysis Results */}
      {analysisResults && (


      {/* Demo Analysis Results */}
      {analysisResults && (;
        <section className='section-padding bg-gradient-cursor-accent'>;
          <div className='container-cursor'>;
            <div className='text-center mb-12'>;
              <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
                Code Quality Analysis Results;
              </h2>;
              <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
                    </p>;
                  </div>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Supported Languages Section */}
      <section className='section - padding bg - gradient - cursor'>;
        <div className='container - cursor'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
              Multi - Language Support;
            </h2>;
            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              We support a wide range of programming languages with;
              language - specific analysis rules and best practices.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
            {supported_languages.map ((language, index) => (
              <Card;
                key={index}
                className='card - hover border - gradient - teal';
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className='text - center mb - 4'>;
                  <div className='text - 4xl mb - 3'>{language.icon}</div>;
                  <h3 className='text - xl font - bold text - white mb - 3'>;
                    {language.name}
                  </h3>;
                </div>;
                <ul className='space - y-2'>;
                  {language.features.map ((feature, feature_index) => (
                    <li;
                      key={feature_index}
                      className='flex items - center text - gray - 300 text - sm';
                    >;
                      <CheckCircle className='w - 4 h - 4 text - teal - 400 mr - 3 flex - shrink - 0' />                      {feature}              Multi - Language Support;
            </h2>;
            <p className="text - responsive - md text - gray - 400 max - w-4xl mx-auto leading-relaxed">;
              We support a wide range of programming languages with language - specific analysis rules and best practices.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-3 gap-6">;
            {supported_languages.map ((language, index) => (
              <Card;
                key={index}
                className="card - hover border-gradient-teal";
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className="text-center mb-4">;
                  <div className="text-4xl mb-3">{language.icon}</div>;
                  <h3 className="text - xl font - bold text-white mb-3">{language.name}</h3>;
                </div>;
                <ul className="space-y-2">;
                  {language.features.map ((feature, feature_index) => (
                    <li key={feature_index} className="flex items - center text - gray-300 text-sm">;
                      <CheckCircle className="w - 4 h - 4 text - teal - 400 mr - 3 flex-shrink-0" />;
                      {feature}
                    </li>))}
                </ul>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Demo Analysis Results */}
      {analysis_results && (
        <section className='section - padding bg - gradient - cursor - accent'>;
          <div className='container - cursor'>;
            <div className='text - center mb - 12'>;
              <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
                Code Quality Analysis Results;
              </h2>;
              <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;


                Here's a sample code quality analysis. Get comprehensive;
                insights for your own code.;
              </p>;
            </div>;

                    />;
                  </svg>;
                </div>;
                <p className='text-gray-400'>;
                  Good code quality with room for improvement;
                </p>;
              </Card>;


              {/* Issues Found */}
              <Card className='border-gradient-teal'>;
                <h3 className='text-2xl font-bold mb-6 text-white'>;
                  Issues Found;
                </h3>;
                <div className='space-y-3'>;
                  {analysisResults && analysisResults.issues.map((issue, index) => (;
                    <div key={index} className='flex items-start space-x-3'>;
                      {issue && issue.type === 'error' ? (;
                        <AlertTriangle className='w-5 h-5 text-red-400 mt-1 flex-shrink-0' />;
                      ) : issue && issue.type === 'warning' ? (;
                        <AlertTriangle className='w-5 h-5 text-yellow-400 mt-1 flex-shrink-0' />;
                      ) : (;
                        <CheckCircle className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />;
                      )}

        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
                Code Quality Analysis Results

              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample code quality analysis. Get comprehensive insights for your own code.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                      <div>;
                        <span className='text-gray-300 text-sm'>;
                          {issue && issue.message}
                        </span>;
                        <div className='text-xs text-gray-500 mt-1'>                          Line {issue && issue.line} • Severity: {issue && issue.severity}                Code Quality Analysis Results;
              </h2>;
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
                Here's a sample code quality analysis. Get comprehensive insights for your own code.;
              </p>;
            </div>;

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">;



              {/* Issues Found */}
              <Card className='border-gradient-teal'    />;
                <h3 className='text-2xl font-bold mb-6 text-white'    />;
                  Issues Found;
                </h3>;
                <div className='space-y-3'    />;

                  {analysisResults && analysisResults.issues.map((issue, index) => (;}
                    <div key={index} className='flex items-start space-x-3'    />;
                      {issue && issue.type === 'error' ? (;
                        <AlertTriangle className='w-5 h-5 text-red-400 mt-1 flex-shrink-0'    />;
                      ) : issue && issue.type === 'warning' ? (;
                        <AlertTriangle className='w-5 h-5 text-yellow-400 mt-1 flex-shrink-0'    />;
                      ) : (;}
                        <CheckCircle className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0'    />;}
                      )}


                  ))}


              {/* Quality Metrics */}
              <Card className='border-gradient-teal'>
                <h3 className='text-2xl font-bold mb-6 text-white'>
                  Quality Metrics
                </h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-400'>Complexity</span>
                    <span className='text-orange-400 font-bold'>
                      {analysisResults.metrics.complexity}
                    </span>





              {/* Quality Metrics */}
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-400'>Maintainability</span>
                    <span className='text-green-400 font-bold'>
                      {analysisResults.metrics.maintainability}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-400'>Test Coverage</span>
                    <span className='text-blue-400 font-bold'>
                      {analysisResults.metrics.testCoverage}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-400'>Security Score</span>
                    <span className='text-green-400 font-bold'>
                      {analysisResults.metrics.securityScore}
                    </span>                  </div>                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Maintainability</span>
                    <span className="text-green-400 font-bold">{analysisResults.metrics.maintainability}</span>


                    {plan.name}
                  </h3>;
                  <div className='mb - 6'    />;
                    <span className='text - 4xl font - bold text - white'    />;

                      {plan.price}
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium'>                      Most Popular
                    </span>
                    <span className='text-gray-400'    />{plan.period}</span>
                  </div>
                  <p className='text-gray-400'    />{plan.description}</p>
                </div>
                <ul className='space-y-4 mb-8'    />
                  {plan.features.map((feature, featureIndex) => (}
                    <li;}
key={featureIndex}
                      className='flex items-center text-gray-300'
                        />
                      <CheckCircle className='w-5 h-5 text-teal-400 mr-3 flex-shrink-0'    />



                    <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}






                    </li>
                  ))}

                </ul>;


                <Button
                  href='/contact'
                  size='lg'

                  size="lg"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started

                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>

                </Button>



              </Card>
              </Card>
            ))}

          </div>;
        </div>;
      </section>;


      {/* CTA Section */}


      {/* CTA Section */}

              </Card>
            ))}
          </div>
        </div>
      </section>


              </Card>
                  className={`w-full ${plan && plan.popular ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}>;
                  Get Started;
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>                  href="/contact";
                  size="lg";
                  className={`w-full ${plan && plan.popular ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >;
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />;
              </Card>;
                    <li key={featureIndex} className=flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0 />
                      {feature}

                      {feature}

                      {feature}

                    </li>
                  ))}
                </ul>
                <Button

              </Card>
            ))}
      {/* CTA Section */}
      {/* CTA Section */}
      <section className='section-padding bg-gradient-to-r from-teal-600 to-cyan-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='container-cursor text-center relative z-10'>
          <h2 className='text-responsive-lg font-bold text-white mb-8 text-shadow-lg'>


            Ready to Improve Your Code Quality?


            Ready to Improve Your Code Quality?

            Ready to Improve Your Code Quality?
          </h2>
          <p className='text-responsive-md text-teal-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Join thousands of developers using our code quality checker to write
            better, safer, and more maintainable code.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-teal-600 hover:bg-gray-100 shadow-2xl'>;
              Start Free Trial;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-teal-600 hover:bg-gray-100 shadow-2xl'
            >
              Start Free Trial
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
      <section className='section-padding bg-gradient-to-r from-teal-600 to-cyan-700 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />;
        <div className='container-cursor text-center relative z-10'>;
          <h2 className='text-responsive-lg font-bold text-white mb-8 text-shadow-lg'>;
          </h2>;
          <p className='text-responsive-md text-teal-100 mb-12 max-w-4xl mx-auto leading-relaxed'>;'
            Join thousands of developers using our code quality checker to write;
            better, safer, and more maintainable code.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>;
            <Button
              href='/contact'
              size='lg'
            </Button>;
          </div>;
        </div>;
      </section>;
  );
}
    </>);
}
              className='border-white text-white hover:bg-white hover:text-teal-600 shadow-2xl'            >              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-teal-600 shadow-2xl"
              Schedule Demo
    </>);
);
  );
}

    <   />
  );
}
    </>);
}
