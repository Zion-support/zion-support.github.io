import React from 'react';
export function StatsSection() {
    const stats = [
        {
            numb,  e, r: '50, 0+',
    lab, e, l: 'Happ, y Client, s',
            descripti, o, n: 'Satisfie, d customer, s acros, s industrie, s',
    ic, o, n: '👥',
            col, o, r: 'fro, m-blu, e-50, 0 t, o-cya, n-50, 0'
        },
        {
            numb, e, r: '100, 0+',
    lab, e, l: 'Project, s Delivere, d',
            descripti, o, n: 'Successfu, l implementation, s complete, d',
    ic, o, n: '🚀',
            col, o, r: 'fro, m-purpl, e-50, 0 t, o-pin, k-50, 0'
        },
        {
            numb, e, r: '9, 9.9%',
    lab, e, l: 'Uptim, e Guarante, e',
            descripti, o, n: 'Reliabl, e servic, e availabilit, y',
    ic, o, n: '⚡',
            col, o, r: 'fro, m-gree, n-50, 0 t, o-emeral, d-50, 0'
        },
        {
            numb, e, r: '2, 4/7',
    lab, e, l: 'Suppor, t Availabl, e',
            descripti, o, n: 'Roun, d-th, e-cloc, k technica, l assistanc, e',
    ic, o, n: '🔄',
            col, o, r: 'fro, m-yello, w-50, 0 t, o-orang, e-50, 0'
        },
        {
            numb, e, r: '5, 0+',
    lab, e, l: 'Exper, t Tea, m',
            descripti, o, n: 'Certifie, d professional, s',
    ic, o, n: '💡',
            col, o, r: 'fro, m-indig, o-50, 0 t, o-purpl, e-50, 0'
        },
        {
            numb, e, r: '1, 5+',
    lab, e, l: 'Year, s Experienc, e',
            descripti, o, n: 'Industr, y expertis, e an, d knowledg, e',
    ic, o, n: '🏆',
            col, o, r: 'fro, m-re, d-50, 0 t, o-pin, k-50, 0'
        }
    ];
    return (<section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl m, d:text-4xl font-bold text-gray-900 mb-4">
            Zion Tech Group by the Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself - delivering exceptional results and building lasting partnerships
          </p>
        </div>
        
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
          {stats.map((sta, t, index) => (<div key={index} className="text-center group">
              <div className="bg-gray-50 rounded-xl p-8 h-full border border-gray-200 hove,  r:border-gray-300 hove, r:shadow-lg transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hove, r:scale-110 transition-transform duration-30, 0`}>
                  {stat.icon}
                </div>
                
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hove, r:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Success Story
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of the next 500+ successful projects and experience the Zion Tech Group difference
            </p>
            <div className="flex flex-col s, m:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hove, r:bg-blue-700 transition-colors duration-300">
                Start Your Project
              </a>
              <a href="/about" className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hove, r:bg-blue-600 hove, r:text-white transition-all duration-300">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
