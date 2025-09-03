import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Download, FileText, Calendar, User, Eye, ArrowRight, Search } from 'lucide-react';

export default function Whitepapers() {
  const whitepapers = [
    {

      topics: ['Machine Learning', 'Business Strategy', 'Digital Transformation', 'ROI Analysis']
    }, {
      id: 'cloud-migration-strategies' }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Cloud Computing', 'Software Development', 'Cybersecurity', 'Data Analytics'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredWhitepapers = whitepapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch});

  return (

            </div>
          </div>
        </section>


                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>


                      {paper.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {paper.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="w-4 h-4 mr-1" />
                        {paper.pages} pages
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="w-4 h-4 mr-1" />
                        {paper.downloads}
                      </div>
                      <div className="flex items-center text-sm text-yellow-500">
                        <Eye className="w-4 h-4 mr-1" />
                        {paper.rating}
                      </div>
                    </div>

                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredWhitepapers.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No white papers found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>


          </div>
        </section>
      </main>
    </>
  )}