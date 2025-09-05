

// Define types for the pricing recommendation
<<<<<<< HEAD
export interface PricingSuggestion {
<<<<<<< HEAD
  minRate: number,
  maxRate: number,
  confidence: "High" | "Medium" | "Low",
  explanation: string
=======
  minRate: number;
  maxRate: number;
  confidence: &quot;High&quot; | &quot;Medium&quot; | &quot;Low&quot;;
  explanation: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export interface ClientBudgetParams {
  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string
}

export interface TalentRateParams {
  skills: string[],
  yearsExperience: number,
  location?: string
}
=======
export interface PricingSuggestion {_minRate: number;
  maxRate: number;
  confidence: "High" | "Medium" | "Low";
  explanation: string;}

export interface ClientBudgetParams {_jobTitle: string;
  category: string;
  timeline?: string;
  scope?: string;
  experienceLevel?: string;}

export interface TalentRateParams {_skills: string[];
  yearsExperience: number;
  location?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Mock function to generate suggestions
// In production, this would call an AI service or API
export async function getClientBudgetSuggestion(_params: ClientBudgetParams): Promise<PricingSuggestion> {_try {
    // This would be replaced with an actual API call to an AI model
<<<<<<< HEAD
    // For now, we'll simulate a response based on job category
    const { jobTitle, category } = params,
=======
    // For now, _we'll simulate a response based on job category
    const { jobTitle, _category} = params;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000)),
    
    // Basic logic to determine budget range based on category
<<<<<<< HEAD
<<<<<<< HEAD
    let minRate = 25,
    let maxRate = 50,
    let confidence: "High" | "Medium" | "Low" = "Medium",
    
    if (category === "development") {
      minRate = 40,
      maxRate = 80,
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
    } else {
      minRate = 25,
      maxRate = 50,
      confidence = "Low"
    }
    
    // Adjust based on job title keywords
    const lowercaseTitle = jobTitle.toLowerCase(),
    if (lowercaseTitle.includes("senior") || lowercaseTitle.includes("lead")) {
      minRate += 20,
      maxRate += 30
    } else if (lowercaseTitle.includes("junior")) {
      minRate -= 10,
      maxRate -= 15,
      minRate = Math.max(minRate, 15), // Ensure minimum doesn't go too low
    }
    
    // Generate explanation
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`,
=======
    let minRate = 25;
    let maxRate = 50;
    let confidence: &quot;High&quot; | &quot;Medium&quot; | &quot;Low&quot; = &quot;Medium&quot;;
    
    if (category === &quot;development&quot;) {
      minRate = 40;
      maxRate = 80;
      confidence = &quot;High&quot;;
    } else if (category === &quot;design&quot;) {
      minRate = 35;
      maxRate = 70;
      confidence = &quot;High&quot;;
    } else if (category === &quot;marketing&quot;) {
      minRate = 30;
      maxRate = 60;
      confidence = &quot;Medium&quot;;
    } else if (category === &quot;data&quot;) {
      minRate = 45;
      maxRate = 90;
      confidence = &quot;High&quot;;
    } else {
      minRate = 25;
      maxRate = 50;
      confidence = &quot;Low&quot;;
    }
    
    // Adjust based on job title keywords
    const lowercaseTitle = jobTitle.toLowerCase();
    if (lowercaseTitle.includes(&quot;senior&quot;) || lowercaseTitle.includes(&quot;lead&quot;)) {
      minRate += 20;
      maxRate += 30;
    } else if (lowercaseTitle.includes(&quot;junior&quot;)) {
      minRate -= 10;
=======
    let _minRate = 25;
    let _maxRate = 50;
    let confidence: "High" | "Medium" | "Low" = "Medium";
    
    if (category === "development") {_minRate = 40;
      maxRate = 80;
      confidence = "High";} else if (category === "design") {_minRate = 35;
      maxRate = 70;
      confidence = "High";} else if (category === "marketing") {_minRate = 30;
      maxRate = 60;
      confidence = "Medium";} else if (category === "data") {_minRate = 45;
      maxRate = 90;
      confidence = "High";} else {_minRate = 25;
      maxRate = 50;
      confidence = "Low";}
    
    // Adjust based on job title keywords
    const _lowercaseTitle = jobTitle.toLowerCase();
    if (lowercaseTitle.includes("senior") || lowercaseTitle.includes("lead")) {_minRate += 20;
      maxRate += 30;} else if (lowercaseTitle.includes("junior")) {_minRate -= 10;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      maxRate -= 15;
      minRate = Math.max(minRate, _15); // Ensure minimum doesn't go too low}
    
    // Generate explanation
<<<<<<< HEAD
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to &quot;${jobTitle}&quot;, we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    const _explanation = `Based on market rates for ${_category} projects, particularly for roles similar to "${_jobTitle}", we recommend a budget range of $${_minRate}-$${_maxRate}/hour. This aligns with current market trends for similar projects.`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return {_minRate, _maxRate, _confidence, _explanation};
  } catch (error) {_// Return a fallback suggestion
    return {
<<<<<<< HEAD
      minRate,
      maxRate,
      confidence,
      explanation
    }
  } catch (error) {
<<<<<<< HEAD
    console.error("Error generating budget suggestion:", error),
=======
    console.error(&quot;Error generating budget suggestion:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    // Return a fallback suggestion
    return {
      minRate: 30,
      maxRate: 60,
<<<<<<< HEAD
      confidence: "Low",
      explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."
    }
=======
      confidence: &quot;Low&quot;,
      explanation: &quot;We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget.&quot;
    };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}

export async function getTalentRateSuggestion(params: TalentRateParams): Promise<PricingSuggestion> {
  try {
    const { skills, yearsExperience, location } = params,
=======
      minRate: 30, _maxRate: 60, _confidence: "Low", _explanation: "We encountered an issue generating a precise recommendation. This is a general market rate - consider your specific requirements when setting your budget."};
  }
}

export async function getTalentRateSuggestion(_params: TalentRateParams): Promise<PricingSuggestion> {_try {
    const { skills, _yearsExperience, _location} = params;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000)),
    
    // Base rate calculation based on years of experience
<<<<<<< HEAD
    let baseRate = 25 + (yearsExperience * 5),
    
    // Adjust for in-demand skills
    const inDemandSkills = ['reactawsmachine learningblockchainaidevopskubernetes'],
    const hasInDemandSkills = skills.some(skill => 
=======
    let _baseRate = 25 + (yearsExperience * 5);
    
    // Adjust for in-demand skills
    const _inDemandSkills = ['react', 'aws', 'machine learning', 'blockchain', 'ai', 'devops', 'kubernetes'];
    const _hasInDemandSkills = skills.some(skill => 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      inDemandSkills.some(demandSkill => skill.toLowerCase().includes(demandSkill))
    ),
    
<<<<<<< HEAD
    if (hasInDemandSkills) {
      baseRate += 15
    }
    
    // Location adjustment
    let locationFactor = 1.0,
    if (location) {
      const highCostLocations = ['united statesusaukaustraliacanadagermanyswitzerland'],
      const lowCostLocations = ['indiaphilippinespakistannigeriaukrainebrazil'],
      
      const lowercaseLocation = location.toLowerCase(),
      
      if (highCostLocations.some(loc => lowercaseLocation.includes(loc))) {
        locationFactor = 1.2
      } else if (lowCostLocations.some(loc => lowercaseLocation.includes(loc))) {
        locationFactor = 0.8
      }
    }
    
    const minRate = Math.round(baseRate * locationFactor * 0.9),
    const maxRate = Math.round(baseRate * locationFactor * 1.2),
    
    // Determine confidence
<<<<<<< HEAD
    let confidence: "High" | "Medium" | "Low" = "Medium",
    if (yearsExperience > 3 && hasInDemandSkills && location) {
      confidence = "High"
    } else if (!location || yearsExperience < 1) {
      confidence = "Low"
=======
    let confidence: &quot;High&quot; | &quot;Medium&quot; | &quot;Low&quot; = &quot;Medium&quot;;
    if (yearsExperience > 3 && hasInDemandSkills && location) {
      confidence = &quot;High&quot;;
    } else if (!location || yearsExperience < 1) {
      confidence = &quot;Low&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Generate explanation
    let explanation = `Based on ${yearsExperience} years of experience`,
    if (hasInDemandSkills) {
      explanation += ` and your in-demand skills (${skills.join()})`
    }
    
    if (location) {
      explanation += `, considering market rates in ${location}`
    }
    
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`,
    
    return {
      minRate,
      maxRate,
      confidence,
      explanation
    }
  } catch (error) {
<<<<<<< HEAD
    console.error("Error generating rate suggestion:", error),
    return {
      minRate: 25,
      maxRate: 50,
      confidence: "Low",
      explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."
    }
=======
    console.error(&quot;Error generating rate suggestion:&quot;, error);
    return {
      minRate: 25,
      maxRate: 50,
      confidence: &quot;Low&quot;,
      explanation: &quot;We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages.&quot;
    };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    if (hasInDemandSkills) {_baseRate += 15;}
    
    // Location adjustment
    let _locationFactor = 1.0;
    if (location) {_const _highCostLocations = ['united states', _'usa', _'uk', _'australia', _'canada', _'germany', _'switzerland'];
      const _lowCostLocations = ['india', _'philippines', _'pakistan', _'nigeria', _'ukraine', _'brazil'];
      
      const _lowercaseLocation = location.toLowerCase();
      
      if (highCostLocations.some(loc => lowercaseLocation.includes(loc))) {
        locationFactor = 1.2;} else if (lowCostLocations.some(loc => lowercaseLocation.includes(loc))) {_locationFactor = 0.8;}
    }
    
    const _minRate = Math.round(baseRate * locationFactor * 0.9);
    const _maxRate = Math.round(baseRate * locationFactor * 1.2);
    
    // Determine confidence
    let confidence: "High" | "Medium" | "Low" = "Medium";
    if (yearsExperience > 3 && hasInDemandSkills && location) {_confidence = "High";} else if (!location || yearsExperience < 1) {_confidence = "Low";}
    
    // Generate explanation
    let _explanation = `Based on ${_yearsExperience} years of experience`;
    if (hasInDemandSkills) {_explanation += ` and your in-demand skills (${skills.join(', _')})`;
    }
    
    if (location) {_explanation += `, _considering market rates in ${location}`;
    }
    
    explanation += `, we recommend a rate of $${_minRate}-$${_maxRate}/hour to remain competitive while maximizing your earning potential.`;
    
    return {_minRate, _maxRate, _confidence, _explanation};
  } catch (error) {_return {
      minRate: 25, _maxRate: 50, _confidence: "Low", _explanation: "We encountered an issue generating a precise rate recommendation. This is a general suggestion based on market averages."};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

// Function to save pricing analytics data
<<<<<<< HEAD
export async function trackPricingSuggestion(data: {
  userId: string,
  suggestionType: 'client' | 'talent',
  suggestedMin: number,
  suggestedMax: number,
  actualValue?: number,
  accepted: boolean
}) {
  try {
    // In a real implementation, this would save to the database
    // For now, we'll just log it
<<<<<<< HEAD
    // // // console.log("Tracking pricing suggestion:", data),
=======
    // console.log(&quot;Tracking pricing suggestion:&quot;, data);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
export async function trackPricingSuggestion(_data: {_userId: string;
  suggestionType: 'client' | 'talent';
  suggestedMin: number;
  suggestedMax: number;
  actualValue?: number;
  accepted: boolean;}) {_try {
    // In a real implementation, _this would save to the database
    // For now, _we'll just log it
    
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // In a real implementation with Supabase: // await supabase
    //  .from('pricing_suggestions')
    //  .insert([data]),
    
<<<<<<< HEAD
    return true
  } catch (error) {
<<<<<<< HEAD
    console.error("Error tracking pricing suggestion:", error),
    return false
=======
    console.error(&quot;Error tracking pricing suggestion:&quot;, error);
    return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
=======
    return true;} catch (error) {_return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
