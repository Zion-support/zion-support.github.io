import React from "react"
import { motion } from "framer-motion"
import { ;
  FileText,;
  Shield, ;
  Zap, ;
  CheckCircle, ;
  BarChart3, ;
  Sparkles, ;
  ArrowRight, ;
  Brain,;
  Cpu,;
  Database,;
  Globe,;
  Rocket,;
  Target,;
  TrendingUp,;
  Layers,;
  Scale,;
  Gavel,;
  BookOpen,;
  Search,;
  Clock,;
  DollarSign,;
  Phone,;
  Mail,;
  MapPin,;
  Building,;
  Home,;
  Heart;
} from "lucide-react"
import { SEO } from "@/components/SEO"
export default function AILegalDocumentAutomation() {;
  const features = [;
    'AI-powered contract analysis and generationLegal document template automation',;
    'Compliance checking and risk assessmentMulti-jurisdiction legal framework support',;
    'Real-time legal research and citationAutomated contract negotiation assistance',;
    'Legal document version control and trackingIntegration with legal practice management systems'
  ],;

  const benefits = [;
    'Reduce legal document creation time by 85%Minimize legal risks and compliance errors'
    'Standardize legal processes across organizationsEnable faster contract negotiations and closings'
    'Reduce legal costs by 40-60%Improve accuracy and consistency in legal documents'
  ];
  const useCases = [;
    {;
      industry: 'Corporate Law',description: 'Automated contract generation and management for businesses',icon: Building,applications: ['M&A contractsEmployment agreements', 'Vendor contractsNDAs']
    },;
    {;
      industry: 'Real Estate',description: 'Streamlined property transaction documentation',icon: Home,applications: ['Purchase agreementsLease contracts', 'Title documentsClosing paperwork']
    },;
    {;
      industry: 'Healthcare',description: 'Compliance-focused medical practice documentation',icon: Heart,applications: ['Patient consent formsHIPAA compliance', 'Medical contractsRegulatory filings']
    },;
    {;
      industry: 'Startups & SMEs',description: 'Cost-effective legal document automation',icon: Rocket,applications: ['Founder agreementsInvestment documents', 'IP protectionEmployment contracts']
    };
  ],;

  const pricing = [;
    {;
      plan: 'Starter',price: '$299',period: '/month',features: [;
        'Up to 50 documents/monthBasic contract templates'
        'Standard compliance checksEmail support',;
        'Basic legal research tools'
      ],;
      recommended: false;
    };
    {;
      plan: 'Professional',price: '$799',period: '/month',features: [;
        'Up to 200 documents/monthAdvanced contract templates'
        'Multi-jurisdiction supportPriority support',;
        'Advanced legal researchContract negotiation assistance'
      ],;
      recommended: true;
    };
    {;
      plan: 'Enterprise',price: '$1,999',;
      period: '/month',features: [;
        'Unlimited documentsCustom template creation'
        'White-label solutions24/7 dedicated support',;
        'API accessCustom integrations'
      ],;
      recommended: false;
    };
  ];
  const legalTechnologies = [;
    { name: 'Clio', url: 'https://[^;]*
    { name: 'LexisNexis', url: 'https://[^;]*
    { name: 'Westlaw', url: 'https://[^;]*
    { name: 'DocuSign', url: 'https://[^;]*
    { name: 'ContractPodAi', url: 'https://[^;]*
  ];
  const complianceFrameworks = [;
    'GDPR (EU Data Protection)CCPA (California Privacy)',;
    'SOX (Sarbanes-Oxley)HIPAA (Healthcare Privacy)',;
    'GLBA (Financial Privacy)ISO 27001 (Information Security)'
  ],;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <SEO ;
        title="AI Legal Document Automation - Zion Tech Group"
        description="Transform your legal practice with AI-powered document automation, contract generation, and compliance management. Reduce costs and improve efficiency."
      />;

      {/* Hero Section */};
      <section className="relative py-20 sm:py-32 overflow-hidden">;
        <[^>]*/>
        <div className="relative container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <div className="flex justify-center mb-6">;
              <div className="p-3 bg-blue-500/20 rounded-2xl">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">;
              AI Legal Document;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Automation</[^>]*>
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">;
              Revolutionize your legal practice with AI-powered document automation, intelligent contract generation;
              and automated compliance management. Save time, reduce costs, and minimize legal risks.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a ;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call +1 302 464 0950;
              </[^>]*>
              <a ;
                href="mailto:kleber@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Get Quote;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">;
              Powerful Legal Automation Features;
            </[^>]*>
            <p className="text-slate-400 max-w-2xl mx-auto">;
              Our AI platform combines cutting-edge technology with legal expertise to deliver ;
              comprehensive document automation solutions.;
            </[^>]*>
          </[^>]*>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="font-semibold text-lg mb-2">{feature}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-20 bg-slate-900/50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">;
              Transform Your Legal Practice;
            </[^>]*>
            <p className="text-slate-400 max-w-2xl mx-auto">;
              Experience unprecedented efficiency and accuracy in legal document management.;
            </[^>]*>
          </[^>]*>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">;
            {benefits.map((benefit, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, x: -20 }};
                animate={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <p className="text-slate-300">{benefit}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">;
              Industry-Specific Solutions;
            </[^>]*>
            <p className="text-slate-400 max-w-2xl mx-auto">;
              Tailored legal automation solutions for various industries and practice areas.;
            </[^>]*>
          </[^>]*>

          <div className="grid gap-8 md:grid-cols-2">;
            {useCases.map((useCase, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center mb-6">;
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">;
                    <[^>]*/>
                  </[^>]*>
                  <div>;
                    <h3 className="text-xl font-semibold">{useCase.industry}</[^>]*>
                    <p className="text-slate-400 text-sm">{useCase.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="space-y-2">;
                  {useCase.applications.map((app, appIndex) => (;
                    <div key={appIndex} className="flex items-center text-sm text-slate-300">;
                      <[^>]*/>
                      {app};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Section */};
      <section className="py-20 bg-slate-900/50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">;
              Transparent Pricing Plans;
            </[^>]*>
            <p className="text-slate-400 max-w-2xl mx-auto">;
              Choose the plan that best fits your legal practice needs and scale as you grow.;
            </[^>]*>
          </[^>]*>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">;
            {pricing.map((plan, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className={`relative bg-slate-800/50 backdrop-blur border rounded-xl p-8 ${;
                  plan.recommended ;
                    ? 'border-blue-500/50 bg-blue-500/5' ;
                    : 'border-slate-700/50'
                }`};
              >;
                {plan.recommended && (;&& (; (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">;
                      Recommended;
                    </[^>]*>
                  </[^>]*>
                )};
                ;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold mb-2">{plan.plan}</[^>]*>
                  <div className="flex items-baseline justify-center">;
                    <span className="text-4xl font-bold">{plan.price}</[^>]*>
                    <span className="text-slate-400 ml-1">{plan.period}</[^>]*>
                  </[^>]*>
                </[^>]*>

                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-start">;
                      <[^>]*/>
                      <span className="text-slate-300">{feature}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>

                <a;
                  href="tel:+13024640950"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${;
                    plan.recommended
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-400 hover:to-purple-500'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`};
                >;
                  Get Started;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Technology Integration Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">;
              Seamless Technology Integration;
            </[^>]*>
            <p className="text-slate-400 max-w-2xl mx-auto">;
              Integrate with your existing legal technology stack and workflow systems.;
            </[^>]*>
          </[^>]*>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">;
            {legalTechnologies.map((tech, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, scale: 0.9 }};
                animate={{ opacity: 1, scale: 1 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <h3 className="font-semibold text-lg mb-2">{tech.name}</[^>]*>
                <p className="text-slate-400 text-sm mb-4">{tech.category}</[^>]*>
                <a;
                  href={tech.url};
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[^"]*"
                >;
                  Visit Website;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Compliance Section */};
      <section className="py-20 bg-slate-900/50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">;
              Comprehensive Compliance Support;
            </[^>]*>
            <p className="text-slate-400 max-w-2xl mx-auto">;
              Stay compliant with major regulatory frameworks and industry standards.;
            </[^>]*>
          </[^>]*>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">;
            {complianceFrameworks.map((framework, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, x: -20 }};
                animate={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <[^>]*/>
                <span className="text-slate-300">{framework}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">;
              Ready to Transform Your Legal Practice?;
            </[^>]*>
            <p className="text-xl text-slate-300 mb-8">;
              Join hundreds of law firms and legal departments that have already ;
              revolutionized their document management with AI automation.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
              <a ;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call +1 302 464 0950;
              </[^>]*>
              <a ;
                href="mailto:kleber@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Schedule Demo;
              </[^>]*>
            </[^>]*>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 max-w-2xl mx-auto">;
              <h3 className="font-semibold text-lg mb-3">Contact Information</[^>]*>
              <div className="grid gap-3 text-sm text-slate-300">;
                <div className="flex items-center justify-center">;
                  <[^>]*/>
                  <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</[^>]*>
                </[^>]*>
                <div className="flex items-center justify-center">;
                  <[^>]*/>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</[^>]*>
                </[^>]*>
                <div className="flex items-center justify-center">;
                  <[^>]*/>
                  <span>364 E Main St STE 1008, Middletown DE 19709</[^>]*>
                </[^>]*>
                <div className="flex items-center justify-center">;
                  <[^>]*/>
                  <a href="https: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">ziontechgroup.com</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};