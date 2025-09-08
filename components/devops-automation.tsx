        {/* Automation Examples Section */}
        <section className='py-24 bg-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>
                What You Can Automate
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                See how Zion DevOps can transform your development workflow.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {automationExamples.map((example, index) => (
                <Card
                  key={index}
                  className='text-center group hover:scale-105 transition-transform duration-300'
                >
                  <div

        <section className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                What You Can Automate
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how Zion DevOps can transform your development workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationExamples.map((example, index) => (
                <Card
                  </div>;
                  <h3 className="text - xl font - semibold text - white mb - 4">{feature.title}</h3>;
                  <p className="text - gray - 400">{feature.description}</p>;
                </Card>))}
            </div>;
          </div>;
        </section>;
        {/* Automation Examples Section */}
        <section className='py - 24 bg - gray - 800'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
                What You Can Automate;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
                See how Zion DevOps can transform your development workflow.;
              </p>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;
              {automation_examples.map ((example, index) => (
                <Card;
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 bg-gradient-to-br ${example.color}`}>
                    {example.icon}
                  </div>;
                  <h3 className='text - xl font - semibold text - white mb - 4'>;
                    {example.title}
                  </h3>;
                  <p className='text - gray - 400'>{example.description}</p>                </Card>                What You Can Automate;
              </h2>;
              <p className="text - xl text - gray - 400 max-w-3xl mx-auto">;
                See how Zion DevOps can transform your development workflow.;
              </p>;
            </div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-4 gap-8">;
              {automation_examples.map ((example, index) => (
                <Card;

                  key={index}
                  className="text - center group hover:scale - 105 transition-transform duration-300";
                >;
                  <div className={`w - 16 h - 16 rounded - 2xl flex items - center justify - center text - 3xl mx - auto mb - 6 bg - gradient - to - br ${example.color}`}>;
                    {example.icon}

                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 bg-gradient-to-br ${example.color}`}
                  >
                    {example.icon}
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-4'>
                    {example.title}
                  </h3>

                  <p className='text-gray-400'>{example.description}</p>                </Card>

                  <h3 className=text-xl font-semibold text-white mb-4">{example.title}</h3>
                  <p className="text-gray-400>{example.description}</p>
                </Card>



              ))}
        {/* Pricing Section */}

                Choose the plan that fits your DevOps needs. All plans include a;
                14-day free trial.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 'md':grid-cols-3 gap-8'>              {pricingPlans && pricingPlans.map((plan, index) => (                Simple, Transparent Pricing;'
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;'
                }
                Choose the plan that fits your DevOps needs. All plans include a 14-day free trial.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 'md':grid-cols-3 gap-8'>;'
              {pricingPlans && pricingPlans.map((plan, index) => (<Card;
                  }
                  key={index}
                  className={`relative p-8 ${plan && plan.color} transition-all duration-300 'hover':scale-105 ${plan && plan.popular ? 'ring-2 ring-blue-500' : '';'
                  }`}>`
                  {plan && plan.popular && (<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>;'
                      <span className='bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium'>                        Most Popular;'
                      </span>;
                    </div>;
                  )}                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>;'
                      <span className='bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium'>;'
                        Most Popular;
                      </span>;
                    </div>;
                  )}
                  <div className='text-center'>;'
                    <h3 className='text-2xl font-bold text-white mb-2'>;'
                      {plan && plan.name}
                    </h3>;
                    <div className='mb-6'>;'
                      <span className='text-4xl font-bold text-white'>;'
                        {plan && plan.price}
                      </span>;
                      <span className='text-gray-400'>{plan && plan.period}</span>;'
                    </div>;
                    <p className='text-gray-300 mb-8'>{plan && plan.description}</p>;'
                    <ul className='text-left space-y-3 mb-8'>;'
                      {plan && plan.features.map((feature, featureIndex) => (<li;
                          }
                          key={featureIndex}
                          className='flex items-center text-gray-300'>;
                          <Check className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0' />                          {feature}                    </div>;
                    <p className="text-gray-300 mb-8">{plan && plan.description}</p>;
                    <ul className="text-left space-y-3 mb-8">;
                      {plan && plan.features.map((feature, featureIndex) => (;
                        <li key={featureIndex} className="flex items-center text-gray-300">;
                          <Check className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />;


        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">


                    <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                      <span className='bg - blue - 500 text - white px - 4 py - 2 rounded - full text - sm font - medium'>                        Most Popular;
                      </span>;
                    </div>)}                    <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2">;
                      <span className="bg - blue - 500 text - white px - 4 py - 2 rounded - full text - sm font - medium">;
                        Most Popular;
                      </span>;}
                    </div>;}
                  )}
<div className='text-center'    />;
                    <h3 className='text-2xl font-bold text-white mb-2'    />;
                      {plan.name}
                    </h3>;
                    <div className='mb-6'    />;
                      <span className='text-4xl font-bold text-white'    />;
                        {plan.price}
                      </span>;
                      <span className='text-gray-400'    />{plan.period}</span>;
                    </div>;
                    <p className='text-gray-300 mb-8'    />{plan.description}</p>;
                    <ul className='text-left space-y-3 mb-8'    />;
                      {plan.features.map((feature, featureIndex) => (<li;}
                          key={featureIndex}
                          className='flex items-center text-gray-300'    />

                          <Check className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0'    />;
                          {feature}{feature}</li>;
                          {feature}
                        </li>;
                      ))}
                    </ul>;

                    <Button;
href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                      variant={plan.popular ? 'primary' : 'outline'}
size='lg'
                      className={`w-full ${
                        plan.popular;
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'

                    <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'    />;
                      <span className='bg - blue - 500 text - white px - 4 py - 2 rounded - full text - sm font - medium'    />                        Most Popular;
                      </span>
    </div>}
  );}
}                    <div className=\"absolute -top - 4 left-1/2 transform -translate-x-1 / 2\"    />;
                      <span className=\"bg - blue - 500 text - white px - 4 py - 2 rounded - full text-sm font-medium\"    />;
                        Most Popular;
                      </span>
    </div>
  );
}
                  <div className='text - center'    />;
                    <h3 className='text - 2xl font - bold text - white mb - 2'    />;
                      {plan.name}
                    </h3>;
                    <div className='mb - 6'    />;
                      <span className='text - 4xl font - bold text - white'    />;
                        {plan.price}
                      </span>;
                      <span className='text - gray - 400'    />{plan.period}</span>;
                    </div>;
                    <p className='text - gray - 300 mb - 8'    />{plan.description}</p>;
                    <ul className='text - left space - y-3 mb - 8'    />;
                      {plan.features.map ((feature, feature_index) => (<li;}
                          key={feature_index}
                          className='flex items - center text - gray - 300'    />

                          <Check className='w - 5 h - 5 text - blue - 400 mr - 3 flex - shrink - 0'    />                          {feature}                    </div>;
                    <p className=\"text - gray-300 mb-8\"    />{plan.description}</p>;
                    <ul className=\"text - left space-y-3 mb-8\"    />;
                      {plan.features.map ((feature, feature_index) => (<li key={feature_index} className=\"flex items - center text-gray-300\"    />;
                          <Check className=\"w - 5 h - 5 text - blue - 400 mr - 3 flex-shrink-0\"    />;


                      href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                      variant={plan.popular ? 'primary' : 'outline'}
                      size='lg';
                      className={`w - full ${
                        plan.popular;
                          ? 'bg - blue - 600 hover:bg - blue - 700 text - white'                          : 'border - blue - 500 text - blue - 400 hover:bg - blue - 500 hover:text - white'                      size="lg";
                      className={`w - full ${
                        plan.popular;
                          ? 'bg - blue - 600 hover:bg - blue - 700 text - white';
                        plan.popular

                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 

                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                      <span className='bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium'>                        Most Popular
                      </span>
                    </div>
                  )}                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className='text-center'>
                    <h3 className='text-2xl font-bold text-white mb-2'>
                      {plan.name}
                    </h3>
                    <div className='mb-6'>
                      <span className='text-4xl font-bold text-white'>
                        {plan.price}
                      </span>
                      <span className='text-gray-400'>{plan.period}</span>
                    </div>
                    <p className='text-gray-300 mb-8'>{plan.description}</p>
                    <ul className='text-left space-y-3 mb-8'>
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className='flex items-center text-gray-300'
                        >
                          <Check className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0' />                          {feature}                    </div>
                    <p className="text-gray-300 mb-8">{plan.description}</p>
                    <ul className="text-left space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                          {feature}

                          {feature}

                        </li>
                      ))}
                    </ul>
                    <Button
                      href={plan && plan.name === 'Enterprise' ? '/contact' : '#signup'}
                      variant={plan && plan.popular ? 'primary' : 'outline'}
                      size='lg'
                      className={`w-full ${
                        plan && plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'                          : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'                      size="lg"
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                    <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                      <span className='bg - blue - 500 text - white px - 4 py - 2 rounded - full text - sm font - medium'>                        Most Popular;
                      </span>;
                    </div>)}                    <div className="absolute -top - 4 left-1/2 transform -translate-x-1 / 2">;
                      <span className="bg - blue - 500 text - white px - 4 py - 2 rounded - full text-sm font-medium">;
                        Most Popular;
                      </span>;
                    </div>)}
                  <div className='text - center'>;
                    <h3 className='text - 2xl font - bold text - white mb - 2'>;
                      {plan.name}
                    </h3>;
                    <div className='mb - 6'>;
                      <span className='text - 4xl font - bold text - white'>;
                        {plan.price}
                      </span>;
                      <span className='text - gray - 400'>{plan.period}</span>;
                    </div>;
                    <p className='text - gray - 300 mb - 8'>{plan.description}</p>;
                    <ul className='text - left space - y-3 mb - 8'>;
                      {plan.features.map ((feature, feature_index) => (
                        <li;
                          key={feature_index}
                          className='flex items - center text - gray - 300';
                        >;
                          <Check className='w - 5 h - 5 text - blue - 400 mr - 3 flex - shrink - 0' />                          {feature}                    </div>;
                    <p className="text - gray-300 mb-8">{plan.description}</p>;
                    <ul className="text - left space-y-3 mb-8">;
                      {plan.features.map ((feature, feature_index) => (
                        <li key={feature_index} className="flex items - center text-gray-300">;
                          <Check className="w - 5 h - 5 text - blue - 400 mr - 3 flex-shrink-0" />;
                          {feature}
                        </li>))}
                    </ul>;
                    <Button;
                      href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                      variant={plan.popular ? 'primary' : 'outline'}
                      size='lg'
                      className={`w-full ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'                          : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'                      size="lg"
                      className={`w-full ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 

                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 

                          ? 'bg-blue-600 hover:bg-blue-700 text-white'                          : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'

                        plan.popular;
                          ? 'bg-blue-600 hover: bg-blue-700 text-white'

                          : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'

                      }`}    />


                        plan && plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      }`}>;
                      {plan && plan.cta}
                    </Button>;
                  </div>;
                </Card>;
              ))}
            </div>
          </div>
        </section>





        {/* Market Comparison Section */}
        <section className='py-24 bg-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>


        {/* Market Comparison Section */}
        <section className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                How We Compare to the Competition



              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See why Zion DevOps is the smart choice for automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketComparison.map((competitor, index) => (
                <Card key={index} className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{competitor.competitor}</h3>
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className='text-sm font-medium text-red-400 mb-1'>Cons:</p>
                      <ul className='text-sm text-gray-300 space-y-1'>
                        {competitor.cons.map((con, conIndex) => (
                          <li key={conIndex} className='flex items-center'>
                            <span className='w-4 h-4 text-red-400 mr-2 flex-shrink-0'>×</span>
                            {con}
                          </li>
                        ))}
                  </div>;
                  <p className='text-gray-300 mb-6 italic'>'{testimonial.content}'</p>;
                  <div>;
                    <p className='font-semibold text-white'>{testimonial.name}</p>;
                    <p className='text-sm text-gray-400'>{testimonial.role}</p>;
                    <p className='text-sm text-blue-400'>{testimonial.company}</p>;
                  </div>;
                  <p className='text-gray-300 mb-6 italic'>;
                    '{testimonial.content}';
                  </p>;
                  <div>;
                    <p className='font-semibold text-white'>;
                      {testimonial.name}
                    </p>;
                    <p className='text-sm text-gray-400'>{testimonial.role}</p>;
                    <p className='text-sm text-blue-400'>;
                      {testimonial.company}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}

            </div>;
          </div>;
        </section>;

        {/* Testimonials Section */}


        {/* Testimonials Section */}
        <section className='py-24 bg-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>
                Trusted by DevOps Teams Worldwide
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {testimonials.map((testimonial, index) => (
                <Card key={index} className='p-6'>
                  <div className='flex items-center mb-4'>
                    {[...Array(testimonial.rating)].map((_, i) => (
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Trusted by DevOps Teams Worldwide
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-blue-400">{testimonial.company}</p>
                  </div>

                    </p>                  </div>

                  </div>
