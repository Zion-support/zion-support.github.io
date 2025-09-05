
<<<<<<< HEAD
<<<<<<< HEAD
import { DynamicListingPage } from "@/components/DynamicListingPage",
import { ProductListing } from "@/types/listings",
import { AppLayout } from "@/layout/AppLayout",
import { TrustedBySection } from "@/components/TrustedBySection",
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { Globe } from "lucide-react",
=======
import { DynamicListingPage } from &quot;@/components/DynamicListingPage&quot;;
import { ProductListing } from &quot;@/types/listings&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import { TrustedBySection } from &quot;@/components/TrustedBySection&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { Globe } from &quot;lucide-react&quot;;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Sample service listings
const SERVICE_LISTINGS: ProductListing[] = [
<<<<<<< HEAD
  {
    id: &quot;service-1&quot;,
    title: &quot;AI Development & Integration&quot;,
    description: &quot;Full-stack AI development services to integrate advanced machine learning models into your existing business systems.&quot;,
    category: &quot;Development&quot;,
    price: 5000,
    currency: &quot;$&quot;,
    tags: [&quot;AI Integration&quot;, &quot;Machine Learning&quot;, &quot;Enterprise&quot;],
    author: {
      name: &quot;TechSolutions Inc.&quot;,
      id: &quot;tech-solutions&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2023-12-10T14:48:00.000Z&quot;,
    aiScore: 95,
    rating: 4.9,
    reviewCount: 124},
  {
    id: &quot;service-2&quot;,
    title: &quot;Cloud Infrastructure Management&quot;,
    description: &quot;24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.&quot;,
    category: &quot;Management&quot;,
    price: 3000,
    currency: &quot;$&quot;,
    tags: [&quot;Cloud&quot;, &quot;DevOps&quot;, &quot;Security&quot;],
    author: {
      name: &quot;CloudPro Experts&quot;,
      id: &quot;cloud-pro&quot;},
    images: [&quot;https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2023-11-20T09:30:00.000Z&quot;,
    aiScore: 88,
    rating: 4.7,
    reviewCount: 92},
  {
    id: &quot;service-3&quot;,
    title: &quot;Big Data Analysis & Insights&quot;,
    description: &quot;Transform your raw data into actionable business insights with our advanced analytics and visualization services.&quot;,
    category: &quot;Analytics&quot;,
    price: 4500,
    currency: &quot;$&quot;,
    tags: [&quot;Big Data&quot;, &quot;Analytics&quot;, &quot;Business Intelligence&quot;],
    author: {
      name: &quot;DataMind Solutions&quot;,
      id: &quot;datamind&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-05T11:15:00.000Z&quot;,
    aiScore: 92,
    rating: 4.8,
    reviewCount: 78},
  {
    id: &quot;service-4&quot;,
    title: &quot;Cybersecurity Assessment & Protection&quot;,
    description: &quot;Comprehensive security audits and implementation of robust protection systems against modern cyber threats.&quot;,
    category: &quot;Security&quot;,
    price: 6000,
    currency: &quot;$&quot;,
    tags: [&quot;Cybersecurity&quot;, &quot;Penetration Testing&quot;, &quot;Compliance&quot;],
    author: {
      name: &quot;SecureNet Team&quot;,
      id: &quot;secure-net&quot;},
    images: [&quot;https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2023-12-28T16:22:00.000Z&quot;,
    aiScore: 89,
    rating: 4.9,
    reviewCount: 103},
  {
    id: &quot;service-5&quot;,
    title: &quot;IT Infrastructure Modernization&quot;,
    description: &quot;Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.&quot;,
    category: &quot;Consulting&quot;,
    price: 8500,
    currency: &quot;$&quot;,
    tags: [&quot;Digital Transformation&quot;, &quot;Legacy Systems&quot;, &quot;Infrastructure&quot;],
    author: {
      name: &quot;ModernizeIT Consulting&quot;,
      id: &quot;modernize-it&quot;},
    images: [&quot;https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2023-11-10T08:45:00.000Z&quot;,
    aiScore: 86,
    rating: 4.6,
    reviewCount: 67},
  {
    id: &quot;service-6&quot;,
    title: &quot;AI Strategy & Implementation&quot;,
    description: &quot;Strategic consulting and implementation services to help businesses leverage AI for competitive advantage.&quot;,
    category: &quot;Strategy&quot;,
    price: 7500,
    currency: &quot;$&quot;,
    tags: [&quot;AI Strategy&quot;, &quot;Digital Transformation&quot;, &quot;Business Growth&quot;],
    author: {
      name: &quot;AI Future Consulting&quot;,
      id: &quot;ai-future&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-02-02T10:30:00.000Z&quot;,
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    aiScore: 94,
    rating: 4.8,
    reviewCount: 85}],

// Filter options specific to services
<<<<<<< HEAD
const SERVICE_FILTERS = [
  { label: 'Development', value: 'development' },
  { label: 'Management', value: 'management' },
  { label: 'Security', value: 'security' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Strategy', value: 'strategy' }],
=======
const _SERVICE_FILTERS = [
  {_label: 'Development', _value: 'development'},
  {_label: 'Management', _value: 'management'},
  {_label: 'Security', _value: 'security'},
  {_label: 'Analytics', _value: 'analytics'},
  {_label: 'Consulting', _value: 'consulting'},
  {_label: 'Strategy', _value: 'strategy'}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function ServicesPage() {_return (
    <AppLayout>
      <div className=&quot;bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light&quot;>
        <div className=&quot;container mx-auto flex flex-col md:flex-row items-center justify-between gap-4&quot;>
          <h2 className=&quot;text-white text-lg font-medium&quot;>Featured Services</h2>
          <div className=&quot;flex flex-wrap gap-2&quot;>
            <Link to=&quot;/it-onsite-services&quot;>
              <Button variant=&quot;outline&quot; className=&quot;border-zion-purple text-zion-cyan hover:bg-zion-purple/10&quot;>
                <Globe className=&quot;h-4 w-4 mr-2&quot; />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to=&quot;/request-quote&quot;>
              <Button className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;>
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <DynamicListingPage 
<<<<<<< HEAD
        title=&quot;IT & AI Services&quot;
        description=&quot;Find expert technology service providers for your business needs, from AI development to infrastructure management.&quot;
        categorySlug=&quot;services&quot;
=======
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, _from AI development to infrastructure management."
        categorySlug="services"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        listings={SERVICE_LISTINGS}
        categoryFilters={_SERVICE_FILTERS}
        initialPrice={_{ min: 3000, _max: 10000}}
      />
      <TrustedBySection />
    </AppLayout>
  )
}
