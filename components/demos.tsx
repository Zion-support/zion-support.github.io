
import {
  Mail,
  Lock,
  Link,
  FileText,
  CheckCircle,
  Zap,
  BarChart3,

} from 'lucide-react';

export default function DemosPage() {

  const [activeDemo, setActiveDemo] = useState<string>('email-validator');
  const demos = [
    {
      id: 'email-validator'
      title: 'Email Validator Pro'
      description:
        'Advanced email validation with domain checking and deliverability scoring'
      icon: <Mail className='w-6 h-6' />
      color: 'from-blue-500 to-cyan-600'
      component: <EmailValidatorDemo />,      color: 'from-blue-500 to-cyan-600'
      component: <EmailValidatorDemo />
    }
    {
      id: 'password-strength'
      title: 'Password Strength Analyzer'
      description: 'Comprehensive password security analysis with entropy calculation'
      icon: <Lock className="w-6 h-6" />
      color: 'from-green-500 to-emerald-600'
      component: <PasswordStrengthDemo />
    }
    {
      id: 'url-shortener'
      title: 'Smart URL Shortener'
      description: 'Professional URL shortening with analytics and custom codes'
      icon: <Link className="w-6 h-6" />
      color: 'from-purple-500 to-pink-600'
      component: <UrlShortenerDemo />
    }
    {
      id: 'text-analyzer'
      title: 'Text Analysis Suite'
      description: 'Advanced text analysis with readability and sentiment analysis'
      icon: <FileText className="w-6 h-6" />
      color: 'from-orange-500 to-red-600'
      component: <TextAnalyzerDemo />
    }
    {
      id: 'password-strength'
      title: 'Password Strength Analyzer'
      description:
        'Comprehensive password security analysis with entropy calculation'
      icon: <Lock className='w-6 h-6' />
      color: 'from-green-500 to-emerald-600'
      component: <PasswordStrengthDemo />
    }
    {
      id: 'url-shortener'
      title: 'Smart URL Shortener'
      description:
        'Professional URL shortening with analytics and custom codes'
      icon: <Link className='w-6 h-6' />
      color: 'from-purple-500 to-pink-600'
      component: <UrlShortenerDemo />
    }
    {
      id: 'text-analyzer'
      title: 'Text Analysis Suite'
      description:
        'Advanced text analysis with readability and sentiment analysis'
      icon: <FileText className='w-6 h-6' />
      color: 'from-orange-500 to-red-600'
      component: <TextAnalyzerDemo />
    },  ];      component: <TextAnalyzerDemo />
    }
  ];
  const activeDemoData = demos.find(demo => demo.id === activeDemo);

  return (
    <>
      <Head>

                View All Services
              </Button>
            </div>
          </div>

            </div>
          </div>
        </div>
      </section>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Each demo showcases a different micro SaaS service with full functionality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {demos.map((demo) => (
                style={{ animationDelay: '0 && 0.4s' }}>;
                <Code className="w-5 h-5 mr-2" />;
                View All Services;
              </Button>;
            </div>;
          </div>;
          {/* Stats */}
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in'
            style={{ animationDelay: '0 && 0.6s' }}>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300'>;
                4;
              </div>;
              <div className='text-gray-400 text-sm'>Live Demos</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300'>;
                Real;
              </div>;
              <div className='text-gray-400 text-sm'>API Endpoints</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300'>;
                Free;
              </div>;
              <div className='text-gray-400 text-sm'>To Test</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300'>;
                Instant;
              </div>;
              <div className='text-gray-400 text-sm'>Results</div>            </div>                4;
              </div>;
              <div className="text-gray-400 text-sm">Live Demos</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">;
                Real;
              </div>;
              <div className="text-gray-400 text-sm">API Endpoints</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">;
                Free;
              </div>;
              <div className="text-gray-400 text-sm">To Test</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">;
                Instant;
              </div>;
              <div className="text-gray-400 text-sm">Results</div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Demo Navigation */}
      <section
        id='demos'
        className='py-16 bg-gray-900 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0 && 0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0 && 0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-12'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>;
              Choose a Service to Test;
            </h2>;
            <p className='text-lg text-gray-400 max-w-2xl mx-auto'>;
        <meta;
          name='description';
          content='Try our professional micro SaaS services with interactive demos. Test email validation, password strength, URL shortening, and text analysis in real - time.';
        />;
        <meta;
          property='og:title';
          content='Interactive Demos | Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Test our micro SaaS services with interactive demos.';
        />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;
      {/* Hero Section */}
      <section className='relative min - h-screen flex items - center justify - center overflow - hidden bg - black'>;
        <div className='absolute inset - 0'>;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (59, 130, 246, 0.1), transparent_50%)]' />;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (34, 197, 94, 0.08), transparent_50%)]' />;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_20%_80%, rgba (168, 85, 247, 0.06), transparent_50%)]' />;
        </div>;
        <div className='absolute inset - 0 bg-[linear - gradient (rgba (59, 130, 246, 0.1)_1px, transparent_1px), linear - gradient (90deg, rgba (59, 130, 246, 0.1)_1px, transparent_1px)] bg-[size:50px_50px] opacity - 20' />;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          <div className='mb - 20 animate - fade - in'>;
            <div className='mb - 8'>;
              <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - blue - 500 / 10 border border - blue - 500 / 20 text - blue - 400 text - sm font - medium mb - 6 animate - scale - in'>;
                <Play className='w - 4 h - 4 mr - 2' />;
                Interactive Demos;
              </div>;
            </div>;
            <h1 className='text - 4xl sm:text - 5xl md:text - 6xl lg:text - 7xl font - black mb - 8 text - white leading - tight tracking - tight'>;
              Try Our;
              <span className='block text - transparent bg - clip - text bg - gradient - to - r from - blue - 400 to - purple - 400'>;
                Micro SaaS Services;
              </span>;
            </h1>;
            <p className='text - xl sm:text - 2xl md:text - 3xl text - gray - 300 max - w-4xl mx - auto mb - 16 leading - relaxed font - light'>;
              Experience our professional - grade micro SaaS services firsthand;
              with interactive demos. Test, explore, and see the power of our;
              APIs in action.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 6 justify - center items - center mb - 20'>;
              <Button;
                href='#demos';
                size='lg';
                className='animate - scale - in shadow - 2xl shadow - blue - 500 / 25 hover:shadow - blue - 500 / 40';
                style={{ animation_delay: '0.2s' }}
              >;
                Start Testing;
                <Play className='w - 5 h - 5 ml - 2' />;
              </Button>;
              <Button;
                href='/micro - saas';
                variant='outline';
                size='lg';
                className='animate - scale - in border - white / 20 hover:border - white / 40 hover:bg - white / 5';
                style={{ animation_delay: '0.4s' }}
              >;
                <Code className='w - 5 h - 5 mr - 2' />                View All Services      </Head>;
      {/* Hero Section */}
      <section className="relative min - h-screen flex items - center justify - center overflow - hidden bg - black">;
        <div className="absolute inset - 0">;
          <div className="absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (59, 130, 246, 0.1), transparent_50%)]" />;
          <div className="absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (34, 197, 94, 0.08), transparent_50%)]" />;
          <div className="absolute inset - 0 bg-[radial - gradient (circle_at_20%_80%, rgba (168, 85, 247, 0.06), transparent_50%)]" />;
        </div>;
        <div className="absolute inset - 0 bg-[linear - gradient (rgba (59, 130, 246, 0.1)_1px, transparent_1px), linear - gradient (90deg, rgba (59, 130, 246, 0.1)_1px, transparent_1px)] bg-[size:50px_50px] opacity - 20" />;
        <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
          <div className="mb - 20 animate - fade - in">;
            <div className="mb - 8">;
              <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - blue - 500 / 10 border border - blue - 500 / 20 text - blue - 400 text - sm font - medium mb - 6 animate - scale - in">;
                <Play className="w - 4 h - 4 mr - 2" />;
                Interactive Demos;
              </div>;
            </div>;
            <h1 className="text - 4xl sm:text - 5xl md:text - 6xl lg:text - 7xl font - black mb - 8 text - white leading - tight tracking - tight">;
              Try Our;
              <span className="block text - transparent bg - clip - text bg - gradient - to - r from - blue - 400 to - purple - 400">;
                Micro SaaS Services;
              </span>;
            </h1>;
            <p className="text - xl sm:text - 2xl md:text - 3xl text - gray - 300 max - w-4xl mx - auto mb - 16 leading - relaxed font - light">;
              Experience our professional - grade micro SaaS services firsthand with interactive demos.;
              Test, explore, and see the power of our APIs in action.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 6 justify - center items - center mb - 20">;
              <Button;
                href="#demos";
                size="lg";
                className="animate - scale - in shadow - 2xl shadow - blue - 500 / 25 hover:shadow - blue - 500 / 40";
                style={{ animation_delay: '0.2s' }}
              >;
                Start Testing;
                <Play className="w - 5 h - 5 ml - 2" />;
              </Button>;
              <Button;
                href="/micro - saas";
                variant="outline";
                size="lg";
                className="animate - scale - in border - white / 20 hover:border - white / 40 hover:bg - white / 5";
                style={{ animation_delay: '0.4s' }}
              >;
                <Code className="w - 5 h - 5 mr - 2" />;
                View All Services;
              </Button>;
            </div>;
          </div>;
          {/* Stats */}
          <div;
            className='grid grid - cols - 2 md:grid - cols - 4 gap - 8 max - w-5xl mx - auto animate - fade - in';
            style={{ animation_delay: '0.6s' }}
          >;
            <div className='text - center group'>;
              <div className='text - 3xl md:text - 4xl font - bold mb - 3 text - blue - 400 group - hover:scale - 110 transition - transform duration - 300'>;
                4;
              </div>;
              <div className='text - gray - 400 text - sm'>Live Demos</div>;
            </div>;
            <div className='text - center group'>;
              <div className='text - 3xl md:text - 4xl font - bold mb - 3 text - green - 400 group - hover:scale - 110 transition - transform duration - 300'>;
                Real;
              </div>;
              <div className='text - gray - 400 text - sm'>API Endpoints</div>;
            </div>;
            <div className='text - center group'>;
              <div className='text - 3xl md:text - 4xl font - bold mb - 3 text - purple - 400 group - hover:scale - 110 transition - transform duration - 300'>;
                Free;
              </div>;
              <div className='text - gray - 400 text - sm'>To Test</div>;
            </div>;
            <div className='text - center group'>;
              <div className='text - 3xl md:text - 4xl font - bold mb - 3 text - orange - 400 group - hover:scale - 110 transition - transform duration - 300'>;
                Instant;
              </div>;
              <div className='text - gray - 400 text - sm'>Results</div>            </div>                4;
              </div>;
              <div className="text - gray - 400 text - sm">Live Demos</div>;
            </div>;
            <div className="text - center group">;
              <div className="text - 3xl md:text - 4xl font - bold mb - 3 text - green - 400 group - hover:scale - 110 transition - transform duration - 300">;
                Real;
              </div>;
              <div className="text - gray - 400 text - sm">API Endpoints</div>;
            </div>;
            <div className="text - center group">;
              <div className="text - 3xl md:text - 4xl font - bold mb - 3 text - purple - 400 group - hover:scale - 110 transition - transform duration - 300">;
                Free;
              </div>;
              <div className="text - gray - 400 text - sm">To Test</div>;
            </div>;
            <div className="text - center group">;
              <div className="text - 3xl md:text - 4xl font - bold mb - 3 text - orange - 400 group - hover:scale - 110 transition - transform duration - 300">;
                Instant;
              </div>;
              <div className="text - gray - 400 text - sm">Results</div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Demo Navigation */}
      <section;
        id='demos';
        className='py - 16 bg - gray - 900 relative overflow - hidden';
      >;
        <div className='absolute inset - 0 bg-[linear - gradient (rgba (59, 130, 246, 0.05)_1px, transparent_1px), linear - gradient (90deg, rgba (59, 130, 246, 0.05)_1px, transparent_1px)] bg-[size:50px_50px] opacity - 20' />;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10'>;
          <div className='text - center mb - 12'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 4'>;
              Choose a Service to Test;
            </h2>;
            <p className='text - lg text - gray - 400 max - w-2xl mx - auto'>;
              Each demo showcases a different micro SaaS service with full;
              functionality;
            </p>;
          </div>;
              <button

                key={demo.id}
                on_click={() => setActiveDemo (demo.id)}
                className={`p - 4 rounded - lg border transition - all duration - 300 text - left group ${
                  active_demo === demo.id;
                    ? 'border - blue - 500 bg - blue - 500 / 10';
                    : 'border - gray - 700 bg - gray - 800 / 50 hover:border - gray - 600 hover:bg - gray - 800 / 80';
                }`}

                  {demo.icon}
                </div>;
                <h3 className='font - semibold text - white mb - 2 group - hover:text - blue - 400 transition - colors duration - 300'>;
                  {demo.title}
                </h3>;
                <p className='text - sm text - gray - 400 leading - relaxed'>;
                  {demo.description}

                  {demo.title}
                </h3>;
                <p className="text - sm text - gray - 400 leading - relaxed">;
                  {demo.description}

                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Demo */}
      <section className='py-16 bg-black relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4'>
              <Play className='w-4 h-4 mr-2' />

              Live Demo
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              {activeDemoData?.title}
            </h2>
            <p className='text-lg text-gray-400 max-w-2xl mx-auto'>              {activeDemoData?.description}
            </p>
          </div>
          <div className='animate-fade-in'>{activeDemoData?.component}</div>        </div>
      </section>

        </div>
      </section>
      {/* Features */}

                See exact request/response formats for easy integration
              </p>
            </Card>
            <Card className='text-center group bg-gray-800/50 border border-gray-700 hover:border-orange-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <BarChart3 className='w-8 h-8 text-orange-400' />
              </div>
              <h3 className='text-xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors duration-300'>
                Detailed Results
              </h3>
              <p className='text-gray-400 leading-relaxed'>                Get comprehensive analysis and insights from each service
              </p>
            </Card>
            <Card className='text-center group bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Play className='w-8 h-8 text-cyan-400' />              </div>

              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors duration-300">
                Detailed Results
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Get comprehensive analysis and insights from each service
              </p>
            </Card>
            <Card className="text-center group bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                Instant Testing
              </h3>
              <p className="text-gray-400 leading-relaxed">
                No signup required - start testing immediately
              </p>
            </Card>
            <Card className="text-center group bg-gray-800/50 border border-gray-700 hover:border-pink-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors duration-300">
                Production Ready
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Same infrastructure that powers our production services
              </p>
            </Card>
          </div>
        </div>
      </section>

              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>

}