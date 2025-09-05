

// Sample service listings
const SERVICE_LISTINGS: ProductListing[] = [
  {_id: "service-1", _title: "AI Development & Integration", _description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems.", _category: "Development", _price: 5000, _currency: "$", _tags: ["AI Integration", _"Machine Learning", _"Enterprise"], _author: {
      name: "TechSolutions Inc.", _id: "tech-solutions", _avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-10T14:48:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 124},
  {_id: "service-2", _title: "Cloud Infrastructure Management", _description: "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, _security, _and cost efficiency.", _category: "Management", _price: 3000, _currency: "$", _tags: ["Cloud", _"DevOps", _"Security"], _author: {
      name: "CloudPro Experts", _id: "cloud-pro"},
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-20T09:30:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 92},
  {_id: "service-3", _title: "Big Data Analysis & Insights", _description: "Transform your raw data into actionable business insights with our advanced analytics and visualization services.", _category: "Analytics", _price: 4500, _currency: "$", _tags: ["Big Data", _"Analytics", _"Business Intelligence"], _author: {
      name: "DataMind Solutions", _id: "datamind", _avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T11:15:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 78},
  {_id: "service-4", _title: "Cybersecurity Assessment & Protection", _description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats.", _category: "Security", _price: 6000, _currency: "$", _tags: ["Cybersecurity", _"Penetration Testing", _"Compliance"], _author: {
      name: "SecureNet Team", _id: "secure-net"},
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-28T16:22:00.000Z",
    aiScore: 89,
    rating: 4.9,
    reviewCount: 103},
  {_id: "service-5", _title: "IT Infrastructure Modernization", _description: "Transform your legacy systems into modern, _agile infrastructure that supports innovation and business growth.", _category: "Consulting", _price: 8500, _currency: "$", _tags: ["Digital Transformation", _"Legacy Systems", _"Infrastructure"], _author: {
      name: "ModernizeIT Consulting", _id: "modernize-it"},
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-10T08:45:00.000Z",
    aiScore: 86,
    rating: 4.6,
    reviewCount: 67},
  {_id: "service-6", _title: "AI Strategy & Implementation", _description: "Strategic consulting and implementation services to help businesses leverage AI for competitive advantage.", _category: "Strategy", _price: 7500, _currency: "$", _tags: ["AI Strategy", _"Digital Transformation", _"Business Growth"], _author: {
      name: "AI Future Consulting", _id: "ai-future", _avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T10:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 85}];

// Filter options specific to services
const _SERVICE_FILTERS = [
  {_label: 'Development', _value: 'development'},
  {_label: 'Management', _value: 'management'},
  {_label: 'Security', _value: 'security'},
  {_label: 'Analytics', _value: 'analytics'},
  {_label: 'Consulting', _value: 'consulting'},
  {_label: 'Strategy', _value: 'strategy'}];

export default function ServicesPage() {_return (
    <AppLayout>
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <DynamicListingPage 
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, _from AI development to infrastructure management."
        categorySlug="services"
        listings={SERVICE_LISTINGS}
        categoryFilters={_SERVICE_FILTERS}
        initialPrice={_{ min: 3000, _max: 10000}}
      />
      <TrustedBySection />
    </AppLayout>
  );
}
