
      },
      "competitors": [
        {

    }
  ];

const marketInsights = [;
    {

              >
                View Our Pricing
              </Button>
            </div>
          </div>
        </section>

              {marketInsights.map((insight, index) => (<Card;
                  }
                  key={index}

                    {insight.icon}
                  </div>;
                  <p className={`text-lg font-semibold ${insight.color}`}>`
                    {insight.insight}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}


                        {service && service.zionPricing.starter}
                  </p>;
                </Card>))}
            </div>;
          </div>;
        </section>;
        {/* Detailed Comparison */}

                  <div;
                    className={`w - 20 h - 20 rounded - 3xl bg - gradient - to - br ${service.color} flex items - center justify - center text - 4xl mx - auto mb - 6`}>`
                    {service.icon}
                  </div>;

                          {service.features.map((feature, featureIndex) => (<div;
                              }
                              key={featureIndex}

                            {service.zionPricing.starter}
                          </p>;
                        </div>;
                      </div>;
                    </Card>;
                  </div>;
                  {/* Competitors */}

                            {competitor.name}
                          ))}
                              <Star
                          </div>;
                          <div className='flex items-center justify-center mb-4>;
                            {[...Array(5)].map((_, i) => (<Star;
              </p>
            </div>

            {serviceComparisons.map((service, serviceIndex) => (
              <div key={serviceIndex} className=mb-24">
                <div className="text-center mb-16>
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl mx-auto mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className=text-3xl font-bold text-white mb-4">{service.service}</h3>
                  <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-300>
                    <span>Starter: <span className=text-green-400 font-semibold">{service.zionPricing.starter}</span></span>
                    <span>Professional: <span className="text-blue-400 font-semibold>{service.zionPricing.professional}</span></span>
                    <span>Enterprise: <span className=text-purple-400 font-semibold">{service.zionPricing.enterprise}</span></span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8>
                  {/* Zion Service */}
                  <div className=lg:col-span-1">
                    <Card className="h-full border-2 border-green-500 bg-green-500/5>
                      <div className=text-center p-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-4>
                          Zion {service.service}
                        </div>
                        <h4 className=text-xl font-bold text-white mb-4">Best Value</h4>
                        <div className="space-y-3 mb-6>
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className=flex items-center text-gray-300">
                              <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 />
                              <span className=text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-center>
                          <p className=text-green-400 font-semibold mb-2">Starting at</p>
                          <p className="text-2xl font-bold text-white>{service.zionPricing.starter}</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Competitors */}
                  {service.competitors.map((competitor, compIndex) => (
                    <div key={compIndex} className=lg:col-span-1">
                      <Card className="h-full border border-gray-700>
                        <div className=text-center p-6">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 text-sm font-medium mb-4>
                            {competitor.name}
                          </div>

                            ))}

<span className='text-sm text-gray-400 ml-2'>'
                              {competitor.rating}
                            </span>
                          </div>

                                    {pro}
                                  </li>;
                                ))}</ul>;
                            </div>;
                            <div>;
                              <p className=text-red-400 font-medium mb-1">Cons:</p>;
                              <ul className="text-gray-300 space-y-1>;
                                {competitor.cons.map((con, conIndex) => (<li key={conIndex} className=flex items-center">;
                                    <X className="w-3 h-3 text-red-400 mr-2 flex-shrink-0 />;
<p className='text-red-400 font-medium mb-1>;
                                Cons:;
                              </p>;
                              <ul className=text-gray-300 space-y-1'>;
                                {competitor.cons.map((con, conIndex) => (<li;
                                    key={conIndex}
                                    className='flex items-center;
                                  >;
                                    <X className=w-3 h-3 text-red-400 mr-2 flex-shrink-0' />;
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>

                                    {con}
                                  </li>
                                ))}
                            <p className=text-green-400 font-semibold text-sm">{competitor.savings}</p>
                              </ul>
                            </div>
                          </div>
                          <div className="text-center>
                            <p className=text-green-400 font-semibold text-sm">{competitor.savings}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                              </ul>;
                            </div>;
                          </div>;

                          </div>;
                        </div>;
                      </Card>;
                    </div>;
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}

              >
                Try DevOps Automation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
        {/* CTA Section */}<section className=py - 24 bg - gradient - to - r from - indigo - 600 to - purple - 600'>;
          <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center>;
            <h2 className=text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
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
                className=bg-white text-indigo-600 hover:bg-gray-100'              >                href="/ai-content-generator;
                variant=secondary";
                size="lg;
                className=bg-white text-indigo-600 hover:bg-gray-100";
                Try AI Content Generator;
              </Button>;
                className='bg-white text-indigo-600 hover:bg-gray-100;
              >;
                Try DevOps Automation;
              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
                Try DevOps Automation
              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;
                className=bg-white text-indigo-600 hover:bg-gray-100'              >                href="/ai-content-generator
                variant=secondary"
                size="lg
                className=bg-white text-indigo-600 hover:bg-gray-100"
                Try AI Content Generator
              </Button>

  )}
  )
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
