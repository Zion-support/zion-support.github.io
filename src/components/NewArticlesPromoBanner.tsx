importReact{ useStateuseEffect } from 'react';
import { Link } from 'react-router-dom';
import { newArticles2025 } from '../content/new-articles-2025';
interfaceNewArticlesPromoBannerProps { 
  variant?: 'default' | 'premium' | 'featured' | 'compact';
  showCount?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
  className ?  : string;
 }
constNewArticlesPromoBanner: React.FC<NewArticlesPromoBannerProps> = ({
  variant = 'default'
  showCount =  3
  autoRotate = false
  rotationInterval = 5000
  className = ''
}) => {  
  const [setCurrentIndex] = useState(0); constfeaturedArticles = newArticles2025.filter(a => a.featured).slice(0showCount); useEffect(() => {
    if (autoRotate  && featuredArticles.length > 1) {
      constinterval = setInterval(() => {
        setCurrentIndex((prev) = > (prev + 1) % featuredArticles.length);
        }rotationInterval);
      return () => clearInterval(interval);
    }
  }[autoRotatefeaturedArticles.lengthrotationInterval]);
  if (variant = == 'compact') {
    return (
      <divclassName = {`bg-gradient-to-rfrom-blue-600to-cyan-600rounded-lgp-4 ${className}`}>
        <divclassName="flexitems-centerjustify-between">
          <divclassName="flexitems-centergap-3">
            <BookOpenclassName="w-6 h-6text-white" />
            <div>
              <h4className="text-whitefont-bold">
                {featuredArticles.length} NewArticlesPublished
              </h4>
              <pclassName="text-blue-100text-sm">LatestAIinsights andresearch</p>
            </div>
          </div>
          <Linkto="/blog"
            className="bg-whitetext-blue-600px-4py-2rounded-lgfont-semiboldhover: bg-blue-50transition-colorstext-sm"
          >
            ReadNow
          </Link>
        </div>
      </div  > );
  }
  if (variant = == 'premium') {
    return (
      <divclassName = {`bg-gradient-to-brfrom-indigo-700via-purple-700to-pink-700rounded-2xlp-8text-white ${className}`}>
        <divclassName="max-w-6xlmx-auto">
          <divclassName="flexitems-centergap-3mb-6">
            <SparklesclassName="w-8 h-8text-yellow-300animate-pulse" />
            <h2className="text-3xlfont-bold">BreakthroughArticlesJust Published</h2>
          </div>
          <divclassName="gridmd: grid-cols-3gap-6">
            { featuredArticles.map((article) = > (
              <divkey = { article.id  }className = "bg-white/10backdrop-blur-lgrounded-xlp-6hover: bg-white/20transition-allhover:scale-105"
              >
                <divclassName="flexitems-centergap-2mb-3">
                  <TrendingUpclassName="w-5 h-5text-green-300" />
                  <spanclassName="text-smfont-semiboldtext-green-300">{article.category}</span>
                </div>
                <h3className = "text-xlfont-boldmb-3">{article.title}</h3>
                <pclassName="text-purple-100text-smmb-4line-clamp-2">{article.description}</p>
                <divclassName="flexitems-centerjustify-between">
                  <spanclassName="text-smtext-purple-200">{article.readTime}</span>
                  <Linkto = { article.link }className = "text-yellow-300font-semiboldhover: text-yellow-200flexitems-centergap-1"
                  >
                    Read <ArrowRight,className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <divclassName = "text-centermt-8">
            <Linkto="/blog"
              className="inline-flexitems-centergap-2bg-whitetext-purple-700px-8py-4rounded-xlfont-boldhover: bg-purple-50transition-allhover:scale-105"
            >
              ViewAllArticles
              <ArrowRight,className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div  > );
  }
  if (variant = == 'featured') {
    return (
      <divclassName = {`bg-whiterounded-2xlshadow-2xloverflow-hidden ${className}`}>
        <divclassName="bg-gradient-to-rfrom-blue-600to-purple-600p-6">
          <divclassName="flexitems-centerjustify-between">
            <divclassName="flexitems-centergap-3">
              <BookOpenclassName="w-8 h-8text-white" />
              <h2className="text-2xlfont-boldtext-white">FeaturedArticles</h2>
            </div>
            <spanclassName="bg-yellow-400text-blackpx-3py-1rounded-fulltext-smfont-bold">
              NEW
            </span>
          </div>
        </div>
        <divclassName="p-8">
          <divclassName="gridmd: grid-cols-2lg:grid-cols-4gap-6">
            { featuredArticles.map((article) = > (
              <Linkkey = { article.id  }to={ article.link } className="groupborderborder-gray-200rounded-xlp-5hover: shadow-xlhover:border-indigo-300transition-all"
              >
                <divclassName="flexflex-wrapgap-2mb-3">
                  { article.tags.slice(02).map((tag) = > (
                    <spankey = { tag  }className = "text-xsbg-indigo-100text-indigo-700px-2py-1rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4className = "font-boldtext-gray-900mb-2group-hover: text-indigo-600transition-colors">
                  {article.title}
                </h4>
                <pclassName = "text-smtext-gray-600mb-3line-clamp-2">{article.description}</p>
                <divclassName="flexitems-centerjustify-betweentext-sm">
                  <spanclassName="text-gray-500">{article.readTime}</span>
                  <ArrowRight,className="w-4 h-4text-indigo-600group-hover: translate-x-1transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div  > );
  }
  // Defaultvariantreturn (
    <divclassName = {`bg-gradient-to-rfrom-blue-600to-indigo-600rounded-xlp-6md: p-8text-white ${className}`}>
      <divclassName = "flexitems-centergap-3mb-4">
        <SparklesclassName="w-6 h-6text-yellow-300" />
        <h3className="text-2xlfont-bold">NewArticlesAvailable</h3>
      </div>
      <divclassName="gridmd: grid-cols-3gap-4">
        { featuredArticles.map((article) = > (
          <divkey = { article.id  }className = "bg-white/10rounded-lgp-4hover: bg-white/20transition-all">
            <divclassName="text-smtext-blue-200mb-2">{article.category}</div>
            <h4className = "font-semiboldmb-2">{article.title}</h4>
            <Linkto = { article.link }className = "text-yellow-300text-smfont-semiboldhover: underline">
              ReadArticle →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
exportdefaultNewArticlesPromoBanner;