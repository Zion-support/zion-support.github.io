import type { NextPage } from 'next',
import Head from 'next/head',
import UltraAdvancedFuturisticBackground from '../../components/ui/UltraAdvancedFuturisticBackground',
import Card from '../../components/ui/Card';
import Link from 'next/link';
import { enhancedRealMicroSaasServices  } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices  } from '../../data/additional-real-services';
import { extraServices  } from '../../data/extra-services';
import { newlyAddedServices  } from '../../data/newly-added-services';
import { curatedMarketServices  } from '../../data/curated-market-services';
import { realMarketServices  } from '../../data/real-market-services';
import { new2025Services  } from '../../data/new-2025-services';
import { marketValidatedServices  } from '../../data/market-validated-services';
import { moreRealServices2025  } from '../../data/more-real-services-2025';
import { realOperationalServices  } from '../../data/real-operational-services';
import { verified2025Additions  } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
import { realEnterpriseServices2025  } from '../../data/real-enterprise-services-2025';
import { realMarketAugmentations2025  } from '../../data/real-market-augmentations-2025';
import { verifiedRealServices2025Batch2  } from '../../data/verified-real-services-2025-batch2';
import { additionalLiveServices2025  } from '../../data/additional-live-services-2025';
import { real2025Q2Additions  } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3  } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025  } from '../../data/real-services-q2-2025';
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realServicesQ42025 } from '../../data/real-services-q4-2025';
// Define a common service interface
interface Service {
  id?: string;
  name: string;
  description?: string;
  price?: string;
  category?: string;
  popular?: boolean;
  launchDate?: string;
  [key: string]: unknown, // Allow additional properties
}
// Define a unified service interface
interface Service {
origin/cursor/automate-test-improve-and-merge-code-2533
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  popular?: boolean;
  icon?: string;
  link?: string
}
// Sample services for now
const sampleServices: Service[] = [
  {
    id: 'ai-services';
    name: 'AI & Machine Learning';
    tagline: 'Advanced AI solutions for enterprise';
    description: 'Comprehensive AI and machine learning services including model development, deployment, and optimization.',
    price: '$2,999/month',
    category: 'AI';
    features: ['Custom AI ModelsMLOps PipelineReal-time Analytics24/7 Support'];
    popular: true;
    link: '/ai-services'
  }
  {
    id: 'quantum-computing';
    name: 'Quantum Computing';
    tagline: 'Next-generation quantum solutions';
    description: 'Revolutionary quantum computing services for complex optimization and cryptography challenges.';
    price: '$9,999/month',
    category: 'Quantum';
    features: ['Quantum AlgorithmsCryptographyOptimizationResearch Support'];
    link: '/quantum-computing'
  }
  {
    id: 'cybersecurity';
    name: 'Cybersecurity';
    tagline: 'Enterprise security solutions';
    description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.';
    price: '$1,999/month',
    category: 'Security';
    features: ['Threat DetectionIncident ResponseComplianceSecurity Audits'];
    link: '/cybersecurity'
  }
  {
    id: 'cloud-platform';
    name: 'Cloud Platform';
    tagline: 'Scalable cloud infrastructure';
    description: 'Multi-cloud platform services with automated scaling and global deployment capabilities.';
    price: '$1,499/month',
    category: 'Cloud';
    features: ['Multi-CloudAuto-scalingGlobal CDNDevOps Tools'];
    link: '/cloud-platform'
  }
  {
    id: 'space-technology';
    name: 'Space Technology';
    tagline: 'Innovative space solutions';
    description: 'Cutting-edge space technology services for satellite operations and space missions.';
    price: '$24,999/month',
    category: 'Space';
    features: ['Satellite OperationsMission ControlData AnalyticsGround Systems'];
    link: '/space-tech'
  }
]
export default function ServicesIndexPage() {
  const all = null;
                return (
                  <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <span className="text-3xl">
                        {category === 'AI & Data' && '🧠'}
                        {category === 'Developer Tools' && '⚙️'}
                        {category === 'Cloud & FinOps' && '☁️'}
                        {category === 'Observability' && '📊'}
                        {category === 'Quality & Monitoring' && '🔍'}
                        {category === 'Quantum Computing' && '⚛️'}
                        {category === 'Space Technology' && '🚀'}
                        {category === 'Metaverse' && '🌐'}
                        {category === 'Cybersecurity' && '🛡️'}
                        {category === 'Supply Chain' && '📦'}
                        {category === 'Financial Services' && '💰'}
                        {category === 'Healthcare' && '🏥'}
                        {category === 'Manufacturing' && '🏭'}
                        {category === 'Retail' && '🛍️'}
                        {category === 'Education' && '🎓'}
                        {category === 'Government' && '🏛️'}
                        {category === 'Energy' && '⚡'}
                        {category === 'Transportation' && '🚗'}
                      </span>
                      {category}
origin/cursor/automate-test-improve-and-merge-code-2533
                      <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {categoryServices.length} services
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryServices.slice(0, 6).map((service: Service, index: number) => (
                        <UltraFuturisticServiceCard2026


                          key={`${service.id || service.name}-${index}`}

                          service={service}
                          key={`${service.id || service.name}-${index}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          service={service  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          variant="default"
                        />
                      ))}
                    </div>
                    {categoryServices.length > 6 && (
                      <div className="text-center mt-6">
                        <Link
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                        >
                          View All {category} Services ({categoryServices.length})
                        </Link>
                      </div>




                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold">{service.name.charAt(0)}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                      {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-4">
                      {service.tagline  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>))}
                    </div>;
                    <div className="flex items - center justify - between">;
                      <div className="text - 2xl font - bold text - white">;

                        {service.price}
                      </div>;
                          {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {service.price  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>;
                      {service.link && (;
                        <a;
                          href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                        >
                          Learn More
                        </Link>
                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                  </div>;
                </motion.div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              </div>
        {/* Call to Action */}
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* Call to Action */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss how our services can transform your business.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Sales
                </a>
                <a
                  href="/get-started"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
        <section className="py-20 px-4">;
          <div className="container mx-auto max-w-4xl text-center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >;
              <h2 className="text - 4xl font - bold text - white mb - 6">Ready to Get Started?</h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Contact us today to discuss how our services can transform your business.;
              </p>;
              <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold rounded - full hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300 transform hover:scale - 105";
                >;
                  Contact Sales;
                </a>;
                <a;
                  href="/get - started";
                  className="px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 hover:text - black transition - all duration - 300";
                >;
                  Get Started;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
}





      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}
      />
    </div>
  )
origin/cursor/automate-test-improve-and-merge-code-2533
}
