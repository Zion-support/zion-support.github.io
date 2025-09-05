
// Sample talent listings
const TALENT_LISTINGS: ProductListing[] = [
  {_id: "talent-1", _title: "Senior AI Engineer", _description: "Expert in machine learning algorithms and neural networks with 8+ years of experience building production-ready AI systems.", _category: "Engineering", _price: 150, _currency: "$", _tags: ["Machine Learning", _"TensorFlow", _"Python", _"Computer Vision"], _author: {
      name: "Alexandra Chen", _id: "alexandra-chen", _avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1573497019236-61938a1a2cd2?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-15T10:30:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 43},
  {_id: "talent-2", _title: "DevOps Specialist", _description: "Infrastructure automation expert specializing in containerization, _CI/CD pipelines, _and cloud-native architectures.", _category: "DevOps", _price: 135, _currency: "$", _tags: ["Kubernetes", _"Docker", _"AWS", _"Terraform"], _author: {
      name: "Michael Reynolds", _id: "michael-reynolds", _avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-22T14:15:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 37},
  {_id: "talent-3", _title: "Data Scientist", _description: "PhD in Statistics with extensive experience in predictive modeling, _data visualization, _and business intelligence solutions.", _category: "Data Science", _price: 145, _currency: "$", _tags: ["Statistical Analysis", _"Python", _"R", _"Tableau"], _author: {
      name: "Priya Sharma", _id: "priya-sharma"},
    images: ["https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:45:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 29},
  {_id: "talent-4", _title: "Cybersecurity Expert", _description: "Certified security professional with 10+ years experience in threat detection, _incident response, _and security architecture.", _category: "Security", _price: 165, _currency: "$", _tags: ["Penetration Testing", _"Security Analysis", _"CISSP", _"Risk Management"], _author: {
      name: "James Wilson", _id: "james-wilson", _avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-05T16:20:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 31},
  {_id: "talent-5", _title: "Full-Stack Developer", _description: "Versatile developer proficient in both frontend and backend technologies with a focus on building scalable web applications.", _category: "Development", _price: 125, _currency: "$", _tags: ["React", _"Node.js", _"TypeScript", _"MongoDB"], _author: {
      name: "David Martinez", _id: "david-martinez"},
    images: ["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:30:00.000Z",
    aiScore: 89,
    rating: 4.8,
    reviewCount: 42},
  {_id: "talent-6", _title: "AI Ethics Consultant", _description: "Specialized in ensuring AI systems are developed and deployed in an ethical, _transparent and fair manner.", _category: "Consulting", _price: 180, _currency: "$", _tags: ["AI Ethics", _"Governance", _"Responsible AI", _"Policy"], _author: {
      name: "Sarah Johnson", _id: "sarah-johnson", _avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-10-15T13:45:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 21}];

// Filter options specific to talents
const _TALENT_FILTERS = [
  {_label: 'Engineering', _value: 'engineering'},
  {_label: 'Data Science', _value: 'data-science'},
  {_label: 'DevOps', _value: 'devops'},
  {_label: 'Security', _value: 'security'},
  {_label: 'Development', _value: 'development'},
  {_label: 'Consulting', _value: 'consulting'}];

export default function TalentsPage() {_return (
    <DynamicListingPage 
      title="AI & Tech Talent"
      description="Connect with highly skilled professionals in AI, _software development, _data science, _and more."
      categorySlug="talents"
      listings={TALENT_LISTINGS}
      categoryFilters={_TALENT_FILTERS}
      initialPrice={_{ min: 100, _max: 200}}
    />
  );
}
