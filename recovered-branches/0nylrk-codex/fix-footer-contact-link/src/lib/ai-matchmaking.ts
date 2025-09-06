
<<<<<<< HEAD
// AI Matchmaking utility functions
<<<<<<< HEAD
export interface MatchResultItem {
=======

export interface MatchResultItem {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  title: string;
  description: string;
  category: string;
  price?: number;

  skills?: string[]

  image?: string
}
<<<<<<< HEAD
export interface MatchResult {
=======

export interface MatchResult {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  item: MatchResultItem;
  score: number;

  matchedSkills: string[]

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
    price: 120

    skills: ["Machine Learning", "Computer Vision", "TensorFlow", "Python"]
  }
  {
    id: "service-1";
    title: "AI Model Training";
    description: "Custom AI model training service with data preparation and deployment";
    category: "Services - AI Development";

    price: 5000

    skills: ["Machine Learning", "Model Training", "AI Deployment"]
  }
  {
    id: "equipment-1";
    title: "NVIDIA A100 GPU Server";
    description: "High-performance GPU server for AI model training and inference";
    category: "Equipment - Hardware";

    price: 15000

    skills: ["GPU Computing", "High Performance", "AI Hardware"]
  }
];
// Function to find matches based on query and type
export async function findMatches(
  query: string;

  type: string = ""
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
// AI Matchmaking utility functions;
export interface MatchResultItem {;
  id: string,;
  title: string,;
  description: string,;
  category: string,;
  price?: number,;
  skills?: string[],;
  image?: string;
}
;
export interface MatchResult {;
  item: MatchResultItem,;
  score: number,;
  matchedSkills: string[],;
  reason: string;
}

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Sample data for testing when API is not available
const sampleData: MatchResultItem[] = [
  {
    id: "talent-1",
    title: "Senior AI Engineer",
    description: "Experienced AI engineer with expertise in machine learning and computer vision",
    category: "Talent - Engineering",
    price: 120,
    skills: ["Machine Learning", "Computer Vision", "TensorFlow", "Python"]
  },
  {
    id: "service-1",
    title: "AI Model Training",
    description: "Custom AI model training service with data preparation and deployment",
    category: "Services - AI Development",
    price: 5000,
    skills: ["Machine Learning", "Model Training", "AI Deployment"]
  },
  {
    id: "equipment-1",
    title: "NVIDIA A100 GPU Server",
    description: "High-performance GPU server for AI model training and inference",
    category: "Equipment - Hardware",
    price: 15000,
    skills: ["GPU Computing", "High Performance", "AI Hardware"]
  }
],

// Function to find matches based on query and type
<<<<<<< HEAD
export async function findMatches(;
  query: string;
=======
export async function findMatches(
  query: string,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  type: string = "",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  limit: number = 5
): Promise<MatchResult[]> {
  try {
    // In production, we would call an API endpoint here
    // For now, we'll simulate a response with sample data
    // Simulate API call delay
<<<<<<< HEAD
    await new Promise(resolve => setTimeout(resolve, 1000));
=======
    await new Promise(resolve => setTimeout(resolve, 1000)),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Filter by type if provided
    let filteredItems = sampleData,
    if (type && type !== "all") {
      filteredItems = sampleData.filter(item =>
        item.category.toLowerCase().includes(type.toLowerCase())
      )
    }
    // Sort by simulated relevance (random for now)
    const matches: MatchResult[] = filteredItems.map(item => ({
      item
      score: Math.floor(Math.random() * 40) + 60, // Random score between 60 and 99
<<<<<<< HEAD
      matchedSkills: item.skills?.slice(0, 2) |[];
      reason: `This ${item.category.split(' - ')[0].toLowerCase()} matches your needs based on the provided description.`
    }));
    // Sort by score
    return matches.sort((a, b) => b.score - a.score).slice(0, limit)
  } catch (error) {
    console.error("Error in matchmaking:", error);

    return []
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
}
=======
      matchedSkills: item.skills?.slice(0, 2) || [],
      reason: `This ${item.category.split(' - ')[0].toLowerCase()} matches your needs based on the provided description.`
    })),
    
    // Sort by score
    return matches.sort((a, b) => b.score - a.score).slice(0, limit)
  } catch (error) {
    console.error("Error in matchmaking:", error),
    return []
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
;
// Sample data for testing when API is not available;
const sampleData: MatchResultItem[] = [;
  {;
    id: "talent-1",;
    title: "Senior AI Engineer",;
    description: "Experienced AI engineer with expertise in machine learning and computer vision",;
    category: "Talent - Engineering",;
    price: 120,;
    skills: ["Machine Learning", "Computer Vision", "TensorFlow", "Python"];
  },;
  {;
    id: "service-1",;
    title: "AI Model Training",;
    description: "Custom AI model training service with data preparation and deployment",;
    category: "Services - AI Development",;
    price: 5000,;
    skills: ["Machine Learning", "Model Training", "AI Deployment"];
  },;
  {;
    id: "equipment-1",;
    title: "NVIDIA A100 GPU Server",;
    description: "High-performance GPU server for AI model training and inference",;
    category: "Equipment - Hardware",;
    price: 15000,;
    skills: ["GPU Computing", "High Performance", "AI Hardware"];
  }
],;
// Function to find matches based on query and type;
export async function findMatches(;
  query: string,;
  type: string = "",;
  limit: number = 5;
): Promise<MatchResult[]> {;
  try {;
    // In production, we would call an API endpoint here;
    // For now, we'll simulate a response with sample data;
    // Simulate API call delay;
    await new Promise(resolve => setTimeout(resolve, 1000)),;
    // Filter by type if provided;
    let filteredItems = sampleData,;
    if (type && type !== "all") {;
      filteredItems = sampleData.filter(item =>;
        item.category.toLowerCase().includes(type.toLowerCase());
      );
    }
;
    // Sort by simulated relevance (random for now);
    const matches: MatchResult[] = filteredItems.map(item => ({;
      item,;
      score: Math.floor(Math.random() * 40) + 60, // Random score between 60 and 99;
      matchedSkills: item.skills?.slice(0, 2) || [],;
      reason: `This ${item.category.split(' - ')[0].toLowerCase()} matches your needs based on the provided description.`;
    })),;
    // Sort by score;
    return matches.sort((a, b) => b.score - a.score).slice(0, limit);
  } catch (error) {;
    console.error("Error in matchmaking:", error);
    return [];
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
