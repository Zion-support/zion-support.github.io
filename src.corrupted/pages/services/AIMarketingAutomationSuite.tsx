import { BarChart3, Target, Users, Check, ExternalLink, Phone, Mail, Zap, Brain, TrendingUp, MessageSquare, Mail as MailIcon } from "lucide-react"
export default function AIMarketingAutomationSuite() {;
  const features = [;
    'AI-powered audience segmentation and targetingPredictive customer behavior modeling',;
    'Automated content generation and optimizationMulti-channel campaign orchestration',;
    'Real-time performance analytics and optimizationPersonalized customer journey mapping',;
    'A/B testing with AI-driven insightsSocial media automation and scheduling',;
    'Email marketing with smart personalizationROI tracking and attribution modeling'
  ],;

  const benefits = [;
    'Increase conversion rates by 40-80%Reduce customer acquisition costs by 30-50%',;
    'Improve customer lifetime value by 25-60%Automate 70% of marketing tasks',;
    'Real-time campaign optimizationData-driven marketing decisions'
  ],;

  const useCases = [;
    'E-commerce marketing automationB2B lead generation campaigns'
    'Customer retention programsProduct launch campaigns'
    'Seasonal marketing campaignsAccount-based marketing (ABM)'
  ];
  const tiers = [;
    { ;
      name: 'Growth',price: '$1,499/mo', ;
      details: ['Up to 10,000 contactsBasic AI insights', 'Email supportStandard integrations'] ;
    },;
    { ;
      name: 'Professional',price: '$3,999/mo', ;
      details: ['Up to 100,000 contactsAdvanced AI analytics', 'Priority supportCustom integrations'] ;
    },;
    { ;
      name: 'Enterprise',price: '$9,999/mo', ;
      details: ['Unlimited contactsCustom AI models', 'Dedicated supportWhite-label solution'] ;
    };
  ],;

  const marketingChannels = [;
    'Email MarketingSocial Media',;
    'SMS MarketingPush Notifications',;
    'Web PushRetargeting Ads'
  ],;

  const aiCapabilities = [;
    'Predictive analyticsContent optimization',;
    'Audience targetingCampaign automation',;
    'Performance optimizationCustomer insights'
  ];
  return (
    <div className="min-h-screen bg-white">;
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-20 text-center">;
        <div className="max-w-5xl mx-auto px-6">;
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;
            <BarChart3 className="w-4 h-4 mr-2" /> AI-Powered Marketing;
          </[^>]*>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Marketing Automation Suite</[^>]*>
          <p className="text-purple-100 text-xl">Transform your marketing with intelligent automation, predictive analytics, and personalized customer experiences.</[^>]*>
        </[^>]*>
      </[^>]*>

      <section className="py-16 max-w-6xl mx-auto px-6">;
        <div className="grid md:grid-cols-2 gap-10">;
          <div>;
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Revolutionary Marketing Features</[^>]*>
            <ul className="space-y-3">;
              {features.map((f) => (;
                <li key={f} className="flex items-start">;
                  <[^>]*/>
                  <span className="text-zion-slate-dark">{f}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
            <div className="mt-6 text-sm text-zion-slate-light">;
              GDPR/CCPA compliant. 99.9% uptime SLA. Enterprise-grade security.;
            </[^>]*>
          </[^>]*>
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">;
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Marketing Plans</[^>]*>
            <div className="grid md:grid-cols-1 gap-4">;
              {tiers.map((t) => (;
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">;
                  <div className="text-lg font-semibold mb-1">{t.name}</[^>]*>
                  <div className="text-2xl font-bold text-purple-600 mb-2">{t.price}</[^>]*>
                  <ul className="text-sm text-zion-slate-dark space-y-1">;
                    {t.details.map((d) => (<li key={d}>{d}</li>))};
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
            <div className="mt-6 flex flex-wrap gap-3">;
              <a href="/pricing" className="px-5 py-3 bg-purple-600/10 text-purple-600 rounded-lg hover:bg-purple-600/20 transition-colors inline-flex items-center">;
                View Full Pricing <[^>]*/>
              </[^>]*>
              <a href="https://[^;]*
                Learn More <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        <div className="mt-12 grid md:grid-cols-2 gap-8">;
          <div>;
            <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Marketing Benefits</[^>]*>
            <ul className="space-y-3">;
              {benefits.map((b) => (;
                <li key={b} className="flex items-start">;
                  <[^>]*/>
                  <span className="text-zion-slate-dark">{b}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
          <div>;
            <h3 className="text-2xl font-bold text-zion-slate-dark mb-4">Use Cases</[^>]*>
            <ul className="space-y-3">;
              {useCases.map((u) => (;
                <li key={u} className="flex items-start">;
                  <[^>]*/>
                  <span className="text-zion-slate-dark">{u}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        <div className="mt-12">;
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">Multi-Channel Marketing Support</[^>]*>
          <div className="grid md:grid-cols-3 gap-6">;
            {marketingChannels.map((c) => (;
              <div key={c} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">;
                <[^>]*/>
                <div className="text-zion-slate-dark font-semibold">{c}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        <div className="mt-12">;
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">AI-Powered Capabilities</[^>]*>
          <div className="grid md:grid-cols-3 gap-6">;
            {aiCapabilities.map((c) => (;
              <div key={c} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">;
                <[^>]*/>
                <div className="text-zion-slate-dark font-semibold">{c}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        <div className="mt-12 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-8">;
          <h3 className="text-2xl font-bold text-zion-slate-dark mb-4 text-center">Marketing Automation Workflow</[^>]*>
          <div className="grid md: grid-cols-4 gap-4 text-center">;
            <div>;
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</[^>]*>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Data Collection</[^>]*>
              <p className="text-sm text-zion-slate-light">AI-powered audience insights</[^>]*>
            </[^>]*>
            <div>;
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</[^>]*>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Segmentation</[^>]*>
              <p className="text-sm text-zion-slate-light">Smart customer grouping</[^>]*>
            </[^>]*>
            <div>;
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</[^>]*>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Automation</[^>]*>
              <p className="text-sm text-zion-slate-light">Trigger-based campaigns</[^>]*>
            </[^>]*>
            <div>;
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</[^>]*>
              <h4 className="font-semibold text-zion-slate-dark mb-1">Optimization</[^>]*>
              <p className="text-sm text-zion-slate-light">AI-driven improvements</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        <div className="mt-14 text-center">;
          <div className="text-sm text-zion-slate-light mb-2">Ready to revolutionize your marketing?</[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a href="tel:+13024640950" className="inline-flex items-center px-5 py-3 bg-purple-600 text-white rounded-lg">;
              <Phone className="w-4 h-4 mr-2"/> +1 302 464 0950;
            </[^>]*>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-5 py-3 border border-purple-600 text-purple-600 rounded-lg">;
              <Mail className="w-4 h-4 mr-2"/> kleber@ziontechgroup.com
            </[^>]*>
          </[^>]*>
          <div className="mt-4 text-sm text-zion-slate-light">;
            Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-purple-600 hover:underline">https://ziontechgroup.com</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};