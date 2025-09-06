<<<<<<< HEAD:pages/blog/index.tsx
<<<<<<< HEAD


<<<<<<< HEAD:pages_backup/blog/index.tsx
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  { slug: 'ai-automation-trends-2025', title: 'AI Automation Trends 2025', excerpt: 'What forward-leaning teams ship next with agents, RAG, and guardrails.' },
  { slug: 'cloud-native-automation', title: 'Cloud-Native Automation', excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.' },
  { slug: 'future-of-work', title: 'Future of Work', excerpt: 'Autonomous agents, copilots, and the new operating model.' },
  { slug: 'performance-optimization', title: 'Performance Optimization', excerpt: 'Web vitals, RUM, and release health for conversion lifts.' },
  { slug: 'ai-ethics-automation', title: 'AI Ethics & Automation', excerpt: 'Responsible AI with evaluations, safety baselines, and governance.' },
=======
  { slug: 'ai-automation-trends-2025', title: 'AI Automation Trends 2025', excerpt: 'What forward-leaning teams ship next with agents, RAG, and guardrails.' },'
  { slug: 'cloud-native-automation', title: 'Cloud-Native Automation', excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.' },'
  { slug: 'future-of-work', title: 'Future of Work', excerpt: 'Autonomous agents, copilots, and the new operating model.' },'
  { slug: 'performance-optimization', title: 'Performance Optimization', excerpt: 'Web vitals, RUM, and release health for conversion lifts.' },'
  { slug: 'ai-ethics-automation', title: 'AI Ethics & Automation', excerpt: 'Responsible AI with evaluations, safety baselines, and governance.' },'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/blog/index.tsx
  { slug: 'autonomous-content-generation', title: 'Autonomous Content Generation', excerpt: 'Ship content faster with quality and factuality checks.' }],




<<<<<<< HEAD:pages_backup/blog/index.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/blog/index.tsx
  {
    slug: 'ai-automation-trends-2025',
    title: 'AI Automation Trends 2025',
    excerpt:
      'What forward-leaning teams ship next with agents, RAG, and guardrails.',
  },
  {
    slug: 'cloud-native-automation',
    title: 'Cloud-Native Automation',
    excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.',
  },
  {
    slug: 'future-of-work',
    title: 'Future of Work',
    excerpt: 'Autonomous agents, copilots, and the new operating model.',
  },
  {
    slug: 'performance-optimization',
    title: 'Performance Optimization',
    excerpt: 'Web vitals, RUM, and release health for conversion lifts.',
  },
  {
    slug: 'ai-ethics-automation',
    title: 'AI Ethics & Automation',
    excerpt:
      'Responsible AI with evaluations, safety baselines, and governance.',
  },
  {
    slug: 'autonomous-content-generation',
    title: 'Autonomous Content Generation',
    excerpt: 'Ship content faster with quality and factuality checks.',
  },
];

export default function BlogIndexPage() {
  return (
    <UltraFuturisticBackground intensity='medium'>
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta
          name='description'
          content='Insights on AI, cloud, automation, and platform engineering.'
        />
        <link rel='canonical' href='https://ziontechgroup.com/blog' />
      </Head>

      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-10'>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4'>
            Insights & Guides
          </h1>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            Practical playbooks and deep dives on AI, cloud, and modern software
            delivery.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map(p => (
            <div
              key={p.slug}
              className='p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm'
            >
              <h2 className='text-white text-xl font-semibold mb-2'>
                {p.title}
              </h2>
              <p className='text-gray-400 mb-4'>{p.excerpt}</p>
              <Link
                href={`/blog/${p.slug}`}
                className='text-cyan-400 hover:text-white font-medium'
              >
                Read →
              </Link>
<<<<<<< HEAD:pages/blog/index.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/blog/index.tsx
export default function BlogIndexPage() {
=======



export default function BlogIndexPage() {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/blog/index.tsx
  return (
    <UltraFuturisticBackground  intensity="medium">
      <Head>
        <title>Blog | Zion Tech Group</title>"
        <meta name="description" content="Insights on AI, cloud, automation, and platform engineering." />"
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-10">"
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">;
            Insights & Guides;
          </h1>"
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Practical playbooks and deep dives on AI, cloud, and modern software delivery.</p>
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => ("
            <div key={p.slug} className="p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">"
              <h2 className="text-white text-xl font-semibold mb-2">{p.title}</h2>"
              <p className="text-gray-400 mb-4">{p.excerpt}</p>
<<<<<<< HEAD:pages_backup/blog/index.tsx
<<<<<<< HEAD:pages/blog/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
              <Link href={`/blog/${p.slug}`} className="text-cyan-400 hover:text-white font-medium">Read →</Link>
<<<<<<< HEAD

            </div>

=======
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </div>;
      </div>;
    </UltraFuturisticBackground>;
  );
  } catch (error) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/blog/index.tsx
            </div>

}





}




<<<<<<< HEAD:pages_backup/blog/index.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
;
;

=======
              <Link href={`/blog/${p.slug}`} className="text-cyan-400 hover:text-white font-medium">Read →</Link>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <Link href={`/blog/${p.slug}`} className="text-cyan-400 hover:text-white font-medium">Read →</Link>
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/blog/index.tsx
            </div>
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
<<<<<<< HEAD:pages/blog/index.tsx
<<<<<<< HEAD
  )
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          ))  } catch (error) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
        </div>;
      </div>;
    </UltraFuturisticBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
;
=======
          ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/blog/index.tsx


<<<<<<< HEAD:pages_backup/blog/index.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/blog/index.tsx
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/blog/index.tsx
