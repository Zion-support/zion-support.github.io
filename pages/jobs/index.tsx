<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
import Link from 'next/link',
import EnhancedMarketplaceCard from '../../components/ui/EnhancedMarketplaceCard',
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import { useEffect, useState  } from 'react';
import InteractiveSearch from '../../components/ui/InteractiveSearch';
export default function JobsListPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);
  const jobs = [
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
  ];
<<<<<<< HEAD
;
  return (

=======
<<<<<<< HEAD
;
  return (

=======
export default function JobsListPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 500), return () => clearTimeout(t) }, []);
  const jobs = [
    { slug: 'senior-ai-engineer', title: 'Senior AI Engineer', subtitle: 'Remote • Contract', description: 'Build and optimize LLM-powered features in production.' },
    { slug: 'mlops-specialist', title: 'MLOps Specialist', subtitle: 'Remote • Part-time', description: 'Design pipelines for training/inference at scale.' }],
=======



  return (
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import EnhancedLoading from '../../components/ui/EnhancedLoading',
import { useEffect, useState } from 'react',
import InteractiveSearch from '../../components/ui/InteractiveSearch',
export default function JobsListPage() {
  const [loading, setLoading] = useState(true),
  useEffect(() => { const t = setTimeout(() => setLoading(false), 500), return () => clearTimeout(t) }, []),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const jobs = [
    { slug: 'senior-ai-engineer', title: 'Senior AI Engineer', subtitle: 'Remote • Contract', description: 'Build and optimize LLM-powered features in production.' },
    { slug: 'mlops-specialist', title: 'MLOps Specialist', subtitle: 'Remote • Part-time', description: 'Design pipelines for training/inference at scale.' }],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="space-y-4">
      <InteractiveSearch placeholder="Search jobs, keywords, or companies..." />
      {loading ? (
        <EnhancedLoading lines={4} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((j) => (
            <Link key={j.slug} href={`/jobs/${j.slug}`}>
              <a>
<<<<<<< HEAD
=======
                <EnhancedMarketplaceCard title={j.title} subtitle={j.subtitle} description={j.description} footer={<span className="text-blue-600">View Job →</span>} />
<<<<<<< HEAD
              </a>
            </Link>

    </div>;
  );

=======
    </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  )
}
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


}

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
