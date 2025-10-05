import React from 'react';
import { Link } from 'react-router-dom';
import { newArticles2025 } from '../content/new-articles-2025';
constLatestArticlesShowcase: React.FC = () => { 
  constlatestArticles = newArticles2025.filter(a => a.featured).slice(06); return (
    <sectionclassName = 'py-20bg-white'>
      <divclassName='containermx-autopx-6'>
        <divclassName='text-centermb-12'>
          <h2className='text-4xlfont-boldtext-gray-900mb-4'>
            LatestArticles & Research
          </h2>
          <pclassName='text-xltext-gray-600max-w-3xlmx-auto'>
            Explorecutting-edgeinsightson AIautomationandemergingtechnologies
          </p>
        </div>
        <divclassName = 'gridmd: grid-cols-2lg:grid-cols-3gap-8'>
          {latestArticles.map(article = > (
            <Linkkey = { article.id  }to={ article.link } className='groupbg-whiterounded-xlshadow-mdhover: shadow-2xltransition-allduration-300overflow-hiddenborderborder-gray-100hover:border-indigo-300'
            >
              <divclassName='p-6'>
                <divclassName='flexitems-centerjustify-betweenmb-3'>
                  <spanclassName='text-xsfont-semiboldtext-indigo-600uppercasetracking-wide'>
                    {article.category}
                  </span>
                  {  article.featured  && (
                    <spanclassName = 'bg-yellow-100text-yellow-800text-xspx-2py-1rounded-fullfont-medium'>
                      Featured
                    </span > )  }
                </div>
                <h3className = 'text-xlfont-boldtext-gray-900mb-3group-hover: text-indigo-600transition-colors'>
                  {article.title}
                </h3>
                <pclassName = 'text-gray-600text-smmb-4line-clamp-3'>
                  {article.description}
                </p>
                <divclassName='flexitems-centerjustify-betweentext-sm'>
                  <divclassName='flexitems-centertext-gray-500'>
                    <ClockclassName='w-4 h-4mr-1' />
                    {article.readTime}
                  </div>
                  <divclassName='text-indigo-600font-semiboldgroup-hover: gap-2flexitems-centertransition-all'>
                    ReadMore
                    <ArrowRight,className='w-4 h-4group-hover:translate-x-1transition-transform' />
                  </div>
                </div>
                <divclassName='flexflex-wrapgap-2mt-4'>
                  { article.tags.slice(03).map(tag = > (
                    <spankey = { tag  }className = 'text-xsbg-gray-100text-gray-700px-2py-1rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <divclassName = 'text-centermt-12'>
          <Linkto='/blog'
            className='inline-flexitems-centergap-2bg-indigo-600text-whitepx-8py-4rounded-xlfont-boldtext-lghover: bg-indigo-700transition-allhover:scale-105shadow-lg'
          >
            ViewAllArticles
            <ArrowRight,className='w-6 h-6' />
          </Link>
        </div>
      </div>
    </section>
  );
};
exportdefaultLatestArticlesShowcase;
