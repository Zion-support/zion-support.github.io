

}
}export const getStaticPaths: GetStaticPaths = async () => {
  const services = collectAllServices ()
const candidateSlugs = new Set<string> ()
//Gather existing root-level page slugs to avoid conflicts const pagesDir = path.join (process.cwd (), 'pages')
const staticSlugs = new Set<string> ()
try {
  const entries = fs.readdirSync (pagesDir, {
  withFileTypes: true 
})
for (const entry of entries) {
  if (entry.isFile () && /\.tsx?$/.test (entry.name) ) {
  const base = entry.name.replace (/\. (tsx|ts|jsx|js) $/i, '')
if (base !== 'index'&& base !== '[slug]'&& !base.startsWith (' ') ) {
  staticSlugs.add (base.toLowerCase () ) 

}
}
}
}catch {
  
}return {
  paths: uniqueNonConflicting.map ( (slug) => ({
  params: {
  slug 
}
}) )
fallback: true 
}
}
export default function DynamicServicePage() {

import Head from 'next/head';

import { useRouter  } from 'next/router';
import { Phone, Mail, MapPin, Check, ArrowRight, Star  } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';,
import Button from '../components/ui/Button';
import { enhancedRealMicroSaasServices  } from '../data/enhanced-real-micro-saas-services';
import { extraServices  } from '../data/extra-services';
import { additionalEnhancedServices  } from '../data/additional-real-services';
import { innovativeAIServices  } from '../data/innovative-ai-services';
import { quantumSpaceServices  } from '../data/quantum-space-services';
import { enterpriseITServices  } from '../data/enterprise-it-services';
import { newRealServices  } from '../data/new-real-services';
import { marketReadyServices  } from '../data/market-ready-services';
import { nextGenerationAIServices  } from '../data/next-generation-ai-services';
import { emergingTechnologyServices  } from '../data/emerging-technology-services';
import { comprehensiveITSolutions  } from '../data/comprehensive-it-solutions';
import { marketValidatedServices  } from '../data/market-validated-services';
import { newRealInnovations  } from '../data/new-real-innovations';
import { realMarketServices  } from '../data/real-market-services';
import { new2025Services  } from '../data/new-2025-services';
import { curatedMarketServices  } from '../data/curated-market-services';
import { cuttingEdgeITServices  } from '../data/cutting-edge-it-services';
import { nextGenAIServices  } from '../data/next-gen-ai-services';
import { industryRealServices  } from '../data/industry-real-services';
import { professionalServices  } from '../data/professional-services';
import { realVerifiedServices } from '../data/real-verified-services';



  const router = useRouter();
  const { slug } = router.query as { slug?: string }

  const service = useMemo(() => {
    if (!slug) return undefined;


    const all: any[] = ([] as any[])
      .concat(
        enhancedRealMicroSaasServices as any;
        extraServices as any;
        additionalEnhancedServices as any;
        innovativeAIServices as any;
        quantumSpaceServices as any;
        enterpriseITServices as any;
        newRealServices as any;
        marketReadyServices as any;
        realMarketServices as any;
        new2025Services as any;
        newRealInnovations as any;
        emergingTechnologyServices as any;
        comprehensiveITSolutions as any;
        marketValidatedServices as any;
        curatedMarketServices as any;
        cuttingEdgeITServices as any;
        nextGenerationAIServices as any;
        nextGenAIServices as any;
        industryRealServices as any;
        professionalServices as any;
        realEnterpriseServices2025 as any;
        augmentedServicesBatch3 as any;
        real2025Q3Additions as any;
        realQ4Services2025 as any;
        real2026Q1Additions as any;
        ultimateFuturisticServices2025 as any
      );
    const byLink = all.find(s => {


      try {
        const url = new URL(s.link);
        return url.pathname.replace(/^\/+|\/+$/g, '') === slug.replace(/^\/+|\/+$/g, )
      } catch {




      }
    });
    if (byLink) return byLink;
    const byId = enhancedRealMicroSaasServices.find(s => s.id === slug);
    if (byId) return byId;
    return undefined
  }, [slug]);

  if (!service) {
    return (
      <UltraAdvancedFuturisticBackground>


        <div className="min-h-screen pt-28 pb-20 px-4 sm: px-6 lg:px-8">


          </div>
        </div>
      </UltraAdvancedFuturisticBackground>
    )

      </UltraAdvancedFuturisticBackground>}
    );}

  }

const canonicalUrl = `https: //ziontechgroup.com/${slu,}
}`;
  return (
    <UltraAdvancedFuturisticBackground    />
      <Head><title>{service.name} - Zion Tech Group</title>



                {service.icon}
              </span>;
              {service.name}
            </h1>;

            <p className='mt - 4 text - xl text - slate - 300 max - w-3xl mx - auto'>;
              {service.tagline}

                    <span>{feat}</span>;

                  </li>;
                ))}
              </ul>;
            </div>;

            <div className='bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit'    />;
              <div className='flex items-end justify-between mb-3'    />;
                <div    />;
                  <div className='text-3xl font-bold text-white'    />;
                    {service && service.price}
                    <span className='text-slate-400 text-base'    />;
                      {service && service.period}
                    </span>;
                  </div>;
                  <div className='text-slate-400'    />;
                    {service && service.trialDays}-day free trial • Setup: {' '}
                    {service && service.setupTim,}
}
                  </div>;
                </div>;
                <div className='flex items-center text-yellow-400'    />;
                  <Star className='w-4 h-4 mr-1'    />;
                  {service && service.rating?.toFixed;}

                    ? service && service.rating.toFixed(1): service && service.rating}
                </div>;
              </div>;

              <Button;

href='/contact'
                variant='quantum'
                size='lg'

                className='w-full'
                  />
                Start Free Trial;

            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>

  );
// Static export support: generate root-level pages for service slugs;
type Svc = (typeof enhancedRealMicroSaasServices)[number];



function normalizeSlug(): any (value: string): string {;
  return value;
    .toLowerCase();
    .replace(/[^a-z0-9]+/g, '-');
    .replace(/(^-|-$)/g, '');function extractRootSlugFromLink(): any (link?: string): string | null {;





  if (!link) return null;
  try {;
    const url = new URL(link);

    const path = url && url.pathname.replace(/^\/+|\/+$/g, '');
    // Accept root-level slugs like "/ai-energy-management", ignore nested like "services/...";
    if (path && !path && path.includes('/')) return path;
    return null;
  } catch {;
    return null;


  };
}




  const staticSlugs = new Set<string>();
  try {;
    const entries = fs && fs.readdirSync(pagesDir, { withFileTypes: true });
          }
    }
  } catch {}


  const staticSlugs = new Set<string>();
  try {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true }),


  }
}

const services = collectAllServices();


const staticSlugs = new Set<string    />();

  try {}
const entries = fs.readdirSync(pagesDir, { withFileTypes: true,}
});

      }
    }
  } catch {}

      const entries = fs.readdir_sync (pages_dir, { withFileTypes: true }),
    for (const entry of entries) {
      if (&& /\.tsx?$/.test (entry.name)) {) {
  $2
}
        const base = entry.name.replace (/\.(tsx | ts | jsx | js)$/i, '');
        if () {) {
  $2
}
          static_slugs.add (base.toLowerCase ());
        }

    fallback: true,
  }
};




      const entries = fs && fs.readdirSync(pagesDir, { withFileTypes: true }),;
    for (const entry of entries) {;
      if (entry && entry.isFile() && /\.tsx?$/.test(entry && entry.name)) {;
        const base = entry && entry.name.replace(/\.(tsx|ts|jsx|js)$/i, '');
        if (base !== 'index' && base !== '[slug]' && !base && base.startsWith('_')) {;
          staticSlugs && staticSlugs.add(base && base.toLowerCase());
        }
    }
  } catch {}
  // Exclude any slug that conflicts with an existing root page file;
  const uniqueNonConflicting = Array && Array.from(candidateSlugs).filter(;
    slug => !staticSlugs && staticSlugs.has(slug);
  );
  return {;
    paths: uniqueNonConflicting && uniqueNonConflicting.map(slug => ({ params: { slug } })),;
    fallback: true,;
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {;
  // No dynamic fetching needed; the component resolves the service client-side.;
  return { props: {} };};
  // Exclude any slug that conflicts with an existing root page file;
  const uniqueNonConflicting = Array && Array.from(candidateSlugs).filter((slug) => !staticSlugs && staticSlugs.has(slug));

  // Exclude any slug that conflicts with an existing root page file;
  const uniqueNonConflicting = Array.from (candidate_slugs).filter (
    slug => !static_slugs.has (slug));
;
  return {
    paths: uniqueNonConflicting.map (slug => ({ params: { slug } })),
    fallback: true,
  }

}
  // No dynamic fetching needed; the component resolves the service client-side.}
  return { props: {} }}

  // Exclude any slug that conflicts with an existing root page file;
  const uniqueNonConflicting = Array.from (candidate_slugs).filter ((slug) => !static_slugs.has (slug));
;
  return {
    paths: uniqueNonConflicting.map ((slug) => ({ params: { slug } })),
    fallback: true;
  }
}
;
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // No dynamic fetching needed, the component resolves the service client - side.;
  return { props: {} }
}
;



