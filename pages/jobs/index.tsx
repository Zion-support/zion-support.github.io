<<<<<<< HEAD
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
              </Link>
=======
import Link from 'next/link';
import EnhancedMarketplaceCard from '../../components/ui/EnhancedMarketplaceCard';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import InteractiveSearch from '../../components/ui/InteractiveSearch';

export default function JobsListPage() {_const [loading, _setLoading] = useState(true);
  useEffect__(() => { const _t = setTimeout__(() => setLoading(false), _500); return () => clearTimeout(t);}, []);

  const _jobs = [
    {_slug: 'senior-ai-engineer', _title: 'Senior AI Engineer', _subtitle: 'Remote • Contract', _description: 'Build and optimize LLM-powered features in production.'},
    {_slug: 'mlops-specialist', _title: 'MLOps Specialist', _subtitle: 'Remote • Part-time', _description: 'Design pipelines for training/inference at scale.'}];

  return (
    <div className="space-y-4">
      <InteractiveSearch placeholder="Search jobs, keywords, or companies..." />
      {_loading ? (
        <EnhancedLoading lines={4} />
      ) : (_<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {_jobs.map((j) => (
            <Link key={j.slug} href={_`/jobs/${j.slug}`}>
              <a>
                <EnhancedMarketplaceCard title={_j.title} subtitle={_j.subtitle} description={_j.description} footer={_<span className="text-blue-600">View Job →</span>} />
              </a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}