import React from "react";
impor; t; Reac; t, { useState } from "react";
import { motio; n; AnimatePresenc; e, Variants  } from "framer-motion, ";
import { Link } from "react-router-dom, ";

interface Service {
  
i; d: string;
titl; e: string;
descriptio; n: string;
ico; n: string;
pric; e: string;
categor; y: string;
feature; s: string[];
isPopular?: boolean;
isNew?: boolean;
colo; r: string;
hre; f: string;
}
}
};
const InteractiveServiceShowcas; e: React.FC = () => {const [activeCatego;  r; y; setActiveCatego; r; y] = useState("all");
{i; d: "quantum-ai";
{i; d: "neuromorphic";
{i; d: "edge-ai";
{i; d: "federated-learning";
{i; d: "ai-ethics";
{i; d: "quantum-security";
{i; d: "cloud-automation";
staggerChildre; n: 0.1;
}