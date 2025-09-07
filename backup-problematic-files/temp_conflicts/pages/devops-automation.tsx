import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { GitBranch, Zap, Shield, BarChart3, Check, Star, GitPullRequest, Cpu } from 'lucide-react';
;
export default function DevOpsAutomationPage() {;
  const features = [;
    {;
      icon: <GitBranch className="w-6 h-6" />;,;
      title: 'CI/CD Pipelines';,,
  description: 'Automated build;, test, and deployment workflows',;
      color:'bg-gradient-to-br from-blue-500 to-cyan-600';
    },;
    {;
      icon: <Zap className="w-6 h-6" />;,;
      title: 'Infrastructure as Code';,,
  description: 'Terraform;, CloudFormation, and Kubernetes automation',;
      color:'bg-gradient-to-br from-green-500 to-emerald-600';
    },;
    {;
      icon: <Shield className="w-6 h-6" />;,;
      title: 'Security Automation';,,
  description: 'Automated security scanning and compliance checks';,;
      color:'bg-gradient-to-br from-purple-500 to-indigo-600';
    },;
    {;
      icon: <BarChart3 className="w-6 h-6" />;,;
      title: 'Performance Monitoring';,,
  description: 'Real-time performance insights and optimization';,;
      color:'bg-gradient-to-br from-orange-500 to-red-600';
    }
  ],;
;
  const pricingPlans = [;
    {;
      name: 'Starter';,;
      price: '$39';,;
      period: '/month';,,
  description: 'Perfect for small teams and startups';,;
      features:[;
        'Up to 5 repositoriesBasic CI/CD pipelines',;
        'GitHub integrationEmail notifications',;
        'Basic security scanningCommunity support';
      ],;
      popular: false;,;
      cta: 'Start Free Trial';,;
      color:'border-gray-600 hover:border-blue-500';
    },;
    {;
      name: 'Professional';,;
      price: '$129';,;
      period: '/month';,,
  description: 'Ideal for growing development teams';,;
      features:[;
        'Up to 25 repositoriesAdvanced CI/CD workflows',;
        'Multi-cloud deploymentSlack & Teams integration',;
        'Advanced security suitePriority support',;
        'Custom pipelinesTeam collaboration';
      ],;
      popular: true;,;
      cta: 'Start Free Trial';,;
      color:'border-blue-500 hover:border-blue-400';
    },;
    {;
      name: 'Enterprise';,;
      price: '$399';,;
      period: '/month';,,
  description: 'For large-scale development operations';,;
      features:[;
        'Unlimited repositoriesEnterprise CI/CD',;
        'Advanced IaC automationCustom integrations',;
        '24/7 dedicated supportSLA guarantees',;
        'On-premise optionsCustom security policies';
      ],;
      popular: false;,;
      cta: 'Contact Sales';,;
      color:'border-gray-600 hover:border-blue-500';
    }
  ],;
;
  const marketComparison = [;
    {;
      competitor: 'GitHub Actions';,;
      pricing: 'Free + $0.008/min';,;
      repositories: 'Unlimited';,;
      rating: '4.6/5';,;
      pros: ['GitHub nativeGood free tier'];,;
      cons:['Expensive for teamsLimited features'];
    },;
    {;
      competitor: 'GitLab CI/CD';,;
      pricing: '$19/user/month';,;
      repositories: 'Unlimited';,;
      rating: '4.4/5';,;
      pros: ['Integrated platformGood CI/CD'];,;
      cons:['User-based pricingLimited integrations'];
    },;
    {;
      competitor: 'Jenkins';,;
      pricing: 'Free';,;
      repositories: 'Unlimited';,;
      rating: '4.2/5';,;
      pros: ['Completely freeHighly customizable'];,;
      cons:['Requires maintenanceNo managed service'];
    }
  ],;
;
  const testimonials = [;
    {;
      name: 'Michael Chen';,;
      role: 'DevOps Lead';,;
      company: 'TechStart Inc.';,;
      content: 'Zion DevOps reduced our deployment time from 2 hours to 15 minutes. The automation is incredible and the pricing is fair.';,;
      rating:5;
    },;
    {;
      name: 'Sarah Johnson';,;
      role: 'Engineering Manager';,;
      company: 'CloudWorks';,;
      content: 'We switched from GitHub Actions to Zion and saved $200/month while getting better automation features.';,;
      rating:5;
    },;
    {;
      name: 'Robert Davis';,;
      role: 'Site Reliability Engineer';,;
      company: 'ScaleTech';,;
      content: 'The infrastructure automation features are game-changing. We can now deploy to multiple clouds with a single click.';,;
      rating:5;
    }
  ],;
;
  const automationExamples = [;
    {;
      title: 'Automated Testing';,,
  description: 'Run comprehensive test suites on every commit';,;
      color:'from-green-500 to-emerald-600';
    },;
    {;
      title: 'Security Scanning';,,
  description: 'Automated vulnerability detection and compliance checks';,;
      color:'from-red-500 to-pink-600';
    },;
    {;
      title: 'Deployment Automation';,,
  description: 'Zero-downtime deployments with rollback capabilities';,;
      color:'from-blue-500 to-cyan-600';
    },;
    {;
      title: 'Infrastructure Management';,,
  description: 'Automated scaling and resource optimization';,;
      color:'from-purple-500 to-indigo-600';
    }
  ],;
;
  return (;
      icon: <GitBranch className="w-6 h-6" />;,;"
"
      icon: <Zap className="w-6 h-6" />;,;"
      icon: <Shield className="w-6 h-6" />;,;"
      icon: <BarChart3 className="w-6 h-6" />;,;"
</BarChart3>
pr-12325
    <>;
      <Head>;

        <title>DevOps Automation - Zion Tech Group | Professional CI/CD & Infrastructure Automation</title>;"
        <meta name="description" content="Professional DevOps automation platform with CI/CD, infrastructure as code, and security automation. Plans starting at $39/month." />;"
</meta>"
        <meta property="og:title" content="DevOps Automation - Zion Tech Group" />;"
        <meta property="og: description" content="Professional DevOps automation starting at $39/month. CI/CD pipelines;, infrastructure as code, and security automation." />;"
        <meta name="twitter:card" content="summary_large_image" />;"
</meta>
      ;"
      <div className="min-h-screen bg-black">;"
</div>"
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">;"
</section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;"
            <div className="mb-8">;"
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">;"
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />;"
</span>
              </div>;
            </div>;"
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">;"
</h1>
            </h1>;"
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">;"
</p>
            </p>;"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
</div>
              <Button;"
                href="#pricing";""
                variant="primary";""
                size="lg";""
                className="bg-blue-600 hover:bg-blue-700 text-white";"
              >;

                href="#demo";""
                variant="outline";""
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white";"

        </section>;"
        <section className="py-24 bg-gray-900">;"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
            <div className="text-center mb-20">;"
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">;"
</h2>
              </h2>;"
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;"
              </p>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;"
                <Card;
                  key={index}"
                  className="text-center group hover:scale-105 transition-transform duration-300";"

                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 ${feature.color}`}>;
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>;""
                  <p className="text-gray-400">{feature.description}</p>;"
        <section className="py-24 bg-gray-800">;"
`;
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 bg-gradient-to-br ${example.color}`}>;
                  <h3 className="text-xl font-semibold text-white mb-4">{example.title}</h3>;""
                  <p className="text-gray-400">{example.description}</p>;"
        <section id="pricing" className="py-24 bg-gray-900">;"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;"
                  key={index}`;
                  className={`relative p-8 ${plan.color} transition-all duration-300 hover:scale-105 ${;"
                    plan.popular ? 'ring-2 ring-blue-500' :;`;
                  }`}

                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;"
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">;"
                      </span>;
                  <div className="text-center">;"
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;""
                    <div className="mb-6">;"
                      <span className="text-4xl font-bold text-white">{plan.price}</span>;""
                      <span className="text-gray-400">{plan.period}</span>;"
                    <p className="text-gray-300 mb-8">{plan.description}</p>;""
                    <ul className="text-left space-y-3 mb-8">;"
</ul>"
                        <li key={featureIndex} className="flex items-center text-gray-300">;"
</li>"
                          <Check className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />;"

                        </li>;
                    </ul>;
                      href={plan.name === 'Enterprise' ? '/contact' :'#signup'}
                      variant={plan.popular ? 'primary' :'outline'}
                      size="lg";"`;
                      className={`w-full ${;
                        plan.popular ;"
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' ;
                          :'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white';`;

        </section>;
                <Card key={index} className="p-6">;"
                  <div className="text-center mb-6">;"
                    <h3 className="text-xl font-bold text-white mb-2">{competitor.competitor}</h3>;""
                    <div className="flex items-center justify-center mb-2">;"
                        <Star;
                          key={i}`;
                          className={`w-5 h-5 ${;
                            i < Math.floor(parseFloat(competitor.rating));"
                              ? 'text-yellow-400 fill-current';
                              :'text-gray-400';`;
                        />;

                    <p className="text-sm text-gray-400">{competitor.rating}</p>;"
                  <div className="mb-4">;"
                    <p className="text-lg font-semibold text-white mb-1">Pricing: {competitor.pricing;}</p>;""
                    <p className="text-sm text-gray-400">Repositories: {competitor.repositories;}</p>;"
                  <div className="space-y-2">;"
                    <div>;
                      <p className="text-sm font-medium text-green-400 mb-1">Pros:</p>;""
                      <ul className="text-sm text-gray-300 space-y-1">;"
                          <li key={proIndex} className="flex items-center">;"
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;"

                      <p className="text-sm font-medium text-red-400 mb-1">Cons:</p>;""
                          <li key={conIndex} className="flex items-center">;"
</li>
              </h2>;
                  <div className="flex items-center mb-4">;"
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />;"

                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>;"
                    <p className="font-semibold text-white">{testimonial.name}</p>;""
                    <p className="text-sm text-gray-400">{testimonial.role}</p>;""
                    <p className="text-sm text-blue-400">{testimonial.company}</p>;"
        <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">;"
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;"
            <p className="text-xl text-blue-100 mb-12">;"
                href="#signup";""
                variant="secondary";""
                className="bg-white text-blue-600 hover:bg-gray-100";"

                href="/contact";""
                className="border-white text-white hover:bg-white hover:text-blue-600";"

    </>;
  );
}
]"`;