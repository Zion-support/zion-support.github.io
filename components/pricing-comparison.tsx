import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';


                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"><div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-6`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-6`}>
                    {insight.icon}
                  </div>;
                  <p className={`text - lg font - semibold ${insight.color}`}>;


                    {insight.icon}


                  </div>
                  <p className={`text-lg font-semibold ${insight.color}`}>
                    {insight.insight}
                  </div>
                  <p className={`text-lg font-semibold ${insight.color}`}>
                    {insight.insight}
        <section id="comparison" className="py-24 bg-gray-800">

                    {insight.icon}

                  </div>
                  <p className={`text-lg font-semibold ${insight.color}`}>
                    {insight.insight}
                  </p>
                </Card>
              ))}

            </div>
          </div>
        </section>


              ))}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Detailed Service Comparison
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See exactly how each service compares in features, pricing, and value.
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service && service.color} flex items-center justify-center text-4xl mx-auto mb-6`}>;
                    {service && service.icon}
                  </div>;
                  <h3 className='text-3xl font-bold text-white mb-4'>;
                    {service && service.service}
                  </h3>;
                  <div className='flex flex-wrap justify-center gap-4 text-lg text-gray-300'>;
                    <span>;
                      Starter:{' '}
                      <span className='text-green-400 font-semibold'>;
                        {service && service.zionPricing.starter}
                  </p>;
                </Card>))}
            </div>;
          </div>;
        </section>;
        {/* Detailed Comparison */}


                  <h3 className='text - 3xl font - bold text - white mb - 4'    />;
                        </div>;
                        <div className='text-center'>;'
                          <p className='text-green-400 font-semibold mb-2'>;'
                            Starting at;
                          </p>;
                          <p className='text-2xl font-bold text-white'>;'
                    <span    />Professional: {' ,}
}
                      </span>;
                    </span>;

                    <span    />;
                      Enterprise: {' '}

                      <span className='text-purple-400 font-semibold'    />

                        {service.zionPricing.enterpris,}
}

                      </span>;
                    </span>;
                  </div>;
                              <ul className="text-gray-300 space-y-1">
                                {competitor.cons.map((con, conIndex) => (
                                  <li key={conIndex} className="flex items-center">
                                    <X className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />
        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-indigo-600 to-purple-600'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>


              Ready to Save Money and Get Better Features?

<section className='py-24 bg-gradient-to-r from-indigo-600 to-purple-600'    />
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'    />
            </h2>
            <p className='text-xl text-indigo-100 mb-12'    />
              Start your free trial today and see why thousands of businesses;
choose Zion.
            </p>


              <Button

              <Button
                href='/cloud-monitoring'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'                href="/cloud-monitoring"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
                Try Cloud Monitoring
              </Button>
              <Button
                href='/devops-automation'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'                href="/devops-automation"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
                Try DevOps Automation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
);
}
              <Button
