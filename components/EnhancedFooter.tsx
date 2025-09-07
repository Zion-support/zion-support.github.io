
import Link from 'next/link';
import {;
  Brain,;
  Mail,;
  Phone,;
  MapPin,;
  Globe,;
  Github,;
  Linkedin,;
  Twitter,;
} from 'lucide-react';import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Globe,
  Shield,
  FileText,
  HelpCircle,
} from 'lucide-react';
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false ;};
  }
  static getDerivedStateFromError(error) {
    return { hasError: true ;};
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: ';, error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
  Brain,;
  Mail,;
  Phone,;
  MapPin,;
  Globe,;
  Github,;
  Linkedin,;
  Twitter,;
} from 'lucide-react';import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';

const EnhancedFooter: React.FC = () => {;
  const currentYear = new Date().getFullYear(),;

  const footerSections = [;
    {;
      title: 'Services';,;
      links: [;
        { name: 'AI Business Intelligence';, href: '/ai-business-intelligence' ;},;
        { name: 'Quantum Cybersecurity';, href: '/quantum-cybersecurity' ;},;
        { name: 'Edge Computing';, href: '/edge-computing-orchestration' ;},;
        { name: 'Space Technology';, href: '/space-technology' ;},;
        {;
          name: 'View All Services';,;
          href: '/comprehensive-2025-services-showcase';,;
        },;
      ],;
    },    {        { name: 'View All Services';, href: '/comprehensive-2025-services-showcase' ;}
import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';
const EnhancedFooter: React.FC;

