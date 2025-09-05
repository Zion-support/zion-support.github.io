import React from 'react';
} from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    id: 1,
  },
  {
    id: 2,
    title: "Cloud Migration for Financial Services",
    client: "Regional Bank",
    industry: "Financial Services",
    challenge: "Legacy systems limiting scalability and innovation",
    solution: "Complete cloud migration with microservices architecture",
    results: [
      "99.9% uptime achieved",
      "50% faster application deployment",
      "30% reduction in infrastructure costs",
      "Enhanced security compliance"
    ],
    duration: "6 months",
    team: "12 experts",
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"],
    image: "/images/case-studies/cloud-migration.jpg"  },
  {
    id: 3,
    title: "Financial Services Automation",
    client: "FinTech Global",
    industry: "Finance",
    challenge: "Manual processes causing delays and errors",
    solution: "Built comprehensive automation platform with AI integration",
    results: [
      "70% reduction in processing time",
      "90% decrease in manual errors",
      "60% cost savings",
      "100% compliance achievement"
    ],
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = React.useState("All Industries");

  const filteredCaseStudies = selectedIndustry === "All Industries" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#case-studies"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  View Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

                >
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
          </div>
        </section>

        {/* CTA Section */}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
}