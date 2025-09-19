import React from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const contentItems = [
    {
      title: "AI-Powered Solutions",
      description: "Revolutionary AI technology transforming businesses worldwide",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      category: "Artificial Intelligence"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern enterprises",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      category: "Cloud Computing"
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics driving data-driven decisions",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "Data Science"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Revolutionary Content Showcase 2026</h2>
        <p className="text-center text-lg mb-12">Discover our latest innovations and breakthrough technologies</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{item.category.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{item.category}</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
<<<<<<< HEAD
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"></button>
                  Learn More</button>
=======
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                  Learn More
>>>>>>> af5d3bb5a25353b863602b6ccb4c281c2ad784b9
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>