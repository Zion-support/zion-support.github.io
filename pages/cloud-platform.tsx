<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import Head from 'next / head';
=======
import React from 'react';
import Head from 'next/head';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import React from 'react';
import Head from 'next / head';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {
  Cloud,
  Shield,
  Globe,
  Server,
  Database,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ArrowRight,;
  Check,;
} from 'lucide-react';
import React from 'react',
<<<<<<< HEAD
import React from 'react';
import Head from 'next / head';
import {
  Cloud,
  Shield,
  Globe,
  Server,
  Database,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  ArrowRight,
  Check,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

} from 'lucide-react';
export default /**
 * CloudPlatformPage - Function description
 */
function CloudPlatformPage() {
  const features = [;
    {
<<<<<<< HEAD

import React from 'react';
import Head from 'next/head';
import { Cloud, Shield, Globe, Server, Database, ArrowRight, Check } from 'lucide-react';


export default function CloudPlatformPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'Scalable Infrastructure',

<<<<<<< HEAD
=======
import Head from 'next/head';

import {
  Cloud
  Shield
  Globe
  Server
  Database
  ArrowRight
  Check;
} from 'lucide-react';
export default function CloudPlatformPage() {
  const features = [
    {
      icon: <Server className='w-8 h-8 text-white' />
      title: 'Scalable Infrastructure'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      description: 'Auto-scaling compute resources that grow with your needs'
    }
    {
      icon: <Database className='w-8 h-8 text-white' />
      title: 'Managed Databases'
      description: 'Fully managed databases with automated backups and scaling'
    }
    {
      icon: <Globe className='w-8 h-8 text-white' />
      title: 'Global CDN'
      description: 'Lightning-fast content delivery across the globe'
    }
    {
      icon: <Shield className='w-8 h-8 text-white' />
      title: 'Enterprise Security'
      description: 'SOC 2 compliant with advanced threat protection'
    }
  ];
  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


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
import React from 'react';
import Head from 'next/head';
import {;
  Cloud,;
  Shield,;
  Globe,;
  Server,;
  Database,;
  ArrowRight,;
  Check,;
} from 'lucide-react';
export default function CloudPlatformPage() {;
  const features = [;
    {;
      icon: <Server className='w-8 h-8 text-white' />,;
      title: 'Scalable Infrastructure',;
      description: 'Auto-scaling compute resources that grow with your needs',;
    },;
    {;
      icon: <Database className='w-8 h-8 text-white' />,;
      title: 'Managed Databases',;
      description: 'Fully managed databases with automated backups and scaling',;
    },;
    {;
      icon: <Globe className='w-8 h-8 text-white' />,;
      title: 'Global CDN',;
      description: 'Lightning-fast content delivery across the globe',;
    },;
    {;
      icon: <Shield className='w-8 h-8 text-white' />,;
      title: 'Enterprise Security',;
      description: 'SOC 2 compliant with advanced threat protection',;
    },;
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export default function CloudPlatformPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling compute resources that grow with your needs'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Managed Databases',
      description: 'Fully managed databases with automated backups and scaling'
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'Global CDN',
      description: 'Lightning-fast content delivery across the globe'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Enterprise Security',
<<<<<<< HEAD

      description: 'SOC 2 compliant with advanced threat protection'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],

  const benefits = [

<<<<<<< HEAD
=======
    '99.99% uptime guaranteeGlobal edge locationsReal-time monitoringAutomated scalingPay-as-you-go pricing24/7 expert support'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    '99.99% uptime guaranteeGlobal edge locationsReal-time monitoringAutomated scalingPay-as-you-go pricing24/7 expert support'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  ];

  const benefits = [;
    '99 && 99.99% uptime guarantee',;
    'Global edge locations',;
    'Real-time monitoring',;
    'Automated scaling',;
    'Pay-as-you-go pricing',;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    '24/7 expert support',  ];

<<<<<<< HEAD
  return (

=======

=======
export default function CloudPlatformPage() {_const _features = [
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
    '99.99% uptime guarantee'
    'Global edge locations'
    'Real-time monitoring'
    'Automated scaling'
    'Pay-as-you-go pricing'
    '24/7 expert support',  ];

import Head from 'next/head',
import { Cloud, Shield, Globe, Server, Database, ArrowRight, Check } from 'lucide-react',
export default function CloudPlatformPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling compute resources that grow with your needs'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Managed Databases',
      description: 'Fully managed databases with automated backups and scaling'
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'Global CDN',
      description: 'Lightning-fast content delivery across the globe'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with advanced threat protection',
    },;
  ];

      description: 'SOC 2 compliant with advanced threat protection'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const benefits = [
    '99.99% uptime guaranteeGlobal edge locationsReal-time monitoringAutomated scalingPay-as-you-go pricing24/7 expert support'
  ],
  return (

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <>
      <Head>
        <title>Cloud Platform - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee." />
      </Head>
<<<<<<< HEAD
<<<<<<< HEAD

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
=======
    <>
      <Head>
        <title>Cloud Platform - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee." />
      </Head>
      <div className='min-h-screen bg-black'>
        {/* Hero Section */}
        <section className='pt-32 pb-20 relative overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]' />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
            <div className='mb-8'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>
                <Cloud className='w-4 h-4 mr-2' />
                Enterprise Cloud Infrastructure
              </div>
            </div>
<<<<<<< HEAD
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>
      <div className="min-h-screen bg-black">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Enterprise Cloud Infrastructure
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Cloud Platform
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div className="flex flex-col sm:flex-row gap-6 justify-center">



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <a href='/contact' className='shadow-2xl shadow-blue-500/25'>
                Deploy Now
                <ArrowRight className='w-5 h-5 ml-2' />
              </a>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <a
                href="/contact" className="shadow-2xl shadow-blue-500/25">
                Deploy Now
                <ArrowRight className="w-5 h-5 ml-2" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </a>
              <a
                href="/contact" className="border-white/20 hover:border-white/40">
                View Documentation
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              </a>
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
        {/* Features Section */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          content='Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99 && 99.99% uptime guarantee.'
        />;
      </Head>;

      <div className='min-h-screen bg-black'>;
        {/* Hero Section */}
        <section className='pt-32 pb-20 relative overflow-hidden'>;
          <div className='absolute inset-0'>;
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0 && 0.08),transparent_50%)]' />;
          </div>;

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>;
            <div className='mb-8'>;
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>;
                <Cloud className='w-4 h-4 mr-2' />;
                Enterprise Cloud Infrastructure;
              </div>;
            </div>;

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>;
              Cloud Platform;
            </h1>;
            <p className='text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed'>;
              Enterprise-grade cloud infrastructure with global reach, automated;
              scaling, and 99 && 99.99% uptime guarantee.;
            </p>;

            <div className='flex flex-col sm:flex-row gap-6 justify-center'>;
              <a href='/contact' className='shadow-2xl shadow-blue-500/25'>;
                Deploy Now;
                <ArrowRight className='w-5 h-5 ml-2' />;
              </a>;
              <a
                href='/contact'
                className='border-white/20 hover:border-white/40'>                View Documentation;
              </a>;
            </div>;
          </div>;
        </section>;

        {/* Features Section */}
        <section className='py-24'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-20'>;
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
                Cloud Infrastructure Features;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>                Built for scale, performance, and reliability;
              </p>;
            </div>;

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>;
              {features && features.map((feature, index) => (;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <div
                  key={index}
                  className='p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'>;
                  <div className='w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center'>;
                    {feature && feature.icon}
                  </div>;
                  <h3 className='text-xl font-bold text-white mb-4'>;
                    {feature && feature.title}
                  </h3>;
                  <p className='text-gray-400 leading-relaxed'>                    {feature && feature.description}
                  </p>;
                </div>;

<<<<<<< HEAD
=======
=======

=======

              </Link>
              <a
                href="/contact" className="border-white/20 hover:border-white/40">
                View Documentation
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className='py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* Features Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                Cloud Infrastructure Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built for scale, performance, and reliability
              </p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              {features.map((feature, index) => (
                <div
                  key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
<<<<<<< HEAD
<<<<<<< HEAD
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </p>;
                </div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
</div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </div>;
        </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
          </div>;
        </section>;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Benefits Section */}
        <section className='py-24 bg-gray-900'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>;
              <div>;
                <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>;
                  Why Choose Our Cloud Platform?;
                </h2>;
                <div className='space-y-6'>;
                  {benefits && benefits.map((benefit, index) => (;
                    <div key={index} className='flex items-start'>;
                      <div className='w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1'>;
                        <Check className='w-4 h-4 text-blue-500' />;
                      </div>;
                      <span className='text-gray-300 text-lg'>{benefit}</span>                    </div>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

        {/* Benefits Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                    {feature.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className='text-gray-400 leading-relaxed'>                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className='py-24 bg-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </p>;
                </div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Benefits Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                  Why Choose Our Cloud Platform?
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                        <Check className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  ))}

              
=======


=======
                  ))}
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
              </div>
                  ))}

              


              <div className='relative'>
                <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20'>
                  <div className='text-center'>
                    <Cloud className='w-24 h-24 mx-auto mb-6 text-blue-400' />
                    <h3 className='text-2xl font-bold text-white mb-4'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
                  <div className="text-center">
                    <Cloud className="w-24 h-24 mx-auto mb-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      Global Infrastructure
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Deploy your applications across multiple regions for optimal performance
                    </p>
<<<<<<< HEAD
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      <Globe className="w-4 h-4 mr-2" />
                      15+ regions worldwide
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700'>
          <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Deploy your applications on enterprise-grade cloud infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Link>
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>


}

  )
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
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
</div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </div>;

              <div className='relative'>;
                <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20'>;
                  <div className='text-center'>;
                    <Cloud className='w-24 h-24 mx-auto mb-6 text-blue-400' />;
                    <h3 className='text-2xl font-bold text-white mb-4'>;
                      Global Infrastructure;
                    </h3>;
                    <p className='text-gray-300 mb-6'>;
                      Deploy your applications across multiple regions for;
                      optimal performance;
                    </p>;
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm'>;
                      <Globe className='w-4 h-4 mr-2' />                      15+ regions worldwide;
=======
      icon: <Server className='w - 8 h - 8 text - white' />,
      title: 'Scalable Infrastructure',
      description: 'Auto - scaling compute resources that grow with your needs',
    },
    {
      icon: <Database className='w - 8 h - 8 text - white' />,
      title: 'Managed Databases',
      description: 'Fully managed databases with automated backups and scaling',
    },
    {
      icon: <Globe className='w - 8 h - 8 text - white' />,
      title: 'Global CDN',
      description: 'Lightning - fast content delivery across the globe',
    },
    {
      icon: <Shield className='w - 8 h - 8 text - white' />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with advanced threat protection',
    },
  ];
;
  const benefits = [;
    '99.99% uptime guarantee',
    'Global edge locations',
    'Real - time monitoring',
    'Automated scaling',
    'Pay - as - you - go pricing',
    '24 / 7 expert support',  ];
;
  return (
    <>;
      <Head>;
        <title > Cloud Platform - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Enterprise - grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee.';
        />;
      </Head>;
      <div className='min - h-screen bg - black'>;
        {/* Hero Section */}
        <section className='pt - 32 pb - 20 relative overflow - hidden'>;
          <div className='absolute inset - 0'>;
            <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (59, 130, 246, 0.1), transparent_50%)]' />;
            <div className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (59, 130, 246, 0.08), transparent_50%)]' />;
          </div>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center relative z - 10'>;
            <div className='mb - 8'>;
              <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - blue - 500 / 10 border border - blue - 500 / 20 text - blue - 400 text - sm font - medium mb - 6'>;
                <Cloud className='w - 4 h - 4 mr - 2' />;
                Enterprise Cloud Infrastructure;
              </div>;
            </div>;
            <h1 className='text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight'>;
              Cloud Platform;
            </h1>;
            <p className='text - xl sm:text - 2xl text - gray - 300 max - w-4xl mx - auto mb - 12 leading - relaxed'>;
              Enterprise - grade cloud infrastructure with global reach, automated;
              scaling, and 99.99% uptime guarantee.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 6 justify - center'>;
              <a href='/contact' className='shadow - 2xl shadow - blue - 500 / 25'>;
                Deploy Now;
                <ArrowRight className='w - 5 h - 5 ml - 2' />;
              </a>;
              <a;
                href='/contact';
                className='border - white / 20 hover:border - white / 40';
              >                View Documentation;
              </a>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className='py - 24'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
                Cloud Infrastructure Features;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>                Built for scale, performance, and reliability;
              </p>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
              {features.map ((feature, index) => (
                <div;
                  key={index}
                  className='p - 8 bg - gray - 900 / 50 rounded - 2xl border border - gray - 800 hover:border - blue - 500 / 30 hover:bg - gray - 900 / 80 transition - all duration - 300';
                >;
                  <div className='w - 16 h - 16 mb - 6 rounded - 2xl bg - gradient - to - br from - blue - 500 to - blue - 600 flex items - center justify - center'>;
                    {feature.icon}
                  </div>;
                  <h3 className='text - xl font - bold text - white mb - 4'>;
                    {feature.title}
                  </h3>;
                  <p className='text - gray - 400 leading - relaxed'>                    {feature.description}
                  </p>;
                </div>))}
            </div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className='py - 24 bg - gray - 900'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 16 items - center'>;
              <div>;
                <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
                  Why Choose Our Cloud Platform?;
                </h2>;
                <div className='space - y-6'>;
                  {benefits.map ((benefit, index) => (
                    <div key={index} className='flex items - start'>;
                      <div className='w - 6 h - 6 rounded - full bg - blue - 500 / 20 flex items - center justify - center mr - 4 mt - 1'>;
                        <Check className='w - 4 h - 4 text - blue - 500' />;
                      </div>;
                      <span className='text - gray - 300 text - lg'>{benefit}</span>                    </div>))}
                </div>;
              </div>;
              <div className='relative'>;
                <div className='bg - gradient - to - br from - blue - 500 / 10 to - purple - 500 / 10 rounded - 3xl p - 8 border border - blue - 500 / 20'>;
                  <div className='text - center'>;
                    <Cloud className='w - 24 h - 24 mx - auto mb - 6 text - blue - 400' />;
                    <h3 className='text - 2xl font - bold text - white mb - 4'>;
                      Global Infrastructure;
                    </h3>;
                    <p className='text - gray - 300 mb - 6'>;
                      Deploy your applications across multiple regions for;
                      optimal performance;
                    </p>;
                    <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - blue - 500 / 20 text - blue - 400 text - sm'>;
                      <Globe className='w - 4 h - 4 mr - 2' />                      15+ regions worldwide;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
=======
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Deploy your applications on enterprise-grade cloud infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <a
                href='/contact'
                className='bg-white text-blue-600 hover:bg-gray-100'>;
                Start Free Trial;
              </a>;
              <a


<<<<<<< HEAD
=======
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Sales
              </a>
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Link>
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
);

}
  )
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
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </a>;
            </div>;
          </div>;
        </section>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD


=======
    </>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
    </>);
;
    </>;
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
