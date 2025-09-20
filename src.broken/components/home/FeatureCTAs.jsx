import React from 'react',
import { Link  } from 'react-router-dom',
export default function Page() {
,
    {

      title: 'Quantum Computing Solutions',
      description:'
        'Leverage the power of quantum computing for complex problem-solving',
      icon: ("
        <Zap className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />
      ),
      link: '/quantum',
      badge: 'Cutting-Edge',
      details:'
        'Explore quantum computing applications for optimization, cryptography, and scientific research.'},
    {

      title: 'AI Recruiting Platform',
      description: 'Streamline your hiring process with intelligent automation',
      icon: ("
        <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />
      ),
      link: '/zion-hire-ai',
      badge: 'Premium',
      details:'
        'Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.'}
  ],

  const ctaItems = [{

      title: 'Find Talent',
      description: 'Connect with verified tech professionals',
      href: '/talent',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700'},
    {

      title: 'Explore Services',
      description: 'Discover innovative solutions',
      href: '/services',
      icon: Rocket,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'from-purple-600 to-purple-700'},
    {

      title: 'Get Quote',
      description: 'Request custom pricing',
      href: '/contact',
      icon: Target,
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700'},
    {

      title: 'Learn More',
      description: 'Explore our resources',
      href: '/resources',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'from-orange-600 to-orange-700'}
  ],

  return ("
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="text-center mb-16">"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our{' '}"
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover comprehensive solutions designed to accelerate your
            business growth and digital transformation.</p>
        </div>
"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}"
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300"
            >"
              <div className="flex items-start justify-between mb-4">"
                <div className="text-slate-300">{feature.icon}</div>
                {feature.badge && ("
                  <span className="px-3 py-1 text-xs font-medium bg-zion-purple/20 text-zion-purple border border-zion-purple/30 rounded-full">
                    {feature.badge}
                  </span>
                )}
              </div>"
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>"
              <p className="text-gray-300 text-sm mb-4">
                {feature.description}
              </p>"
              <p className="text-gray-400 text-sm mb-4">{feature.details}</p>
              <Link
                to={feature.link}"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200"
              >
                Learn More"
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaItems.map((item, index) => ("
            <Link key={index} to={item.href} className="group block">"
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-xl p-6 text-center hover:border-slate-500/50 transition-all duration-300 group-hover:scale-105">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:${item.hoverColor} transition-all duration-300`}
                >"
                  <item.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                  {item.title}
                </h3>"
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  ),
}
'"`