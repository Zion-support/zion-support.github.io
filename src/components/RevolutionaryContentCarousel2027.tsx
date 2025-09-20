  const [activeTab, setActiveTab] = useState<'blog' | 'case-studies' | 'services'>('blog');
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCurrentItems = () => {
    switch (activeTab) {
      case 'blog':
        return REVOLUTIONARY_BLOG_POSTS_2027;
      case 'case-studies':
        return REVOLUTIONARY_CASE_STUDIES_2027;
      case 'services':
        return REVOLUTIONARY_SERVICES_2027;
      default:
        return REVOLUTIONARY_BLOG_POSTS_2027;
    }
              }`}</button>
            /></button>
          ))}</button>
        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            to="/revolutionary-content-2027"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View All 2027 Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></p>
            </svg>
          </Link>
