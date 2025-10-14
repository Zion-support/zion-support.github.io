import React from 'react';
import { ArrowRight, BarChart3, CheckCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton;

const AIFinancialAnalysis = () => {
  const features = [
    {
          title: ';Predictive Financial Modeling",
      description: "Build accurate financial models and forecasts using AI",
      icon: <TrendingUp className="w-6 h-6" />
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Risk Assessment",
      description: "Advanced risk analysis and portfolio optimization",
      icon: <Shield className="w-6 h-6" />
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Market Analysis",
      description: "Monitor market trends and make informed decisions",
      icon: <Activity className="w-6 h-6" />
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive financial reports automatically",
      icon: <FileText className="w-6 h-6" />
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
    <DollarSign />
            <span className="text-cyan-400 text-sm font-medium">AI Financial Intelligence</span>
          </div>
          
          <h1>  <span>AI Financial Analysis
            </span></h1>
          
          <p />
            Transform your financial decision-making with AI-powered analysis. 
            Get predictive modeling, risk assessment, and automated reporting that drives better financial outcomes.
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
              Advanced Financial Features
            </h2>
            <p />
              Everything you need to make smarter financial decisions with AI-powered insights.
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
              Why Choose AI Financial Analysis?
            </h2>
            <p />
              Experience the power of AI-driven financial intelligence that delivers measurable results.
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
              Ready to Transform Your Financial Analysis?
            </h2>
            <p />
              Join leading financial institutions using AI Financial Analysis to make smarter decisions and drive growth.
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

export default AIFinancialAnalysis;
',
'