import React from "react"
import { motion   } from "framer-motion";
import { Link   } from "react-router-dom";
const categories = [
  {
  tit,
  l: e: "AI Services",descripti,
  o: n: "Cutting-edge AI solutions, chatbots, and machine learning"
    ic,
  o: n: "🤖",li,
  n: k: "/ai-services",col,
  o: r: "from-purple-500 to-indigo-600"
},
  {
  tit,
  l: e: "Micro SAAS",descripti,
  o: n: "Cloud-based software solutions for modern businesses",ic,
  o: n: "☁️",li,
  n: k: "/micro-saas",col,
  o: r: "from-cyan-500 to-blue-600"
},
  {
  tit,
  l: e: "IT Services",descripti,
  o: n: "Infrastructure, security, and technical consulting"
    ic,
  o: n: "⚡",li,
  n: k: "/all-services",col,
  o: r: "from-amber-500 to-orange-600"
},
  {
  tit,
  l: e: "Digital Transformation",descripti,
  o: n: "Business modernization and digital strategy",ic,
  o: n: "📈",li,
  n: k: "/all-services",col,
  o: r: "from-emerald-500 to-green-600"
},
  ]
const specialServices = [
  {
  tit,
  l: e: "IT Onsite Services",li,
  n: k: "/it-onsite-services"
},
  {
  tit,
  l: e: "Comprehensive Services",li,
  n: k: "/comprehensive-services"
},
  {
  tit,
  l: e: "Services Comparison",li,
  n: k: "/services-comparison"
},
  ]
interface CategoriesSectionProps {
  showTitle?: boolean;
}
}
}

const const containerVariants = {
  = {
  hidd,
  e: n: { opacit,
  y: 0 },
  }
  visib,
  l: e: {
  opacit,
  y: 1,transiti,
  o: n: {
  staggerChildre,
  n: 0.1,delayChildr,
  e: n: 0.2;
},
  },
  }
const const itemVariants = {
  = {
  hidd,
  e: n: { ,
  y: 20, opaci,
  t: y: 0 },
  }
  visib,
  l: e: {
  ,
  y: 0,opaci,
  t: y: 1,transiti,
  o: n: {
  duratio,
  n: 0.5,ea,
  s: e: "easeOut"
},
  },
  }
export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background pattern */},
  }
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={
  backgroundIma,
  g: e: `radial-gradient(circle at 25% 25%, #8ab1f3 2px, transparent 2px)`
          backgroundSi,
  z: e: '50px 50px'
},
  }></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
  <motion.div;
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            viewport={ on,
  c: e: true },
  }
            transition={ durati,
  o: n: 0.6 },
  }
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-4">
              Explore Categories;
            </h2>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation;
            </p>
          </motion.div>
        )}
        
        <motion.div;
          className="className="grid grid-cols-1,
  s: m: grid-cols-2 l,
  g:grid-cols-4 gap-6";"
          variants={containerVariants},
  }
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
        >
          {categories.map((category, index) => (
  <motion.div;
              key={category.title},
  }
              variants={itemVariants},
  }
              className="className="group block";"
            >
              <Link to={category.link} className="block">
                <div className="rounded-lg overflow-hidden h-full border border-blue-600 bg-slate-800 p-6 transition-all duration-300,
  hove: r: border-purple-500/50,
  hove: r:translate-y-[-5px] hov,
  e: r:shadow-lg hove,
  r:shadow-blue-500/25">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                    <div className="text-white text-2xl">
                      {category.icon},
  }
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div;
          className="className="mt-12";"
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          viewport={ on,
  c: e: true },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 },
  }
        >
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
  <Link;
                key={service.title},
  }
                to={service.link},
  }
                className="className="px-6 py-3 bg-blue-600,
  hove: r: bg-blue-700 border border-blue-500/20,
  hove: r:border-blue-400/50 rounded-full text-white transition-all duration-300,
  hove: r:shadow-lg hove,
  r:shadow-blue-500/25 flex items-center gap-2";"
              >
                {service.title},
  }
                <span className="text-sm">→</span>
              </Link>
            ))}
          </div>
        </motion.div>
        
        <motion.div;
          className="className="mt-12 flex justify-center";"
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          viewport={ on,
  c: e: true },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 },
  }
        >
          <Link;
            to="/categories" 
            className="className="text-cyan-400 border-b border-cyan-400,
  hove: r: border-cyan-300 transition-colors flex items-center gap-2";"
          >
            View All Categories;
            <span className="text-sm group-hove,
  r:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}