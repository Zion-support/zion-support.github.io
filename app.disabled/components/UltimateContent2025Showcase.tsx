'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Award, Clock, ArrowRight, Zap, Star, Users, DollarSign, ArrowRight } from 'lucide-react';
interface ContentItem {;
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  roi: string;
  savings: string;
  readingTime: string;
  featured: boolean;
  description: string;
  metrics: {;
    roi: string;
    savings: string;
    efficiency: string;
    accuracy: string};
}
;
const UltimateContent2025Showcase: React.FC = () => {;
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');
  const featuredContent = [;
    {}
  }, []);
        {/* Header */}
        <div className="text-center mb-12">;
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">;
            <Zap className="w-4 h-4" />;
            <span>ULTIMATE CONTENT 2025 REVOLUTION</span>;
          </div>;
            </div>;
            <div className="text-3xl font-bold text-gray-900 mb-2">$8.2B+</div>;
            <div className="text-gray-600">Total Savings</div>;
          </div>;
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">;
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">;
              <Users className="w-6 h-6 text-white" />;
            </div>;
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>;
            <div className="text-gray-600">Success Stories</div>;
          </div>;
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">;
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">;
              <Star className="w-6 h-6 text-white" />;
            </div>;
            <div className="text-3xl font-bold text-gray-900 mb-2">99.7%</div>;
            <div className="text-gray-600">Success Rate</div>;
          </div>;
        </div>
              }`}
            >;
              {filter.label} ({filter.count});
            </button>;
          ))}
        </div>;
        {/* Content Grid */}
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-2 gap-8">;
          {filteredContent.map((item, index) => (;
            <div;
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover: shadow-xl transition-all duration-300 group";
            >;
              {/* Header */}
              <div className="p-6 border-b border-gray-100">;
                <div className="flex items-center justify-between mb-4">;
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(item.type)}`}>;
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('- ')}</span>;
                  </div>;
                  <div className="flex items-center space-x-1 text-sm text-gray-500">;
                    <Clock className="w-4 h-4" />;
                    <span>{item.readingTime}</span>;
                  </div>;
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover: text-purple-600 transition-colors">;
                  {item.title}
                </h3>;
                <p className="text-gray-600 leading-relaxed">;
                  {item.description}
                </p>;
              </div>;
              {/* Metrics */}
              <div className="p-6 bg-gray-50">;
                <div className="grid grid-cols-2 gap-4 mb-4">;
                  <div className="text-center">;
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>;
                    <div className="text-sm text-gray-600">ROI</div>;
                  </div>;
                  <div className="text-center">;
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>;
                    <div className="text-sm text-gray-600">Savings</div>;
                  </div>;
                  <div className="text-center">;
                    <div className="text-2xl font-bold text-purple-600">{item.metrics.efficiency}</div>;
                    <div className="text-sm text-gray-600">Efficiency</div>;
                  </div>;
                  <div className="text-center">;
                    <div className="text-2xl font-bold text-orange-600">{item.metrics.accuracy}</div>;
                    <div className="text-sm text-gray-600">Accuracy</div>;
                  </div>;
                </div>;
                <Link;
                  href={item.url}
                  className={`w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${getTypeGradient(item.type)} text-white px-6 py-3 rounded-lg font-semibold hover: shadow-lg transition-all duration-200 group`}
                >;
                  <span>Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}</span>;
                  <ArrowRight className="w-4 h-4 group-hover: translate-x-1 transition-transform" />;
                </Link>;
              </div>;
            </div>;
          ))}
        </div>;
        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mb-8">;
          {featuredContent.map((content, index) => (;
            <div;
              key={content.id}
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 cursor-pointer transition-all duration-300 hover: bg-opacity-20 ${;
                index === currentSlide ? 'ring-2 ring-yellow-400' : ''}`}
              onClick={() => setCurrentSlide(index)}
            >;
              <div className="flex items-center gap-2 mb-3">;
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">;
                  NEW;
                </span>;
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">;
                  {content.type.toUpperCase()}
                </span>;
              </div>;
              <h4 className="font-bold mb-2 line-clamp-2">;
                {content.title}
              </h4>;
              <div className="text-sm opacity-75 mb-3">;
                {content.reading_time}
              </div>;
              <div className="text-lg font-bold text-yellow-400">;
                {content.metrics.roi} ROI;
              </div>;
            </div>;
          ))}
        </div>;
        {/* Call to Action */}
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                href="/contact";
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  )};
export default UltimateContent2025Showcase,]