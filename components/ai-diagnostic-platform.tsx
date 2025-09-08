






import Head from 'next/head';





              Revolutionary Medical Technology;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'    />;

              Experience the future of medical diagnostics with AI-powered analysis and comprehensive healthcare solutions.;

            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features && features.map((feature, index) => (;
              <motion&& motion.div





                  {feature}
                viewport={{ once: true }}className='bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300;

                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />

                </div>
                <h3 className=text-lg font-semibold text-white mb-2">{feature}</h3>

              </motion.div>






            initial={{ opacity: 0, y: 30 }}


          >

            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans.map((plan, index) => (          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div

            className='text-center mb-16'>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>;
              Choose Your Plan;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Flexible pricing options designed for healthcare providers of all;
              sizes, from clinics to large hospital systems.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans && pricingPlans.map((plan, index) => (          >;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Choose Your Plan;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Flexible pricing options designed for healthcare providers of all sizes, from clinics to large hospital systems.;
            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricingPlans && pricingPlans.map((plan, index) => (;
              <motion&& motion.div





                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border rounded-2xl p-8 ${



                }`}
              >;
                {plan.popular && (

                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">


                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;


                    <span className='bg - gradient - to - r from - blue - 500 to - indigo - 500 text - white px - 4 py - 2 rounded - full text - sm font - semibold'>                  <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2">;
                    <span className="bg - gradient - to - r from - blue - 500 to - indigo - 500 text - white px - 4 py - 2 rounded - full text - sm font - semibold">;
                      Most Popular;
                    </span>;
                  </div>)}
                <div className='text - center mb - 8'>;
                  <h3 className='text - 2xl font - bold text - white mb - 4'>;



                    {plan.name}
                  </h3>;
                  <div className='text - 4xl font - bold text - white mb - 2'>;
                    ${plan.price}
                    <span className='text - lg text - gray - 400 font - normal'>;
                      /{plan.period}


                

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price}



                    <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />


              >;
                {plan && plan.popular && (;
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>;
                    <span className='bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold'>                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-4'>;
                    {plan && plan.name}
                  </h3>;
                  <div className='text-4xl font-bold text-white mb-2'>;
                    ${plan && plan.price}
                    <span className='text-lg text-gray-400 font-normal'>;
                      /{plan && plan.period}
                    </span>;
                  </div>;
                </div>;
                <ul className='space-y-4 mb-8'>;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-300'>;
                      <CheckCircle className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0' />                      {feature}                    ${plan && plan.price}
                    <span className="text-lg text-gray-400 font-normal">/{plan && plan.period}</span>;
                  </div>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-300">;
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />;

                      {feature}
                    </li>;
                  ))}

                      {feature}

                  Get Started
                </button>
              </motion.div>




                initial={{ opacity: 0, y: 30 ,}
}
                whileInView={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}


                  <div className='text - 4xl font - bold text - white mb - 2'    />;
                    ${plan.price}
                    <span className='text - lg text - gray - 400 font - normal'    />;

                      /{plan.period}

                    </span>
                  </div>
                </div>
                <ul className='space-y-4 mb-8'    />
                  {plan.features.map((feature, featureIndex) => (}
                    <li;}
key={featureIndex}
                      className='flex items-center text-gray-300'
                        />
                      <CheckCircle className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0'    />


<button className='w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl hover: from-blue-600 hover:to-indigo-600 transition-all duration-300'    />
                  Get Started;




                </ul>;<button className='w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300'    />                  Get Started                <button className=\"w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300\"    />;





            initial={{ opacity: 0, y: 30 }}


              Contact our team to learn more about how AI Diagnostic Pro Platform can revolutionize your medical practice.;
            </p>;

          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <motion&& motion.div



              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8, delay: 0 && 0.1 }}


              viewport={{ once: true }}

              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <Phone className='w-8 h-8 text-white' />;

              <h3 className=\"text-xl font-semibold text-white mb-2\"    />Phone</h3>;
              <p className=\"text-gray-300\"    />{contactInfo && contactInfo.mobile}</p>;

            </motion && motion.div>;

            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4'    />
                <Mail className='w-8 h-8 text-white'    />

            </motion.div>

            <motion.div

              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <Mail className='w-8 h-8 text-white' />;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}

className='text-center'
            >
              <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4'    />
                <MapPin className='w-8 h-8 text-white'    />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'    />Address</h3>



              className='text-center'>;








