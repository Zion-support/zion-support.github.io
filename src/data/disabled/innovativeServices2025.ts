import React from "react";

export interface InnovativeService2025 {
  
id: string;
title: string;
description: string;
category: string;
price: number;
currency: string;
pricingModel: "one-time" | "monthly" | "yearly" | "per-user" | "per-project";
features: string[];
benefits: string[];
marketPrice: string;
contactInfo: {
