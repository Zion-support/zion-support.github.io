import type { Metadata } from 'next';
import AIAssistant404 from './components/AIAssistant404';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'Page not found? Our AI assistant will help you find the right tool, service, or solution.',
};

export default function NotFound() {
  return <AIAssistant404 />;
}
