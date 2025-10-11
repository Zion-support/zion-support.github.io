const NextPage: React.FC = () => 
import {  Helmet  } from 'react-helmet-async'import {  CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe   } from 'lucide-react'
const Next.dPage: React.FC = () => 
    },
    
    },
    
    },
    
    }
  ]
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  openGraph?: 
    }>;
    locale?: string;
    type?: string;
    authors?: Array<{ name: string; url?: string }> | string[]
    publishedTime?: string;
  }
  twitter?: 
  }
  robots?: 
    }
  }
  verification?: 
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div><div className="text-center mb-16"></div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Why Choose Our Next.d?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Our next.d solutions deliver unmatched performance, security, and scalability.
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div key={index} className="flex items-start space-x-3"></div><CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg"></p></p>{benefit}
            ))}
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-4xl mx-auto text-center"></div><div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Ready to Get Started?
            <p className="text-xl text-purple-100 mb-8"></p></p>
              Contact our experts to discuss your next.d needs and get a customized solution.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div><button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
                <Mail className="mr-2 h-5 w-5" />
                Email Us
  )
}
export default Next.dPage
// Type definitions for Next.js compatibility in Vite
export interface Metadata 
  authors?: Array<{ name: string; url?: string }> | string[]
  creator?: string
  publisher?: string
  formatDetection?: 
  }
  metadataBase?: URL
  alternates?: 
  }
  openGraph?: 
    }>
    locale?: string
    type?: string
    authors?: Array<{ name: string; url?: string }> | string[]
    publishedTime?: string
  }
  twitter?: 
  }
  robots?: 
    }
  }
  verification?: 
  }
}

export interface MetadataRoute 
}

export interface MetadataRouteSitemap extends MetadataRoute 
}

// Custom Next.js types
export interface NextPageProps 
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

}

}

// Route handlers
export interface RouteHandler 
}

// Dynamic route types
export interface DynamicRoute 
  params: { [key: string]: string }
}

// Static generation types
export interface StaticProps 
  props: { [key: string]: any }
}

// ISR types
export interface ISRConfig 
}

// Edge runtime types
export interface EdgeRuntime 
}

// Node.js runtime types
export interface NodeRuntime 
}

// Extend Next.js types
declare module 'next' 
    }
  }
}

</Helmet>
