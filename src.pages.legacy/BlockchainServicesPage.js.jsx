import { Link } from 'react - router - dom';''';
import React from 'react';



import { Link } from "react-router-dom";
import { Link as LinkIcon, DollarSign as Coins, Shield, Zap, Database, Globe, TrendingUp, CheckCircle, ArrowRight, Lock, Network, Wallet, BarChart3 } from "lucide-react";

const blockchainBenefits = [;
    {};
},;
    {};
},;
    {};
},;
    {};
}];
const useCases = [];
  {}
';
    title: 'Supply Chain Management',';
    description:''";
      'Track products from origin to consumer with immutable records and real-time visibility',"";
    icon: <LinkIcon className="h-6 w-6" />},;
  {}
';
    title: 'Digital Identity',';
    description:''";
      'Self-sovereign identity solutions for secure, privacy-preserving authentication',"";
    icon: <Shield className="h-6 w-6" />},;
  {}
';
    title: 'Asset Tokenization',';
    description:''";
      'Convert real-world assets into digital tokens for fractional ownership and trading',"";
    icon: <Coins className="h-6 w-6" />},;
  {}
';
    title: 'Decentralized Finance',';
    description:''";
      'Build financial services without intermediaries using smart contracts and DeFi protocols',"";
    icon: <Wallet className="h-6 w-6" />}
];
export {};
  return null;
}
";
  return ("";
    <div className="min-h-screen bg-background">";
      {/* Hero Section */}"";
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">"";
        <div className="container mx-auto px-4 text-center">"";
          <div className="max-w-4xl mx-auto">"";
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">";
              Blockchain Solutions for the"";
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">;
                Digital Economy;
              </span>";
            </h1>"";
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Transform your business with cutting-edge blockchain technology.;
              From DeFi platforms to enterprise solutions, we deliver secure,;
              scalable, and innovative blockchain applications.";
            </p>"";
            <div className="flex flex-wrap justify-center gap-4">"";
              <Link to="/request-quote">";
                <div>Broken JSX</div>
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">;
                  Start Your Project;
                </Button>";
              </Link>"";
              <Link to="/contact">";
                <div>Broken JSX</div>
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">;
                  Schedule Consultation;
                </Button>;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;
";
      {/* Benefits Section */}"";
      <section className="py-16 bg-zion-blue">"";
        <div className="container mx-auto px-4">"";
          <div className="text-center mb-12">"";
            <h2 className="text-3xl font-bold text-white mb-4">;
              Why Choose Blockchain?";
            </h2>"";
            <p className="text-zion-slate-light text-lg">;
              Leverage the power of decentralized technology to create trust,;
              transparency, and efficiency;
            </p>";
          </div>"";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">";
            {};
              <div key={index} className="text-center p-6">"";
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan rounded-full mb-4">"";
                  <div className="text-white">{benefit.icon}</div>";
                </div>"";
                <h3 className="text-white text-xl font-semibold mb-2">;
                  {benefit.title}";
                </h3>"";
                <p className="text-zion-slate-light">{benefit.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
";
      {/* Use Cases Section */}"";
      <section className="py-16 bg-zion-blue-dark">"";
        <div className="container mx-auto px-4">"";
          <div className="text-center mb-12">"";
            <h2 className="text-3xl font-bold text-white mb-4">;
              Blockchain Use Cases";
            </h2>"";
            <p className="text-zion-slate-light text-lg">;
              Discover how blockchain technology can transform your industry;
            </p>";
          </div>"";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {};
                  <div className="text-white">{useCase.icon}</div>";
                </div>"";
                <h3 className="text-white text-xl font-semibold mb-2">;
                  {useCase.title}";
                </h3>"";
                <p className="text-zion-slate-light">{useCase.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
";
      {/* Blockchain Services Grid */}"";
      <section className="py-16">"";
        <div className="container mx-auto px-4">"";
          <div className="text-center mb-12">"";
            <h2 className="text-3xl font-bold mb-4">;
              Our Blockchain Service Portfolio";
            </h2>"";
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">;
              Choose from our comprehensive range of blockchain solutions;
              designed to address your specific business needs;
            </p>";
          </div>"";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {};
                      {service.category}
                    </Badge>;
                    {};
                        {service.badge}
                      </Badge>;
                    )}";
                  </div>"";
                  <div className="flex items-center gap-3 mb-3">"";
                    <div className="p-2 bg-zion-blue/10 rounded-lg">;
                      {service.icon}";
                    </div>"";
                    <CardTitle className="text-xl">{service.title}</CardTitle>";
                  </div>"";
                  <CardDescription className="text-base">;
                    {service.description}
                  </CardDescription>";
                </CardHeader>"";
                <CardContent className="pb-4">"";
                  <div className="mb-4">"";
                    <span className="text-3xl font-bold text-zion-purple">;
                      {service.currency}
                      {service.price}";
                    </span>"";
                    <span className="text-muted-foreground">;
                      {service.period}
                    </span>";
                  </div>"";
                  <ul className="space-y-2">;
                    {};
                        <span>{feature}</span>;
                      </li>;
                    ))}
                  </ul>";
                </CardContent>"";
                <CardContent className="pt-0">"";
                  <Button asChild className="w-full">;
                    <Link to={service.link}>";
                      Learn More"";
                      <ArrowRight className="h-4 w-4 ml-2" />;
                    </Link>;
                  </Button>;
                </CardContent>;
              </Card>;
            ))}
          </div>;
        </div>;
      </section>;
";
      {/* CTA Section */}"";
      <section className="py-16 bg-zion-blue">"";
        <div className="container mx-auto px-4 text-center">"";
          <div className="max-w-3xl mx-auto">"";
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready to Build the Future with Blockchain?";
            </h2>"";
            <p className="text-zion-slate-light text-lg mb-8">;
              Join the blockchain revolution and transform your business with;
              decentralized technology";
            </p>"";
            <div className="flex flex-wrap justify-center gap-4">"";
              <Link to="/request-quote">";
                <div>Broken JSX</div>
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">;
                  Get Blockchain Quote;
                </Button>";
              </Link>"";
              <Link to="/contact">";
                <div>Broken JSX</div>
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">;
                  Contact Blockchain Experts;
                </Button>;
              </Link>";
            </div>"";
            <div className="mt-8 text-zion-slate-light">;
              <p>;
                📞 <strong>Mobile:</strong> +1 302 464 0950;
              </p>;
              <p>;
                📧 <strong>Email:</strong> kleber@ziontechgroup.com;
              </p>;
              <p>;
                📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown;
                DE 19709;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;

      <TrustedBySection />;
    </div>)}


export { BlockchainServicesPage }
export { BlockchainServicesPage }
export { BlockchainServicesPage }
export { BlockchainServicesPage }
export { BlockchainServicesPage }