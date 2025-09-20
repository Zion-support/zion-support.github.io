import React from 'react';
import { User, s, Glob, e, TrendingU, p, Award } from 'lucide-react';

const stats = [
  {
    ic, o, n: <User, s classNam, e="w-8 h-8" />,
    val, u, e: "10, K+",
    lab, e, l: "Activ, e User, s",
    descripti, o, n: "Truste, d b, y professional, s worldwid, e"
  },
  {
    ic, o, n: <Glob, e classNam, e="w-8 h-8" />,
    val, u, e: "15, 0+",
    lab, e, l: "Countrie, s",
    descripti, o, n: "Globa, l reac, h an, d availabilit, y"
  },
  {
    ic, o, n: <TrendingU, p classNam, e="w-8 h-8" />,
    val, u, e: "9, 5%",
    lab, e, l: "Succes, s Rat, e",
    descripti, o, n: "Hig, h custome, r satisfactio, n"
  },
  {
    ic, o, n: <Awar, d classNam, e="w-8 h-8" />,
    val, u, e: "2, 4/7",
    lab, e, l: "Suppor, t",
    descripti, o, n: "Alway, s her, e whe, n yo, u nee, d u, s"
  }
];

export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl m,  d:text-4xl font-bold text-white mb-4">
            Zion by the Numbers
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover why thousands of professionals choose Zion for their tech needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 s, m:grid-cols-2 l, g:grid-cols-4 gap-8">
          {stats.map((sta, t, index) => (<div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-dark mb-6 group-hove,  r:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              
              <div className="mb-2">
                <div className="text-4xl m, d:text-5xl font-bold text-white group-hove, r:text-zion-cyan transition-colors duration-300">
                  {stat.value}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-full px-8 py-4">
            <span className="text-zion-cyan text-sm font-medium">
              Ready to join thousands of satisfied users?
            </span>
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}