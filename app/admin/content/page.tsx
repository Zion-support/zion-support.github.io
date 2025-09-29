import ContentManagementDashboard from '../../../components/ContentManagementDashboard';

export const metadata = {
  title: 'Content Management Dashboard | Zion Tech Group Admin',
  description: 'Manage and organize all website content including blog posts, case studies, services, and promotional banners.',
};

export default function ContentManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h1>
          <p className="text-gray-600">
            Manage and organize all website content including blog posts, case studies, services, and promotional banners.
          </p>
        </div>
        
        <ContentManagementDashboard />
        
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Content Management Features</h3>
          <ul className="text-blue-800 space-y-1">
            <li>• Centralized content configuration for easy updates</li>
            <li>• Search and filter capabilities across all content types</li>
            <li>• Featured content management and prioritization</li>
            <li>• Promotional banner scheduling and management</li>
            <li>• Content tagging and categorization system</li>
            <li>• Real-time content statistics and overview</li>
          </ul>
        </div>
      </div>
    </div>
  );
}