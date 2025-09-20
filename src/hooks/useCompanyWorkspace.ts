import React from "react";
import { useState, useEffect } from 'react';

interface Company {
  id: string;
  name: string;
  plan: string;
  teamSize: number;
  teamLimit: number | null;
  billingCycle: string;
  logoUrl?: string;
  workspaceUrl: string;
}

export function useCompanyWorkspace() {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCompany = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockCompany: Company = {
          id: '1',
          name: 'Acme Corporation',
          plan: 'Enterprise',
          teamSize: 45,
          teamLimit: null, // Unlimited
          billingCycle: 'Annual',
          logoUrl: 'https://via.placeholder.com/40/0000FF/FFFFFF?text=AC',
          workspaceUrl: 'acme.ziontechgroup.com',
        };
        
        setCompany(mockCompany);
      } catch (error) {
        console.error('Failed to load company data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCompany();
  }, []);

  return {
    company,
    loading,
  };
}