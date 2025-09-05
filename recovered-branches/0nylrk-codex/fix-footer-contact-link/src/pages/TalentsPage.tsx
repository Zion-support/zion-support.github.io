<<<<<<< HEAD
<<<<<<< HEAD
import { DynamicListingPage } from "@/components/DynamicListingPage",
import { ProductListing } from "@/types/listings",
=======
import { DynamicListingPage } from &quot;@/components/DynamicListingPage&quot;;
import { ProductListing } from &quot;@/types/listings&quot;;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Sample talent listings
const TALENT_LISTINGS: ProductListing[] = [
<<<<<<< HEAD
  {
    id: &quot;talent-1&quot;,
    title: &quot;Senior AI Engineer&quot;,
    description: &quot;Expert in machine learning algorithms and neural networks with 8+ years of experience building production-ready AI systems.&quot;,
    category: &quot;Engineering&quot;,
    price: 150,
    currency: &quot;$&quot;,
    tags: [&quot;Machine Learning&quot;, &quot;TensorFlow&quot;, &quot;Python&quot;, &quot;Computer Vision&quot;],
    author: {
      name: &quot;Alexandra Chen&quot;,
      id: &quot;alexandra-chen&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1573497019236-61938a1a2cd2?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2023-12-15T10:30:00.000Z&quot;,
    aiScore: 97,
    rating: 4.9,
    reviewCount: 43},
  {
    id: &quot;talent-2&quot;,
    title: &quot;DevOps Specialist&quot;,
    description: &quot;Infrastructure automation expert specializing in containerization, CI/CD pipelines, and cloud-native architectures.&quot;,
    category: &quot;DevOps&quot;,
    price: 135,
    currency: &quot;$&quot;,
    tags: [&quot;Kubernetes&quot;, &quot;Docker&quot;, &quot;AWS&quot;, &quot;Terraform&quot;],
    author: {
      name: &quot;Michael Reynolds&quot;,
      id: &quot;michael-reynolds&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2023-11-22T14:15:00.000Z&quot;,
    aiScore: 92,
    rating: 4.8,
    reviewCount: 37},
  {
    id: &quot;talent-3&quot;,
    title: &quot;Data Scientist&quot;,
    description: &quot;PhD in Statistics with extensive experience in predictive modeling, data visualization, and business intelligence solutions.&quot;,
    category: &quot;Data Science&quot;,
    price: 145,
    currency: &quot;$&quot;,
    tags: [&quot;Statistical Analysis&quot;, &quot;Python&quot;, &quot;R&quot;, &quot;Tableau&quot;],
    author: {
      name: &quot;Priya Sharma&quot;,
      id: &quot;priya-sharma&quot;},
    images: [&quot;https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-10T09:45:00.000Z&quot;,
    aiScore: 95,
    rating: 4.9,
    reviewCount: 29},
  {
    id: &quot;talent-4&quot;,
    title: &quot;Cybersecurity Expert&quot;,
    description: &quot;Certified security professional with 10+ years experience in threat detection, incident response, and security architecture.&quot;,
    category: &quot;Security&quot;,
    price: 165,
    currency: &quot;$&quot;,
    tags: [&quot;Penetration Testing&quot;, &quot;Security Analysis&quot;, &quot;CISSP&quot;, &quot;Risk Management&quot;],
    author: {
      name: &quot;James Wilson&quot;,
      id: &quot;james-wilson&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2023-12-05T16:20:00.000Z&quot;,
    aiScore: 91,
    rating: 4.7,
    reviewCount: 31},
  {
    id: &quot;talent-5&quot;,
    title: &quot;Full-Stack Developer&quot;,
    description: &quot;Versatile developer proficient in both frontend and backend technologies with a focus on building scalable web applications.&quot;,
    category: &quot;Development&quot;,
    price: 125,
    currency: &quot;$&quot;,
    tags: [&quot;React&quot;, &quot;Node.js&quot;, &quot;TypeScript&quot;, &quot;MongoDB&quot;],
    author: {
      name: &quot;David Martinez&quot;,
      id: &quot;david-martinez&quot;},
    images: [&quot;https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-02-01T11:30:00.000Z&quot;,
    aiScore: 89,
    rating: 4.8,
    reviewCount: 42},
  {
    id: &quot;talent-6&quot;,
    title: &quot;AI Ethics Consultant&quot;,
    description: &quot;Specialized in ensuring AI systems are developed and deployed in an ethical, transparent and fair manner.&quot;,
    category: &quot;Consulting&quot;,
    price: 180,
    currency: &quot;$&quot;,
    tags: [&quot;AI Ethics&quot;, &quot;Governance&quot;, &quot;Responsible AI&quot;, &quot;Policy&quot;],
    author: {
      name: &quot;Sarah Johnson&quot;,
      id: &quot;sarah-johnson&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2023-10-15T13:45:00.000Z&quot;,
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    aiScore: 94,
    rating: 4.9,
    reviewCount: 21}],

// Filter options specific to talents
<<<<<<< HEAD
const TALENT_FILTERS = [
  { label: 'Engineering', value: 'engineering' },
  { label: 'Data Science', value: 'data-science' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Security', value: 'security' },
  { label: 'Development', value: 'development' },
  { label: 'Consulting', value: 'consulting' }],
=======
const _TALENT_FILTERS = [
  {_label: 'Engineering', _value: 'engineering'},
  {_label: 'Data Science', _value: 'data-science'},
  {_label: 'DevOps', _value: 'devops'},
  {_label: 'Security', _value: 'security'},
  {_label: 'Development', _value: 'development'},
  {_label: 'Consulting', _value: 'consulting'}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function TalentsPage() {_return (
    <DynamicListingPage 
<<<<<<< HEAD
      title=&quot;AI & Tech Talent&quot;
      description=&quot;Connect with highly skilled professionals in AI, software development, data science, and more.&quot;
      categorySlug=&quot;talents&quot;
=======
      title="AI & Tech Talent"
      description="Connect with highly skilled professionals in AI, _software development, _data science, _and more."
      categorySlug="talents"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      listings={TALENT_LISTINGS}
      categoryFilters={_TALENT_FILTERS}
      initialPrice={_{ min: 100, _max: 200}}
    />
  )
}
