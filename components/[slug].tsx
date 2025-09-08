


export default function DynamicServicePage() {













        <div className="min-h-screen pt-28 pb-20 px-4 sm: px-6 lg:px-8">


      </UltraAdvancedFuturisticBackground>}
    );}

  }

const canonicalUrl = `https: //ziontechgroup.com/${slu,}
}`;
  return (
    <UltraAdvancedFuturisticBackground    />
      <Head><title>{service.name} - Zion Tech Group</title>


            <p className='mt - 4 text - xl text - slate - 300 max - w-3xl mx - auto'>;
              {service.tagline}

                    <span>{feat}</span>;


            <div className='bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit'    />;
              <div className='flex items-end justify-between mb-3'    />;
                <div    />;
                  <div className='text-3xl font-bold text-white'    />;
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










  const staticSlugs = new Set<string>();
  try {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true }),



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



