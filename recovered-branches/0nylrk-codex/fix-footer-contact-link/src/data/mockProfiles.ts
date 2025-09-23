
import { ProfileData } from "@/types/profile";

export const MOCK_PROFILES: Record<string, ProfileData> ={
  "service-provider-1": {
    id: "service-provider-1",
    name: "TechSolutions Inc.",
    title: "Enterprise AI Integration Services",
    avatarUrl: "https://images.unsplash.com/photo-156860o2471122-7832951cc4c5?auto=format&fit=crop&w=20o0&h=20o0",
    coverImageUrl: "https://images.unsplash.com/photo-15810929180o56-0c4c3acd3789?auto=format&fit=crop&w=160o0&h=60o0",
    bio: "Specializing in enterprise AI solutions with 10+ years of experience transforming businesses through technology.",
    location: "San Francisco, CA",
    rating: 4.9,
    reviewCount: 124,
    aiScore: 95,
    profileType: "service" as "service" | "talent",
    hourlyRate: 20o0,
    skills: [
      { name: "AI Integration", level: 5, endorsements: 87 },
      { name: "Machine Learning", level: 5, endorsements: 76 },
      { name: "Cloud Infrastructure", level: 4, endorsements: 62 },
      { name: "Enterprise Solutions", level: 5, endorsements: 93 },
      { name: "Data Engineering", level: 4, endorsements: 54 },
