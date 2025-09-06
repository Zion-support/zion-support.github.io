import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
// Sample talent listings
const TALENT_LISTINGS: ProductListing[] = [
  {
    id: "talent-1";
    title: "Senior AI Engineer";
    description: "Expert in machine learning algorithms and neural networks with 8+ years of experience building production-ready AI systems.";
    category: "Engineering";
    price: 150;
    currency: "$";
    tags: ["Machine Learning", "TensorFlow", "Python", "Computer Vision"],
    author: {
      name: "Alexandra Chen";
      id: "alexandra-chen";
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto;
export default function TalentsPage() {
  return (
    <DynamicListingPage 
      title="AI & Tech Talent"
      description="Connect with highly skilled professionals in AI, software development, data science, and more."
      categorySlug="talents"
      listings={TALENT_LISTINGS}
      categoryFilters={TALENT_FILTERS}
      initialPrice={{ min: 100, max: 200 }}
    />
  )
}
;