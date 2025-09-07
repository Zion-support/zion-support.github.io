

export default function CodeQualityCheckerPage() {
  }
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [codeInput, setCodeInput] = useState(');



  const supportedLanguages = [
    { name: 'JavaScript/TypeScript, icon: ⚡', features: ['ESLint rulesTypeScript checksReact best practices] },
    { name: Python', icon: '🐍, features: [PEP 8 complianceType hintsSecurity scanning'] },
    { name: 'Java, icon: ☕', features: ['PMD rulesCheckstyleSonarQube integration] },
    { name: C++', icon: '⚙️, features: [Clang-tidyStatic analysisMemory leak detection'] },
    { name: 'Go, icon: 🟢', features: ['Golangci-lintGo vetPerformance analysis] },
    { name: PHP', icon: '🐘, features: [PHPStanPHP CS FixerSecurity analysis'] }
  ];

  const pricing = [
    {
      name: 'Developer,
      price: $29',
      period: '/month,
      description: Perfect for individual developers and small projects',
      features: [
        '100 code analyses/monthBasic quality metrics5 programming languagesEmail supportBasic reportingCommunity rules
      ];
      popular: false
    }
    {

    {
      }
      "name": 'Enterprise','
      "price": '$199','
      "period": '/month','
      "description": 'For large organizations with complex codebases','


    }
  ];

const handleAnalyzeCode = async () => {
    }
    if (!codeInput.trim());
  return;

    setIsAnalyzing(true);
    // Simulate code analysis,
setTimeout(() => {
      }
      setAnalysisResults({

      setIsAnalyzing(false);
          securityScore: '92%
        }
        recommendations: [
          Use const for immutable variables to improve code clarityBreak down large functions into smaller, more focused functionsAdd proper error handling for better robustnessConsider adding JSDoc comments for better documentation'
        ]
      });
      setIsAnalyzing(false)
    }, 3000)
  }

return (;
    <>
      <Head>

              disabled={isAnalyzing || !codeInput.trim()}
            >
              {isAnalyzing ? (
                <>

            />;
            <Button;
              onClick={handleAnalyzeCode}
              size="lg;
              className=w-full mt-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-2xl hover-glow";


            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

                      {feature.description}
              className='border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl>              href="#pricing;
              variant=outline";
              size="lg;
              className=border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white shadow-2xl";
              View Pricing;
            </Button>;
            <Button
              Schedule Demo
              Our code quality checker provides comprehensive analysis and;
              improvement suggestions for better code.;
            </p>;
          </div>;
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>
              Our code quality checker provides comprehensive analysis and improvement suggestions for better code.
            </p>
          </div>
          <div className=grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
                      className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature && feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                    />;
                  </div>;
                  <div className=flex-1'>;
                    <h3 className='text-2xl font-bold mb-4 text-white>;
                      {feature && feature.title}
                    </h3>;
                    <p className=text-gray-400 leading-relaxed'>                      {feature && feature.description}              Powerful Analysis Features;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              Our code quality checker provides comprehensive analysis and improvement suggestions for better code.;
            </p>;
          </div>;
              <Card
                key={index}
                className=card-hover group border-gradient-teal"
                    </p>
                  </div>
                </div>
              </Card>
            ))}





      {/* Supported Languages Section *
}

<section className='section-padding bg-gradient-cursor'>'
        <div className='container-cursor'>'
          <div className='text-center mb-20'>'
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>'
              Multi-Language Support
            </h2>

            {supportedLanguages.map((language, index) => (
            </Button>;
          </div>;
<div className='flex flex-col sm:flex-row gap-6 justify-center>;
            <Button;
              href=#pricing';
              variant='outline;
              size=lg';
              className='border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white shadow-2xl>;
              View Pricing;
            </Button>;className=border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white shadow-2xl';
            >;
              View Pricing;
            </Button>;
            <Button;
href='/contact;
              variant=outline';
              size='lg;
              className=border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl'>              href="#pricing;
              variant=outline";
              size="lg;
              className=border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white shadow-2xl";
              View Pricing;
            </Button>;
            <Button;
              Schedule Demo;
              Our code quality checker provides comprehensive analysis and;
              improvement suggestions for better code.;
            </p>;
          </div>;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              Our code quality checker provides comprehensive analysis and improvement suggestions for better code.;
            </p>;
          </div>;
          <div className=grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {features.map((feature, index) => (className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature && feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                    />;
                  </div>;
                  <div className='flex-1>;
                    <h3 className=text-2xl font-bold mb-4 text-white'>;
                      {feature && feature.title}
                    </h3>;
                    <p className='text-gray-400 leading-relaxed>                      {feature && feature.description}              Powerful Analysis Features;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              Our code quality checker provides comprehensive analysis and improvement suggestions for better code.;
            </p>;
          </div>;
              <Card;
                key={index}
                className=card-hover group border-gradient-teal";
              className=border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl';
            >;
              Schedule Demo;
            </Button>;
          </div>;
        </div>;
      </section>;
      {/* Features Section */}

              Our code quality checker provides comprehensive analysis and;
              improvement suggestions for better code.;
            </p>;
          </div>;

            {features.map((feature, index) => (<Card;
                }
                key={index}

                    <div;
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-"hover": scale-110 transition-transform duration-300`}>`
                      {feature.ico
}
                    </div>;
                    <div;
                      className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-"hover": opacity-20 transition-opacity duration-300 blur-sm,`} />;
                  </div>;

                      {feature.description}</p>;
                  </div>;
                </div>;
              </Card>;

              We support a wide range of programming languages with;
              language-specific analysis rules and best practices.;
            </p>;
          </div>;

            {supportedLanguages && supportedLanguages.map((language, index) => ({feature.icon}
                    </div>;
                    <div className={`absolute -inset - 2 bg - gradient - to - r from - transparent via-${feature.gradient} to - transparent rounded - 2xl opacity - 0 group - "hover": opacity - 20 transition - opacity duration - 300 blur - sm,`} />;
                  </div>;

                      {feature.description}
            ))}
              <Card;
                key={index}


      {/* Supported Languages Section */}
      <section className=section-padding bg-gradient-cursor">
        <div className="container-cursor>
          <div className=text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow>
              Multi-Language Support
            </h2>
            <p className=text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We support a wide range of programming languages with language-specific analysis rules and best practices.
            </p>
          </div>
                      <CheckCircle className='w-4 h-4 text-teal-400 mr-3 flex-shrink-0 />                      {feature}              Multi-Language Support;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              We support a wide range of programming languages with language-specific analysis rules and best practices.;
            </p>;
          </div>;
              <Card;
                key={index}
                className=card-hover border-gradient-teal";
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className="text-center mb-4>;
                  <div className=text-4xl mb-3">{language && language.icon}</div>;
                  <h3 className="text-xl font-bold text-white mb-3>{language && language.name}</h3>;
                </div>;
                <ul className=space-y-2">;
                  {language && language.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-gray-300 text-sm>;
                      <CheckCircle className=w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />;className=flex items-center text-gray-300 text-sm';
                    >;
                      <CheckCircle className='w-4 h-4 text-teal-400 mr-3 flex-shrink-0 />;
                  {language && language.features.map((feature, featureIndex) => (;


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6>
            {supportedLanguages.map((language, index) => (
              <Card
                key={index}
                className=card-hover border-gradient-teal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4>
                  <div className=text-4xl mb-3">{language.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3>{language.name}</h3>
                </div>
                <ul className=space-y-2">
                  {language.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm>
                      <CheckCircle className=w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                      {feature}
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

              </p>
            </div>
            <div className='grid grid-cols-1 "lg": grid-cols-3 gap-8 mb-8'>'


                  Overall Quality Score;
                </h3>;
                <div className='text-6xl font-bold text-teal-400 mb-4'>;'
                  {analysisResults.qualityScore}/100;
                </div>;

                        </div>;
                      </div>;
                    </div>;
                  ))}
                </div>;
              </Card>;
                  {analysisResults && analysisResults.issues.map((issue, index) => (;
                    <div key={index} className=flex items-start space-x-3">;
                      {issue && issue.type === 'error ? (;
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0 />;
                      ) : issue && issue.type === warning' ? (;
                        <AlertTriangle className=w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />;
                      ) : (;
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 />;
                      )}




                </div>;
              </Card>;
              {/* Quality Metrics */}

                      {analysisResults.metrics.testCoverage}
                    </span>                  </div>                  </div>
            
            <div className=grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Quality Score */}
              <Card className="border-gradient-teal text-center>
                <h3 className=text-2xl font-bold mb-6 text-white">Overall Quality Score</h3>
                <div className="text-6xl font-bold text-teal-400 mb-4>{analysisResults.qualityScore}/100</div>
                <div className=w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90 viewBox=0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831
                      fill=none"
                      stroke="currentColor
                      strokeWidth=2"
                      strokeDasharray={`${(analysisResults.qualityScore / 100) * 100}, 100`}
                      className="text-teal-500
                    />
                  </svg>
                </div>
                <p className=text-gray-400">Good code quality with room for improvement</p>
              </Card>

              {/* Issues Found */}
              <Card className="border-gradient-teal>
                <h3 className=text-2xl font-bold mb-6 text-white">Issues Found</h3>
                <div className="space-y-3>
                  {analysisResults.issues.map((issue, index) => (
                    <div key={index} className=flex items-start space-x-3">
                      {issue.type === 'error ? (
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0 />
                      ) : issue.type === warning' ? (
                        <AlertTriangle className=w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 />
                      )}
                      <div>
                        <span className=text-gray-300 text-sm">{issue.message}</span>
                        <div className="text-xs text-gray-500 mt-1>
                          Line {issue.line} • Severity: {issue.severity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quality Metrics */}
              <Card className=border-gradient-teal">
                <h3 className="text-2xl font-bold mb-6 text-white>Quality Metrics</h3>
                <div className=space-y-4">
                  <div className="flex justify-between items-center>
                    <span className=text-gray-400">Complexity</span>
                    <span className="text-orange-400 font-bold>{analysisResults.metrics.complexity}</span>
                  </div>

                  </div>
                </div>
              </Card>
            </div>


                    <span className='text-gray-300'>{rec}</span>'
                  </div>
origin/cursor/automate-test-improve-and-merge-code-2533
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center>;
                    <span className=text-gray-400'>Security Score</span>;
                    <span className='text-green-400 font-bold>;
                      {analysisResults.metrics.securityScore}</span>                  </div>                  </div>;
              <Card className="border-gradient-teal>;
                <h3 className=text-2xl font-bold mb-6 text-white">Quality Metrics</h3>;
                <div className="space-y-4>;
                  <div className=flex justify-between items-center">;
                    <span className="text-gray-400>Complexity</span>;
                    <span className=text-orange-400 font-bold">{analysisResults.metrics.complexity}</span>;
                  </div>;
                  <div className="flex justify-between items-center>;
                    <span className=text-gray-400">Maintainability</span>;
                    <span className="text-green-400 font-bold>{analysisResults.metrics.maintainability}</span>;
                  </div>;
                  <div className=flex justify-between items-center">;
                    <span className="text-gray-400>Test Coverage</span>;
                    <span className=text-blue-400 font-bold">{analysisResults.metrics.testCoverage}</span>;
                  </div>;
                  <div className="flex justify-between items-center>;
                    <span className=text-gray-400">Security Score</span>;
                    <span className="text-green-400 font-bold>{analysisResults.metrics.securityScore}</span>;
                    </span>;
                  </div>;
                </div>;
              </Card>;
            </div>;
            <Card className=border-gradient-teal'>;
            {/* Recommendations */}
<Card className='border-gradient-teal>;
              <h3 className=text-2xl font-bold mb-6 text-white'>;
                Improvement Recommendations;
              </h3>;
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4>;
                {analysisResults.recommendations.map((rec, index) => (<div key={index} className=flex items-start space-x-3'>;
                    <CheckCircle className='w-5 h-5 text-teal-400 mt-1 flex-shrink-0 />;
                    <span className=text-gray-300'>{rec}</span>                  </div>;
                  </div>;
            <Card className='border-gradient-teal>;
              <h3 className=text-2xl font-bold mb-6 text-white'>;
                Improvement Recommendations;
              </h3>;
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4>;
                {analysisResults && analysisResults.recommendations.map((rec, index) => (<div key={index} className=flex items-start space-x-3'>;
                    <CheckCircle className='w-5 h-5 text-teal-400 mt-1 flex-shrink-0 />;
                    <span className=text-gray-300'>{rec}</span>                  </div>            <Card className=border-gradient-teal">;
              <h3 className="text-2xl font-bold mb-6 text-white>Improvement Recommendations</h3>;
              <div className=grid grid-cols-1 md:grid-cols-2 gap-4">;
                {analysisResults && analysisResults.recommendations.map((rec, index) => (<div key={index} className="flex items-start space-x-3>;
                    <CheckCircle className=w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />;
                    <span className="text-gray-300>{rec}</span>;
                    <span className=text-gray-300">{rec}</span>;<span className='text-gray-300>{rec}</span>;
                  </div>;
                ))}
              </div>;
            </Card>;
          </div>;
        </section>;
      )}


              Simple Pricing

            {/* Recommendations */}
            <Card className="border-gradient-teal>
              <h3 className=text-2xl font-bold mb-6 text-white">Improvement Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4>
                {analysisResults.recommendations.map((rec, index) => (
                  <div key={index} className=flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0 />
                    <span className=text-gray-300">{rec}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Pricing Section */}

                      Most Popular;
                    </span>;
                  </div>;
                )}

                </div>
                <ul className='space-y-4 mb-8'>'
                  {plan.features.map((feature, featureIndex) => (
                    <li
}
key={featureIndex}
                      className='flex items-center text-gray-300''
                    >
                      <CheckCircle className='w-5 h-5 text-teal-400 mr-3 flex-shrink-0' />'

                <ul className=space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                      {plan.price}</span>;
                    <span className=text-gray-400>{plan.period}</span>;
                  </div>;
                  <p className='text-gray-400'>{plan.description}</p>;
                </div>;
                <ul className=space-y-4 mb-8>;
                  {plan.features.map((feature, featureIndex) => (<li;
                      key={featureIndex}
                      className='flex items-center text-gray-300';
                    >;
                      <CheckCircle className=w-5 h-5 text-teal-400 mr-3 flex-shrink-0 />;
                      {feature}
                    </li>;
                  ))}

                <Button,
href='/contact''
                  size='lg''

                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-teal-500 to-cyan-600 "hover": from-teal-600 "hover":to-cyan-700' : 'bg-gray-700 "hover":bg-gray-600'} text-white`}`                >
                  Get Started
                  <ArrowRight className='w-5 h-5 ml-2' />'
                </Button>
              </Card>

          </div>;
        </div>;
      </section>;
              </Card>;
            ))}
          </div>;
        </div>;
      </section>;
              </Card>;

              </Card>;
                    <li key={featureIndex} className=flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0 />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href=/contact"
                  size="lg
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700' : bg-gray-700 hover:bg-gray-600} text-white`}
                >
                  Get Started
                  <ArrowRight className=w-5 h-5 ml-2" />
                </Button>
              </Card>
            ))}
      {/* CTA Section */}

            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
            <Button;
              href='/contact';
              size=lg;
            <Button;
              href='/contact';
              variant=outline;
              size='lg';
              Schedule Demo;
            </Button>;
          </div>;
        </div>;
      </section>;
  )}
    </>)}className='border-white text-white hover:bg-white hover:text-teal-600 shadow-2xl';
            >;
              Schedule Demo;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
              Schedule Demo;
            </Button>;
          </div>;
        </div>;
      </section>;
  );
}
    </>);
}
  )}
  )
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
