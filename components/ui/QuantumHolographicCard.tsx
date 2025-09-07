}
}
}
}
}) 
}
                 />;
                  <Check className='w-3 h-3 text-green-400 flex-shrink-0' />;
                  <span />{feature}</span>;
                </motion.div>;
              ))}
            </div>;
          </div>;
          {/* Market data */}<div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-700/30" />;"
            <div className="flex items-center justify-between mb-2" />;"
              <span className="text-sm font-semibold text-blue-300" />Market Position</span>;"
              <TrendingUp className="w-4 h-4 text-green-400" />;
            </div>;
          </div>;
          {/* ROI and competitors */}<div className='bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-700/30' />;
            <div className='flex items-center justify-between mb-2' />;
              <span className='text-sm font-semibold text-blue-300' />;
                Market Position;
              </span>;
              <TrendingUp className='w-4 h-4 text-green-400' />;
            </div>;
            <p className='text-xs text-gray-300 leading-relaxed' />;
              {service.marketPosition}
            </p>;
            <div className='flex items-center justify-between mt-2 text-xs' />;
              <span className='text-cyan-300' />{service.marketSize}</span>;
              <span className='text-green-300' />;
                {service.growthRate} growth;
              </span>;
            </div>;
          </div>;
          {/* ROI and competitors */}
<div className='grid grid-cols-2 gap-4 mb-6' />;
            <div className='bg-green-900/20 rounded-lg p-3 border border-green-700/30' />;
              <div className='text-sm font-semibold text-green-300 mb-1' />;
                ROI;
              </div>;
              <div className='text-xs text-gray-300' />{service.roi}</div>;
            </div>;
            <div className='bg-orange-900/20 rounded-lg p-3 border border-orange-700/30' />;
              <div className='text-sm font-semibold text-orange-300 mb-1' />;
                Competitors;
              </div>;
              <div className='text-xs text-gray-300' />;
                {service.competitors.slice(0, 2).join(', ')}</div>;
            </div>;
          </div>;
          {/* Contact information */}</h4>;"
            <div className="space-y-2 text-sm text-gray-300" />;"
              <div className="flex items-center space-x-2" />;"
                <span className="text-blue-400" />📱</span>;
                <span />{service.contactInfo.mobile}</span>;
              </div>;"
              <div className="flex items-center space-x-2" />;"
                <span className="text-green-400" />✉️</span>;
                <span />{service.contactInfo.email}</span>;
              </div>;"
              <div className="flex items-center space-x-2" />;"
                <span className="text-purple-400" />📍</span>;"
                <span className="text-xs" />{service.contactInfo.address}</span>;
<div className='bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50' />;
            <h4 className='text-white font-semibold mb-3 flex items-center space-x-2' />;
              <Shield className='w-4 h-4 text-blue-400' />;
              <span />Contact & Support</span>;
            </h4>;
            <div className='space-y-2 text-sm text-gray-300' />;
              <div className='flex items-center space-x-2' />;
                <span className='text-blue-400' />📱</span>;
                <span />{service.contactInfo.mobile}</span>;
              </div>;
              <div className='flex items-center space-x-2' />;
                <span className='text-green-400' />✉️</span>;
                <span />{service.contactInfo.email}</span>;
              </div>;
              <div className='flex items-center space-x-2' />;
                <span className='text-purple-400' />📍</span>;
                <span className='text-xs' />{service.contactInfo.address}</span>;
              </div>;
            </div>;
          </div>;
            </div>;
          </div>;{/* Market data */}
          <div className='bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-6 border border-blue-700/30' />;
            <div className='flex items-center justify-between mb-2' />;
              <span className='text-sm font-semibold text-blue-300' />;
                Market Position;
              </span>;
              <TrendingUp className='w-4 h-4 text-green-400' />;
            </div>;
            <p className='text-xs text-gray-300 leading-relaxed' />;
              {service && service.marketPosition}
            </p>;
            <div className='flex items-center justify-between mt-2 text-xs' />;
              <span className='text-cyan-300' />{service && service.marketSize}</span>;
              <span className='text-green-300' />;
                {service && service.growthRate} growth;
              </span>            </div>;
          </div>;"
          {/* ROI and competitors */}            <p className="text-xs text-gray-300 leading-relaxed" />{service && service.marketPosition}</p>;"
            <div className="flex items-center justify-between mt-2 text-xs" />;"
              <span className="text-cyan-300" />{service && service.marketSize}</span>;"
              <span className="text-green-300" />{service && service.growthRate} growth</span>;
          </div>;
          {/* ROI and competitors */}
          <div className='grid grid-cols-2 gap-4 mb-6' />;
            <div className='bg-green-900/20 rounded-lg p-3 border border-green-700/30' />;
              <div className='text-sm font-semibold text-green-300 mb-1' />;
                ROI;
              </div>;
              <div className='text-xs text-gray-300' />{service && service.roi}</div>;
            </div>;
            <div className='bg-orange-900/20 rounded-lg p-3 border border-orange-700/30' />;
              <div className='text-sm font-semibold text-orange-300 mb-1' />;
                Competitors;
              </div>;"
              <div className='text-xs text-gray-300' />                {service && service.competitors.slice(0, 2).join(', ')}<div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30" />;"
              <div className="text-sm font-semibold text-orange-300 mb-1" />Competitors</div>;"
              <div className="text-xs text-gray-300" />;
              </div>;
            </div>;
          </div>;
          {/* Contact information */}
          <div className='bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50' />;
            <h4 className='text-white font-semibold mb-3 flex items-center space-x-2' />;
              <Shield className='w-4 h-4 text-blue-400' />;
              <span />Contact & Support</span>;
            </h4>;
            <div className='space-y-2 text-sm text-gray-300' />;
              <div className='flex items-center space-x-2' />;
                <span className='text-blue-400' />📱</span>;
                <span />{service && service.contactInfo.mobile}</span>;
              </div>;
              <div className='flex items-center space-x-2' />;
                <span className='text-green-400' />✉️</span>;
                <span />{service && service.contactInfo.email}</span>;
              </div>;
              <div className='flex items-center space-x-2' />;
                <span className='text-purple-400' />📍</span>;
                <span className='text-xs' />{service && service.contactInfo.address}</span>              </div>              <span />Contact & Support</span>;
            </h4>;"
            <div className="space-y-2 text-sm text-gray-300" />;"
              <div className="flex items-center space-x-2" />;"
                <span className="text-blue-400" />📱</span>;
                <span />{service && service.contactInfo.mobile}</span>;
              </div>;"
              <div className="flex items-center space-x-2" />;"
                <span className="text-green-400" />✉️</span>;
                <span />{service && service.contactInfo.email}</span>;
              </div>;"
              <div className="flex items-center space-x-2" />;"
                <span className="text-purple-400" />📍</span>;"
                <span className="text-xs" />{service && service.contactInfo.address}</span>;
              </div>;
            </div>;
          </div>;{/* ROI and competitors */}</div>;
            </div>;
          </div>;
          {/* CTA Button */}

          <motion.a;
href={service.link}

className='group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25'

            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }
}
export default QuantumHolographicCard