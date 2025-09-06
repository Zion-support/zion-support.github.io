import React from 'react',
import Head from 'next/head',
import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import {
  Zap
  Shield
  BarChart3
  Globe
  Users
  Lock
  TrendingUp
  Code
  Database
  Cloud
  ArrowRight
  Star
  Check
  ExternalLink;} from 'lucide-react';import {
  Zap,
  Shield,
  BarChart3,
  Globe,
  Users,
  Lock,
  TrendingUp,
  Code,
  Database,
  Cloud,
  ArrowRight,
  Star,
<<<<<<< HEAD

  Check,
  ExternalLink,;} from 'lucide-react';import { 
  Check,;
  ExternalLink,;} from 'lucide-react';import { ;

  Zap;
  Shield
  BarChart3
  Globe
  Users
  Lock
  TrendingUp
  Code
  Database

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



  Zap;
  Shield,
  BarChart3,
  Globe,
  Users,
  Lock,
  TrendingUp,
  Code,
  Database,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  Cloud;
  ArrowRight;
  Star;
  Check;

<<<<<<< HEAD

export default function SaaSMarketplacePage() {
  const microSaasServices = [
    {
      name: 'Zapier'
      description:
        'Automate workflows between 5000+ apps with no code required. Connect your favorite tools and automate repetitive tasks.',      category: 'Automation'
      pricing: 'Free - $19.99/month'
      rating: 4.8
      users: '2M+'
      icon: <Zap className='w-8 h-8 text-orange-400' />,      description: 'Automate workflows between 5000+ apps with no code required. Connect your favorite tools and automate repetitive tasks.'
      category: 'Automation'
      pricing: 'Free - $19.99/month'
      rating: 4.8
      users: '2M+'
      icon: <Zap className='w-8 h-8 text-orange-400' />
      features: [
        '5000+ app integrations'
        'Visual workflow builder'
        'Multi-step automations'
        'Scheduled triggers'
        'Error handling'
        'Team collaboration'
      ]
      website: 'https://zapier.com'
      useCase:
        'Perfect for businesses looking to automate customer support, marketing, and sales processes.'
      pros: [
        'Easy to use'
        'Extensive integrations'
        'Reliable'
        'Great support'
      ]
      cons: ['Can get expensive', 'Limited customization']
    }
    {
      name: 'Notion'
      description:
        'All-in-one workspace for notes, docs, projects, and team collaboration. Organize everything in one place.'
      category: 'Productivity'
      pricing: 'Free - $8/month'
      rating: 4.7
      users: '20M+'
      icon: <Code className='w-8 h-8 text-gray-400' />
      color: 'bg-gradient-to-br from-gray-500 to-gray-700'
      features: [
        'Note-taking & docs'
        'Project management'
        'Team collaboration'
        'Database & tables'
        'Templates library'
        'API integration'
      ]
      website: 'https://notion.so'
      useCase:
        'Ideal for teams that need a flexible workspace for documentation, project management, and knowledge sharing.'
      pros: [
        'Highly flexible'
        'Beautiful interface'
        'Great templates'
        'Free tier'
      ]
      cons: ['Learning curve', 'Limited offline access']
    }
    {
      name: 'Stripe'
      description:
        'Complete payment processing platform for online businesses. Accept payments, manage subscriptions, and handle compliance.'
      category: 'Payments'
      pricing: '2.9% + 30¢ per transaction'
      rating: 4.9
      users: '1M+'
      icon: <Shield className='w-8 h-8 text-blue-400' />
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
      features: [
        'Global payment methods'
        'Subscription billing'
        'Fraud protection'
        'Compliance tools'
        'Developer-friendly API'
        'Analytics dashboard'
      ]
      website: 'https://stripe.com'
      useCase:
        'Essential for any online business that needs to accept payments, especially SaaS companies and e-commerce.'
      pros: [
        'Developer-friendly'
        'Global reach'
        'Excellent docs'
        'Reliable'
      ]
      cons: ['Higher fees than some alternatives', 'Complex for beginners']
    }
    {
      name: 'Intercom'
      description:
        'Customer messaging platform that helps businesses build better customer relationships through personalized, messenger-based experiences.'
      category: 'Customer Support'
      pricing: '$39 - $999/month'
      rating: 4.6
      users: '25K+'
      icon: <Users className='w-8 h-8 text-green-400' />
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      features: [
        'Live chat'
        'Customer messaging'
        'Help desk'
        'User onboarding'
        'Analytics & reporting'
        'Integration ecosystem'
      ]
      website: 'https://intercom.com'
      useCase:
        'Perfect for SaaS companies and online businesses that want to provide excellent customer support and user engagement.'
      pros: [
        'Great UX'
        'Powerful features'
        'Good integrations'
        'Mobile apps'
      ]
      cons: ['Expensive', 'Complex pricing', 'Can be overwhelming']
    }
    {
      name: 'Mixpanel'
      description:
        'Product analytics platform that helps you understand how users interact with your product and make data-driven decisions.',      category: 'Analytics'
      pricing: 'Free - $25/month'
      rating: 4.5
      users: '26K+'
      icon: <BarChart3 className='w-8 h-8 text-purple-400' />,      description: 'Product analytics platform that helps you understand how users interact with your product and make data-driven decisions.'
      category: 'Analytics'
      pricing: 'Free - $25/month'
      rating: 4.5
      users: '26K+'
      icon: <BarChart3 className='w-8 h-8 text-purple-400' />
      features: [
        'User behavior tracking'
        'Funnel analysis'
        'A/B testing'
        'Real-time data'
        'Custom events'
        'Mobile analytics'
      ]
      website: 'https://mixpanel.com'
      useCase:
        'Essential for product teams that need to understand user behavior, optimize conversion funnels, and make data-driven decisions.'
      pros: [
        'Powerful analytics'
        'Real-time data'
        'Good documentation'
        'Flexible'
      ]
      cons: ['Complex setup', 'Expensive at scale', 'Steep learning curve']
    }
    {
      name: 'MongoDB Atlas'
      description:
        'Fully managed cloud database service that offers the best of MongoDB with zero operational overhead.',      category: 'Database'
      pricing: 'Free - $57/month'
      rating: 4.7
      users: '35K+'
      icon: <Database className='w-8 h-8 text-green-400' />,      description: 'Fully managed cloud database service that offers the best of MongoDB with zero operational overhead.'
      category: 'Database'
      pricing: 'Free - $57/month'
      rating: 4.7
      users: '35K+'
      icon: <Database className='w-8 h-8 text-green-400' />
      features: [
        'Fully managed MongoDB'
        'Global clusters'
        'Auto-scaling'
        'Backup & recovery'
        'Security & compliance'
        'Monitoring & alerting'
      ]
      website: 'https://mongodb.com/atlas'
      useCase:
        'Perfect for developers who want to use MongoDB without managing infrastructure, especially for modern web applications.'
      pros: [
        'Fully managed'
        'Global distribution'
        'Auto-scaling'
        'Good free tier'
      ]
      cons: ['Can be expensive', 'Vendor lock-in', 'Limited customization']
    }
    {
      name: 'Vercel'
      description:
        'Platform for deploying and hosting frontend applications with automatic scaling, global CDN, and zero configuration.'
      category: 'Hosting'
      pricing: 'Free - $20/month'
      rating: 4.8
      users: '100K+'
      icon: <Cloud className='w-8 h-8 text-black' />
      color: 'bg-gradient-to-br from-gray-800 to-black'
      features: [
        'Zero-config deployment'
        'Global CDN'
        'Automatic scaling'
        'Git integration'
        'Preview deployments'
        'Edge functions'
      ]
      website: 'https://vercel.com'
      useCase:
        'Ideal for frontend developers and teams that want to deploy modern web applications quickly with excellent performance.'
      pros: ['Zero config', 'Excellent performance', 'Great DX', 'Free tier']
      cons: ['Limited backend features', 'Can be expensive for high traffic']
    }
    {
      name: 'Linear'
      description:
        'Issue tracking tool built for high-performance teams. Streamline your workflows and ship better products faster.',      category: 'Project Management'
      pricing: 'Free - $8/month'
      rating: 4.9
      users: '10K+'
      icon: <TrendingUp className='w-8 h-8 text-blue-400' />,      description: 'Issue tracking tool built for high-performance teams. Streamline your workflows and ship better products faster.'
      category: 'Project Management'
      pricing: 'Free - $8/month'
      rating: 4.9
      users: '10K+'
      icon: <TrendingUp className='w-8 h-8 text-blue-400' />
      features: [
        'Issue tracking'
        'Roadmap planning'
        'Team collaboration'
        'Git integration'
        'Automated workflows'
        'Mobile apps'
      ]
      website: 'https://linear.app'
      useCase:
        'Perfect for software development teams that need a fast, intuitive issue tracking and project management tool.'
      pros: [

=======




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        'Lightning fast',
        'Beautiful design',
        'Great keyboard shortcuts',
        'Git integration',
      ],
      cons: ['Limited reporting', 'No time tracking', 'Smaller ecosystem'],
    },;


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  ];
  const categories = [
    'All'
    'Automation'
    'Productivity'
    'Payments'
    'Customer Support'
    'Analytics'
    'Database'
    'Hosting'
    'Project Management'
  ];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const filteredServices =
    selectedCategory === 'All'
      ? microSaasServices
      : microSaasServices.filter(
          service => service.category === selectedCategory
        );  const filteredServices = selectedCategory === 'All'
    ? microSaasServices
    : microSaasServices.filter(service => service.category === selectedCategory);

    {
      name: 'Linear',
      description: 'Issue tracking tool built for high-performance teams. Streamline your workflows and ship better products faster.',
      category: 'Project Management',
      pricing: 'Free - $8/month',
      rating: 4.9,
      users: '10K+',
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      features: [

        '5000+ app integrations'
        'Visual workflow builder'
        'Multi-step automations'
        'Scheduled triggers'
        'Error handling'
        'Team collaboration'
      ]
      website: 'https://zapier.com'
      useCase:
        'Perfect for businesses looking to automate customer support, marketing, and sales processes.'
      pros: [
        'Easy to use'
        'Extensive integrations'
        'Reliable'
        'Great support'
      ]
      cons: ['Can get expensive', 'Limited customization']
    }


  ];
  const categories = [;
    'All',;
    'Automation',;
    'Productivity',;
    'Payments',;
    'Customer Support',;
    'Analytics',;
    'Database',;
    'Hosting',;
    'Project Management',;
  ];
  const [selectedCategory, setSelectedCategory] = React && React.useState('All');




  return (
    <>;
      <Head>;
        <title>SaaS Marketplace - Zion Tech Group</title>;
        <meta
          name='description'
          content='Discover the best micro SaaS services for your business. Curated selection of tools for automation, productivity, payments, and more.'
        />
        <meta
          property='og:title'
          content='SaaS Marketplace - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Curated selection of the best micro SaaS services for modern businesses.'


              <Button
                href='#services'
                size='lg'
                className='animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40'
                style={{ animationDelay: '0 && 0.2s' }}>;
                Explore Services;
                <ArrowRight className='w-5 h-5 ml-2' />;
              </Button>;
              <Button
                href='/contact'
                variant='outline'
                size='lg'
                className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5'                style={{ animationDelay: '0 && 0.4s' }}                href="/contact"




<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
              >
                Get Recommendations
              </Button>
            </div>
          </div>
          {/* Stats */}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                {microSaasServices.length}+
              </div>
              <div className='text-gray-400 text-sm'>Curated Services</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300'>
                9
              </div>
              <div className='text-gray-400 text-sm'>Categories</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300'>
                4.7+
              </div>
              <div className='text-gray-400 text-sm'>Avg Rating</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300'>
                100K+
              </div>
              <div className='text-gray-400 text-sm'>Total Users</div>            </div>                {microSaasServices.length}+
              </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="text-gray-400 text-sm">Curated Services</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                9
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                4.7+
              </div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                100K+
              </div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
          </div>
        </div>
      </section>


                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5">;
                Get Recommendations;
              </Button>;
            </div>;
          </div>;
          {/* Stats */}
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in'
            style={{ animationDelay: '0 && 0.6s' }}>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300'>;
                {microSaasServices && microSaasServices.length}+;
              </div>;
              <div className='text-gray-400 text-sm'>Curated Services</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300'>;
                9;
              </div>;
              <div className='text-gray-400 text-sm'>Categories</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300'>;
                4 && 4.7+;
              </div>;
              <div className='text-gray-400 text-sm'>Avg Rating</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300'>;
                100K+;
              </div>;
              <div className='text-gray-400 text-sm'>Total Users</div>            </div>                {microSaasServices && microSaasServices.length}+;
              </div>;
              <div className="text-gray-400 text-sm">Curated Services</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">;
                9;
              </div>;
              <div className="text-gray-400 text-sm">Categories</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">;
                4 && 4.7+;
              </div>;
              <div className="text-gray-400 text-sm">Avg Rating</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">;
                100K+;
              </div>;
              <div className="text-gray-400 text-sm">Total Users</div>;


            </div>;
          </div>;
        </div>;
      </section>;


      {/* Category Filter */}
      <section className='py-16 bg-gray-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='flex flex-wrap justify-center gap-4'>;
            {categories && categories.map(category => (              <button      <section className="py-16 bg-gray-900">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-wrap justify-center gap-4">;
            {categories && categories.map((category) => (;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
=======
=======


              <button


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${;
                  selectedCategory === category;
                    ? 'bg-blue-600 text-white shadow-lg';
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';
                }`}
              >;
                {category}
              </button>;
            ))}
          </div>
        </div>
      </section>


          </div>;
        </div>;
      </section>;





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      {/* Services Grid */}
      <section id='services' className='py-24 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              {selectedCategory === 'All'
                ? 'All Services'
                : `${selectedCategory} Services`}


<<<<<<< HEAD
            </h2>



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              {selectedCategory === 'All'
                ? 'Explore our curated selection of the best micro SaaS services for modern businesses.'
                : `Discover the best ${selectedCategory.toLowerCase()} tools to streamline your business operations.`}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {filteredServices.map((service, index) => (

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
      {/* Category Filter */}
      <section className='py - 16 bg - gray - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex flex - wrap justify - center gap - 4'>;
            {categories.map (category => (              <button      <section className="py - 16 bg - gray - 900">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="flex flex - wrap justify - center gap - 4">;
            {categories.map ((category) => (
                key={category}
                on_click={() => setSelectedCategory (category)}
                className={`px - 6 py - 3 rounded - full text - sm font - medium transition - all duration - 300 ${
                  selected_category === category;
                    ? 'bg - blue - 600 text - white shadow - lg';
                    : 'bg - gray - 800 text - gray - 300 hover:bg - gray - 700 hover:text - white';
                }`}
              >;
                {category}
              </button>))}
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section id='services' className='py - 24 bg - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              {selected_category === 'All';
                ? 'All Services';
                : `${selected_category} Services`}
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              {selected_category === 'All';
                ? 'Explore our curated selection of the best micro SaaS services for modern businesses.';
                : `Discover the best ${selected_category.toLowerCase ()} tools to streamline your business operations.`}
            </p>;
          </div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
            {filtered_services.map ((service, index) => (
              <Card;
                key={index}
                className='group border border - gray - 800 hover:border - blue - 500 / 30 hover:bg - gray - 900 / 80 transition - all duration - 300 hover:-translate - y-1';
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className='flex items - start space - x-6'>;
                  <div className='relative'>;
                    <div;
                      className={`w - 20 h - 20 rounded - 2xl flex items - center justify - center text - 3xl bg - gradient - to - br ${service.color} shadow - xl group - hover:scale - 110 transition - transform duration - 300`}
                    >;

                      {service.icon}
                    </div>;
                  </div>;
                  <div className='flex - 1'>;
                    <div className='flex items - center justify - between mb - 2'>;
                      <h3 className='text - 2xl font - bold text - white group - hover:text - blue - 400 transition - colors duration - 300'>;
                        {service.name}
                      </h3>;
                      <div className='flex items - center space - x-2'>;
                        <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                        <span className='text - sm text - gray - 300'>;
                          {service.rating}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                        Key Features:
                      </h4>
                      <div className='grid grid-cols-2 gap-2'>
                        {service.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (


<<<<<<< HEAD
=======
                      <Button
                        href={service && service.website}
                        variant='outline'
                        size='sm'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

      {/* CTA Section */}


            Our team of experts can help you select the perfect SaaS tools for;
            your business needs. Get personalized recommendations and;
            implementation support.;
          </p>;





<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>

            Need Help Choosing?

<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
          </h2>
          <p className='text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Our team of experts can help you select the perfect SaaS tools for
            your business needs. Get personalized recommendations and
            implementation support.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Button
              href='/contact'
              variant='secondary'
              size='lg'
              className='bg-white text-blue-600 hover:bg-gray-100 shadow-2xl'>;
              Get Expert Advice;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
            <Button
              href='/services'
              variant='outline'
              size='lg'

              className='border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl'            >              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
);

              View Our Services;
            </Button>;
          </div>;
        </div>;
      </section>;



  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
    </>);
=======
<<<<<<< HEAD
);
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
