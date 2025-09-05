<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { Cloud, Shield, Globe, Server, Database, ArrowRight, Check } from 'lucide-react',


export default function CloudPlatformPage() {
  const features = [
    {
      icon: <Server className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling compute resources that grow with your needs'
    },
    {
      icon: <Database className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Managed Databases',
      description: 'Fully managed databases with automated backups and scaling'
    },
    {
      icon: <Globe className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Global CDN',
      description: 'Lightning-fast content delivery across the globe'
    },
    {
      icon: <Shield className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with advanced threat protection'
    }
  ],

  const benefits = [
    '99.99% uptime guaranteeGlobal edge locationsReal-time monitoringAutomated scalingPay-as-you-go pricing24/7 expert support'
  ],

  return (
    <>
      <Head>
        <title>Cloud Platform - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee.&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-black&quot;>
        {/* Hero Section */}
        <section className=&quot;pt-32 pb-20 relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0&quot;>
            <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
            <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]&quot; />
          </div>
          
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
            <div className=&quot;mb-8&quot;>
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6&quot;>
                <Cloud className=&quot;w-4 h-4 mr-2&quot; />
                Enterprise Cloud Infrastructure
              </div>
            </div>
            
            <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>
              Cloud Platform
            </h1>
            <p className=&quot;text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed&quot;>
              Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee.
            </p>

            <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
              <a
                href=&quot;/contact&quot; className=&quot;shadow-2xl shadow-blue-500/25&quot;>
                Deploy Now
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
              <a
                href=&quot;/contact&quot; className=&quot;border-white/20 hover:border-white/40&quot;>
                View Documentation
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-24&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-20&quot;>
              <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
                Cloud Infrastructure Features
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Built for scale, performance, and reliability
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {features.map((feature, index) => (
                <div
                  key={index} className=&quot;p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300&quot;>
                  <div className=&quot;w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center&quot;>
                    {feature.icon}
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>
                    {feature.title}
                  </h3>
                  <p className=&quot;text-gray-400 leading-relaxed&quot;>
=======
import React from 'react',;
import Head from 'next/head',;
import { Cloud, Shield, Globe, Server, Database, ArrowRight, Check } from 'lucide-react',;
export default function CloudPlatformPage() {;
  const features = [;
    {;
      icon: <Server className="w-8 h-8 text-white" />,;
      title: 'Scalable Infrastructure',;
      description: 'Auto-scaling compute resources that grow with your needs';
    },;
    {;
      icon: <Database className="w-8 h-8 text-white" />,;
      title: 'Managed Databases',;
      description: 'Fully managed databases with automated backups and scaling';
    },;
    {;
      icon: <Globe className="w-8 h-8 text-white" />,;
      title: 'Global CDN',;
      description: 'Lightning-fast content delivery across the globe';
    },;
    {;
      icon: <Shield className="w-8 h-8 text-white" />,;
      title: 'Enterprise Security',;
      description: 'SOC 2 compliant with advanced threat protection';
    }
  ];
  const benefits = [;
    '99.99% uptime guaranteeGlobal edge locationsReal-time monitoringAutomated scalingPay-as-you-go pricing24/7 expert support';
  ];
  return (;
    <>;
      <Head>;
        <title>Cloud Platform - Zion Tech Group</title>;
        <meta name="description" content="Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee." />;
      </Head>;
      <div className="min-h-screen bg-black">;
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">;
          <div className="absolute inset-0">;
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />;
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />;
          </div>;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">;
            <div className="mb-8">;
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">;
                <Cloud className="w-4 h-4 mr-2" />;
                Enterprise Cloud Infrastructure;
              </div>;
            </div>;
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">;
              Cloud Platform;
            </h1>;
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">;
              Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-6 justify-center">;
              <a;
                href="/contact" className="shadow-2xl shadow-blue-500/25">;
                Deploy Now;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </a>;
              <a;
                href="/contact" className="border-white/20 hover:border-white/40">;
                View Documentation;
              </a>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-24">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-20">;
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;
                Cloud Infrastructure Features;
              </h2>;
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Built for scale, performance, and reliability;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {features.map((feature, index) => (;
                <div;
                  key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">;
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">;
                    {feature.icon}
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-4">;
                    {feature.title}
                  </h3>;
                  <p className="text-gray-400 leading-relaxed">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    {feature.description}
                  </p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Benefits Section */}
<<<<<<< HEAD
        <section className=&quot;py-24 bg-gray-900&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center&quot;>
              <div>
                <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-8&quot;>
                  Why Choose Our Cloud Platform?
                </h2>
                <div className=&quot;space-y-6&quot;>
                  {benefits.map((benefit, index) => (
                    <div key={index} className=&quot;flex items-start&quot;>
                      <div className=&quot;w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1&quot;>
                        <Check className=&quot;w-4 h-4 text-blue-500&quot; />
                      </div>
                      <span className=&quot;text-gray-300 text-lg&quot;>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className=&quot;relative&quot;>
                <div className=&quot;bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20&quot;>
                  <div className=&quot;text-center&quot;>
                    <Cloud className=&quot;w-24 h-24 mx-auto mb-6 text-blue-400&quot; />
                    <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
                      Global Infrastructure
                    </h3>
                    <p className=&quot;text-gray-300 mb-6&quot;>
                      Deploy your applications across multiple regions for optimal performance
                    </p>
                    <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm&quot;>
                      <Globe className=&quot;w-4 h-4 mr-2&quot; />
                      15+ regions worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
=======
        <section className=&quot;py-24 bg-gradient-to-r from-blue-600 to-blue-700&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              Ready to Scale Your Infrastructure?
            </h2>
            <p className=&quot;text-xl text-blue-100 mb-8&quot;>
              Deploy your applications on enterprise-grade cloud infrastructure
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;/contact&quot; className=&quot;bg-white text-blue-600 hover:bg-gray-100&quot;>
                Start Free Trial
              </Link>
              <a
                href=&quot;/contact&quot; className=&quot;border-white text-white hover:bg-white hover:text-blue-600&quot;>
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
=======
        <section className="py-24 bg-gray-900">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
              <div>;
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">;
                  Why Choose Our Cloud Platform?;
                </h2>;
                <div className="space-y-6">;
                  {benefits.map((benefit, index) => (;
                    <div key={index} className="flex items-start">;
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">;
                        <Check className="w-4 h-4 text-blue-500" />;
                      </div>;
                      <span className="text-gray-300 text-lg">{benefit}</span>;
                    </div>;
                  ))}
                </div>;
              </div>;
              <div className="relative">;
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">;
                  <div className="text-center">;
                    <Cloud className="w-24 h-24 mx-auto mb-6 text-blue-400" />;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      Global Infrastructure;
                    </h3>;
                    <p className="text-gray-300 mb-6">;
                      Deploy your applications across multiple regions for optimal performance;
                    </p>;
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">;
                      <Globe className="w-4 h-4 mr-2" />;
                      15+ regions worldwide;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">;
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;
              Ready to Scale Your Infrastructure?;
            </h2>;
            <p className="text-xl text-blue-100 mb-8">;
              Deploy your applications on enterprise-grade cloud infrastructure;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">;
                Start Free Trial;
              </a>;
              <a;
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">;
                Contact Sales;
              </a>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}