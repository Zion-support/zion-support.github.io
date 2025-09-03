<<<<<<< HEAD
 const ContentQualityDashboard = ({ className = ' }) => { const [isOpen, setIsOpen] = useState (false)  const [isLoading, setIsLoading] = useState (false)  const [report, setReport] = useState (null)  const [selectedPage, setSelectedPage] = useState (null)  const [searchTerm, setSearchTerm] = useState (')  const [filterStatus, setFilterStatus] = useState ('all')  const contentAnalyzer = ContentQualityAnalyzer.getInstance ()  const analyzeAllPages = useCallback (async () => { setIsLoading (true)  try {''";
=======
<<<<<<< HEAD
 const ContentQualityDashboard = ({ className = ' }) => { const [isOpen, setIsOpen] = useState (false)  const [isLoading, setIsLoading] = useState (false)  const [report, setReport] = useState (null)  const [selectedPage, setSelectedPage] = useState (null)  const [searchTerm, setSearchTerm] = useState (')  const [filterStatus, setFilterStatus] = useState ('all')  const contentAnalyzer = ContentQualityAnalyzer.getInstance ()  const analyzeAllPages = useCallback (async () => { setIsLoading (true)  try {''""

""
}}}
=======
import React from 'react';
import { SEO } from '@/components/SEO';

const ContentQualityDashboardJs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="ContentQualityDashboardJs - Zion Tech Group"
        description="Professional ContentQualityDashboardJs services by Zion Tech Group"
        keywords="contentqualitydashboardjs, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">ContentQualityDashboardJs</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional ContentQualityDashboardJs services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentQualityDashboardJs;
>>>>>>> main
>>>>>>> main
