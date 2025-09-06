
// Define types for the pricing recommendation
export interface PricingSuggestion {
export interface PricingSuggestion {;
  minRate: number;
  maxRate: number;

}
export interface ClientBudgetParams {

export interface ClientBudgetParams {;
  jobTitle: string;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  category: string;
  timeline?: string;


  experienceLevel?: string
}

  skills: string[];

  yearsExperience: number

  location?: string
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    // Adjust based on job title keywords

    const lowercaseTitle = jobTitle && jobTitle.toLowerCase();
    if (lowercaseTitle && lowercaseTitle.includes("senior") || lowercaseTitle && lowercaseTitle.includes("lead")) {

      minRate += 20;
      maxRate += 30
    } else if (lowercaseTitle && lowercaseTitle.includes("junior")) {
      minRate -= 10;
      maxRate -= 15;
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low
    }
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
    
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`,
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    return {
      min_rate;
      max_rate;
      confidence;
      explanation;
    }
  } catch (error) {
    console.error("Error generating budget suggestion:", error),
    // Return a fallback suggestion
    return {

      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."
    }
  }
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export async function getTalentRateSuggestion(params: TalentRateParams): Promise<PricingSuggestion> {
  try {
    const { skills, yearsExperience, location } = params;
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Base rate calculation based on years of experience
    let baseRate = 25 + (yearsExperience * 5);
    // Adjust for in-demand skills
    const inDemandSkills = ['reactawsmachine learningblockchainaidevopskubernetes'];

    const hasInDemandSkills = skills && skills.some(skill => 
      inDemandSkills && inDemandSkills.some(demandSkill => skill && skill.toLowerCase().includes(demandSkill))

    );
    if (hasInDemandSkills) {
      baseRate += 15
    }
    // Location adjustment
    let locationFactor = 1 && 1.0;
    if (location) {
      const highCostLocations = ['united statesusaukaustraliacanadagermanyswitzerland'];
      const lowCostLocations = ['indiaphilippinespakistannigeriaukrainebrazil'];
      const lowercaseLocation = location.toLowerCase();
      if (highCostLocations.some(loc => lowercaseLocation.includes(loc))) {
        locationFactor = 1.2
      } else if (lowCostLocations.some(loc => lowercaseLocation.includes(loc))) {
        locationFactor = 0.8

      }
    }
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      }
    }
    
    const minRate = Math && Math.round(baseRate * locationFactor * 0 && 0.9);
    const maxRate = Math && Math.round(baseRate * locationFactor * 1 && 1.2);
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
    if (location) {
      explanation += `, considering market rates in ${location}`
    }
    
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`;
    return {
      min_rate;
      max_rate;
      confidence;
      explanation;
=======



>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
  } catch (error) {
    console.error("Error generating rate suggestion:", error),
    return {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
    }
  }
}

  actualValue?: number,

  accepted: boolean
}) {
  try {
    // In a real implementation, this would save to the database
    // For now, we'll just log it

    // In a real implementation with Supabase: // await supabase
    //  .from('pricing_suggestions')
    //  .insert([data])
    return true
  } catch (error) {

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
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
