<<<<<<< HEAD
'use client';
import React from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
interface Testimonial {
  id: number
  name: string
  company: string
  content: string
  rating: number
  avatar?: string,
}
;
const DynamicContentShowcase: React.FC = () => {const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {,
      id: 1,"
      name: "Sarah Johnson","
      company: "TechCorp","}
      content: "Zion Tech Group transformed our AI capabilities. Their solutions increased our operational efficiency by 40%.",}
      rating: 5
    },
    {id: 2,"
      name: "Michael Chen","
      company: "InnovateLab","}
      content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services.",}
      rating: 5
    },
    {id: 3,"
      name: "Emily Rodriguez","
      company: "StartupXYZ","}
      content: "The micro SaaS solutions they provided helped us scale faster than we ever imagined possible.",}
      rating: 5
    }
  ];

  useEffect(() => {setIsVisible(true);"
    const interval=";""
    <div className=""bg-gradient-to-br" from-slate-900 via-purple-900 to-slate-900"></div>"
        <section className=""py-20" px-4"></section>"
        <div className=""max-w-7xl" mx-auto text-center"></div>"
          <h1 className=""text-4xl" md:text-6xl font-bold text-white mb-6"></h1>;"
            Transform Your Business with <span className=""text-transparent" bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions</span>
          </h1>"
          <p className=""text-xl" text-gray-300 max-w-3xl mx-auto mb-8"></p>;
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.;
  return ("
    <div className=""bg-gradient-to-br" from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>"
      <div className=""max-w-7xl" mx-auto"></div>"
        <div className=""text-center" mb-16"></div>"
          <h2 className=""text-4xl" font-bold text-white mb-6">Our Solutions</h2>"
          <p className=""text-xl" text-gray-300 max-w-3xl mx-auto">Discover how our cutting-edge AI and IT solutions can transform your business</p>p>"
          <div className=""flex" flex-col sm:flex-row gap-4 justify-center"></div>"
            <button className=""inline-flex" items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>"
              <Play className=""w-5" h-5" />;}</Play>
              Start Demo</Play>"
            <button className=""inline-flex" items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button>"
              <ArrowRight className=""w-5" h-5" />});</ArrowRight>
              Learn More</ArrowRight>
          </div>
{/* Features Grid */}
        <div className=""grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">{features.map((feature, index) => (</div>"
            <div key="{index} className=""bg-white/5" backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"></div>"
              <div className=""w-12" h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4"></div>"
                <feature.icon className=""w-6" h-6 text-white" /></feature>
              </div>"
              <h3 className=""text-xl" font-semibold text-white mb-3">{feature.title}</h3>"
              <p className=""text-gray-300"">{feature.description}</p>
=======
<<<<<<< HEAD
const DynamicContentShowcase: React.FC = () => {
return(<div>
      <Helmet  />
        <title>DynamicContentShowcase</title>
        <meta name="description" content="Advanced DynamicContentShowcase solution for modern businesses." / />
Start Your Free Trial</button>
            </button>
>>>>>>> origin/main
            </div>
        </section>
        </div>
=======
const DynamicContentShowcase: React.FC = () => {;
return(<div>
      <Helmet  />;
        <title>"DynamicContentShowcase"</title>
        <meta name="description" content="Advanced DynamicContentShowcase solution for modern businesses." / />
        <meta name="keywords" content="AI,artificial, intelligence, DynamicContentShowcase, AI, solutions, intelligent automation / /">
      </Helmet>
    </div>
      <Navigation/ />,
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 /">"}
        {/* Hero Section */,}
        <section className="relative" py-20 px-4 overflow-hidden />,"
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 /">,
    <div className="relative max-w-7 xl mx-auto text-center /">,"
    <h1 className="text-5 xl md: text-7 xl font-bold text-white mb-6 leading-tight /">
"DynamicContentShowcase"</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto leading-relaxed /">"
Advanced DynamicContentShowcase solution for modern businesses.</p>
            </p>,<div className="flex" flex-col sm: flex-row gap-4 justify-center />
              <button className="bg-emerald-600" hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center />
"Get Started"</button>
              </button>
              <button className="border" border-emerald-400 text-emerald-400 hover: bg-emerald-400 hove","
r: text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />
"Learn More"</button>
              </button>
        </section>,{/* Features Section */,}
<section className="py-20" px-4 />,"
    <div className="max-w-7 xl mx-auto /">,
    <div className="text-center mb-16 /">,"
    <h1 className="text-4 xl font-bold text-white mb-4">"Key Features"</h2>
              <p className="text-xl" text-gray-300 max-w-3 xl mx-auto />
"Discover the powerful features that make DynamicContentShowcase the perfect solution for your business."</p>
              </p>,
    <divclassName="grid" md: grid-cols-2 l","
g: grid-cols-4 gap-8" />,<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 /">,
    <h1 className="text-xl font-semibold text-white mb-3">"AI-Powered"</h3>"
                <p className="text-gray-300">"Advanced AI algorithms for intelligent automation."</p>,
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 /">,
    <h1 className="text-xl font-semibold text-white mb-3">"Scalable"</h3>"
                <p className="text-gray-300">"Grows with your business needs and requirements."</p>
                </div>,"
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 /">,
    <h1 className="text-xl font-semibold text-white mb-3">"Secure"</h3>"
                <p className="text-gray-300">"Enterprise-grade security and data protection."</p>
                </div>,"
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 /">,
    <h1 className="text-xl font-semibold text-white mb-3">"Efficient"</h3>"

                <p className="text-gray-300">"Optimized performance for maximum productivity."</p>
                </div>
              </div>
            </div>
        </section>,{/* CTA Section */,;}
<section className="py-20" px-4 />,"
    <div className="max-w-4 xl mx-auto text-center /">,
    <h1 className="text-4 xl font-bold text-white mb-6">"Ready to Get Started?"</h2>"
            <p className="text-xl" text-gray-300 mb-8 />
"Join thousands of businesses already using DynamicContentShowcase to transform their operations."</p>
            </p>
            <button className="bg-emerald-600" hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 />
"Start Your Free Trial"</button>
            </button>
            </div>
        </section>
        </div>
      </Footer>
    </div>)
  );
,,};"
export default DynamicContentShowcase;"
}"
>>>>>>> origin/main
