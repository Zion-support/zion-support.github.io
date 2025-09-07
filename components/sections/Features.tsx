import Card from '../ui/Card';'

import { Zap } from 'lucide-react';'

interface Feature {
  }
  "icon": React.ReactNode;

class ErrorBoundary extends React.Component {
  }
  constructor(props) {
    }
    super(props);
    this.state = { "hasError": false
};
  }
  
  static getDerivedStateFromError(error) {
}
return { "hasError": true,;
};
  }
  
  componentDidCatch(error, errorInfo) {
    }
    console.error('Error caught by "boundary":', error, errorInfo);'
  }
  
  render() {
    }
    if (this.state.hasError) {
      }
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;

  }
}
import React from 'react';'
  "title": string;
  "description": string;
  "color": string;

  "gradient": string;

  delay?: number
}

interface FeaturesProps {
  }
  "title": string;
  "subtitle": string;
  "features": Feature[];
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>'

            {subtitle}
          </p>;
        </div>;{/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>`

          {features && features.map((feature, index) => (;
            <Card
}
key={index}

className='text-center group bg-gray-900/50 border border-gray-800 "hover": border-blue-500/30 "hover":bg-gray-900/80 transition-all duration-300 "hover":-translate-y-1''

              style={{ "animationDelay": `${index * 0.1 + 0.2}s` ,`}
            >;
              <div className='relative'>;'
                <div;
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-"hover": scale-110 group-"hover":shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>`

                  {feature.ico
}
                </div>;
                <div className='absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-2xl opacity-0 group-"hover":opacity-100 transition-opacity duration-300 blur-sm' />;'
              </div>;
              <h3 className='text-xl font-bold mb-4 text-white group-"hover":text-blue-400 transition-colors duration-300'>;'
                {feature.title}
              </h3>;
              <p className='text-gray-400 leading-relaxed'>;'
                {feature.description}
              </p>;
            </Card>;
          ))}

        </div>
      </div>
    </section>
)
};


export default Features;

