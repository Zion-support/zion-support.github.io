import React from "react"
import React from 'react';
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
interface ServiceTemplateProps {}
  title: string
  description: string
  features: Array<{}
    title: string
    description: string
  }>
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title, description, _features, _}) => {
const ComponentName = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        Content
      </div>
        Content
      </div>
      <Helmet >
        Content
      </Helmet>
        Content
      </Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content={description} />
        Content
      </meta>
        Content
      </meta>
      </Helmet>
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        Content
      </div>
        Content
      </div>
        <div className="max-w-7xl mx-auto text-center">
        Content
      </div>
        Content
      </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Content
      </h1>
        Content
      </h1>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
        Content
      </span>
        Content
      </span>
              {title}
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Content
      </p>
        Content
      </p>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        Content
      </div>
        Content
      </div>
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
        Content
      </Link>
        Content
      </Link>
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
        Content
      </ArrowRight>
        Content
      </ArrowRight>
            </Link>
            <Link to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
        Content
      </Link>
        Content
      </Link>
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        Content
      </div>
        Content
      </div>
        <div className="max-w-7xl mx-auto">
        Content
      </div>
        Content
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        Content
      </div>
        Content
      </div>
            {features.map((feature, index) => ()
              <div key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
        Content
      </div>
        Content
      </div>
                <h3 className="text-xl font-semibold text-white mb-3">
        Content
      </h3>
        Content
      </h3>
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ServiceTemplate