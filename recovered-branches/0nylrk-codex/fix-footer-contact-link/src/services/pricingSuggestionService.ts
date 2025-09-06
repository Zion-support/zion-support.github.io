

  minRate: number;
  maxRate: number;

}

  jobTitle: string;
  category: string;
  timeline?: string;


  experienceLevel?: string
}

  skills: string[];

  yearsExperience: number

  location?: string
}


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
    } else {
      minRate = 25,
      maxRate = 50,
      confidence = "Low"
    }

    } else {
      min_rate = 25;
      max_rate = 50;
      confidence = "Low";
    }


    


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${jobTitle}", we recommend a budget range of $${minRate}-$${maxRate}/hour. This aligns with current market trends for similar projects.`,

    }
    // Generate explanation;
    const explanation = `Based on market rates for ${category} projects, particularly for roles similar to "${job_title}", we recommend a budget range of $${min_rate}-$${max_rate}/hour. This aligns with current market trends for similar projects.`;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

=======




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

    const minRate = Math.round(baseRate * locationFactor * 0.9),
    const maxRate = Math.round(baseRate * locationFactor * 1.2),

      }
    }
    
    const minRate = Math && Math.round(baseRate * locationFactor * 0 && 0.9);
    const maxRate = Math && Math.round(baseRate * locationFactor * 1 && 1.2);
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Determine confidence
    let confidence: "High" | "Medium" | "Low" = "Medium"
    if (yearsExperience > 3 && hasInDemandSkills && location) {
      confidence = "High"
    } else if (!location |yearsExperience < 1) {
      confidence = "Low"

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
    if (location) {
      explanation += `, considering market rates in ${location}`
    }

    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`;

    }
  } catch (error) {
    console.error("Error generating rate suggestion:", error),
    return {

=======
      minRate: 25,
      maxRate: 50,
      confidence: "Low",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
