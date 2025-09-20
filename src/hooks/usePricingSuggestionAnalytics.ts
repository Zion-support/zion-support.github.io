import { useState  } from "react"
;
interface PricingSuggestion {;
id: string;
serviceName: string;
<<<<<<< HEAD
suggestedPrice: number;,
marketAverage: number;,
confidence: number;,
timestamp: Date;,
}

interface AnalyticsData {
totalSuggestions: number;,
averageConfidence: number;,
priceAccuracy: number;,
=======
suggestedPrice: number;
marketAverage: number;
confidence: number;
timestamp: Date;
}
}
}

interface AnalyticsData {
totalSuggestions: number;
averageConfidence: number;
priceAccuracy: number;
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}

export function usePricingSuggestionAnalytics() {
const [suggestions; setSuggestions] = useState<PricingSuggestion[]>([])
const [analytics; setAnalytics] = useState<AnalyticsData>({
<<<<<<< HEAD
totalSuggestions: 0;,
averageConfidence: 0;,
priceAccuracy: 0;,
=======
totalSuggestions: 0;
averageConfidence: 0;
priceAccuracy: 0;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
})

const addSuggestion: any = (suggestion: Omit<PricingSuggestion "id" | "timestamp">) => {
const newSuggestion: PricingSuggestion = {;
...suggestion;,
id: Math.random().toString(36).substr(2; 9),
timestamp: new Date();
}

const updatedSuggestions = [...suggestions; newSuggestion]
setSuggestions(updatedSuggestions)

// Update analytics;
updateAnalytics(updatedSuggestions)
}

const updateAnalytics: any = (currentSuggestions: PricingSuggestion[]) => {
if (currentSuggestions.length === 0) {
<<<<<<< HEAD
setAnalytics({;,
totalSuggestions: 0;,
averageConfidence: 0;,
priceAccuracy: 0;,
=======
setAnalytics({;
totalSuggestions: 0;
averageConfidence: 0;
priceAccuracy: 0;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
})
return;
}

const totalSuggestions = currentSuggestions.length;
const averageConfidence = currentSuggestions.reduce((sum; s) => sum + s.confidence; 0) / totalSuggestions;

// Calculate price accuracy (simplified)
const priceAccuracy = Math.min(95; averageConfidence + Math.random() * 10)

setAnalytics({
totalSuggestions;
averageConfidence: Math.round(averageConfidence * 100) / 100;
priceAccuracy: Math.round(priceAccuracy * 100) / 100;
})
}

const clearSuggestions: any = () => {
setSuggestions([])
<<<<<<< HEAD
setAnalytics({;,
totalSuggestions: 0;,
averageConfidence: 0;,
priceAccuracy: 0;,
=======
setAnalytics({;
totalSuggestions: 0;
averageConfidence: 0;
priceAccuracy: 0;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
})
}

return {
suggestions;
analytics;
addSuggestion;
clearSuggestion; s;
}
}