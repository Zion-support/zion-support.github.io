import React from "react";

export interface EmergingTechService {id: string; title: string; description: string;,
category: "Blockchain" | "IoT" | "Edge Computing" | "5G" | "AR/VR" | "Robotics" | "Quantum Computing" | "Biotechnology" | "Green Tech" | "Space Tech", subcategory: string;,
price: {
monthly?: number;
yearly?: number;
