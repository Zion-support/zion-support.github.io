import Link from 'next/link',
import EnhancedMarketplaceCard from '../../components/ui/EnhancedMarketplaceCard',
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import { useEffect, useState  } from 'react';
import InteractiveSearch from '../../components/ui/InteractiveSearch';
export default function JobsListPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = null;
  return (
    <div className='space-y-4'>
      <InteractiveSearch placeholder='Search jobs, keywords, or companies...' />
      {loading ? (
        <EnhancedLoading lines={4} />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {jobs.map(j => (
            <Link key={j.slug} href={`/jobs/${j.slug}`}>
              <a>
                <EnhancedMarketplaceCard
                  title={j.title}
                  subtitle={j.subtitle}
                  description={j.description}
                  footer={<span className='text-blue-600'>View Job →</span>}
                />
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
);
