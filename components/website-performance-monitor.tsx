

  Gauge,
  BarChart3,;
  Clock,;

export default function WebsitePerformanceMonitorPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

const [analysisResults, setAnalysisResults] = useState(null);

const features = null;
            and AI-powered optimization recommendations. Never let performance issues impact your users again.
import {
  Activity;
Zap,
TrendingUp;
AlertTriangle,
CheckCircle;
ArrowRight,
Monitor;
Gauge,
BarChart3;}
Clock;}
} from 'lucide-react';import { Activity, Zap, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Monitor, Gauge, BarChart3, Clock  } from 'lucide-react';

export default function WebsitePerformanceMonitorPage() {const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const features = [
  {icon: <Monitor className='w-8 h-8 text-white'    />,title: 'Real-Time Monitoring',
  description:;
        '24/7 monitoring of your website performance with instant alerts and notifications.';
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600';}
      gradient: 'from-blue-400 to-cyan-500';}
    }
    {icon: <Gauge className='w-8 h-8 text-white'    />;
      title: 'Performance Metrics';
      description:;
        'Comprehensive metrics including Core Web Vitals, page load times, and user experience scores.';
      color: 'bg-gradient-to-br from-green-500 to-emerald-600';}
      gradient: 'from-green-400 to-emerald-500';}
    }
    {icon: <AlertTriangle className='w-8 h-8 text-white'    />;
      title: 'Issue Detection';
      description:;
        'Automatically detect and alert on performance issues, downtime, and bottlenecks.';
      color: 'bg-gradient-to-br from-orange-500 to-red-600';}
      gradient: 'from-orange-400 to-red-500';}
    }
    {icon: <TrendingUp className='w-8 h-8 text-white'    />;
      title: 'Performance Optimization';
      description:;
        'AI-powered recommendations to improve your website speed and user experience.';
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600';}
      gradient: 'from-purple-400 to-indigo-500';}

    }
  ];

const metrics = [
    {



  const handleAnalyzeWebsite = async () => {

        url: 'https://example.com'
        overallScore: 87
        lcp: '2.1s'
        fid: '45ms'
        cls: '0.08'
        loadTime: '1.8s'
        recommendations: [



      setIsAnalyzing(false);
    }, 4000);

  return (








          <div className='flex flex-col sm:flex-row gap-6 justify-center'    />;
            <Button;
              onClick={handleAnalyzeWebsite}

              size='lg'




            ))}








      {/* Metrics Section */}








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


                  <div className=\"flex - 1\"    />;
                    <h3 className=\"text - 2xl font - bold mb - 4 text - white\"    />;
                      {feature.title}
                    </h3>;
                    <p className=\"text - gray - 400 leading - relaxed\"    />;

                      {feature.description}
            ))}
                key={index}


                  {metric.name}
                </h3>;


      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Comprehensive Performance Metrics

          </div>;
        </div>;
      </section>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {metrics && metrics.map((metric, index) => (;
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"


                </p>              </Card>













            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;









        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
                Performance Analysis Results



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


                    />;
                  </svg>;
                </div>;
                <p className="text-gray-400">Good performance with room for improvement</p>;
              </Card>;

                ))}
              </div>
            </Card>
          </div>
        </section>
      )}
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


      <section id='pricing' className='section-padding bg-gradient-cursor'>;
        <div className='container-cursor'>;
          <div className='text-center mb-20'>;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
              Simple Pricing;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
                </p>              </Card>              Comprehensive Performance Metrics;
            </h2>;
            <p className="text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              Track all the metrics that matter for your website's performance and user experience.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
            {metrics.map ((metric, index) => (
              <Card;
                key={index}
                className="card - hover border - gradient - blue text - center";
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className="text - 4xl mb - 4">{metric.icon}</div>;
                <h3 className={`text - xl font - bold mb - 3 ${metric.color}`}>{metric.name}</h3>;
                <p className="text - gray - 400 text - sm leading - relaxed">{metric.description}</p>;
              </Card>))}
          </div>;
        </div>;
      </section>;

      {/* Demo Analysis Section */}
      {analysisResults && (;
        <section className='section-padding bg-gradient-cursor-accent>;
          <div className=container-cursor'>;
            <div className='text-center mb-12>;
              <h2 className=text-responsive-lg font-bold mb-8 gradient-text text-shadow'>;
                Performance Analysis Results;
              </h2>;
              <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
                Heres a sample analysis of a website. Get real-time insights;
                for your own website.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;

      {/* Metrics Section */}
      <section className="section-padding bg-gradient-cursor>
        <div className=container-cursor">
          <div className="text-center mb-20>
            <h2 className=text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Comprehensive Performance Metrics
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>
              Track all the metrics that matter for your websites performance and user experience.
            </p>
          </div>

          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=text-4xl mb-4">{metric.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${metric.color}`}>{metric.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed>{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Demo Analysis Section */}
      {analysisResults && (


<section className='section-padding bg-gradient-cursor-accent'    />
          <div className='container-cursor'    />
            <div className='text-center mb-12'    />
              <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />
                Performance Analysis Results;
                    <span;
className={`font-bold ${parseFloat(analysisResults.loadTime) < 2 ? 'text-green-400' : 'text-orange-400'}`}    />



            {/* Recommendations */}

<section id='pricing' className='section-padding bg-gradient-cursor'    />
        <div className='container-cursor'    />
          <div className='text-center mb-20'    />
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />
              Simple Pricing;
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />
              Choose the monitoring plan that best fits your website performance;
needs.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'    />
            {pricing.map((plan, index) => (
      <section id='pricing' className='section-padding bg-gradient-cursor'    />;

        <div className='container-cursor'    />;
          <div className='text-center mb-20'    />;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />;
              Simple Pricing;
            </h2>;

            </h2>;
            <p className=\"text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed\"    />;
              Track all the metrics that matter for your website's performance and user experience.;
            </p>;
          </div>;
          <div className=\"grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6\"    />;

            {metrics.map ((metric, index) => (}
              <Card;}
                key={index}

                className={`card-hover border-gradient-blue ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}

                style={{ animationDelay: `${index * 0.1}s` ,
}
                  />;
                {plan.popular && (<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'    />;
                    <span className='bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium'    />;

                      Most Popular;

<div className='text-center mb-8'    />
                  <h3 className='text-2xl font-bold text-white mb-4'    />




            <Button
              href='/contact'

              variant='outline'
              size='lg'


              className='border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl'
                />
              Schedule Demo;


    <   />
  );
}





