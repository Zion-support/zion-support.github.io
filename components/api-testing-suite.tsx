  const testTypes = [
    {
      name: 'Functional Testing',
      description: 'Verify that your API endpoints work correctly and return expected responses.',
      tests: ['Request/response validationStatus code verificationData format checkingError handling']
};
    {
      name: 'Performance Testing',
      description: 'Ensure your APIs can handle expected load and perform under pressure.',
      tests: ['Load testingStress testingResponse time analysisThroughput measurement']
};
    {
      name: 'Security Testing',
      description: 'Identify security vulnerabilities and ensure proper authentication and authorization.',
      tests: ['Authentication testingAuthorization checksInput validationSQL injection testing']
};
    {
      name: 'Integration Testing',
      description: 'Test how your APIs integrate with other systems and services.',
      tests: ['End-to-end workflowsThird-party integrationsData flow validationError propagation']
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';
  Code,
  Zap,
  Shield,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play,
  AlertTriangle,

} from 'lucide-react';import { Code, Zap, Shield, BarChart3, CheckCircle, ArrowRight, Play, AlertTriangle, Clock, Database } from 'lucide-react';

export default function APITestingSuitePage() {
              Our API testing suite provides everything you need to ensure your;
              APIs are reliable, performant, and secure.;
            </p>;
          </div>;
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Our API testing suite provides everything you need to ensure your APIs are reliable, performant, and secure.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {features.map((feature, index) => (
                      className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature && feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                    />;
                  </div>;
                  <div className='flex-1'>;
                    <h3 className='text-2xl font-bold mb-4 text-white'>;
                      {feature && feature.title}
                    </h3>;
                    <p className='text-gray-400 leading-relaxed'>                      {feature && feature.description}              Powerful Testing Features;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              Our API testing suite provides everything you need to ensure your APIs are reliable, performant, and secure.;
            </p>;
          </div>;

      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Comprehensive Testing Coverage

            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We cover all aspects of API testing to ensure your APIs meet the highest standards of quality and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testTypes.map((type, index) => (
                      className='flex items-center text-gray-300'>;
                      <CheckCircle className='w-4 h-4 text-indigo-400 mr-3 flex-shrink-0' />                      {test}              Comprehensive Testing Coverage;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              We cover all aspects of API testing to ensure your APIs meet the highest standards of quality and reliability.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {testTypes && testTypes.map((type, index) => (;
              <Card
                key={index}
                className="card-hover border-gradient-indigo"


                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <h3 className="text-xl font-bold mb-4 text-white">{type && type.name}</h3>;
                <p className="text-gray-400 mb-6">{type && type.description}</p>;
                <ul className="space-y-2">;
                  {type && type.tests.map((test, testIndex) => (;
                    <li key={testIndex} className="flex items-center text-gray-300">;
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />;
                      {test}
                    </li>
                  ))}
                </ul>

              </Card>
            ))}


        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
                API Test Results

              </h2>
              <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />
                Here's a sample API test result. Get comprehensive insights for;
your own API endpoints.
              </p>
            </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Performance Metrics */}
              <Card className='border-gradient-indigo'>
                <h3 className='text-2xl font-bold mb-6 text-white'>Performance Metrics</h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-400'>Response Time</span>
                    <span className='text-indigo-400 font-bold'>{testResults.responseTime}</span>
                  </div>
                  <div className='flex justify-between items-center'>'
                    <span className='text-gray-400'>Throughput</span>'
                    <span className='text-green-400 font-bold'>High</span>'
                  </div>
                  <div className='flex justify-between items-center'>'
                    <span className='text-gray-400'>Reliability</span>'
                    <span className='text-green-400 font-bold'>99.9%</span>'
                  </div>
                  <div className='flex justify-between items-center'>'
                    <span className='text-gray-400'>Uptime</span>'




            <Card className='border-gradient-indigo'>;
              <h3 className='text-2xl font-bold mb-6 text-white'>;
                Optimization Recommendations;
              </h3>;
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
                {testResults && testResults.recommendations.map((rec, index) => (<div key={index} className='flex items-start space-x-3'>;
                    <CheckCircle className='w-5 h-5 text-indigo-400 mt-1 flex-shrink-0' />;
                    <span className='text-gray-300'>{rec}</span>                  </div>            <Card className="border-gradient-indigo">;
              <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                {testResults && testResults.recommendations.map((rec, index) => (;
                  <div key={index} className="flex items-start space-x-3">;
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />;
                    <span className="text-gray-300">{rec}</span>;
                ))}
              </div>;
            </Card>;
          </div>;
        </section>;

              Simple Pricing
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Choose the API testing plan that best fits your development and
              testing needs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricing.map((plan, index) => (              Simple Pricing
      <section id="pricing" className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Simple Pricing

      )}

              Simple Pricing
      {/* Pricing Section */}
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>'
              Choose the API testing plan that best fits your development and,
testing needs.
            </p>
          </div>

          <div className='grid grid-cols-1 'md':grid-cols-3 gap-8'>'
            {pricing.map((plan, index) => (
              className='bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl'
            >
              Start Free Trial
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
      <section className='section-padding bg-gradient-to-r from-indigo-600 to-purple-700 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />;
        <div className='container-cursor text-center relative z-10'>;
          <h2 className='text-responsive-lg font-bold text-white mb-8 text-shadow-lg'>;
          </h2>;
          <p className='text-responsive-md text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed'>;'
            Join thousands of developers and businesses using our API testing;
            suite to ensure their APIs are reliable and performant.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>;
            <Button
              href='/contact'
              size='lg'
            <Button
              href='/contact'
              variant='outline'
              size='lg'

            <Button,
href='/contact''
              size='lg''
            <Button,
href='/contact''
variant='outline';'
              size='lg''

              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
              className='border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl'>              href="/contact";
              variant="outline";
              size="lg";
              className="border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl";
              Schedule Demo;
            </Button>;
          </div>;
        </div>;
      </section>;
  );
}
    </>);
}
              className='border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl'            >              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl"
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>


}
  );
}

    </>);
);
  );
}

