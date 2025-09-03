import React from 'react';
import {};
} from 'lucide-react';
;
export default function ResourcesPage() {};
  return null;
}
},;
    {};
},;
    {};
}
  ];

  const caseStudies = [;
    {};
},;
    {};
},;
    {};
}
  ];

  const guides = [;
    {};
},;
    {};
},;
    {};
}
  ];

  const webinars = [;
    {};
},;
    {};
}
  ];

  return (;
    <div className="min-h-screen bg-zion-slate-dark text-white">;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center">;
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">;
              <BookOpen className="w-4 h-4 mr-2" />;
              Knowledge Hub;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Resources & Insights;
            </h1>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
              Access our comprehensive collection of whitepapers, case studies, guides, and webinars to stay ahead of technology trends and drive business innovation.;
            </p>;
          </div>;
        </div>;
      </section>;

      {/* Whitepapers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Featured Whitepapers;
            </h2>;
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">;
              In-depth research and insights on the latest technology trends and business strategies.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="flex items-center justify-between mb-4">;
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                    {paper.category}
                  </span>;
                  <div className="flex items-center text-zion-slate-light text-sm">;
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />;
                    {paper.rating}
                  </div>;
                </div>;

                <h3 className="text-xl font-semibold text-white mb-3">{paper.title}</h3>;
                <p className="text-zion-slate-light text-sm mb-4">{paper.description}</p>;

                <div className="flex items-center justify-between text-xs text-zion-slate-light mb-4">;
                  <span>📥 {paper.downloadCount} downloads</span>;
                  <span>📁 {paper.fileSize}</span>;
                </div>;
                ;
                <div>Broken JSX</div>
                   className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-3 rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 flex items-center justify-center">;
                  <Download className="w-4 h-4 mr-2" />;
                  Download Whitepaper;
                </a>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Success Stories;
            </h2>;
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">;
              Real-world examples of how our solutions have transformed businesses across industries.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="mb-4">;
                  <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">;
                    {study.industry}
                  </span>;
                </div>;

                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>;
                <p className="text-zion-cyan font-medium mb-3">{study.company}</p>;

                <div className="mb-4">;
                  <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>;
                  <ul className="space-y-1">;
                    {};
                      <li key={resultIndex} className="text-zion-slate-light text-sm flex items-center">;
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />;
                        {result}
                      </li>;
                    ))}
                  </ul>;
                </div>;

                <div className="flex items-center justify-between">;
                  <span className="text-xs text-zion-slate-light">{study.readTime}</span>;
                  <a href={study.url} className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium flex items-center">;
                    Read Case Study;
                    <ArrowRight className="w-3 h-3 ml-1" />;
                  </a>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Guides Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Practical Guides;
            </h2>;
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">;
              Step-by-step guides and best practices to help you implement technology solutions effectively.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="flex items-center justify-between mb-4">;
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                    {guide.category}
                  </span>;
                  <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">;
                    {guide.level}
                  </span>;
                </div>;

                <h3 className="text-xl font-semibold text-white mb-3">{guide.title}</h3>;
                <p className="text-zion-slate-light text-sm mb-4">{guide.description}</p>;

                <div className="flex items-center justify-between text-xs text-zion-slate-light mb-4">;
                  <span className="flex items-center">;
                    <Clock className="w-3 h-3 mr-1" />;
                    {guide.estimatedTime}
                  </span>;
                </div>;

                <a href={guide.url} className="w-full border border-zion-cyan text-zion-cyan text-center py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center">;
                  <BookOpen className="w-4 h-4 mr-2" />;
                  Read Guide;
                </a>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Webinars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Upcoming Webinars;
            </h2>;
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">;
              Join our live sessions with industry experts and gain valuable insights on technology trends and best practices.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">;
            {};
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30">;
                <div className="flex items-center justify-between mb-4">;
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                    Live Event;
                  </span>;
                  <span className="text-zion-slate-light text-sm">{webinar.date}</span>;
                </div>;

                <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>;
                <p className="text-zion-slate-light text-sm mb-4">{webinar.description}</p>;

                <div className="mb-4">;
                  <p className="text-zion-cyan text-sm font-medium mb-1">Speaker: {webinar.speaker}</p>;
                  <p className="text-zion-slate-light text-sm flex items-center">;
                    <Calendar className="w-3 h-3 mr-1" />;
                    {webinar.date} at {webinar.time}
                  </p>;
                </div>;

                <a href={webinar.registrationUrl} className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-3 rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 flex items-center justify-center">;
                  <Video className="w-4 h-4 mr-2" />;
                  Register Now;
                </a>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20">;
        <div className="container mx-auto max-w-4xl text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Stay Updated;
          </h2>;
          <p className="text-lg text-zion-slate-light mb-8">;
            Subscribe to our newsletter to receive the latest insights, whitepapers, and event notifications directly in your inbox.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">;
            <div>Broken JSX</div>
            />;
            <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300">;
              Subscribe;
            </button>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}
