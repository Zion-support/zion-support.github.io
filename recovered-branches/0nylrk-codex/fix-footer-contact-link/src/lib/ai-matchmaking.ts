
// AI Matchmaking utility functions
export interface MatchResultItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price?: number;
<<<<<<< HEAD
  skills?: string[];
=======
  skills?: string[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  image?: string
}
export interface MatchResult {
  item: MatchResultItem;
  score: number;
<<<<<<< HEAD
  matchedSkills: string[];
=======
  matchedSkills: string[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  reason: string
}
// Sample data for testing when API is not available
const sampleData: MatchResultItem[] = [
  {
    id: "talent-1";
    title: "Senior AI Engineer";
    description: "Experienced AI engineer with expertise in machine learning and computer vision";
    category: "Talent - Engineering";
<<<<<<< HEAD
    price: 120;
=======
    price: 120
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    skills: ["Machine Learning", "Computer Vision", "TensorFlow", "Python"]
  }
  {
    id: "service-1";
    title: "AI Model Training";
    description: "Custom AI model training service with data preparation and deployment";
    category: "Services - AI Development";
<<<<<<< HEAD
    price: 5000;
=======
    price: 5000
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    skills: ["Machine Learning", "Model Training", "AI Deployment"]
  }
  {
    id: "equipment-1";
    title: "NVIDIA A100 GPU Server";
    description: "High-performance GPU server for AI model training and inference";
    category: "Equipment - Hardware";
<<<<<<< HEAD
    price: 15000;
=======
    price: 15000
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    skills: ["GPU Computing", "High Performance", "AI Hardware"]
  }
];
// Function to find matches based on query and type
export async function findMatches(
  query: string;
<<<<<<< HEAD
  type: string;
=======
  type: string = ""
  limit: number = 5
): Promise<MatchResult[]> {
  try {
    // In production, we would call an API endpoint here
    // For now, we'll simulate a response with sample data
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Filter by type if provided
    let filteredItems = sampleData;
    if (type && type !== "all") {
      filteredItems = sampleData.filter(item =>
        item.category.toLowerCase().includes(type.toLowerCase())
      )
    }
    // Sort by simulated relevance (random for now)
    const matches: MatchResult[] = filteredItems.map(item => ({
      item
      score: Math.floor(Math.random() * 40) + 60, // Random score between 60 and 99
      matchedSkills: item.skills?.slice(0, 2) |[];
      reason: `This ${item.category.split(' - ')[0].toLowerCase()} matches your needs based on the provided description.`
    }));
    // Sort by score
    return matches.sort((a, b) => b.score - a.score).slice(0, limit)
  } catch (error) {
    console.error("Error in matchmaking:", error);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    return []
  }
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
