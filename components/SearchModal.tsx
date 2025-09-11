>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState, useEffect, useRef } from './react';
import { Search, X, ArrowRight, Clock  } from './lucide-react';
import Link from './next / link';
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface SearchResult {
interface SearchResult {;
  title: string;
  description: string;
  url: string;
  category: string;
}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface SearchModalProps {
  is_open: boolean;
  on_close: () => void;
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const search_data: SearchResult[] = [;
  // Services;
  {
    title: "AI Services",
    description: "Machine learning, computer vision, NLP, and AI solutions",
    url: "/ai - services",
    category: "Services",
  },
  {
    title: "IT Services",
    description: "Cloud infrastructure, cybersecurity, and IT solutions",
    url: "/it - services",
    category: "Services",
  },
  {
    title: "Micro SaaS",
    description: "Custom micro SaaS platforms and automation tools",
    url: "/micro - saas",
    category: "Services",
  },
  {
    title: "Cloud Solutions",
    description: "AWS, Azure, GCP migration and cloud infrastructure",
    url: "/cloud - solutions",
    category: "Services",
  },
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  {
    title: "Cybersecurity"
    description: "Security audits, penetration testing, and compliance"
    url: "/cybersecurity"
    category: "Services"
  }
  {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    title: "Blockchain Solutions",
    description: "Smart contracts, DeFi, and blockchain development",
    url: "/blockchain - services",
    category: "Services",
  },
  // Solutions;
  {
    title: "Digital Transformation",
    description: "Complete digital transformation solutions",
    url: "/digital - transformation",
    category: "Solutions",
  },
  {
    title: "Enterprise Solutions",
    description: "Large - scale enterprise technology solutions",
    url: "/enterprise - solutions",
    category: "Solutions",
  },
  {
    title: "Startup Solutions",
    description: "Technology solutions for startups and SMBs",
    url: "/startup - solutions",
    category: "Solutions",
  },
  // Industries;
  {
    title: "Healthcare",
    description: "Technology solutions for healthcare industry",
    url: "/industries / healthcare",
    category: "Industries",
  },
  {
    title: "Finance",
    description: "Financial technology and fintech solutions",
    url: "/industries / finance",
    category: "Industries",
  },
  {
    title: "Education",
    description: "Educational technology and e - learning solutions",
    url: "/industries / education",
    category: "Industries",
  },
  {
    title: "Manufacturing",
    description: "Industrial IoT and manufacturing automation",
    url: "/industries / manufacturing",
    category: "Industries",
  },
  // Company;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  {
    title: "About Us"
    description: "Learn about Zion Tech Group and our mission"
    url: "/about"
    category: "Company"
  }
  {
    title: "Contact"
    description: "Get in touch with our team"
    url: "/contact"
    category: "Company"
  }
  {
    title: "Careers"
    description: "Join our team and build the future"
    url: "/careers"
    category: "Company"
  }
  {
    title: "Blog"
    description: "Latest insights and technology trends"
    url: "/blog"
    category: "Company"
  }
  {
    title: "Pricing"
    description: "Transparent pricing for all our services"
    url: "/pricing"
    category: "Company"
  }
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {;
export default function SearchModal({ isOpen, onClose }: SearchModalProps) {

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {;
=======
=======
interface SearchModalProps {;
  isOpen: boolean;
  onClose: () => void;
}
const searchData: SearchResult[] = [;
  // Services;
  {;
    title: "AI Services",;
    description: "Machine learning, computer vision, NLP, and AI solutions",;
    url: "/ai-services",;
    category: "Services",;
  },;
  {;
    title: "IT Services",;
    description: "Cloud infrastructure, cybersecurity, and IT solutions",;
    url: "/it-services",;
    category: "Services",;
  },;
  {;
    title: "Micro SaaS",;
    description: "Custom micro SaaS platforms and automation tools",;
    url: "/micro-saas",;
    category: "Services",;
  },;
  {;
    title: "Cloud Solutions",;
    description: "AWS, Azure, GCP migration and cloud infrastructure",;
    url: "/cloud-solutions",;
    category: "Services",;
  },;
  {;
    title: "Cybersecurity",;
    description: "Security audits, penetration testing, and compliance",;
    url: "/cybersecurity",;
    category: "Services",;
  },;
  {;
    title: "Blockchain Solutions",;
    description: "Smart contracts, DeFi, and blockchain development",;
    url: "/blockchain-services",;
    category: "Services",;
  },;
  // Solutions;
  {;
    title: "Digital Transformation",;
    description: "Complete digital transformation solutions",;
    url: "/digital-transformation",;
    category: "Solutions",;
  },;
  {;
    title: "Enterprise Solutions",;
    description: "Large-scale enterprise technology solutions",;
    url: "/enterprise-solutions",;
    category: "Solutions",;
  },;
  {;
    title: "Startup Solutions",;
    description: "Technology solutions for startups and SMBs",;
    url: "/startup-solutions",;
    category: "Solutions",;
  },;
  // Industries;
  {;
    title: "Healthcare",;
    description: "Technology solutions for healthcare industry",;
    url: "/industries/healthcare",;
    category: "Industries",;
  },;
  {;
    title: "Finance",;
    description: "Financial technology and fintech solutions",;
    url: "/industries/finance",;
    category: "Industries",;
  },;
  {;
    title: "Education",;
    description: "Educational technology and e-learning solutions",;
    url: "/industries/education",;
    category: "Industries",;
  },;
  {;
    title: "Manufacturing",;
    description: "Industrial IoT and manufacturing automation",;
    url: "/industries/manufacturing",;
    category: "Industries",;
  },;
  // Company;
  {;
    title: "About Us",;
    description: "Learn about Zion Tech Group and our mission",;
    url: "/about",;
    category: "Company",;
  },;
  {;
    title: "Contact",;
    description: "Get in touch with our team",;
    url: "/contact",;
    category: "Company",;
  },;
  {;
    title: "Careers",;
    description: "Join our team and build the future",;
    url: "/careers",;
    category: "Company",;
  },;
  {;
    title: "Blog",;
    description: "Latest insights and technology trends",;
    url: "/blog",;
    category: "Company",;
  },;
  {;
    title: "Pricing",;
    description: "Transparent pricing for all our services",;
    url: "/pricing",;
    category: "Company",;
  },;
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {;=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {;
    if (isOpen && inputRef && inputRef.current) {;
      inputRef && inputRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: React && React.KeyboardEvent) => {;
    if (e && e.key === "Escape") {;

                <div>;
                  <div className="text-sm text-gray-500 mb-3">;
                    Popular Searches;
                  </div>;
                  <div className="grid grid-cols-2 gap-2">;
                    {[;
                      "AI Services",;
                      "Cloud Solutions",;
                      "Cybersecurity",;
                      "Digital Transformation",;
                    ].map((term) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="text-left p-2 hover:bg-gray-50 rounded text-sm text-gray-700";
                      >;
                        {term}
                      </button>;
                    ))}
                  </div>;
                </div>;
              </div>;
            )}
          </div>;
        </div>;
      </div>;
    </div>;
  );
                      on_click={() => handleResultClick (result)}
                    >;
                      <div className="flex items - start justify - between">;
                        <div className="flex - 1">;
                          <h3 className="font - medium text - gray - 900">;
                            {result.title}
                          </h3>;
                          <p className="text - sm text - gray - 600 mt - 1">;
                            {result.description}
                          </p>;
                          <span className="inline - block mt - 2 text - xs text - blue - 600 bg - blue - 100 px - 2 py - 1 rounded">;
                            {result.category}
                          </span>;
                        </div>;
                        <ArrowRight className="w - 4 h - 4 text - gray - 400 mt - 1" />;
                      </div>;
                    </div>))}
                </div>) : (
                <div className="p - 8 text - center text - gray - 500">;
                  <Search className="w - 12 h - 12 mx - auto mb - 4 text - gray - 300" />;
                  <p > No results found for "{query}"</p>;
                  <p className="text - sm mt - 2">;
                    Try different keywords or check our services page;
                  </p>;
                </div>)) : (
              <div className="p - 4">;
                {recent_searches.length > 0 && (
                  <div className="mb - 6">;
                    <div className="flex items - center text - sm text - gray - 500 mb - 3">;
                      <Clock className="w - 4 h - 4 mr - 2" />;
                      Recent Searches;
                    </div>;
                    <div className="space - y-2">;
                      {recent_searches.map ((search, index) => (
                        <button;
                          key={index}
                          on_click={() => handleRecentClick (search)}
                          className="w - full text - left p - 2 hover:bg - gray - 50 rounded text - sm text - gray - 700";
                        >;
                          {search}
                        </button>))}
                    </div>;
                  </div>)}
                <div>;
                  <div className="text - sm text - gray - 500 mb - 3">;
                    Popular Searches;
                  </div>;
                  <div className="grid grid - cols - 2 gap - 2">;
                    {[;
                      "AI Services",
                      "Cloud Solutions",
                      "Cybersecurity",
                      "Digital Transformation",
                    ].map ((term) => (
                      <button;
                        key={term}
                        on_click={() => set_query (term)}
                        className="text - left p - 2 hover:bg - gray - 50 rounded text - sm text - gray - 700";
                      >;
                        {term}
                      </button>))}
                  </div>;
                </div>;
              </div>)}
          </div>;
        </div>;
      </div>;
    </div>);
}