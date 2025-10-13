interface PromotionBanner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
  textColor: string;
  icon: string;
  stats?: {
    value: string;
    label: string;
  }[];
 cursor/analyze-improve-and-deploy-application-8fa5
 cursor/fix-errors-and-merge-to-main-cd7c
 cursor/website-audit-and-update-with-deployment-c0e8
 origin/cursor/analyze-improve-and-deploy-application-1247
  const features = [
[
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI to automate and optimize your business processes.',
icon: Zap
    },
 cursor/analyze-improve-and-deploy-application-8fa5
 cursor/fix-errors-and-merge-to-main-cd7c
 cursor/website-audit-and-update-with-deployment-c0e8

return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
 cursor/analyze-improve-and-deploy-application-8fa5
 cursor/fix-errors-and-merge-to-main-cd7c
 cursor/website-audit-and-update-with-deployment-c0e8
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            </div>
          ))};
        </div>
<div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-purple-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100 mb-4">Happy Clients</div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100 mb-6">Uptime</div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center mx-auto">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
 origin/cursor/analyze-improve-and-deploy-application-1247
 origin/cursor/analyze-improve-and-deploy-application-1460
            </div>
          ))}
        </div>

 origin/cursor/analyze-improve-and-deploy-application-0fac
          </div>
        </div>
      </section>
 origin/cursor/analyze-improve-and-deploy-application-1507
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Transform Your Business Today</h2>
        <p className="text-xl text-gray-300 mb-6">
          Join thousands of businesses already using our AI and IT solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center">
          Get Started Now
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-purple-100 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Solutions?</h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-100">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-purple-100 mb-6">
              Contact us today for a free consultation and discover how we can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Our Services
              </button>
            </div>
          </div>
        </div> origin/cursor/analyze-improve-and-deploy-application-1460
 origin/cursor/analyze-improve-and-deploy-application-1507
      </div>
    </div>
 origin/cursor/analyze-improve-and-deploy-application-1247
 origin/cursor/analyze-improve-and-deploy-application-1460
