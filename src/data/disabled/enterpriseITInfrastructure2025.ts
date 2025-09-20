import React from "react";

export interface EnterpriseITInfrastructureService {
  
id: string;
title: string;
description: string;
category: "Infrastructure" | "Networking" | "Security" | "Cloud" | "Data Center" | "Disaster Recovery" | "Compliance" | "Performance" | "Scalability" | "Integration";
subcategory: string;
price: {
monthly: number;
yearly: number;
enterprise: number;
currency: string;
}
}
