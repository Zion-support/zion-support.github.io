import React from 'react';
import { ArrowRight, BarChart3, CheckCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton;

const AIDataAnalyticsPro = () => {
  const features = [
    {
          title: ';Real-time Analytics",
      description: "Process and analyze data in real-time with advanced AI algorithms",
      icon: <Activity className="w-6 h-6" />
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Modeling",
      description: "Build accurate predictive models using machine learning",
      icon: <TrendingUp className="w-6 h-6" />
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Visualization",
      description: "Create stunning interactive dashboards and reports",
      icon: <PieChart className="w-6 h-6" />
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Insights",
      description: "Get AI-powered insights and recommendations automatically",
      icon: <Brain className="w-6 h-6" />
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    
    <div>
    <EnhancedSEO />
      {/* Hero Section */}
      <section>
        <div>
    <div />
          <div />
  </div>
  <ResponsiveContainer />
          <div>
    <BarChart3 />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Analytics</span>
          </div>
          
          <h1>  <span>AI Data Analytics Pro
            </span></h1>
          
          <p />
            Transform your data into actionable insights with our advanced AI-powered analytics platform. 
            Get real-time processing, predictive modeling, and automated insights that drive business growth.
          </p>
          
          <div>
    <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5">}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5">}
            >
              View Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section />
        <ResponsiveContainer />
          <div>
    <h2 />
              Powerful Analytics Features
            </h2>
            <p />
              Everything you need to turn your data into business intelligence and actionable insights.
            </p>
          </div>
          <div />
            {features.map((feature, index) => (
              <FuturisticCard />
                <div />
                  {feature.icon}
                </div>
                <h3 />
                  {feature.title}
                </h3>
                <p />
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section />
        <ResponsiveContainer />
          <div>
    <h2 />
              Why Choose AI Data Analytics Pro?
            </h2>
            <p />
              Experience the power of AI-driven analytics that delivers measurable results.
            </p>
          </div>
          <div />
            {benefits.map((benefit, index) => (
              <div>
    <CheckCircle />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section />
        <ResponsiveContainer />
          <div>
    <h2 />
              Ready to Transform Your Data?
            </h2>
            <p />
              Join thousands of businesses using AI Data Analytics Pro to make data-driven decisions and drive growth.
            </p>
            <div>
    <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5">}
              >
                Start Your Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5">}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

    </div>
  );
};

export default AIDataAnalyticsPro;
',
'