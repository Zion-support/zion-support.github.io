
    }
    ;
    explanation += `, we recommend a rate of $${minRate}-$${maxRate}/hour to remain competitive while maximizing your earning potential.`,;
    ;
    return {;
      minRate,;
      maxRate,;
      confidence,;
      explanation;
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

}