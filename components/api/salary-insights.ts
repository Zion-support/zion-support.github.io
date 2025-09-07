
  recommendedHourlyUsd: number;
  recommendedMonthlyUsd: number;
  medianHourlyUsd: number;
  minHourlyUsd: number;
  maxHourlyUsd: number;

  trendMonthly: { label: string; value: number }[];
  regionalComparison: { region: string; medianHourlyUsd: number }[];
  tags: string[];
  gptRecommendation?: string;
type RequestBody = $2;
  skills: string[],
  region: string,
  experienceLevel: Junior' | 'Mid | Senior' | 'Lead,
  remote: boolean,
>>>>>>> origin/main
  employmentType: contract' | 'freelance | full-time'
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}

const completion = await client.chat.completions.create ({
  }
  "model": 'gpt-4o-mini', "messages": [ {'
  }
  "role": 'system', "content": 'You are a compensation analyst. Be specific and concise. Use USD.''
type InsightResponse = {
  }
  "recommendedHourlyUsd": number;
  "recommendedMonthlyUsd": number;
  "medianHourlyUsd": number;
  "minHourlyUsd": number;
  "maxHourlyUsd": number;

  "confidence": number; // 0..1,
"trendMonthly": { "label": string; "value": number
}[];
  "regionalComparison": { "region": string; "medianHourlyUsd": number
}[];
  "tags": string[];
  gptRecommendation?: string
}


function median("values": number[]): number {
  }
  const arr = [...values].sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  if (arr.length === 0) return 0;


    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    h += h << 5;
    return (h >>> 0) / 4294967295;
  }
  ];



function extractCountry(location: string): string {

  return parts[parts.length - 1] || 'Global
}


  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return undefined;
  try {
    const client = new OpenAI({ apiKey });



  // Confidence based on sample size and dispersion
  const sampleSize = rates.length;
  const dispersion = (max - min) / Math.max(1, baseMedian);
  const confidence = Math.max(0.2, Math.min(0.95, (sampleSize / 20) * (1 - Math.min(0.6, dispersion)) + 0.2));


    median: base_median,
    min,
    max,
    country});

    recommendedHourlyUsd: recommended_hourly,
    recommendedMonthlyUsd: recommended_monthly,
    medianHourlyUsd: Math.round (base_median),
    minHourlyUsd: Math.round (min),
    maxHourlyUsd: Math.round (max),
    confidence: Number (confidence.to_fixed (2)),
    trend_monthly: trend,
    regional_comparison,
    tags,
    gpt_recommendation}
return res.status (200).json (response);  return res.status (200).json (response);
}
}
}
}
}
}


  return res.status(200).json(response);