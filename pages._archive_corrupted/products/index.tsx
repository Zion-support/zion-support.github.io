<<<<<<< HEAD


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
const \"Products\": NextPage = () => {
import Head from 'next/head.ts';
const \"Products\": NextPage = () => {;
import Head from 'next/head ;
import Link from 'next/link';
export default function ProductsIndex() {
  return (
    <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Helmet>
        <title>Products — Zion</title>
        <meta name="description" content="A showcase of ready-to-run automation suites."  />
      </Helmet>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float"  />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow"  />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast"  />
        <div className="absolute inset-0 opacity-[0.08] ["background": radia l-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-["size": 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid"  />
        <div className="absolute inset-0 [mask-"image": radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0"  /></div>
        <div className="absolute inset-0 beams opacity-[0.06]"  />
      </div>
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
          </div>
          <div className="hidden gap-6 "md": flex text-white/80">
            <Link href="/"><a>Home</a></Link>
            <Link href="/automation"><a>Automations</a></Link>
            <Link href="/services"><a>Services</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
          </div>
        </nav>
      </header>
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"  />
            Automation suites — ready to deploy
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight "md": tex t-6xl"><span className="gradient-text">Products</span></h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3">
            {[{ title: 'SEO Guard', "desc": 'Continuous audits + on-page fixes' },
              { "title": 'Perf Shield', "desc": 'CWV budgets + asset optimization' },
              { "title": 'Link Sentinel', "desc": 'Prevents broken links in prod' },
              { "title": 'Content Curator', "desc": 'Keeps the homepage fresh' },
              { "title": 'Design Refiner', "desc": 'Iterates layouts with guardrails' },
              { "title": 'Security Scanner', "desc": 'Finds and patches risky deps' },
            ].map((p)  => (
              <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover": borde r-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100"  />
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold">See them in action</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 "hover": b g-white">Open Automation Hub</a></Link>
              <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link>
            </div>;
          </div>;
        </section>;
      </main>;
    </div>;
<<<<<<< HEAD

  ),;

}



  );
}

origin/cursor/integrate-build-improve-and-re-verify-c7b5
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';


=======
  );
<<<<<<< HEAD
}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, Star, Download, Eye, Code, Database, Shield, Zap, CheckCircle } from 'lucide-react';
const "Products": NextPage = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
  const products = [{
      title: \'ZionAI Platform\',
      \"description\": \'Enterprise-grade AI platform for building, deploying, and managing machine learning models at scale.\',
      \"category\": \'AI & Machine Learning\',
      \"features\": [
        \'Model Training & Deployment\',
        \'AutoML Capabilities\',
        \'Real-time Inference\',
        \'Model Monitoring\',
        \'A/B Testing\',
        \'API Integration\'
      ],
      \"pricing\": \'Starting at $999/month\',
      \"rating\": 4.8,
      \"reviews\": 156,
      \"icon\": Code,
      \"color\": \'from-purple-500 to-pink-500\',
      \"href\": \'/products/zion-ai-platform\'
    },
    {
      \"title\": \'CloudSync Pro\',
      \"description\": \'Advanced cloud migration and management platform for seamless infrastructure transitions.\',
      \"category\": \'Cloud Solutions\',
      \"features\": [\'Multi-cloud Management\',
        \'Automated Migration\',
        \'Cost Optimization\',
        \'Security Compliance\',
        \'Performance Monitoring\',
        \'Disaster Recovery\'
      ],
      \"pricing\": \'Starting at $499/month\',
      \"rating\": 4.7,
      \"reviews\": 89,
      \"icon\": Database,
      \"color\": \'from-blue-500 to-cyan-500\',
      \"href\": \'/products/cloudsync-pro\'
    },
    {
      \"title\": \'SecureShield\',
      \"description\": \'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.\',
      \"category\": \'Cybersecurity\',
      \"features\": [\'Threat Detection\',
        \'Vulnerability Assessment\',
        \'Incident Response\',
        \'Compliance Management\',
        \'Security Analytics\',
        \'24/7 Monitoring\'
      ],
      \"pricing\": \'Starting at $799/month\',
      \"rating\": 4.9,
      \"reviews\": 203,
      \"icon\": Shield,
      \"color\": \'from-green-500 to-emerald-500\',
      \"href\": \'/products/secureshield\'
    },
    {
      \"title\": \'DataFlow Analytics\',
      \"description\": \'Real-time data analytics and business intelligence platform for actionable insights.\',
      \"category\": \'Data Analytics\',
      \"features\": [\'Real-time Processing\',
        \'Data Visualization\',
        \'Predictive Analytics\',
        \'Custom Dashboards\',
        \'Data Integration\',
        \'Advanced Reporting\'
      ],
      \"pricing\": \'Starting at $599/month\',
      \"rating\": 4.6,
      \"reviews\": 127,
      \"icon\": Zap,
      \"color\": \'from-orange-500 to-red-500\',
      \"href\": \'/products/dataflow-analytics\'
    },
    {
      \"title\": \'IoT Connect Hub\',
      \"description\": \'Centralized IoT device management and data collection platform for smart solutions.\',
      \"category\": \'IoT Platforms\',
      \"features\": [\'Device Management\',
        \'Data Collection\',
        \'Real-time Monitoring\',
        \'Alert System\',
        \'Scalable Architecture\',
        \'API Access\'
      ],
      \"pricing\": \'Starting at $399/month\',
      \"rating\": 4.5,
      \"reviews\": 78,
      \"icon\": Eye,
      \"color\": \'from-indigo-500 to-purple-500\',
      \"href\": \'/products/iot-connect-hub\'
    },
    {
      \"title\": \'BlockChain Suite\',
      \"description\": \'Complete blockchain development and management platform for decentralized applications.\',
      \"category\": \'Blockchain\',
      \"features\": [\'Smart Contract Development\',
        \'DApp Framework\',
        \'Token Management\',
        \'Blockchain Analytics\',
        \'Security Auditing\',
        \'Deployment Tools\'
      ],
      \"pricing\": \'Starting at $699/month\',
      \"rating\": 4.4,
      \"reviews\": 92,
      \"icon\": Shield,
      \"color\": \'from-yellow-500 to-orange-500\',
      \"href\": \'/products/blockchain-suite\'
    }
  ];
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
  const categories = [\'All Products\',
    \'AI & Machine Learning\',
    \'Cloud Solutions\',
    \'Cybersecurity\',
    \'Data Analytics\',
    \'IoT Platforms\',
    \'Blockchain\'
  const categories = ['All Products',
    'AI & Machine Learning',
    'Cloud Solutions',
    'Cybersecurity',
    'Data Analytics',
    'IoT Platforms',
    'Blockchain'
<<<<<<< HEAD


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
import {ArrowRight,, Star,, Download,, Eye,, Code,, Database,, Shield,, Zap,, CheckCircle} from 'lucide-react';
const "Products": NextPage = () => {;
  const products = [{;
      title: \'ZionAI Platform\',;
      \"description\": \'Enterprise-grade AI platform for building, deploying, and managing machine learning models at scale.\',;
      \"category\": \'AI & Machine Learning\',;
      \"features\": [;
        \'Model Training & Deployment\',;
        \'AutoML Capabilities\',;
        \'Real-time Inference\',;
        \'Model Monitoring\',;
        \'A/B Testing\',;
        \'API Integration\';
      ],;
      \"pricing\": \'Starting at $999/month\',;
      \"rating\": 4 && 4.8,;
      \"reviews\": 156,;
      \"icon\": Code,;
      \"color\": \'from-purple-500 to-pink-500\',;
      \"href\": \'/products/zion-ai-platform\';
    },;
    {;
      \"title\": \'CloudSync Pro\',;
      \"description\": \'Advanced cloud migration and management platform for seamless infrastructure transitions.\',;
      \"category\": \'Cloud Solutions\',;
      \"features\": [\'Multi-cloud Management\',;
        \'Automated Migration\',;
        \'Cost Optimization\',;
        \'Security Compliance\',;
        \'Performance Monitoring\',;
        \'Disaster Recovery\';
      ],;
      \"pricing\": \'Starting at $499/month\',;
      \"rating\": 4 && 4.7,;
      \"reviews\": 89,;
      \"icon\": Database,;
      \"color\": \'from-blue-500 to-cyan-500\',;
      \"href\": \'/products/cloudsync-pro\';
    },;
    {;
      \"title\": \'SecureShield\',;
      \"description\": \'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.\',;
      \"category\": \'Cybersecurity\',;
      \"features\": [\'Threat Detection\',;
        \'Vulnerability Assessment\',;
        \'Incident Response\',;
        \'Compliance Management\',;
        \'Security Analytics\',;
        \'24/7 Monitoring\';
      ],;
      \"pricing\": \'Starting at $799/month\',;
      \"rating\": 4 && 4.9,;
      \"reviews\": 203,;
      \"icon\": Shield,;
      \"color\": \'from-green-500 to-emerald-500\',;
      \"href\": \'/products/secureshield\';
    },;
    {;
      \"title\": \'DataFlow Analytics\',;
      \"description\": \'Real-time data analytics and business intelligence platform for actionable insights.\',;
      \"category\": \'Data Analytics\',;
      \"features\": [\'Real-time Processing\',;
        \'Data Visualization\',;
        \'Predictive Analytics\',;
        \'Custom Dashboards\',;
        \'Data Integration\',;
        \'Advanced Reporting\';
      ],;
      \"pricing\": \'Starting at $599/month\',;
      \"rating\": 4 && 4.6,;
      \"reviews\": 127,;
      \"icon\": Zap,;
      \"color\": \'from-orange-500 to-red-500\',;
      \"href\": \'/products/dataflow-analytics\';
    },;
    {;
      \"title\": \'IoT Connect Hub\',;
      \"description\": \'Centralized IoT device management and data collection platform for smart solutions.\',;
      \"category\": \'IoT Platforms\',;
      \"features\": [\'Device Management\',;
        \'Data Collection\',;
        \'Real-time Monitoring\',;
        \'Alert System\',;
        \'Scalable Architecture\',;
        \'API Access\';
      ],;
      \"pricing\": \'Starting at $399/month\',;
      \"rating\": 4 && 4.5,;
      \"reviews\": 78,;
      \"icon\": Eye,;
      \"color\": \'from-indigo-500 to-purple-500\',;
      \"href\": \'/products/iot-connect-hub\';
    },;
    {;
      \"title\": \'BlockChain Suite\',;
      \"description\": \'Complete blockchain development and management platform for decentralized applications.\',;
      \"category\": \'Blockchain\',;
      \"features\": [\'Smart Contract Development\',;
        \'DApp Framework\',;
        \'Token Management\',;
        \'Blockchain Analytics\',;
        \'Security Auditing\',;
        \'Deployment Tools\';
      ],;
      \"pricing\": \'Starting at $699/month\',;
      \"rating\": 4 && 4.4,;
      \"reviews\": 92,;
      \"icon\": Shield,;
      \"color\": \'from-yellow-500 to-orange-500\',;
      \"href\": \'/products/blockchain-suite\';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  ];
  const benefits = [{
      \"title\": \'Enterprise Ready\',
      \"description\": \'Built for scale with enterprise-grade security and reliability.\',
      \"icon\": Shield
    },
    {
      \"title\": \'Easy Integration\',
      \"description\": \'Seamless integration with your existing systems and workflows.\',
      \"icon\": Code
    },
    {
      \"title\": \'24/7 Support\',
      \"description\": \'Round-the-clock technical support and maintenance services.\',
      \"icon\": Zap
    },
    {
      \"title\": \'Custom Solutions\',
      \"description\": \'Tailored solutions to meet your specific business requirements.\',
      \"icon\": Database
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
    }
  ];
  const categories = [\'All Products\',;
    \'AI & Machine Learning\',;
    \'Cloud Solutions\',;
    \'Cybersecurity\',;
    \'Data Analytics\',;
    \'IoT Platforms\',;
    \'Blockchain\';
  const categories = ['All Products',;
    'AI & Machine Learning',;
    'Cloud Solutions',;
    'Cybersecurity',;
    'Data Analytics',;
    'IoT Platforms',;
    'Blockchain';
  ];
  const benefits = [{;
      \"title\": \'Enterprise Ready\',;
      \"description\": \'Built for scale with enterprise-grade security and reliability.\',;
      \"icon\": Shield;
    },;
    {;
      \"title\": \'Easy Integration\',;
      \"description\": \'Seamless integration with your existing systems and workflows.\',;
      \"icon\": Code;
    },;
    {;
      \"title\": \'24/7 Support\',;
      \"description\": \'Round-the-clock technical support and maintenance services.\',;
      \"icon\": Zap;
    },;
    {;
      \"title\": \'Custom Solutions\',;
      \"description\": \'Tailored solutions to meet your specific business requirements.\',;
      \"icon\": Database;
    }
  ];
  return (
    <MainLayout
      title=\"Our Products - Zion Tech Group\"
      description=\"Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation.\">;
              <button
                key={category}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  category === \'All Products\'
                    ? \'bg-blue-600 text-white\'
                    : \'bg-white text-gray-700 \"hover\": bg-blue-50\'
                }`}>;
                {category}
              </button>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Products Grid */}
<<<<<<< HEAD

=======
      <section className=\"py-20\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">
              Technology Platforms
            </h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              Comprehensive solutions built with cutting-edge technology to address 
              your most complex business challenges.
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
<<<<<<< HEAD
=======
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
            {products.map((product) => (
              <div
                key={product.title}
                className=\"bg-white rounded-lg shadow-lg overflow-hidden \"hover\": shadow-xl transition-shadow\"
              >
                <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                  <product.icon className=\"h-16 w-16 text-white\" />
                </div>
                <div className=\"p-6\">
                  <div className=\"flex items-center justify-between mb-3\">
                    <span className=\"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium\">
                      {product.category}
                    </span>
                    <div className=\"flex items-center\">
                      <Star className=\"h-4 w-4 text-yellow-400 fill-current\" />
                      <span className=\"ml-1 text-sm text-gray-600\">{product.rating}</span>
                      <span className=\"ml-1 text-sm text-gray-500\">({product.reviews})</span>
                    </div>
                  </div>
<<<<<<< HEAD

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
=======
<<<<<<< HEAD
=======
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                    {product.title}
                  </h3>
                  <p className=\"text-gray-600 mb-4\">
                    {product.description}
                  </p>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                  <div className=\"mb-4\">
                    <p className=\"text-lg font-semibold text-blue-600\">{product.pricing}</p>
                  </div>
                  <ul className=\"space-y-2 mb-6\">
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-blue-600">{product.pricing}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className=\"flex items-center text-sm text-gray-600\">
                        <div className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></div>
=======
      <section className=\"py-20\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"text-center mb-16\">;
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">;
              Technology Platforms;
            </h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
              Comprehensive solutions built with cutting-edge technology to address ;
              your most complex business challenges.;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {products && products.map((product) => (;
              <div
                key={product && product.title}
                className=\"bg-white rounded-lg shadow-lg overflow-hidden \"hover\": shadow-xl transition-shadow\">;
                <div className={`h-32 bg-gradient-to-r ${product && product.color} flex items-center justify-center`}>;
                  <product && product.icon className=\"h-16 w-16 text-white\" />;
                </div>;
                <div className=\"p-6\">;
                  <div className=\"flex items-center justify-between mb-3\">;
                    <span className=\"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium\">;
                      {product && product.category}
                    </span>;
                    <div className=\"flex items-center\">;
                      <Star className=\"h-4 w-4 text-yellow-400 fill-current\" />;
                      <span className=\"ml-1 text-sm text-gray-600\">{product && product.rating}</span>;
                      <span className=\"ml-1 text-sm text-gray-500\">({product && product.reviews})</span>;
                    </div>;
                  </div>;
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">;
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">;
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">;
                    {product && product.title}
                  </h3>;
                  <p className=\"text-gray-600 mb-4\">;
                    {product && product.description}
                  </p>;
                  <div className=\"mb-4\">;
                    <p className=\"text-lg font-semibold text-blue-600\">{product && product.pricing}</p>;
                  </div>;
                  <ul className=\"space-y-2 mb-6\">;
                  <div className="mb-4">;
                    <p className="text-lg font-semibold text-blue-600">{product && product.pricing}</p>;
                  </div>;
                  <ul className="space-y-2 mb-6">;
                    {product && product.features.slice(0, 3).map((feature) => (;
                      <li key={feature} className=\"flex items-center text-sm text-gray-600\">;
                        <div className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/products/index.tsx
                        {feature}
                      </li>;
                    ))}
<<<<<<< HEAD

=======
                  </ul>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                  <div className=\"flex gap-3\">
                  <div className="flex gap-3">
                  <div className=\"flex gap-3\">
                  <div className="flex gap-3">

=======
<<<<<<< HEAD
                  </ul>;
                  <div className=\"flex gap-3\">;
                  <div className="flex gap-3">;
                  <div className=\"flex gap-3\">;
                  <div className="flex gap-3">;
                  <div className=\"flex gap-3\">;
                  <div className="flex gap-3">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/products/index.tsx
=======
<<<<<<< HEAD
=======
                  <div className=\"flex gap-3\">
                  <div className="flex gap-3">
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
                  <div className=\"flex gap-3\">
                  <div className="flex gap-3">
                  <div className=\"flex gap-3\">
                  <div className="flex gap-3">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                    <Link
                      href={product.href}
                      className=\"flex-1 bg-blue-600 \"hover\": bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center\"
                    >
                      <Eye className=\"h-4 w-4 mr-2\" />
                      Learn More
                    </Link>
                    <button className=\"bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center\">
                      <Download className=\"h-4 w-4\" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
<<<<<<< HEAD

=======
      <section className=\"py-20 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">
              Why Choose Our Products?
            </h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              Built with enterprise-grade technology and designed for real-world business needs.
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
<<<<<<< HEAD
=======
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
            {benefits.map((benefit) => (
              <div key={benefit.title} className=\"text-center\">
                <div className=\"bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4\">
                  <benefit.icon className=\"h-8 w-8\" />
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                  {benefit.title}
                </h3>
                <p className=\"text-gray-600\">
                  {benefit.description}
                </p>
              </div>
      <section className=\"py-20 bg-gray-50\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"text-center mb-16\">;
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">;
              Why Choose Our Products?;
            </h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
              Built with enterprise-grade technology and designed for real-world business needs.;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits && benefits.map((benefit) => (;
              <div key={benefit && benefit.title} className=\"text-center\">;
                <div className=\"bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4\">;
                  <benefit && benefit.icon className=\"h-8 w-8\" />;
                </div>;
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">;
                  {benefit && benefit.title}
                </h3>;
                <p className=\"text-gray-600\">;
                  {benefit && benefit.description}
                </p>;
              </div>;
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Comparison */}
<<<<<<< HEAD

=======
      <section className=\"py-20\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">
              Flexible Pricing Plans
            </h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              Choose the plan that best fits your business needs and scale as you grow.
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
=======
<<<<<<< HEAD
=======
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
            {[{
                name: \'Starter\',
                \"price\": \'$299\',
                \"period\": \'/month\',
                \"description\": \'Perfect for small businesses getting started with technology solutions.\',
                \"features\": [
                  \'Basic Features\',
                  \'Email Support\',
                  \'5GB Storage\',
                  \'Standard Security\',
                  \'API Access\',
                  \'Documentation\'
                ]
              },
              {
                \"name\": \'Professional\',
                \"price\": \'$799\',
                \"period\": \'/month\',
                \"description\": \'Ideal for growing businesses with advanced technology needs.\',
                \"features\": [\'All Starter Features\',
                  \'Priority Support\',
                  \'50GB Storage\',
                  \'Advanced Security\',
                  \'Custom Integrations\',
                  \'Training Sessions\'
                ],
                \"popular\": true
              },
              {
                \"name\": \'Enterprise\',
                \"price\": \'Custom\',
                \"period\": \'',
                \"description\": \'Tailored solutions for large enterprises with specific requirements.\',
                \"features\": [\'All Professional Features\',
                  \'24/7 Dedicated Support\',
                  \'Unlimited Storage\',
                  \'Custom Security\',
                  \'White-label Options\',
                  \'On-site Training\'
                ]
=======
      <section className=\"py-20\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"text-center mb-16\">;
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">;
              Flexible Pricing Plans;
            </h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
              Choose the plan that best fits your business needs and scale as you grow.;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {[{;
                name: \'Starter\',;
                \"price\": \'$299\',;
                \"period\": \'/month\',;
                \"description\": \'Perfect for small businesses getting started with technology solutions.\',;
                \"features\": [;
                  \'Basic Features\',;
                  \'Email Support\',;
                  \'5GB Storage\',;
                  \'Standard Security\',;
                  \'API Access\',;
                  \'Documentation\';
                ];
              },;
              {;
                \"name\": \'Professional\',;
                \"price\": \'$799\',;
                \"period\": \'/month\',;
                \"description\": \'Ideal for growing businesses with advanced technology needs.\',;
                \"features\": [\'All Starter Features\',;
                  \'Priority Support\',;
                  \'50GB Storage\',;
                  \'Advanced Security\',;
                  \'Custom Integrations\',;
                  \'Training Sessions\';
                ],;
                \"popular\": true;
              },;
              {;
                \"name\": \'Enterprise\',;
                \"price\": \'Custom\',;
                \"period\": \'',;
                \"description\": \'Tailored solutions for large enterprises with specific requirements.\',;
                \"features\": [\'All Professional Features\',;
                  \'24/7 Dedicated Support\',;
                  \'Unlimited Storage\',;
                  \'Custom Security\',;
                  \'White-label Options\',;
                  \'On-site Training\';
                ];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/products/index.tsx
              }
            ].map((plan) => (;
              <div
                key={plan && plan.name}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan && plan.popular ? \'ring-2 ring-blue-500 relative\' : \''
                }`}>;
                {plan && plan.popular && (;
                  <div className=\"absolute -top-4 left-1/2 transform -translate-x-1/2\">;
                    <span className=\"bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium\">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                <div className=\"text-center mb-8\">
                  <h3 className=\"text-2xl font-bold text-gray-900 mb-2\">{plan.name}</h3>
                  <div className=\"mb-4\">
                    <span className=\"text-4xl font-bold text-gray-900\">{plan.price}</span>
                    <span className=\"text-gray-600\">{plan.period}</span>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className=\"text-gray-600\">{plan.description}</p>
                </div>
                <ul className=\"space-y-3 mb-8\">
                <ul className="space-y-3 mb-8">
                  </div>
                  <p className=\"text-gray-600\">{plan.description}</p>
                </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                  </div>
                  <p className=\"text-gray-600\">{plan.description}</p>
                </div>
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
                <div className=\"text-center mb-8\">
                  <h3 className=\"text-2xl font-bold text-gray-900 mb-2\">{plan.name}</h3>
                  <div className=\"mb-4\">
                    <span className=\"text-4xl font-bold text-gray-900\">{plan.price}</span>
                    <span className=\"text-gray-600\">{plan.period}</span>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className=\"text-gray-600\">{plan.description}</p>
                </div>
                <ul className=\"space-y-3 mb-8\">
                <ul className="space-y-3 mb-8">
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                  {plan.features.map((feature) => (
                    <li key={feature} className=\"flex items-center\">
                      <CheckCircle className=\"h-5 w-5 text-green-500 mr-3\" />
                      <span className=\"text-gray-700\">{feature}</span>
                    </li>
                <div className=\"text-center mb-8\">;
                  <h3 className=\"text-2xl font-bold text-gray-900 mb-2\">{plan && plan.name}</h3>;
                  <div className=\"mb-4\">;
                    <span className=\"text-4xl font-bold text-gray-900\">{plan && plan.price}</span>;
                    <span className=\"text-gray-600\">{plan && plan.period}</span>;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan && plan.name}</h3>;
                  <div className="mb-4">;
                    <span className="text-4xl font-bold text-gray-900">{plan && plan.price}</span>;
                    <span className="text-gray-600">{plan && plan.period}</span>;
                  </div>;
                  <p className=\"text-gray-600\">{plan && plan.description}</p>;
                </div>;
                <ul className=\"space-y-3 mb-8\">;
                <ul className="space-y-3 mb-8">;
                  </div>;
                  <p className=\"text-gray-600\">{plan && plan.description}</p>;
                </div>;
                  </div>;
                  <p className=\"text-gray-600\">{plan && plan.description}</p>;
                </div>;
                <div className=\"text-center mb-8\">;
                  <h3 className=\"text-2xl font-bold text-gray-900 mb-2\">{plan && plan.name}</h3>;
                  <div className=\"mb-4\">;
                    <span className=\"text-4xl font-bold text-gray-900\">{plan && plan.price}</span>;
                    <span className=\"text-gray-600\">{plan && plan.period}</span>;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan && plan.name}</h3>;
                  <div className="mb-4">;
                    <span className="text-4xl font-bold text-gray-900">{plan && plan.price}</span>;
                    <span className="text-gray-600">{plan && plan.period}</span>;
                  </div>;
                  <p className=\"text-gray-600\">{plan && plan.description}</p>;
                </div>;
                <ul className=\"space-y-3 mb-8\">;
                <ul className="space-y-3 mb-8">;
                  {plan && plan.features.map((feature) => (;
                    <li key={feature} className=\"flex items-center\">;
                      <CheckCircle className=\"h-5 w-5 text-green-500 mr-3\" />;
                      <span className=\"text-gray-700\">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <buttonclassName={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan && plan.popular
                    ? \'bg-blue-600 \"hover\": bg-blue-700 text-white\'
                    : \'bg-gray-100 hover:bg-gray-200 text-gray-900\'
                }`}>;
                  Get Started;
                </button>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}      <section className=\"py-20 bg-blue-600 text-white\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg: px-8 text-center\">;
          <h2 className=\"text-4xl font-bold mb-6\">;
            Ready to Transform Your Business?;
          </h2>;
          <p className=\"text-xl mb-8 max-w-3xl mx-auto\">;
            Start your journey with our technology products and see the difference ;
            they can make for your organization.;
          </p>;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">;

            <Link
              href=\"/contact\"
              className=\"bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\">;
              Get Free Demo;
            </Link>;
            <Link
              href=\"/services\"

 import Head from 'next/head.ts'; import Link from 'next/link'; export default function ProductsIndex() { return ( <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white"> <Helmet> <title>Products — Zion</title> <meta name="description" content="A showcase of ready-to-run automation suites." /> </Helmet> <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"> <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" /> <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" /> <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" /> <div className="absolute inset-0 opacity-[0.08] [background: radia l-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size: 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid" /> <div className="absolute inset-0 [mask-image: radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div> <div className="absolute inset-0 beams opacity-[0.06]" /> </div> <header className="relative z-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"> <div className="text-2xl font-bold tracking-wide"> <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span> </div> <div className="hidden gap-6 md: flex text-white/80"> <Link href="/"><a>Home</a></Link> <Link href="/automation"><a>Automations</a></Link> <Link href="/services"><a>Services</a></Link> <Link href="/contact"><a>Contact</a></Link> </div> </nav> </header> <main className="relative z-10"> <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center"> <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"> <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" /> Automation suites — ready to deploy </div> <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md: tex t-6xl"><span className="gradient-text">Products</span></h1> <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p> </section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3"> {[ { title: 'SEO Guard',desc: 'Continuous audits + on-page fixes' },{ title: 'Perf Shield',desc: 'CWV budgets + asset optimization' },{ title: 'Link Sentinel',desc: 'Prevents broken links in prod' },{ title: 'Content Curator',desc: 'Keeps the homepage fresh' },{ title: 'Design Refiner',desc: 'Iterates layouts with guardrails' },{ title: 'Security Scanner',desc: 'Finds and patches risky deps' },].map((p) => ( <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: borde r-cyan-400/30"> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100" /> <h3 className="text-lg font-semibold">{p.title}</h3> <p className="mt-1 text-sm text-white/75">{p.desc}</p> </div> ))} </div> </section> <section className="mx-auto max-w-7xl px-6 pb-24"> <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"> <h3 className="text-2xl font-bold">See them in action</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p> <div className="mt-6 flex flex-wrap justify-center gap-3"> <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover: b g-white">Open Automation Hub</a></Link> <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link> </div>; </div>; </section>; </main>; </div>; )}  import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import Link from 'next/link'; import { ArrowRight,Star,Download,Eye,Code,Database,Shield,Zap,CheckCircle } from 'lucide-react'; const Products: NextPage = () => { const products = [ { title: 'ZionAI Platform',description: 'Enterprise-grade AI platform for building,deploying,and managing machine learning models at scale.',category: 'AI & Machine Learning',features: [ 'Model Training & Deployment','AutoML Capabilities','Real-time Inference','Model Monitoring','A/B Testing','API Integration' ],pricing: 'Starting at $999/month',rating: 4.8,reviews: 156,icon: Code,color: 'from-purple-500 to-pink-500',href: '/products/zion-ai-platform' },{ title: 'CloudSync Pro',description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',category: 'Cloud Solutions',features: [ 'Multi-cloud Management','Automated Migration','Cost Optimization','Security Compliance','Performance Monitoring','Disaster Recovery' ],pricing: 'Starting at $499/month',rating: 4.7,reviews: 89,icon: Database,color: 'from-blue-500 to-cyan-500',href: '/products/cloudsync-pro' },{ title: 'SecureShield',description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',category: 'Cybersecurity',features: [ 'Threat Detection','Vulnerability Assessment','Incident Response','Compliance Management','Security Analytics','24/7 Monitoring' ],pricing: 'Starting at $799/month',rating: 4.9,reviews: 203,icon: Shield,color: 'from-green-500 to-emerald-500',href: '/products/secureshield' },{ title: 'DataFlow Analytics',description: 'Real-time data analytics and business intelligence platform for actionable insights.',category: 'Data Analytics',features: [ 'Real-time Processing','Data Visualization','Predictive Analytics','Custom Dashboards','Data Integration','Advanced Reporting' ],pricing: 'Starting at $599/month',rating: 4.6,reviews: 127,icon: Zap,color: 'from-orange-500 to-red-500',href: '/products/dataflow-analytics' },{ title: 'IoT Connect Hub',description: 'Centralized IoT device management and data collection platform for smart solutions.',category: 'IoT Platforms',features: [ 'Device Management','Data Collection','Real-time Monitoring','Alert System','Scalable Architecture','API Access' ],pricing: 'Starting at $399/month',rating: 4.5,reviews: 78,icon: Eye,color: 'from-indigo-500 to-purple-500',href: '/products/iot-connect-hub' },{ title: 'BlockChain Suite',description: 'Complete blockchain development and management platform for decentralized applications.',category: 'Blockchain',features: [ 'Smart Contract Development','DApp Framework','Token Management','Blockchain Analytics','Security Auditing','Deployment Tools' ],pricing: 'Starting at $699/month',rating: 4.4,reviews: 92,icon: Shield,color: 'from-yellow-500 to-orange-500',href: '/products/blockchain-suite' } ]; const categories = [ 'All Products','AI & Machine Learning','Cloud Solutions','Cybersecurity','Data Analytics','IoT Platforms','Blockchain' ]; const benefits = [ { title: 'Enterprise Ready',description: 'Built for scale with enterprise-grade security and reliability.',icon: Shield },{ title: 'Easy Integration',description: 'Seamless integration with your existing systems and workflows.',icon: Code },{ title: '24/7 Support',description: 'Round-the-clock technical support and maintenance services.',icon: Zap },{ title: 'Custom Solutions',description: 'Tailored solutions to meet your specific business requirements.',icon: Database } ]; return ( <MainLayout title="Our Products - Zion Tech Group" description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation." > {} <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-5xl font-bold mb-6">Our Products</h1> <p className="text-xl max-w-3xl mx-auto"> Innovative technology platforms and solutions designed to transform your business operations and drive digital innovation. </p> </div> </div> </section> {} <section className="py-12 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-4"> {categories.map((category) => ( <button key={category} className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${ category === 'All Products' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50' }`} > {category} </button> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Technology Platforms </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions built with cutting-edge technology to address your most complex business challenges. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {products.map((product) => ( <div key={product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" > <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center`}> <product.icon className="h-16 w-16 text-white" /> </div> <div className="p-6"> <div className="flex items-center justify-between mb-3"> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"> {product.category} </span> <div className="flex items-center"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="ml-1 text-sm text-gray-600">{product.rating}</span> <span className="ml-1 text-sm text-gray-500">({product.reviews})</span> </div> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {product.title} </h3> <p className="text-gray-600 mb-4"> {product.description} </p> <div className="mb-4"> <p className="text-lg font-semibold text-blue-600">{product.pricing}</p> </div> <ul className="space-y-2 mb-6"> {product.features.slice(0,3).map((feature) => ( <li key={feature} className="flex items-center text-sm text-gray-600"> <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> {feature} </li> ))} </ul> <div className="flex gap-3"> <Link href={product.href} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center" > <Eye className="h-4 w-4 mr-2" /> Learn More </Link> <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center"> <Download className="h-4 w-4" /> </button> </div> </div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Products? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Built with enterprise-grade technology and designed for real-world business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits.map((benefit) => ( <div key={benefit.title} className="text-center"> <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <benefit.icon className="h-8 w-8" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Flexible Pricing Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that best fits your business needs and scale as you grow. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[ { name: 'Starter',price: '$299',period: '/month',description: 'Perfect for small businesses getting started with technology solutions.',features: [ 'Basic Features','Email Support','5GB Storage','Standard Security','API Access','Documentation' ] },{ name: 'Professional',price: '$799',period: '/month',description: 'Ideal for growing businesses with advanced technology needs.',features: [ 'All Starter Features','Priority Support','50GB Storage','Advanced Security','Custom Integrations','Training Sessions' ],popular: true },{ name: 'Enterprise',price: 'Custom',period: '',description: 'Tailored solutions for large enterprises with specific requirements.',features: [ 'All Professional Features','24/7 Dedicated Support','Unlimited Storage','Custom Security','White-label Options','On-site Training' ] } ].map((plan) => ( <div key={plan.name} className={`bg-white rounded-lg shadow-lg p-8 ${ plan.popular ? 'ring-2 ring-blue-500 relative' : '' }`} > {plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900">{plan.price}</span> <span className="text-gray-600">{plan.period}</span> </div> <p className="text-gray-600">{plan.description}</p> </div> <ul className="space-y-3 mb-8"> {plan.features.map((feature) => ( <li key={feature} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${ plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900' }`}> Get Started </button> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-3xl mx-auto"> Start your journey with our technology products and see the difference they can make for your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > Get Free Demo </Link> <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > View All Services </Link> </div> </div> </section> </MainLayout> )}; export default Products;
 import Head from 'next/head.ts'; import Link from 'next/link'; export default function ProductsIndex() { return ( <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white"> <Helmet> <title>Products — Zion</title> <meta name="description" content="A showcase of ready-to-run automation suites." /> </Helmet> <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"> <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" /> <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" /> <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" /> <div className="absolute inset-0 opacity-[0.08] [background: radia l-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size: 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid" /> <div className="absolute inset-0 [mask-image: radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div> <div className="absolute inset-0 beams opacity-[0.06]" /> </div> <header className="relative z-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"> <div className="text-2xl font-bold tracking-wide"> <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span> </div> <div className="hidden gap-6 md: flex text-white/80"> <Link href="/"><a>Home</a></Link> <Link href="/automation"><a>Automations</a></Link> <Link href="/services"><a>Services</a></Link> <Link href="/contact"><a>Contact</a></Link> </div> </nav> </header> <main className="relative z-10"> <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center"> <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"> <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" /> Automation suites — ready to deploy </div> <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md: tex t-6xl"><span className="gradient-text">Products</span></h1> <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p> </section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3"> {[ { title: 'SEO Guard',desc: 'Continuous audits + on-page fixes' },{ title: 'Perf Shield',desc: 'CWV budgets + asset optimization' },{ title: 'Link Sentinel',desc: 'Prevents broken links in prod' },{ title: 'Content Curator',desc: 'Keeps the homepage fresh' },{ title: 'Design Refiner',desc: 'Iterates layouts with guardrails' },{ title: 'Security Scanner',desc: 'Finds and patches risky deps' },].map((p) => ( <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: borde r-cyan-400/30"> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100" /> <h3 className="text-lg font-semibold">{p.title}</h3> <p className="mt-1 text-sm text-white/75">{p.desc}</p> </div> ))} </div> </section> <section className="mx-auto max-w-7xl px-6 pb-24"> <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"> <h3 className="text-2xl font-bold">See them in action</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p> <div className="mt-6 flex flex-wrap justify-center gap-3"> <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover: b g-white">Open Automation Hub</a></Link> <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link> </div>; </div>; </section>; </main>; </div>; )}  import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import Link from 'next/link'; import { ArrowRight,Star,Download,Eye,Code,Database,Shield,Zap,CheckCircle } from 'lucide-react'; const Products: NextPage = () => { const products = [ { title: 'ZionAI Platform',description: 'Enterprise-grade AI platform for building,deploying,and managing machine learning models at scale.',category: 'AI & Machine Learning',features: [ 'Model Training & Deployment','AutoML Capabilities','Real-time Inference','Model Monitoring','A/B Testing','API Integration' ],pricing: 'Starting at $999/month',rating: 4.8,reviews: 156,icon: Code,color: 'from-purple-500 to-pink-500',href: '/products/zion-ai-platform' },{ title: 'CloudSync Pro',description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',category: 'Cloud Solutions',features: [ 'Multi-cloud Management','Automated Migration','Cost Optimization','Security Compliance','Performance Monitoring','Disaster Recovery' ],pricing: 'Starting at $499/month',rating: 4.7,reviews: 89,icon: Database,color: 'from-blue-500 to-cyan-500',href: '/products/cloudsync-pro' },{ title: 'SecureShield',description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',category: 'Cybersecurity',features: [ 'Threat Detection','Vulnerability Assessment','Incident Response','Compliance Management','Security Analytics','24/7 Monitoring' ],pricing: 'Starting at $799/month',rating: 4.9,reviews: 203,icon: Shield,color: 'from-green-500 to-emerald-500',href: '/products/secureshield' },{ title: 'DataFlow Analytics',description: 'Real-time data analytics and business intelligence platform for actionable insights.',category: 'Data Analytics',features: [ 'Real-time Processing','Data Visualization','Predictive Analytics','Custom Dashboards','Data Integration','Advanced Reporting' ],pricing: 'Starting at $599/month',rating: 4.6,reviews: 127,icon: Zap,color: 'from-orange-500 to-red-500',href: '/products/dataflow-analytics' },{ title: 'IoT Connect Hub',description: 'Centralized IoT device management and data collection platform for smart solutions.',category: 'IoT Platforms',features: [ 'Device Management','Data Collection','Real-time Monitoring','Alert System','Scalable Architecture','API Access' ],pricing: 'Starting at $399/month',rating: 4.5,reviews: 78,icon: Eye,color: 'from-indigo-500 to-purple-500',href: '/products/iot-connect-hub' },{ title: 'BlockChain Suite',description: 'Complete blockchain development and management platform for decentralized applications.',category: 'Blockchain',features: [ 'Smart Contract Development','DApp Framework','Token Management','Blockchain Analytics','Security Auditing','Deployment Tools' ],pricing: 'Starting at $699/month',rating: 4.4,reviews: 92,icon: Shield,color: 'from-yellow-500 to-orange-500',href: '/products/blockchain-suite' } ]; const categories = [ 'All Products','AI & Machine Learning','Cloud Solutions','Cybersecurity','Data Analytics','IoT Platforms','Blockchain' ]; const benefits = [ { title: 'Enterprise Ready',description: 'Built for scale with enterprise-grade security and reliability.',icon: Shield },{ title: 'Easy Integration',description: 'Seamless integration with your existing systems and workflows.',icon: Code },{ title: '24/7 Support',description: 'Round-the-clock technical support and maintenance services.',icon: Zap },{ title: 'Custom Solutions',description: 'Tailored solutions to meet your specific business requirements.',icon: Database } ]; return ( <MainLayout title="Our Products - Zion Tech Group" description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation." > {} <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-5xl font-bold mb-6">Our Products</h1> <p className="text-xl max-w-3xl mx-auto"> Innovative technology platforms and solutions designed to transform your business operations and drive digital innovation. </p> </div> </div> </section> {} <section className="py-12 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-4"> {categories.map((category) => ( <button key={category} className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${ category === 'All Products' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50' }`} > {category} </button> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Technology Platforms </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions built with cutting-edge technology to address your most complex business challenges. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {products.map((product) => ( <div key={product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" > <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center`}> <product.icon className="h-16 w-16 text-white" /> </div> <div className="p-6"> <div className="flex items-center justify-between mb-3"> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"> {product.category} </span> <div className="flex items-center"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="ml-1 text-sm text-gray-600">{product.rating}</span> <span className="ml-1 text-sm text-gray-500">({product.reviews})</span> </div> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {product.title} </h3> <p className="text-gray-600 mb-4"> {product.description} </p> <div className="mb-4"> <p className="text-lg font-semibold text-blue-600">{product.pricing}</p> </div> <ul className="space-y-2 mb-6"> {product.features.slice(0,3).map((feature) => ( <li key={feature} className="flex items-center text-sm text-gray-600"> <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> {feature} </li> ))} </ul> <div className="flex gap-3"> <Link href={product.href} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center" > <Eye className="h-4 w-4 mr-2" /> Learn More </Link> <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center"> <Download className="h-4 w-4" /> </button> </div> </div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Products? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Built with enterprise-grade technology and designed for real-world business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits.map((benefit) => ( <div key={benefit.title} className="text-center"> <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <benefit.icon className="h-8 w-8" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Flexible Pricing Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that best fits your business needs and scale as you grow. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[ { name: 'Starter',price: '$299',period: '/month',description: 'Perfect for small businesses getting started with technology solutions.',features: [ 'Basic Features','Email Support','5GB Storage','Standard Security','API Access','Documentation' ] },{ name: 'Professional',price: '$799',period: '/month',description: 'Ideal for growing businesses with advanced technology needs.',features: [ 'All Starter Features','Priority Support','50GB Storage','Advanced Security','Custom Integrations','Training Sessions' ],popular: true },{ name: 'Enterprise',price: 'Custom',period: '',description: 'Tailored solutions for large enterprises with specific requirements.',features: [ 'All Professional Features','24/7 Dedicated Support','Unlimited Storage','Custom Security','White-label Options','On-site Training' ] } ].map((plan) => ( <div key={plan.name} className={`bg-white rounded-lg shadow-lg p-8 ${ plan.popular ? 'ring-2 ring-blue-500 relative' : '' }`} > {plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900">{plan.price}</span> <span className="text-gray-600">{plan.period}</span> </div> <p className="text-gray-600">{plan.description}</p> </div> <ul className="space-y-3 mb-8"> {plan.features.map((feature) => ( <li key={feature} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${ plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900' }`}> Get Started </button> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-3xl mx-auto"> Start your journey with our technology products and see the difference they can make for your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > Get Free Demo </Link> <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > View All Services </Link> </div> </div> </section> </MainLayout> )}; export default Products;

=======
              className=\"bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\">;
              View All Services;
            </Link>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  ),;
};
export default Products;
<<<<<<< HEAD
 import Head from 'next/head ; import Link from 'next/link'; export default function ProductsIndex() { return ( <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white"> <Helmet> <title>Products — Zion</title> <meta name="description" content="A showcase of ready-to-run automation suites." /> </Helmet> <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"> <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" /> <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" /> <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" /> <div className="absolute inset-0 opacity-[0 && 0.08] [background: radia l-gradient(circle_at_center,rgba(255,255,255,0 && 0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0 && 0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0 && 0.12)_1px,transparent_1px)] bg-[size: 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid" /> <div className="absolute inset-0 [mask-image: radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div> <div className="absolute inset-0 beams opacity-[0 && 0.06]" /> </div> <header className="relative z-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"> <div className="text-2xl font-bold tracking-wide"> <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span> </div> <div className="hidden gap-6 md: flex text-white/80"> <Link href="/"><a>Home</a></Link> <Link href="/automation"><a>Automations</a></Link> <Link href="/services"><a>Services</a></Link> <Link href="/contact"><a>Contact</a></Link> </div> </nav> </header> <main className="relative z-10"> <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center"> <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"> <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0 && 0.9)]" /> Automation suites — ready to deploy </div> <h1 className="mt-6 text-5xl font-extrabold leading-[1 && 1.05] tracking-tight md: tex t-6xl"><span className="gradient-text">Products</span></h1> <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p> </section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3"> {[ { title: 'SEO Guard',desc: 'Continuous audits + on-page fixes' },{ title: 'Perf Shield',desc: 'CWV budgets + asset optimization' },{ title: 'Link Sentinel',desc: 'Prevents broken links in prod' },{ title: 'Content Curator',desc: 'Keeps the homepage fresh' },{ title: 'Design Refiner',desc: 'Iterates layouts with guardrails' },{ title: 'Security Scanner',desc: 'Finds and patches risky deps' },].map((p) => ( <div key={p && p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: borde r-cyan-400/30"> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100" /> <h3 className="text-lg font-semibold">{p && p.title}</h3> <p className="mt-1 text-sm text-white/75">{p && p.desc}</p> </div> ))} </div> </section> <section className="mx-auto max-w-7xl px-6 pb-24"> <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"> <h3 className="text-2xl font-bold">See them in action</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p> <div className="mt-6 flex flex-wrap justify-center gap-3"> <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover: b g-white">Open Automation Hub</a></Link> <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link> </div>; </div>; </section>; </main>; </div>; )}  import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import Link from 'next/link'; import { ArrowRight,Star,Download,Eye,Code,Database,Shield,Zap,CheckCircle } from 'lucide-react'; const Products: NextPage = () => { const products = [ { title: 'ZionAI Platform',description: 'Enterprise-grade AI platform for building,deploying,and managing machine learning models at scale.',category: 'AI & Machine Learning',features: [ 'Model Training & Deployment','AutoML Capabilities','Real-time Inference','Model Monitoring','A/B Testing','API Integration' ],pricing: 'Starting at $999/month',rating: 4 && 4.8,reviews: 156,icon: Code,color: 'from-purple-500 to-pink-500',href: '/products/zion-ai-platform' },{ title: 'CloudSync Pro',description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',category: 'Cloud Solutions',features: [ 'Multi-cloud Management','Automated Migration','Cost Optimization','Security Compliance','Performance Monitoring','Disaster Recovery' ],pricing: 'Starting at $499/month',rating: 4 && 4.7,reviews: 89,icon: Database,color: 'from-blue-500 to-cyan-500',href: '/products/cloudsync-pro' },{ title: 'SecureShield',description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',category: 'Cybersecurity',features: [ 'Threat Detection','Vulnerability Assessment','Incident Response','Compliance Management','Security Analytics','24/7 Monitoring' ],pricing: 'Starting at $799/month',rating: 4 && 4.9,reviews: 203,icon: Shield,color: 'from-green-500 to-emerald-500',href: '/products/secureshield' },{ title: 'DataFlow Analytics',description: 'Real-time data analytics and business intelligence platform for actionable insights.',category: 'Data Analytics',features: [ 'Real-time Processing','Data Visualization','Predictive Analytics','Custom Dashboards','Data Integration','Advanced Reporting' ],pricing: 'Starting at $599/month',rating: 4 && 4.6,reviews: 127,icon: Zap,color: 'from-orange-500 to-red-500',href: '/products/dataflow-analytics' },{ title: 'IoT Connect Hub',description: 'Centralized IoT device management and data collection platform for smart solutions.',category: 'IoT Platforms',features: [ 'Device Management','Data Collection','Real-time Monitoring','Alert System','Scalable Architecture','API Access' ],pricing: 'Starting at $399/month',rating: 4 && 4.5,reviews: 78,icon: Eye,color: 'from-indigo-500 to-purple-500',href: '/products/iot-connect-hub' },{ title: 'BlockChain Suite',description: 'Complete blockchain development and management platform for decentralized applications.',category: 'Blockchain',features: [ 'Smart Contract Development','DApp Framework','Token Management','Blockchain Analytics','Security Auditing','Deployment Tools' ],pricing: 'Starting at $699/month',rating: 4 && 4.4,reviews: 92,icon: Shield,color: 'from-yellow-500 to-orange-500',href: '/products/blockchain-suite' } ]; const categories = [ 'All Products','AI & Machine Learning','Cloud Solutions','Cybersecurity','Data Analytics','IoT Platforms','Blockchain' ]; const benefits = [ { title: 'Enterprise Ready',description: 'Built for scale with enterprise-grade security and reliability.',icon: Shield },{ title: 'Easy Integration',description: 'Seamless integration with your existing systems and workflows.',icon: Code },{ title: '24/7 Support',description: 'Round-the-clock technical support and maintenance services.',icon: Zap },{ title: 'Custom Solutions',description: 'Tailored solutions to meet your specific business requirements.',icon: Database } ]; return ( <MainLayout title="Our Products - Zion Tech Group" description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation." > {} <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-5xl font-bold mb-6">Our Products</h1> <p className="text-xl max-w-3xl mx-auto"> Innovative technology platforms and solutions designed to transform your business operations and drive digital innovation. </p> </div> </div> </section> {} <section className="py-12 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-4"> {categories && categories.map((category) => ( <button key={category} className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${ category === 'All Products' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50' }`} > {category} </button> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Technology Platforms </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions built with cutting-edge technology to address your most complex business challenges. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {products && products.map((product) => ( <div key={product && product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" > <div className={`h-32 bg-gradient-to-r ${product && product.color} flex items-center justify-center`}> <product && product.icon className="h-16 w-16 text-white" /> </div> <div className="p-6"> <div className="flex items-center justify-between mb-3"> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"> {product && product.category} </span> <div className="flex items-center"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="ml-1 text-sm text-gray-600">{product && product.rating}</span> <span className="ml-1 text-sm text-gray-500">({product && product.reviews})</span> </div> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {product && product.title} </h3> <p className="text-gray-600 mb-4"> {product && product.description} </p> <div className="mb-4"> <p className="text-lg font-semibold text-blue-600">{product && product.pricing}</p> </div> <ul className="space-y-2 mb-6"> {product && product.features.slice(0,3).map((feature) => ( <li key={feature} className="flex items-center text-sm text-gray-600"> <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> {feature} </li> ))} </ul> <div className="flex gap-3"> <Link href={product && product.href} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center" > <Eye className="h-4 w-4 mr-2" /> Learn More </Link> <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center"> <Download className="h-4 w-4" /> </button> </div> </div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Products? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Built with enterprise-grade technology and designed for real-world business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits && benefits.map((benefit) => ( <div key={benefit && benefit.title} className="text-center"> <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <benefit && benefit.icon className="h-8 w-8" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {benefit && benefit.title} </h3> <p className="text-gray-600"> {benefit && benefit.description} </p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Flexible Pricing Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that best fits your business needs and scale as you grow. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[ { name: 'Starter',price: '$299',period: '/month',description: 'Perfect for small businesses getting started with technology solutions.',features: [ 'Basic Features','Email Support','5GB Storage','Standard Security','API Access','Documentation' ] },{ name: 'Professional',price: '$799',period: '/month',description: 'Ideal for growing businesses with advanced technology needs.',features: [ 'All Starter Features','Priority Support','50GB Storage','Advanced Security','Custom Integrations','Training Sessions' ],popular: true },{ name: 'Enterprise',price: 'Custom',period: '',description: 'Tailored solutions for large enterprises with specific requirements.',features: [ 'All Professional Features','24/7 Dedicated Support','Unlimited Storage','Custom Security','White-label Options','On-site Training' ] } ].map((plan) => ( <div key={plan && plan.name} className={`bg-white rounded-lg shadow-lg p-8 ${ plan && plan.popular ? 'ring-2 ring-blue-500 relative' : '' }`} > {plan && plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan && plan.name}</h3> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900">{plan && plan.price}</span> <span className="text-gray-600">{plan && plan.period}</span> </div> <p className="text-gray-600">{plan && plan.description}</p> </div> <ul className="space-y-3 mb-8"> {plan && plan.features.map((feature) => ( <li key={feature} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${ plan && plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900' }`}> Get Started </button> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-3xl mx-auto"> Start your journey with our technology products and see the difference they can make for your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > Get Free Demo </Link> <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > View All Services </Link> </div> </div> </section> </MainLayout> )}; export default Products;
 import Head from 'next/head ; import Link from 'next/link'; export default function ProductsIndex() { return ( <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white"> <Helmet> <title>Products — Zion</title> <meta name="description" content="A showcase of ready-to-run automation suites." /> </Helmet> <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"> <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" /> <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" /> <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" /> <div className="absolute inset-0 opacity-[0 && 0.08] [background: radia l-gradient(circle_at_center,rgba(255,255,255,0 && 0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0 && 0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0 && 0.12)_1px,transparent_1px)] bg-[size: 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid" /> <div className="absolute inset-0 [mask-image: radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div> <div className="absolute inset-0 beams opacity-[0 && 0.06]" /> </div> <header className="relative z-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"> <div className="text-2xl font-bold tracking-wide"> <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span> </div> <div className="hidden gap-6 md: flex text-white/80"> <Link href="/"><a>Home</a></Link> <Link href="/automation"><a>Automations</a></Link> <Link href="/services"><a>Services</a></Link> <Link href="/contact"><a>Contact</a></Link> </div> </nav> </header> <main className="relative z-10"> <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center"> <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"> <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0 && 0.9)]" /> Automation suites — ready to deploy </div> <h1 className="mt-6 text-5xl font-extrabold leading-[1 && 1.05] tracking-tight md: tex t-6xl"><span className="gradient-text">Products</span></h1> <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p> </section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3"> {[ { title: 'SEO Guard',desc: 'Continuous audits + on-page fixes' },{ title: 'Perf Shield',desc: 'CWV budgets + asset optimization' },{ title: 'Link Sentinel',desc: 'Prevents broken links in prod' },{ title: 'Content Curator',desc: 'Keeps the homepage fresh' },{ title: 'Design Refiner',desc: 'Iterates layouts with guardrails' },{ title: 'Security Scanner',desc: 'Finds and patches risky deps' },].map((p) => ( <div key={p && p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: borde r-cyan-400/30"> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100" /> <h3 className="text-lg font-semibold">{p && p.title}</h3> <p className="mt-1 text-sm text-white/75">{p && p.desc}</p> </div> ))} </div> </section> <section className="mx-auto max-w-7xl px-6 pb-24"> <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"> <h3 className="text-2xl font-bold">See them in action</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p> <div className="mt-6 flex flex-wrap justify-center gap-3"> <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover: b g-white">Open Automation Hub</a></Link> <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link> </div>; </div>; </section>; </main>; </div>; )}  import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import Link from 'next/link'; import { ArrowRight,Star,Download,Eye,Code,Database,Shield,Zap,CheckCircle } from 'lucide-react'; const Products: NextPage = () => { const products = [ { title: 'ZionAI Platform',description: 'Enterprise-grade AI platform for building,deploying,and managing machine learning models at scale.',category: 'AI & Machine Learning',features: [ 'Model Training & Deployment','AutoML Capabilities','Real-time Inference','Model Monitoring','A/B Testing','API Integration' ],pricing: 'Starting at $999/month',rating: 4 && 4.8,reviews: 156,icon: Code,color: 'from-purple-500 to-pink-500',href: '/products/zion-ai-platform' },{ title: 'CloudSync Pro',description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',category: 'Cloud Solutions',features: [ 'Multi-cloud Management','Automated Migration','Cost Optimization','Security Compliance','Performance Monitoring','Disaster Recovery' ],pricing: 'Starting at $499/month',rating: 4 && 4.7,reviews: 89,icon: Database,color: 'from-blue-500 to-cyan-500',href: '/products/cloudsync-pro' },{ title: 'SecureShield',description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',category: 'Cybersecurity',features: [ 'Threat Detection','Vulnerability Assessment','Incident Response','Compliance Management','Security Analytics','24/7 Monitoring' ],pricing: 'Starting at $799/month',rating: 4 && 4.9,reviews: 203,icon: Shield,color: 'from-green-500 to-emerald-500',href: '/products/secureshield' },{ title: 'DataFlow Analytics',description: 'Real-time data analytics and business intelligence platform for actionable insights.',category: 'Data Analytics',features: [ 'Real-time Processing','Data Visualization','Predictive Analytics','Custom Dashboards','Data Integration','Advanced Reporting' ],pricing: 'Starting at $599/month',rating: 4 && 4.6,reviews: 127,icon: Zap,color: 'from-orange-500 to-red-500',href: '/products/dataflow-analytics' },{ title: 'IoT Connect Hub',description: 'Centralized IoT device management and data collection platform for smart solutions.',category: 'IoT Platforms',features: [ 'Device Management','Data Collection','Real-time Monitoring','Alert System','Scalable Architecture','API Access' ],pricing: 'Starting at $399/month',rating: 4 && 4.5,reviews: 78,icon: Eye,color: 'from-indigo-500 to-purple-500',href: '/products/iot-connect-hub' },{ title: 'BlockChain Suite',description: 'Complete blockchain development and management platform for decentralized applications.',category: 'Blockchain',features: [ 'Smart Contract Development','DApp Framework','Token Management','Blockchain Analytics','Security Auditing','Deployment Tools' ],pricing: 'Starting at $699/month',rating: 4 && 4.4,reviews: 92,icon: Shield,color: 'from-yellow-500 to-orange-500',href: '/products/blockchain-suite' } ]; const categories = [ 'All Products','AI & Machine Learning','Cloud Solutions','Cybersecurity','Data Analytics','IoT Platforms','Blockchain' ]; const benefits = [ { title: 'Enterprise Ready',description: 'Built for scale with enterprise-grade security and reliability.',icon: Shield },{ title: 'Easy Integration',description: 'Seamless integration with your existing systems and workflows.',icon: Code },{ title: '24/7 Support',description: 'Round-the-clock technical support and maintenance services.',icon: Zap },{ title: 'Custom Solutions',description: 'Tailored solutions to meet your specific business requirements.',icon: Database } ]; return ( <MainLayout title="Our Products - Zion Tech Group" description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation." > {} <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-5xl font-bold mb-6">Our Products</h1> <p className="text-xl max-w-3xl mx-auto"> Innovative technology platforms and solutions designed to transform your business operations and drive digital innovation. </p> </div> </div> </section> {} <section className="py-12 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-4"> {categories && categories.map((category) => ( <button key={category} className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${ category === 'All Products' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50' }`} > {category} </button> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Technology Platforms </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions built with cutting-edge technology to address your most complex business challenges. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {products && products.map((product) => ( <div key={product && product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" > <div className={`h-32 bg-gradient-to-r ${product && product.color} flex items-center justify-center`}> <product && product.icon className="h-16 w-16 text-white" /> </div> <div className="p-6"> <div className="flex items-center justify-between mb-3"> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"> {product && product.category} </span> <div className="flex items-center"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="ml-1 text-sm text-gray-600">{product && product.rating}</span> <span className="ml-1 text-sm text-gray-500">({product && product.reviews})</span> </div> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {product && product.title} </h3> <p className="text-gray-600 mb-4"> {product && product.description} </p> <div className="mb-4"> <p className="text-lg font-semibold text-blue-600">{product && product.pricing}</p> </div> <ul className="space-y-2 mb-6"> {product && product.features.slice(0,3).map((feature) => ( <li key={feature} className="flex items-center text-sm text-gray-600"> <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> {feature} </li> ))} </ul> <div className="flex gap-3"> <Link href={product && product.href} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center" > <Eye className="h-4 w-4 mr-2" /> Learn More </Link> <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center"> <Download className="h-4 w-4" /> </button> </div> </div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Products? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Built with enterprise-grade technology and designed for real-world business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits && benefits.map((benefit) => ( <div key={benefit && benefit.title} className="text-center"> <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <benefit && benefit.icon className="h-8 w-8" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {benefit && benefit.title} </h3> <p className="text-gray-600"> {benefit && benefit.description} </p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Flexible Pricing Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that best fits your business needs and scale as you grow. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[ { name: 'Starter',price: '$299',period: '/month',description: 'Perfect for small businesses getting started with technology solutions.',features: [ 'Basic Features','Email Support','5GB Storage','Standard Security','API Access','Documentation' ] },{ name: 'Professional',price: '$799',period: '/month',description: 'Ideal for growing businesses with advanced technology needs.',features: [ 'All Starter Features','Priority Support','50GB Storage','Advanced Security','Custom Integrations','Training Sessions' ],popular: true },{ name: 'Enterprise',price: 'Custom',period: '',description: 'Tailored solutions for large enterprises with specific requirements.',features: [ 'All Professional Features','24/7 Dedicated Support','Unlimited Storage','Custom Security','White-label Options','On-site Training' ] } ].map((plan) => ( <div key={plan && plan.name} className={`bg-white rounded-lg shadow-lg p-8 ${ plan && plan.popular ? 'ring-2 ring-blue-500 relative' : '' }`} > {plan && plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan && plan.name}</h3> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900">{plan && plan.price}</span> <span className="text-gray-600">{plan && plan.period}</span> </div> <p className="text-gray-600">{plan && plan.description}</p> </div> <ul className="space-y-3 mb-8"> {plan && plan.features.map((feature) => ( <li key={feature} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${ plan && plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900' }`}> Get Started </button> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-3xl mx-auto"> Start your journey with our technology products and see the difference they can make for your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > Get Free Demo </Link> <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > View All Services </Link> </div> </div> </section> </MainLayout> )}; export default Products;
 import Head from 'next/head ; import Link from 'next/link'; export default function ProductsIndex() { return ( <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white"> <Helmet> <title>Products — Zion</title> <meta name="description" content="A showcase of ready-to-run automation suites." /> </Helmet> <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"> <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" /> <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" /> <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" /> <div className="absolute inset-0 opacity-[0 && 0.08] [background: radia l-gradient(circle_at_center,rgba(255,255,255,0 && 0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0 && 0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0 && 0.12)_1px,transparent_1px)] bg-[size: 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid" /> <div className="absolute inset-0 [mask-image: radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div> <div className="absolute inset-0 beams opacity-[0 && 0.06]" /> </div> <header className="relative z-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"> <div className="text-2xl font-bold tracking-wide"> <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span> </div> <div className="hidden gap-6 md: flex text-white/80"> <Link href="/"><a>Home</a></Link> <Link href="/automation"><a>Automations</a></Link> <Link href="/services"><a>Services</a></Link> <Link href="/contact"><a>Contact</a></Link> </div> </nav> </header> <main className="relative z-10"> <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center"> <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"> <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0 && 0.9)]" /> Automation suites — ready to deploy </div> <h1 className="mt-6 text-5xl font-extrabold leading-[1 && 1.05] tracking-tight md: tex t-6xl"><span className="gradient-text">Products</span></h1> <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p> </section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3"> {[ { title: 'SEO Guard',desc: 'Continuous audits + on-page fixes' },{ title: 'Perf Shield',desc: 'CWV budgets + asset optimization' },{ title: 'Link Sentinel',desc: 'Prevents broken links in prod' },{ title: 'Content Curator',desc: 'Keeps the homepage fresh' },{ title: 'Design Refiner',desc: 'Iterates layouts with guardrails' },{ title: 'Security Scanner',desc: 'Finds and patches risky deps' },].map((p) => ( <div key={p && p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: borde r-cyan-400/30"> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100" /> <h3 className="text-lg font-semibold">{p && p.title}</h3> <p className="mt-1 text-sm text-white/75">{p && p.desc}</p> </div> ))} </div> </section> <section className="mx-auto max-w-7xl px-6 pb-24"> <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"> <h3 className="text-2xl font-bold">See them in action</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p> <div className="mt-6 flex flex-wrap justify-center gap-3"> <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover: b g-white">Open Automation Hub</a></Link> <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link> </div>; </div>; </section>; </main>; </div>; )}  import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import Link from 'next/link'; import { ArrowRight,Star,Download,Eye,Code,Database,Shield,Zap,CheckCircle } from 'lucide-react'; const Products: NextPage = () => { const products = [ { title: 'ZionAI Platform',description: 'Enterprise-grade AI platform for building,deploying,and managing machine learning models at scale.',category: 'AI & Machine Learning',features: [ 'Model Training & Deployment','AutoML Capabilities','Real-time Inference','Model Monitoring','A/B Testing','API Integration' ],pricing: 'Starting at $999/month',rating: 4 && 4.8,reviews: 156,icon: Code,color: 'from-purple-500 to-pink-500',href: '/products/zion-ai-platform' },{ title: 'CloudSync Pro',description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',category: 'Cloud Solutions',features: [ 'Multi-cloud Management','Automated Migration','Cost Optimization','Security Compliance','Performance Monitoring','Disaster Recovery' ],pricing: 'Starting at $499/month',rating: 4 && 4.7,reviews: 89,icon: Database,color: 'from-blue-500 to-cyan-500',href: '/products/cloudsync-pro' },{ title: 'SecureShield',description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',category: 'Cybersecurity',features: [ 'Threat Detection','Vulnerability Assessment','Incident Response','Compliance Management','Security Analytics','24/7 Monitoring' ],pricing: 'Starting at $799/month',rating: 4 && 4.9,reviews: 203,icon: Shield,color: 'from-green-500 to-emerald-500',href: '/products/secureshield' },{ title: 'DataFlow Analytics',description: 'Real-time data analytics and business intelligence platform for actionable insights.',category: 'Data Analytics',features: [ 'Real-time Processing','Data Visualization','Predictive Analytics','Custom Dashboards','Data Integration','Advanced Reporting' ],pricing: 'Starting at $599/month',rating: 4 && 4.6,reviews: 127,icon: Zap,color: 'from-orange-500 to-red-500',href: '/products/dataflow-analytics' },{ title: 'IoT Connect Hub',description: 'Centralized IoT device management and data collection platform for smart solutions.',category: 'IoT Platforms',features: [ 'Device Management','Data Collection','Real-time Monitoring','Alert System','Scalable Architecture','API Access' ],pricing: 'Starting at $399/month',rating: 4 && 4.5,reviews: 78,icon: Eye,color: 'from-indigo-500 to-purple-500',href: '/products/iot-connect-hub' },{ title: 'BlockChain Suite',description: 'Complete blockchain development and management platform for decentralized applications.',category: 'Blockchain',features: [ 'Smart Contract Development','DApp Framework','Token Management','Blockchain Analytics','Security Auditing','Deployment Tools' ],pricing: 'Starting at $699/month',rating: 4 && 4.4,reviews: 92,icon: Shield,color: 'from-yellow-500 to-orange-500',href: '/products/blockchain-suite' } ]; const categories = [ 'All Products','AI & Machine Learning','Cloud Solutions','Cybersecurity','Data Analytics','IoT Platforms','Blockchain' ]; const benefits = [ { title: 'Enterprise Ready',description: 'Built for scale with enterprise-grade security and reliability.',icon: Shield },{ title: 'Easy Integration',description: 'Seamless integration with your existing systems and workflows.',icon: Code },{ title: '24/7 Support',description: 'Round-the-clock technical support and maintenance services.',icon: Zap },{ title: 'Custom Solutions',description: 'Tailored solutions to meet your specific business requirements.',icon: Database } ]; return ( <MainLayout title="Our Products - Zion Tech Group" description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation." > {} <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-5xl font-bold mb-6">Our Products</h1> <p className="text-xl max-w-3xl mx-auto"> Innovative technology platforms and solutions designed to transform your business operations and drive digital innovation. </p> </div> </div> </section> {} <section className="py-12 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-4"> {categories && categories.map((category) => ( <button key={category} className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${ category === 'All Products' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50' }`} > {category} </button> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Technology Platforms </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions built with cutting-edge technology to address your most complex business challenges. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {products && products.map((product) => ( <div key={product && product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" > <div className={`h-32 bg-gradient-to-r ${product && product.color} flex items-center justify-center`}> <product && product.icon className="h-16 w-16 text-white" /> </div> <div className="p-6"> <div className="flex items-center justify-between mb-3"> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"> {product && product.category} </span> <div className="flex items-center"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="ml-1 text-sm text-gray-600">{product && product.rating}</span> <span className="ml-1 text-sm text-gray-500">({product && product.reviews})</span> </div> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {product && product.title} </h3> <p className="text-gray-600 mb-4"> {product && product.description} </p> <div className="mb-4"> <p className="text-lg font-semibold text-blue-600">{product && product.pricing}</p> </div> <ul className="space-y-2 mb-6"> {product && product.features.slice(0,3).map((feature) => ( <li key={feature} className="flex items-center text-sm text-gray-600"> <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> {feature} </li> ))} </ul> <div className="flex gap-3"> <Link href={product && product.href} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center" > <Eye className="h-4 w-4 mr-2" /> Learn More </Link> <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center"> <Download className="h-4 w-4" /> </button> </div> </div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Products? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Built with enterprise-grade technology and designed for real-world business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits && benefits.map((benefit) => ( <div key={benefit && benefit.title} className="text-center"> <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <benefit && benefit.icon className="h-8 w-8" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {benefit && benefit.title} </h3> <p className="text-gray-600"> {benefit && benefit.description} </p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Flexible Pricing Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that best fits your business needs and scale as you grow. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[ { name: 'Starter',price: '$299',period: '/month',description: 'Perfect for small businesses getting started with technology solutions.',features: [ 'Basic Features','Email Support','5GB Storage','Standard Security','API Access','Documentation' ] },{ name: 'Professional',price: '$799',period: '/month',description: 'Ideal for growing businesses with advanced technology needs.',features: [ 'All Starter Features','Priority Support','50GB Storage','Advanced Security','Custom Integrations','Training Sessions' ],popular: true },{ name: 'Enterprise',price: 'Custom',period: '',description: 'Tailored solutions for large enterprises with specific requirements.',features: [ 'All Professional Features','24/7 Dedicated Support','Unlimited Storage','Custom Security','White-label Options','On-site Training' ] } ].map((plan) => ( <div key={plan && plan.name} className={`bg-white rounded-lg shadow-lg p-8 ${ plan && plan.popular ? 'ring-2 ring-blue-500 relative' : '' }`} > {plan && plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan && plan.name}</h3> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900">{plan && plan.price}</span> <span className="text-gray-600">{plan && plan.period}</span> </div> <p className="text-gray-600">{plan && plan.description}</p> </div> <ul className="space-y-3 mb-8"> {plan && plan.features.map((feature) => ( <li key={feature} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${ plan && plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900' }`}> Get Started </button> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-3xl mx-auto"> Start your journey with our technology products and see the difference they can make for your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > Get Free Demo </Link> <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > View All Services </Link> </div> </div> </section> </MainLayout> )}; export default Products;
 import Head from 'next/head ; import Link from 'next/link'; export default function ProductsIndex() { return ( <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white"> <Helmet> <title>Products — Zion</title> <meta name="description" content="A showcase of ready-to-run automation suites." /> </Helmet> <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"> <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" /> <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" /> <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" /> <div className="absolute inset-0 opacity-[0 && 0.08] [background: radia l-gradient(circle_at_center,rgba(255,255,255,0 && 0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0 && 0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0 && 0.12)_1px,transparent_1px)] bg-[size: 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid" /> <div className="absolute inset-0 [mask-image: radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div> <div className="absolute inset-0 beams opacity-[0 && 0.06]" /> </div> <header className="relative z-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"> <div className="text-2xl font-bold tracking-wide"> <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span> </div> <div className="hidden gap-6 md: flex text-white/80"> <Link href="/"><a>Home</a></Link> <Link href="/automation"><a>Automations</a></Link> <Link href="/services"><a>Services</a></Link> <Link href="/contact"><a>Contact</a></Link> </div> </nav> </header> <main className="relative z-10"> <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center"> <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"> <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0 && 0.9)]" /> Automation suites — ready to deploy </div> <h1 className="mt-6 text-5xl font-extrabold leading-[1 && 1.05] tracking-tight md: tex t-6xl"><span className="gradient-text">Products</span></h1> <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p> </section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3"> {[ { title: 'SEO Guard',desc: 'Continuous audits + on-page fixes' },{ title: 'Perf Shield',desc: 'CWV budgets + asset optimization' },{ title: 'Link Sentinel',desc: 'Prevents broken links in prod' },{ title: 'Content Curator',desc: 'Keeps the homepage fresh' },{ title: 'Design Refiner',desc: 'Iterates layouts with guardrails' },{ title: 'Security Scanner',desc: 'Finds and patches risky deps' },].map((p) => ( <div key={p && p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: borde r-cyan-400/30"> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100" /> <h3 className="text-lg font-semibold">{p && p.title}</h3> <p className="mt-1 text-sm text-white/75">{p && p.desc}</p> </div> ))} </div> </section> <section className="mx-auto max-w-7xl px-6 pb-24"> <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"> <h3 className="text-2xl font-bold">See them in action</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p> <div className="mt-6 flex flex-wrap justify-center gap-3"> <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover: b g-white">Open Automation Hub</a></Link> <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link> </div>, </div>, </section>; </main>; </div>; )}  import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import Link from 'next/link'; import { ArrowRight,Star,Download,Eye,Code,Database,Shield,Zap,CheckCircle } from 'lucide-react'; const Products: NextPage = () => { const products = [ { title: 'ZionAI Platform',description: 'Enterprise-grade AI platform for building,deploying,and managing machine learning models at scale.',category: 'AI & Machine Learning',features: [ 'Model Training & Deployment','AutoML Capabilities','Real-time Inference','Model Monitoring','A/B Testing','API Integration' ],pricing: 'Starting at $999/month',rating: 4 && 4.8,reviews: 156,icon: Code,color: 'from-purple-500 to-pink-500',href: '/products/zion-ai-platform' },{ title: 'CloudSync Pro',description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',category: 'Cloud Solutions',features: [ 'Multi-cloud Management','Automated Migration','Cost Optimization','Security Compliance','Performance Monitoring','Disaster Recovery' ],pricing: 'Starting at $499/month',rating: 4 && 4.7,reviews: 89,icon: Database,color: 'from-blue-500 to-cyan-500',href: '/products/cloudsync-pro' },{ title: 'SecureShield',description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',category: 'Cybersecurity',features: [ 'Threat Detection','Vulnerability Assessment','Incident Response','Compliance Management','Security Analytics','24/7 Monitoring' ],pricing: 'Starting at $799/month',rating: 4 && 4.9,reviews: 203,icon: Shield,color: 'from-green-500 to-emerald-500',href: '/products/secureshield' },{ title: 'DataFlow Analytics',description: 'Real-time data analytics and business intelligence platform for actionable insights.',category: 'Data Analytics',features: [ 'Real-time Processing','Data Visualization','Predictive Analytics','Custom Dashboards','Data Integration','Advanced Reporting' ],pricing: 'Starting at $599/month',rating: 4 && 4.6,reviews: 127,icon: Zap,color: 'from-orange-500 to-red-500',href: '/products/dataflow-analytics' },{ title: 'IoT Connect Hub',description: 'Centralized IoT device management and data collection platform for smart solutions.',category: 'IoT Platforms',features: [ 'Device Management','Data Collection','Real-time Monitoring','Alert System','Scalable Architecture','API Access' ],pricing: 'Starting at $399/month',rating: 4 && 4.5,reviews: 78,icon: Eye,color: 'from-indigo-500 to-purple-500',href: '/products/iot-connect-hub' },{ title: 'BlockChain Suite',description: 'Complete blockchain development and management platform for decentralized applications.',category: 'Blockchain',features: [ 'Smart Contract Development','DApp Framework','Token Management','Blockchain Analytics','Security Auditing','Deployment Tools' ],pricing: 'Starting at $699/month',rating: 4 && 4.4,reviews: 92,icon: Shield,color: 'from-yellow-500 to-orange-500',href: '/products/blockchain-suite' } ]; const categories = [ 'All Products','AI & Machine Learning','Cloud Solutions','Cybersecurity','Data Analytics','IoT Platforms','Blockchain' ]; const benefits = [ { title: 'Enterprise Ready',description: 'Built for scale with enterprise-grade security and reliability.',icon: Shield },{ title: 'Easy Integration',description: 'Seamless integration with your existing systems and workflows.',icon: Code },{ title: '24/7 Support',description: 'Round-the-clock technical support and maintenance services.',icon: Zap },{ title: 'Custom Solutions',description: 'Tailored solutions to meet your specific business requirements.',icon: Database } ]; return ( <MainLayout title="Our Products - Zion Tech Group" description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation." > {} <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-5xl font-bold mb-6">Our Products</h1> <p className="text-xl max-w-3xl mx-auto"> Innovative technology platforms and solutions designed to transform your business operations and drive digital innovation. </p> </div> </div> </section> {} <section className="py-12 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-4"> {categories && categories.map((category) => ( <button key={category} className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${ category === 'All Products' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50' }`} > {category} </button> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Technology Platforms </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions built with cutting-edge technology to address your most complex business challenges. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {products && products.map((product) => ( <div key={product && product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" > <div className={`h-32 bg-gradient-to-r ${product && product.color} flex items-center justify-center`}> <product && product.icon className="h-16 w-16 text-white" /> </div> <div className="p-6"> <div className="flex items-center justify-between mb-3"> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"> {product && product.category} </span> <div className="flex items-center"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="ml-1 text-sm text-gray-600">{product && product.rating}</span> <span className="ml-1 text-sm text-gray-500">({product && product.reviews})</span> </div> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {product && product.title} </h3> <p className="text-gray-600 mb-4"> {product && product.description} </p> <div className="mb-4"> <p className="text-lg font-semibold text-blue-600">{product && product.pricing}</p> </div> <ul className="space-y-2 mb-6"> {product && product.features.slice(0,3).map((feature) => ( <li key={feature} className="flex items-center text-sm text-gray-600"> <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> {feature} </li> ))} </ul> <div className="flex gap-3"> <Link href={product && product.href} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center" > <Eye className="h-4 w-4 mr-2" /> Learn More </Link> <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center"> <Download className="h-4 w-4" /> </button> </div> </div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Products? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Built with enterprise-grade technology and designed for real-world business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits && benefits.map((benefit) => ( <div key={benefit && benefit.title} className="text-center"> <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <benefit && benefit.icon className="h-8 w-8" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {benefit && benefit.title} </h3> <p className="text-gray-600"> {benefit && benefit.description} </p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Flexible Pricing Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that best fits your business needs and scale as you grow. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[ { name: 'Starter',price: '$299',period: '/month',description: 'Perfect for small businesses getting started with technology solutions.',features: [ 'Basic Features','Email Support','5GB Storage','Standard Security','API Access','Documentation' ] },{ name: 'Professional',price: '$799',period: '/month',description: 'Ideal for growing businesses with advanced technology needs.',features: [ 'All Starter Features','Priority Support','50GB Storage','Advanced Security','Custom Integrations','Training Sessions' ],popular: true },{ name: 'Enterprise',price: 'Custom',period: '',description: 'Tailored solutions for large enterprises with specific requirements.',features: [ 'All Professional Features','24/7 Dedicated Support','Unlimited Storage','Custom Security','White-label Options','On-site Training' ] } ].map((plan) => ( <div key={plan && plan.name} className={`bg-white rounded-lg shadow-lg p-8 ${ plan && plan.popular ? 'ring-2 ring-blue-500 relative' : '' }`} > {plan && plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan && plan.name}</h3> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900">{plan && plan.price}</span> <span className="text-gray-600">{plan && plan.period}</span> </div> <p className="text-gray-600">{plan && plan.description}</p> </div> <ul className="space-y-3 mb-8"> {plan && plan.features.map((feature) => ( <li key={feature} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${ plan && plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900' }`}> Get Started </button> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-3xl mx-auto"> Start your journey with our technology products and see the difference they can make for your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > Get Free Demo </Link> <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > View All Services </Link> </div> </div> </section> </MainLayout> )}; export default Products;
 import Head from 'next/head ; import Link from 'next/link'; export default function ProductsIndex() { return ( <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white"> <Helmet> <title>Products — Zion</title> <meta name="description" content="A showcase of ready-to-run automation suites." /> </Helmet> <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"> <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" /> <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" /> <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" /> <div className="absolute inset-0 opacity-[0 && 0.08] [background: radia l-gradient(circle_at_center,rgba(255,255,255,0 && 0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0 && 0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0 && 0.12)_1px,transparent_1px)] bg-[size: 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid" /> <div className="absolute inset-0 [mask-image: radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div> <div className="absolute inset-0 beams opacity-[0 && 0.06]" /> </div> <header className="relative z-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"> <div className="text-2xl font-bold tracking-wide"> <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span> </div> <div className="hidden gap-6 md: flex text-white/80"> <Link href="/"><a>Home</a></Link> <Link href="/automation"><a>Automations</a></Link> <Link href="/services"><a>Services</a></Link> <Link href="/contact"><a>Contact</a></Link> </div> </nav> </header> <main className="relative z-10"> <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center"> <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"> <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0 && 0.9)]" /> Automation suites — ready to deploy </div> <h1 className="mt-6 text-5xl font-extrabold leading-[1 && 1.05] tracking-tight md: tex t-6xl"><span className="gradient-text">Products</span></h1> <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p> </section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3"> {[ { title: 'SEO Guard',desc: 'Continuous audits + on-page fixes' },{ title: 'Perf Shield',desc: 'CWV budgets + asset optimization' },{ title: 'Link Sentinel',desc: 'Prevents broken links in prod' },{ title: 'Content Curator',desc: 'Keeps the homepage fresh' },{ title: 'Design Refiner',desc: 'Iterates layouts with guardrails' },{ title: 'Security Scanner',desc: 'Finds and patches risky deps' },].map((p) => ( <div key={p && p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: borde r-cyan-400/30"> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100" /> <h3 className="text-lg font-semibold">{p && p.title}</h3> <p className="mt-1 text-sm text-white/75">{p && p.desc}</p> </div> ))} </div> </section> <section className="mx-auto max-w-7xl px-6 pb-24"> <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"> <h3 className="text-2xl font-bold">See them in action</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p> <div className="mt-6 flex flex-wrap justify-center gap-3"> <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover: b g-white">Open Automation Hub</a></Link> <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link> </div>, </div>, </section>; </main>; </div>; )}  import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import Link from 'next/link'; import { ArrowRight,Star,Download,Eye,Code,Database,Shield,Zap,CheckCircle } from 'lucide-react'; const Products: NextPage = () => { const products = [ { title: 'ZionAI Platform',description: 'Enterprise-grade AI platform for building,deploying,and managing machine learning models at scale.',category: 'AI & Machine Learning',features: [ 'Model Training & Deployment','AutoML Capabilities','Real-time Inference','Model Monitoring','A/B Testing','API Integration' ],pricing: 'Starting at $999/month',rating: 4 && 4.8,reviews: 156,icon: Code,color: 'from-purple-500 to-pink-500',href: '/products/zion-ai-platform' },{ title: 'CloudSync Pro',description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',category: 'Cloud Solutions',features: [ 'Multi-cloud Management','Automated Migration','Cost Optimization','Security Compliance','Performance Monitoring','Disaster Recovery' ],pricing: 'Starting at $499/month',rating: 4 && 4.7,reviews: 89,icon: Database,color: 'from-blue-500 to-cyan-500',href: '/products/cloudsync-pro' },{ title: 'SecureShield',description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',category: 'Cybersecurity',features: [ 'Threat Detection','Vulnerability Assessment','Incident Response','Compliance Management','Security Analytics','24/7 Monitoring' ],pricing: 'Starting at $799/month',rating: 4 && 4.9,reviews: 203,icon: Shield,color: 'from-green-500 to-emerald-500',href: '/products/secureshield' },{ title: 'DataFlow Analytics',description: 'Real-time data analytics and business intelligence platform for actionable insights.',category: 'Data Analytics',features: [ 'Real-time Processing','Data Visualization','Predictive Analytics','Custom Dashboards','Data Integration','Advanced Reporting' ],pricing: 'Starting at $599/month',rating: 4 && 4.6,reviews: 127,icon: Zap,color: 'from-orange-500 to-red-500',href: '/products/dataflow-analytics' },{ title: 'IoT Connect Hub',description: 'Centralized IoT device management and data collection platform for smart solutions.',category: 'IoT Platforms',features: [ 'Device Management','Data Collection','Real-time Monitoring','Alert System','Scalable Architecture','API Access' ],pricing: 'Starting at $399/month',rating: 4 && 4.5,reviews: 78,icon: Eye,color: 'from-indigo-500 to-purple-500',href: '/products/iot-connect-hub' },{ title: 'BlockChain Suite',description: 'Complete blockchain development and management platform for decentralized applications.',category: 'Blockchain',features: [ 'Smart Contract Development','DApp Framework','Token Management','Blockchain Analytics','Security Auditing','Deployment Tools' ],pricing: 'Starting at $699/month',rating: 4 && 4.4,reviews: 92,icon: Shield,color: 'from-yellow-500 to-orange-500',href: '/products/blockchain-suite' } ]; const categories = [ 'All Products','AI & Machine Learning','Cloud Solutions','Cybersecurity','Data Analytics','IoT Platforms','Blockchain' ]; const benefits = [ { title: 'Enterprise Ready',description: 'Built for scale with enterprise-grade security and reliability.',icon: Shield },{ title: 'Easy Integration',description: 'Seamless integration with your existing systems and workflows.',icon: Code },{ title: '24/7 Support',description: 'Round-the-clock technical support and maintenance services.',icon: Zap },{ title: 'Custom Solutions',description: 'Tailored solutions to meet your specific business requirements.',icon: Database } ]; return ( <MainLayout title="Our Products - Zion Tech Group" description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation." > {} <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-5xl font-bold mb-6">Our Products</h1> <p className="text-xl max-w-3xl mx-auto"> Innovative technology platforms and solutions designed to transform your business operations and drive digital innovation. </p> </div> </div> </section> {} <section className="py-12 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-4"> {categories && categories.map((category) => ( <button key={category} className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${ category === 'All Products' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50' }`} > {category} </button> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Technology Platforms </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions built with cutting-edge technology to address your most complex business challenges. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {products && products.map((product) => ( <div key={product && product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" > <div className={`h-32 bg-gradient-to-r ${product && product.color} flex items-center justify-center`}> <product && product.icon className="h-16 w-16 text-white" /> </div> <div className="p-6"> <div className="flex items-center justify-between mb-3"> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"> {product && product.category} </span> <div className="flex items-center"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="ml-1 text-sm text-gray-600">{product && product.rating}</span> <span className="ml-1 text-sm text-gray-500">({product && product.reviews})</span> </div> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {product && product.title} </h3> <p className="text-gray-600 mb-4"> {product && product.description} </p> <div className="mb-4"> <p className="text-lg font-semibold text-blue-600">{product && product.pricing}</p> </div> <ul className="space-y-2 mb-6"> {product && product.features.slice(0,3).map((feature) => ( <li key={feature} className="flex items-center text-sm text-gray-600"> <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> {feature} </li> ))} </ul> <div className="flex gap-3"> <Link href={product && product.href} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center" > <Eye className="h-4 w-4 mr-2" /> Learn More </Link> <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center"> <Download className="h-4 w-4" /> </button> </div> </div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Products? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Built with enterprise-grade technology and designed for real-world business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits && benefits.map((benefit) => ( <div key={benefit && benefit.title} className="text-center"> <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <benefit && benefit.icon className="h-8 w-8" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {benefit && benefit.title} </h3> <p className="text-gray-600"> {benefit && benefit.description} </p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Flexible Pricing Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that best fits your business needs and scale as you grow. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[ { name: 'Starter',price: '$299',period: '/month',description: 'Perfect for small businesses getting started with technology solutions.',features: [ 'Basic Features','Email Support','5GB Storage','Standard Security','API Access','Documentation' ] },{ name: 'Professional',price: '$799',period: '/month',description: 'Ideal for growing businesses with advanced technology needs.',features: [ 'All Starter Features','Priority Support','50GB Storage','Advanced Security','Custom Integrations','Training Sessions' ],popular: true },{ name: 'Enterprise',price: 'Custom',period: '',description: 'Tailored solutions for large enterprises with specific requirements.',features: [ 'All Professional Features','24/7 Dedicated Support','Unlimited Storage','Custom Security','White-label Options','On-site Training' ] } ].map((plan) => ( <div key={plan && plan.name} className={`bg-white rounded-lg shadow-lg p-8 ${ plan && plan.popular ? 'ring-2 ring-blue-500 relative' : '' }`} > {plan && plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan && plan.name}</h3> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900">{plan && plan.price}</span> <span className="text-gray-600">{plan && plan.period}</span> </div> <p className="text-gray-600">{plan && plan.description}</p> </div> <ul className="space-y-3 mb-8"> {plan && plan.features.map((feature) => ( <li key={feature} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${ plan && plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900' }`}> Get Started </button> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-3xl mx-auto"> Start your journey with our technology products and see the difference they can make for your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > Get Free Demo </Link> <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > View All Services </Link> </div> </div> </section> </MainLayout> )}; export default Products;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/products/index.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
 import Head from 'next/head.ts'; import Link from 'next/link'; export default function ProductsIndex() { return ( <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white"> <Helmet> <title>Products — Zion</title> <meta name="description" content="A showcase of ready-to-run automation suites." /> </Helmet> <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"> <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" /> <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" /> <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" /> <div className="absolute inset-0 opacity-[0.08] [background: radia l-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size: 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid" /> <div className="absolute inset-0 [mask-image: radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div> <div className="absolute inset-0 beams opacity-[0.06]" /> </div> <header className="relative z-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"> <div className="text-2xl font-bold tracking-wide"> <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span> </div> <div className="hidden gap-6 md: flex text-white/80"> <Link href="/"><a>Home</a></Link> <Link href="/automation"><a>Automations</a></Link> <Link href="/services"><a>Services</a></Link> <Link href="/contact"><a>Contact</a></Link> </div> </nav> </header> <main className="relative z-10"> <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center"> <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"> <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" /> Automation suites — ready to deploy </div> <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md: tex t-6xl"><span className="gradient-text">Products</span></h1> <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p> </section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3"> {[ { title: 'SEO Guard',desc: 'Continuous audits + on-page fixes' },{ title: 'Perf Shield',desc: 'CWV budgets + asset optimization' },{ title: 'Link Sentinel',desc: 'Prevents broken links in prod' },{ title: 'Content Curator',desc: 'Keeps the homepage fresh' },{ title: 'Design Refiner',desc: 'Iterates layouts with guardrails' },{ title: 'Security Scanner',desc: 'Finds and patches risky deps' },].map((p) => ( <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: borde r-cyan-400/30"> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100" /> <h3 className="text-lg font-semibold">{p.title}</h3> <p className="mt-1 text-sm text-white/75">{p.desc}</p> </div> ))} </div> </section> <section className="mx-auto max-w-7xl px-6 pb-24"> <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"> <h3 className="text-2xl font-bold">See them in action</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p> <div className="mt-6 flex flex-wrap justify-center gap-3"> <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover: b g-white">Open Automation Hub</a></Link> <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link> </div>; </div>; </section>; </main>; </div>; )}  import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import Link from 'next/link'; import { ArrowRight,Star,Download,Eye,Code,Database,Shield,Zap,CheckCircle } from 'lucide-react'; const Products: NextPage = () => { const products = [ { title: 'ZionAI Platform',description: 'Enterprise-grade AI platform for building,deploying,and managing machine learning models at scale.',category: 'AI & Machine Learning',features: [ 'Model Training & Deployment','AutoML Capabilities','Real-time Inference','Model Monitoring','A/B Testing','API Integration' ],pricing: 'Starting at $999/month',rating: 4.8,reviews: 156,icon: Code,color: 'from-purple-500 to-pink-500',href: '/products/zion-ai-platform' },{ title: 'CloudSync Pro',description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',category: 'Cloud Solutions',features: [ 'Multi-cloud Management','Automated Migration','Cost Optimization','Security Compliance','Performance Monitoring','Disaster Recovery' ],pricing: 'Starting at $499/month',rating: 4.7,reviews: 89,icon: Database,color: 'from-blue-500 to-cyan-500',href: '/products/cloudsync-pro' },{ title: 'SecureShield',description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',category: 'Cybersecurity',features: [ 'Threat Detection','Vulnerability Assessment','Incident Response','Compliance Management','Security Analytics','24/7 Monitoring' ],pricing: 'Starting at $799/month',rating: 4.9,reviews: 203,icon: Shield,color: 'from-green-500 to-emerald-500',href: '/products/secureshield' },{ title: 'DataFlow Analytics',description: 'Real-time data analytics and business intelligence platform for actionable insights.',category: 'Data Analytics',features: [ 'Real-time Processing','Data Visualization','Predictive Analytics','Custom Dashboards','Data Integration','Advanced Reporting' ],pricing: 'Starting at $599/month',rating: 4.6,reviews: 127,icon: Zap,color: 'from-orange-500 to-red-500',href: '/products/dataflow-analytics' },{ title: 'IoT Connect Hub',description: 'Centralized IoT device management and data collection platform for smart solutions.',category: 'IoT Platforms',features: [ 'Device Management','Data Collection','Real-time Monitoring','Alert System','Scalable Architecture','API Access' ],pricing: 'Starting at $399/month',rating: 4.5,reviews: 78,icon: Eye,color: 'from-indigo-500 to-purple-500',href: '/products/iot-connect-hub' },{ title: 'BlockChain Suite',description: 'Complete blockchain development and management platform for decentralized applications.',category: 'Blockchain',features: [ 'Smart Contract Development','DApp Framework','Token Management','Blockchain Analytics','Security Auditing','Deployment Tools' ],pricing: 'Starting at $699/month',rating: 4.4,reviews: 92,icon: Shield,color: 'from-yellow-500 to-orange-500',href: '/products/blockchain-suite' } ]; const categories = [ 'All Products','AI & Machine Learning','Cloud Solutions','Cybersecurity','Data Analytics','IoT Platforms','Blockchain' ]; const benefits = [ { title: 'Enterprise Ready',description: 'Built for scale with enterprise-grade security and reliability.',icon: Shield },{ title: 'Easy Integration',description: 'Seamless integration with your existing systems and workflows.',icon: Code },{ title: '24/7 Support',description: 'Round-the-clock technical support and maintenance services.',icon: Zap },{ title: 'Custom Solutions',description: 'Tailored solutions to meet your specific business requirements.',icon: Database } ]; return ( <MainLayout title="Our Products - Zion Tech Group" description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation." > {} <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-5xl font-bold mb-6">Our Products</h1> <p className="text-xl max-w-3xl mx-auto"> Innovative technology platforms and solutions designed to transform your business operations and drive digital innovation. </p> </div> </div> </section> {} <section className="py-12 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-4"> {categories.map((category) => ( <button key={category} className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${ category === 'All Products' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50' }`} > {category} </button> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Technology Platforms </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions built with cutting-edge technology to address your most complex business challenges. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {products.map((product) => ( <div key={product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" > <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center`}> <product.icon className="h-16 w-16 text-white" /> </div> <div className="p-6"> <div className="flex items-center justify-between mb-3"> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"> {product.category} </span> <div className="flex items-center"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="ml-1 text-sm text-gray-600">{product.rating}</span> <span className="ml-1 text-sm text-gray-500">({product.reviews})</span> </div> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {product.title} </h3> <p className="text-gray-600 mb-4"> {product.description} </p> <div className="mb-4"> <p className="text-lg font-semibold text-blue-600">{product.pricing}</p> </div> <ul className="space-y-2 mb-6"> {product.features.slice(0,3).map((feature) => ( <li key={feature} className="flex items-center text-sm text-gray-600"> <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> {feature} </li> ))} </ul> <div className="flex gap-3"> <Link href={product.href} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center" > <Eye className="h-4 w-4 mr-2" /> Learn More </Link> <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center"> <Download className="h-4 w-4" /> </button> </div> </div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Products? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Built with enterprise-grade technology and designed for real-world business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits.map((benefit) => ( <div key={benefit.title} className="text-center"> <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <benefit.icon className="h-8 w-8" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Flexible Pricing Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that best fits your business needs and scale as you grow. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[ { name: 'Starter',price: '$299',period: '/month',description: 'Perfect for small businesses getting started with technology solutions.',features: [ 'Basic Features','Email Support','5GB Storage','Standard Security','API Access','Documentation' ] },{ name: 'Professional',price: '$799',period: '/month',description: 'Ideal for growing businesses with advanced technology needs.',features: [ 'All Starter Features','Priority Support','50GB Storage','Advanced Security','Custom Integrations','Training Sessions' ],popular: true },{ name: 'Enterprise',price: 'Custom',period: '',description: 'Tailored solutions for large enterprises with specific requirements.',features: [ 'All Professional Features','24/7 Dedicated Support','Unlimited Storage','Custom Security','White-label Options','On-site Training' ] } ].map((plan) => ( <div key={plan.name} className={`bg-white rounded-lg shadow-lg p-8 ${ plan.popular ? 'ring-2 ring-blue-500 relative' : '' }`} > {plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900">{plan.price}</span> <span className="text-gray-600">{plan.period}</span> </div> <p className="text-gray-600">{plan.description}</p> </div> <ul className="space-y-3 mb-8"> {plan.features.map((feature) => ( <li key={feature} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${ plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900' }`}> Get Started </button> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-3xl mx-auto"> Start your journey with our technology products and see the difference they can make for your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > Get Free Demo </Link> <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > View All Services </Link> </div> </div> </section> </MainLayout> )}; export default Products;
=======
<<<<<<< HEAD
=======
 import Head from 'next/head.ts'; import Link from 'next/link'; export default function ProductsIndex() { return ( <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white"> <Helmet> <title>Products — Zion</title> <meta name="description" content="A showcase of ready-to-run automation suites." /> </Helmet> <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"> <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" /> <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" /> <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" /> <div className="absolute inset-0 opacity-[0.08] [background: radia l-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size: 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid" /> <div className="absolute inset-0 [mask-image: radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div> <div className="absolute inset-0 beams opacity-[0.06]" /> </div> <header className="relative z-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"> <div className="text-2xl font-bold tracking-wide"> <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span> </div> <div className="hidden gap-6 md: flex text-white/80"> <Link href="/"><a>Home</a></Link> <Link href="/automation"><a>Automations</a></Link> <Link href="/services"><a>Services</a></Link> <Link href="/contact"><a>Contact</a></Link> </div> </nav> </header> <main className="relative z-10"> <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center"> <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"> <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" /> Automation suites — ready to deploy </div> <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md: tex t-6xl"><span className="gradient-text">Products</span></h1> <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p> </section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3"> {[ { title: 'SEO Guard',desc: 'Continuous audits + on-page fixes' },{ title: 'Perf Shield',desc: 'CWV budgets + asset optimization' },{ title: 'Link Sentinel',desc: 'Prevents broken links in prod' },{ title: 'Content Curator',desc: 'Keeps the homepage fresh' },{ title: 'Design Refiner',desc: 'Iterates layouts with guardrails' },{ title: 'Security Scanner',desc: 'Finds and patches risky deps' },].map((p) => ( <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: borde r-cyan-400/30"> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100" /> <h3 className="text-lg font-semibold">{p.title}</h3> <p className="mt-1 text-sm text-white/75">{p.desc}</p> </div> ))} </div> </section> <section className="mx-auto max-w-7xl px-6 pb-24"> <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"> <h3 className="text-2xl font-bold">See them in action</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p> <div className="mt-6 flex flex-wrap justify-center gap-3"> <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover: b g-white">Open Automation Hub</a></Link> <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link> </div>; </div>; </section>; </main>; </div>; )}  import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import Link from 'next/link'; import { ArrowRight,Star,Download,Eye,Code,Database,Shield,Zap,CheckCircle } from 'lucide-react'; const Products: NextPage = () => { const products = [ { title: 'ZionAI Platform',description: 'Enterprise-grade AI platform for building,deploying,and managing machine learning models at scale.',category: 'AI & Machine Learning',features: [ 'Model Training & Deployment','AutoML Capabilities','Real-time Inference','Model Monitoring','A/B Testing','API Integration' ],pricing: 'Starting at $999/month',rating: 4.8,reviews: 156,icon: Code,color: 'from-purple-500 to-pink-500',href: '/products/zion-ai-platform' },{ title: 'CloudSync Pro',description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',category: 'Cloud Solutions',features: [ 'Multi-cloud Management','Automated Migration','Cost Optimization','Security Compliance','Performance Monitoring','Disaster Recovery' ],pricing: 'Starting at $499/month',rating: 4.7,reviews: 89,icon: Database,color: 'from-blue-500 to-cyan-500',href: '/products/cloudsync-pro' },{ title: 'SecureShield',description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',category: 'Cybersecurity',features: [ 'Threat Detection','Vulnerability Assessment','Incident Response','Compliance Management','Security Analytics','24/7 Monitoring' ],pricing: 'Starting at $799/month',rating: 4.9,reviews: 203,icon: Shield,color: 'from-green-500 to-emerald-500',href: '/products/secureshield' },{ title: 'DataFlow Analytics',description: 'Real-time data analytics and business intelligence platform for actionable insights.',category: 'Data Analytics',features: [ 'Real-time Processing','Data Visualization','Predictive Analytics','Custom Dashboards','Data Integration','Advanced Reporting' ],pricing: 'Starting at $599/month',rating: 4.6,reviews: 127,icon: Zap,color: 'from-orange-500 to-red-500',href: '/products/dataflow-analytics' },{ title: 'IoT Connect Hub',description: 'Centralized IoT device management and data collection platform for smart solutions.',category: 'IoT Platforms',features: [ 'Device Management','Data Collection','Real-time Monitoring','Alert System','Scalable Architecture','API Access' ],pricing: 'Starting at $399/month',rating: 4.5,reviews: 78,icon: Eye,color: 'from-indigo-500 to-purple-500',href: '/products/iot-connect-hub' },{ title: 'BlockChain Suite',description: 'Complete blockchain development and management platform for decentralized applications.',category: 'Blockchain',features: [ 'Smart Contract Development','DApp Framework','Token Management','Blockchain Analytics','Security Auditing','Deployment Tools' ],pricing: 'Starting at $699/month',rating: 4.4,reviews: 92,icon: Shield,color: 'from-yellow-500 to-orange-500',href: '/products/blockchain-suite' } ]; const categories = [ 'All Products','AI & Machine Learning','Cloud Solutions','Cybersecurity','Data Analytics','IoT Platforms','Blockchain' ]; const benefits = [ { title: 'Enterprise Ready',description: 'Built for scale with enterprise-grade security and reliability.',icon: Shield },{ title: 'Easy Integration',description: 'Seamless integration with your existing systems and workflows.',icon: Code },{ title: '24/7 Support',description: 'Round-the-clock technical support and maintenance services.',icon: Zap },{ title: 'Custom Solutions',description: 'Tailored solutions to meet your specific business requirements.',icon: Database } ]; return ( <MainLayout title="Our Products - Zion Tech Group" description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation." > {} <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-5xl font-bold mb-6">Our Products</h1> <p className="text-xl max-w-3xl mx-auto"> Innovative technology platforms and solutions designed to transform your business operations and drive digital innovation. </p> </div> </div> </section> {} <section className="py-12 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-4"> {categories.map((category) => ( <button key={category} className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${ category === 'All Products' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50' }`} > {category} </button> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Technology Platforms </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions built with cutting-edge technology to address your most complex business challenges. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {products.map((product) => ( <div key={product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" > <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center`}> <product.icon className="h-16 w-16 text-white" /> </div> <div className="p-6"> <div className="flex items-center justify-between mb-3"> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"> {product.category} </span> <div className="flex items-center"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="ml-1 text-sm text-gray-600">{product.rating}</span> <span className="ml-1 text-sm text-gray-500">({product.reviews})</span> </div> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {product.title} </h3> <p className="text-gray-600 mb-4"> {product.description} </p> <div className="mb-4"> <p className="text-lg font-semibold text-blue-600">{product.pricing}</p> </div> <ul className="space-y-2 mb-6"> {product.features.slice(0,3).map((feature) => ( <li key={feature} className="flex items-center text-sm text-gray-600"> <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> {feature} </li> ))} </ul> <div className="flex gap-3"> <Link href={product.href} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center" > <Eye className="h-4 w-4 mr-2" /> Learn More </Link> <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center"> <Download className="h-4 w-4" /> </button> </div> </div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Products? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Built with enterprise-grade technology and designed for real-world business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits.map((benefit) => ( <div key={benefit.title} className="text-center"> <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <benefit.icon className="h-8 w-8" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Flexible Pricing Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that best fits your business needs and scale as you grow. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[ { name: 'Starter',price: '$299',period: '/month',description: 'Perfect for small businesses getting started with technology solutions.',features: [ 'Basic Features','Email Support','5GB Storage','Standard Security','API Access','Documentation' ] },{ name: 'Professional',price: '$799',period: '/month',description: 'Ideal for growing businesses with advanced technology needs.',features: [ 'All Starter Features','Priority Support','50GB Storage','Advanced Security','Custom Integrations','Training Sessions' ],popular: true },{ name: 'Enterprise',price: 'Custom',period: '',description: 'Tailored solutions for large enterprises with specific requirements.',features: [ 'All Professional Features','24/7 Dedicated Support','Unlimited Storage','Custom Security','White-label Options','On-site Training' ] } ].map((plan) => ( <div key={plan.name} className={`bg-white rounded-lg shadow-lg p-8 ${ plan.popular ? 'ring-2 ring-blue-500 relative' : '' }`} > {plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900">{plan.price}</span> <span className="text-gray-600">{plan.period}</span> </div> <p className="text-gray-600">{plan.description}</p> </div> <ul className="space-y-3 mb-8"> {plan.features.map((feature) => ( <li key={feature} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${ plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900' }`}> Get Started </button> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-3xl mx-auto"> Start your journey with our technology products and see the difference they can make for your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > Get Free Demo </Link> <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > View All Services </Link> </div> </div> </section> </MainLayout> )}; export default Products;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
 import Head from 'next/head.ts'; import Link from 'next/link'; export default function ProductsIndex() { return ( <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white"> <Helmet> <title>Products — Zion</title> <meta name="description" content="A showcase of ready-to-run automation suites." /> </Helmet> <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"> <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" /> <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" /> <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" /> <div className="absolute inset-0 opacity-[0.08] [background: radia l-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size: 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid" /> <div className="absolute inset-0 [mask-image: radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div> <div className="absolute inset-0 beams opacity-[0.06]" /> </div> <header className="relative z-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"> <div className="text-2xl font-bold tracking-wide"> <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span> </div> <div className="hidden gap-6 md: flex text-white/80"> <Link href="/"><a>Home</a></Link> <Link href="/automation"><a>Automations</a></Link> <Link href="/services"><a>Services</a></Link> <Link href="/contact"><a>Contact</a></Link> </div> </nav> </header> <main className="relative z-10"> <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center"> <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"> <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" /> Automation suites — ready to deploy </div> <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md: tex t-6xl"><span className="gradient-text">Products</span></h1> <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p> </section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3"> {[ { title: 'SEO Guard',desc: 'Continuous audits + on-page fixes' },{ title: 'Perf Shield',desc: 'CWV budgets + asset optimization' },{ title: 'Link Sentinel',desc: 'Prevents broken links in prod' },{ title: 'Content Curator',desc: 'Keeps the homepage fresh' },{ title: 'Design Refiner',desc: 'Iterates layouts with guardrails' },{ title: 'Security Scanner',desc: 'Finds and patches risky deps' },].map((p) => ( <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: borde r-cyan-400/30"> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100" /> <h3 className="text-lg font-semibold">{p.title}</h3> <p className="mt-1 text-sm text-white/75">{p.desc}</p> </div> ))} </div> </section> <section className="mx-auto max-w-7xl px-6 pb-24"> <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"> <h3 className="text-2xl font-bold">See them in action</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p> <div className="mt-6 flex flex-wrap justify-center gap-3"> <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover: b g-white">Open Automation Hub</a></Link> <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link> </div>; </div>; </section>; </main>; </div>; )}  import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import Link from 'next/link'; import { ArrowRight,Star,Download,Eye,Code,Database,Shield,Zap,CheckCircle } from 'lucide-react'; const Products: NextPage = () => { const products = [ { title: 'ZionAI Platform',description: 'Enterprise-grade AI platform for building,deploying,and managing machine learning models at scale.',category: 'AI & Machine Learning',features: [ 'Model Training & Deployment','AutoML Capabilities','Real-time Inference','Model Monitoring','A/B Testing','API Integration' ],pricing: 'Starting at $999/month',rating: 4.8,reviews: 156,icon: Code,color: 'from-purple-500 to-pink-500',href: '/products/zion-ai-platform' },{ title: 'CloudSync Pro',description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',category: 'Cloud Solutions',features: [ 'Multi-cloud Management','Automated Migration','Cost Optimization','Security Compliance','Performance Monitoring','Disaster Recovery' ],pricing: 'Starting at $499/month',rating: 4.7,reviews: 89,icon: Database,color: 'from-blue-500 to-cyan-500',href: '/products/cloudsync-pro' },{ title: 'SecureShield',description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',category: 'Cybersecurity',features: [ 'Threat Detection','Vulnerability Assessment','Incident Response','Compliance Management','Security Analytics','24/7 Monitoring' ],pricing: 'Starting at $799/month',rating: 4.9,reviews: 203,icon: Shield,color: 'from-green-500 to-emerald-500',href: '/products/secureshield' },{ title: 'DataFlow Analytics',description: 'Real-time data analytics and business intelligence platform for actionable insights.',category: 'Data Analytics',features: [ 'Real-time Processing','Data Visualization','Predictive Analytics','Custom Dashboards','Data Integration','Advanced Reporting' ],pricing: 'Starting at $599/month',rating: 4.6,reviews: 127,icon: Zap,color: 'from-orange-500 to-red-500',href: '/products/dataflow-analytics' },{ title: 'IoT Connect Hub',description: 'Centralized IoT device management and data collection platform for smart solutions.',category: 'IoT Platforms',features: [ 'Device Management','Data Collection','Real-time Monitoring','Alert System','Scalable Architecture','API Access' ],pricing: 'Starting at $399/month',rating: 4.5,reviews: 78,icon: Eye,color: 'from-indigo-500 to-purple-500',href: '/products/iot-connect-hub' },{ title: 'BlockChain Suite',description: 'Complete blockchain development and management platform for decentralized applications.',category: 'Blockchain',features: [ 'Smart Contract Development','DApp Framework','Token Management','Blockchain Analytics','Security Auditing','Deployment Tools' ],pricing: 'Starting at $699/month',rating: 4.4,reviews: 92,icon: Shield,color: 'from-yellow-500 to-orange-500',href: '/products/blockchain-suite' } ]; const categories = [ 'All Products','AI & Machine Learning','Cloud Solutions','Cybersecurity','Data Analytics','IoT Platforms','Blockchain' ]; const benefits = [ { title: 'Enterprise Ready',description: 'Built for scale with enterprise-grade security and reliability.',icon: Shield },{ title: 'Easy Integration',description: 'Seamless integration with your existing systems and workflows.',icon: Code },{ title: '24/7 Support',description: 'Round-the-clock technical support and maintenance services.',icon: Zap },{ title: 'Custom Solutions',description: 'Tailored solutions to meet your specific business requirements.',icon: Database } ]; return ( <MainLayout title="Our Products - Zion Tech Group" description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation." > {} <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-5xl font-bold mb-6">Our Products</h1> <p className="text-xl max-w-3xl mx-auto"> Innovative technology platforms and solutions designed to transform your business operations and drive digital innovation. </p> </div> </div> </section> {} <section className="py-12 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-4"> {categories.map((category) => ( <button key={category} className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${ category === 'All Products' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50' }`} > {category} </button> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Technology Platforms </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions built with cutting-edge technology to address your most complex business challenges. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {products.map((product) => ( <div key={product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" > <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center`}> <product.icon className="h-16 w-16 text-white" /> </div> <div className="p-6"> <div className="flex items-center justify-between mb-3"> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"> {product.category} </span> <div className="flex items-center"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="ml-1 text-sm text-gray-600">{product.rating}</span> <span className="ml-1 text-sm text-gray-500">({product.reviews})</span> </div> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {product.title} </h3> <p className="text-gray-600 mb-4"> {product.description} </p> <div className="mb-4"> <p className="text-lg font-semibold text-blue-600">{product.pricing}</p> </div> <ul className="space-y-2 mb-6"> {product.features.slice(0,3).map((feature) => ( <li key={feature} className="flex items-center text-sm text-gray-600"> <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> {feature} </li> ))} </ul> <div className="flex gap-3"> <Link href={product.href} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center" > <Eye className="h-4 w-4 mr-2" /> Learn More </Link> <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center"> <Download className="h-4 w-4" /> </button> </div> </div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Products? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Built with enterprise-grade technology and designed for real-world business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits.map((benefit) => ( <div key={benefit.title} className="text-center"> <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <benefit.icon className="h-8 w-8" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Flexible Pricing Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that best fits your business needs and scale as you grow. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[ { name: 'Starter',price: '$299',period: '/month',description: 'Perfect for small businesses getting started with technology solutions.',features: [ 'Basic Features','Email Support','5GB Storage','Standard Security','API Access','Documentation' ] },{ name: 'Professional',price: '$799',period: '/month',description: 'Ideal for growing businesses with advanced technology needs.',features: [ 'All Starter Features','Priority Support','50GB Storage','Advanced Security','Custom Integrations','Training Sessions' ],popular: true },{ name: 'Enterprise',price: 'Custom',period: '',description: 'Tailored solutions for large enterprises with specific requirements.',features: [ 'All Professional Features','24/7 Dedicated Support','Unlimited Storage','Custom Security','White-label Options','On-site Training' ] } ].map((plan) => ( <div key={plan.name} className={`bg-white rounded-lg shadow-lg p-8 ${ plan.popular ? 'ring-2 ring-blue-500 relative' : '' }`} > {plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900">{plan.price}</span> <span className="text-gray-600">{plan.period}</span> </div> <p className="text-gray-600">{plan.description}</p> </div> <ul className="space-y-3 mb-8"> {plan.features.map((feature) => ( <li key={feature} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${ plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900' }`}> Get Started </button> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-3xl mx-auto"> Start your journey with our technology products and see the difference they can make for your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > Get Free Demo </Link> <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > View All Services </Link> </div> </div> </section> </MainLayout> )}; export default Products;
 import Head from 'next/head.ts'; import Link from 'next/link'; export default function ProductsIndex() { return ( <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white"> <Helmet> <title>Products — Zion</title> <meta name="description" content="A showcase of ready-to-run automation suites." /> </Helmet> <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"> <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" /> <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" /> <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" /> <div className="absolute inset-0 opacity-[0.08] [background: radia l-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size: 10 0%_100%,3rem_3rem,3rem_3rem] animate-grid" /> <div className="absolute inset-0 [mask-image: radia l-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div> <div className="absolute inset-0 beams opacity-[0.06]" /> </div> <header className="relative z-10"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"> <div className="text-2xl font-bold tracking-wide"> <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span> </div> <div className="hidden gap-6 md: flex text-white/80"> <Link href="/"><a>Home</a></Link> <Link href="/automation"><a>Automations</a></Link> <Link href="/services"><a>Services</a></Link> <Link href="/contact"><a>Contact</a></Link> </div> </nav> </header> <main className="relative z-10"> <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md: p t-16 md: p b-20 text-center"> <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"> <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" /> Automation suites — ready to deploy </div> <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md: tex t-6xl"><span className="gradient-text">Products</span></h1> <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p> </section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="grid grid-cols-1 gap-5 sm: gri d-cols-2 lg: gri d-cols-3"> {[ { title: 'SEO Guard',desc: 'Continuous audits + on-page fixes' },{ title: 'Perf Shield',desc: 'CWV budgets + asset optimization' },{ title: 'Link Sentinel',desc: 'Prevents broken links in prod' },{ title: 'Content Curator',desc: 'Keeps the homepage fresh' },{ title: 'Design Refiner',desc: 'Iterates layouts with guardrails' },{ title: 'Security Scanner',desc: 'Finds and patches risky deps' },].map((p) => ( <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: borde r-cyan-400/30"> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover: opacit y-100" /> <h3 className="text-lg font-semibold">{p.title}</h3> <p className="mt-1 text-sm text-white/75">{p.desc}</p> </div> ))} </div> </section> <section className="mx-auto max-w-7xl px-6 pb-24"> <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"> <h3 className="text-2xl font-bold">See them in action</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80">Open the automation hub to view live pipelines and reports.</p> <div className="mt-6 flex flex-wrap justify-center gap-3"> <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover: b g-white">Open Automation Hub</a></Link> <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover: b g-white/10">Browse Services</a></Link> </div>; </div>; </section>; </main>; </div>; )}  import type { NextPage } from 'next'; import MainLayout from '../../components/layout/MainLayout'; import Link from 'next/link'; import { ArrowRight,Star,Download,Eye,Code,Database,Shield,Zap,CheckCircle } from 'lucide-react'; const Products: NextPage = () => { const products = [ { title: 'ZionAI Platform',description: 'Enterprise-grade AI platform for building,deploying,and managing machine learning models at scale.',category: 'AI & Machine Learning',features: [ 'Model Training & Deployment','AutoML Capabilities','Real-time Inference','Model Monitoring','A/B Testing','API Integration' ],pricing: 'Starting at $999/month',rating: 4.8,reviews: 156,icon: Code,color: 'from-purple-500 to-pink-500',href: '/products/zion-ai-platform' },{ title: 'CloudSync Pro',description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',category: 'Cloud Solutions',features: [ 'Multi-cloud Management','Automated Migration','Cost Optimization','Security Compliance','Performance Monitoring','Disaster Recovery' ],pricing: 'Starting at $499/month',rating: 4.7,reviews: 89,icon: Database,color: 'from-blue-500 to-cyan-500',href: '/products/cloudsync-pro' },{ title: 'SecureShield',description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',category: 'Cybersecurity',features: [ 'Threat Detection','Vulnerability Assessment','Incident Response','Compliance Management','Security Analytics','24/7 Monitoring' ],pricing: 'Starting at $799/month',rating: 4.9,reviews: 203,icon: Shield,color: 'from-green-500 to-emerald-500',href: '/products/secureshield' },{ title: 'DataFlow Analytics',description: 'Real-time data analytics and business intelligence platform for actionable insights.',category: 'Data Analytics',features: [ 'Real-time Processing','Data Visualization','Predictive Analytics','Custom Dashboards','Data Integration','Advanced Reporting' ],pricing: 'Starting at $599/month',rating: 4.6,reviews: 127,icon: Zap,color: 'from-orange-500 to-red-500',href: '/products/dataflow-analytics' },{ title: 'IoT Connect Hub',description: 'Centralized IoT device management and data collection platform for smart solutions.',category: 'IoT Platforms',features: [ 'Device Management','Data Collection','Real-time Monitoring','Alert System','Scalable Architecture','API Access' ],pricing: 'Starting at $399/month',rating: 4.5,reviews: 78,icon: Eye,color: 'from-indigo-500 to-purple-500',href: '/products/iot-connect-hub' },{ title: 'BlockChain Suite',description: 'Complete blockchain development and management platform for decentralized applications.',category: 'Blockchain',features: [ 'Smart Contract Development','DApp Framework','Token Management','Blockchain Analytics','Security Auditing','Deployment Tools' ],pricing: 'Starting at $699/month',rating: 4.4,reviews: 92,icon: Shield,color: 'from-yellow-500 to-orange-500',href: '/products/blockchain-suite' } ]; const categories = [ 'All Products','AI & Machine Learning','Cloud Solutions','Cybersecurity','Data Analytics','IoT Platforms','Blockchain' ]; const benefits = [ { title: 'Enterprise Ready',description: 'Built for scale with enterprise-grade security and reliability.',icon: Shield },{ title: 'Easy Integration',description: 'Seamless integration with your existing systems and workflows.',icon: Code },{ title: '24/7 Support',description: 'Round-the-clock technical support and maintenance services.',icon: Zap },{ title: 'Custom Solutions',description: 'Tailored solutions to meet your specific business requirements.',icon: Database } ]; return ( <MainLayout title="Our Products - Zion Tech Group" description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation." > {} <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center"> <h1 className="text-5xl font-bold mb-6">Our Products</h1> <p className="text-xl max-w-3xl mx-auto"> Innovative technology platforms and solutions designed to transform your business operations and drive digital innovation. </p> </div> </div> </section> {} <section className="py-12 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-4"> {categories.map((category) => ( <button key={category} className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${ category === 'All Products' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50' }`} > {category} </button> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Technology Platforms </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions built with cutting-edge technology to address your most complex business challenges. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {products.map((product) => ( <div key={product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" > <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center`}> <product.icon className="h-16 w-16 text-white" /> </div> <div className="p-6"> <div className="flex items-center justify-between mb-3"> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"> {product.category} </span> <div className="flex items-center"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="ml-1 text-sm text-gray-600">{product.rating}</span> <span className="ml-1 text-sm text-gray-500">({product.reviews})</span> </div> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {product.title} </h3> <p className="text-gray-600 mb-4"> {product.description} </p> <div className="mb-4"> <p className="text-lg font-semibold text-blue-600">{product.pricing}</p> </div> <ul className="space-y-2 mb-6"> {product.features.slice(0,3).map((feature) => ( <li key={feature} className="flex items-center text-sm text-gray-600"> <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> {feature} </li> ))} </ul> <div className="flex gap-3"> <Link href={product.href} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center" > <Eye className="h-4 w-4 mr-2" /> Learn More </Link> <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center"> <Download className="h-4 w-4" /> </button> </div> </div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Products? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Built with enterprise-grade technology and designed for real-world business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits.map((benefit) => ( <div key={benefit.title} className="text-center"> <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <benefit.icon className="h-8 w-8" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-4xl font-bold text-gray-900 mb-4"> Flexible Pricing Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that best fits your business needs and scale as you grow. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {[ { name: 'Starter',price: '$299',period: '/month',description: 'Perfect for small businesses getting started with technology solutions.',features: [ 'Basic Features','Email Support','5GB Storage','Standard Security','API Access','Documentation' ] },{ name: 'Professional',price: '$799',period: '/month',description: 'Ideal for growing businesses with advanced technology needs.',features: [ 'All Starter Features','Priority Support','50GB Storage','Advanced Security','Custom Integrations','Training Sessions' ],popular: true },{ name: 'Enterprise',price: 'Custom',period: '',description: 'Tailored solutions for large enterprises with specific requirements.',features: [ 'All Professional Features','24/7 Dedicated Support','Unlimited Storage','Custom Security','White-label Options','On-site Training' ] } ].map((plan) => ( <div key={plan.name} className={`bg-white rounded-lg shadow-lg p-8 ${ plan.popular ? 'ring-2 ring-blue-500 relative' : '' }`} > {plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900">{plan.price}</span> <span className="text-gray-600">{plan.period}</span> </div> <p className="text-gray-600">{plan.description}</p> </div> <ul className="space-y-3 mb-8"> {plan.features.map((feature) => ( <li key={feature} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${ plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900' }`}> Get Started </button> </div> ))} </div> </div> </section> {} <section className="py-20 bg-blue-600 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl mb-8 max-w-3xl mx-auto"> Start your journey with our technology products and see the difference they can make for your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > Get Free Demo </Link> <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors" > View All Services </Link> </div> </div> </section> </MainLayout> )}; export default Products;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
