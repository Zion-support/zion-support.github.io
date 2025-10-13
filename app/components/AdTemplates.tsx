import React, { useState } from 'react';
import { motion, AnimatePresence , Plus,
  Edit,
  Copy,
  Trash2,
  Eye,
  Download,
  Upload,
  Star,
  Tag,
  Palette,
  Type,
  Image,
  Target,
  BarChart3,
  Settings;
 } from "framer-motion";
interface AdTemplate {
  id: string;
  name: string;
  description: string;
  category: 'banner' | 'popup' | 'sidebar' | 'inline' | 'video' | 'social';
  type: 'promotional' | 'informational' | 'educational' | 'seasonal' | 'retargeting';
  preview: string;
  thumbnail: string;
  tags: string[];
  isPublic: boolean;
  isPremium: boolean;
  rating: number;
  usageCount: number;
  createdAt: string;
  updatedAt: string;
  author: string;
  components: {
    title: string;
    description: string;
    ctaText: string;
    ctaUrl: string;
    backgroundColor: string;
    textColor: string;
    imageUrl?: string;
    logoUrl?: string;
    customStyles?: string;
  };
}
interface AdTemplatesProps {
  className?: string;
}
const AdTemplates: React.FC<AdTemplatesProps> = ({ className = '' }) => {
  const [templates, setTemplates] = useState</AdTemplatesProps><AdTemplate[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState</AdTemplate><AdTemplate | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [filter, setFilter] = useState<'all' | 'banner' | 'popup' | 'sidebar' | 'inline' | 'video' | 'social'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'promotional' | 'informational' | 'educational' | 'seasonal' | 'retargeting'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'rating' | 'name'>('newest');
  // Mock data;
  React.useEffect(() => {
    const mockTemplates: AdTemplate[] = [
      {
        id: '1',
        name: 'AI Revolution Banner',
        description: 'Modern banner template for AI technology promotion',
        category: 'banner',
        type: 'promotional',
        preview: '/templates/ai-banner-preview.jpg',
        thumbnail: '/templates/ai-banner-thumb.jpg',
        tags: ['AI', 'Technology', 'Modern', 'Blue'],
        isPublic: true,
        isPremium: false,
        rating: 4.8,
        usageCount: 1247,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-15T10:30:00Z',
        author: 'Zion Tech',
        components: {
          title: 'Revolutionary AI Solutions',
          description: 'Transform your business with cutting-edge artificial intelligence',
          ctaText: 'Learn More',
          ctaUrl: '/ai-solutions',
          backgroundColor: '#3b82f6',
          textColor: '#ffffff',
          imageUrl: '/images/ai-hero.jpg',
          logoUrl: '/images/logo.png'
        }
      },
      {
        id: '2',
        name: 'Edge Computing Popup',
        description: 'Professional popup for edge computing services',
        category: 'popup',
        type: 'informational',
        preview: '/templates/edge-popup-preview.jpg',
        thumbnail: '/templates/edge-popup-thumb.jpg',
        tags: ['Edge', 'Computing', 'Professional', 'Purple'],
        isPublic: true,
        isPremium: true,
        rating: 4.9,
        usageCount: 892,
        createdAt: '2024-01-05T00:00:00Z',
        updatedAt: '2024-01-20T14:20:00Z',
        author: 'Zion Tech',
        components: {
          title: 'Edge Computing Solutions',
          description: 'Bring computation closer to your data with our edge solutions',
          ctaText: 'Get Started',
          ctaUrl: '/edge-computing',
          backgroundColor: '#8b5cf6',
          textColor: '#ffffff',
          imageUrl: '/images/edge-computing.jpg'
        }
      },
      {
        id: '3',
        name: 'Holiday Special Sidebar',
        description: 'Seasonal sidebar ad for holiday promotions',
        category: 'sidebar',
        type: 'seasonal',
        preview: '/templates/holiday-sidebar-preview.jpg',
        thumbnail: '/templates/holiday-sidebar-thumb.jpg',
        tags: ['Holiday', 'Seasonal', 'Red', 'Green'],
        isPublic: true,
        isPremium: false,
        rating: 4.6,
        usageCount: 2156,
        createdAt: '2023-12-01T00:00:00Z',
        updatedAt: '2023-12-15T09:15:00Z',
        author: 'Zion Tech',
        components: {
          title: 'Holiday Special Offer',
          description: 'Get 50% off on all our services this holiday season',
          ctaText: 'Claim Offer',
          ctaUrl: '/holiday-offer',
          backgroundColor: '#dc2626',
          textColor: '#ffffff',
          imageUrl: '/images/holiday-banner.jpg'
        }
      }
    ];
    setTemplates(mockTemplates);
  }, []);
  const filteredTemplates = templates.filter(template => {
    const matchesCategory = filter === 'all' || template.category === filter;
    const matchesType = typeFilter === 'all' || template.type === typeFilter;
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesType && matchesSearch;
  });
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'popular':
        return b.usageCount - a.usageCount;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'banner': return '📊';
      case 'popup': return '💬';
      case 'sidebar': return '📋';
      case 'inline': return '📝';
      case 'video': return '🎥';
      case 'social': return '📱';
      default: return '📄';
    }
  };
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'promotional': return 'bg-blue-100 text-blue-800';
      case 'informational': return 'bg-green-100 text-green-800';
      case 'educational': return 'bg-purple-100 text-purple-800';
      case 'seasonal': return 'bg-orange-100 text-orange-800';
      case 'retargeting': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  const handleUseTemplate = (template: AdTemplate) => {
    // In a real app, this would open the ad creation form with the template data;
    console.log('Using template:', template);
  };
  const handleEditTemplate = (template: AdTemplate) => {
    setSelectedTemplate(template);
    setIsEditing(true);
  };
  const handleDuplicateTemplate = (template: AdTemplate) => {
    const newTemplate = {
      ...template,
      id: Date.now().toString(),
      name: `${template.name} (Copy)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      usageCount: 0;
    };
    setTemplates([...templates, newTemplate]);
  };
  const handleDeleteTemplate = (id: string) => {
    setTemplates(templates.filter(template => template.id !== id));
  };
  return (
    </AdTemplate><div className={`ad-templates ${className}`}>
      {/* Header */}
      </div><div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6" /><div className="flex items-center justify-between mb-6" /><div /><h1 className="text-3xl font-bold text-gray-900">Ad Templates</h1>
            <p className="text-gray-600 mt-1">Choose from professional ad templates or create your own</p>
          </div>
          <div className="flex items-center gap-3" /><button className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2" /><Upload className="w-4 h-4" />
              Import;
            </button>
            <button;
              onClick={() => setIsCreating(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              </button><Plus className="w-5 h-5" />
              Create Template;
            </button>
          </div>
        </div>
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4" /><div className="flex-1" /><div className="relative" /><input;
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              </input><div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /><Search className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="flex gap-4" /><select;
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              </select><option value="all">All Categories</option>
              <option value="banner">Banner</option>
              <option value="popup">Popup</option>
              <option value="sidebar">Sidebar</option>
              <option value="inline">Inline</option>
              <option value="video">Video</option>
              <option value="social">Social</option>
            </select>
            <select;
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              </select><option value="all">All Types</option>
              <option value="promotional">Promotional</option>
              <option value="informational">Informational</option>
              <option value="educational">Educational</option>
              <option value="seasonal">Seasonal</option>
              <option value="retargeting">Retargeting</option>
            </select>
            <select;
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              </select><option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>
      </div>
      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" /><AnimatePresence>
          {sortedTemplates.map((template) => (
            </AnimatePresence><motion.div;
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Template Preview */}
              </motion><div className="relative" /><div className="aspect-video bg-gray-100 flex items-center justify-center" /><div className="text-6xl">{getCategoryIcon(template.category)}</div>
                </div>
                <div className="absolute top-2 right-2 flex gap-1">
                  {template.isPremium && (
                    </div><span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded">
                      PRO</span>
                    </span>
                  )}
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getTypeColor(template.type)}`}>
                    {template.type}</span>
                  </span>
                </div>
              </div>
              {/* Template Info */}
              <div className="p-4" /><div className="flex items-start justify-between mb-2" /><h3 className="font-semibold text-gray-900 truncate">{template.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500" /><Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{template.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{template.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3" /><span>{template.usageCount.toLocaleString()} uses</span>
                  <span>{template.author}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.slice(0, 3).map((tag, index) => (
                    </div><span;
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tag}</span>
                    </span>
                  ))}
                  {template.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{template.tags.length - 3}</span>
                    </span>
                  )}
                </div>
                {/* Action Buttons */}
                <div className="flex items-center gap-2" /><button;
                    onClick={() => handleUseTemplate(template)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Use Template</button>
                  </button>
                  <button;
                    onClick={() => setSelectedTemplate(template)}
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    title="Preview"
                  >
                    </button><Eye className="w-4 h-4" />
                  </button>
                  <button;
                    onClick={() => handleEditTemplate(template)}
                    className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                    title="Edit"
                  >
                    </button><Edit className="w-4 h-4" />
                  </button>
                  <button;
                    onClick={() => handleDuplicateTemplate(template)}
                    className="p-2 text-gray-400 hover:text-purple-600 transition-colors"
                    title="Duplicate"
                  >
                    </button><Copy className="w-4 h-4" />
                  </button>
                  <button;
                    onClick={() => handleDeleteTemplate(template.id)}
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                    title="Delete"
                  >
                    </button><Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Empty State */}
      {sortedTemplates.length === 0 && (
        <div className="text-center py-12" /><Palette className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
          <p className="text-gray-500 mb-6">
            {searchTerm || filter !== 'all' || typeFilter !== 'all'
              ? 'Try adjusting your search or filter criteria'
              : 'Get started by creating your first template'
            }</p>
          </p>
          {!searchTerm && filter === 'all' && typeFilter === 'all' && (
            <button;
              onClick={() => setIsCreating(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Create Your First Template</button>
            </button>
          )}
        </div>
      )}
      {/* Template Preview Modal */}
      <AnimatePresence>
        {selectedTemplate && (
          </AnimatePresence><motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
           /><motion.div;
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
             /><div className="p-6" /><div className="flex items-center justify-between mb-6" /><div /><h2 className="text-2xl font-bold text-gray-900">{selectedTemplate.name}</h2>
                    <p className="text-gray-600">{selectedTemplate.description}</p>
                  </div>
                  <button;
                    onClick={() => setSelectedTemplate(null)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    </button><X className="w-6 h-6" />
                  </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Preview */}
                  </div><div /><h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
                    <div className="border border-gray-200 rounded-lg overflow-hidden" /><div;
                        className="p-6 text-center"
                        style={{
                          backgroundColor: selectedTemplate.components.backgroundColor,
                          color: selectedTemplate.components.textColor;
                        }}
                       /><h4 className="text-2xl font-bold mb-4">{selectedTemplate.components.title}</h4>
                        <p className="mb-6">{selectedTemplate.components.description}</p>
                        <button className="px-6 py-3 bg-white bg-opacity-20 rounded-lg font-medium hover:bg-opacity-30 transition-colors">
                          {selectedTemplate.components.ctaText}</button>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Template Details */}
                  <div /><h3 className="text-lg font-semibold text-gray-900 mb-4">Template Details</h3>
                    <div className="space-y-4" /><div /><span className="text-sm font-medium text-gray-500">Category:</span>
                        <p className="text-gray-900">{selectedTemplate.category}</p>
                      </div>
                      <div /><span className="text-sm font-medium text-gray-500">Type:</span>
                        <p className="text-gray-900">{selectedTemplate.type}</p>
                      </div>
                      <div /><span className="text-sm font-medium text-gray-500">Author:</span>
                        <p className="text-gray-900">{selectedTemplate.author}</p>
                      </div>
                      <div /><span className="text-sm font-medium text-gray-500">Rating:</span>
                        <div className="flex items-center gap-1" /><Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-gray-900">{selectedTemplate.rating}/5.0</span>
                        </div>
                      </div>
                      <div /><span className="text-sm font-medium text-gray-500">Usage Count:</span>
                        <p className="text-gray-900">{selectedTemplate.usageCount.toLocaleString()}</p>
                      </div>
                      <div /><span className="text-sm font-medium text-gray-500">Tags:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedTemplate.tags.map((tag, index) => (
                            </div><span;
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            >
                              {tag}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3" /><button;
                        onClick={() => handleUseTemplate(selectedTemplate)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        Use This Template</button>
                      </button>
                      <button;
                        onClick={() => handleDuplicateTemplate(selectedTemplate)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        </button><Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AdTemplates;