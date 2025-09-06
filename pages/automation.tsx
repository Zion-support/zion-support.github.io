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
  RefreshCw,
  Zap,
  Bot,
  Workflow,
  ArrowRight,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  Check,;
  BarChart3,;
} from 'lucide-react';
import React from 'react',
<<<<<<< HEAD
import React from 'react';
import Head from 'next / head';
import {
  RefreshCw,
  Zap,
  Bot,
  Workflow,
  ArrowRight,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  Check,
  BarChart3,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

} from 'lucide-react';
export default /**
 * AutomationPage - Function description
 */
function AutomationPage() {
  const features = [;
    {
<<<<<<< HEAD

import React from 'react';
import Head from 'next/head';
import { RefreshCw, Zap, Bot, Workflow, ArrowRight, Check, BarChart3 } from 'lucide-react';


export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className="w-8 h-8 text-white" />,
      title: 'Workflow Automation',

<<<<<<< HEAD
=======
import Head from 'next/head';

import {
  RefreshCw
  Zap
  Bot
  Workflow
  ArrowRight
  Check
  BarChart3;
} from 'lucide-react';
export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className='w-8 h-8 text-white' />
      title: 'Workflow Automation'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      description: 'Create complex workflows with drag-and-drop interface'
    }
    {
      icon: <Bot className='w-8 h-8 text-white' />
      title: 'AI-Powered Bots'
      description: 'Intelligent automation agents that learn and adapt'
    }
    {
      icon: <BarChart3 className='w-8 h-8 text-white' />
      title: 'Process Analytics'
      description: 'Real-time insights into your automation performance'
    }
    {
      icon: <Zap className='w-8 h-8 text-white' />
      title: 'Smart Triggers'
      description: 'Automated responses based on events and conditions'
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
  RefreshCw,;
  Zap,;
  Bot,;
  Workflow,;
  ArrowRight,;
  Check,;
  BarChart3,;
} from 'lucide-react';
export default function AutomationPage() {;
  const features = [;
    {;
      icon: <Workflow className='w-8 h-8 text-white' />,;
      title: 'Workflow Automation',;
      description: 'Create complex workflows with drag-and-drop interface',;
    },;
    {;
      icon: <Bot className='w-8 h-8 text-white' />,;
      title: 'AI-Powered Bots',;
      description: 'Intelligent automation agents that learn and adapt',;
    },;
    {;
      icon: <BarChart3 className='w-8 h-8 text-white' />,;
      title: 'Process Analytics',;
      description: 'Real-time insights into your automation performance',;
    },;
    {;
      icon: <Zap className='w-8 h-8 text-white' />,;
      title: 'Smart Triggers',;
      description: 'Automated responses based on events and conditions',;
    },;
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className="w-8 h-8 text-white" />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag-and-drop interface'
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Bots',
      description: 'Intelligent automation agents that learn and adapt'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Process Analytics',
      description: 'Real-time insights into your automation performance'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Smart Triggers',

      description: 'Automated responses based on events and conditions'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
<<<<<<< HEAD

  const benefits = [

<<<<<<< HEAD
=======
    'Reduce manual tasks by 80%Improve process accuracyScale operations efficiently24/7 automated operationsReal-time monitoringCustom integration support'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    'Reduce manual tasks by 80%Improve process accuracyScale operations efficiently24/7 automated operationsReal-time monitoringCustom integration support'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  ];

  const benefits = [;
    'Reduce manual tasks by 80%',;
    'Improve process accuracy',;
    'Scale operations efficiently',;
    '24/7 automated operations',;
    'Real-time monitoring',;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      icon: <Workflow className='w - 8 h - 8 text - white' />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag - and - drop interface',
    },
    {
      icon: <Bot className='w - 8 h - 8 text - white' />,
      title: 'AI - Powered Bots',
      description: 'Intelligent automation agents that learn and adapt',
    },
    {
      icon: <BarChart3 className='w - 8 h - 8 text - white' />,
      title: 'Process Analytics',
      description: 'Real - time insights into your automation performance',
    },
    {
      icon: <Zap className='w - 8 h - 8 text - white' />,
      title: 'Smart Triggers',
      description: 'Automated responses based on events and conditions',
    },
  ];
;
  const benefits = [;
    'Reduce manual tasks by 80%',
    'Improve process accuracy',
    'Scale operations efficiently',
    '24 / 7 automated operations',
    'Real - time monitoring',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    'Custom integration support',  ];
;
<<<<<<< HEAD
  return (

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    <>
      <Head>
        <title>Automation Hub - Zion Tech Group</title>
        <meta name="description" content="AI-powered workflow automation platform that streamlines your business processes and increases efficiency." />
      </Head>

<<<<<<< HEAD
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
=======

export default function AutomationPage() {_const _features = [
    {
      icon: <Workflow className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag-and-drop interface'
    },
    {
      icon: <Bot className=&quot;w-8 h-8 text-white&quot; />,
      title: 'AI-Powered Bots',
      description: 'Intelligent automation agents that learn and adapt'
    },
    {
      icon: <BarChart3 className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Process Analytics',
      description: 'Real-time insights into your automation performance'
    },
    {
      icon: <Zap className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Smart Triggers',
      description: 'Automated responses based on events and conditions'
    }
  ],

  const benefits = [
    'Reduce manual tasks by 80%Improve process accuracyScale operations efficiently24/7 automated operationsReal-time monitoringCustom integration support'
  ],
    'Reduce manual tasks by 80%'
    'Improve process accuracy'
    'Scale operations efficiently'
    '24/7 automated operations'
    'Real-time monitoring'
    'Custom integration support',  ];

import Head from 'next/head',
import { RefreshCw, Zap, Bot, Workflow, ArrowRight, Check, BarChart3 } from 'lucide-react',
export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className="w-8 h-8 text-white" />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag-and-drop interface'
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Bots',
      description: 'Intelligent automation agents that learn and adapt'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Process Analytics',
      description: 'Real-time insights into your automation performance'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Smart Triggers',
      description: 'Automated responses based on events and conditions',
    },;
  ];

      description: 'Automated responses based on events and conditions'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const benefits = [
    'Reduce manual tasks by 80%Improve process accuracyScale operations efficiently24/7 automated operationsReal-time monitoringCustom integration support'
  ],
  return (
    <>
      <Head>
        <title>Automation Hub - Zion Tech Group</title>
        <meta name="description" content="AI-powered workflow automation platform that streamlines your business processes and increases efficiency." />
      </Head>
      <div className='min-h-screen bg-black'>
        {/* Hero Section */}
        <section className='pt-32 pb-20 relative overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]' />
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
            <div className='mb-8'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>
                <RefreshCw className='w-4 h-4 mr-2' />
                Intelligent Automation
              </div>
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>
      <div className="min-h-screen bg-black">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <RefreshCw className="w-4 h-4 mr-2" />
                Intelligent Automation
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Automation Hub
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              AI-powered workflow automation platform that streamlines your business processes and increases efficiency.
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
                Start Automating
                <ArrowRight className='w-5 h-5 ml-2' />
              </a>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <a
                href="/contact" className="shadow-2xl shadow-blue-500/25">
                Start Automating
                <ArrowRight className="w-5 h-5 ml-2" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </a>
              <a
                href="/contact" className="border-white/20 hover:border-white/40">
                View Demo
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              </a>
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
        {/* Features Section */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                <RefreshCw className='w-4 h-4 mr-2' />;
                Intelligent Automation;
              </div>;
            </div>;

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>;
              Automation Hub;
            </h1>;
            <p className='text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed'>;
              AI-powered workflow automation platform that streamlines your;
              business processes and increases efficiency.;
            </p>;

            <div className='flex flex-col sm:flex-row gap-6 justify-center'>;
              <a href='/contact' className='shadow-2xl shadow-blue-500/25'>;
                Start Automating;
                <ArrowRight className='w-5 h-5 ml-2' />;
              </a>;
              <a
                href='/contact'
                className='border-white/20 hover:border-white/40'>                View Demo;
              </a>;
            </div>;
          </div>;
        </section>;

        {/* Features Section */}
        <section className='py-24'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-20'>;
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
                Automation Features;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>                Powerful tools to automate any business process;
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
                View Demo
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
                Automation Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Powerful tools to automate any business process
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
                  Transform Your Business with Automation;
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
                  Transform Your Business with Automation
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
                    <RefreshCw className='w-24 h-24 mx-auto mb-6 text-blue-400' />
                    <h3 className='text-2xl font-bold text-white mb-4'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
                  <div className="text-center">
                    <RefreshCw className="w-24 h-24 mx-auto mb-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      Smart Workflows
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Create intelligent automation workflows that adapt to your business needs
                    </p>
<<<<<<< HEAD
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      <Zap className="w-4 h-4 mr-2" />
                      AI-powered optimization
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
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start automating your business processes today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Link>
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
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
                  Transform Your Business with Automation;
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
                    <RefreshCw className='w-24 h-24 mx-auto mb-6 text-blue-400' />;
                    <h3 className='text-2xl font-bold text-white mb-4'>;
                      Smart Workflows;
                    </h3>;
                    <p className='text-gray-300 mb-6'>;
                      Create intelligent automation workflows that adapt to your;
                      business needs;
                    </p>;
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm'>;
                      <Zap className='w-4 h-4 mr-2' />                      AI-powered optimization;
=======
    <>;
      <Head>;
        <title > Automation Hub - Zion Tech Group</title>;
        <meta;
          name='description';
          content='AI - powered workflow automation platform that streamlines your business processes and increases efficiency.';
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
                <RefreshCw className='w - 4 h - 4 mr - 2' />;
                Intelligent Automation;
              </div>;
            </div>;
            <h1 className='text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight'>;
              Automation Hub;
            </h1>;
            <p className='text - xl sm:text - 2xl text - gray - 300 max - w-4xl mx - auto mb - 12 leading - relaxed'>;
              AI - powered workflow automation platform that streamlines your;
              business processes and increases efficiency.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 6 justify - center'>;
              <a href='/contact' className='shadow - 2xl shadow - blue - 500 / 25'>;
                Start Automating;
                <ArrowRight className='w - 5 h - 5 ml - 2' />;
              </a>;
              <a;
                href='/contact';
                className='border - white / 20 hover:border - white / 40';
              >                View Demo;
              </a>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className='py - 24'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
                Automation Features;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>                Powerful tools to automate any business process;
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
                  Transform Your Business with Automation;
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
                    <RefreshCw className='w - 24 h - 24 mx - auto mb - 6 text - blue - 400' />;
                    <h3 className='text - 2xl font - bold text - white mb - 4'>;
                      Smart Workflows;
                    </h3>;
                    <p className='text - gray - 300 mb - 6'>;
                      Create intelligent automation workflows that adapt to your;
                      business needs;
                    </p>;
                    <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - blue - 500 / 20 text - blue - 400 text - sm'>;
                      <Zap className='w - 4 h - 4 mr - 2' />                      AI - powered optimization;
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
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start automating your business processes today
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
                Schedule Demo
              </a>
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Link>
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
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
                  Transform Your Business with Automation;
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
                    <RefreshCw className="w-24 h-24 mx-auto mb-6 text-blue-400" />;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      Smart Workflows;
                    </h3>;
                    <p className="text-gray-300 mb-6">;
                      Create intelligent automation workflows that adapt to your business needs;
                    </p>;
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">;
                      <Zap className="w-4 h-4 mr-2" />;
                      AI-powered optimization;
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
              Ready to Automate Your Workflows?;
            </h2>;
            <p className="text-xl text-blue-100 mb-8">;
              Start automating your business processes today;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">;
                Start Free Trial;
              </a>;
              <a;
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">;
                Schedule Demo;
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
