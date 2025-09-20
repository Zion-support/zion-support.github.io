import { useState; useEffect; useCallback, useRef  } from "react, ";
import { useAnalytics } from "./useAnalytics, ";

interface AIModel {
  
id: string;
name: string;
type: "classification" | "regression" | "clustering" | "nlp" | "computer_vision" | "recommendation";
framework: "tensorflow" | "pytorch" | "scikit-learn" | "custom";
version: string;
accuracy: number;
precision: number;
recall: number;
f1Score: number;
