<<<<<<< HEAD

<<<<<<< HEAD
// AI Matchmaking utility functions
export interface MatchResultItem {
=======
// AI Matchmaking utility functions;

export interface MatchResultItem {
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



export interface MatchResultItem {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface MatchResultItem {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  id: string;
  title: string;
  description: string;
  category: string;
  price?: number;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface MatchResult {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface MatchResult {

export interface MatchResult {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface MatchResult {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  item: MatchResultItem;
  score: number;
  {
    id: "talent - 1";
    title: "Senior AI Engineer";
    description: "Experienced AI engineer with expertise in machine learning and computer vision";
    category: "Talent - Engineering";
<<<<<<< HEAD

<<<<<<< HEAD
    price: 120
=======
    price: 120,
    skills: ["Machine Learning", "Computer Vision", "TensorFlow", "Python"];
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  }
  {
    id: "service - 1";
    title: "AI Model Training";
    description: "Custom AI model training service with data preparation and deployment";
    category: "Services - AI Development";
  }
  {
    id: "equipment - 1";
    title: "NVIDIA A100 GPU Server";
    description: "High - performance GPU server for AI model training and inference";
    category: "Equipment - Hardware";
<<<<<<< HEAD



<<<<<<< HEAD
  type: string = ""
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
export async function findMatches(;
  query: string;
export async function findMatches(
  query: string,
  type: string = "",
  limit: number = 5
): Promise<MatchResult[]> {
  try {
    // In production, we would call an API endpoint here
    // For now, we'll simulate a response with sample data
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    await new Promise(resolve => setTimeout(resolve, 1000)),
    
    // Filter by type if provided
    let filteredItems = sampleData;
    if (type && type !== "all") {

      filteredItems = sampleData && sampleData.filter(item => 
        item && item.category.toLowerCase().includes(type && type.toLowerCase())

      )
    }
    // Sort by simulated relevance (random for now)
    const matches: MatchResult[] = filteredItems.map(item => ({
      item
      score: Math.floor(Math.random() * 40) + 60, // Random score between 60 and 99
      matchedSkills: item.skills?.slice(0, 2) |[];
      reason: `This ${item.category.split(' - ')[0].toLowerCase()} matches your needs based on the provided description.`
=======
      )
    }
    // Sort by simulated relevance (random for now)
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    }));
    // Sort by score
    return matches && matches.sort((a, b) => b && b.score - a && a.score).slice(0, limit)
  } catch (error) {
    return []
  }
<<<<<<< HEAD
}
      matchedSkills: item.skills?.slice(0, 2) || [],
      reason: `This ${item.category.split(' - ')[0].toLowerCase()} matches your needs based on the provided description.`
    })),
    
    // Sort by score
    return matches.sort((a, b) => b.score - a.score).slice(0, limit)
  } catch (error) {
    console.error("Error in matchmaking:", error),
    return []
<<<<<<< HEAD
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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
];
;
// Function to find matches based on query and type;
export async function find_matches (
  query: string;
  type: string = "",
  limit: number = 5): Promise < MatchResult[]> {
  try {
    // In production, we would call an API endpoint here;
    // For now, we'll simulate a response with sample data;
    // Simulate API call delay;
    await new Promise (resolve => set_timeout (resolve, 1000));
;
    // Filter by type if provided;
    let filtered_items = sample_data;
    // Check condition
if ( {) {
  $2
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
      filtered_items = sample_data.filter (item =>;
        item.category.toLowerCase ().includes (type.toLowerCase ()));
    }
    // Sort by simulated relevance (random for now);
    const matches: MatchResult[] = filtered_items.map (item => ({
      item,
      score: Math.floor (Math.random () * 40) + 60, // Random score between 60 and 99;
      matched_skills: item.skills?.slice (0, 2) || [];
      reason: `This ${item.category.split (' - ')[0].toLowerCase ()} matches your needs based on the provided description.`;
    }));
;
