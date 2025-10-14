import React from 'react';
import { CheckCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton;
const AISentimentAnalysisPro = () => {
  const features = [
    {
          title: ';Real-time Sentiment Tracking","
      description: "Monitor customer sentiment across all channels in real-time","
      icon: <TrendingUp className="w-6 h-6" />"
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-language Support","
      description: "Analyze sentiment in 50+ languages with high accuracy","
      icon: <Globe className="w-6 h-6" />"
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Emotion Detection","
      description: "Detect emotions like joy, anger, fear, and sadness in text","
      icon: <MessageSquare className="w-6 h-6" />"
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Trend Analysis","
      description: "Identify sentiment trends and patterns over time","
      icon: <BarChart3 className="w-6 h-6" />"
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
    <TrendingUp />
            <span className="text-cyan-400 text-sm font-medium">Sentiment Intelligence</span>
          </div>
          
          <h1>  <span>AI Sentiment Analysis Pro
            </span></h1>
          
          <p />
            Understand customer sentiment with AI-powered analysis. 
            Real-time monitoring, emotion detection, and trend analysis for better customer insights.
          </p>
          
          <div>
    <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5">}"
            >
              Get Started Today;
            </FuturisticButton>
            <FuturisticButton;
              href="/demo"
              variant="outline"
              size="lg"
              icon={<TrendingUp className="w-5 h-5">}"
            >
              View Demo;
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
      {/* Features Section */}
      <section />
        <ResponsiveContainer />
          <div>
    <h2 />
              Advanced Sentiment Features
            </h2>
            <p />
              Everything you need to understand and analyze customer sentiment effectively.
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
              Why Choose AI Sentiment Analysis Pro?
            </h2>
            <p />
              Experience intelligent sentiment analysis that delivers actionable insights.
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
              Ready to Understand Your Customers?
            </h2>
            <p />
              Join leading companies using AI Sentiment Analysis Pro to gain customer insights.
            </p>
            <div>
    <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5">}"
              >
                Start Your Free Trial;
              </FuturisticButton>
              <FuturisticButton;
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5">}"
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

export default AISentimentAnalysisPro;',
'