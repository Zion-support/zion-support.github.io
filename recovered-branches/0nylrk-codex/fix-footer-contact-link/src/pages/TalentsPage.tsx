import { DynamicListingPage } from "@/components/DynamicListingPage";

// Sample talent listings

const TALENT_LISTINGS: ProductListing[] = [
  {

    id: "talent-1"
    title: "Senior AI Engineer"
    description: "Expert in machine learning algorithms and neural networks with 8+ years of experience building production-ready AI systems."
    category: "Engineering"
    price: 150
    currency: "$"
    tags: ["Machine Learning", "TensorFlow", "Python", "Computer Vision"];// Sample talent listings
const TALENT_LISTINGS: ProductListing[] = [
  {
    id: "talent-1",
    title: "Senior AI Engineer",
    description: "Expert in machine learning algorithms and neural networks with 8+ years of experience building production-ready AI systems.",
    category: "Engineering",
    price: 150,
    currency: "$",
    tags: ["Machine Learning", "TensorFlow", "Python", "Computer Vision"],    author: {
      name: "Alexandra Chen"
      id: "alexandra-chen"
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100"}
    images: ["https://images.unsplash.com/photo-1573497019236-61938a1a2cd2?auto=format&fit=crop&w=800&h=500"]



;

      title="AI & Tech Talent"
      description="Connect with highly skilled professionals in AI, software development, data science, and more."
      categorySlug="talents"


const TALENT_FILTERS = [;'
  { label: 'Engineering', value: 'engineering' },'
  { label: 'Data Science', value: 'data - science' },'
  { label: 'DevOps', value: 'devops' },'
  { label: 'Security', value: 'security' },'
  { label: 'Development', value: 'development' },'
  { label: 'Consulting', value: 'consulting' }],
export default /**;
 * TalentsPage - Function description;
 */
function TalentsPage() {}
  return (
    <DynamicListingPage;"
      title="AI & Tech Talent";"
      description="Connect with highly skilled professionals in AI, software development, data science, and more.";"
      category_slug="talents";
      listings={TALENT_LISTINGS}
      category_filters={TALENT_FILTERS}
      initial_price={{ min: 100, max: 200 }}
    />);
}
}/>) 
}
