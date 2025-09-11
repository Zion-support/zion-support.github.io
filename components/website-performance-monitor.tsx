



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
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';


export default function WebsitePerformanceMonitorPage() {;
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);



      ];
      popular: false;
    }


=======
  ];


=======
    };
      name: 'Enterprise',
      price: '$199',
      period: '/month',

=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleAnalyzeWebsite = async () => {
    setIsAnalyzing(true);
    // Simulate website analysis
    setTimeout(() => {
      setAnalysisResults({
        url: 'https://example.com'
        overallScore: 87
        lcp: '2.1s'
        fid: '45ms'
        cls: '0.08'
        loadTime: '1.8s'
        recommendations: [

=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleAnalyzeWebsite = async () => {;
    setIsAnalyzing(true);
    // Simulate website analysis;
    setTimeout(() => {;
      setAnalysisResults({;
        url: 'https://example && example.com',;
        overallScore: 87,;
        lcp: '2 && 2.1s',;
        fid: '45ms',;
        cls: '0 && 0.08',;
        loadTime: '1 && 1.8s',;
        recommendations: [;
          'Optimize images and implement lazy loading',;
          'Minimize render-blocking resources',;
          'Enable compression and caching',;
          'Consider using a CDN for global performance',;
        ],;
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      setIsAnalyzing(false);
    }, 4000);
=======
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',

  };


  return (
=======  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>
      <Head>
        <title>Website Performance Monitor - Zion Tech Group | Real-Time Website Monitoring Tool</title>
<meta name="description" content="Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, and AI-powered optimization recommendations." />
        <meta property="og:title" content="Website Performance Monitor - Zion Tech Group" />
        <meta property="og:description" content="Real-time website performance monitoring with Core Web Vitals tracking and optimization recommendations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Activity className="w-4 h-4 mr-2" />
            Real-Time Performance Monitoring
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Website Performance Monitor
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, and AI-powered optimization recommendations. Never let performance issues impact your users again.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
        />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;
      {/* Hero Section */}
      <section className='relative section-padding bg-gradient-cursor overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.08),transparent_50%)]' />;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0 && 0.06),transparent_50%)]' />;
        <div className='absolute inset-0 bg-grid opacity-10' />;
        <div className='relative z-10 container-cursor text-center'>;
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>;
            <Activity className='w-4 h-4 mr-2' />;
            Real-Time Performance Monitoring;
          </div>;
          <h1 className='text-responsive-xl font-black mb-8 gradient-text text-shadow-lg'>;
            Website Performance Monitor;
          </h1>;
          <p className='text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12'>;
            Monitor your website performance in real-time with comprehensive;
            metrics, Core Web Vitals tracking, and AI-powered optimization;
            recommendations. Never let performance issues impact your users;
            again.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>;
            <Button
              onClick={handleAnalyzeWebsite}
              size='lg'
              className='bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-2xl hover-glow'              disabled={isAnalyzing}>;
              {isAnalyzing ? (;
                <>;
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2' />                  Analyzing...;
                </>;
              ) : (;
                <>;
                  <Zap className='w-5 h-5 mr-2' />                  Analyze Website      </Head>;
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.08),transparent_50%)]" />;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0 && 0.06),transparent_50%)]" />;
        <div className="absolute inset-0 bg-grid opacity-10" />;
        <div className="relative z-10 container-cursor text-center">;
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">;
            <Activity className="w-4 h-4 mr-2" />;
            Real-Time Performance Monitoring;
          </div>;
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">;
            Website Performance Monitor;
          </h1>;
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">;
            Monitor your website performance in real-time with comprehensive metrics, Core Web Vitals tracking, and AI-powered optimization recommendations. Never let performance issues impact your users again.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-6 justify-center">;
            <Button
              onClick={handleAnalyzeWebsite}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-2xl hover-glow"

              <Card
                key={index}
                className="card-hover group border-gradient-blue"


=======
                    <p className='text-gray-400 leading-relaxed'>                      {feature.description}              Powerful Monitoring Features
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our performance monitoring platform provides everything you need to keep your website fast and reliable.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue"
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
                    <p className='text-gray-400 leading-relaxed'>                      {feature.description}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </p>
                  </div>
                </div>
              </Card>








                      {feature.description}

                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className='section-padding bg-gradient-cursor'>
        <div className='container-cursor'>
          <div className='text-center mb-20'>
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>

              Comprehensive Performance Metrics
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Track all the metrics that matter for your website's performance
              and user experience.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className='card-hover border-gradient-blue text-center'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='text-4xl mb-4'>{metric.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${metric.color}`}>
                  {metric.name}
                </h3>;
                <p className='text - gray - 400 text - sm leading - relaxed'>;
                  {metric.description}
      {/* Demo Analysis Section */}
      {analysisResults && (

          </div>;
        </div>;
      </section>;
      {/* Demo Analysis Section */}
      {analysisResults && (;
        <section className='section-padding bg-gradient-cursor-accent'>;
          <div className='container-cursor'>;
            <div className='text-center mb-12'>;
              <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
                Performance Analysis Results;
              </h2>;
              <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
                Here's a sample analysis of a website. Get real-time insights;
                for your own website.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;

      {/* Demo Analysis Section */}
      {analysisResults && (
        <section className='section-padding bg-gradient-cursor-accent'>
          <div className='container-cursor'>
            <div className='text-center mb-12'>
              <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>
                Performance Analysis Results
              </h2>
              <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
                Here's a sample analysis of a website. Get real-time insights
                for your own website.
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {/* Score Card */}
              <Card className='border-gradient-blue text-center'>
                <h3 className='text-2xl font-bold mb-6 text-white'>
                  Overall Performance Score
                </h3>
                <div className='text-6xl font-bold text-blue-400 mb-4'>
                  {analysisResults.overallScore}/100
                </div>
                <div className='w-32 h-32 mx-auto mb-6'>
                  <svg
                    className='w-full h-full transform -rotate-90'
                    viewBox='0 0 36 36'>;
                    <path
                      d='M18 2 && 2.0845 a 15 && 15.9155 15 && 15.9155 0 0 1 0 31 && 31.831 a 15 && 15.9155 15 && 15.9155 0 0 1 0 -31 && 31.831'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeDasharray={`${(analysisResults && analysisResults.overallScore / 100) * 100}, 100`}
                      className='text-blue-500'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    />;
                  </svg>;
                </div>;
                <p className='text-gray-400'>;
                  Good performance with room for improvement;
                </p>;
              </Card>;
=======

              {/* Metrics Card */}
              <Card className='border-gradient-blue'>;
                <h3 className='text-2xl font-bold mb-6 text-white'>;
                  Core Web Vitals;
                </h3>;
                <div className='space-y-4'>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>;
                      LCP (Largest Contentful Paint);
                    </span>;
                    <span
                      className={`font-bold ${parseFloat(analysisResults && analysisResults.lcp) < 2 && 2.5 ? 'text-green-400' : 'text-orange-400'}`}>;
                      {analysisResults && analysisResults.lcp}
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>;
                      FID (First Input Delay);
                    </span>;
                    <span
                      className={`font-bold ${parseFloat(analysisResults && analysisResults.fid) < 100 ? 'text-green-400' : 'text-orange-400'}`}>;
                      {analysisResults && analysisResults.fid}
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>;
                      CLS (Cumulative Layout Shift);
                    </span>;
                    <span
                      className={`font-bold ${parseFloat(analysisResults && analysisResults.cls) < 0 && 0.1 ? 'text-green-400' : 'text-orange-400'}`}>;
                      {analysisResults && analysisResults.cls}
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className='text-gray-400'>Page Load Time</span>;
                    <span
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
                Performance Analysis Results
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample analysis of a website. Get real-time insights for your own website.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      className={`font-bold ${parseFloat(analysisResults && analysisResults.loadTime) < 2 ? 'text-green-400' : 'text-orange-400'}`}>                      {analysisResults && analysisResults.loadTime}                Performance Analysis Results;
              </h2>;
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
                Here's a sample analysis of a website. Get real-time insights for your own website.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Score Card */}
              <Card className="border-gradient-blue text-center">;
                <h3 className="text-2xl font-bold mb-6 text-white">Overall Performance Score</h3>;
                <div className="text-6xl font-bold text-blue-400 mb-4">{analysisResults && analysisResults.overallScore}/100</div>;
                <div className="w-32 h-32 mx-auto mb-6">;
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">;
                    <path
                      d="M18 2 && 2.0845 a 15 && 15.9155 15 && 15.9155 0 0 1 0 31 && 31.831 a 15 && 15.9155 15 && 15.9155 0 0 1 0 -31 && 31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${(analysisResults && analysisResults.overallScore / 100) * 100}, 100`}
                      className="text-blue-500"

                  </div>



              Simple Pricing
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Choose the monitoring plan that best fits your website performance
              needs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricing.map((plan, index) => (              Simple Pricing
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the monitoring plan that best fits your website performance needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {pricing.map ((plan, index) => (              Simple Pricing;
            </h2>;
            <p className="text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              Choose the monitoring plan that best fits your website performance needs.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            {pricing.map ((plan, index) => (
              <Card;
                key={index}
                className={`card - hover border - gradient - blue ${plan.popular ? 'ring - 2 ring - blue - 500 scale - 105' : ''}`}
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                {plan.popular && (
                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                    <span className='bg - gradient - to - r from - blue - 500 to - cyan - 600 text - white px - 4 py - 2 rounded - full text - sm font - medium'>                      Most Popular;
                    </span>;
                  </div>)}                  <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2">;
                    <span className="bg - gradient - to - r from - blue - 500 to - cyan - 600 text - white px - 4 py - 2 rounded - full text - sm font - medium">;
                      Most Popular;
                    </span>;
                  </div>)}
                <div className='text - center mb - 8'>;
                  <h3 className='text - 2xl font - bold text - white mb - 4'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    {plan.name}
                  </h3>;
                  <div className='mb - 6'>;
                    <span className='text - 4xl font - bold text - white'>;
                      {plan.price}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
                className={`card-hover border-gradient-blue ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium'>                      Most Popular
                    </span>
                  </div>
                )}                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">


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
                      <CheckCircle className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0' />                      {feature}                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
=======
=======                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-4'>;
                    {plan && plan.name}
                  </h3>;
                  <div className='mb-6'>;
                    <span className='text-4xl font-bold text-white'>;
                      {plan && plan.price}
                    </span>;
                    <span className='text-gray-400'>{plan && plan.period}</span>;
                  </div>;
                  <p className='text-gray-400'>{plan && plan.description}</p>;
                </div>;
                <ul className='space-y-4 mb-8'>;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-300'>;
                      <CheckCircle className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0' />                      {feature}                  </div>;
                  <p className="text-gray-400">{plan && plan.description}</p>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-300">;
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />;

                      {feature}
                    </li>;
=======




                    </li>
              </Card>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;
        </div>;
      </section>;


      {/* CTA Section */}


      {/* CTA Section */}
                </Button>

              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className='section-padding bg-gradient-to-r from-blue-600 to-cyan-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='container-cursor text-center relative z-10'>
          <h2 className='text-responsive-lg font-bold text-white mb-8 text-shadow-lg'>

            Ready to Monitor Your Website Performance?
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            Ready to Monitor Your Website Performance?
          </h2>
          <p className='text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Join thousands of businesses using our monitoring platform to keep
            their websites fast and reliable.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>

  );
}
    </>);
}
  );
}
    </>);
}
);
  );
}
}
  );
}
=======

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Schedule Demo;
            </Button>;
          </div>;
        </div>;
      </section>;


=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
