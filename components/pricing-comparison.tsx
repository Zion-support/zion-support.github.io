

import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';

export default function PricingComparisonPage () {
  const serviceComparisons = [ {
  service: 'AI Content Generator', zionPricing: {
  starter: '$19/month', professional: '$49/month', enterprise: '$199/month' 
}
competitors: [ ]
features: [ 'AI-powered content generationMultiple content formatsSEO optimizationTeam collaborationAPI accessCustom templates' ]
color: 'from-purple-500 to-indigo-600'
icon: '🤖' 

}
{
  service: 'Cloud Monitoring', zionPricing: {
  starter: '$29/month', professional: '$99/month', enterprise: '$299/month' 
}
competitors: [ ]
features: [ 'Real-time monitoringMulti-cloud supportAI-powered alertingAdvanced analyticsCustom dashboardsAPI access' ]
color: 'from-green-500 to-emerald-600'
icon: '☁️' 
}
{
  service: 'DevOps Automation', zionPricing: {
  starter: '$39/month', professional: '$129/month', enterprise: '$399/month' 
}
competitors: [ ]
features: [ 'CI/CD pipelinesInfrastructure as CodeSecurity automationMulti-cloud deploymentTeam collaborationCustom integrations' ]
color: 'from-blue-500 to-cyan-600'
icon: '🚀' 
}]
return (<> <Head> <title>Pricing Comparison - Zion Tech Group | How We Stack Up Against the Competition</title> Pricing Analysis </div> </div> <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight" > How We Compare to the Competition </h1> <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12" > See how Zion's micro SaaS services stack up against market leaders. Get professional-grade features at startup-friendly prices. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Button href="#comparison" variant="primary" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white" > View Comparison </Button> <Button href="/pricing" variant="outline" size="lg" className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white" > View Our Pricing </Button> </div> </div> </section> Why Choose Zion? </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Key insights that make Zion the smart choice for your business. </p> </div> <Card key= {
  index 
}className="text-center group hover:scale-105 transition-transform duration-300" > <div className= {
  `w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-6` 
}> {
  insight.icon 
}</div> <p className= {
  `text-lg font-semibold $ {
  insight.color 
}` 
}> {
  insight.insight 
}</p> </Card>) ) 
}</div> </div> </section> Detailed Service Comparison </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > See exactly how each service compares in features, pricing, and value. </p> </div> </div> </div> </Card> </div> <Star key= {
  i 
}className= {
  `w-4 h-4 $ {
  i < Math.floor (parseFloat (competitor.rating) ) ? 'text-yellow-400 fill-current': 'text-gray-400' 
}` 
}/>) ) 
}</div> <div className="space-y-2 mb-4 text-xs" > <div> </li>) ) 
}</ul> </div> <div> </li>) ) 
}</ul> </div> </div> </div> </div> </Card> </div>) ) 
}</div> </div>) ) 
}</div> </section> <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600"> <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8"> text-xl text-indigo-100 mb-12"> Start your free trial today and see why thousands of businesses choose Zion. </p> <div className=" flex flex-col sm:flex-row gap-4 justify-center"> <Button href=" /ai-content-generator"variant=" secondary"size=" lg"className=" bg-white text-indigo-600 hover:bg-gray-100"> Try AI Content Generator </Button> <Button href=" /cloud-monitoring"variant=" secondary"size=" lg"className=" bg-white text-indigo-600 hover:bg-gray-100"> Try Cloud Monitoring </Button> <Button href=" /devops-automation"variant=" secondary"size=" lg"className=" bg-white text-indigo-600 hover:bg-gray-100" > Try DevOps Automation </Button> </div> </div> </section> </div> </>) 
}
import Button from '../components/ui/Button';
import { Check, X, Star, TrendingUp, DollarSign, Zap } from 'lucide-react';
export default function PricingComparisonPage() {
  const serviceComparisons = $2;
      zionPricing: {
        starter: '$19/month',
        professional: '$49/month',
        enterprise: '$199/month'

                Why Choose Zion?;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />;
                Key insights that make Zion the smart choice for your business.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'    />;
              {marketInsights.map((insight, index) => (<Card;}
                  key={index}

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

                    {insight.icon}


                    {insight.insight}









        {/* Detailed Comparison */}

        <section id="comparison" className="py-24 bg-gray-800">



          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Detailed Service Comparison
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See exactly how each service compares in features, pricing, and value.


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

                    {service && service.icon}
                  </div>;
                  <h3 className='text-3xl font-bold text-white mb-4'    />;
                    {service && service.service}
                  </h3>;
                  <div className='flex flex-wrap justify-center gap-4 text-lg text-gray-300'    />;
                    <span    />;
                      Starter: {' ,}
}
                      <span className='text-green-400 font-semibold'    />;

                        {service && service.zionPricing.starter}
                  </p>;
                </Card>))}
            </div>;
          </div>;
        </section>;
        {/* Detailed Comparison */}

        <section id='comparison' className='py - 24 bg - gray - 800'    />;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'    />;
            <div className='text - center mb - 20'    />;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'    />;
                Detailed Service Comparison;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'    />;
                See exactly how each service compares in features, pricing, and;
                value.              </p>;
            </div>;
            {service_comparisons.map ((service, service_index) => (        <section id=\"comparison\" className=\"py - 24 bg-gray-800\"    />;
          <div className=\"max - w-7xl mx - auto px - 4 sm:px-6 lg:px-8\"    />;
            <div className=\"text-center mb-20\"    />;
              <h2 className=\"text - 3xl sm:text - 4xl font - bold text-white mb-8\"    />;
                Detailed Service Comparison;
              </h2>;
              <p className=\"text - xl text - gray - 400 max-w-3xl mx-auto\"    />;
                See exactly how each service compares in features, pricing, and value.;}
            </div>;}
            {service_comparisons.map ((service, service_index) => (<div key={service_index} className='mb - 24'    />;
                <div className='text - center mb - 16'    />;

                  <div;
                    className={`w - 20 h - 20 rounded - 3xl bg - gradient - to - br ${service.color} flex items - center justify - center text - 4xl mx - auto mb - 6`}    />

                    {service.icon}
                  </div>;

                  <h3 className='text - 3xl font - bold text - white mb - 4'    />;
                    {service.service}
                  </h3>;
                  <div className='flex flex - wrap justify - center gap - 4 text - lg text - gray - 300'    />;
                    <span    />;
                      Starter: {' ,}
}
                      <span className='text - green - 400 font - semibold'    />;
                        {service.zion_pricing.starter}
                      </span>;
                    </span>;

                      </span>;
                    </span>;
                  </div>;
                </div>;


                  {/* Zion Service */}
                  <div className='lg:col-span-1'    />;
                    <Card className='h-full border-2 border-green-500 bg-green-500/5'    />;
                      <div className='text-center p-6'    />;
                        <div className='inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-4'    />;
                          Zion {service.service}
                        </div>;
                        <h4 className='text-xl font-bold text-white mb-4'    />;
                          Best Value;
                        </h4>;
                        <div className='space-y-3 mb-6'    />;
                          {service.features.map((feature, featureIndex) => (<div;}
                              key={featureIndex}
                              className='flex items-center text-gray-300'    />

                              <Check className='w-5 h-5 text-green-400 mr-3 flex-shrink-0'    />;
                              <span className='text-sm'    />{feature}</span>;
                            </div>;
                          ))}


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


                              <ul className="text-gray-300 space-y-1">
                                {competitor.cons.map((con, conIndex) => (
                                  <li key={conIndex} className="flex items-center">
                                    <X className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />

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

        <section className='py-24 bg-gradient-to-r from-indigo-600 to-purple-600'    />;
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'    />;
            </h2>;
            <p className='text-xl text-indigo-100 mb-12'    />;
              Start your free trial today and see why thousands of businesses;
              choose Zion.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'    />;

                              </ul>
                            </div>
                          </div>

<div className='text-center'    />
                            <p className='text-green-400 font-semibold text-sm'    />
                              {competitor.savings}
                            </p>

                  ))}
</div>;
              </div>;
            ))}


        {/* CTA Section */}


            </h2>
            <p className='text-xl text-indigo-100 mb-12'    />
              Start your free trial today and see why thousands of businesses;
choose Zion.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                href='/ai-content-generator'

                variant='secondary'
                size='lg'

                className='bg-white text-indigo-600 hover:bg-gray-100'
                  />
                Try AI Content Generator;
              </Button>
              <Button;
href='/cloud-monitoring'
                variant='secondary'
                size='lg'

                className='bg-white text-indigo-600 hover:bg-gray-100'
                  />
                Try Cloud Monitoring;
              </Button>
              <Button;
href='/devops-automation'
                variant='secondary'
                size='lg'



                  {/* Competitors */}
                  {service.competitors.map ((competitor, comp_index) => (
                    <div key={comp_index} className='lg:col - span - 1'>;
                      <Card className='h - full border border - gray - 700'>;
                        <div className='text - center p - 6'>;
                          <div className='inline - flex items - center px - 3 py - 1 rounded - full bg - gray - 500 / 20 text - gray - 400 text - sm font - medium mb - 4'>;
                            {competitor.name}
                          </div>;
                          <div className='flex items - center justify - center mb - 4'>                            {[...Array (5)].map ((_, i) => (                    <div key={comp_index} className="lg:col - span - 1">;
                      <Card className="h - full border border - gray - 700">;
                        <div className="text - center p - 6">;
                          <div className="inline - flex items - center px - 3 py - 1 rounded - full bg - gray - 500 / 20 text - gray - 400 text - sm font - medium mb - 4">;
                            {competitor.name}
                          </div>;
                          <div className="flex items - center justify - center mb - 4">;
                              <Star;
                                key={i}
                                className={`w - 4 h - 4 ${
                                  i < Math.floor (parse_float (competitor.rating));
                                    ? 'text - yellow - 400 fill - current';
                                    : 'text - gray - 400';
                                }`}
                              />))}
                            <span className='text - sm text - gray - 400 ml - 2'>;
                              {competitor.rating}
                            </span>;
                          </div>;
                          <div className='mb - 4'>;
                            <p className='text - lg font - semibold text - white'>;
                              {competitor.pricing}
                            </p>;
                          </div>;
                          <div className='space - y-2 mb - 4 text - xs'>;
                            <div>;
                              <p className='text - green - 400 font - medium mb - 1'>;
                                Pros:;
                              </p>;
                              <ul className='text - gray - 300 space - y-1'>;
                                {competitor.pros.map ((pro, pro_index) => (
                                  <li;
                                    key={pro_index}
                                    className='flex items - center';
                                  >;
                                    <Check className='w - 3 h - 3 text - green - 400 mr - 2 flex - shrink - 0' />                                    {pro}                          </div>;
                          <div className="mb - 4">;
                            <p className="text - lg font - semibold text - white">{competitor.pricing}</p>;
                          </div>;
                          <div className="space - y-2 mb - 4 text - xs">;
                            <div>;
                              <p className="text - green - 400 font - medium mb - 1">Pros:</p>;
                              <ul className="text - gray - 300 space - y-1">;
                                {competitor.pros.map ((pro, pro_index) => (
                                  <li key={pro_index} className="flex items - center">;
                                    <Check className="w - 3 h - 3 text - green - 400 mr - 2 flex - shrink - 0" />;
                                    {pro}
                                  </li>))}
                              </ul>;
                            </div>;
                            <div>;
                              <p className='text - red - 400 font - medium mb - 1'>;
                                Cons:;
                              </p>;
                              <ul className='text - gray - 300 space - y-1'>;
                                {competitor.cons.map ((con, con_index) => (
                                  <li;
                                    key={con_index}
                                    className='flex items - center';
                                  >;
                                    <X className='w - 3 h - 3 text - red - 400 mr - 2 flex - shrink - 0' />                                    {con}                              <p className="text - red - 400 font - medium mb - 1">Cons:</p>;
                              <ul className="text - gray - 300 space - y-1">;
                                {competitor.cons.map ((con, con_index) => (
                                  <li key={con_index} className="flex items - center">;
                                    <X className="w - 3 h - 3 text - red - 400 mr - 2 flex - shrink - 0" />;
                                  </li>))}
                              </ul>;
                            </div>;
                          </div>;
                          <div className='text - center'>;
                            <p className='text - green - 400 font - semibold text - sm'>;
                              {competitor.savings}
                            </p>                          </div>                          <div className="text - center">;
                            <p className="text - green - 400 font - semibold text - sm">{competitor.savings}</p>;
                          </div>;
                        </div>;
                      </Card>;
                    </div>))}
                </div>;
              </div>))}
          </div>;
        </section>;
        {/* CTA Section */}
        <section className='py - 24 bg - gradient - to - r from - indigo - 600 to - purple - 600'>;
          <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;

            </h2>;
            <p className='text - xl text - indigo - 100 mb - 12>;
              Start your free trial today and see why thousands of businesses;
              choose Zion.;
            </p>;<section className=py-24 bg-gradient-to-r from-indigo-600 to-purple-600'>;
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center>;
            <h2 className=text-3xl sm:text-4xl font-bold text-white mb-8'>;
            </h2>;
            <p className='text-xl text-indigo-100 mb-12>;
              Start your free trial today and see why thousands of businesses;
              choose Zion.;
            </p>;
            <div className=flex flex-col sm:flex-row gap-4 justify-center'>;
              <Button;
                href='/ai-content-generator;
                variant=secondary';
                size='lg;
                className=bg-white text-indigo-600 hover:bg-gray-100'>;
                Try AI Content Generator;
              </Button>;className='bg-white text-indigo-600 hover:bg-gray-100;
              >;
                Try AI Content Generator;
              </Button>;
              <Button;
href=/cloud-monitoring';
                variant='secondary;
                size=lg';
                className='bg-white text-indigo-600 hover:bg-gray-100>;
                Try Cloud Monitoring;
              </Button>;className=bg-white text-indigo-600 hover:bg-gray-100';
              >;
                Try Cloud Monitoring;
              </Button>;
              <Button;
href='/devops-automation;
                variant=secondary';
                size='lg;
                Try DevOps Automation;


              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;


                className='bg-white text-indigo-600 hover:bg-gray-100'              >                href="/ai-content-generator"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"

                Try AI Content Generator
              </Button>


  )}
  )
}




