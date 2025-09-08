

import Button from '../components/ui/Button';
import { Check, X, Star, TrendingUp, DollarSign, Zap } from 'lucide-react';
export default function PricingComparisonPage() {
  const serviceComparisons = $2;
      zionPricing: {
        starter: '$19/month',
        professional: '$49/month',
        enterprise: '$199/month'


                  className='text - center group hover:scale - 105 transition - transform duration - 300';
                >;
                  <div;
                    className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br from - indigo - 500 to - purple - 600 flex items - center justify - center text - white mx - auto mb - 6`}
                  >                    {insight.icon}                Why Choose Zion?;
              </h2>;
              <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
                Key insights that make Zion the smart choice for your business.;
              </p>;
            </div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
              {market_insights.map ((insight, index) => (
                <Card;
                    {insight.insight}




        {/* Detailed Comparison */}

        <section id="comparison" className="py-24 bg-gray-800">





              </p>

            </div>
            {serviceComparisons.map((service, serviceIndex) => (


            </div>;
          </div>;
        </section>;

        {/* Detailed Comparison */}


<section id='comparison' className='py-24 bg-gray-800'    />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />
            <div className='text-center mb-20'    />
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'    />
                Detailed Service Comparison;
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />
                See exactly how each service compares in features, pricing, and;



        <section id='comparison' className='py - 24 bg - gray - 800'    />;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'    />;
            <div className='text - center mb - 20'    />;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'    />;
              <p className=\"text - xl text - gray - 400 max-w-3xl mx-auto\"    />;
                See exactly how each service compares in features, pricing, and value.;}
            </div>;}
            {service_comparisons.map ((service, service_index) => (<div key={service_index} className='mb - 24'    />;
                <div className='text - center mb - 16'    />;


                  <h3 className='text - 3xl font - bold text - white mb - 4'    />;



                  {/* Competitors */}
                  {service.competitors.map((competitor, compIndex) => (


                            {competitor.name}
                          </div>

                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math && Math.floor(parseFloat(competitor && competitor.rating))
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-400'

                                }`}
                                 />;


                            ))}



<span className='text-sm text-gray-400 ml-2'    />
                              {competitor.rating}
                            </span>
                          </div>

                          <div className='mb-4'>
                            <p className='text-lg font-semibold text-white'>
                              {competitor.pricing}
                            </p>
                          </div>
                          <div className='space-y-2 mb-4 text-xs'>
                            <div>
                              <p className='text-green-400 font-medium mb-1'>
                                Pros:
                              </p>
                              <ul className='text-gray-300 space-y-1'>
                                {competitor.pros.map((pro, proIndex) => (
                                  <li
                                    key={proIndex}
                                    className='flex items-center'>;
                                    <Check className='w-3 h-3 text-green-400 mr-2 flex-shrink-0' />                                    {pro}                          </div>;
                          <div className="mb-4">;
                            <p className="text-lg font-semibold text-white">{competitor && competitor.pricing}</p>;
                          </div>;
                          <div className="space-y-2 mb-4 text-xs">;
                            <div>;
                              <p className="text-green-400 font-medium mb-1">Pros:</p>;
                              <ul className="text-gray-300 space-y-1">;
                                {competitor && competitor.pros.map((pro, proIndex) => (;
                                  <li key={proIndex} className="flex items-center">;
                                    <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />;


                                ))}


<p className='text-red-400 font-medium mb-1'    />
                                Cons:
                              </p>
                              <ul className='text-gray-300 space-y-1'    />
                                {competitor.cons.map((con, conIndex) => (}
                                  <li;}
key={conIndex}
                                    className='flex items-center'
                                      />
                                    <X className='w-3 h-3 text-red-400 mr-2 flex-shrink-0'    />


                                    {con}
                                  </li>;

                              </ul>
                            </div>
                            <div>
                              <p className="text-red-400 font-medium mb-1">Cons:</p>



                                    {con}

                                  </li>

                                ))}

                              </ul>;
                            </div>;
                          </div>;
                          <div className='text-center'    />;
                            <p className='text-green-400 font-semibold text-sm'    />;
                              {competitor && competitor.savings}
                            </p>                          </div>                          <div className=\"text-center\"    />;
                            <p className=\"text-green-400 font-semibold text-sm\"    />{competitor && competitor.savings}</p>;

                          </div>;
                        </div>;
                      </Card>;
                    </div>;
                  ))}
                </div>;
              </div>;
            ))}
          </div>;
        </section>;
        {/* CTA Section */}


        {/* CTA Section */}


            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                href='/ai-content-generator'






                Try AI Content Generator
              </Button>


  )}
  )
}




