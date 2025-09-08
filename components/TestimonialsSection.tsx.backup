import React from 'react';'
// Common interfaces for better type safety;

interface ApiResponse<T = unknown>  {"data": T;
  }
  "status": number;
  message?: string;
}

interface User  {"id": string;
  }
  "email": string;
  "name": string;
  "role": 'admin' | 'user' | 'guest';'
}

interface Service  {"id": string;
  }
  "name": string;
  "description": string;
  "price": number;
  "category": string;
}

interface FormData  {["key": string]: string | number | boolean | File;
}

interface ComponentProps  {className?: string;
  }
  children?: React.ReactNode;
  ["key": string]: unknown;
}import { motion  } from 'framer-motion';'
import { Card, CardContent  } from './ui/Card';'
import { Star, User  } from 'lucide-react';'

const "TestimonialsSection": React.FC = () => ;
const testimonials = [;
  {"name": 'Sarah Johnson',"role": 'CEO',"compunknown": 'TechStart Inc.',"content":;'
        'Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 40% and their cloud migration was seamless.',"rating": 5,"avatar": '/api/placeholder/64/64'},{"name": 'Michael Chen',"role": 'CTO',"compunknown": 'DataCorp',"content":;'
        'The cybersecurity audit they performed saved us from a potential breach. Their expertise and attention to detail are unmatched.',"rating": 5,"avatar": '/api/placeholder/64/64'},{"name": 'Emily Rodriguez',"role": 'VP of Operations',"compunknown": 'GrowthCo',"content":;'
        'Their custom development team delivered exactly what we needed, on time and within budget. Highly recommend their services.',"rating": 5,"avatar": '/api/placeholder/64/64'}];'
  return (<section className="py-20 bg-white">;"
      <div className="max-w-7xl mx-auto px-4 "sm": px-6 "lg":px-8">;"
        <motion.div;
<<<<<<< HEAD
          initial={ "opacity": 0, "y": 20 
}
          animate={ "opacity": 1, "y": 0 }
          transition={ "duration": 0.8 
=======
          initial={{ "opacity": 0, "y": 20 
}
          animate={{ "opacity": 1, "y": 0 }}
          transition={{ "duration": 0.8 
>>>>>>> origin/resolved-merge-conflicts
}
          className="text-center mb-16">"

          <h2 className="text-3xl "md":text-4xl font-bold text-gray-900 mb-4">;"
            What Our Clients Say;
          </h2>;
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
            Don&apos;t just take our word for it. Here&apos;s what our satisfied;
            clients have to say about working with us.;
          </p>;
        </motion.div>;
        <div className="grid grid-cols-1 "md": grid-cols-3 gap-8">;"
          {testimonials.map((testimonial, index) => (<motion.div;
              }
              key={testimonial.name}
<<<<<<< HEAD
              initial={ "opacity": 0, "y": 20 
}
              animate={ "opacity": 1, "y": 0 
}
              transition={ "duration": 0.6, "delay": index * 0.1 
=======
              initial={{ "opacity": 0, "y": 20 
}
              animate={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0.6, "delay": index * 0.1 
>>>>>>> origin/resolved-merge-conflicts
}
            >;
              <Card className="h-full "hover":shadow-lg transition-shadow duration-300">;"
                <CardContent className="p-6">;"
                  <div className="flex items-center mb-4">;"
                    {[...Array(testimonial.rating)].map((_, i) => (<Star;
                        }
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current";" />;
                    ))}
                  </div>;
                  <blockquote className="text-gray-600 mb-6 italic">;"
                    '{testimonial.content}';'
                  </blockquote>;
                  <div className="flex items-center">;"
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">;"
                      {testimonial.name.charAt(0)}
                    </div>;
                    <div>;
                      <div className="font-semibold text-gray-900">;"
                        {testimonial.name}
                      </div>;
                      <div className="text-sm text-gray-500">;"
                        {testimonial.role}, {testimonial.compunknown}
                      </div>;
                    </div>;
                  </div>;
                </CardContent>;
              </Card>;
            </motion.div>;
          ))}
        </div>;
      </div>;
    </section>;
  )}

export default TestimonialsSection;