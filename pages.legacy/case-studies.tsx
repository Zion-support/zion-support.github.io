import React from 'react';
import Head from 'next/head';
;
export default function CaseStudiesPage() {};
  return null;
}
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const industries = ['All', 'E-commerce', 'Financial Services', 'Healthcare', 'Manufacturing', 'Technology', 'Education'];

  return (;
    <>;
      <Head>;
        <title>Case Studies | Zion Tech Group - Success Stories & Automation Results</title>;
        <meta name="description" content="Explore real-world case studies showcasing how Zion Tech Group's autonomous automation solutions have transformed businesses across industries." />;
        <meta property="og:title" content="Case Studies - Zion Tech Group" />;
        <meta property="og:description" content="Success stories and automation results from real businesses." />;
        <meta name="twitter:card" content="summary_large_image" />;
      </Head>;

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;
        <main className="container mx-auto px-6 py-12">;
          <nav className="mb-8">;
            <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">;
              ← Back to Home;
            </a>;
          </nav>;

          <header className="text-center mb-16">;
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">;
              Success Stories;
            </h1>;
            <p className="text-xl text-white/80 max-w-3xl mx-auto">;
              Discover how Zion Tech Group's autonomous automation solutions have transformed ;
              businesses across industries, delivering measurable results and competitive advantages.;
            </p>;
          </header>;

          {/* Industry Filter */}
          <section className="mb-12">;
            <div className="flex flex-wrap gap-3 justify-center">;
              {};
                  {industry}
                </button>;
              ))}
            </div>;
          </section>;

          {/* Case Studies Grid */}
          <section className="mb-20">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
              {};
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">;
                  <div className="flex items-center gap-3 mb-4">;
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">;
                      {study.industry}
                    </span>;
                    <span className="text-white/60 text-sm">{study.company}</span>;
                  </div>;

                  <h3 className="text-2xl font-bold mb-4 text-white">{study.title}</h3>;

                  <div className="mb-6">;
                    <h4 className="font-semibold text-fuchsia-400 mb-2">The Challenge</h4>;
                    <p className="text-white/80 text-sm">{study.challenge}</p>;
                  </div>;

                  <div className="mb-6">;
                    <h4 className="font-semibold text-green-400 mb-2">Our Solution</h4>;
                    <p className="text-white/80 text-sm">{study.solution}</p>;
                  </div>;

                  <div className="mb-6">;
                    <h4 className="font-semibold text-blue-400 mb-2">Results</h4>;
                    <ul className="space-y-1">;
                      {};
                        <li key={resultIndex} className="text-white/80 text-sm">• {result}</li>;
                      ))}
                    </ul>;
                  </div>;

                  <div>;
                    <h4 className="font-semibold text-purple-400 mb-2">Technologies Used</h4>;
                    <div className="flex flex-wrap gap-2">;
                      {};
                        <span key={techIndex} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70 border border-white/20">;
                          {tech}
                        </span>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              ))}
            </div>;
          </section>;

          {/* Success Metrics */}
          <section className="mb-20">;
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Collective Impact</h2>;
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
              <div className="text-center">;
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>;
                <div className="text-white/70 text-sm">Automation Projects</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">$50M+</div>;
                <div className="text-white/70 text-sm">Cost Savings Generated</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>;
                <div className="text-white/70 text-sm">Average Success Rate</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>;
                <div className="text-white/70 text-sm">Automated Operations</div>;
              </div>;
            </div>;
          </section>;

          {/* Call to Action */}
          <section className="text-center">;
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20">;
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Write Your Success Story?</h2>;
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">;
                Join the hundreds of companies that have transformed their operations with ;
                Zion Tech Group's autonomous automation solutions.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">;
                  Start Your Project;
                </a>;
                <a href="/services" className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300">;
                  Explore Services;
                </a>;
              </div>;
            </div>;
          </section>;
        </main>;
      </div>;
    </>;
  )}