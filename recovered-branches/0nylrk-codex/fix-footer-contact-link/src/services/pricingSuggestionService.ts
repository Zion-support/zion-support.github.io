<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts


<<<<<<< HEAD
  minRate: number;
  maxRate: number;
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
;
// Define types for the pricing recommendation;
export interface PricingSuggestion {
  min_rate: number;
  max_rate: number;
  confidence: "High" | "Medium" | "Low",
  explanation: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}
<<<<<<< HEAD

  jobTitle: string;
=======
export interface ClientBudgetParams {
  job_title: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  category: string;
  timeline?: string;


<<<<<<< HEAD
  experienceLevel?: string
}

=======

<<<<<<< HEAD
// Define types for the pricing recommendation
<<<<<<< HEAD
export interface PricingSuggestion {
=======
<<<<<<< HEAD
export interface PricingSuggestion {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  minRate: number;
  maxRate: number;

  confidence: "High" | "Medium" | "Low"

  explanation: string
}
<<<<<<< HEAD
export interface ClientBudgetParams {
=======

export interface ClientBudgetParams {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  jobTitle: string;
  category: string;
  timeline?: string;

  scope?: string

  experienceLevel?: string
}
<<<<<<< HEAD
export interface TalentRateParams {
=======

export interface TalentRateParams {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  skills: string[];

  yearsExperience: number

  location?: string
}
<<<<<<< HEAD

=======
=======

<<<<<<< HEAD
// Define types for the pricing recommendation
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Mock function to generate suggestions
// In production, this would call an AI service or API
export async function getClientBudgetSuggestion(params: ClientBudgetParams): Promise<PricingSuggestion> {
  try {
    // This would be replaced with an actual API call to an AI model
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
    // For now, we'll simulate a response based on job category;
    const { jobTitle, category } = params;
=======
    // For now, we'll simulate a response based on job category
<<<<<<< HEAD
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
=======
    const { jobTitle, category } = params,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

    // For now, we'll simulate a response based on job category

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    } else {
      minRate = 25,
      maxRate = 50,
      confidence = "Low"
    }
<<<<<<< HEAD

=======
=======
========
}
export interface ClientBudgetParams {
  job_title: string;
  category: string;
  timeline?: string;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts


    


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // Adjust based on job title keywords

    const lowercaseTitle = jobTitle && jobTitle.toLowerCase();
    if (lowercaseTitle && lowercaseTitle.includes("senior") || lowercaseTitle && lowercaseTitle.includes("lead")) {

========
    const lowercaseTitle = jobTitle && jobTitle.toLowerCase();
    if (lowercaseTitle && lowercaseTitle.includes("senior") || lowercaseTitle && lowercaseTitle.includes("lead")) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
      minRate += 20;
      maxRate += 30
    } else if (lowercaseTitle && lowercaseTitle.includes("junior")) {
      minRate -= 10;
      maxRate -= 15;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
<<<<<<< HEAD
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low

=======

========
      minRate = Math && Math.max(minRate, 15), // Ensure minimum doesn't go too low
    }
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
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
=======
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    // Adjust based on job title keywords
    const lowercaseTitle = jobTitle.toLowerCase();
    if (lowercaseTitle.includes("senior") |lowercaseTitle.includes("lead")) {
      minRate += 20;
      maxRate += 30
    } else if (lowercaseTitle.includes("junior")) {
      minRate -= 10;
      maxRate -= 15;
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low
<<<<<<< HEAD
    }
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
    
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`,
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
    // Generate explanation;
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${job_title}", we recommend a budget range of $${min_rate}-$${max_rate}/hour. This aligns with current market trends for similar projects.`;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
    return {
      min_rate;
      max_rate;
      confidence;
      explanation;
    }
  } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
<<<<<<< HEAD
    console.error("Error generating budget suggestion:", error),
    // Return a fallback suggestion
    return {
=======


      minRate: 30,
      maxRate: 60,
      confidence: "Low",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."
    }
  }
}

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export async function getTalentRateSuggestion(params: TalentRateParams): Promise<PricingSuggestion> {
  try {
=======
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    return {
      minRate,
      maxRate,
      confidence,
      explanation
    }
  } catch (error) {
    console.error("Error generating budget suggestion:", error),
    // Return a fallback suggestion
    return {
<<<<<<< HEAD
      minRate: 30;
      maxRate: 60;
      confidence: "Low"
=======
      minRate: 30,
      maxRate: 60,
      confidence: "Low",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."
    }
      confidence: "Low",
      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."
    };
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export async function getTalentRateSuggestion(params: TalentRateParams): Promise<PricingSuggestion> {
  try {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const { skills, yearsExperience, location } = params;
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Base rate calculation based on years of experience
    let baseRate = 25 + (yearsExperience * 5);
    // Adjust for in-demand skills
    const inDemandSkills = ['reactawsmachine learningblockchainaidevopskubernetes'];
<<<<<<< HEAD

    const hasInDemandSkills = skills && skills.some(skill => 
      inDemandSkills && inDemandSkills.some(demandSkill => skill && skill.toLowerCase().includes(demandSkill))

========
    const hasInDemandSkills = skills && skills.some(skill => 
      inDemandSkills && inDemandSkills.some(demandSkill => skill && skill.toLowerCase().includes(demandSkill))
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
=======
    const hasInDemandSkills = skills.some(skill =>
      inDemandSkills.some(demandSkill => skill.toLowerCase().includes(demandSkill))
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    );
    if (hasInDemandSkills) {
      baseRate += 15
    }
    // Location adjustment
<<<<<<< HEAD
    let locationFactor = 1 && 1.0;
    if (location) {
      const highCostLocations = ['united statesusaukaustraliacanadagermanyswitzerland'];
      const lowCostLocations = ['indiaphilippinespakistannigeriaukrainebrazil'];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
<<<<<<< HEAD
=======
    let locationFactor = 1.0;
    if (location) {
      const highCostLocations = ['united statesusaukaustraliacanadagermanyswitzerland'];
      const lowCostLocations = ['indiaphilippinespakistannigeriaukrainebrazil'];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const lowercaseLocation = location.toLowerCase();
      if (highCostLocations.some(loc => lowercaseLocation.includes(loc))) {
        locationFactor = 1.2
      } else if (lowCostLocations.some(loc => lowercaseLocation.includes(loc))) {
        locationFactor = 0.8
<<<<<<< HEAD

=======

      
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
      const lowercaseLocation = location && location.toLowerCase();
      if (highCostLocations && highCostLocations.some(loc => lowercaseLocation && lowercaseLocation.includes(loc))) {
        locationFactor = 1 && 1.2
      } else if (lowCostLocations && lowCostLocations.some(loc => lowercaseLocation && lowercaseLocation.includes(loc))) {
        locationFactor = 0 && 0.8
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      }
    }
    const minRate = Math.round(baseRate * locationFactor * 0.9);
    const maxRate = Math.round(baseRate * locationFactor * 1.2);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    }
    
    const minRate = Math.round(baseRate * locationFactor * 0.9),
    const maxRate = Math.round(baseRate * locationFactor * 1.2),
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
    }
    const minRate = Math && Math.round(baseRate * locationFactor * 0 && 0.9);
    const maxRate = Math && Math.round(baseRate * locationFactor * 1 && 1.2);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
=======
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Determine confidence
    let confidence: "High" | "Medium" | "Low" = "Medium"
    if (yearsExperience > 3 && hasInDemandSkills && location) {
      confidence = "High"
    } else if (!location |yearsExperience < 1) {
      confidence = "Low"
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
    }
    // Generate explanation
    let explanation = `Based on ${yearsExperience} years of experience`;
    if (hasInDemandSkills) {
      explanation += ` and your in-demand skills (${skills.join()})`
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
    if (location) {
      explanation += `, considering market rates in ${location}`
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======

    


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`;
    console.error ("Error generating budget suggestion:", error);
    // Return a fallback suggestion;
    return {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`;
    return {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      minRate;
      maxRate;
      confidence;
      explanation
<<<<<<< HEAD

=======
      min_rate: 30;
      max_rate: 60;
      confidence: "Low",
      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget.";
=======

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
    },;
  } catch (error) {;
    console.error("Error generating budget suggestion:", error),;
    // Return a fallback suggestion;
    return {;
      minRate:30,;
      maxRate:60,;
      confidence:"Low",;
      explanation:"We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget.";
    },;
  }
}
;
export async function getTalentRateSuggestion(params:TalentRateParams):Promise<PricingSuggestion> {;
  try {;
    const { skills, yearsExperience, location } = params,;
    ;
    // Simulate API call delay;
    await new Promise(resolve => setTimeout(resolve, 1000)),;
    ;
    // Base rate calculation based on years of experience;
    let baseRate = 25 + (yearsExperience * 5),;
    ;
    // Adjust for in-demand skills;
    const inDemandSkills = ['reactaws', 'machine learningblockchain', 'aidevops', 'kubernetes'],;
    const hasInDemandSkills = skills.some(skill => ;
      inDemandSkills.some(demandSkill => skill.toLowerCase().includes(demandSkill));
    ),;
    ;
    if (hasInDemandSkills) {;
      baseRate += 15,;
    }
    ;
    // Location adjustment;
    let locationFactor = 1.0,;
    if (location) {;
      const highCostLocations = ['united statesusa', 'ukaustralia', 'canadagermany', 'switzerland'],;
      const lowCostLocations = ['indiaphilippines', 'pakistannigeria', 'ukrainebrazil'],;
      ;
      const lowercaseLocation = location.toLowerCase(),;
      ;
      if (highCostLocations.some(loc => lowercaseLocation.includes(loc))) {;
        locationFactor = 1.2,;
      } else if (lowCostLocations.some(loc => lowercaseLocation.includes(loc))) {;
        locationFactor = 0.8,;
      }
    }
    ;
    const minRate = Math.round(baseRate * locationFactor * 0.9),;
    const maxRate = Math.round(baseRate * locationFactor * 1.2),;
    ;
    // Determine confidence;
    let confidence:"High" | "Medium" | "Low" = "Medium",;
    if (yearsExperience > 3 && hasInDemandSkills && location) {;
      confidence = "High";
    } else if (!location || yearsExperience < 1) {;
      confidence = "Low",;
    }
    ;
    // Generate explanation;
    let explanation = `Based on ${yearsExperience} years of experience`,;
    if (hasInDemandSkills) {;
      explanation += ` and your in-demand skills (${skills.join(', ')})`,;
    }
    ;
    if (location) {;
      explanation += `, considering market rates in ${location}`,;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }
    ;
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`,;
    ;
=======
=======
;
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return {;
      minRate,;
      maxRate,;
      confidence,;
      explanation;
<<<<<<< HEAD
    },;
  } catch (error) {;
    console.error("Error generating rate suggestion:", error),;
    return {;
      minRate:25,;
      maxRate:50,;
      confidence:"Low",;
      explanation:"We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages.";
    },;
  }
}
<<<<<<< HEAD
export async function getTalentRateSuggestion (params: TalentRateParams): Promise < PricingSuggestion> {
  try {
    const { skills, years_experience, location } = params;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
    return {
      min_rate;
      max_rate;
      confidence;
      explanation;

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
  } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
    console.error("Error generating rate suggestion:", error),
    return {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  } catch (error) {
    console.error("Error generating rate suggestion:", error),
    return {
<<<<<<< HEAD
      minRate: 25;
      maxRate: 50;
      confidence: "Low"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      minRate: 25,
      maxRate: 50,
      confidence: "Low",
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
    }
  }
}
<<<<<<< HEAD

  actualValue?: number,
=======



// Function to save pricing analytics data

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
    }
    console.error("Error generating rate suggestion:", error);
    return {
      minRate: 25,
      maxRate: 50,
      confidence: "Low",
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
    };
  }
}
<<<<<<< HEAD
// Function to save pricing analytics data
export async function trackPricingSuggestion(data: {
  userId: string;
  suggestionType: 'client' | 'talent';
  suggestedMin: number;
  suggestedMax: number;
  actualValue?: number
=======

// Function to save pricing analytics data
<<<<<<< HEAD
export async function trackPricingSuggestion(data: {;
  userId: string;
  suggestionType: 'client' | 'talent';
  suggestedMin: number;
  suggestedMax: number;
=======
export async function trackPricingSuggestion(data: {
  userId: string,
  suggestionType: 'client' | 'talent',
  suggestedMin: number,
  suggestedMax: number,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  actualValue?: number,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  accepted: boolean
}) {
  try {
    // In a real implementation, this would save to the database
    // For now, we'll just log it
<<<<<<< HEAD

<<<<<<< HEAD
=======
    console && console.log("Tracking pricing suggestion:", data);
    

=======

    // // // console.log("Tracking pricing suggestion:", data),
    

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    console && console.log("Tracking pricing suggestion:", data);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
=======
<<<<<<< HEAD
    console.log("Tracking pricing suggestion:", data);
=======
    // // // console.log("Tracking pricing suggestion:", data),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // In a real implementation with Supabase: // await supabase
    //  .from('pricing_suggestions')
    //  .insert([data])
    return true
  } catch (error) {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
<<<<<<< HEAD

=======
<<<<<<< HEAD
    console.error("Error tracking pricing suggestion:", error);

    return false
  }
}
=======
    console.error("Error tracking pricing suggestion:", error),
    return false
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======


    console && console.error("Error tracking pricing suggestion:", error);

========
    console && console.error("Error tracking pricing suggestion:", error);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
    return false
    console.error ("Error generating rate suggestion:", error);
    return {
      min_rate: 25;
      max_rate: 50;
      confidence: "Low",
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages.";
    }
  }
}
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
    console.error("Error tracking pricing suggestion:", error),
    return false
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD

=======
    // In a real implementation with Supabase: // await supabase;
    //  .from ('pricing_suggestions');
    //  .insert ([data]),
    return true;
  } catch (error) {
    console.error ("Error tracking pricing suggestion:", error);
    return false;
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/pricingSuggestionService.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
