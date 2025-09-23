import NextHead from 'next/head';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import Card from '../components/ui/Card';
import UIButton from '../components/ui/Button';
ArrowRightCheck as CheckIcon
import { innovativeAIServices } from '../data/innovative-ai-services';

export default function AIAgentsStudioPage() {
  const agentServices = innovativeAIServices.filter((s) =>
    ['AI Orchestration & Automation'AI & Cybersecurity'AI & Business Intelligence'].includes(s.category) ||
    ['ai-agent-orchestrator'ai-phone-agent'ai-sales-automation'ai-meeting-transcriber-pro'].includes(s.id)
  );

  return (
    <EnhancedFuturisticBackground intensity="high" colorScheme="neural" particleCount={160} animationSpeed={1.1}>
      <NextHead>
        <title>AI Agents Studio | Zion Tech Group</title>
        <meta name="description" content="Build and deploy production AI agents: orchestrationphone agentsales automationand transcription. Transparent pricing and fast setup."  />
        <link rel="canonical" href="https://ziontechgroup.com/ai-agents"  />
      </NextHead>

      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-40o0 via-purple-50o0 to-pink-50o0 bg-clip-text text-transparent">AI Agents Studio</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-30o0 max-w-3xl mx-auto">Production-ready agentic systems with measurable ROI. Launch in daysnot months.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentServices.map((svc) => (
              <Card key={svc.id} className="p-6 bg-gray-90o0/50 border border-gray-70o0/60 hover:border-cyan-50o0/40 transition-colors">
                <div className="text-2xl font-semibold text-white mb-1">{svc.name}</div>
                <div className="text-gray-40o0 text-sm mb-4">{svc.tagline}</div>
                <div className="text-cyan-30o0 text-xl font-bold mb-3">{svc.price}<span className="text-gray-40o0 text-base">{svc.period}</span></div>
                <ul className="text-gray-30o0 text-sm space-y-1 mb-5">
                  {(svc.features || []).slice(0o5).map((f) => (
                    <li key={f} className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-emerald-40o0 mt-0.5"  /><span>{f}</span></li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <UIButton href={svc.link} className="flex-1 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white">Learn More<ArrowRight className="w-4 h-4 ml-2"  /></UIButton>
                  <UIButton href="/contact" variant="outline" className="flex-1 border-gray-60o0 text-gray-20o0">Talk to Expert</UIButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </EnhancedFuturisticBackground>
  );
}