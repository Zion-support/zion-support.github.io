import React from 'react''
import { Link } from 'react-router-dom''
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}"
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      
      {/* Animated background elements */}"
      <div className="absolute inset-0 overflow-hidden">"
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>"
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>"
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      {/* Content */}"
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Transform Your Business with"
          <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI & Technology
          </span>
        </h1>
        "
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
          We deliver cutting-edge AI solutions, cloud infrastructure, and digital transformation 
          services that drive growth and innovation for modern enterprises.
        </p>
"
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link"
            to="/contact""
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
          >
            Get Started Today"
            <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          "
          <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 group">"
            <PlayIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}"
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">"
          <div className="text-center">"
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>"
            <div className="text-gray-300">Happy Clients</div>
          </div>"
          <div className="text-center">"
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>"
            <div className="text-gray-300">Projects Completed</div>
          </div>"
          <div className="text-center">"
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>"
            <div className="text-gray-300">Awards Won</div>
          </div>"
          <div className="text-center">"
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>"
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}"
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">"
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">"
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
export default Hero'"