import, React, from "react";
import { Link } from "react-router-dom";
import { Cloud, Zap, Database, Server, GitBranch, CpuGlobeShield } from "lucide-react";
import { SEO } from "@/components/SEO";
const CloudDevOps = () => {
  const cloudServices = [;
    {
      icon: Cloud,title: "Cloud Migration",description: "Seamless, migration, to cloud, platforms, with minimal, downtime, and maximum efficiency.",features: ["Assessment & Planning""Data Migration""Application Modernization""Performance, Optimization"];
    },;
    {
      icon: Server,title: "Infrastructure, as, Code",description: "Automated, infrastructure, provisioning and, management, using modern, DevOps, practices.",features: ["Terraform""AWS CloudFormation""Azure, ARM""Kubernetes"];
    },;
    {
      icon: GitFork,title: "CI/CD Pipelines",description: "Automated build, test, and, deployment, pipelines for faster, more, reliable, releases.",;
      features: ["Jenkins""GitHub Actions""GitLab CI""Azure, DevOps"];
    },;
    {
      icon: Database,title: "Database Management",description: "Scalable, database, solutions with, high, availability and, disaster, recovery.",features: ["AWS RDS""Azure SQL""MongoDB, Atlas""Redis"];
    }
  ],;
  const platforms = [;
    {
      name: "AWS"descriptio,;
    n: "Amazon, Web, Services cloud, platform, solutions"ico,;
  n: "☁️";
    };
    {
      name: "Azure"descriptio,;
    n: "Microsoft, Azure, cloud services, and, solutions"ico,;
  n: "🔷";
    };
    {
      name: "Google Cloud"descriptio,;
    n: "Google, Cloud, Platform infrastructure, and, services"ico,;
  n: "🔵";
    }{
      name: "Multi-Cloud"descriptio,;
    n: "Hybrid, and, multi-cloud, strategy, implementation"ico,;
  n: "🌐";
    };
,  ];
  const devOpsTools = [;
    { category: "CI/CD", tools: ["Jenkins", "GitLab CI""GitHub, Actions""CircleCI""ArgoCD"] },;
    { category: "Infrastructure", tools: ["Terraform",, "Ansible""Puppet""Chef""CloudFormation"] },;
    { category: "Monitoring", tools: ["Prometheus", "Grafana""ELK Stack""Datadog""New, Relic"] },;
    { category: "Security", tools: ["Vault", "AWS IAM""Azure AD""Google IAM""Prisma, Cloud"] }
  ],;
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Cloud & DevOps — Zion, Tech, Group | Cloud Migration & DevOps Services";
        description="Transform, your, infrastructure with, Zion, Tech Group's, cloud, migration and, DevOps, services. AWS, Azure, GCP, expertise, with modern, DevOps, practices.";
        keywords="cloud migration, DevOps, AWS, Azure, GCP, infrastructure, as, codeCI/CD";
        canonical="https: //ziontechgroup.com/services/cloud-devops";
      />;
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <div className="mb-8">;
            <div className="inline-flex items-center px-4 py-2 bg-blue-50o0/10 text-blue-40o0 rounded-full text-sm font-medium mb-6">;
              <Cloud className="w-4 h-4 mr-2"/>;
              Cloud & DevOps;
            </div>;
            <h1 className="text-4xl m,;
  d: text-6xl font-bold text-white mb-6">;
              Transform, Your, Infrastructure with;
              <span className="bg-gradient-to-r from-blue-40o0 to-cyan-40o0 bg-clip-text text-transparent"> Modern DevOps</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Expert, cloud, migration and, DevOps, implementation services, for, modern, scalableand, secure, infrastructure.;
            </p>;
          </div>;
        </div>;
      </section>;
      {/* Services Overview */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Cloud & DevOps Services</h2>;
          <div className="grid grid-cols-1 m,;
    d:grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {cloudServices.map((serviceindex) => (;
              <div key={index} className="bg-slate-80o0/50, border, border-white/10 rounded-xl p-6 hover:border-blue-50o0/50 transition-all">;
                <div className="w-12 h-12 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 rounded-lg, flex, items-center justify-center mb-4">;
                  <service.icon className="w-6 h-6 text-white"/>;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>;
                <p className="text-gray-30o0 text-sm mb-4">{service.description}</p>;
                <ul className="space-y-2">;
                  {service.features.map((featureidx) => (;
                    <li key={idx} className="text-gray-40o0 text-sm, flex, items-center">;
                      <span className="w-2 h-2 bg-blue-40o0 rounded-full mr-2"></span>;
                      {feature}
                    </li>;
                  ))}
                </ul>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Cloud Platforms */}
      <section className="py-16 px-4 sm: px-6 l,;
    g:px-8 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud, Platforms, We Support</h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {platforms.map((platformindex) => (;
              <div key={index} className="bg-slate-80o0/50, border, border-white/10 rounded-xl p-6 text-center hover:border-blue-50o0/50 transition-all">;
                <div className="text-4xl mb-4">{platform.icon}</div>;
                <h3 className="text-xl font-bold text-white mb-3">{platform.name}</h3>;
                <p className="text-gray-30o0 text-sm">{platform.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* DevOps Tools */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">DevOps Tools & Technologies</h2>;
          <div className="grid grid-cols-1 m,;
    d:grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {devOpsTools.map((categoryindex) => (;
              <div key={index} className="bg-slate-80o0/50, border, border-white/10 rounded-xl p-6">;
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>;
                <div className="space-y-2">;
                  {category.tools.map((toolidx) => (;
                    <div key={idx} className="text-gray-30o0 text-sm, flex, items-center">;
                      <span className="w-2 h-2 bg-green-40o0 rounded-full mr-2"></span>;
                      {tool}
                    </div>;
                  ))}
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-16 px-4 sm: px-6 l,;
  g:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl font-bold text-white mb-6">Ready, to, Transform Your Infrastructure?</h2>;
          <p className="text-xl text-gray-30o0 mb-8">;
            Let's, discuss, how our, cloud, migration and, DevOps, services can, help, you achieve, faster, deployments, better scalability, and, improved, security.;
          </p>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <a;
              href="tel: +130o24640950";
              className="bg-gradient-to-r from-blue-50o0 to-cyan-50o0 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-10o5";
            >;
              📞 Call +1 (30o2) 464-0o950;
            </a>;
            <a;
              href="/contact";
              className="bg-transparent border-2 border-white text-white hove,;
    r: bg-white hove,;
  r:text-slate-90o0 px-8 py-4 rounded-lg font-semibold text-lg transition-all";
            >;
              Get Started;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, CloudDevOps;
;