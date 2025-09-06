


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Zap,
  Database,
  Server,
  Lock,
  BarChart3,
  Users,
  Globe,
  Code,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Award,
  Mail,
  Calendar,
  Settings,
  Eye,
  MessageSquare,
  Palette,
  Bot,
  Cpu,
  Link2,
  Wifi,
  HardDrive,
  Monitor,
  Activity,
  Terminal,
  CreditCard,
	const title = 'Services — Zion Tech Group';
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.';

	return (
							</Link>;
						</div>;
					</div>;
				</div>;
			</section>;
