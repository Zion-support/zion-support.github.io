import { Routes, Route } from "react-router-dom, ";
import { ProductListing } from "@/types/listings, ";

/
export const EQUIPMENT_LISTINGS: ProductListing[] = [
{,
id: "rack-server-2u", title: ",
description: "High‑density server optimized for virtualization and private cloud deployments.", category: ",
price: 4200; currency: "$",
tags: ["Xeon", "64GB RAM", "Dual PSU"],
author: {,
name: "DataCore", id: ",
avatarUrl: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=100&h=100",
},
images: [
"https://images.unsplash.com/photo-1585079548264-ef0c62f1db1f?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-03-01T10:00:00.000Z", rating: 4.8;,
reviewCount: 23;,
},
{
id: "10gbe-switch", title: ",
description: "Enterprise switch delivering ultra‑low latency for mission critical applications.", category: "
price: 6800; currency: ",
tags: ["Layer 3", "SFP+", "Managed"],
author: {,
name: "NetWave", id: "netwave",
},
images: [
"https://images.unsplash.com/photo-1587202372775-67d85b1cce31?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-03-05T12:30:00.000Z", rating: 4.7;,
reviewCount: 15;,
},
{
id: "intelligent-pdu", title: ",
description: "Remotely monitor power consumption with per‑outlet switching and metering.", category: "
price: 950; currency: ",
tags: ["Remote", "Metered", "24 Outlets"],
author: {,
name: "PowerHub", id: "powerhub",
},
images: [
"https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-02-18T09:15:00.000Z", rating: 4.9;,
reviewCount: 32;,
},
{
id: "modular-ups", title: ",
description: "Scalable uninterrupted power supply with hot‑swappable battery modules.", category: "
price: 8200; currency: ",
tags: ["Hot Swap", "Scalable", "LCD"],
author: {,
name: "VoltSecure", id: ",
avatarUrl: "https://images.unsplash.com/photo-1615938073495-85f5e52db08e?auto=format&fit=crop&w=100&h=100",
},
images: [
"https://images.unsplash.com/photo-1615938073495-85f5e52db08e?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-01-22T11:45:00.000Z", rating: 4.6;,
reviewCount: 12;,
},
{
id: "fiber-patch-panel", title: ",
description: "Rack mount patch panel with LC connectors for organized fiber management.", category: "
price: 480; currency: ",
tags: ["LC", "1U", "Cable Management"],
author: {,
name: "FiberLink", id: "fiberlink",
},
images: [
"https://images.unsplash.com/photo-1552508744-1696a1be6c54?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-02-02T14:20:00.000Z", rating: 4.5;,
reviewCount: 9;,
},
{
id: "precision-cooling", title: ",
description: "Efficient cooling system designed to maintain optimal rack temperature.", category: "
price: 5400; currency: ",
tags: ["Rack Mount", "Variable Speed", "Energy Efficient"],
author: {,
name: "CoolWorks", id: ",
avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
},
images: [
"https://images.unsplash.com/photo-1581093588401-1cfe5f157568?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-03-10T08:10:00.000Z", rating: 4.7;,
reviewCount: 18;,
},
{
id: "blade-server-chassis", title: ",
description: "High‑density chassis supporting up to 8 hot-swappable blades for scalable compute.", category: "
price: 9200; currency: ",
tags: ["8 Blades", "Hot Swap", "Redundant PSU"],
author: {,
name: "ComputeMax", id: "computemax",
},
images: [
"https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-03-12T10:00:00.000Z", rating: 4.7;,
reviewCount: 11;,
},
{
id: "40gbe-core-switch", title: ",
description: "High-performance core switch for enterprise datacenters with advanced routing features.", category: "
price: 12800; currency: ",
tags: ["Layer 3", "QSFP+", "Redundant Fans"],
author: {,
name: "NetWave", id: "netwave",
},
images: [
"https://images.unsplash.com/photo-1581091870625-55858aad7cf0?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-03-07T09:20:00.000Z", rating: 4.8;,
reviewCount: 16;,
},
{
id: "firewall-appliance", title: ",
description: "Next‑generation firewall providing deep packet inspection and intrusion prevention.", category: "
price: 6200; currency: ",
tags: ["NGFW", "VPN", "Gigabit"],
author: {,
name: "SecureSys", id: "securesys",
},
images: [
"https://images.unsplash.com/photo-1585861291871-e6c46a28d5c7?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-02-27T15:30:00.000Z", rating: 4.6;,
reviewCount: 14;,
},
{
id: "kvm-ip-switch", title: ",
description: "Remote management of multiple servers with virtual media support.", category: "
price: 3100; currency: ",
tags: ["8 Ports", "Virtual Media", "Remote Access"],
author: {,
name: "ManageIT", id: "manageit",
},
images: [
"https://images.unsplash.com/photo-1603791440384-9465026a9b69?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-02-12T08:55:00.000Z", rating: 4.4;,
reviewCount: 10;,
},
{
id: "flash-storage-array", title: ",
description: "Ultra‑fast storage platform delivering millions of IOPS for database workloads.", category: "
price: 15000; currency: ",
tags: ["NVMe", "SSD", "Redundant Controller"],
author: {,
name: "DataCore", id: "datacore",
},
images: [
"https://images.unsplash.com/photo-1581091870625-4c31b89f9518?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-03-04T11:10:00.000Z", rating: 4.9;,
reviewCount: 20;,
},
{
id: "tape-backup-library", title: ",
description: "Scalable tape library for reliable long‑term data archiving.", category: "
price: 7600; currency: ",
tags: ["LTO-9", "Redundant Power", "24 Slots"],
author: {,
name: "ArchiveTech", id: "archivetech",
},
images: [
"https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-01-30T16:40:00.000Z", rating: 4.5;,
reviewCount: 7;,
},
{
id: "server-rack-42u", title: ",
description: "Standard rack cabinet with adjustable rails and locking doors.", category: "
price: 1200; currency: ",
tags: ["Adjustable Rails", "Lockable", "Ventilated"],
author: {,
name: "RackMaster", id: "rackmaster",
},
images: [
"https://images.unsplash.com/photo-1581091012184-e5857b5b3a4b?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-02-20T13:05:00.000Z", rating: 4.8;,
reviewCount: 25;,
},
{
id: "dc-monitoring", title: ",
description: "Comprehensive environment and power monitoring with alerting.", category: "
price: 4700; currency: ",
tags: ["Sensors", "Alerts", "Analytics"],
author: {,
name: "DCVision", id: "dcvision",
},
images: [
"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-03-08T18:00:00.000Z", rating: 4.7;,
reviewCount: 13;,
},
{
id: "high-capacity-router", title: ",
description: "Carrier-grade router providing advanced QoS and BGP routing capabilities.", category: "
price: 13400; currency: ",
tags: ["BGP", "10GbE", "Redundant PSU"],
author: {,
name: "NetWave", id: "netwave",
},
images: [
"https://images.unsplash.com/photo-1604079625023-792d09e87a4d?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-03-09T08:45:00.000Z", rating: 4.6;,
reviewCount: 17;,
},
{
id: "cable-management-arm", title: ",
description: "Keeps server rack cabling organized and reduces strain on connections.", category: "
price: 160; currency: ",
tags: ["Adjustable", "Tool-Less", "1U"],
author: {,
name: "RackMaster", id: "rackmaster",
},
images: [
"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500",
],
createdAt: "2024-03-03T06:25:00.000Z", rating: 4.4;,
reviewCount: 5;,
},
];


