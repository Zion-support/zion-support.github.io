<<<<<<< HEAD
import Link from 'next/link',;
import EnhancedMarketplaceCard from '../../components/ui/EnhancedMarketplaceCard',;
import EnhancedLoading from '../../components/ui/EnhancedLoading',;
import { useEffect, useState } from 'react',;
import InteractiveSearch from '../../components/ui/InteractiveSearch',;
;
export default function JobsListPage() {;
  const [loading, setLoading] = useState(true),;
  useEffect(() => { const t = setTimeout(() => setLoading(false), 500), return () => clearTimeout(t), }, []),;
;
  const jobs = [;
    { slug:'senior-ai-engineer', title:'Senior AI Engineer', subtitle:'Remote • Contract', description:'Build and optimize LLM-powered features in production.' },;
    { slug:'mlops-specialist', title:'MLOps Specialist', subtitle:'Remote • Part-time', description:'Design pipelines for training/inference at scale.' }],;
;
  return (;
    <div className="space-y-4">;
      <InteractiveSearch placeholder="Search jobs, keywords, or companies..." />;
      {loading ? (;
        <EnhancedLoading lines={4} />;
      ) :(;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          {jobs.map((j) => (;
            <Link key={j.slug} href={`/jobs/${j.slug}`}>;
              <a>;
                <EnhancedMarketplaceCard title={j.title} subtitle={j.subtitle} description={j.description} footer={<span className="text-blue-600">View Job →</span>} />;
              </a>;
            </Link>;
=======
import Link from 'next/link',
import EnhancedMarketplaceCard from '../../components/ui/EnhancedMarketplaceCard',
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
    <div className=&quot;space-y-4&quot;>
      <InteractiveSearch placeholder=&quot;Search jobs, keywords, or companies...&quot; />
      {loading ? (
        <EnhancedLoading lines={4} />
      ) : (
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          {jobs.map((j) => (
            <Link key={j.slug} href={`/jobs/${j.slug}`}>
              <a>
                <EnhancedMarketplaceCard title={j.title} subtitle={j.subtitle} description={j.description} footer={<span className=&quot;text-blue-600&quot;>View Job →</span>} />
              </Link>            </Link>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          ))}
        </div>;
      )}
<<<<<<< HEAD
    </div>;
  ),;
=======
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}