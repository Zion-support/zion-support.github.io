import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Builder Pro | Zion Tech Group',
  description: 'Build intelligent, multi-channel chatbots with RAG-powered knowledge bases, workflow automation, and human handoff capabilities.',
  alternates: { canonical: 'ai-services/ai-chatbot-builder-pro' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Chatbot Builder Pro',
        category: 'AI Conversational',
        description: 'Build intelligent, multi-channel chatbots with RAG-powered knowledge bases, workflow automation, and human handoff capabilities.',
        iconEmoji: '🤖',
        features: [
          {
            "title": "RAG-Powered Knowledge Base",
            "description": "Connect your documentation, FAQs, and knowledge base — chatbot retrieves precise answers using retrieval-augmented generation."
          },
          {
            "title": "Multi-Channel Deployment",
            "description": "Deploy across website, WhatsApp, Slack, Teams, Facebook Messenger, and custom APIs from a single builder."
          },
          {
            "title": "Visual Conversation Flow Designer",
            "description": "Drag-and-drop builder for complex conversation paths, conditional logic, and multi-turn workflows."
          },
          {
            "title": "Human Handoff & Escalation",
            "description": "Smart escalation rules that transfer complex queries to human agents with full conversation context."
          },
          {
            "title": "Analytics & Conversation Insights",
            "description": "Track resolution rates, user satisfaction, common queries, and conversation patterns with AI-powered trend analysis."
          },
          {
            "title": "Continuous Learning Loop",
            "description": "Automatically identify knowledge gaps from unanswered questions and suggest new training data for the chatbot."
          }
        ],
        useCases: [
          {
            "title": "Customer Support Automation",
            "description": "Resolve 70%+ of tier-1 support queries automatically with precise, knowledge-base-powered answers.",
            "icon": "🎧"
          },
          {
            "title": "Lead Qualification Bot",
            "description": "Qualify website visitors through conversational forms that capture needs, budget, and timeline before routing to sales.",
            "icon": "🎯"
          },
          {
            "title": "Internal IT Helpdesk",
            "description": "Deploy an internal assistant that handles IT requests, policy questions, and onboarding tasks for employees.",
            "icon": "🏢"
          }
        ],
        benefits: ["70%+ automatic resolution rate", "Multi-channel from single builder", "Continuous self-improvement", "Seamless human handoff", "Conversation analytics dashboard", "No-code visual flow designer"],
        ctaLabel: 'Get Started with AI Chatbot Builder Pro',
        pricing: [
          { tier: 'Starter', price: '$99', period: '/month', features: ['Core features', 'Up to 100 items/month', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$299', period: '/month', features: ['Advanced engine', 'Unlimited items', 'Priority support', 'API access', 'Team collaboration (10 users)', 'Custom integrations'], popular: true },
          { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited usage', 'Dedicated support engineer', 'Custom configuration', 'SSO & advanced security', '99.99% SLA guarantee', 'On-premise deployment option'], popular: false },
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown DE 19709',
        },
      }}
    />
  );
}
