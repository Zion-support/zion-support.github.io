import { ArrowRight,CalendarClockSearchTagUser } from 'lucide-react';
import React from 'react';

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

constBlog: React.FC = () => {
  constblogPosts = [
    {
      id: 1
      title: 'TheFutureof AIinBusiness: 2025Trendsand Predictions'
      excerpt: 'Explorethelatest AItrendsthat arereshapinghow businessesoperateand competeinthe digitallandscape.'
      author: 'SarahJohnson'
      date: '2025-01-15'
      readTime: '5minread'
      category: 'AI & MachineLearning'
      image: '/api/placeholder/600/400'
      featured: true
    }
    {
      id:  2
      title: 'MicroSaaS: BuildingScalableSolutions forModernBusinesses'
      excerpt: 'Learnhowmicro SaaSapplicationsare revolutionizingsoftwaredelivery andcreatingnew opportunitiesforbusinesses.'
      author: 'MichaelChen'
      date: '2025-01-12'
      readTime: '7minread'
      category: 'MicroSaaS'
      image: '/api/placeholder/600/400'
      featured: false
    }
    {
      id:  3
      title: 'CloudMigrationBest Practices: ACompleteGuide'
      excerpt: 'Comprehensiveguideto successfulcloudmigration strategiescommonpitfallsandhowto ensuresmoothtransitions.'
      author: 'DavidThompson'
      date: '2025-01-10'
      readTime: '8minread'
      category: 'Cloud & DevOps'
      image: '/api/placeholder/600/400'
      featured: false
    }
    {
      id:  4
      title: 'Cybersecurityin2025: ProtectingYourDigital Assets'
      excerpt: 'Essentialcybersecuritystrategies andtoolsevery businessneedsto protectagainstevolving threats.'
      author: 'EmilyRodriguez'
      date: '2025-01-08'
      readTime: '6minread'
      category: 'Cybersecurity'
      image: '/api/placeholder/600/400'
      featured: false
    }
    {
      id:  5
      title: 'DataAnalytics: TurningInformationinto BusinessIntelligence'
      excerpt: 'Howtoleverage dataanalyticsto makeinformedbusiness decisionsandgain competitiveadvantages.'
      author: 'SarahJohnson'
      date: '2025-01-05'
      readTime: '9minread'
      category: 'DataAnalytics'
      image: '/api/placeholder/600/400'
      featured: false
    }
    {
      id:  6
      title: 'TheRiseof No-Code/Low-CodeDevelopmentPlatforms'
      excerpt: 'Exploringhowno-codeandlow-codeplatformsare democratizingsoftwaredevelopment andacceleratinginnovation.'
      author: 'MichaelChen'
      date: '2025-01-03'
      readTime: '6minread'
      category: 'Development'
      image: '/api/placeholder/600/400'
      featured: false
    }
  ]; constcategories = [
    'All'
    'AI & MachineLearning'
    'MicroSaaS'
    'Cloud & DevOps'
    'Cybersecurity'
    'DataAnalytics'
    'Development'
  ]; constfeaturedPost = blogPosts.find(post => post.featured); constregularPosts = blogPosts.filter(post => !post.featured); return (
    <>
      <Helmet>
        <title>Blog - ZionTechGroup | AI & TechnologyInsights</title>
        <metaname = 'description'
          content="Stayupdatedwith thelatestinsights onAItechnologytrendsandbusinesstransformation fromZionTech Group'sexpertteam."
        />
        <metaname = 'keywords'
          content='AIblogtechnologyinsightsbusinesstransformationmachinelearningcloudcomputingcybersecurity'
        />
      </Helmet>

      <divclassName = 'min-h-screenbg-gradient-to-brfrom-blue-50via-whiteto-teal-50'>
        {/* HeaderSection */}
        <sectionclassName='bg-gradient-to-rfrom-blue-600to-purple-600py-20'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8text-center'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
            >
              <h1className = 'text-4xlmd: text-5xlfont-boldtext-whitemb-6'>
                TechnologyInsights & Trends
              </h1>
              <pclassName='text-xltext-blue-100max-w-3xlmx-auto'>
                Stayaheadof thecurvewith expertinsightson AItechnologytrendsandbusinesstransformation strategiesfromour teamofspecialists.
              </p>
            </motion.div>
          </div>
        </section>

        <divclassName = 'max-w-7xlmx-autopx-4sm: px-6lg:px-8py-16'>
          {/* SearchandFilter */}
          <divclassName = 'mb-12'>
            <divclassName='flexflex-colmd: flex-rowgap-4items-centerjustify-between'>
              <divclassName='relativeflex-1max-w-md'>
                <SearchclassName='absoluteleft-3top-1/2transform -translate-y-1/2 w-5 h-5text-gray-400' />
                <inputtype='text'
                  placeholder='Searcharticles...'
                  className='w-fullpl-10pr-4py-3borderborder-gray-300rounded-lgfocus:ring-2focus:ring-blue-500focus:border-transparent'
                />
              </div>
              <divclassName='flexgap-2'>
                { categories.map((categoryindex) = > (
                  <buttonkey = { index  }className = { `px-4py-2rounded-lgfont-mediumtransition-colors ${
                      category === 'All'
                         ? 'bg-blue-600text-white'
                        : 'bg-whitetext-gray-600hover : bg-gray-100borderborder-gray-300'
                     }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FeaturedPost */}
          { featuredPost  && (
            <motion.divinitial = {{ opacity:  0y: 20  }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
              className = 'mb-16'
            >
              <divclassName='bg-whiterounded-xlshadow-lgoverflow-hidden'>
                <divclassName='gridgrid-cols-1lg: grid-cols-2gap-0'>
                  <divclassName='bg-gradient-to-brfrom-blue-500to-purple-600p-8flexitems-center'>
                    <div>
                      <divclassName='inline-flexitems-centerpx-3py-1rounded-fullbg-whitebg-opacity-20text-whitetext-smfont-mediummb-4'>
                        <TagclassName='w-4 h-4mr-1' />
                        FeaturedArticle
                      </div>
                      <h2className='text-3xlfont-boldtext-whitemb-4'>
                        {featuredPost.title}
                      </h2>
                      <pclassName = 'text-blue-100mb-6'>
                        {featuredPost.excerpt}
                      </p>
                      <divclassName='flexitems-centergap-4text-blue-100text-smmb-6'>
                        <divclassName='flexitems-centergap-1'>
                          <UserclassName='w-4 h-4' />
                          {featuredPost.author}
                        </div>
                        <divclassName='flexitems-centergap-1'>
                          <CalendarclassName='w-4 h-4' />
                          {newDate(featuredPost.date).toLocaleDateString()}
                        </div>
                        <divclassName = 'flexitems-centergap-1'>
                          <ClockclassName='w-4 h-4' />
                          {featuredPost.readTime}
                        </div>
                      </div > <Linkto={`/blog/${featuredPost.id}`}
                        className='inline-flexitems-centerbg-whitetext-blue-600px-6py-3rounded-lgfont-semiboldhover: bg-gray-100transition-colors'
                      >
                        ReadArticle
                        <ArrowRight,className='w-5 h-5ml-2' />
                      </Link>
                    </div>
                  </div>
                  <divclassName='bg-gray-100flexitems-centerjustify-centerp-8'>
                    <divclassName='w-fullh-64bg-gradient-to-brfrom-gray-200to-gray-300rounded-lgflexitems-centerjustify-center'>
                      <spanclassName='text-gray-500'>FeaturedImage</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* BlogPostsGrid */}
          <divclassName = 'gridgrid-cols-1md: grid-cols-2lg:grid-cols-3gap-8'>
            { regularPosts.map((postindex) = > (
              <motion.articlekey = { post.id  }initial = {{ opacity:  0y: 20 }}
                animate = {{ opacity:  1y:  0 }}
                transition = {{ duration: 0.6delay: index * 0.1 }}
                className = 'bg-whiterounded-xlshadow-lgoverflow-hiddenhover: shadow-xltransition-shadow'
              >
                <divclassName='h-48bg-gradient-to-brfrom-gray-200to-gray-300flexitems-centerjustify-center'>
                  <spanclassName='text-gray-500'>ArticleImage</span>
                </div>
                <divclassName='p-6'>
                  <divclassName='inline-flexitems-centerpx-3py-1rounded-fullbg-blue-100text-blue-800text-smfont-mediummb-4'>
                    {post.category}
                  </div>
                  <h3className = 'text-xlfont-boldtext-gray-900mb-3line-clamp-2'>
                    {post.title}
                  </h3>
                  <pclassName='text-gray-600mb-4line-clamp-3'>
                    {post.excerpt}
                  </p>
                  <divclassName='flexitems-centergap-4text-gray-500text-smmb-4'>
                    <divclassName='flexitems-centergap-1'>
                      <UserclassName='w-4 h-4' />
                      {post.author}
                    </div>
                    <divclassName='flexitems-centergap-1'>
                      <CalendarclassName='w-4 h-4' />
                      {newDate(post.date).toLocaleDateString()}
                    </div>
                    <divclassName = 'flexitems-centergap-1'>
                      <ClockclassName='w-4 h-4' />
                      {post.readTime}
                    </div>
                  </div > <Linkto={`/blog/${post.id}`}
                    className='inline-flexitems-centertext-blue-600font-semiboldhover: text-blue-700transition-colors'
                  >
                    ReadMore
                    <ArrowRight,className='w-4 h-4ml-1' />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* NewsletterSubscription */}
          <motion.divinitial = {{ opacity:  0y: 20 }}
            animate = {{ opacity:  1y:  0 }}
            transition = {{ duration: 0.6delay: 0.8 }}
            className = 'mt-16bg-gradient-to-rfrom-blue-600to-purple-600rounded-xlp-8text-center'
          >
            <h3className='text-2xlfont-boldtext-whitemb-4'>
              StayUpdatedwith OurLatestInsights
            </h3>
            <pclassName='text-blue-100mb-6max-w-2xlmx-auto'>
              Subscribetoour newsletterandnever missanarticle. Getweeklyinsights onAItechnologytrendsandbusinesstransformation
              deliveredtoyour inbox.
            </p>
            <divclassName = 'flexflex-colsm: flex-rowgap-4max-w-mdmx-auto'>
              <inputtype='email'
                placeholder='Enteryouremail address'
                className='flex-1px-4py-3rounded-lgborder-0focus:ring-2focus:ring-whitefocus:ring-offset-2focus:ring-offset-blue-600'
              />
              <buttonclassName='bg-whitetext-blue-600px-6py-3rounded-lgfont-semiboldhover:bg-gray-100transition-colors'>
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

exportdefaultBlog;
