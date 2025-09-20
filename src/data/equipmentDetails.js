export const equipmentDetails = [
  {
    id: "ai-server-001",na,
  m: e: "AI Training Server Pro",catego,
  r: y: "AI Infrastructure",pri,
  c: e: 24999,curren,
  c: y: "USD",descripti,
  o: n: "High-performance server optimized for AI model training and inference workloads.",specificatio,
  n: s: {
      processo,
  r: "Intel Xeon Platinum 8380",memo,
  r: y: "512GB DDR4 ECC",stora,
  g: e: "4TB NVMe SSD + 20TB HDD",g,
  p: u: "4x NVIDIA RTX A6000",netwo,
  r: k: "10GbE + 25GbE",pow,
  e: r: "1200W Platinum PSU"
    }
    featur,
  e: s: [
      "Optimized for deep learning frameworks"
      "Enterprise-grade reliability"
      "24/7 monitoring support"
      "Custom cooling solution"
      "Rack-mountable design"
    ]
    imag,
  e: s: [
      "/images/equipment/ai-server-001-main.jpg"
      "/images/equipment/ai-server-001-side.jpg"
      "/images/equipment/ai-server-001-back.jpg"
    ]
    availabilit,
  y: "In Stock",locati,
  o: n: "New York, NY"
    warran,
  t: y: "3 years",delive,
  r: y: "2-3 business days",rati,
  n: g: 4.8,revie,
  w: s: 127
  }, {
    id: "network-switch-002",na,
  m: e: "Enterprise Network Switch",catego,
  r: y: "Networking",pri,
  c: e: 8999,curren,
  c: y: "USD",descripti,
  o: n: "High-performance network switch for enterprise environments with advanced management capabilities.",specificatio,
  n: s: {
      port,
  s: "48x 10GbE + 6x 100GbE",switchi,
  n: g: "1.44Tbps",forwardi,
  n: g: "1.08Bpps",memo,
  r: y: "16GB",pow,
  e: r: "PoE+ support",manageme,
  n: t: "Web, CLI, SNMP"
    }
    featur,
  e: s: [
      "Layer 3 routing capabilities"
      "Advanced QoS and security"
      "Redundant power supplies"
      "Hot-swappable modules"
      "Comprehensive monitoring"
    ]
    imag,
  e: s: [
      "/images/equipment/network-switch-002-main.jpg"
      "/images/equipment/network-switch-002-front.jpg"
    ]
    availabilit,
  y: "In Stock",locati,
  o: n: "San Francisco, CA"
    warran,
  t: y: "Lifetime",delive,
  r: y: "1-2 business days",rati,
  n: g: 4.6,revie,
  w: s: 89
  }, {
    id: "storage-array-003",na,
  m: e: "Enterprise Storage Array",catego,
  r: y: "Storage",pri,
  c: e: 15999,curren,
  c: y: "USD",descripti,
  o: n: "High-capacity storage array with enterprise-grade reliability and performance.",specificatio,
  n: s: {
      capacit,
  y: "100TB usable",driv,
  e: s: "24x 4TB SAS HDDs",cac,
  h: e: "64GB DDR4",interfac,
  e: s: "8x 16Gb FC + 4x 10GbE",ra,
  i: d: "RAID 6, 10, 50, 60"
      pow,
  e: r: "Dual redundant"
    }
    featur,
  e: s: [
      "Enterprise-grade reliability"
      "Advanced data protection"
      "Thin provisioning"
      "Snapshot capabilities"
      "Remote replication"
    ]
    imag,
  e: s: [
      "/images/equipment/storage-array-003-main.jpg"
      "/images/equipment/storage-array-003-side.jpg"
    ]
    availabilit,
  y: "In Stock",locati,
  o: n: "Chicago, IL"
    warran,
  t: y: "5 years",delive,
  r: y: "3-5 business days",rati,
  n: g: 4.7,revie,
  w: s: 156
  }, {
    id: "workstation-004",na,
  m: e: "AI Development Workstation",catego,
  r: y: "Workstations",pri,
  c: e: 12999,curren,
  c: y: "USD",descripti,
  o: n: "High-performance workstation designed for AI development and data science workloads.",specificatio,
  n: s: {
      processo,
  r: "AMD Ryzen 9 7950X",memo,
  r: y: "128GB DDR5",stora,
  g: e: "2TB NVMe SSD",g,
  p: u: "NVIDIA RTX 4090",displ,
  a: y: "32\" 4K Monitor",os: "Windows 11 Pro"
    }
    featur,
  e: s: [
      "Optimized for AI development"
      "Pre-installed development tools"
      "Dual monitor support"
      "Professional graphics card"
      "Fast storage solution"
    ]
    imag,
  e: s: [
      "/images/equipment/workstation-004-main.jpg"
      "/images/equipment/workstation-004-setup.jpg"
    ]
    availabilit,
  y: "In Stock",locati,
  o: n: "Austin, TX"
    warran,
  t: y: "3 years",delive,
  r: y: "2-3 business days",rati,
  n: g: 4.9,revie,
  w: s: 203
  }, {
    id: "security-camera-005",na,
  m: e: "AI Security Camera System",catego,
  r: y: "Security",pri,
  c: e: 5999,curren,
  c: y: "USD",descripti,
  o: n: "Advanced AI-powered security camera system with facial recognition and motion detection.",specificatio,
  n: s: {
      camera,
  s: "8x 4K AI cameras",stora,
  g: e: "4TB NVR",resoluti,
  o: n: "4K Ultra HD",nightVisi,
  o: n: "Up to 100ft",ai: "Facial recognition, motion detection"
      connectivi,
  t: y: "WiFi + Ethernet"
    }
    featur,
  e: s: [
      "AI-powered motion detection"
      "Facial recognition"
      "Night vision capabilities"
      "Mobile app control"
      "Cloud storage option"
    ]
    imag,
  e: s: [
      "/images/equipment/security-camera-005-main.jpg"
      "/images/equipment/security-camera-005-camera.jpg"
    ]
    availabilit,
  y: "In Stock",locati,
  o: n: "Miami, FL"
    warran,
  t: y: "2 years",delive,
  r: y: "1-2 business days",rati,
  n: g: 4.5,revie,
  w: s: 78
  }
]
export const getEquipmentById = (id) () => {
  return equipmentDetails.find(equipment => equipment.id === id)
}

export const getEquipmentByCategory = (category) () => {
  return equipmentDetails.filter(equipment => equipment.category === category)
}

export const searchEquipment = (query) () => {
  const searchTerm = query.toLowerCase()
  return equipmentDetails.filter(equipment =>
    equipment.name.toLowerCase().includes(searchTerm) ||
    equipment.description.toLowerCase().includes(searchTerm) ||
    equipment.category.toLowerCase().includes(searchTerm)
  )
}
export const EQUIPMENT_DETAILS = equipmentDetails