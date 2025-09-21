import { Search } from 'lucide-react';
import { fetchWithRetry } from '../utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '../utils/productionLogger';

// Categories for filtering
const CATEGORIES = [
  'All',
  'Technology',
  'AI',
  'Business',
  'Development',
  'Design',
  'Marketing'
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
        <div className="bg-white rounded-lg p-6">
          <p>Blog content will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}