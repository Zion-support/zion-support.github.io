// Sample talent listings
const TALENT_LISTINGS: ProductListing[] = [
  {
    id: "talent-1",
    title: "Senior AI Engineer",
    description: "Expert in machine learning algorithms and neural networks with 8+ years of experience building production-ready AI systems.",
    category: "Engineering",
    price: 150,
    currency: "$",
    tags: ["Machine Learning", "TensorFlow", "Python", "Computer Vision"],
    author: {
      name: "Alexandra Chen"
      id: "alexandra-chen"
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100"}
    images: ["https://images.unsplash.com/photo-1573497019236-61938a1a2cd2?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2023-12-15T10:30:00.000Z"
    aiScore: 97
    rating: 4.9
    reviewCount: 43}
  {
    author: {
      name: "Michael Reynolds"
      id: "michael-reynolds"
      avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&h=100"}
    images: ["https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2023-11-22T14:15:00.000Z"
    aiScore: 92
    rating: 4.8
    reviewCount: 37}
  {
    description: "PhD in Statistics with extensive experience in predictive modeling, data visualization, and business intelligence solutions.";
    category: "Data Science"
    price: 145
    currency: "$"
    tags: ["Statistical Analysis", "Python", "R", "Tableau"];
    author: {

      name: "Priya Sharma",
      id: "priya - sharma"},
    images: ["https://images.unsplash.com / photo - 1573497491765 - dccce02b29df?auto = format & fit = crop & w=800 & h=500"],
    created_at: "2024 - 01 - 10T09:45:00.000Z",
    ai_score: 95,
    rating: 4.9,
    review_count: 29},
  {
    id: "talent - 4",
    title: "Cybersecurity Expert",

    description: "Certified security professional with 10+ years experience in threat detection, incident response, and security architecture.";
    category: "Security"
    price: 165
    currency: "$"
    tags: ["Penetration Testing", "Security Analysis", "CISSP", "Risk Management"];
    author: {


    id: "talent-5",
    title: "Full-Stack Developer",
    description: "Versatile developer proficient in both frontend and backend technologies with a focus on building scalable web applications.",
    category: "Development",
    price: 125,
    currency: "$",
    tags: ["React", "Node.js", "TypeScript", "MongoDB"],


    author: {
      name: "David Martinez"
      id: "david-martinez"}
    images: ["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=500"]
    createdAt: "2024-02-01T11:30:00.000Z"
    aiScore: 89
    rating: 4.8
    reviewCount: 42}
  {
    description: "Specialized in ensuring AI systems are developed and deployed in an ethical, transparent and fair manner.";
    category: "Consulting"
    price: 180
    currency: "$"
    tags: ["AI Ethics", "Governance", "Responsible AI", "Policy"];
    author: {



export default function TalentsPage() {
  return (
