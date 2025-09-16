import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

interface SearchResult {
  title: string;
  path: string;
  description: string;
  category: string;
  icon: string;
}

const ContentSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const contentPages: SearchResult[] = [
    // AI Pages
    { title: 'AI Revolutionary Breakthrough 2026', path: '/pages/AIRevolutionaryBreakthrough2026', description: 'Discover the latest AI breakthroughs and revolutionary technologies', category: 'AI', icon: '🧠' },
    { title: 'Synthetic Intelligence 2026', path: '/pages/SyntheticIntelligence2026', description: 'Explore synthetic intelligence and artificial consciousness', category: 'AI', icon: '🤖' },
    { title: 'Next Gen AI Revolution 2026', path: '/pages/NextGenAIRevolution2026', description: 'Next generation AI technologies and applications', category: 'AI', icon: '🚀' },
    { title: 'Advanced AI Transformation 2026', path: '/pages/AdvancedAITransformation2026', description: 'Advanced AI transformation strategies and solutions', category: 'AI', icon: '⚡' },
    
    // Quantum Computing
    { title: 'Quantum Computing Revolution 2026', path: '/pages/QuantumComputingRevolution2026', description: 'Revolutionary quantum computing technologies and applications', category: 'Quantum', icon: '⚡' },
    { title: 'Quantum Neural Fusion 2026', path: '/pages/QuantumNeuralFusion2026', description: 'Fusion of quantum computing and neural networks', category: 'Quantum', icon: '🧬' },
    { title: 'Advanced Quantum Computing 2026', path: '/pages/AdvancedQuantumComputing2026', description: 'Advanced quantum computing solutions and breakthroughs', category: 'Quantum', icon: '🔬' },
    
    // Neural Interfaces
    { title: 'Neural Interface Revolution 2026', path: '/pages/NeuralInterfaceRevolution2026', description: 'Revolutionary brain-computer interface technologies', category: 'Neural', icon: '🧬' },
    { title: 'Advanced Neural Interface 2026', path: '/pages/AdvancedNeuralInterface2026', description: 'Advanced neural interface systems and applications', category: 'Neural', icon: '🔗' },
    
    // Biotech & Space
    { title: 'Advanced Biotech Revolution 2026', path: '/pages/AdvancedBiotechRevolution2026', description: 'Revolutionary biotechnology and life sciences', category: 'Biotech', icon: '🧬' },
    { title: 'Space Tech Innovation 2026', path: '/pages/SpaceTechInnovation2026', description: 'Space technology innovations and space exploration', category: 'Space', icon: '🚀' },
    { title: 'Advanced Robotics 2026', path: '/pages/AdvancedRobotics2026', description: 'Advanced robotics and autonomous systems', category: 'Robotics', icon: '🤖' },
    
    // Tech Blog
    { title: 'Revolutionary Tech Blog 2026', path: '/pages/RevolutionaryTechBlog2026', description: 'Latest technology insights and revolutionary developments', category: 'Blog', icon: '📝' },
    { title: 'Comprehensive Tech Insights 2026', path: '/pages/ComprehensiveTechInsights2026', description: 'Comprehensive technology insights and analysis', category: 'Blog', icon: '📊' },
    
    // Additional AI Pages
    { title: 'AI Innovation Hub 2026', path: '/pages/AIInnovationHub2026', description: 'Central hub for AI innovation and development', category: 'AI', icon: '🏢' },
    { title: 'AI Business Automation 2026', path: '/pages/AIBusinessAutomation2026', description: 'AI-powered business automation solutions', category: 'AI', icon: '⚙️' },
    { title: 'AI Enterprise Copilot 2025', path: '/pages/AIEnterpriseCopilot2025', description: 'AI-powered enterprise assistance and automation', category: 'AI', icon: '👥' },
    
    // Additional Quantum Pages
    { title: 'Quantum Consciousness 2026', path: '/pages/QuantumConsciousness2026', description: 'Quantum consciousness and quantum mind technologies', category: 'Quantum', icon: '🧠' },
    { title: 'Quantum Supremacy 2026', path: '/pages/QuantumSupremacy2026', description: 'Achieving quantum supremacy in computing', category: 'Quantum', icon: '👑' },
    
    // Additional Neural Pages
    { title: 'Neural Computing 2026', path: '/pages/NeuralComputing2026', description: 'Advanced neural computing systems', category: 'Neural', icon: '💻' },
    { title: 'Neural Networks 2026', path: '/pages/NeuralNetworks2026', description: 'Next-generation neural network architectures', category: 'Neural', icon: '🕸️' },
    
    // Blockchain & Crypto
    { title: 'Advanced Blockchain Solutions 2026', path: '/pages/AdvancedBlockchainSolutions2026', description: 'Advanced blockchain and cryptocurrency solutions', category: 'Blockchain', icon: '⛓️' },
    { title: 'Blockchain Revolution 2027', path: '/pages/BlockchainRevolution2027', description: 'Revolutionary blockchain technologies and applications', category: 'Blockchain', icon: '🔗' },
    
    // Cybersecurity
    { title: 'Advanced Cybersecurity 2026', path: '/pages/AdvancedCybersecurity2026', description: 'Advanced cybersecurity solutions and protection', category: 'Security', icon: '🔒' },
    { title: 'Cybersecurity Fortress 2026', path: '/pages/CybersecurityFortress2026', description: 'Fortress-level cybersecurity protection systems', category: 'Security', icon: '🏰' },
    
    // IoT & Edge Computing
    { title: 'Advanced IoT Platform 2026', path: '/pages/AdvancedIoTPlatform2026', description: 'Advanced Internet of Things platform solutions', category: 'IoT', icon: '🌐' },
    { title: 'Edge Computing IoT Revolution 2026', path: '/pages/EdgeComputingIoTRevolution2026', description: 'Edge computing and IoT revolution technologies', category: 'IoT', icon: '⚡' },
    
    // Metaverse & Web3
    { title: 'Advanced Metaverse Solutions 2026', path: '/pages/AdvancedMetaverseSolutions2026', description: 'Advanced metaverse and virtual reality solutions', category: 'Metaverse', icon: '🥽' },
    { title: 'Metaverse Web3 Revolution 2026', path: '/pages/MetaverseWeb3Revolution2026', description: 'Metaverse and Web3 revolutionary technologies', category: 'Metaverse', icon: '🌐' },
    
    // Future Tech
    { title: 'Future Tech Innovation 2026', path: '/pages/FutureTechInnovation2026', description: 'Future technology innovations and predictions', category: 'Future', icon: '🔮' },
    { title: 'Future Tech Revolution 2026', path: '/pages/FutureTechRevolution2026', description: 'Revolutionary future technology developments', category: 'Future', icon: '🚀' },
    { title: 'Future Tech Trends 2026', path: '/pages/FutureTechTrends2026', description: 'Future technology trends and forecasts', category: 'Future', icon: '📈' },
    
    // Consciousness & AI
    { title: 'Consciousness Computing 2026', path: '/pages/ConsciousnessComputing2026', description: 'Consciousness-based computing systems', category: 'Consciousness', icon: '🧠' },
    { title: 'Consciousness Transfer 2027', path: '/pages/ConsciousnessTransfer2027', description: 'Revolutionary consciousness transfer technology', category: 'Consciousness', icon: '♾️' },
    { title: 'Transdimensional Computing 2027', path: '/pages/TransdimensionalComputing2027', description: 'Transdimensional computing technologies', category: 'Future', icon: '🌌' }
  ];

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return contentPages.filter(page => 
      page.title.toLowerCase().includes(query) ||
      page.description.toLowerCase().includes(query) ||
      page.category.toLowerCase().includes(query)
    ).slice(0, 10); // Limit to 10 results
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsOpen(e.target.value.length > 0);
  };

  const handleResultClick = () => {
    setSearchQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => setIsOpen(searchQuery.length > 0)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
          placeholder="Search technology content..."
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && filteredResults.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          <div className="py-1">
            {filteredResults.map((result, index) => (
              <Link
                key={index}
                to={result.path}
                onClick={handleResultClick}
                className="flex items-start px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
              >
                <span className="text-2xl mr-3 flex-shrink-0">{result.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {result.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {result.description}
                  </p>
                  <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                    {result.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && searchQuery && filteredResults.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="px-4 py-6 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try searching for "AI", "Quantum", "Neural", or "Biotech"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentSearch;