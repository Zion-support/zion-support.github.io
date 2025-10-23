'use client'
import React, {useStateuseEffect} from 'react'
import {ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp} from 'lucide-react'
interface Slid e {icon: React.ComponentType<an y>title: stringdescription: stringfeatures: string[]
  stats?: {
    value: stringlabel: string
 }[]
}
constContentCarousel: React.FC= () => {const [currentSlidesetCurrentSlide] = useState(0)
  constslides: Slide[] = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '9 5%', label: 'Accuracy Rate'},
        {value: '10 x', label: 'Faster Processing'},
        {value: '2 4/7', label: 'Automation'}
      ]
    },
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
      stats: [
        { value: '9 9.9%', label: 'Uptime'},
       {value:'<100ms', label: 'Response Time'},
        {value: '10 M+', label: 'Requests/Day'}
      ]
    },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '2 4/7 Monitoring'],
      stats: [
        { value: '25 6-bit', label: 'Encryption'},
        {value: 'SOC 2', label: 'Compliance'},
        {value: 'Zero', label: 'Security Breaches'}
      ]
    },
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support'],
      stats: [
        { value: '5 0+', label: 'Countries'},
        {value: '1 5+', label: 'Languages'},
        {value: '2 4/7', label: 'Global Support'}
      ]
    }
  ]
  constnextSlide= () =>{setCurrentSlide((prev) => (prev + 1) % slides.length)
 }
  constprevSlide= () => {setCurrentSlide((prev) => (prev -1+ slides.length) % slides.length)
 }
  useEffect(() => {consttimer= setInterval(nextSlide500 0)
    return () => clearInterval(timer)
 }, [])
  constcurrentSlideData= slides[currentSlide]
  return (
  <divclassName="relative bg-gradient-to-r from-purple-600to-blue-600text-whitepy-16px-4"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></className="text-3 xlmd:text-4 xlfont-boldmb-4">Discover Our Solutions

        <spanclassName="text-xl text-purple-100max-w-3xlmx-auto"></className="text-xl text-purple-100max-w-3xlmx-auto">Explore our comprehensive suite of AI-powered solutions designed to transform your business.
        </p></di><divclassName="relative"><divclassName="overflow-hiddenrounded-xl"><divclassName="flex transition-transform duration-500ease-in-out"
              style={{ transform:`translateX(-${currentSlide*100}%)` }}
            >{slides.map((slideindex)=>(<divkey={index}className="w-fullflex-shrink-0"><divclassName="bg-white/10backdrop-blur-smrounded-xlp-8"><divclassName="text-centermb-8"><divclassName="bg-white/20w-20h-20rounded-full flex items-center justify-centermx-automb-4"><slide.iconclassName="h-10w-10text-white" /></di><h3className="text-2 xlfont-boldmb-4">{slide.title}</h><pclassName="text-purple-100text-lg max-w-2xlmx-auto">{slide.description}</p></di><divclassName="grid grid-cols-1md:grid-cols-2gap-4">{slide.features.map((featurefeatureIndex) => (
                     <divkey={featureIndex}className="flexitems-center"><CheckCircleclassName="h-5 w-5text-green-400mr-3flex-shrink-0" /><spanclassName="text-purple-100">{feature}</spa></di>))}
                  </di></di></di>))}
  <divclassName="bg-gradient-to-br from-slate-900via-purple-900to-slate-900py-20px-4"><divclassName="max-w-7xlmx-auto">{/* Header */}
      <divclassName="text-centermb-16"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">DiscoverOur<spanclassName="text-transparent bg-clip-text bg-gradient-to-rfrom-blue-400to-purple-400">Solutions</spa></h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></className="text-xl text-gray-300max-w-3xlmx-auto">Explore our comprehensive suite of AI and IT solutions designed to transform your business.
        </p></di>{/* CarouselContainer */}
        {/* Carousel */}
      <divclassName="relative"><divclassName="bg-slate-80 0/50backdrop-blur-sm border border-slate-700rounded-2 xl p-8 md:p-12overflow-hidden"><divclassName="flex items-centerjustify-betweenmb-8"><divclassName="flexitems-centergap-4"><divclassName="w-1 6 h-16bg-gradient-to-r from-cyan-400to-purple-400rounded-xl flexitems-centerjustify-center"><currentSlideData.iconclassName="w-8 h-8text-slate-900" /></di>{/* Features */}
              <divclassName="space-y-4"><h4className="text-lg font-semiboldtext-whitemb-4">KeyFeatures:</h><divclassName="grid grid-cols-1sm:grid-cols-2gap-3">{currentSlideData.features.map((featureindex) => (
                   <divkey={index}className="flexitems-centerspace-x-3"><CheckCircleclassName="w-5 h-5 text-green-400flex-shrink-0" /><spanclassName="text-gray-300">{feature}</spa></di>))}
                </di></di>{/* Stats */}
                {currentSlideData.stats && (
                <divclassName="gridgrid-cols-3gap-6">{currentSlideData.stats.map((statindex) => (
                   <divkey={index}className="text-center"><divclassName="text-2 xl font-boldtext-whitemb-1">{stat.value}</di><divclassName="text-gray-400text-sm">{stat.label}</di></di>))}
                </di>)}
                {/* CTA */}
              <divclassName="flexflex-colsm:flex-rowgap-4"><spanclassName="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 0 to-blue-500text-white px-6 py-3 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-allduration-300transformhover:scale-105"></className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 0 to-blue-500text-white px-6 py-3 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-allduration-300transformhover:scale-105"><ZapclassName="w-5h-5" />Get Started

                <spanclassName="inline-flex items-center gap-2 bg-white/10text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20transition-allduration-300"></className="inline-flex items-center gap-2 bg-white/10text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20transition-allduration-300"><ArrowRightclassName="w-5h-5" />Learn More

              </di></di>{/* VisualElement */}
            <divclassName="relative"><divclassName="aspect-square bg-gradient-to-br from-purple-50 0/20to-blue-50 0/20rounded-2 xl flexitems-centerjustify-center"><divclassName="text-center"><divclassName="w-32h-32bg-gradient-to-r from-purple-500to-blue-500rounded-full mx-auto mb-6 flexitems-centerjustify-center"><currentSlideData.iconclassName="w-16h-16text-white" /></di><divclassName="text-4 xl font-boldtext-whitemb-2">{currentSlideData.title}
                  </di><divclassName="text-gray-300">Slide {currentSlide +1} of {slides.length}
                  </di></di></di></di></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-6">{currentSlideData.features.map((featureindex) => (
             <divkey={index}className="flexitems-centergap-3"><CheckCircleclassName="w-5 h-5 text-cyan-400flex-shrink-0" /><spanclassName="text-gray-300">{feature}</spa></di>))}
          </di>{/* Stats */}
            {currentSlideData.stats && (
            <divclassName="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-tborder-slate-700">{currentSlideData.stats.map((statindex) => (
               <divkey={index}className="text-center"><divclassName="text-3 xl font-boldtext-whitemb-1">{stat.value}</di><divclassName="text-smtext-gray-400">{stat.label}</di></di>))}
            </di>)}
        </di>{/* NavigationButtons */}
        <
            onClick={prevSlide}
           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"></
            onClick={prevSlide}
           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"><ChevronLeftclassName="h-6w-6" /></butto><
            onClick={nextSlide}
           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"></
            onClick={nextSlide}
           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"><ChevronRightclassName="h-6w-6" /></butto></di>{/* SlideIndicators */}
           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"
          >
          <ChevronLeftclassName="w-6h-6" /></butto><
            onClick={nextSlide}
           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"
          ></
            onClick={nextSlide}
           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20text-white p-3 rounded-full transition-colors duration-200backdrop-blur-lg borderborder-white/20"
          ><ChevronRightclassName="w-6h-6" /></butto></di>{/* SlideIndicators */}
      <divclassName="flex justify-centermt-8space-x-2">{slides.map((_index) => (
          <
             key={index}
              onClick={() =></
             key={index}
              onClick={() =>setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200${
                index=== currentSlide ? 'bg-cyan-40 0'  : 'bg-white/3 0'
            }`}
            />
          ))}
      </di>{/* AdditionalInfo */}
      <divclassName="mt-16text-center"><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xlmx-auto"><divclassName="flex items-center justify-centergap-3text-white"><StarclassName="w-6 h-6text-yellow-400" /><divclassName="text-left"><divclassName="text-2xlfont-bold">4.9/5</di><divclassName="text-gray-400text-sm">CustomerRating</di></di></di><divclassName="flex items-center justify-centergap-3text-white"><UsersclassName="w-6 h-6text-blue-400" /><divclassName="text-left"><divclassName="text-2xlfont-bold">10000+</di><divclassName="text-gray-400text-sm">HappyCustomers</di></di></di><divclassName="flex items-center justify-centergap-3text-white"><TrendingUpclassName="w-6 h-6text-green-400" /><divclassName="text-left"><divclassName="text-2xlfont-bold">99.9%</di><divclassName="text-gray-400text-sm">Uptime</di></di></di></di><divclassName="text-centermt-12"><spanclassName="bg-gradient-to-r from-cyan-50 0 to-purple-500text-white px-8 py-3 rounded-lghover:from-cyan-600 hover:to-purple-600transition-all duration-300font-semibold flexitems-centermx-auto"></spa></className="bg-gradient-to-r from-cyan-50 0 to-purple-500text-white px-8 py-3 rounded-lghover:from-cyan-600 hover:to-purple-600transition-all duration-300font-semibold flexitems-centermx-auto">Get Started Today
          <ArrowRightclassName="w-5h-5ml-2" /></butto></di></di></di>)
}
export defaultContentCarousel</butto></butto></butto></di></di></di></h></di></di></an>