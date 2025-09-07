<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
=======

import React from 'react';
import Head from 'next / head';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {
  Cloud,
  Shield,
  Globe,
  Server,
  Database,
<<<<<<< HEAD
  ArrowRight,;
  Check,;
} from 'lucide-react';
import React from 'react',
import React from 'react';
import Head from 'next / head';
import {
  Cloud,
  Shield,
  Globe,
  Server,
  Database,
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
  ArrowRight,;
  Check,;
} from 'lucide-react';
import React from 'react',
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
  ArrowRight,
  Check,
import React from 'react',;

} from 'lucide-react';
export default /**
 * CloudPlatformPage - Function description
 */
function CloudPlatformPage() {
  const features = [;
    {

import React from 'react';
import Head from 'next/head';
import { Cloud, Shield, Globe, Server, Database, ArrowRight, Check } from 'lucide-react';

export default function CloudPlatformPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'Scalable Infrastructure',

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======


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
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx


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

      description: 'SOC 2 compliant with advanced threat protection'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],

  const benefits = [

<<<<<<< HEAD
    '99.99% uptime guaranteeGlobal edge locationsReal-time monitoringAutomated scalingPay-as-you-go pricing24/7 expert support'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    '99.99% uptime guaranteeGlobal edge locationsReal-time monitoringAutomated scalingPay-as-you-go pricing24/7 expert support'
  ];
  const benefits = [;
    '99 && 99.99% uptime guarantee',;
    'Global edge locations',;
    'Real-time monitoring',;
    'Automated scaling',;
    'Pay-as-you-go pricing',;
    '24/7 expert support',  ];

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
  const benefits = [
    '99.99% uptime guaranteeGlobal edge locationsReal-time monitoringAutomated scalingPay-as-you-go pricing24/7 expert support'
  ],
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
  return (

  const benefits = [
    '99.99% uptime guaranteeGlobal edge locationsReal-time monitoringAutomated scalingPay-as-you-go pricing24/7 expert support'
  ],
import React from 'react',;

import Head from 'next/head';
import { Cloud, Shield, Globe, Server, Database, ArrowRight, Check } from 'lucide-react';
export default function CloudPlatformPage() {
  const features = null;

  return (

=======
  return (

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <>
      <Head>
        <title>Cloud Platform - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee." />
<meta
          name='description'
          content='Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee.'
        />
origin/cursor/automate-test-improve-and-merge-code-2533
      </Head>
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
            <div className='mb-8'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>
                <Cloud className='w-4 h-4 mr-2' />
                Enterprise Cloud Infrastructure
              </div>
            </div>
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx

=======
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
      <div className="min-h-screen bg-black">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
=======

<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
              Cloud Platform
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Enterprise-grade cloud infrastructure with global reach, automated scaling, and 99.99% uptime guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">


<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
=======

<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <a href='/contact' className='shadow-2xl shadow-blue-500/25'>
                Deploy Now
                <ArrowRight className='w-5 h-5 ml-2' />
              </a>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
              <a
                href="/contact" className="shadow-2xl shadow-blue-500/25">
                Deploy Now
                <ArrowRight className="w-5 h-5 ml-2" />
<<<<<<< HEAD
        {/* Features Section */}
=======
<<<<<<< HEAD
              </a>
              <a
                href="/contact" className="border-white/20 hover:border-white/40">
                href='/contact'
                className='border-white/20 hover:border-white/40'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                View Documentation
              </a>
            </div>
          </div>
        </section>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
=======
<<<<<<< HEAD

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
=======
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
        {/* Features Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
=======


<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
                Cloud Infrastructure Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        {/* Features Section */}
<section className='py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
                Cloud Infrastructure Features
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
origin/cursor/automate-test-improve-and-merge-code-2533
                Built for scale, performance, and reliability
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
=======

<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
              {features.map((feature, index) => (
                <div
                  key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>

<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
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
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
</div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>;
        </section>;
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
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
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
        {/* Benefits Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<<<<<<< HEAD
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
=======

<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'
                >
                  <div className='w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center'>
                    {feature.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-400 leading-relaxed'>
                    {feature.description}
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
origin/cursor/automate-test-improve-and-merge-code-2533
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
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
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
                  ))}

=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  ))}

              
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
                  <div className="text-center">
                    <Cloud className="w-24 h-24 mx-auto mb-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
                      <span className='text-gray-300 text-lg'>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
<div className='relative'>
                <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20'>
                  <div className='text-center'>
                    <Cloud className='w-24 h-24 mx-auto mb-6 text-blue-400' />
                    <h3 className='text-2xl font-bold text-white mb-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
                      Global Infrastructure
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Deploy your applications across multiple regions for optimal performance
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      <Globe className="w-4 h-4 mr-2" />
                      15+ regions worldwide
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm'>
                      <Globe className='w-4 h-4 mr-2' />
                      15+ regions worldwide
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx

=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700'>
          <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx


        {/* CTA Section */}
<section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
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
                href='/contact'
                className='border-white text-white hover:bg-white hover:text-blue-600'
              >
                Contact Sales
              </a>
origin/cursor/automate-test-improve-and-merge-code-2533
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
</div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
              <a
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Deploy your applications on enterprise-grade cloud infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
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
=======

              <a
<<<<<<< HEAD
                href='/contact'
                className='bg-white text-blue-600 hover:bg-gray-100'>;
                Start Free Trial;
              </a>;
              <a


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </a>;
            </div>;
          </div>;
        </section>;
      </div>;
<<<<<<< HEAD
    </>);
;
    </>;
  );
=======

    </>);
;
<<<<<<< HEAD:pages.disabled/cloud-platform.tsx

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD:pages.disabled/cloud-platform.tsx
);
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/cloud-platform.tsx
