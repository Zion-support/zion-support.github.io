import NextHead from 'next/head';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
// import Card from '../components/ui/Card';
import UIButton from '../components/ui/Button';
import { ArrowRight, Check as CheckIcon } from 'lucide-react';
import { innovativeAIServices } from '../data/innovative-ai-services';

export default function AIAgentsPage() {
  const service = enhancedRealMicroSaasServices.find(s => (s.link || '').endsWith('/ai-agents'));
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const plans = [
    { name: 'Builder', price: '$249/month', items: ['3 agents', 'Tools: web, code, docs', 'JSON events stream', 'Retry and timeouts'] },
    { name: 'Scale', price: '$799/month', items: ['10 agents', 'Graph planner', 'Long-term memory', 'Slack/Jira integration'] },
    { name: 'Enterprise', price: 'Custom', items: ['Unlimited agents', 'Private infra', 'SLA & audit logs', 'SSO/SAML'] },
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <NextHead>
        <title>{service?.name || 'AI Agent Orchestrator'} - Zion Tech Group</title>
        <meta name="description" content={service?.description || 'Multi-agent workflow automation with tools, memory, and guardrails.'} />
        <link rel="canonical" href="https://ziontechgroup.com/ai-agents" />
      </NextHead>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 flex items-center justify-center gap-3">
            <Bot className="w-10 h-10" />{service?.name || 'Multi-Agent Orchestrator'}
          </h1>
          <p className="text-xl text-gray-300">{service?.tagline || 'Assign roles, define plans, and execute workflows with reliable, observable multi-agent AI.'}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl"><Rocket className="w-4 h-4 mr-2" />Book a Demo</Button>
            <Button href="/docs" variant="outline" className="border-gray-600 text-gray-200">Read Docs</Button>
          </div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentServices.map((svc) => (
              <div key={svc.id} className="p-6 bg-gray-900/50 border border-gray-700/60 hover:border-cyan-500/40 transition-colors rounded-lg">
                <div className="text-2xl font-semibold text-white mb-1">{svc.name}</div>
                <div className="text-gray-400 text-sm mb-4">{svc.tagline}</div>
                <div className="text-cyan-300 text-xl font-bold mb-3">{svc.price}<span className="text-gray-400 text-base">{svc.period}</span></div>
                <ul className="text-gray-300 text-sm space-y-1 mb-5">
                  {(svc.features || []).slice(0, 5).map((f) => (
                    <li key={f} className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-emerald-400 mt-0.5" /><span>{f}</span></li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <UIButton href="/contact" className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Talk to Sales</UIButton>
                  <UIButton href="/services-advertising" variant="outline" className="flex-1 border border-gray-600 text-gray-200">Learn More</UIButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}