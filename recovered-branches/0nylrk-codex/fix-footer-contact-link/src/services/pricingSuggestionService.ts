<<<<<<< HEAD
export interface PricingSuggestion {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export interface PricingSuggestion {;
  minRate: number;
  // TODO: Implement
}
export interface PricingSuggestion {;

  minRate: number;,
  maxRate: number;

<<<<<<< HEAD

=======

export interface ClientBudgetParams {

  job_title: string;

  category: string;

export interface TalentRateParams {

  skills: string[];

  yearsExperience: number;
  location?: string;
}

  timeline?: string;

  experienceLevel?: string
}
export interface TalentRateParams {

}

// Define types for the pricing recommendation;
export interface PricingSuggestion {
  // TODO: Implement
}
  minRate: number,

;
// Define types for the pricing recommendation;
export interface PricingSuggestion {;
  minRate: number,;

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

>>>>>>> origin/cursor/delete-old-data-records-6bba
}
;
export interface TalentRateParams {;
  skills: string[],;
  yearsExperience: number,;
  location?: string;
}

  skills: string[];
  years_experience: number,
  location?: string;
}
// Mock function to generate suggestions;
// In production, this would call an AI service or API;

    // This would be replaced with an actual API call to an AI model;
    // For now, we'll simulate a response based on job category;
    const { job_title, category } = params;
;
    // Simulate API call delay;
    await new Promise (resolve => set_timeout (resolve, 1000));
;
    // Basic logic to determine budget range based on category;
    let min_rate = 25;
<<<<<<< HEAD

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
=======


    // Adjust based on job title keywords
>>>>>>> origin/cursor/delete-old-data-records-6bba

    const lowercaseTitle = jobTitle && jobTitle.toLowerCase();
    if (lowercaseTitle && lowercaseTitle.includes("senior") || lowercaseTitle && lowercaseTitle.includes("lead")) {
      minRate += 20;

      maxRate += 30
    } else if (lowercaseTitle && lowercaseTitle.includes("junior")) {"
      }
      minRate -= 10;
      maxRate -= 15;

<<<<<<< HEAD

      minRate = Math && Math.max(minRate, 15), // Ensure minimum doesn't go too low
    }
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`;

=======
    }
    // Generate explanation,
const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`;`;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Adjust based on job title keywords;
    const lowercaseTitle = jobTitle.toLowerCase(),;
    if (lowercaseTitle.includes("senior") || lowercaseTitle.includes("lead")) {;"
      }
      minRate += 20,;
      maxRate += 30;
    } else if (lowercaseTitle.includes("junior")) {;"
      }
      minRate -= 10,;
      maxRate -= 15,;
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low;'
    // Adjust based on job title keywords;
    const lowercase_title = job_title.toLowerCase ();
    if (|| lowercase_title.includes ("lead")) {) {"
  $2
}
      min_rate += 20;
      max_rate += 30;
    } else if () {) {
  $2
}
      min_rate -= 10;
<<<<<<< HEAD
      max_rate -= 15;'
      min_rate = Math.max (min_rate, 15), // Ensure minimum doesn't go too low;

      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low

=======
      max_rate -= 15;
      min_rate = Math.max (min_rate, 15), // Ensure minimum doesn't go too low;'
    }
    // Generate explanation,
const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`,`    ;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    }
    
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`,
    ;


<<<<<<< HEAD

    // Adjust based on job title keywords;

    const lowercaseTitle = jobTitle.toLowerCase(),;"
    if (lowercaseTitle.includes("senior") || lowercaseTitle.includes("lead")) {;

=======
    // Adjust based on job title keywords;
    const lowercaseTitle = jobTitle.toLowerCase(),;
    if (lowercaseTitle.includes("senior") || lowercaseTitle.includes("lead")) {;"
      }
>>>>>>> origin/cursor/delete-old-data-records-6bba
      minRate += 20,;
      maxRate += 30;
    } else if (lowercaseTitle.includes("junior")) {;"
      }
      minRate -= 10,;
<<<<<<< HEAD
      maxRate -= 15,;'
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low;


=======
      maxRate -= 15,;
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low;'
    // Generate explanation,
const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${job_title}", we recommend a budget range of $${min_rate}-$${max_rate}/hour. This aligns with current market trends for similar projects.`;`;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    // Generate explanation"`
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`,

    }
    // Generate explanation;
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${job_title}", we recommend a budget range of $${min_rate}-$${max_rate}/hour. This aligns with current market trends for similar projects.`;
;


    return {
      }
      min_rate;
      max_rate;
      confidence;
      explanation;
    }
<<<<<<< HEAD

      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."

    }
      confidence: "Low",

      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."
    };
  }
}

export async function getTalentRateSuggestion(params: TalentRateParams): Promise<PricingSuggestion> {

  try {

    const { skills, yearsExperience, location } = params;
    // Simulate API call delay

    await new Promise(resolve => setTimeout(resolve, 1000));
    // Base rate calculation based on years of experience;
    let baseRate = 25 + (yearsExperience * 5);
    // Adjust for in-demand skills'
    const inDemandSkills = ['reactawsmachine learningblockchainaidevopskubernetes'];



=======
  } catch (error) {
      }
      "explanation": "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget.""
    }
      "confidence": "Low","
      "explanation": "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget.""
    };  }
}
export async function getTalentRateSuggestion("params": TalentRateParams): Promise<PricingSuggestion> {
  }
  try {;      "explanation": "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget.""
    }
      "confidence": "Low","
      "explanation": "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget.""
    };
  }
}
export async function getTalentRateSuggestion("params": TalentRateParams): Promise<PricingSuggestion> {
  }
  try {;
  try {;
    const { skills, yearsExperience, location } = params;
    // Simulate API call delay
}
await new Promise(resolve => { return setTimeout(resolve, 1000)); }
    // Base rate calculation based on years of experience,
let baseRate = 25 + (yearsExperience * 5);
    // Adjust for in-demand skills,
const inDemandSkills = ['reactawsmachine learningblockchainaidevopskubernetes'];'
    const hasInDemandSkills = skills && skills.some(skill => { return inDemandSkills && inDemandSkills.some(demandSkill => skill && skill.toLowerCase().includes(demandSkill)); }
export async function getTalentRateSuggestion("params": TalentRateParams): Promise<PricingSuggestion> {;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
    );
    if (hasInDemandSkills) {}
      baseRate += 15;
    }

<<<<<<< HEAD
    // Location adjustment



      
      const lowercaseLocation = location && location.toLowerCase();

=======
    // Location adjustment;
    let locationFactor = 1 && 1.0;
    if (location) {'
      const highCostLocations = ['united statesusaukaustraliacanadagermanyswitzerland'];'
      const lowCostLocations = ['indiaphilippinespakistannigeriaukrainebrazil'];



>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (highCostLocations && highCostLocations.some(loc => lowercaseLocation && lowercaseLocation.includes(loc))) {
        locationFactor = 1 && 1.2
      } else if (lowCostLocations && lowCostLocations.some(loc => lowercaseLocation && lowercaseLocation.includes(loc))) {
        locationFactor = 0 && 0.8


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;

export async function getTalentRateSuggestion(params: TalentRateParams): Promise<PricingSuggestion> {;
  try {;
    }
    const { skills, yearsExperience, location } = params,;
    // Simulate API call delay;
    await new Promise(resolve => { return setTimeout(resolve, 1000)),; }
    // Base rate calculation based on years of experience;
    let baseRate = 25 + (yearsExperience * 5),;
    // Adjust for in-demand skills;
    const inDemandSkills = ['reactawsmachine learningblockchainaidevopskubernetes'],;'
    const hasInDemandSkills = skills.some(skill =>;
      inDemandSkills.some(demandSkill => { return skill.toLowerCase().includes(demandSkill)); }
    ),;
    if (hasInDemandSkills) {;
      }
      baseRate += 15;
    }
;
    // Location adjustment;
    let locationFactor = 1.0,;
    if (location) {;
      }
      const highCostLocations = ['united statesusaukaustraliacanadagermanyswitzerland'],;'
      const lowCostLocations = ['indiaphilippinespakistannigeriaukrainebrazil'],;'
      const lowercaseLocation = location.toLowerCase(),;
      if (highCostLocations.some(loc => lowercaseLocation.includes(loc))) {;
        }
        locationFactor = 1.2;
      } else if (lowCostLocations.some(loc => lowercaseLocation.includes(loc))) {;

<<<<<<< HEAD
        locationFactor = 0.8;

=======

      }
    }
    
    const minRate = Math.round(baseRate * locationFactor * 0.9),
    const maxRate = Math.round(baseRate * locationFactor * 1.2),
>>>>>>> origin/cursor/delete-old-data-records-6bba


      }
    }
    const minRate = Math && Math.round(baseRate * locationFactor * 0 && 0.9);
    const maxRate = Math && Math.round(baseRate * locationFactor * 1 && 1.2);

<<<<<<< HEAD
    

    // Determine confidence
    let confidence: "High" | "Medium" | "Low" = "Medium"
    if (yearsExperience > 3 && hasInDemandSkills && location) {
      confidence = "High"
    } else if (!location |yearsExperience < 1) {
      confidence = "Low"




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
    const minRate = Math.round(baseRate * locationFactor * 0.9),;
    const maxRate = Math.round(baseRate * locationFactor * 1.2),;
    // Determine confidence;"
    let confidence: "High" | "Medium" | "Low" = "Medium",;
    if (yearsExperience > 3 && hasInDemandSkills && location) {;"
      confidence = "High";
    } else if (!location || yearsExperience < 1) {;"
      confidence = "Low";
    }

;
    // Generate explanation;`
    let explanation = `Based on ${yearsExperience} years of experience`,;
    if (hasInDemandSkills) {;`

      explanation += ` and your in-demand skills (${skills.join()})`;

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

    if (location) {
      }
      explanation += `, considering market rates in ${location}``    }
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`;`    // Return a fallback suggestion;
    return {
    }
<<<<<<< HEAD


=======
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`;`    return {
      }

    if (location) {
      explanation += `, considering market rates in ${location}`
    }

    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`;

    // Return a fallback suggestion;
    return {}`
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`;
    return {}
      minRate;
      maxRate;
      confidence;
      explanation;

      min_rate: 30;
      max_rate: 60;"
      confidence: "Low","
      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget.";


  }
}
export async function getTalentRateSuggestion ("params": TalentRateParams): Promise < PricingSuggestion> {
  }
  try {
    }
    const { skills, years_experience, location } = params;
    // Simulate API call delay;
    await new Promise (resolve => { return set_timeout (resolve, 1000)); }
;
    // Base rate calculation based on years of experience;
    let base_rate = 25 + (years_experience * 5);
;
    // Adjust for in - demand skills;
    const inDemandSkills = ['reactawsmachine learningblockchainaidevopskubernetes'];'
    const hasInDemandSkills = skills.some (skill =>;
      inDemandSkills.some (demand_skill => { return skill.toLowerCase ().includes (demand_skill))); }
;
    // Check condition,
if ( {) {
  $2
}
      base_rate += 15;
    }
    // Location adjustment;
    let location_factor = 1.0;
    // Check condition,
if ( {) {
  $2
}
      const highCostLocations = ['united statesusaukaustraliacanadagermanyswitzerland'];'
      const lowCostLocations = ['indiaphilippinespakistannigeriaukrainebrazil'];'
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
    const max_rate = Math.round (base_rate * location_factor * 1.2);
;
    // Determine confidence;
let "confidence": "High" | "Medium" | "Low" = "Medium",;"
    // Check condition,
if ( {) {
  $2
}
      confidence = "High";"
    } else // Check condition,
if ( {) {
  $2
}
      confidence = "Low";"
    }
    // Generate explanation;
    let explanation = `Based on ${years_experience} years of experience`;`    // Check condition,
if ( {) {
  $2
}
      explanation += ` and your in - demand skills (${skills.join ()})`;`    }
    // Check condition,
if ( {) {
  $2
}
      explanation += `, considering market rates in ${location}`;`    }
    explanation += `, we recommend a rate of $${min_rate}-$${max_rate}/hour to remain competitive while maximizing your earning potential.`;`
;
    return {
      }
      min_rate;
      max_rate;
      confidence;
      explanation;

>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  } catch (error) {"
    console.error("Error generating rate suggestion:", error),

<<<<<<< HEAD





=======
    }
  } catch (error) {

>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  } catch (error) {
    console.error("Error generating rate suggestion:", error),
    return {
<<<<<<< HEAD



=======
      minRate: 25;
      maxRate: 50;
      confidence: "Low"
      minRate: 25,
      maxRate: 50,
      confidence: "Low",



// Function to save pricing analytics data


>>>>>>> origin/cursor/delete-old-data-records-6bba
      minRate: 25;
      maxRate: 50;
      confidence: "Low"
      minRate: 25,
      maxRate: 50,
      confidence: "Low",

// Function to save pricing analytics data

      minRate: 25,
      maxRate: 50,
      confidence: "Low",
<<<<<<< HEAD


  try {
    // In a real implementation, this would save to the database
    // For now, we'll just log it



    console && console.log("Tracking pricing suggestion:", data);

    

=======
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
    }
    console.error("Error generating rate suggestion:", error);
    return {

      minRate: 25;
      maxRate: 50;
      confidence: "Low"
      minRate: 25,
      maxRate: 50,
      confidence: "Low",

// Function to save pricing analytics data

      minRate: 25,
      maxRate: 50,
      confidence: "Low",

      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
>>>>>>> origin/cursor/delete-old-data-records-6bba


"
    // // // console.log("Tracking pricing suggestion:", data),


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // In a real implementation with Supabase: // await supabase
    //  .from('pricing_suggestions')
    //  .insert([data])
    return true
  } catch (error) {
<<<<<<< HEAD

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

    return false

    console.error ("Error generating rate suggestion:", error);
    return {}
      min_rate: 25;
      max_rate: 50;"
      confidence: "Low","
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages.";
    }
  }
}

;
// Function to save pricing analytics data;
export async function trackPricingSuggestion() { return null; }
  } catch (error) {;"
    console.error("Error tracking pricing suggestion:", error);
    return false;

    return false;
"
    console.error ("Error generating rate suggestion:", error);
    return {}
      min_rate: 25;
      max_rate: 50;"
      confidence: "Low","
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages.";
    }

  }

  try {
    // In a real implementation, this would save to the database
    // For now, we'll just log it

    console && console.log("Tracking pricing suggestion:", data);

    // // // console.log("Tracking pricing suggestion:", data),

console && console.log("Tracking pricing suggestion:", data);
    console.log("Tracking pricing suggestion:", data);
    // // // console.log("Tracking pricing suggestion:", data),
    // In a real implementation with Supabase: // await supabase
    //  .from('pricing_suggestions')
    //  .insert([data])
    return true
  } catch (error) {
console.error("Error tracking pricing suggestion:", error);

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
;

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
export async /**;
 * trackPricingSuggestion - Function description;
 */
function trackPricingSuggestion() {}
  try {}
    // In a real implementation, this would save to the database;'
    // For now, we'll just log it;"
    console.log ("Tracking pricing suggestion:", data);

;
    // In a real implementation with "Supabase": // await supabase;
    //  .from ('pricing_suggestions');'
    //  .insert ([data]),
    return true;
  } catch (error) {
    }
    console.error ("Error tracking pricing "suggestion":", error);"
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
  accepted: boolean}) {
  try {
    // In a real implementation, this would save to the database
    // For now, we'll just log it
    console.log($2);
    // In a real implementation with Supabase: // await supabase
    //  .from('pricing_suggestions')
    //  .insert($2);
    return true
  } catch (error) {
    console.error($2);
    return false

}
}// Function to save pricing analytics data 
}
}
  }

}
;
  }
}
;

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
