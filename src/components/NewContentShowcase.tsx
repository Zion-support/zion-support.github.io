import React from 'react';
import { Link } from 'react-router-dom';
import { newArticles2025 } from '../content/new-articles-2025';
import { newServices2026 } from '../content/new-services-2026';
constNewContentShowcase: React.FC = () => { 
  consttopArticles = newArticles2025.slice(03); consttopServices = newServices2026.slice(03); return (
    <sectionclassName = "py-20bg-gradient-to-brfrom-indigo-50via-purple-50to-pink-50">
      <divclassName="containermx-autopx-6">
        <divclassName="text-centermb-16">
          <divclassName="inline-flexitems-centerpx-4py-2bg-purple-100rounded-fulltext-purple-700font-semiboldmb-4">
            🌟 JUSTRELEASED
          </div>
          <h2className="text-5xlfont-boldtext-gray-900mb-4">
            NewContent & Services
          </h2>
          <pclassName="text-2xltext-gray-600max-w-3xlmx-auto">
            Exploreourlatest breakthrougharticlesand revolutionaryservices
          </p>
        </div>
        <divclassName="gridlg: grid-cols-2gap-12mb-12"  > {/* ArticlesSection */ }
          <div>
            <divclassName = "flexitems-centergap-3mb-6">
              <BookOpenclassName="w-8 h-8text-indigo-600" />
              <h3className="text-3xlfont-boldtext-gray-900">LatestArticles</h3>
            </div>
            <divclassName="space-y-4">
              { topArticles.map((article) = > (
                <Linkkey = { article.id  }to={ article.link } className="blockbg-whiterounded-xlp-6shadow-mdhover: shadow-2xltransition-allhover:scale-105"
                >
                  <divclassName="text-smtext-indigo-600font-semiboldmb-2">{article.category}</div>
                  <h4className = "text-xlfont-boldtext-gray-900mb-2">{article.title}</h4>
                  <pclassName="text-gray-600text-smmb-3line-clamp-2">{article.description}</p>
                  <divclassName="flexitems-centerjustify-betweentext-sm">
                    <spanclassName="text-gray-500">{article.readTime}</span>
                    <spanclassName="text-indigo-600font-semiboldflexitems-centergap-1">
                      ReadMore <ArrowRight,className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <divclassName = "mt-6text-center">
              <Linkto="/blog"
                className="inline-flexitems-centergap-2text-indigo-600font-boldhover: text-indigo-800"
              >
                ViewAllArticles
                <ArrowRight,className="w-5 h-5" />
              </Link>
            </div>
          </div>
          {/* ServicesSection */}
          <div>
            <divclassName = "flexitems-centergap-3mb-6">
              <RocketclassName="w-8 h-8text-purple-600" />
              <h3className="text-3xlfont-boldtext-gray-900">NewServices</h3>
            </div>
            <divclassName="space-y-4">
              { topServices.map((service) = > (
                <Linkkey = { service.id  }to={ service.link } className="blockbg-whiterounded-xlp-6shadow-mdhover: shadow-2xltransition-allhover:scale-105"
                >
                  <divclassName="flexitems-centergap-2mb-2">
                    <spanclassName="text-2xl">{service.icon}</span>
                    <spanclassName = "text-smtext-purple-600font-semibold">{service.category}</span>
                  </div>
                  <h4className="text-xlfont-boldtext-gray-900mb-2">{service.name}</h4>
                  <pclassName="text-gray-600text-smmb-3line-clamp-2">{service.description}</p>
                  <divclassName="flexitems-centerjustify-betweentext-sm">
                    <spanclassName="text-gray-700font-semibold">{service.pricing}</span>
                    <spanclassName="text-purple-600font-semiboldflexitems-centergap-1">
                      LearnMore <ArrowRight,className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <divclassName = "mt-6text-center">
              <Linkto="/services"
                className="inline-flexitems-centergap-2text-purple-600font-boldhover: text-purple-800"
              >
                ViewAllServices
                <ArrowRight,className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
exportdefaultNewContentShowcase;