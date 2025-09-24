import { Users, Search, CheckCircle, ArrowRight, ExternalLink, Phone, Mail, Sparkles, Target, TrendingUp, Shield, Briefcase, Award } from "lucide-react"
export default function AIHRTalentPlatform() {;
  const features = [;
    'AI-powered candidate screening and matchingAutomated resume parsing and skill assessment',;
    'Intelligent interview scheduling and feedbackEmployee performance analytics and insights',;
    'Predictive turnover analysis and retention strategiesAutomated onboarding and training workflows',;
    'Diversity and inclusion analyticsCompliance monitoring and reporting'
  ],;

  const benefits = [;
    'Reduce time-to-hire by 60%Improve candidate quality by 40%'
    'Reduce hiring costs by 30%Increase employee retention by 25%'
    'Automate routine HR tasksData-driven decision making'
  ];
  const pricing = [;
    { ;
      name: 'Starter',price: '$149/mo',features: ['Up to 50 employeesBasic AI screening', 'Standard reportingEmail support'],;
      popular: false;
    };
    { ;
      name: 'Professional',price: '$399/mo',features: ['Up to 200 employeesAdvanced AI analytics', 'Custom workflowsPriority support', 'Integration APIs'],;
      popular: true;
    };
    { ;
      name: 'Enterprise',price: '$999/mo',features: ['Unlimited employeesFull AI suite', 'Custom AI trainingDedicated support', 'White-label solutionsAdvanced compliance'],;
      popular: false;
    };
  ];
  const useCases = [;
    'Recruitment and talent acquisitionEmployee performance management',;
    'Learning and developmentWorkforce planning and analytics',;
    'Compliance and HR operationsEmployee engagement and retention'
  ],;

  const platformModules = [;
    'Talent AcquisitionPerformance Management',;
    'Learning & DevelopmentWorkforce Analytics',;
    'Employee EngagementCompliance & Reporting',;
    'Onboarding & OffboardingSuccession Planning'
  ];
  return (
    <div className="min-h-screen bg-white">;
      {/* Hero Section */};
      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 py-20 text-center text-white">;
        <div className="max-w-5xl mx-auto px-6">;
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;
            <Sparkles className="w-4 h-4 mr-2" /> AI-Powered HR & Talent Management;
          </[^>]*>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI HR & Talent Platform</[^>]*>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">;
            Transform your HR operations with AI-driven insights, automated workflows, and intelligent talent management. ;
            Build better teams and drive organizational success.;
          </[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a href="#pricing" className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors">;
              View Pricing;
            </[^>]*>
            <a href="https://[^;]*
              Learn More;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-16 max-w-6xl mx-auto px-6">;
        <div className="text-center mb-16">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive HR Intelligence</[^>]*>
          <p className="text-xl text-gray-600">Everything you need to manage talent intelligently</[^>]*>
        </[^>]*>
        ;
        <div className="grid md:grid-cols-2 gap-8">;
          <div>;
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Capabilities</[^>]*>
            <ul className="space-y-4">;
              {features.map((feature, index) => (;
                <li key={index} className="flex items-start">;
                  <[^>]*/>
                  <span className="text-gray-700">{feature}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
          ;
          <div className="bg-gray-50 rounded-xl p-8">;
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</[^>]*>
            <ul className="space-y-4">;
              {benefits.map((benefit, index) => (;
                <li key={index} className="flex items-start">;
                  <[^>]*/>
                  <span className="text-gray-700">{benefit}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Platform Modules Section */};
      <section className="py-16 bg-gray-50">;
        <div className="max-w-6xl mx-auto px-6">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Platform Modules</[^>]*>
            <p className="text-xl text-gray-600">From recruitment to retention, we cover all your HR needs</[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-4 gap-6">;
            {platformModules.map((module, index) => (;
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">;
                <[^>]*/>
                <h3 className="text-lg font-semibold text-gray-900 text-sm">{module}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-16 max-w-6xl mx-auto px-6">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</[^>]*>
          <p className="text-xl text-gray-600">Ideal for HR teams and organizations seeking to optimize their talent management</[^>]*>
        </[^>]*>
        ;
        <div className="grid md:grid-cols-3 gap-6">;
          {useCases.map((useCase, index) => (;
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">;
              <[^>]*/>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase}</[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {/* AI Capabilities Section */};
      <section className="py-16 bg-orange-50">;
        <div className="max-w-6xl mx-auto px-6">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Capabilities</[^>]*>
            <p className="text-xl text-gray-600">Leverage artificial intelligence to make smarter HR decisions</[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-3 gap-8">;
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">;
              <[^>]*/>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Candidate Matching</[^>]*>
              <p className="text-gray-600">AI algorithms match candidates to job requirements with 90% accuracy</[^>]*>
            </[^>]*>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">;
              <[^>]*/>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</[^>]*>
              <p className="text-gray-600">Forecast employee turnover and identify retention risks early</[^>]*>
            </[^>]*>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">;
              <[^>]*/>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Insights</[^>]*>
              <p className="text-gray-600">AI-driven performance analysis and development recommendations</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Section */};
      <section id="pricing" className="py-16 bg-gray-50">;
        <div className="max-w-6xl mx-auto px-6">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</[^>]*>
            <p className="text-xl text-gray-600">Choose the plan that fits your organization size and needs</[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-3 gap-8">;
            {pricing.map((plan, index) => (;
              <div key={index} className={`relative bg-white rounded-xl p-8 shadow-lg border-2 ${;
                plan.popular ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-gray-200'
              }`}>;
                {plan.popular && (;&& (; (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </[^>]*>
                  </[^>]*>
                )};
                ;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</[^>]*>
                  <div className="text-4xl font-bold text-orange-600 mb-2">{plan.price}</[^>]*>
                  <p className="text-gray-600">per month</[^>]*>
                </[^>]*>
                ;
                <ul className="space-y-3 mb-8">;
                  {plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-start">;
                      <[^>]*/>
                      <span className="text-gray-700">{feature}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
                ;
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${;
                  plan.popular ;
                    ? 'bg-orange-600 text-white hover:bg-orange-700' ;
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>;
                  Get Started;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
          ;
          <div className="text-center mt-12">;
            <p className="text-gray-600 mb-4">Need a custom plan? Contact us for enterprise pricing</[^>]*>
            <a href="mailto:kleber@ziontechgroup.com" className="text-orange-600 hover:text-orange-700 font-semibold">;
              Contact Sales Team;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* ROI Section */};
      <section className="py-16 bg-orange-50">;
        <div className="max-w-6xl mx-auto px-6 text-center">;
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Results</[^>]*>
          <div className="grid md:grid-cols-3 gap-8">;
            <div className="bg-white rounded-lg p-6 shadow-sm">;
              <div className="text-3xl font-bold text-orange-600 mb-2">60%</[^>]*>
              <p className="text-gray-700">Faster time-to-hire</[^>]*>
            </[^>]*>
            <div className="bg-white rounded-lg p-6 shadow-sm">;
              <div className="text-3xl font-bold text-orange-600 mb-2">40%</[^>]*>
              <p className="text-gray-700">Better candidate quality</[^>]*>
            </[^>]*>
            <div className="bg-white rounded-lg p-6 shadow-sm">;
              <div className="text-3xl font-bold text-orange-600 mb-2">30%</[^>]*>
              <p className="text-gray-700">Reduced hiring costs</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-16 bg-gray-900 text-white">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your HR Operations?</[^>]*>
          <p className="text-xl text-gray-300 mb-8">;
            Join hundreds of organizations already using AI HR & Talent Platform to build better teams.;
          </[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors">;
              Start Free Trial;
            </[^>]*>
            <a href="tel:+13024640950" className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">;
              Call Us;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">;
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions? We're Here to Help</[^>]*>
        <div className="grid md: grid-cols-2 gap-8">;
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">;
            <[^>]*/>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</[^>]*>
            <p className="text-gray-600 mb-4">Speak with our HR technology experts</[^>]*>
            <a href="tel:+13024640950" className="text-orange-600 hover:text-orange-700 font-semibold">;
              +1 302 464 0950;
            </[^>]*>
          </[^>]*>
          ;
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">;
            <[^>]*/>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</[^>]*>
            <p className="text-gray-600 mb-4">Get detailed information and pricing</[^>]*>
            <a href="mailto:kleber@ziontechgroup.com" className="text-orange-600 hover:text-orange-700 font-semibold">;
              kleber@ziontechgroup.com
            </[^>]*>
          </[^>]*>
        </[^>]*>
        ;
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">;
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Website</[^>]*>
          <p className="text-gray-600 mb-4">;
            Learn more about our complete suite of AI-powered business solutions;
          </[^>]*>
          <a ;
            href="https://[^;]*
            target="_blank" ;
            rel="noreferrer" ;
            className="[^"]*"
          >;
            Visit ziontechgroup.com <[^>]*/>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};