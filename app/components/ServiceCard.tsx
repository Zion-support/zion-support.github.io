import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;,
    description: string;
  features: string[];
  price?: string;
  popular?: boolean;
  href?: string;
}

const ServiceCard: React.F</{ className?: string }>C</{ className?: string }><ServiceCardProps>= memo(({,
    icon: Icon,
  title,
  description,
  features,
  price,
  popular = false,)
    href = '/contact'
}) =></ServiceCardProps> </ServiceCardProps>{</ServiceCardProps>
  return <//ServiceCardProps>(<//ServiceCardProps><div className={`quantum-card p-8 space-y-6 relative ${popular ? 'border-2 border-cyan-400' : ''}`}>{popular &</div className={`quantum-card p-8 space-y-6 relative ${popular ? 'border-2 border-cyan-400' : ''}`}>&</div className={`quantum-card p-8 space-y-6 relative ${popular ? 'border-2 border-cyan-400' : ''}`}> </div>(</div>
       <//div> <//div><div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        </div className="absolute -top-3 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-3 left-1/2 transform -translate-x-1/2"> </div><span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popu</span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">l</span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">a</span>r</span>
      <//span> <//span> </div>
      )}

     <//div> <//div><div className="text-center space-y-4">
       </div className="text-center space-y-4"> </div className="text-center space-y-4"><div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
        </div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto"> </div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto"> </div><Icon className="w-8 h-8 text-cyan-400" />
       </Icon className="w-8 h-8 text-cyan-400" /> </Icon className="w-8 h-8 text-cyan-400" /><h3 className="text-2xl font-bold text-white">{title</h3 className="text-2xl font-bold text-white">}</h3 className="text-2xl font-bold text-white"><p className="text-gray-300">{descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
        {price &&<//p> <//p><div className="text-cyan-400 font-bold text-xl">{pri</div className="text-cyan-400 font-bold text-xl">c</div className="text-cyan-400 font-bold text-xl">e</div>}</div>}
    <//div> <//div> </div>

     <//div> <//div><div className="space-y-3">
      </div className="space-y-3"> </div className="space-y-3"> </div><h4 className="text-white font-semibold">Key Features</h4 className="text-white font-semibold">:</h4 className="text-white font-semibold"><ul className="space-y-2">{features.map((feature, index) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
           <//ul> <//ul><li key={index} className="flex items-center text-gray-300">
             </li key={index} className="flex items-center text-gray-300"> </li key={index} className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{featur</CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >e</CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >}</CheckCircle>
          <//CheckCircle> <//CheckCircle> </CheckCircle>
          ))}
      <//CheckCircle> <//CheckCircle> </ul>
    <//ul> <//ul> </div>

     <//div> <//div><Link
        to={href}
        className="w-full cyber-button inline-flex items-center justify-center px-6 py-3 text-center font-semibold rounded-lg transition-all duration-300 group"
      >
       </Link
        to={href}
        className="w-full cyber-button inline-flex items-center justify-center px-6 py-3 text-center font-semibold rounded-lg transition-all duration-300 group"
      > </Link
        to={href}
        className="w-full cyber-button inline-flex items-center justify-center px-6 py-3 text-center font-semibold rounded-lg transition-all duration-300 group"
      ><span>Get Star</span>t</span>e</span>d</span>
       <//span> <//span><ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </Link>
  <//Link> <//Link> </div>
  );

ServiceCard.displayName = 'ServiceCard';
export default ServiceCard<//div>;<//div>