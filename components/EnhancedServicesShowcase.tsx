import React, { useState } from 'react';

import { Brain, Shield, Rocket, Cpu, Database, Atom, Users;
  CheckCircle, TrendingUp, Clock, Star, Filter, ChevronDown
 } from 'lucide-react';
interface Service {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  period: string;
  setupTime: string;
  customers: string;
  features: string[];
  benefits: string[];
  roi: string;
  marketSize: string;
  growthRate: string;
  popular?: boolean;
  icon: React.ComponentType<any>;
  color: string
}

const EnhancedServicesShowcase: React.FC;

