import React from "react";

export type ServiceItem = {
id: string;
title: string;
description: string;
category: "Micro SaaS" | "IT Services" | "AI Solutions" | "Cybersecurity" | "Data & Analytics" | "Cloud & DevOps";
price: string;
// average market starting price;
billing: "month" | "project" | "hour";
features: string[];
ctaLabel: string;
name: string;
slug: string;
items: ServiceItem[];
