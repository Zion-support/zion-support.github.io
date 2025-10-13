import React from 'react';
 origin/cursor/analyze-improve-and-deploy-application-1507;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /><Helmet /><title>ServiceCard | Zion Tech Group</title>
        <meta name="description" content="Professional ServiceCard services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ServiceCard, AI solutions, IT services, Zion Tech Group, servicecard" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" /><div className="max-w-7xl mx-auto" /><div className="text-center" /><h1 className="text-4xl md:text-6xl font-bold text-white mb-6" /><span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ServiceCard</span>
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced servicecard solutions. 
              Powered by cutting-edge AI technology and industry expertise.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started;
                </button><ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More</button>
              </button>
            </div>
 origin/cursor/analyze-improve-and-deploy-application-1232;
          </div>
        </div>
      </section>
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}
/**
 * Reusable ServiceCard component with accessibility features;
 */
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className = '',
}) => {
  return (
    </ServiceCardProps><article ;
      className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}
      role="article"
    >
      {icon && (
        </article><div className="mb-4 text-indigo-600" aria-hidden="true">
          {icon}</div>
        </div>
      )}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        {title}</h3>
      </h3>
      <p className="text-gray-600">
        {description}</p>
      </p>
    </article>
 origin/cursor/analyze-improve-and-deploy-application-1247
;