export const equipmentDetails = [
  {
    id: "ai-server-001",
    name: "AI Training Server Pro",
    category: "AI Infrastructure",
    price: 24999,
    currency: "USD",
    description: "High-performance server optimized for AI model training and inference workloads.",
    specifications: {
      processor: "Intel Xeon Platinum 8380",
      memory: "512GB DDR4 ECC",
      storage: "4TB NVMe SSD + 20TB HDD",
      gpu: "4x NVIDIA RTX A6000",
      network: "10GbE + 25GbE",
      power: "1200W Platinum PSU"
    },
    features: [
      "Optimized for deep learning frameworks",
      "Enterprise-grade reliability",
      "24/7 monitoring support",
      "Custom cooling solution",
      "Rack-mountable design"
    ],
    images: [
      "/images/equipment/ai-server-001-main.jpg",
      "/images/equipment/ai-server-001-side.jpg",
      "/images/equipment/ai-server-001-back.jpg"
    ],
    availability: "In Stock",
    location: "New York, NY",
    warranty: "3 years",
    delivery: "2-3 business days",
    rating: 4.8,
    reviews: 127
  },
  {
    id: "network-switch-002",
    name: "Enterprise Network Switch",
    category: "Networking",
    price: 8999,
    currency: "USD",
    description: "High-performance network switch for enterprise environments with advanced management capabilities.",
    specifications: {
      ports: "48x 10GbE + 6x 100GbE",
      switching: "1.44Tbps",
      forwarding: "1.08Bpps",
      memory: "16GB",
      power: "PoE+ support",
      management: "Web, CLI, SNMP"
    },
    features: [
      "Layer 3 routing capabilities",
      "Advanced QoS and security",
      "Redundant power supplies",
      "Hot-swappable modules",
      "Comprehensive monitoring"
    ],
    images: [
      "/images/equipment/network-switch-002-main.jpg",
      "/images/equipment/network-switch-002-front.jpg"
    ],
    availability: "In Stock",
    location: "San Francisco, CA",
    warranty: "Lifetime",
    delivery: "1-2 business days",
    rating: 4.6,
    reviews: 89
  },
  {
    id: "storage-array-003",
    name: "Enterprise Storage Array",
    category: "Storage",
    price: 15999,
    currency: "USD",
    description: "High-capacity storage array with enterprise-grade reliability and performance.",
    specifications: {
      capacity: "100TB usable",
      drives: "24x 4TB SAS HDDs",
      cache: "64GB DDR4",
      interfaces: "8x 16Gb FC + 4x 10GbE",
      raid: "RAID 6, 10, 50, 60",
      power: "Dual redundant"
    },
    features: [
      "Enterprise-grade reliability",
      "Advanced data protection",
      "Thin provisioning",
      "Snapshot capabilities",
      "Remote replication"
    ],
    images: [
      "/images/equipment/storage-array-003-main.jpg",
      "/images/equipment/storage-array-003-side.jpg"
    ],
    availability: "In Stock",
    location: "Chicago, IL",
    warranty: "5 years",
    delivery: "3-5 business days",
    rating: 4.7,
    reviews: 156
  },
  {
    id: "workstation-004",
    name: "AI Development Workstation",
    category: "Workstations",
    price: 12999,
    currency: "USD",
    description: "High-performance workstation designed for AI development and data science workloads.",
    specifications: {
      processor: "AMD Ryzen 9 7950X",
      memory: "128GB DDR5",
      storage: "2TB NVMe SSD",
      gpu: "NVIDIA RTX 4090",
      display: "32\" 4K Monitor",
      os: "Windows 11 Pro"
    },
    features: [
      "Optimized for AI development",
      "Pre-installed development tools",
      "Dual monitor support",
      "Professional graphics card",
      "Fast storage solution"
    ],
    images: [
      "/images/equipment/workstation-004-main.jpg",
      "/images/equipment/workstation-004-setup.jpg"
    ],
    availability: "In Stock",
    location: "Austin, TX",
    warranty: "3 years",
    delivery: "2-3 business days",
    rating: 4.9,
    reviews: 203
  },
  {
    id: "security-camera-005",
    name: "AI Security Camera System",
    category: "Security",
    price: 5999,
    currency: "USD",
    description: "Advanced AI-powered security camera system with facial recognition and motion detection.",
    specifications: {
      cameras: "8x 4K AI cameras",
      storage: "4TB NVR",
      resolution: "4K Ultra HD",
      nightVision: "Up to 100ft",
      ai: "Facial recognition, motion detection",
      connectivity: "WiFi + Ethernet"
    },
    features: [
      "AI-powered motion detection",
      "Facial recognition",
      "Night vision capabilities",
      "Mobile app control",
      "Cloud storage option"
    ],
    images: [
      "/images/equipment/security-camera-005-main.jpg",
      "/images/equipment/security-camera-005-camera.jpg"
    ],
    availability: "In Stock",
    location: "Miami, FL",
    warranty: "2 years",
    delivery: "1-2 business days",
    rating: 4.5,
    reviews: 78
  }
];

export const getEquipmentById = (id) => {
  return equipmentDetails.find(equipment => equipment.id === id);
};

export const getEquipmentByCategory = (category) => {
  return equipmentDetails.filter(equipment => equipment.category === category);
};

export const searchEquipment = (query) => {
  const searchTerm = query.toLowerCase();
  return equipmentDetails.filter(equipment => 
    equipment.name.toLowerCase().includes(searchTerm) ||
    equipment.description.toLowerCase().includes(searchTerm) ||
    equipment.category.toLowerCase().includes(searchTerm)
  );
};

export const EQUIPMENT_DETAILS = equipmentDetails;