import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
  Rocket,
  DollarSign,
  Users,
  BarChart3,
  Mail,
  Calendar,
  Shield,
  Globe,
  ArrowRight,
  Star,
  Check,
  ExternalLink,
  TrendingUp,
  Zap,
  Target,
  Lightbulb,
  BookOpen,} from 'lucide-react';import {
  Rocket;
  DollarSign,
  Users,
  BarChart3,
  Mail,
  Calendar,
  Shield,
  Globe;
  ArrowRight;
  Star;
  Check;
  ExternalLink;
  TrendingUp;
  Zap;
  Target;
  Lightbulb;

export default function StartupToolsPage() {
  const startupTools = [
    {
      name: 'HubSpot'
      description:
        'All-in-one inbound marketing, sales, and customer service platform designed to help businesses grow better.'
      pricing: 'Free - $45/month'
      rating: 4.7
      users: '135K+'
      icon: <Target className='w-8 h-8 text-orange-400' />
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
      features: [
        'CRM system'
        'Email marketing'
        'Lead generation'
        'Analytics & reporting'
        'Marketing automation'
        'Free tier available'
      ]
      website: 'https://hubspot.com'
      useCase:
        'Perfect for startups that want to implement inbound marketing strategies and manage customer relationships effectively.'
      pros: [
        'Free tier'
        'All-in-one solution'
        'Great for beginners'
        'Excellent support'
      ]
      cons: [
        'Can get expensive'
        'Complex for small teams'
        'Limited customization'
      ]
      bestFor: 'B2B startups, SaaS companies, marketing teams'
    }
    {
      name: 'Mailchimp'
      description:
        'Email marketing platform that helps businesses create, send, and track email campaigns with ease.'
      category: 'Email Marketing'
      pricing: 'Free - $59/month'
      rating: 4.5
      users: '12M+'
      icon: <Mail className='w-8 h-8 text-yellow-400' />
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
      features: [
        'Email templates'
        'Automation workflows'
        'A/B testing'
        'Analytics & reporting'
        'Integration ecosystem'
        'Free tier available'
      ]
      website: 'https://mailchimp.com'
      useCase:
        'Ideal for startups that need to build email lists, nurture leads, and communicate with customers.'
      pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable']
      cons: ['Limited free features', 'Basic automation', 'Can be expensive']
      bestFor: 'E-commerce, content creators, small businesses'
    }
    {
      category: 'Productivity',
      pricing: 'Free - $12 / month',
      rating: 4.8,
      users: '10M+',
      category: 'Design',
      pricing: 'Free - $12.99 / month',
      rating: 4.6,
      users: '100M+',
      category: 'Customer Support',
      pricing: '$39 - $999 / month',
      rating: 4.6,
      users: '25K+',
      icon: <Users className='w - 8 h - 8 text - green - 400' />,
      color: 'bg - gradient - to - br from - green - 500 to - emerald - 600',
      features: [;
        'Live chat',
        'Customer messaging',
        'Help desk',
        'User onboarding',
        'Analytics & reporting',
        'Integration ecosystem',
      ],
      website: 'https://intercom.com',
      use_case:;
        'Perfect for SaaS startups and online businesses that want to provide excellent customer support and user engagement.',
      pros: [;
        'Great UX',
        'Powerful features',
        'Good integrations',
        'Mobile apps',
      ],
      cons: ['Expensive', 'Complex pricing', 'Can be overwhelming'],
      best_for: 'SaaS companies, online businesses, customer support teams',
    },
    {
      name: 'Mixpanel',
      description:;
        'Product analytics platform that helps you understand how users interact with your product and make data - driven decisions.',      category: 'Analytics',
      pricing: 'Free - $25 / month',
      rating: 4.5,
      users: '26K+',
      icon: <BarChart3 className='w - 8 h - 8 text - purple - 400' />,      color: 'bg - gradient - to - br from - green - 500 to - emerald - 600',
      features: [;
        'Live chat_customer messaging_help desk_user onboarding_analytics & reporting_integration ecosystem';
      ];
      website: 'https://intercom.com',
      use_case: 'Perfect for SaaS startups and online businesses that want to provide excellent customer support and user engagement.',
      pros: ['Great UXPowerful features_good integrations_mobile apps'],
      cons: ['ExpensiveComplex pricing_can be overwhelming'],
      best_for: 'SaaS companies, online businesses, customer support teams';
              >
                Get Startup Advice
              </Button>
            </div>
          </div>
              <div className="text-gray-400 text-sm">Essential Tools</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                10
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                4.6+
              </div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                130M+
              </div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
          </div>
        </div>
      </section>
            </div>;
          </div>;
        </div>;
      </section>;
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${;
                  selectedCategory === category;
                    ? 'bg-orange-600 text-white shadow-lg';
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';
                }`}
              >;
                {category}
              Beyond tools, here are additional resources to help your startup;
              succeed.;
            </p>;
          </div>;
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Beyond tools, here are additional resources to help your startup succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Startup Communities</h3>
              <p className="text-gray-400 mb-4">
                Join startup communities like Y Combinator Startup School, Indie Hackers, and local startup meetups.
              </p>
              <Button href="https://www.startupschool.org" variant="outline" size="sm">
                Explore Communities
              </Button>
            </Card>
              <h3 className="text-xl font-bold mb-4 text-white">Educational Resources</h3>
              <p className="text-gray-400 mb-4">
                Access free courses from platforms like Coursera, edX, and startup-specific learning resources.
              </p>
              <Button href="https://www.coursera.org" variant="outline" size="sm">
                Start Learning
              </Button>
            </Card>
              <h3 className="text-xl font-bold mb-4 text-white">Growth Strategies</h3>
              <p className="text-gray-400 mb-4">
                Learn proven growth strategies from successful entrepreneurs and growth hackers.
              </p>
              <Button href="/resources" variant="outline" size="sm">
                View Resources
              </Button>
            </Card>
          </div>
        </div>
      </section>
            <Card className='text-center'>;
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600'>;
                <TrendingUp className='w-8 h-8 text-white' />              </div>;
              <h3 className="text-xl font-bold mb-4 text-white">Educational Resources</h3>;
              <p className="text-gray-400 mb-4">;
                Access free courses from platforms like Coursera, edX, and startup-specific learning resources.;
              </p>;
              <Button href="https://www && www.coursera.org" variant="outline" size="sm">;
                Start Learning;
              </Button>;
            </Card>;

            <Card className='text-center'>;
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600'>;
                <TrendingUp className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-bold mb-4 text-white'>;
                Growth Strategies;
              </h3>;
              <p className='text-gray-400 mb-4'>;
                Learn proven growth strategies from successful entrepreneurs and growth hackers.;
              </p>;
              <Button href="/resources" variant="outline" size="sm">;
                View Resources;
              </Button>;
            </Card>;
          </div>;
        </div>;
      </section>;

}
    </>);
);

import React from 'react';
}
