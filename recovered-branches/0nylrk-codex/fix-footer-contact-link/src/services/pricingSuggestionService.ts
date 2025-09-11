


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


;
// Define types for the pricing recommendation;
export interface PricingSuggestion {
  min_rate: number;
  max_rate: number;
  confidence: "High" | "Medium" | "Low",
  explanation: string;

}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface ClientBudgetParams {
  job_title: string;
  category: string;
  timeline?: string;


<<<<<<< HEAD
<<<<<<< HEAD

// Define types for the pricing recommendation
export interface PricingSuggestion {
export interface PricingSuggestion {;
  minRate: number;
  maxRate: number;

  confidence: "High" | "Medium" | "Low"

  explanation: string
}
export interface ClientBudgetParams {

export interface ClientBudgetParams {;
  jobTitle: string;
  category: string;
  timeline?: string;

  scope?: string

  experienceLevel?: string
}
export interface TalentRateParams {

export interface TalentRateParams {;
  skills: string[];

  yearsExperience: number

  location?: string
}

// Define types for the pricing recommendation
export interface PricingSuggestion {
  minRate: number,
  maxRate: number,
  confidence: "High" | "Medium" | "Low",
  explanation: string
;
// Define types for the pricing recommendation;
export interface PricingSuggestion {;
  minRate: number,;
  maxRate: number,;
  confidence: "High" | "Medium" | "Low",;
  explanation: string;
}
;
export interface ClientBudgetParams {;
  jobTitle: string,;
  category: string,;
  timeline?: string,;
  scope?: string,;
  experienceLevel?: string;
}
;
export interface TalentRateParams {;
  skills: string[],;
  yearsExperience: number,;
  location?: string;
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Mock function to generate suggestions
// In production, this would call an AI service or API
export async function getClientBudgetSuggestion(params: ClientBudgetParams): Promise<PricingSuggestion> {
  try {
    // This would be replaced with an actual API call to an AI model
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // For now, we'll simulate a response based on job category;
    const { jobTitle, category } = params;
    // For now, we'll simulate a response based on job category
    const { jobTitle, category } = params;
    // Simulate API call delay

    await new Promise(resolve => setTimeout(resolve, 1000));
    // Basic logic to determine budget range based on category
    let minRate = 25;
    let maxRate = 50;
    let confidence: "High" | "Medium" | "Low" = "Medium";
    if (category === "development") {
      minRate = 40;
      maxRate = 80
    const { jobTitle, category } = params,
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000)),
    
    // Basic logic to determine budget range based on category
    let minRate = 25,
    let maxRate = 50,
    let confidence: "High" | "Medium" | "Low" = "Medium",
    
    if (category === "development") {
      minRate = 40,
      maxRate = 80,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    // For now, we'll simulate a response based on job category


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      confidence = "High"
    } else if (category === "design") {
      minRate = 35;
      maxRate = 70;
      confidence = "High"
    } else if (category === "marketing") {
      minRate = 30;
      maxRate = 60;
      confidence = "Medium"
    } else if (category === "data") {
      minRate = 45;
      maxRate = 90;
      confidence = "High"
<<<<<<< HEAD
<<<<<<< HEAD
      confidence = "High"
    } else if (category === "design") {
      minRate = 35,
      maxRate = 70,
      confidence = "High"
    } else if (category === "marketing") {
      minRate = 30,
      maxRate = 60,
      confidence = "Medium"
    } else if (category === "data") {
      minRate = 45,
      maxRate = 90,
      confidence = "High"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } else {
      minRate = 25,
      maxRate = 50,
      confidence = "Low"
    }
<<<<<<< HEAD
}
export interface ClientBudgetParams {
  job_title: string;
  category: string;
  timeline?: string;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  scope?: string,
  experience_level?: string;
}
export interface TalentRateParams {
  skills: string[];
  years_experience: number,
  location?: string;
}
// Mock function to generate suggestions;
// In production, this would call an AI service or API;
export async function getClientBudgetSuggestion (params: ClientBudgetParams): Promise < PricingSuggestion> {
  try {
    // This would be replaced with an actual API call to an AI model;
    // For now, we'll simulate a response based on job category;
    const { job_title, category } = params;
;
    // Simulate API call delay;
    await new Promise (resolve => set_timeout (resolve, 1000));
;
    // Basic logic to determine budget range based on category;
    let min_rate = 25;
    let max_rate = 50;
    let confidence: "High" | "Medium" | "Low" = "Medium";
;
    // Check condition
if ( {) {
  $2
}
      min_rate = 40;
      max_rate = 80,
      confidence = "High";
    } else // Check condition
if ( {) {
  $2
}
      min_rate = 35;
      max_rate = 70;
      confidence = "High";
    } else // Check condition
if ( {) {
  $2
}
      min_rate = 30;
      max_rate = 60;
      confidence = "Medium";
    } else // Check condition
if ( {) {
  $2
}
      min_rate = 45;
      max_rate = 90;
      confidence = "High";
    } else {
      min_rate = 25;
      max_rate = 50;
      confidence = "Low";
    }
    const lowercaseTitle = jobTitle && jobTitle.toLowerCase();
    if (lowercaseTitle && lowercaseTitle.includes("senior") || lowercaseTitle && lowercaseTitle.includes("lead")) {
=======


    


    // Adjust based on job title keywords

    const lowercaseTitle = jobTitle && jobTitle.toLowerCase();
    if (lowercaseTitle && lowercaseTitle.includes("senior") || lowercaseTitle && lowercaseTitle.includes("lead")) {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      minRate += 20;
      maxRate += 30
    } else if (lowercaseTitle && lowercaseTitle.includes("junior")) {
      minRate -= 10;
      maxRate -= 15;
<<<<<<< HEAD

      minRate = Math && Math.max(minRate, 15), // Ensure minimum doesn't go too low
    }
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`;
    // Adjust based on job title keywords;
    const lowercase_title = job_title.toLowerCase ();
    if (|| lowercase_title.includes ("lead")) {) {
  $2
}
      min_rate += 20;
      max_rate += 30;
    } else if () {) {
  $2
}
      min_rate -= 10;
      max_rate -= 15;
      min_rate = Math.max (min_rate, 15), // Ensure minimum doesn't go too low;
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low


<<<<<<< HEAD
    
    // Adjust based on job title keywords
    const lowercaseTitle = jobTitle.toLowerCase();
    if (lowercaseTitle.includes("senior") |lowercaseTitle.includes("lead")) {
      minRate += 20;
      maxRate += 30
    } else if (lowercaseTitle.includes("junior")) {
      minRate -= 10;
      maxRate -= 15;
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low
    }
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    // Adjust based on job title keywords;
    const lowercaseTitle = jobTitle.toLowerCase(),;
    if (lowercaseTitle.includes("senior") || lowercaseTitle.includes("lead")) {;
      minRate += 20,;
      maxRate += 30;
    } else if (lowercaseTitle.includes("junior")) {;
      minRate -= 10,;
      maxRate -= 15,;
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`,
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    }
    // Generate explanation;
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${job_title}", we recommend a budget range of $${min_rate}-$${max_rate}/hour. This aligns with current market trends for similar projects.`;
;
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return {
      min_rate;
      max_rate;
      confidence;
      explanation;
    }
  } catch (error) {
<<<<<<< HEAD


      minRate: 30,
      maxRate: 60,
      confidence: "Low",


      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."
    }
  }
}





export async function getTalentRateSuggestion(params: TalentRateParams): Promise<PricingSuggestion> {
  try {
<<<<<<< HEAD
    
    return {
      minRate,
      maxRate,
      confidence,
      explanation
    }
  } catch (error) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error("Error generating budget suggestion:", error),
    // Return a fallback suggestion
    return {
      minRate: 30;
      maxRate: 60;
      confidence: "Low"
      minRate: 30,
      maxRate: 60,
      confidence: "Low",
      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."
    }
<<<<<<< HEAD
      confidence: "Low",
      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."
    };
  }
}

export async function getTalentRateSuggestion(params: TalentRateParams): Promise<PricingSuggestion> {
  try {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
}





export async function getTalentRateSuggestion(params: TalentRateParams): Promise<PricingSuggestion> {
  try {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const { skills, yearsExperience, location } = params;
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Base rate calculation based on years of experience
    let baseRate = 25 + (yearsExperience * 5);
    // Adjust for in-demand skills
    const inDemandSkills = ['reactawsmachine learningblockchainaidevopskubernetes'];
<<<<<<< HEAD
<<<<<<< HEAD
    const hasInDemandSkills = skills && skills.some(skill => 
      inDemandSkills && inDemandSkills.some(demandSkill => skill && skill.toLowerCase().includes(demandSkill))
    const hasInDemandSkills = skills.some(skill =>
      inDemandSkills.some(demandSkill => skill.toLowerCase().includes(demandSkill))
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const hasInDemandSkills = skills && skills.some(skill => 
      inDemandSkills && inDemandSkills.some(demandSkill => skill && skill.toLowerCase().includes(demandSkill))

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
    if (hasInDemandSkills) {
      baseRate += 15
    }
    // Location adjustment
<<<<<<< HEAD
<<<<<<< HEAD
    let locationFactor = 1.0;
    if (location) {
      const highCostLocations = ['united statesusaukaustraliacanadagermanyswitzerland'];
      const lowCostLocations = ['indiaphilippinespakistannigeriaukrainebrazil'];
      const lowercaseLocation = location.toLowerCase();
      if (highCostLocations.some(loc => lowercaseLocation.includes(loc))) {
        locationFactor = 1.2
      } else if (lowCostLocations.some(loc => lowercaseLocation.includes(loc))) {
        locationFactor = 0.8
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    let locationFactor = 1 && 1.0;
    if (location) {
      const highCostLocations = ['united statesusaukaustraliacanadagermanyswitzerland'];
      const lowCostLocations = ['indiaphilippinespakistannigeriaukrainebrazil'];
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      
      const lowercaseLocation = location && location.toLowerCase();
=======

      
      const lowercaseLocation = location && location.toLowerCase();
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (highCostLocations && highCostLocations.some(loc => lowercaseLocation && lowercaseLocation.includes(loc))) {
        locationFactor = 1 && 1.2
      } else if (lowCostLocations && lowCostLocations.some(loc => lowercaseLocation && lowercaseLocation.includes(loc))) {
        locationFactor = 0 && 0.8
<<<<<<< HEAD


<<<<<<< HEAD
      }
    }
    const minRate = Math.round(baseRate * locationFactor * 0.9);
    const maxRate = Math.round(baseRate * locationFactor * 1.2);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
export async function getTalentRateSuggestion(params: TalentRateParams): Promise<PricingSuggestion> {;
  try {;
    const { skills, yearsExperience, location } = params,;
    // Simulate API call delay;
    await new Promise(resolve => setTimeout(resolve, 1000)),;
    // Base rate calculation based on years of experience;
    let baseRate = 25 + (yearsExperience * 5),;
    // Adjust for in-demand skills;
    const inDemandSkills = ['reactawsmachine learningblockchainaidevopskubernetes'],;
    const hasInDemandSkills = skills.some(skill =>;
      inDemandSkills.some(demandSkill => skill.toLowerCase().includes(demandSkill));
    ),;
    if (hasInDemandSkills) {;
      baseRate += 15;
    }
;
    // Location adjustment;
    let locationFactor = 1.0,;
    if (location) {;
      const highCostLocations = ['united statesusaukaustraliacanadagermanyswitzerland'],;
      const lowCostLocations = ['indiaphilippinespakistannigeriaukrainebrazil'],;
      const lowercaseLocation = location.toLowerCase(),;
      if (highCostLocations.some(loc => lowercaseLocation.includes(loc))) {;
        locationFactor = 1.2;
      } else if (lowCostLocations.some(loc => lowercaseLocation.includes(loc))) {;
        locationFactor = 0.8;
<<<<<<< HEAD
<<<<<<< HEAD
      }
    }
    
    const minRate = Math.round(baseRate * locationFactor * 0.9),
    const maxRate = Math.round(baseRate * locationFactor * 1.2),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      }
    }
    const minRate = Math && Math.round(baseRate * locationFactor * 0 && 0.9);
    const maxRate = Math && Math.round(baseRate * locationFactor * 1 && 1.2);
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
    }
    
    const minRate = Math && Math.round(baseRate * locationFactor * 0 && 0.9);
    const maxRate = Math && Math.round(baseRate * locationFactor * 1 && 1.2);
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Determine confidence
    let confidence: "High" | "Medium" | "Low" = "Medium"
    if (yearsExperience > 3 && hasInDemandSkills && location) {
      confidence = "High"
    } else if (!location |yearsExperience < 1) {
      confidence = "Low"
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    // Generate explanation
    let explanation = `Based on ${yearsExperience} years of experience`;
    if (hasInDemandSkills) {
      explanation += ` and your in-demand skills (${skills.join()})`
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    const minRate = Math.round(baseRate * locationFactor * 0.9),;
    const maxRate = Math.round(baseRate * locationFactor * 1.2),;
    // Determine confidence;
    let confidence: "High" | "Medium" | "Low" = "Medium",;
    if (yearsExperience > 3 && hasInDemandSkills && location) {;
      confidence = "High";
    } else if (!location || yearsExperience < 1) {;
      confidence = "Low";
    }
;
    // Generate explanation;
    let explanation = `Based on ${yearsExperience} years of experience`,;
    if (hasInDemandSkills) {;
      explanation += ` and your in-demand skills (${skills.join()})`;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    if (location) {
      explanation += `, considering market rates in ${location}`
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    


    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`;
<<<<<<< HEAD
    console.error ("Error generating budget suggestion:", error);
    // Return a fallback suggestion;
    return {
    
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`;
    return {
=======
=======
    console.error ("Error generating budget suggestion:", error);
    // Return a fallback suggestion;
    return {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      minRate;
      maxRate;
      confidence;
      explanation
<<<<<<< HEAD
      min_rate: 30;
      max_rate: 60;
      confidence: "Low",
      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget.";

;
// Define types for the pricing recommendation;
export interface PricingSuggestion {;
  minRate:number,;
  maxRate:number,;
  confidence:"High" | "Medium" | "Low",;
  explanation:string;
}
;
export interface ClientBudgetParams {;
  jobTitle:string,;
  category:string,;
  timeline?:string,;
  scope?:string,;
  experienceLevel?:string;}
;
export interface TalentRateParams {;
  skills:string[],;
  yearsExperience:number,;
  location?:string;
}
;
// Mock function to generate suggestions;
// In production, this would call an AI service or API;
export async function getClientBudgetSuggestion(params:ClientBudgetParams):Promise<PricingSuggestion> {;
  try {;
    // This would be replaced with an actual API call to an AI model;
    // For now, we'll simulate a response based on job category;
    const { jobTitle, category } = params,;
    ;
    // Simulate API call delay;
    await new Promise(resolve => setTimeout(resolve, 1000)),;
    ;
    // Basic logic to determine budget range based on category;
    let minRate = 25,;
    let maxRate = 50,;
    let confidence:"High" | "Medium" | "Low" = "Medium",;
    ;
    if (category === "development") {;
      minRate = 40,;
      maxRate = 80,;
      confidence = "High";
    } else if (category === "design") {;
      minRate = 35,;
      maxRate = 70,;
      confidence = "High",;
    } else if (category === "marketing") {;
      minRate = 30,;
      maxRate = 60,;
      confidence = "Medium",;
    } else if (category === "data") {;
      minRate = 45,;
      maxRate = 90,;
      confidence = "High",;
    } else {;
      minRate = 25,;
      maxRate = 50,;
      confidence = "Low",;
    }
    ;
    // Adjust based on job title keywords;
    const lowercaseTitle = jobTitle.toLowerCase(),;
    if (lowercaseTitle.includes("senior") || lowercaseTitle.includes("lead")) {;
      minRate += 20,;
      maxRate += 30,;
    } else if (lowercaseTitle.includes("junior")) {;
      minRate -= 10,;
      maxRate -= 15,;
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low;
    }
    ;
    // Generate explanation;
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`,;
    ;
    return {;
      minRate,;
      maxRate,;
      confidence,;
      explanation;
;
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`,;
    return {;
      minRate,;
      maxRate,;
      confidence,;
      explanation;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



    }
<<<<<<< HEAD
  } catch (error) {
=======
  }
}
export async function getTalentRateSuggestion (params: TalentRateParams): Promise < PricingSuggestion> {
  try {
    const { skills, years_experience, location } = params;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    // Simulate API call delay;
    await new Promise (resolve => set_timeout (resolve, 1000));
;
    // Base rate calculation based on years of experience;
    let base_rate = 25 + (years_experience * 5);
;
    // Adjust for in - demand skills;
    const inDemandSkills = ['reactawsmachine learningblockchainaidevopskubernetes'];
    const hasInDemandSkills = skills.some (skill =>;
      inDemandSkills.some (demand_skill => skill.toLowerCase ().includes (demand_skill)));
;
    // Check condition
if ( {) {
  $2
}
      base_rate += 15;
    }
    // Location adjustment;
    let location_factor = 1.0;
    // Check condition
if ( {) {
  $2
}
      const highCostLocations = ['united statesusaukaustraliacanadagermanyswitzerland'];
      const lowCostLocations = ['indiaphilippinespakistannigeriaukrainebrazil'];
;
      const lowercase_location = location.toLowerCase ();
;
      if ()) {) {
  $2
}
        location_factor = 1.2;
      } else if ()) {) {
  $2
}
        location_factor = 0.8;
      }
    }
    const min_rate = Math.round (base_rate * location_factor * 0.9);
    const max_rate = Math.round (base_rate * location_factor * 1.2);
;
    // Determine confidence;
    let confidence: "High" | "Medium" | "Low" = "Medium",
    // Check condition
if ( {) {
  $2
}
      confidence = "High";
    } else // Check condition
if ( {) {
  $2
}
      confidence = "Low";
    }
    // Generate explanation;
    let explanation = `Based on ${years_experience} years of experience`;
    // Check condition
if ( {) {
  $2
}
      explanation += ` and your in - demand skills (${skills.join ()})`;
    }
    // Check condition
if ( {) {
  $2
}
      explanation += `, considering market rates in ${location}`;
    }
    explanation += `, we recommend a rate of $${min_rate}-$${max_rate}/hour to remain competitive while maximizing your earning potential.`;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    return {
      min_rate;
      max_rate;
      confidence;
      explanation;




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  } catch (error) {
    console.error("Error generating rate suggestion:", error),
    return {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      minRate: 25;
      maxRate: 50;
      confidence: "Low"
      minRate: 25,
      maxRate: 50,
      confidence: "Low",
<<<<<<< HEAD



// Function to save pricing analytics data

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      minRate: 25,
      maxRate: 50,
      confidence: "Low",
<<<<<<< HEAD
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
    }
    console.error("Error generating rate suggestion:", error);
    return {
      minRate: 25,
      maxRate: 50,
      confidence: "Low",
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
    };
=======
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
    }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
// Function to save pricing analytics data
export async function trackPricingSuggestion(data: {
  userId: string;
  suggestionType: 'client' | 'talent';
  suggestedMin: number;
  suggestedMax: number;
  actualValue?: number

// Function to save pricing analytics data
export async function trackPricingSuggestion(data: {;
  userId: string;
  suggestionType: 'client' | 'talent';
  suggestedMin: number;
  suggestedMax: number;
export async function trackPricingSuggestion(data: {
  userId: string,
  suggestionType: 'client' | 'talent',
  suggestedMin: number,
  suggestedMax: number,
  actualValue?: number,
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
    }
  }
}



// Function to save pricing analytics data


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  accepted: boolean
}) {
  try {
    // In a real implementation, this would save to the database
    // For now, we'll just log it
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    console && console.log("Tracking pricing suggestion:", data);
    


    // // // console.log("Tracking pricing suggestion:", data),
    

<<<<<<< HEAD
    console && console.log("Tracking pricing suggestion:", data);
    console.log("Tracking pricing suggestion:", data);
    // // // console.log("Tracking pricing suggestion:", data),
    
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    console.log("Tracking pricing suggestion:", data);
    // // // console.log("Tracking pricing suggestion:", data),
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // In a real implementation with Supabase: // await supabase
    //  .from('pricing_suggestions')
    //  .insert([data])
    return true
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    console.error("Error tracking pricing suggestion:", error);

    return false
  }
}
    console.error("Error tracking pricing suggestion:", error),
    return false
;
// Function to save pricing analytics data;
export async function trackPricingSuggestion(data: {;
  userId: string,;
  suggestionType: 'client' | 'talent',;
  suggestedMin: number,;
  suggestedMax: number,;
  actualValue?: number,;
  accepted: boolean;
}) {;
  try {;
    // In a real implementation, this would save to the database;
    // For now, we'll just log it;
    // // // console.log("Tracking pricing suggestion:", data),;
    // In a real implementation with Supabase: // await supabase;
    //  .from('pricing_suggestions');
    //  .insert([data]),;
    return true;
  } catch (error) {;
    console.error("Error tracking pricing suggestion:", error);
    return false;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    console && console.error("Error tracking pricing suggestion:", error);

    console && console.error("Error tracking pricing suggestion:", error);
    return false
=======
    console.error("Error tracking pricing suggestion:", error);

    return false
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error ("Error generating rate suggestion:", error);
    return {
      min_rate: 25;
      max_rate: 50;
      confidence: "Low",
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages.";
    }
  }
}
<<<<<<< HEAD
// Function to save pricing analytics data;
export async /**
 * trackPricingSuggestion - Function description
 */
function trackPricingSuggestion() {
  try {
    // In a real implementation, this would save to the database;
    // For now, we'll just log it;
    console.log ("Tracking pricing suggestion:", data);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error("Error tracking pricing suggestion:", error),
    return false

  }
}
<<<<<<< HEAD
;
    // In a real implementation with Supabase: // await supabase;
    //  .from ('pricing_suggestions');
    //  .insert ([data]),
    return true;
  } catch (error) {
    console.error ("Error tracking pricing suggestion:", error);
    return false;
  }
;
// Function to save pricing analytics data;
export async function trackPricingSuggestion(data:{;
  userId:string,;
  suggestionType:'client' | 'talent',;
  suggestedMin:number,;
  suggestedMax:number,;
  actualValue?:number,;
  accepted:boolean;
}) {;
  try {;
    // In a real implementation, this would save to the database;
    // For now, we'll just log it;
    // // // console.log("Tracking pricing suggestion:", data),;
    ;
    // In a real implementation with Supabase:// await supabase;
    //  .from('pricing_suggestions');
    //  .insert([data]),;
    ;
    return true;
  } catch (error) {;
    console.error("Error tracking pricing suggestion:", error),;
    return false,;
  } //Define types for the pricing recommendation 
}export interface ClientBudgetParams {
  jobTitle: string;
category: string;
timeline?: string;
scope?: string;
experienceLevel?: string 
}export interface TalentRateParams {
  skills: string[];
yearsExperience: number;
location?: string 
}try {
  //This would be replaced with an actual API call to an AI model //Simulate API call delay await new Promise (resolve => setTimeout (resolve, 1000) );
//Basic logic to determine budget range based on category maxRate -= 15;
minRate = Math.max (minRate, 15);
//Ensure minimum doesn't go too low 
}//Generate explanation return {
  minRate, maxRate, confidence, explanation 
};
}catch (error) {
  //Return a fallback suggestion return {
  //Return a fallback suggestion return {
  minRate: 30;
maxRate: 60;
}
}export async function getTalentRateSuggestion (params: TalentRateParams) : Promise<PricingSuggestion> {
  try {
  const {
  skills, yearsExperience, location 
}= params;
//Base rate calculation based on years of experience inDemandSkills.some (demandSkill => skill.toLowerCase () .includes (demandSkill) ) );
}//Generate explanation let explanation = `Based on $ {
  yearsExperience 
}years of experience`;
if (hasInDemandSkills) {
  explanation += `and your in-demand skills ($ {
  skills.join () 
}) ` 
}if (location) {
  explanation += `, considering market rates in $ {
  location 
}` 
}explanation += `, we recommend a rate of $$ {
  minRate 
}-$$ {
  maxRate 
}/hour to remain competitive while maximizing your earning potential.`;
return {
  minRate;
maxRate;
confidence;
explanation 
}
}catch (error) {
  
}
}// Function to save pricing analytics data 
}
}
  }
<<<<<<< HEAD
}
;
  }
}
;
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
