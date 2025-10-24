'use client';
import{{ { React  useState useEffect  from 'react';}
import ArrowRight X Brain BarChart Target TrendingUp Cloud Shield Globe Database Users, Settings     ;} from 'lucide-react';
interface Slide id number title string description string features string icon ReactReactNode color string const ContentCarousel ReactFC = 2 => 
3 features     features       color "from-red-500 to-pink-500"
const ContentCarousel: "React.FC = () => {
const [currentSlide",setCurrentSlide,] = useState(0)
const slides: "Slide[] = [
    {
id: 1",title: "AI-Powered Analytics",description: "Transform your data into actionable insights with our advanced AI analytics platform.",features: [
        "Real-time data processing","Predictive analytics"
        "Custom dashboards"
        "Automated reporting"
    ]
icon: <BarChartclassName="h-12 w-12" />,color: "from-blue-500 to-cyan-500"
  ,}
    {
id: "2",title: "Cloud Infrastructure",description: "Scalable,secure, and reliable cloud solutions for your business needs."
features: "[","99.9% uptime guarantee"
        "Auto-scaling capabilities"
        "Advanced security"
        "24/7 monitoring"
      ]
icon: <CloudclassName="h-12 w-12" />,color: "from-green-500 to-emerald-500"
    ,}
    {
id: "3",title: "Cybersecurity Solutions",description: "Protect your business with our comprehensive cybersecurity services.",features: [

        "Threat detection","Vulnerability assessment"
        "Incident response"
        "Security training"
      ]
icon: <ShieldclassName="h-12 w-12" />,color: "from-red-500 to-pink-500"
    ,}
    {
id: "4",title: "Digital Transformation",description: "Modernize your business processes with cutting-edge technology solutions.",features: [
        "Process automation","Digital workflows"
        "Integration services"
        "Change management"
icon <SettingsclassName = "h-12 w-12" />
color "from-purple-500 to-indigo-500"
useEffect(() => {
const timer = setInterval(() => {
setCurrentSlide((prev) => (prev + 1) % slides.length)
    ,}, 5000)
return () => clearInterval(timer)
  }, [slides.length,])
const nextSlide = (
return
setCurrentSlide((prev) => (prev + 1) % slides.length)
  ) => {
$3
,}
const prevSlide = (
return
setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  ) => {
$3
,;}
const goToSlide = (
setCurrentSlide(index)
  ,) => {
$3
;}
return(<>
      <div>

      <Helmet />

        <title>ContentCarousel</title>
        <meta name="description" content="Advanced ContentCarousel solution for modern businesses." />
        <meta name="keywords" content="AI, artificial, intelligence, ContentCarousel, AI, solutions, intelligent automation" />

      </Helmet>
    </div>
      <Navigation />,
    <divclassName = "min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900" />
        {/* Hero Section */,;}
        <section className="relative py-20 px-4 overflow-hidden" />,
    <divclassName="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20" />,
    <divclassName="relative max-w-7 xl mx-auto text-center" />,
    <h1className="text-5 xl md: text-7 xl font-bold text-white mb-6 leading-tight" />
ContentCarousel
            </h1>
            <pclassName="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto leading-relaxed" />
Advanced ContentCarousel solution for modern businesses.
            </p>,<divclassName="flex flex-col sm: flex-row gap-4 justify-center" />
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
Get Started
                <ArrowRightclassName="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
Learn More
              </button>

          ,</section>
        {/* Features Section */;}
        <section className="py-20 px-4" />,
    <divclassName="max-w-7 xl mx-auto" />,
    <divclassName="text-center mb-16" />,
    <h1 className="text-4 xl font-bold text-white mb-4">Key Features</h2>
              <pclassName="text-xl text-gray-300 max-w-3 xl mx-auto" />
Powerful AI-driven features designed to transform your business operations
              </p>,
    <divclassName="grid md: grid-cols-2 lg:grid-cols-4 gap-8" />);
              {features.map((feature,index) => (;
                <divkey = {index,};className = "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" />
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />,
    <h1 className = "text-xl font-semibold text-white mb-3">{feature.title,}</h3>
                  <p className = "text-gray-300 mb-4">{feature.description,}</p>
                  <ul className="space-y-2">;
                    {feature.benefits.map((benefit, idx) => (;
                      <li key = {idx,};className = "flex items-center text-sm text-gray-300">
                        <CheckCircleclassName="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit,}
                      </li>
                    ))}
                  </ul>

              ))}

        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5" />,
    <divclassName="max-w-7 xl mx-auto" />,
    <divclassName="text-center mb-16" />,
    <h1 className="text-4 xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <pclassName="text-xl text-gray-300 max-w-3 xl mx-auto" />
Experience the benefits of cutting-edge AI technology
              </p>,
    <divclassName="relative" />,
    <div className="overflow-hidden rounded-xl">;
      <divclassName="flex transition-transform duration-500 ease-in-out&quot;
style={{ transform: "`translateX(-${currentSlide * 100",};%)`} />
    </div>{slides.map((slide, index) => ("
<divkey = {index,};className = "w-full flex-shrink-0" />,
    <divclassName="bg-white/10 backdrop-blur-sm rounded-xl p-8" />,
    <divclassName="text-center mb-8" />,
    <divclassName="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" />
                        <slide.icon className="h-10 w-10 text-white" />,
    <h1 className = "text-2 xl font-bold mb-4">{slide.title,}</h3>
                      <p className = "text-purple-100 text-lg max-w-2 xl mx-auto">{slide.description,}</p>,;
    <divclassName="grid grid-cols-1 md: grid-cols-2 gap-4" />{slide.features.map((feature,featureIndex) => (;
                        <divkey = {featureIndex,};className = "flex items-center" />
                          <CheckCircleclassName="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />,
    <span className = "text-purple-100">{feature,}</span>,
    <divclassName="flex-1" />,
    <h1 className = "text-2 xl font-boldtext-gray-900 mb-4">{slide.title,}</h3>
                        <pclassName = "text-gray-600 mb-6" />
            {slide.description,}
          </p>
                        <ul className="space-y-2" />;
                          {slide.features.map((feature, index) => (;
                            <li key = {index,};className = "flexitems-centertext-gray-700" />
                              <CheckCircleclassName="h-5 w-5 text-green-500 mr-2" / />
                              {feature,}
                            </li>
                          ))}
                        </ul>

              ))},
    <divclassName="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4" />,
    <divclassName = "max-w-7 xl mx-auto" />{/* Header */,},
    <divclassName="text-center mb-16" />,
    <h1 className="text-3 xl md: text-4 xl font-bold text-white mb-6" /></h2>
Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3 xl mx-auto">Explore our comprehensive suite of AI and IT solutions designed to transform your business.</p>p>

        {/* Carousel Container */,}
        {/* Carousel */;},
    <divclassName="relative" />,
    <divclassName="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2 xl p-8 md: p-12 overflow-hidden" />,<divclassName="flex items-center justify-between mb-8" />,
    <divclassName="flex items-center gap-4" />,
    <divclassName="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center" />
                  <currentSlideData.icon className="w-8 h-8 text-slate-900" />

                {/* Features */,;},
    <divclassName="space-y-4" />,;
    <h1 className="text-lg font-semibold text-white mb-4">Key Features: "</h4>",<divclassName="grid grid-cols-1 sm: grid-cols-2 gap-3" />{currentSlideData.features.map((feature,index) => (;
                      <divkey = {index,};className = "flex items-center space-x-3" />
                        <CheckCircleclassName="w-5 h-5 text-green-400 flex-shrink-0" />,
    <span className = "text-gray-300">{feature,}</span>
    </div>
  ))}
                  </div>
                </div>
                {/* Stats */}
                {currentSlideData.stats && (,;
    <div className="grid grid-cols-3 gap-6">{currentSlideData.stats.map((stat, index) => (;
      <divkey = {index,};className = "text-center" / />
    </div>,
    <div className = "text-2 xl font-bold text-white mb-1">
      {stat.value,}</div>,
    <div className = "text-gray-400 text-sm">{stat.label,}</div>
                      </div>
                    ))}
                  </div>
                )}
                {/* CTA */},
    <divclassName="flex flex-col sm: flex-row gap-4" / />
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" />
                    <ZapclassName="w-5 h-5" />
Get Started
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover: bg-white/20 transition-all duration-300" />
                    <ArrowRightclassName="w-5 h-5" />
Learn More
                </div>,</div>
              {/* Visual Element */},
    <divclassName="relative" / />,
    <divclassName="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2 xl flex items-center justify-center" / />,
    <divclassName="text-center" / />,
    <divclassName="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center" / />
                      <currentSlideData.icon className="w-16 h-16 text-white" />
                    </div>,
    <div className = "text-4 xl font-bold text-white mb-2">{currentSlideData.title,}</div>div>,
    <div className = "text-gray-300">Slide {currentSlide + 1,} of {slides.length}</div>div>
                  </div>
                </div>
              </div>
            </div>,;
    <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">{currentSlideData.features.map((feature,index) => (;
      <divkey = {index,};className = "flex items-center gap-3" / />
    </div>
                  <CheckCircleclassName="w-5 h-5 text-cyan-400 flex-shrink-0" />,
    <span className = "text-gray-300">{feature,}</span>
                </div>
              ))}
            </div>
            {/* Stats */}
            {currentSlideData.stats && (,
    <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700">;
      {currentSlideData.stats.map((stat,index) => (;
      <divkey = {index,};className = "text-center" / />
    </div>,
    <div className = "text-3 xl font-bold text-white mb-1">
      {stat.value,}</div>,
    <div className = "text-sm text-gray-400">{stat.label,}</div>
                  </div>
                ))}
              </div>
            )}
          </div>;
          <button;
onClick = {prevSlide,};className = "absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20" />
            <ChevronLeftclassName="h-6 w-6" />
          </button>;
          <button;
            onClick={nextSlide,};className = "absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20" />
            <ChevronRightclassName="h-6 w-6" />
          </button>
        </div>
{/* Slide Indicators */,}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20">
            <ChevronLeftclassName="w-6 h-6" />
          </button>;
          <button;
onClick={nextSlide,};className = "absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
           />
            <ChevronRightclassName="w-6 h-6" />
          </button>
        </div>,<divclassName=quotrelative max-w-7 xl mx-auto text-centerquot / />,
    <h1className=quottext-5 xl md text-7 xl font-bold text-white mb-6 leading-tightquot />
ContentCarousel</h1>
            <pAdvanced ContentCarousel solution for modern businesses</p / /><divclassName=quotflex flex-col sm flex-row gap-4 justify-centerquot / /><button className=quotbg-emerald-600 hover bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-centerquot>
Get Started  <ArrowRightclassName=quotml-2 h-5 w-5 quot />

              </button>
              <button className=quotborder border-emerald-400 text-emerald-400 hover bg-emerald-400 hovertext-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 quot>
Learn More</button>
            </div>
          </div>
        </section>
/ Features Section /
        <section className=quotpy-20 px-4 quot /><divclassName=quotmax-w-7 xl mx-autoquot / />,
    <divclassName=quottext-center mb-16 quot / /><h2 className=quottext-4 xl font-bold text-white mb-4 quot>Key Features</h2>
              <pPowerful AI-driven features designed to transform your business operations</p />

            </div>,
    <divclassName=quotgrid md grid-cols-2 lggrid-cols-4 gap-8 quot />
featuresmapfeature index => 
                </div><><divkey=index className=quotbg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 quot / /><featureicon className=quoth-12 w-12 text-emerald-400 mb-4 quot / /><h3 className=quottext-xl font-semibold text-white mb-3 quot>featuretitle</h3>
                  <p className=quottext-gray-300 mb-4 quot>featuredescription</p>
                  <ul className=quotspace-y-2 quot>featurebenefitsmapbenefit idx => 
                      </ul><li key=idx className=quotflex items-center text-sm text-gray-300 quot /><CheckCircleclassName=quoth-4 w-4 text-emerald-400 mr-2 flex-shrink-0 quot />benefit</li>

                  </ul>
                </div>

            </div>
          </div>
        </section>
/ Benefits Section /
        <section className=quotpy-20 px-4 bg-white/5 quot /><divclassName=quotmax-w-7 xl mx-autoquot / />,
    <divclassName=quottext-center mb-16 quot / /><h2 className=quottext-4 xl font-bold text-white mb-4 quot>Why Choose Our Solution</h2>
              <pExperience the benefits of cutting-edge AI technology</p />

        </div>,
    <div className=quotrelativequot />
      <divslidesmapslide index = / />
    </div>
<><divkey=index className=quotw-full flex-shrink-0 quot / />,
    <divclassName=quotbg-white/10 backdrop-blur-sm rounded-xl p-8 quot / />,
    <divclassName=quottext-center mb-8 quot / />,
    <div className=quotbg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 quot /><slideicon className=quoth-10 w-10 text-whitequot /> </div>,
    <h1 className=quottext-2 xl font-bold mb-4 quot>slidetitle</h3>
                      <p className=quottext-purple-100 text-lg max-w-2 xl mx-autoquot>slidedescription</p>
                    </div>
                    <><div className=quotgrid grid-cols-1 mdgrid-cols-2 gap-4 quot>slidefeaturesmapfeature featureIndex => 
      <divkey=featureIndex className=quotflex items-centerquot / />
    </div><CheckCircleclassName=quoth-5 w-5 text-green-400 mr-3 flex-shrink-0 quot / /><span className=quottext-purple-100 quot>feature</span>
                        </div>;
                      </div>;
                      <><div className="flex-1" />;
    </div>
    <h1 className = "text-2 xl font-bold text-gray-900 mb-4">slidetitle</h3>
                        <p className="text-gray-600 mb-6">slidedescription</p>
                        <ul className="space-y-2">slidefeaturesmapfeature index => 
                            </ul><li key=index className="flex items-center text-gray-700" /><CheckCircleclassName="h-5 w-5 text-green-500 mr-2" />feature</li>

                        </ul>;
                      </div>;
                    </div>;

      <div/ Header /</div />
    </div>
    </div>,
    <div className=quottext-center mb-16 quot />;
    </div>
    <h1 className = quottext-3 xl md text-4 xl font-bold text-white mb-6 quot></h2>
Discover Our </h2><span className=quottext-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 quot>Solutions</span>
          </h2>
          <p className=quottext-xl text-gray-300 max-w-3 xl mx-autoquot>Explore our comprehensive suite of AI and IT solutions designed to transform your business</p>p>
        </div>
        / Carousel Container /
        / Carousel /
        <><divclassName=quotrelativequot / />,
    <divclassName=quotbg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2 xl p-8 md p-12 overflow-hiddenquot / />,
    <divclassName=quotflex items-center justify-between mb-8 quot / />,
    <div className=quotflex items-center gap-4 quot /><><div className=quotw-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-centerquot /><currentSlideDataicon className=quotw-8 h-8 text-slate-900 quot /> </div>
                / Features /,
    <divclassName=quotspace-y-4 quot / /><h4 className=quottext-lg font-semibold text-white mb-4 quot>Key Features </h4>,
    <div className=quotgrid grid-cols-1 smgrid-cols-2 gap-3 quot>currentSlideDatafeaturesmapfeature index => 
      <divkey=index className=quotflex items-center space-x-3 quot / />
    </div><CheckCircleclassName=quotw-5 h-5 text-green-400 flex-shrink-0 quot / /><span className=quottext-gray-300 quot>feature</span>
                      </div>

                  </div>
                </div>
                / Stats /
currentSlideDatastats  <><div className=quotgrid grid-cols-3 gap-6 quot>
      currentSlideDatastatsmapstat index => 
      <divstatvalue</div / />
    </div>,
    <div className=quottext-gray-400 text-smquot>
      statlabel</div>
                      </div>

                  </div>

                / CTA /
                <><divclassName=quotflex flex-col sm flex-row gap-4 quot / /><button className=quotinline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover from-purple-600 hoverto-blue-600 transition-all duration-300 transform hoverscale-105 quot /><ZapclassName=quotw-5 h-5 quot />Get Started</Zap><button className=quotinline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover bg-white/20 transition-all duration-300 quot /><ArrowRightclassName=quotw-5 h-5 quot />
Learn More</div>
              </div>
              / Visual Element /,
    <divclassName=quotrelativequot / />,
    <divclassName=quotaspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2 xl flex items-center justify-centerquot / />,
    <divclassName=quottext-centerquot / />,
    <div className=quotw-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-centerquot /><currentSlideDataicon className=quotw-16 h-16 text-whitequot /> </div>
                    <><div className=quottext-4 xl font-bold text-white mb-2 quot>currentSlideDatatitle</div>div>,
    <div className=quottext-gray-300 quot>Slide currentSlide  1 of slideslength</div>div>
                  </div>
                </div>
              </div>
            </div>,
    <div className=quotgrid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-6 quot>currentSlideDatafeaturesmapfeature index => </div>
                <><divkey=index className=quotflex items-center gap-3 quot / /><CheckCircleclassName=quotw-5 h-5 text-cyan-400 flex-shrink-0 quot / /><span className=quottext-gray-300 quot>feature</span>
                </div>

            </div>
            / Stats /
currentSlideDatastats  <div className=quotgrid grid-cols-1 mdgrid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700 quot>currentSlideDatastatsmapstat index => 
      <divstatvalue</div / />
    </div>,
    <div className=quottext-sm text-gray-400 quot>statlabel</div>
                  </div>

              </div>

          </div>
<button onClick=prevSlide className=quotabsolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20 quot /><ChevronLeftclassName=quoth-6 w-6 quot /> </button>
          <button onClick=nextSlide className=quotabsolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20 quot /><ChevronRightclassName=quoth-6 w-6 quot /> </button>

        </div>
/ Slide Indicators /
className=quotabsolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20 quot >
            <ChevronLeftclassName=quotw-6 h-6 quot /> </button>
          <button onClick=nextSlide className=quotabsolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20 quot  /><ChevronRightclassName=quotw-6 h-6 quot /> </button>      </div>

        {/* Slide Indicators */,;},
    <div className="flex justify-center mt-8 space-x-2">{slides.map((_, index) => (</div>;
            <button;
key = {index,};onClick = {() => goToSlide(index),};className = {`w-3 h-3 rounded-full transition-colors ${;
index === currentSlide ? 'bg-cyan-400' : 'bg-white/30';
              ,};`}
            />
          ))}
        </div>
{/* Additional Info */},
    <divclassName = "mt-16 text-center" / />,
    <divclassName="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4 xl mx-auto" / />,<divclassName="flex items-center justify-center gap-3 text-white" / />
              <StarclassName="w-6 h-6 text-yellow-400" />,
    <divclassName="text-left" / />,
    <div className="text-2 xl font-bold">4.9/5</div>,
    <div className="text-gray-400 text-sm">Customer Rating</div>
              </div>
            </div>,
    <divclassName="grid md: grid-cols-2 lg:grid-cols-3 gap-8" / />;
              {benefits.map((benefit,index) => (;
                <divkey = {index,};className = "flex items-start space-x-4" / />
                  <CheckCircleclassName="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit,}</p>
                </div>
    </>
  ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4" />,
    <divclassName="max-w-4 xl mx-auto text-center" / />,
    <h1 className="text-4 xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <pclassName="text-xl text-gray-300 mb-8" />
Join thousands of businesses already using our AI solutions
            </p>,
    <divclassName="flex flex-col sm: flex-row gap-4 justify-center" / />
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>

</div>
;}
 ContentCarouselPage
            <ArrowRightclassName = "w-5 h-5 ml-2" />
          </button>;
        </div>;
      </div>;
export default ContentCarousel; ,}
</pExperience>
</pPowerful>
}}}}
