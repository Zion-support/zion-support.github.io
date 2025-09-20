import React, { useState; useEffect } from "react";
import { motion } from "framer-motion";

interface AIInsight {id: string; type: "trend" | "anomaly" | "recommendation" | "prediction";
title: string; description: string; confidence: number;
}
}
impact: "high" | "medium" | "low", category: string; timestamp: string};
interface PredictionData {metric: string; currentValue: number; predictedValue: number; confidence: number; timeframe: string};
{id: "2",
{id: "3",
{id: "4",
const [predictions; setPredictions] = useState<PredictionData[]>([
{metric: "Monthly Active Users",
currentValue: 45672; predictedValue: 52100; confidence: 0.89;
timeframe: "Next 30 days"},
{metric: "Revenue",
currentValue: 2847392; predictedValue: 3200000; confidence: 0.85;
timeframe: "Next 30 days"},
{metric: "Conversion Rate",
currentValue: 3.24;
predictedValue: 3.45;
confidence: 0.78;