
// Import our new innovative services;
import { innovativeMicroSaasExpansionV32025 } from '../data/2025-innovative-micro-saas-expansion-v3',;
import { innovativeITServicesExpansion2025V3 } from '../data/2025-innovative-it-services-expansion-v3',;
import { innovativeAIServicesExpansion2025V3 } from '../data/2025-innovative-ai-services-expansion-v3',;
const Innovative2025ServicesShowcase: React.FC = () => {
  const [selected_category, setSelectedCategory] = useState ('all'),
  const [search_term, setSearchTerm] = useState (''),
  // Combine all innovative services;
  const allInnovativeServices = [;
    ...innovativeMicroSaasExpansionV32025,
    ...innovativeITServicesExpansion2025V3,
  ],
  const categories = [;
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from - purple - 500 to - pink - 500', count: allInnovativeServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from - cyan - 500 to - blue - 500', count: allInnovativeServices.filter (string => s.category.includes ('AI') || s.category.includes ('Machine Learning')).length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from - yellow - 500 to - orange - 500', count: allInnovativeServices.filter (string => s.category.includes ('IT') || s.category.includes ('Infrastructure')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from - red - 500 to - orange - 500', count: allInnovativeServices.filter (string => s.category.includes ('Security')).length },
    { id: 'cloud', name: 'Cloud & FinOps', icon: Database, color: 'from - blue - 500 to - indigo - 500', count: allInnovativeServices.filter (string => s.category.includes ('Cloud') || s.category.includes ('FinOps')).length },
    { id: 'developer', name: 'Developer Tools', icon: Code, color: 'from - green - 500 to - teal - 500', count: allInnovativeServices.filter (string => s.category.includes ('Developer')).length }
  ],
  const filtered_services = allInnovativeServices.filter (service => {
    const matches_category = selected_category === 'all' ||;
      service.category.toLowerCase ().includes (selected_category) ||;
      (selected_category === 'ai' && (service.category.includes ('AI') || service.category.includes ('Machine Learning'))) ||;
      (selected_category === 'it' && (service.category.includes ('IT') || service.category.includes ('Infrastructure'))) ||;
      (selected_category === 'cybersecurity' && service.category.includes ('Security')) ||;
      (selected_category === 'cloud' && (service.category.includes ('Cloud') || service.category.includes ('FinOps'))) ||;
      (selected_category === 'developer' && service.category.includes ('Developer')),
    const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      (service as any).tagline?.toLowerCase ().includes (search_term.toLowerCase ()),
    return matches_category && matches_search;
  }),
  const stats = [;
    { number: "15+", label: "Innovative Services", icon: Star },
    { number: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "24 / 7", label: "AI Support Available", icon: Brain },
    { number: "200+", label: "Countries Served", icon: Globe }
  ],


  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1

                }}
              />))}
          </div>;
        </div>;
        {/* Content */}
        <div className="relative z - 10">;
          {/* Header */}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovative 2025
            </span>
            <br />
            <span className="text-white">Services Showcase</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"



            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



          >
            Experience the future of technology with our revolutionary AI platforms, quantum computing solutions,
            autonomous systems, and innovative micro SAAS services that are transforming industries worldwide.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}            transition={{ duration: 0.8, delay: 0.4 }}
          >;
            <div className="max - w-7xl mx - auto">;
              {/* Search Bar */}

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8, delay: 0.4 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <div className="max-w-7xl mx-auto">
              {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}                    value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSearchTerm(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              <div className="mb - 8">;
                <div className="relative max - w-2xl mx - auto">;
                  <input;
                    type="text";
                    placeholder="Search innovative services...";
                    value={search_term}
                    on_change={(e) => setSearchTerm (e.target.value)}
                    className="w - full px - 6 py - 4 bg - gray - 900 / 50 border border - gray - 700 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent";
                  />;
                  <Search className="absolute right - 4 top - 1/2 transform -translate - y-1 / 2 w - 6 h - 6 text - gray - 400" />;
                </div>;
              </div>;
              {/* Category Filters */}              {/* Category Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onClick={() => setSelectedCategory(category.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all duration-300 ${;
                      selectedCategory === category.id;
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300';
                        : 'border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white';
                    }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                        {/* Service Stats */}
                        <div className="grid grid - cols - 3 gap - 4 mb - 6 text - center">;
                          <div>;
                            <div className="text - lg font - bold text - white">{(service as any).customers || '1000'}+</div>;
                            <div className="text - xs text - gray - 400">Customers</div>;
                          </div>;
                          <div>;
                            <div className="text - lg font - bold text - white">{(service as any).rating || '4.8'}</div>;
                            <div className="text - xs text - gray - 400">Rating</div>;
                          </div>;
                          <div>;
                            <div className="text - lg font - bold text - white">{(service as any).reviews || '500'}</div>;
                            <div className="text - xs text - gray - 400">Reviews</div>;
                          </div>;
                        </div>;
                        {/* CTA Button */}
                        <Link;
                          href={`/services/${service.id}`}





                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                          <div>
                            <div className="text-lg font-bold text-white">{(service as any).customers || '1000'}+</div>
                            <div className="text-xs text-gray-400">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{(service as any).rating || '4.8'}</div>
                            <div className="text-xs text-gray-400">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{(service as any).reviews || '500'}</div>
                            <div className="text-xs text-gray-400">Reviews</div>
                          </div>
                        </div>



                      {/* Hover Overlay */}                      {/* Hover Overlay */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





