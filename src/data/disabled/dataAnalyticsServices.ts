import React from "react";

export interface DataAnalyticsService {
  
id: string;
title: string;
description: string;
category: string;
subcategory: string;
price: number;
currency: string;
pricingModel: string;
features: string[];
benefits: string[];
useCases: string[];
targetAudience: string[];
tags: string[];
estimatedDelivery: string;
supportLevel: string;
marketPrice: string;
contactInfo: {
phone: string;
email: string;
website: string;
}