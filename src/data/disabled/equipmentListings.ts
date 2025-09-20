import { Routes, Route  } from "react-router-dom, ";
import { ProductListing } from "@/types/listings, ";

// Sample datacenter equipment listings;
export const EQUIPMENT_LISTINGS: ProductListing[] = [
{,
id: "rack-server-2u", title: "2U Rack Mount Server";,
description: "High‑density server optimized for virtualization and private cloud deployments.", category: "Servers";,
price: 4200; currency: "$",
tags: ["Xeon", "64GB RAM", "Dual PSU"],
author: {,
