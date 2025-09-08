


}
{
  type: 'warning', message: 'Title tag too long (65 characters) ', priority: 'medium' 
}
{
  type: 'info', message: 'Consider adding more internal links', priority: 'low' 
}]
recommendations: [ 'Optimize meta descriptions for better click-through ratesImprove page load speed by optimizing imagesAdd more relevant internal links to improve site structureImplement schema markup for rich snippets' ]
keywords: [ {
  keyword: 'website optimization', volume: '12K', difficulty: 'medium' 
}
{
  keyword: 'SEO tools', volume: '8K', difficulty: 'low' 
}
{
  keyword: 'search engine optimization', volume: '15K', difficulty: 'high' 
}] 
})
setIsAnalyzing (false) 
}, 4000) 
}
return (<> <Head> <title>SEO Analyzer Tool - Zion Tech Group | Professional SEO Analysis & Optimization</title> <meta name="description" content="Analyze your website's SEO performance with our comprehensive tool. Get detailed insights, keyword research, and optimization recommendations to improve search rankings." /> <meta property="og:title" content="SEO Analyzer Tool - Zion Tech Group" /> <meta property="og:description" content="Professional SEO analysis tool with comprehensive insights and optimization recommendations." /> <meta name="twitter:card" content="summary large image" /> </Head> <div className="relative z-10 container-cursor text-center" > <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6" > <Search className="w-4 h-4 mr-2" /> Professional SEO Analysis </div> <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg" > SEO Analyzer Tool </h1> <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12" > Analyze your website's SEO performance with our comprehensive tool. Get detailed insights
keyword research, and optimization recommendations to improve your search rankings and drive more organic traffic. </p> > {
  isAnalyzing ? (<> <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" /> Analyzing... </>) : (<> <Search className="w-5 h-5 mr-2" /> Analyze SEO </>) 
}</Button> </div> </div> <div className="flex flex-col sm:flex-row gap-6 justify-center" > <Button href="#pricing" variant="outline" size="lg" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl" > View Pricing </Button> <Button href="/contact" variant="outline" size="lg" className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl" > Schedule Demo </Button> </div> </div> </section> Powerful SEO Features </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > Our SEO analyzer provides comprehensive insights and tools to help you dominate search rankings. </p> </div> </div> <div className= {
  `absolute -inset-2 bg-gradient-to-r from-transparent via-$ {
  feature.gradient 
}to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm` 
}/> </div> </p> </div> </div> </Card>) ) 
}</div> </div> </section> Comprehensive SEO Analysis </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > We analyze every aspect of your website's SEO to provide actionable insights and recommendations. </p> </div> </li>) ) 
}</ul> </Card>) ) 
}</div> </div> </section> SEO Analysis Results </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > Here's a sample analysis of a website. Get comprehensive insights for your own website. </p> </div> <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8" > {
  /* Overall Score */ 
}/> </svg> </div> <p className="text-gray-400" >Good SEO foundation with room for improvement</p> </Card> </div> </div> </Card>) : issue.type === 'warning' ? (<AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />) : (<CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />) 
}<div> </div> </div>) ) 
}</div> </Card> </div> </div>) ) 
}</div> </Card> keyword.difficulty === 'low' ? 'bg-green-500/20 text-green-400' : keyword.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400' 
}` 
}> {
  keyword.difficulty 
}</span> </div> </div>) ) 
}</div> </Card> </div> </div> </section>) 
}Simple Pricing </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > Choose the SEO analysis plan that best fits your business needs and goals. </p> </div> <Card key= {
  index 
}className= {
  `card-hover border-gradient-green $ {
  plan.popular ? 'ring-2 ring-green-500 scale-105' : '' 
}` 
}style= {
  {
  animationDelay: `$ {
  index * 0.1 
}s` 
}
}> Most Popular </span> </div>) 
}</li>) ) 
}</ul> <Button > Get Started <ArrowRight className="w-5 h-5 ml-2" /> </Button> </Card>) ) 
}</div> </div> </section> <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden"> <div className="absolute inset-0 bg-[radial-gradient (circle, rgba (255, 255, 255, 0.1) 1px, transparent 1px) ] bg-[size: 20px 20px] opacity-10" /> <div className="container-cursor text-center relative z-10"> <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg"> text-responsive-md text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed"> Join thousands of businesses using our SEO analyzer to improve their search rankings and drive more organic traffic. </p> <div className=" flex flex-col sm:flex-row gap-6 justify-center"> <Button href=" /contact"size=" lg"className=" bg-white text-green-600 hover:bg-gray-100 shadow-2xl"> Start Free Trial <ArrowRight className=" w-5 h-5 ml-2"/> </Button> <Button href=" /contact"variant=" outline"size=" lg"className=" border-white text-white hover:bg-white hover:text-green-600 shadow-2xl" > Schedule Demo </Button> </div> </div> </section> </>) 
}
import Button from '../components/ui/Button';

  const [isAnalyzing, setIsAnalyzing] = useState(false);






const [url, setUrl] = useState('');
icon: <Search className='w-8 h-8 text-white'    />,
      title: 'Comprehensive SEO Analysis',
  description:
        'Deep analysis of on-page SEO factors, technical issues, and content optimization opportunities.'
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',}
  gradient: 'from-green-400 to-emerald-500'}
    }
    {
      icon: <Target className='w-8 h-8 text-white'    />
      title: 'Keyword Research',
  description:
        'Discover high-value keywords and analyze search intent to optimize your content strategy.'
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',}
  gradient: 'from-blue-400 to-cyan-500'}
    }
    {
      icon: <BarChart3 className='w-8 h-8 text-white'    />
      title: 'Competitive Analysis',
  description:
        \"Analyze your competitors' SEO strategies and identify opportunities to outperform them.\"
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  gradient: 'from-purple-400 to-indigo-500'}
   ,}
}
    {
      icon: <Zap className='w-8 h-8 text-white'    />
      title: 'AI-Powered Insights',
  description:
        'Get intelligent recommendations and actionable insights to improve your search rankings.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',}
  gradient: 'from-orange-400 to-red-500',}
    },

  ];

const features = [
  {;
      icon: <Search className='w-8 h-8 text-white'    />,;




      popular: false,
    },    {        '10 website analyses / month_basic SEO metrics_keyword research (100 keywords)On - page SEO analysis_email support_basic reporting';
      ];
      popular: false;
    }


      name: 'Professional',
  price: '$89',
      period: '/month',

      features: [
'50 website analyses/month',






  return (
















                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover-glow whitespace-nowrap"


<div className='flex flex-col sm: flex-row gap-6 justify-center'    />
            <Button;
href='#pricing'
              variant='outline'
              size='lg'

              className='border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl'
                />
              View Pricing;
            </Button>
            <Button;
href='/contact'
              variant='outline'
              size='lg'

              className='border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl'
                />
              Schedule Demo;

            </Button>
          </div>
        </div>
      </section>


      {/* Features Section *,}
}
<section className='section-padding bg-gradient-cursor-accent'    />
        <div className='container-cursor'    />
          <div className='text-center mb-20'    />
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />
              Powerful SEO Features;
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />
              Our SEO analyzer provides comprehensive insights and tools to help;
you dominate search rankings.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'    />
            {features.map((feature, index) => (}
              <Card;}
key={index}
                className='card-hover group border-gradient-green'
                style={{ animationDelay: `${index * 0.1}s` }}
                  />
                <div className='flex items-start space-x-6'    />
                  <div className='relative'    />
                    <div;
className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                        />
                      {feature.icon}
                    </div>
                    <div;
className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                       />
                  </div>
                  <div className='flex-1'    />
                    <h3 className='text-2xl font-bold mb-4 text-white'    />
                      {feature.title}
                    </h3>
                    <p className='text-gray-400 leading-relaxed'    />
                      {feature.description}




              Comprehensive SEO Analysis
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              We analyze every aspect of your website's SEO to provide
              actionable insights and recommendations.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {seoFactors.map((category, index) => (


            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'    />
            {seoFactors.map((category, index) => (


                      {factor}
                    </li>;



                  </svg>;
                </div>;
                <p className='text-gray-400'    />;


              <Card className='border-gradient-green'    />
                <h3 className='text-2xl font-bold mb-6 text-white'    />
                  Detailed Scores;

              {/* Overall Score */}
              <Card className="border-gradient-green text-center">;
                <h3 className="text-2xl font-bold mb-6 text-white">Overall SEO Score</h3>;
                <div className="text-6xl font-bold text-green-400 mb-4">{analysisResults && analysisResults.overallScore}/100</div>;
                <div className="w-32 h-32 mx-auto mb-6">;
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">;
                    <path
                      d="M18 2 && 2.0845 a 15 && 15.9155 15 && 15.9155 0 0 1 0 31 && 31.831 a 15 && 15.9155 15 && 15.9155 0 0 1 0 -31 && 31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${(analysisResults && analysisResults.overallScore / 100) * 100}, 100`}
                      className="text-green-500"



                    />;
                  </svg>;
                </div>;
                <p className="text-gray-400">Good SEO foundation with room for improvement</p>;
              </Card>;
              {/* Detailed Scores */}
              <Card className="border-gradient-green">;
                <h3 className="text-2xl font-bold mb-6 text-white">Detailed Scores</h3>;
                <div className="space-y-4">;
                  <div className="flex justify-between items-center">;
                    <span className="text-gray-400">On-Page SEO</span>;
                    <span className="font-bold text-green-400">{analysisResults && analysisResults.onPageScore}/100</span>;
                  </div>;
                  <div className="flex justify-between items-center">;
                    <span className="text-gray-400">Technical SEO</span>;
                    <span className="font-bold text-orange-400">{analysisResults && analysisResults.technicalScore}/100</span>;
                  </div>;
                  <div className="flex justify-between items-center">;
                    <span className="text-gray-400">Content SEO</span>;
                    <span className="font-bold text-blue-400">{analysisResults && analysisResults.contentScore}/100</span>;
                  </div>;
                  <div className="flex justify-between items-center">;
                    <span className="text-gray-400">Mobile SEO</span>;
                    <span className="font-bold text-green-400">{analysisResults && analysisResults.mobileScore}/100</span>;
                  </div>;
                </div>;
              </Card>;





              {/* Issues */}
<Card className='border-gradient-green'    />;
                <h3 className='text-2xl font-bold mb-6 text-white'    />;
                  Issues Found;
                </h3>;
                <div className='space-y-3'    />;
                  {analysisResults.issues.map((issue, index) => (<div key={index} className='flex items-start space-x-3'    />;
                      {issue.type === 'error' ? (<AlertTriangle className='w-5 h-5 text-red-400 mt-1 flex-shrink-0'    />;
                      ) : issue.type === 'warning' ? (<AlertTriangle className='w-5 h-5 text-yellow-400 mt-1 flex-shrink-0'    />;}
                      ) : (<CheckCircle className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0'    />;}
                      )}




                  ))}








                </div>;
              </Card>;
              <Card className='border-gradient-green'>;
                <h3 className='text-2xl font-bold mb-6 text-white'>;
                  Keyword Opportunities;
                </h3>;
                <div className='space-y-4'>;



                    <div
                      key={index}
                      className='border-b border-gray-700 pb-3 last:border-b-0'>;
                      <div className='flex justify-between items-center mb-2'>;
                        <span className='font-semibold text-white'>;

                          {keyword && keyword.keyword}
                        </span>;
                        <span className='text-sm text-gray-400'    />;
                          Volume: {keyword && keyword.volum,}
}
                        </span>;
                      </div>;
                      <div className='flex justify-between items-center'    />;
                        <span className='text-sm text-gray-400'    />;
                          Difficulty: {keyword && keyword.difficult,}
}

                        </span>;

                        <span;

className={`px-2 py-1 rounded text-xs ${
                            keyword && keyword.difficulty === 'low'
                              ? 'bg-green-500/20 text-green-400'
                              : keyword && keyword.difficulty === 'medium'
                                ? 'bg-yellow-500/20 text-yellow-400'

                  ))}




              Simple Pricing
            </h2>
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Choose the SEO analysis plan that best fits your business needs
              and goals.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricing.map((plan, index) => (              Simple Pricing
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the SEO analysis plan that best fits your business needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (


      <section id='pricing' className='section-padding bg-gradient-cursor'>;


            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'>;



      )}
      {/* Pricing Section */}
<section id='pricing' className='section-padding bg-gradient-cursor'    />;
        <div className='container-cursor'    />;
          <div className='text-center mb-20'    />;
            <h2 className='text-responsive-lg font-bold mb-8 gradient-text text-shadow'    />;
              Simple Pricing;
            </h2>;
            <p className='text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed'    />;






                      Most Popular;
                    </span>;}
                  </div>;}
                )}





                      {feature}
                    </li>;

            ),
}






            <Button
              href='/contact'

              variant='outline'
              size='lg'


              className='border-white text-white hover:bg-white hover:text-green-600 shadow-2xl'
                />
              Schedule Demo;


    <   />
  );
}





