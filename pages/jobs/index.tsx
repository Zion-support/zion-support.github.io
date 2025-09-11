
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import EnhancedMarketplaceCard from '../../components/ui/EnhancedMarketplaceCard';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import {useEffect, useState} from 'react';
import InteractiveSearch from '../../components/ui/InteractiveSearch';
export default function JobsListPage() {;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

import Link from 'next/link',
import EnhancedMarketplaceCard from '../../components/ui/EnhancedMarketplaceCard',
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import { useEffect, useState  } from 'react';
import InteractiveSearch from '../../components/ui/InteractiveSearch';
export default function JobsListPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {;
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);
  const jobs = [;
    {;
      slug: 'senior-ai-engineer',;
      title: 'Senior AI Engineer',;
      subtitle: 'Remote • Contract',;
      description: 'Build and optimize LLM-powered features in production.',;
    },;
    {;
      slug: 'mlops-specialist',;
      title: 'MLOps Specialist',;
      subtitle: 'Remote • Part-time',;
      description: 'Design pipelines for training/inference at scale.',;
    },;
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next / link';
import EnhancedMarketplaceCard from '../../components / ui / EnhancedMarketplaceCard';
import EnhancedLoading from '../../components / ui / EnhancedLoading';
import {useEffect, useState} from 'react';
import InteractiveSearch from '../../components / ui / InteractiveSearch';
export default /**
 * JobsListPage - Function description
 */
function JobsListPage() {
  const [loading, set_loading] = useState (true);
  useEffect (() => {
    const t = set_timeout (() => set_loading (false), 500);
    return () => clear_timeout (t);
  }, []);
;
  const jobs = [;
    {
      slug: 'senior - ai - engineer',
      title: 'Senior AI Engineer',
      subtitle: 'Remote • Contract',
      description: 'Build and optimize LLM - powered features in production.',
    },
    {
      slug: 'mlops - specialist',
      title: 'MLOps Specialist',
      subtitle: 'Remote • Part - time',
      description: 'Design pipelines for training / inference at scale.',
    },
<<<<<<< HEAD
  ];
<<<<<<< HEAD
export default function JobsListPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 500), return () => clearTimeout(t) }, []);

=======
<<<<<<< HEAD
;
  return (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function JobsListPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 500), return () => clearTimeout(t) }, []);
  const jobs = [
    { slug: 'senior-ai-engineer', title: 'Senior AI Engineer', subtitle: 'Remote • Contract', description: 'Build and optimize LLM-powered features in production.' },
    { slug: 'mlops-specialist', title: 'MLOps Specialist', subtitle: 'Remote • Part-time', description: 'Design pipelines for training/inference at scale.' }],



  return (

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  ];
;
  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import EnhancedLoading from '../../components/ui/EnhancedLoading',
import { useEffect, useState } from 'react',
import InteractiveSearch from '../../components/ui/InteractiveSearch',
export default function JobsListPage() {
  const [loading, setLoading] = useState(true),
  useEffect(() => { const t = setTimeout(() => setLoading(false), 500), return () => clearTimeout(t) }, []),
  const jobs = [
    { slug: 'senior-ai-engineer', title: 'Senior AI Engineer', subtitle: 'Remote • Contract', description: 'Build and optimize LLM-powered features in production.' },
    { slug: 'mlops-specialist', title: 'MLOps Specialist', subtitle: 'Remote • Part-time', description: 'Design pipelines for training/inference at scale.' }],
  return (
    <div className="space-y-4">
      <InteractiveSearch placeholder="Search jobs, keywords, or companies..." />
      {loading ? (
        <EnhancedLoading lines={4} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((j) => (
            <Link key={j.slug} href={`/jobs/${j.slug}`}>
              <a>
                <EnhancedMarketplaceCard title={j.title} subtitle={j.subtitle} description={j.description} footer={<span className="text-blue-600">View Job →</span>} />
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );

          ))}
        </div>;
      )}
    </div>;
  );
=======
<<<<<<< HEAD
              </a>
            </Link>

    </div>;
  );

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>
  )
}
=======
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='space - y-4'>;
      <InteractiveSearch placeholder='Search jobs, keywords, or companies...' />;
      {loading ? (
        <EnhancedLoading lines={4} />) : (
        <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          {jobs.map (inner_index => (
            <Link key={j.slug} href={`/jobs/${j.slug}`}>;
              <a>;
                <EnhancedMarketplaceCard;
                  title={j.title}
                  subtitle={j.subtitle}
                  description={j.description}
                  footer={<span className='text - blue - 600'>View Job →</span>}
                />              </a>;
            </Link>))}
        </div>)}
    </div>);
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


}

<<<<<<< HEAD
<<<<<<< HEAD
              </Link>
            </Link>
          ))}
        </div>
      )}
    </div>
);

}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
