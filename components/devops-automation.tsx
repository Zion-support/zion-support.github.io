





  return (

    <>

      <Head><title>
          DevOps Automation - Zion Tech Group | Professional CI/CD &
          Infrastructure Automation;
        </title>
        <meta;
name='description'
          content='Professional DevOps automation platform with CI/CD, infrastructure as code, and security automation. Plans starting at $39/month.'
           />
        <meta;
property='og:title'
          content='DevOps Automation - Zion Tech Group'
           />
        <meta;
property='og:description'
          content='Professional DevOps automation starting at $39/month. CI/CD pipelines, infrastructure as code, and security automation.'
           />
        <meta name='twitter: card' content='summary_large_image'    />
      <div className='min-h-screen bg-black'    />
        {/* Hero Section *,}
}
        <section className='pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20'    />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />
            <div className='mb-8'    />
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'    />
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse'    />
                DevOps Automation Platform;
              </div>
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'    />
              DevOps Automation;
            </h1>
            <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12'    />
              Streamline your development workflow with automated CI/CD;
pipelines, infrastructure as code, and intelligent security;
automation. Deploy faster, safer, and more reliably.

            </p>
            <div className='flex flex-col sm: flex-row gap-4 justify-center'    />
              <Button;
href='#pricing'
                variant='primary'
                size='lg'


                className='bg-blue-600 hover:bg-blue-700 text-white'
                  />
                Start Free Trial;
              </Button>
              <Button;
href='#demo'
                variant='outline'
                size='lg'

                className='border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  />
                Watch Demo;

              </Button>
            </div>
          </div>
        </section>

        {/* Features Section *,}
}
<section className='py-24 bg-gray-900'    />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />
            <div className='text-center mb-20'    />
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'    />
                Complete DevOps Automation Suite;
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />
                Everything you need to automate your development and deployment;
processes.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'    />
              {features.map((feature, index) => (}
                <Card;}
key={index}
                  className='text-center group hover: scale-105 transition-transform duration-300'
                    />
                  <div;
className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 ${feature.color}`}
                      />
                    {feature.icon}
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-4'    />
                    {feature.title}
                  </h3>
                  <p className='text-gray-400'    />{feature.description}</p>

                </Card>
              ),
}
            </div>
          </div>
        </section>


            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;



<section className='py-24 bg-gray-900'    />;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
            <div className='text-center mb-20'    />;
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'    />;
                Complete DevOps Automation Suite;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />;



                  </div>;










        {/* Pricing Section */}
        <section id='pricing' className='py-24 bg-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>





                Simple, Transparent Pricing
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                Choose the plan that fits your DevOps needs. All plans include a
                14-day free trial.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>              {pricingPlans.map((plan, index) => (                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the plan that fits your DevOps needs. All plans include a 14-day free trial.

                <Card
                  key={index}
                  className={`relative p-8 ${plan.color} transition-all duration-300 hover:scale-105 ${
                    plan.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >;
                  {plan.popular && (



                          {feature}



                        </li>
                      ))}
                    </ul>;
                    <Button





                      href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                      variant={plan.popular ? 'primary' : 'outline'}


                      }`}
                    >;
                      {plan.cta}





        {/* Market Comparison Section */}
        <section className='py-24 bg-gray-800'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-20'>;
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
                See why Zion DevOps is the smart choice for automation.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>;
              {marketComparison && marketComparison.map((competitor, index) => (;
                <Card key={index} className='p-6'>;
                  <div className='text-center mb-6'>;
                    <h3 className='text-xl font-bold text-white mb-2'>;
                      {competitor && competitor.competitor}
                    </h3>;
                    <div className='flex items-center justify-center mb-2'>                      {[...Array(5)].map((_, i) => (                <Card key={index} className="p-6">;
                  <div className="text-center mb-6">;
                    <h3 className="text-xl font-bold text-white mb-2">{competitor && competitor.competitor}</h3>;
                    <div className="flex items-center justify-center mb-2">;




              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />
                See why Zion DevOps is the smart choice for automation.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'    />
              {marketComparison.map((competitor, index) => (}
                <Card key={index} className='p-6'    />
                  <div className='text-center mb-6'    />
                    <h3 className='text-xl font-bold text-white mb-2'    />
                      {competitor.competitor}
                    </h3>
                    <div className='flex items-center justify-center mb-2'    />
                      {[...Array(5)].map((_, i) => (}
                        <Star;}
key={i}
                          className={`w-5 h-5 ${i < Math && Math.floor(parseFloat(competitor && competitor.rating))? 'text-yellow-400 fill-current';}
                              : 'text-gray-400';}

                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math && Math.floor(parseFloat(competitor && competitor.rating))
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'

                          }`}
                           />;


                      ))}



                        ))}
                      </ul>;
                    </div>;

                  </div>;
                </Card>;
              ))}





                      <Star
                        key={i}
                        className='w-5 h-5 text-yellow-400 fill-current'
                      />
                    ))}






                </Card>
              ))}


                Contact Sales
                    </Button>;
                  </div>;
                </Card>))}
            </div>;
          </div>;
        </section>;
        {/* Market Comparison Section */}
        <section className='py - 24 bg - gray - 800'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
                See why Zion DevOps is the smart choice for automation.;
              </p>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>;
              {market_comparison.map ((competitor, index) => (
                <Card key={index} className='p - 6'>;
                  <div className='text - center mb - 6'>;
                    <h3 className='text - xl font - bold text - white mb - 2'>;
                      {competitor.competitor}
                    </h3>;
                    <div className='flex items - center justify - center mb - 2'>                      {[...Array (5)].map ((_, i) => (                <Card key={index} className="p - 6">;
                  <div className="text - center mb - 6">;
                    <h3 className="text - xl font - bold text - white mb - 2">{competitor.competitor}</h3>;
                    <div className="flex items - center justify - center mb - 2">;
                        <Star;
                          key={i}
                          className={`w - 5 h - 5 ${
                            i < Math.floor (parse_float (competitor.rating));
                              ? 'text - yellow - 400 fill - current';
                              : 'text - gray - 400';
                          }`}
                        />))}
                    </div>;
                    <p className='text - sm text - gray - 400'>{competitor.rating}</p>;
                  </div>;
                  <div className='mb - 4'>;
                    <p className='text - lg font - semibold text - white mb - 1'>;
                      Pricing: {competitor.pricing}
                    </p>;
                    <p className='text - sm text - gray - 400'>;
                      Repositories: {competitor.repositories}
                    </p>;
                  </div>;
                  <div className='space - y-2'>;
                    <div>;
                      <p className='text - sm font - medium text - green - 400 mb - 1'>;
                        Pros:;
                      </p>;
                      <ul className='text - sm text - gray - 300 space - y-1'>;
                        {competitor.pros.map ((pro, pro_index) => (
                          <li key={pro_index} className='flex items - center'>;
                            <Check className='w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0' />                            {pro}                  </div>;
                  <div className="mb - 4">;
                    <p className="text - lg font - semibold text - white mb - 1">Pricing: {competitor.pricing}</p>;
                    <p className="text - sm text - gray - 400">Repositories: {competitor.repositories}</p>;
                  </div>;
                  <div className="space - y-2">;
                    <div>;
                      <p className="text - sm font - medium text - green - 400 mb - 1">Pros:</p>;
                      <ul className="text - sm text - gray - 300 space - y-1">;
                        {competitor.pros.map ((pro, pro_index) => (
                          <li key={pro_index} className="flex items - center">;
                            <Check className="w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0" />;
                            {pro}
                          </li>))}
                      </ul>;
                    </div>;
                    <div>;
                      <p className='text - sm font - medium text - red - 400 mb - 1'>;
                        Cons:;
                      </p>;
                      <ul className='text - sm text - gray - 300 space - y-1'>;
                        {competitor.cons.map ((con, con_index) => (
                          <li key={con_index} className='flex items - center'>;
                            <span className='w - 4 h - 4 text - red - 400 mr - 2 flex - shrink - 0'>;
                              ×;
                            </span>                            {con}                      <p className="text - sm font - medium text - red - 400 mb - 1">Cons:</p>;
                      <ul className="text - sm text - gray - 300 space - y-1">;
                        {competitor.cons.map ((con, con_index) => (
                          <li key={con_index} className="flex items - center">;
                            <span className="w - 4 h - 4 text - red - 400 mr - 2 flex - shrink - 0">×</span>;
                          </li>))}
                      </ul>;
                    </div>;
                  </div>;
                </Card>))}
            </div>;
          </div>;
        </section>;
        {/* Testimonials Section */}
        <section className='py - 24 bg - gray - 900'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
                Trusted by DevOps Teams Worldwide;
              </h2>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>;
              {testimonials.map ((testimonial, index) => (
                <Card key={index} className='p - 6'>;
                  <div className='flex items - center mb - 4'>;
                    {[...Array (testimonial.rating)].map ((_, i) => (
                      <Star;
                        key={i}
                        className='w - 5 h - 5 text - yellow - 400 fill - current';
                      />))}
                  </div>;
                  <p className='text - gray - 300 mb - 6 italic'>;
                    "{testimonial.content}";
                  </p>;
                  <div>;
                    <p className='font - semibold text - white'>;
                      {testimonial.name}
                    </p>;
                    <p className='text - sm text - gray - 400'>{testimonial.role}</p>;
                    <p className='text - sm text - blue - 400'>;
                      {testimonial.company}
                    </p>                  </div>                Trusted by DevOps Teams Worldwide;
              </h2>;
            </div>;
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
              {testimonials.map ((testimonial, index) => (
                <Card key={index} className="p - 6">;
                  <div className="flex items - center mb - 4">;
                    {[...Array (testimonial.rating)].map ((_, i) => (
                      <Star key={i} className="w - 5 h - 5 text - yellow - 400 fill - current" />))}
                  </div>;
                  <p className="text - gray - 300 mb - 6 italic">"{testimonial.content}"</p>;
                  <div>;
                    <p className="font - semibold text - white">{testimonial.name}</p>;
                    <p className="text - sm text - gray - 400">{testimonial.role}</p>;
                    <p className="text - sm text - blue - 400">{testimonial.company}</p>;
                  </div>;
                </Card>))}
            </div>;
          </div>;
        </section>;





