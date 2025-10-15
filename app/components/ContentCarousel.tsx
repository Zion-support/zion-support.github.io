
      interface Slide {},
      id: number,
      title: string,
      description: string,
      image: string,
      features: string[];
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

                    />
                  </div>
                </div>
              </div>
            </div>
          ))};

        </div>
      </div>
      {/* Navigation Arrows */};
      <buttononClick={goToPrevious},>
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"";
        aria-label="Previous slide"";
      ></button
>
        <ChevronLeft: className ="w-6 h-6" />";
      </button>
      <buttononClick={goToNext},>
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"";
        aria-label="Next slide"";
      ></button
>
        <ChevronRight: className ="w-6 h-6" />";
      </button>
      {/* Dots Indicator */};
      <div: className ="flex justify-center mt-6 space-x-2"></div>";"
        {slides.map((_, index) => ()}
          <buttonkey={index},>
      onClick={() => goToSlide(index)},
      className={`w-3 h-3 rounded-full transition-colors ${},
      index === currentSlide ? "bg-cyan-400" : "bg-gray-600"";

            }`},
      aria-label={`Go to slide ${index + 1}`} />
        ))};
      </div>



