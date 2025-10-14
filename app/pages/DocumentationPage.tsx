import React from 'react';;
import { Link } from 'react-router-dom';;
import SEO from '../components/SEO;
import {
  DocumentTextIcon,
  CodeBracketIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon';
} from '@heroicons/react/24/outline;
export default function DocumentationPage() {
  const sections = [
    {
      icon: CodeBracketIcon,
      title: 'API Documentation',
      description: 'Comprehensive API reference for all our services and integrations.',
      links: [
        { name: 'Authentication', href: '/docs/api/authentication' },
        { name: 'AI Services API', href: '/docs/api/ai-services' }
}
}