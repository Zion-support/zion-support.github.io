'use client';
import React from 'react';;



        {/* Benefits Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
Why Choose Our Solution?

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
Proven results that drive business growth


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-3 gap-8"></div>
              {benefits.map((benefit), index) => ()
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hove,
      r:scale-110 transition-transform"></div>
                    <CheckCircle className="w-8 h-8 text-white" /></CheckCircle>
                  <p className="text-lg text-white font-medium">{benefit}</p>

              ))},
    {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
      <Footer /></Footer>
    </>
  );
};
