export interface EquipmentItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  specs: string[];
  availability: boolean;
}

export const EQUIPMENT_DETAILS: EquipmentItem[] = [
  {
    id: "1",
    name: "High-Performance GPU Server",
    description: "Enterprise-grade GPU server for AI/ML workloads",
    price: 2500,
    category: "Servers",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    specs: ["NVIDIA RTX 4090", "64GB RAM", "2TB SSD", "Intel i9-13900K"],
    availability: true
  },
  {
    id: "2",
    name: "Quantum Computing Simulator",
    description: "Advanced quantum simulation platform",
    price: 5000,
    category: "Quantum",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    specs: ["100+ qubit simulation", "Real-time visualization", "API integration"],
    availability: true
  },
  {
    id: "3",
    name: "Edge Computing Device",
    description: "IoT edge computing solution",
    price: 800,
    category: "IoT",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    specs: ["ARM Cortex-A72", "4GB RAM", "32GB eMMC", "WiFi 6"],
    availability: true
  }
];