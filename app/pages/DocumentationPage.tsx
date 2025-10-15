import {
  DocumentTextIcon,
  CodeBracketIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon"
} from '
      title: 'API Documentation'
      description: 'Comprehensive API reference for all our services and integrations.'
        { name: 'Authentication', href: '/docs/api/authentication'
        { name: 'AI Services API', href: '/docs/api/ai-services'
        { name: 'Cloud Management API', href: '/docs/api/cloud-management'
        { name: 'Webhooks', href: '/docs/api/webhooks'
      title: 'Integration Guides'
      description: 'Step-by-step guides for integrating our solutions with your systems.'
        { name: 'Getting Started', href: '/docs/integration/getting-started'
        { name: 'SDK Installation', href: '/docs/integration/sdk'
        { name: 'Configuration', href: '/docs/integration/configuration'
        { name: 'Best Practices', href: '/docs/integration/best-practices'
      title: 'User Guides'
      description: 'Detailed user guides for all our products and services.'
        { name: 'AI Solutions Guide', href: '/docs/guides/ai-solutions'
        { name: 'Cloud Infrastructure', href: '/docs/guides/cloud-infrastructure'
        { name: 'Cybersecurity Setup', href: '/docs/guides/cybersecurity'
        { name: 'Micro SaaS Development', href: '/docs/guides/micro-saas'
      title: 'Troubleshooting'
      description: 'Common issues and solutions to help you resolve problems quickly.'
        { name: 'FAQ', href: '/docs/troubleshooting/faq'
        { name: 'Error Codes', href: '/docs/troubleshooting/error-codes'
        { name: 'Performance Issues', href: '/docs/troubleshooting/performance'
        { name: 'Contact Support', href: '/support'
  const quickStart  = [{ step: 1, title: 'Sign Up', description: 'Create your account and get API credentials'
    { step: 2, title: 'Install SDK', description: 'Install our SDK for your preferred language'
    { step: 3, title: 'Configure', description: 'Set up your environment and configuration'
    { step: 4, title: 'Make API Call', description: 'Start making API calls to our services'
import { Helmet  } from '
const client  = new ZionTechClient({apiKey: 'your-api-key'
  environment: '
const response  = await client.ai.generateText({prompt: 'Hello, world!'
              Can't find what you'