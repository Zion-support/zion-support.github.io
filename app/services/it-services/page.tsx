export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          We help you build, secure, and scale your IT infrastructure for the modern digital world.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            title="Cloud Migration & Strategy"
            description="Complete cloud transformation with AWS, Azure, and GCP expertise"
            features={["Multi-cloud strategy", "Lift & shift migration", "Cloud-native architecture", "Cost optimization", "Security compliance"]}
            price="$15,000-75,000"
            icon="☁️"
          />
            title="DevOps & CI/CD"
            description="Automated deployment pipelines and infrastructure as code"
            features={["CI/CD pipelines", "Infrastructure as Code", "Container orchestration", "Monitoring & alerting", "Automated testing"]}
            price="$10,000-40,000"
            icon="🔄"
            title="Cybersecurity Solutions"
            description="Comprehensive security services to protect your digital assets"
            features={["Security assessment", "Penetration testing", "Zero Trust architecture", "Compliance management", "Incident response"]}
            price="$8,000-35,000"
            icon="🔒"
            title="Infrastructure Management"
            description="24/7 monitoring and management of your IT infrastructure"
            features={["Server management", "Database administration", "Backup & recovery", "Performance tuning", "Capacity planning"]}
            price="$5,000-25,000"
            icon="🖥️"
            title="Network & Connectivity"
            description="Secure and reliable network infrastructure design and implementation"
            features={["Network design", "VPN solutions", "Load balancing", "CDN setup", "Bandwidth optimization"]}
            price="$6,000-20,000"
            icon="🌐"

        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ITProcessStep
            step="1"
            title="Assessment & Planning"
            description="Comprehensive analysis of your current IT infrastructure and requirements"
            step="2"
            title="Design & Architecture"
            description="Create scalable, secure, and cost-effective IT solutions"
            step="3"
            title="Implementation"
            description="Deploy solutions with minimal downtime and maximum efficiency"
            step="4"
            title="Support & Optimization"
            description="Ongoing maintenance, monitoring, and continuous improvement"

        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITTechStack
            title="Cloud Platforms"
            technologies={["AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean", "Vultr"]}
            title="DevOps Tools"
            technologies={["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform"]}
            title="Security & Monitoring"
            technologies={["Splunk", "ELK Stack", "Prometheus", "Grafana", "Wazuh"]}

        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Solutions</h2>
          <IndustrySolution
            title="Healthcare IT"
            description="HIPAA-compliant infrastructure and secure patient data management"
            solutions={["HIPAA compliance", "Patient data security", "Telemedicine platforms", "Medical imaging systems"]}
            icon="🏥"
            title="Financial Services"
            description="Secure, compliant infrastructure for financial institutions"
            solutions={["PCI DSS compliance", "Fraud detection systems", "High-frequency trading", "Risk management"]}
            icon="💰"
            title="E-commerce"
            description="Scalable infrastructure for high-traffic online stores"
            solutions={["Auto-scaling", "CDN optimization", "Payment processing", "Inventory management"]}
            icon="🛒"
            title="Manufacturing"
            description="IoT and industrial automation infrastructure"
            solutions={["IoT platforms", "Predictive maintenance", "Supply chain optimization", "Quality control"]}
            icon="🏭"
            title="Education"
            description="Learning management systems and educational technology"
            solutions={["LMS platforms", "Virtual classrooms", "Student data management", "Online assessments"]}
            icon="🎓"
            title="Government"
            description="Secure, compliant infrastructure for government agencies"
            solutions={["FedRAMP compliance", "Secure communications", "Data sovereignty", "Disaster recovery"]}
            icon="🏛️"

      <Pricing />

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our IT Services?</h2>
          <ITBenefitCard
            title="24/7 Support"
            description="Round-the-clock monitoring and support for your critical systems"
            icon="🛡️"
            title="Cost Optimization"
            description="Reduce IT costs by up to 40% through efficient resource management"
            title="Security First"
            description="Enterprise-grade security measures to protect your data and systems"
            icon="🔐"
            title="Scalable Solutions"
            description="Infrastructure that grows with your business needs"
            icon="📈"
            title="Expert Team"
            description="Certified professionals with deep industry experience"
            icon="👨‍💻"
            title="Proactive Monitoring"
            description="Prevent issues before they impact your business"
            icon="📊"

      <CTASection />
  );
}

function ITServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-2xl font-bold text-blue-600 mb-2">{price}</div>
        <div className="text-sm text-gray-500">Starting price</div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>

function ITProcessStep({ step, title, description }: { 
  step: string; 
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>

function ITTechStack({ title, technologies }: { 
  technologies: string[]; 
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>

function IndustrySolution({ title, description, solutions, icon }: { 
  solutions: string[]; 
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <p className="text-gray-600 mb-4">{description}</p>
        {solutions.map((solution) => (
          <li key={solution} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {solution}

function ITBenefitCard({ title, description, icon }: { 
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">

function Pricing() {
