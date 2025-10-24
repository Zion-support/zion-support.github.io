import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {;
    Package,
    Target,
    Zap,
    Settings,
    CheckCircle,
    Star,
    Package,
    Target,
    Settings from 'lucide-react';
  }
const AIInventoryManagerPage: React.FC = () => {
  ;
    const features = [;
    {;
  // TODO: Add content;
 ,
    }
  icon: Packag,;
      title: 'Inventory Tracking,',;
      description: 'value',;
  ];
      benefits: ['Real-time tracking,', 'Stock monitoring', 'Automated alerts'];
    },;
      icon: Targe,;
      title: 'Demand Forecasting,',;
      description: 'Intelligent demand prediction and planning',;
      benefits: ['Demand prediction,', 'Seasonal analysis', 'Trend forecasting'];
      icon: Setting,;
      title: 'Inventory Analytics,',;
      description: 'Comprehensive inventory analytics and insights',;
      benefits: ['Performance metrics,', 'Cost analysis', 'Optimization recommendations'];
    }
  ];
  return (;
          <div>Coming Soon</div>
  );
          <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'></div>
      <Navigation /></Navigation>
      <main className='container mx-auto px-4 py-16 pt-24'></main>
        <section className='text-center mb-16'></section>
          <h1 className='text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse'></h1>
// AI Inventory Manage,r,;
          </h1>
          <p className='text-xl text-cyan-400 mb-8 font-medium neon-pulse'></p>
// Smart Inventory Management,;
          </p>
          <p className='text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed'></p>
// Optimize your inventory with AI-powered management solutions.;
            Track stock, predict demand, and automate reordering for maximum efficiency.;
          <div className='flex flex-col sm: flex-row gap-4 justify-center items-center'></div>
            <a;
              href='/contact';
              className='cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300'
// ></a>
//               Get Starte,d,;
          </a>
              href='tel: +13024640950';
              className='flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300'
<Package className='w-5 h-5' /></Package>
              +1 302 464 0950;
          </div>
        </section>
        <section className='mb-16'></section>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text'></h2>
// Inventory Management Feature,s,;
          </h2>
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8'></div>
            {;
    features.map((featur,e,;
    index) => ();
  }
  }
  }
          <div key={ ind, e, x }className='cyber-card p-6 hover: scale-105 transition-all duration-300'></div>
                <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto'></div>
                  <feature.icon className='w-8 h-8 text-white' /></feature>
                <h3 className='text-xl font-bold text-white mb-4 text-center neon-text'></h3>
                  {;
    feature.title;
 , }
                </h3>
                <p className='text-gray-300 mb-6 text-center text-sm leading-relaxed'></p>
                  {;
    feature.description;
  }
                <ul className='space-y-2'></ul>
                  {;
    feature.benefits.map((benefit,
    benefitIndex) => ();
  }
  }
  }
          <li key={ benefitInd, e, x }className='flex items-center text-xs text-gray-300'></li>
                      <CheckCircle className='w-3 h-3 text-green-400 mr-2 flex-shrink-0' /></CheckCircle>
                      {;
    benefit;
  }
                    </li>
                  ))}
                </ul>
      </main>
      <Footer /></Footer>
  );
}
export default AIInventoryManagerPage;