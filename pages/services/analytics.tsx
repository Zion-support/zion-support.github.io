
import Head from 'next/head';
import { motion } from 'framer-motion';

import {

import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  BarChart3, Database, Zap, Shield, Rocket, Cpu,
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',

export default function AnalyticsServicesPage() {
  const services = [
    {
      title: "Big Data Processing",
      description: "Scalable data processing and analytics platforms",
      features: ["Data Pipeline Engineering", "Real-time Processing", "Batch Processing", "Data Quality"],
      price: "From $8,000",
      icon: Database,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Business Intelligence",
      description: "Interactive dashboards and reporting solutions",
      features: ["Custom Dashboards", "KPI Tracking", "Data Visualization", "Automated Reports"],
      price: "From $5,000",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered predictive modeling and forecasting",
      features: ["Machine Learning Models", "Forecasting", "Risk Assessment", "Trend Analysis"],
      price: "From $12,000",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Strategy & Governance",
      description: "Comprehensive data strategy and governance frameworks",
      features: ["Data Architecture", "Governance Policies", "Compliance", "Data Quality"],
      price: "From $10,000",
      icon: Shield,

  const stats = [
    { number: "1M+", label: "Data Points Processed", icon: Database },
    { number: "95%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "Real-time Analytics", icon: Clock },
    { number: "300%", label: "ROI Improvement", icon: TrendingUp   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Data Analytics Services - Zion Tech Group</title>

          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              Data Analytics
            </h1>

            </p>
          </motion.div>
          <motion.div
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
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From big data processing to predictive analytics, we help businesses harness the power
              of their data to make informed decisions and gain competitive advantages.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Data Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>

          >
            <h2 className="text-4xl font-bold text-white mb-6">Data Analytics Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive analytics solutions designed to unlock the value of your data
            </p>
          </motion.div>

              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </motion.div>

          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our data analytics solutions can transform your business insights and drive data-driven decision making.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Data Assessment
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                View Demos
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </div>

}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0.8
}viewport= {
  {
  once: true
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Unlock Your Data's Potential? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our data analytics solutions can transform your business insights and drive data-driven decision making. </p> Data Assessment </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > View Demos </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)

  )
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Unlock Your Data's Potential?;
            </h2>;
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">;
              Let's discuss how our data analytics solutions can transform your business insights and drive data-driven decision making.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">;
                Data Assessment;
              </button>;
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">;
                View Demos;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

