<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';;';";"
import SEOHead from './components/SEOHead';";"

const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">Components</h1>";"
          <p  className ="text-gray-300">Professional solutions coming soon...</p>;";"
        </div>
      </div>
    </>
  )
}

export default ComponentsPage;'";'";"
=======
<<<<<<< HEAD
import React, { useState } from 'react",";";";
      import { useState, useEffect } from "react","
      import { ChevronLeft, ChevronRight } from "lucide-react",
=======
<<<<<<< HEAD
import React from 'react;'";
import { Helmet } from 'react-helmet-async;'";
'use client;''";
export default function Page() {
  return (
    <div: className ="min-h-screen bg-white">""";
=======
import React from 'react'
import { Helmet  } from 'react-helmet-async'use client'"'"
export default function Page() {return (;
    <div: className ="min-h-screen bg-white">";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      <Helmet>
        <title>ContentCarousel - Zion Tech Group</title>
        <meta: name ="description" content="Professional contentcarousel services by Zion Tech Group." />";
      </Helmet>
      <div: className ="container mx-auto px-4 py-16">";
        <div: className ="text-center">";
          <h1: className ="text-4xl font-bold text-gray-900 mb-8">";
            ContentCarousel;
          </h1>
          <p: className ="text-xl text-gray-600 mb-8">";
            Professional contentcarousel solutions tailored to your business needs.</p>
          <div: className ="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mt-12">";
            <div: className ="bg-blue-50 border border-blue-200 rounded-lg p-6">";
              <h3: className ="text-lg font-semibold text-blue-900 mb-2">";
                Expert Solutions;
              </h3>
              <p: className ="text-blue-700">";
                Our team of experts delivers cutting-edge contentcarousel solutions.;
              </p>
            </div>
            <div: className ="bg-green-50 border border-green-200 rounded-lg p-6">";
              <h3: className ="text-lg font-semibold text-green-900 mb-2">";
                Custom Implementation;
              </h3>
              <p: className ="text-green-700">";
                Tailored contentcarousel implementations for your specific requirements.;
              </p>
            </div>
            <div: className ="bg-purple-50 border border-purple-200 rounded-lg p-6">";
              <h3: className ="text-lg font-semibold text-purple-900 mb-2">";
                24/7 Support;
              </h3>
              <p: className ="text-purple-700">";
                Round-the-clock support for all your contentcarousel needs.;
              </p>
            </div>
          </div>
          <div: className ="mt-12">";
            <button: className ="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">";
              Get Started Today;
            </button>
          </div>
<<<<<<< HEAD
=======

import React, { useState } from 'react',";
      import { useState, useEffect } from "react",";
      import { ChevronLeft, ChevronRight } from "lucide-react",";
>>>>>>> main
      interface Slide {},
      id: number,
      title: string,
      description: string,
      image: string,
      features: string[];
    },
    {};
interface ContentCarouselProps {},
      slides?: Slide[];
  autoPlay?: boolean
  interval?: number
  className?: string;
};";
const defaultSlides: Slide[]  =  [];";";
  {};";";";
    id: 1;"
    title: "AI-Powered Solutions";";";";
    description:"
      "Transform your business with cutting-edge artificial intelligence technologies.";"
    image: "/api/placeholder/600/400";";";";
    features: []"
      "Machine Learning";"
      "Natural Language Processing";"
      "Computer Vision"]};";";
  {};";";";
    id: 2;"
    title: "Cloud Infrastructure";"
    description: "Scalable and secure cloud solutions for modern businesses.";"
    image: "/api/placeholder/600/400";"
    features: ["Scalable Architecture", "99.9% Uptime", "Global CDN"]};";";
  {};";";";
    id: 3;"
    title: "Cybersecurity";";";";
    description:"
      "Protect your digital assets with enterprise-grade security solutions.";"
    image: "/api/placeholder/600/400";"
    features: ["Threat Detection", "Data Encryption", "Compliance"]}];
export default function ContentCarousel() {
  ;
};
<<<<<<< HEAD
  useEffect(() => {};
}if (!autoPlay) return;
    const timer = setInterval(() => {};
}setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [
    autoPlay, interval, slides.length
  
  ])
  const goToSlide = (index: number) => {};
}setCurrentSlide(index)
  },
      const goToPrevious = () => {
};
}setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  },
      const goToNext = () => {
};
}setCurrentSlide((prev) => (prev + 1) % slides.length)
  },";
      return ()";";
    <div className={`relative w-full ${className}`}></div>";";";
      {/* Carousel Container */};"
      <div className="relative overflow-hidden rounded-lg"></div>"
        <divclassName="flex transition-transform duration-500 ease-in-out">
          style={{ transform: `translateX(-${currentSlide * 100}%)` }};";
        ></div";";
>";";";
          {slides.map((slide) => ()}"
            <div key={slide.id} className="w-full flex-shrink-0"></div>"
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700"></div>"
                <div className="grid md:grid-cols-2 gap-8 items-center"></div>";";";
                  <div></div>"
                    <h3 className="text-2xl font-bold text-white mb-4"></h3>";";
                      {slide.title};";";";
                    </h3>"
                    <p className="text-gray-300 mb-6">{slide.description}</p>"
                    <ul className="space-y-2"></ul>";";
                      {slide.features.map((feature, index) => ()}";";";
                        <likey={index},>"
      className="flex items-center text-gray-300"></li";";";
>"
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {feature};
                        </li>";
                      ))};";";
                    </ul>";";";
                  </div>"
                  <div className="flex justify-center"></div>";";
                    <imgsrc={slide.image},>";";";
      alt={slide.title},"
      className="w-full max-w-md h-64 object-cover rounded-lg"
=======
const defaultSlides: Slide[] = []
  {};
    id: 1;
    title: "AI-Powered Solutions";";
    description:
      "Transform your business with cutting-edge artificial intelligence technologies.";";
    image: "/api/placeholder/600/400";";
    features: []
      "Machine Learning";";
      "Natural Language Processing";";
      "Computer Vision"]};";
  {};
    id: 2;
    title: "Cloud Infrastructure";";
    description: "Scalable and secure cloud solutions for modern businesses.";";
    image: "/api/placeholder/600/400";";
    features: ["Scalable Architecture", "99.9% Uptime", "Global CDN"]};";
  {};
    id: 3;
    title: "Cybersecurity";";
    description:
      "Protect your digital assets with enterprise-grade security solutions.";";
    image: "/api/placeholder/600/400";";
    features: ["Threat Detection", "Data Encryption", "Compliance"]}]";
export default function ContentCarousel() {}
  // Function body
}
}const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {};
}if (!autoPlay) return
    const: timer = setInterval(() => {};
}setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, slides.length])
  const: goToSlide = (index: number) => {};
}setCurrentSlide(index)
  },
      const: goToPrevious = () => {};
}setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  },
      const: goToNext = () => {};
}setCurrentSlide((prev) => (prev + 1) % slides.length)
  },
      return ()
    <div: className ={`relative w-full ${className}`}></div>
      {/* Carousel Container */};
      <div: className ="relative overflow-hidden rounded-lg"></div>";
        <divclassName="flex transition-transform duration-500 ease-in-out">";
          style={{ transform: `translateX(-${currentSlide * 100}%)` }};
        ></div
>
          {slides.map((slide) => ()}
            <div: key ={slide.id} className="w-full flex-shrink-0"></div>";
              <div: className ="bg-gray-800 p-8 rounded-lg border border-gray-700"></div>";
                <div: className ="grid md:grid-cols-2 gap-8 items-center"></div>";
                  <div></div>
                    <h3: className ="text-2xl font-bold text-white mb-4"></h3>";
                      {slide.title};
                    </h3>
                    <p: className ="text-gray-300 mb-6">{slide.description}</p>";
                    <ul: className ="space-y-2"></ul>";
                      {slide.features.map((feature, index) => ()}
                        <likey={index},>
      className="flex items-center text-gray-300"";
                        ></li
>
                          <span: className ="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>";
                          {feature};
                        </li>
                      ))};
                    </ul>
                  </div>
                  <div: className ="flex justify-center"></div>";
                    <imgsrc={slide.image},>
      alt={slide.title},
      className="w-full max-w-md h-64 object-cover rounded-lg"";
>>>>>>> main
                    />
                  </div>
                </div>
              </div>
            </div>
          ))};
<<<<<<< HEAD
        </div>";
      </div>";";
      {/* Navigation Arrows */};";";";
      <buttononClick={goToPrevious},>"
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      ></button";";";
>"
        <ChevronLeft className="w-6 h-6" />";";
      </button>";";";
      <buttononClick={goToNext},>"
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      ></button";";";
>"
        <ChevronRight className="w-6 h-6" />";";
      </button>";";";
      {/* Dots Indicator */};"
      <div className="flex justify-center mt-6 space-x-2"></div>
        {slides.map((_, index) => ()};";
          <buttonkey={index},>";";
      onClick={() => goToSlide(index)},";";";
      className={`w-3 h-3 rounded-full transition-colors ${},"
      index === currentSlide ? "bg-cyan-400" : "bg-gray-600"
=======
>>>>>>> main
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
        </div>
      </div>
      {/* Navigation Arrows */};
      <buttononClick={goToPrevious},>
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors";
        aria-label="Previous slide";
      ></button
>
        <ChevronLeft className="w-6 h-6" />";
      </button>
      <buttononClick={goToNext},>
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors";
        aria-label="Next slide";
      ></button
>
        <ChevronRight className="w-6 h-6" />";
      </button>
      {/* Dots Indicator */};
      <div: className ="flex justify-center mt-6 space-x-2"></div>";
        {slides.map((_, index) => ()}
          <buttonkey={index},>
      onClick={() => goToSlide(index)},
      className={`w-3 h-3 rounded-full transition-colors ${},
<<<<<<< HEAD
      index === currentSlide ? "bg-cyan-400" : "bg-gray-600"";
>>>>>>> main
=======
      index === currentSlide ? "bg-cyan-400" : "bg-gray-600";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
            }`},
      aria-label={`Go to slide ${index + 1}`} />
        ))};
      </div>
<<<<<<< HEAD
    </div>";
  )";";
};";";";
import React from 'react';";";";";
import SEOHead from './components/SEOHead";

const ComponentsPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default ComponentsPage;'";'";";";";
"
=======
    </div>
  );}
<<<<<<< HEAD
}''";
=======
  )
};

import React from 'react';;';";
import SEOHead from './components/SEOHead';";
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";";
        description="Professional components solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";";";

>>>>>>> main
>>>>>>> main
>>>>>>> main
=======
}'"'"
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
