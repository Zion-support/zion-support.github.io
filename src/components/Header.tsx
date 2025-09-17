
	const quickActions = [
		{
			name: 'Latest Insights',
			href: '/blog/latest',
			icon: Sparkles,
			description: 'Read our newest research',
			featured: true,
			color: 'from-amber-500 to-orange-600'
		},
		{
			name: 'Comprehensive Services Showcase',
			href: '/comprehensive-services-showcase-2030',
			icon: Star,
			description: 'Complete service portfolio',
			featured: true,
			color: 'from-yellow-500 to-orange-500'
		},
		{
			name: 'AI Autonomous Operations',
			href: '/services/ai-autonomous-business-operations-platform',
			icon: Brain,
			description: 'Revolutionary AI platform',
			featured: true,
			color: 'from-purple-500 to-pink-500'
		},
		{
			name: 'Quantum AI Cybersecurity',
			href: '/services/quantum-ai-cybersecurity-platform',
			icon: Lock,
			description: 'Next-gen cybersecurity',
			featured: true,
			color: 'from-red-500 to-orange-500'
		},
		{
			name: 'AI Content Creation Studio',
			href: '/services/ai-content-creation-studio',
			icon: Palette,
			description: 'AI-powered content generation',
			color: 'from-orange-500 to-red-500'
		},
		{
			name: 'AI Sales Intelligence',
			href: '/services/ai-sales-intelligence-platform',
			icon: Target,
			description: 'Advanced sales intelligence',
			color: 'from-green-500 to-emerald-500'
		},
		{
			name: 'AI Customer Support',
			href: '/services/ai-customer-support-automation',
			icon: Users,
			description: 'Intelligent support automation',
			color: 'from-blue-500 to-purple-500'
		}
	];

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			// Navigate to services page with search query
			window.location.href = `/services?search=${encodeURIComponent(searchQuery)}`;
		}
	};

=======
import React from 'react';
>>>>>>> 69252da4b39a233944aebd46f720e5f5b61d8d0f
