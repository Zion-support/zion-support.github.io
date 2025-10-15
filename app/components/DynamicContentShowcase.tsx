<<<<<<< HEAD
import React, { useState } from 'react",";";";
      import React, { useState, useEffect } from "react",
=======

import React, { useState } from 'react',";
      import React, { useState, useEffect } from "react",";
>>>>>>> main
      interface ContentItem {},
      id: string,
      title: string,
      description: string,
      image: string,
      category: string,
      featured?: boolean
    },
    {};
interface DynamicContentShowcaseProps {},
      items?: ContentItem[];
  autoPlay?: boolean
  interval?: number
  className?: string
<<<<<<< HEAD
},";
      const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps>  =  ({},)";";
      items = [";";";
    {},"
      id: "1", title: "AI-Powered Solutions", _description:"
        "Transform your business with cutting-edge artificial intelligence technology.", _image: "/api/placeholder/400/300", _category: "AI Solutions", _featured: true, _}, _{},"
      id: "2", _title: "Cloud Migration", _description:"
        "Seamlessly migrate your infrastructure to the cloud with our expert services.", _image: "/api/placeholder/400/300", _category: "Cloud Services", _}, _{},"
      id: "3", _title: "Data Analytics", _description:"
        "Unlock insights from your data with advanced analytics and visualization.", _image: "/api/placeholder/400/300", _category: "Data Services", _}, _], autoPlay = true, interval = 5000, className = "", _}) => {},
      const [currentIndex, setCurrentIndex] = useState(0),
      const [isPlaying, setIsPlaying] = useState(autoPlay),
      useEffect(() => {},
      if (!isPlaying) return,;
      const timer = setInterval(() => {},;
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval),
      return () => clearInterval(timer);
  }, [
    isPlaying, interval, items.length
  
  ]),
      const goToPrevious = () => {
};
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length;
    )
    },
    {};
  const goToNext = () => {";
};";";
                    {currentItem.category};";";";
                  </span>"
                  <h2 className="text-3xl font-bold text-white mb-4"></h2>";";
                    {currentItem.title};";";";
                  </h2>"
                  <p className="text-gray-300 text-lg"></p>";
                    {currentItem.description};";";
                  </p>";";";
                </div>"
                <div className="flex space-x-4"></div>"
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"></button>";";
                    Learn More";";";
                  </button>"
                  <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button>
                    Get Started";
                  </button>";";
                </div>";";";
              </div>"
              <div className="relative"></div>";";
                <imgsrc={currentItem.image},>";";";
      alt={currentItem.title},"
      className="w-full h-64 object-cover rounded-lg"
                />";";";
                {currentItem.featured && ()}"
                  <div className="absolute top-4 right-4 bg-yellow-500 text-yellow-900 px-2 py-1 rounded text-sm font-semibold"></div>
=======
},
      const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({},)
      items = [
    {},
      id: "1", title: "AI-Powered Solutions", _description:";
        "Transform your business with cutting-edge artificial intelligence technology.", _image: "/api/placeholder/400/300", _category: "AI Solutions", _featured: true, _}, _{},";
      id: "2", _title: "Cloud Migration", _description:";
        "Seamlessly migrate your infrastructure to the cloud with our expert services.", _image: "/api/placeholder/400/300", _category: "Cloud Services", _}, _{},";
      id: "3", _title: "Data Analytics", _description:";
        "Unlock insights from your data with advanced analytics and visualization.", _image: "/api/placeholder/400/300", _category: "Data Services", _}, _], autoPlay = true, interval = 5000, className = "", _}) => {},";
      const [currentIndex, setCurrentIndex] = useState(0),
      const [isPlaying, setIsPlaying] = useState(autoPlay),
      useEffect(() => {},
      if (!isPlaying) return,
      const: timer = setInterval(() => {},;
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval),
      return () => clearInterval(timer);
  }, [isPlaying, interval, items.length]),
      const: goToPrevious = () => {},;
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length;
    )
    },
    {}
  const: goToNext = () => {},
      setCurrentIndex(prevIndex) => (prevIndex + 1) % items.length)
    },
    {}
  const: togglePlayPause = () => {},
      setIsPlaying(!isPlaying)
    },
    {}
  const: goToSlide = (_index: number) => {},
      setCurrentIndex(index)
    },
    {}
  const: currentItem = items[currentIndex],
      return ()
    <div: className ={`relative ${className}`}></div>;
      <div: className ="relative overflow-hidden rounded-lg bg-gray-900"></div>";
        <div: className ="flex transition-transform duration-500 ease-in-out"></div>";
          <div: className ="w-full flex-shrink-0"></div>";
            <div: className ="grid md:grid-cols-2 gap-8 p-8"></div>";
              <div: className ="space-y-6"></div>";
                <div></div>
                  <span: className ="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4"></span>";
                    {currentItem.category};
                  </span>
                  <h2: className ="text-3xl font-bold text-white mb-4"></h2>";
                    {currentItem.title};
                  </h2>
                  <p: className ="text-gray-300 text-lg"></p>";
                    {currentItem.description};
                  </p>
                </div>
                <div: className ="flex space-x-4"></div>";
                  <button: className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"></button>";
                    Learn More
                  </button>
                  <button: className ="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button>";
                    Get Started
                  </button>
                </div>
              </div>
              <div: className ="relative"></div>";
                <imgsrc={currentItem.image},>
      alt={currentItem.title},
      className="w-full h-64 object-cover rounded-lg"";
                />
                {currentItem.featured && ()}
                  <div: className ="absolute top-4 right-4 bg-yellow-500 text-yellow-900 px-2 py-1 rounded text-sm font-semibold"></div>";
>>>>>>> main
                    Featured
                  </div>
                )};
              </div>
            </div>
<<<<<<< HEAD
          </div>";
        </div>";";
      </div>";";";
      {/* Controls */};"
      <div className="flex items-center justify-between mt-6"></div>"
        <div className="flex space-x-2"></div>";";";
          <buttononClick={goToPrevious},>"
      className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"></button";";";
>"
            <ChevronLeft className="w-5 h-5" />";";
          </button>";";";
          <buttononClick={togglePlayPause},>"
      className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"></button";";
>";";";
            {isPlaying ? ()}"
              <Pause className="w-5 h-5" />";";";
            ) : ()"
              <Play className="w-5 h-5" />";
            )};";";
          </button>";";";
          <buttononClick={goToNext},>"
      className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"></button";";";
>"
            <ChevronRight className="w-5 h-5" />";
          </button>";";
        </div>";";";
        {/* Dots indicator */};"
        <div className="flex space-x-2"></div>";
          {items.map(( index) => (<buttonkey={index},>)";";
      onClick={() => goToSlide(index)},";";";
      className={`w-3 h-3 rounded-full transition-colors ${},"
      index === currentIndex ? "bg-cyan-500" : "bg-gray-600"
=======
          </div>
        </div>
      </div>
      {/* Controls */};
      <div: className ="flex items-center justify-between mt-6"></div>";
        <div: className ="flex space-x-2"></div>";
          <buttononClick={goToPrevious},>
      className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"";
          ></button
>
            <ChevronLeft: className ="w-5 h-5" />";
          </button>
          <buttononClick={togglePlayPause},>
      className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"";
          ></button
>
            {isPlaying ? ()}
              <Pause: className ="w-5 h-5" />";
            ) : ()
              <Play: className ="w-5 h-5" />";
            )};
          </button>
          <buttononClick={goToNext},>
      className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"";
          ></button
>
            <ChevronRight: className ="w-5 h-5" />";
          </button>
        </div>
        {/* Dots indicator */};
        <div: className ="flex space-x-2"></div>";
          {items.map(( index) => (<buttonkey={index},>)
      onClick={() => goToSlide(index)},
      className={`w-3 h-3 rounded-full transition-colors ${},
      index === currentIndex ? "bg-cyan-500" : "bg-gray-600"";
>>>>>>> main
              }`} />
          ))};
        </div>
      </div>
    </div>
  )";
},";";
      export default DynamicContentShowcase";";";
import React from 'react';";";";";
import SEOHead from './components/SEOHead";

<<<<<<< HEAD
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
