import React from 'react'
import { MessageSquare } from 'lucide-react'
import ServicePageTemplate from '../service-template'

export default function AIChatbotBuilderPage() {
  return (
    <ServicePageTemplate
      title="AI Chatbot Builder"
      description="Build intelligent chatbots that understand context and provide meaningful conversations. Enhance customer experience with AI-powered automation."
      icon={<MessageSquare className="w-10 h-10 text-purple-400" />}
      benefits={[
        '24/7 customer support automation',
        'Reduce support costs by 60%',
        'Improve customer satisfaction scores',
        'Handle multiple conversations simultaneously',
        'Learn and improve from interactions'
      ]}
      features={[
        'Natural language understanding',
        'Multi-channel deployment',
        'Custom conversation flows',
        'Integration with existing systems',
        'Analytics and reporting',
        'Easy drag-and-drop builder'
      ]}
      pricing="Starting at $199/month"
      seoTitle="AI Chatbot Builder - Zion Tech Group"
      seoDescription="Build intelligent chatbots with our AI-powered platform. Enhance customer experience with automated conversations and support."
      seoKeywords="AI chatbot, chatbot builder, customer support, automation, conversational AI"
    />
  )
}
