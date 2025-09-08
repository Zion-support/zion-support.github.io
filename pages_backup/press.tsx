export default function Press() {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Business Automation Platform', date: '2024-01-15',
      summary: 'New platform combines machine learning with business process automation to help enterprises achieve unprecedented efficiency gains.', category: 'Product Launch',
      readTime: '3 min read'
    }, {
      title: 'Zion Tech Group Secures $10M Series A Funding for Global Expansion',
      date: '2023-11-20', summary: 'Funding round led by leading venture capital firms to accelerate product development and international market expansion.',
      category: 'Funding', readTime: '4 min read'
    },
    {
      title: 'Zion Tech Group Partners with Microsoft to Deliver Advanced Cloud Solutions', date: '2023-09-10',
      summary: 'Strategic partnership enables customers to leverage Microsoft Azure with Zion\'s AI and automation capabilities.', '
      category: 'Partnership',
      readTime: '2 min read'
    }, {
      title: 'Zion Tech Group Recognized as Top AI Company by TechCrunch',
      date: '2023-08-05', summary: 'Company named in TechCrunch\'s "Top 50 AI Companies to Watch" list for innovative approach to business automation.','
      category: 'Award', readTime: '2 min read'
    }
  ];

  const mediaCoverage = [
    {
      outlet: 'TechCrunch', title: 'How Zion Tech Group is Revolutionizing Business Automation',
      date: '2024-01-10', type: 'Feature Article',
      url: '#'
    }, {
      outlet: 'Forbes',
      title: 'The Future of AI in Enterprise: Insights from Zion Tech Group', date: '2023-12-15',
      type: 'Interview', url: '#'
    },
    {
      outlet: 'VentureBeat', title: 'Zion Tech Group Raises $10M to Scale AI Automation Platform',
      date: '2023-11-20', type: 'News',
      url: '#'
    }, {
      outlet: 'ZDNet',
      title: 'Microsoft Partnership Brings AI to Enterprise Cloud', date: '2023-09-10',
      type: 'News', url: '#'
    }
  ];

  const awards = [
    {
      title: 'Top AI Company 2024', organization: 'TechCrunch',
      date: '2024-01-15', description: 'Recognized for innovative AI solutions and business impact'
    },
    {
      title: 'Best Cloud Innovation', organization: 'Cloud Computing Awards',
      date: '2023-12-01', description: 'Awarded for breakthrough cloud automation platform'
    },
    {
      title: 'Startup of the Year', organization: 'Delaware Business Times',
      date: '2023-10-15', description: 'Honored for rapid growth and market disruption'
    }
  ];

  const teamQuotes = [
    {
      name: 'Kleber Santos', title: 'CEO & Founder',
      quote: 'We\'re not just building technology; we\'re building the future of how businesses operate. Our AI solutions are designed to empower organizations to achieve unprecedented levels of efficiency and innovation.', image: '/api/placeholder/100/100'
    },
    {
      name: 'Sarah Johnson', title: 'CTO',
      quote: 'The intersection of AI and business automation represents the next frontier in enterprise technology. We\'re proud to be at the forefront of this transformation.', '
      image: '/api/placeholder/100/100'
    }
  ];
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

}

}

import React from 'react',
import SEO from '../components / SEO',
export default /**
 * PressPage - Function description
 */
function PressPage() {
return (
  <>;
  <SEO title="Press | Zion Tech Group" description="News, media resources, and press inquiries." canonical="/press" />;
  <div className="container mx - auto px - 4 py - 16">;
    <h1 className="text - 4xl font - bold mb - 4">Press</h1>;
    <p className="text - gray - 300">Media kit and announcements coming soon.</p>;
  </div>;
  </>);
}



import React from 'react';
import SEO from '../components/SEO';

export default function PressPage() {


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;



  return (
    <>
      <Head>
        <title>Press - Zion Tech Group</title>
        <meta name="description" content="Latest news, press releases, and media coverage about Zion Tech Group. Stay updated on our innovations and achievements." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Press & Media
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Stay updated with the latest news, announcements, and achievements from Zion Tech Group.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Media Inquiries
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <a href="mailto:press@ziontechgroup.com" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                  press@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Latest Press Releases
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Official announcements and company news
              </p>
            </div>
            
            <div className="space-y-8">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {release.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(release.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FileText className="w-4 h-4 mr-1" />
                          {release.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{release.title}</h3>
                      <p className="text-gray-600 mb-4">{release.summary}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link href="#" className="text-blue-600 hover: text-blue-700 font-semibold flex items-center">
                      Read Full Release
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Coverage */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Media Coverage
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                What the media is saying about us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaCoverage.map((coverage, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover: shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {coverage.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(coverage.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{coverage.title}</h3>
                  <p className="text-gray-600 mb-4 font-semibold">{coverage.outlet}</p>
                  <a href={coverage.url} className="text-blue-600 hover: text-blue-700 font-semibold flex items-center">
                    Read Article
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Awards & Recognition
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Industry recognition for our innovation and impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover: shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{award.organization}</p>
                  <p className="text-gray-600 text-sm mb-3">{award.description}</p>
                  <div className="flex items-center justify-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(award.date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Quotes */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Leadership Insights
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Perspectives from our leadership team
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamQuotes.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-gray-700 mb-4 italic">
                        "{member.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-gray-900">{member.name}</p>
                        <p className="text-gray-600">{member.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Media Kit
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Download our media kit for logos, images, and company information.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Download Media Kit
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <a href="mailto:press@ziontechgroup.com" className="text-white hover:text-blue-200 transition-colors">
                press@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>
</>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  );
origin/cursor/automate-test-improve-and-merge-code-2533
