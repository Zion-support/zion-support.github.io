import { useEffect, useState } from "react";
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { ListingScoreCard } from "@/components/ListingScoreCard";
import api from '@/lib/api';

  formData: QuoteFormData;




    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          `/api/services?categoryId=${encodeURIComponent(formData.serviceType)}`
        );
        if (response.status < 200 || response.status >= 300) throw new Error('Failed to fetch');
        const data = response.data;
        setListings(data as ListingItem[]);
      } catch (err) {
        // Fallback to sample data on error
        setListings(SAMPLE_LISTINGS.filter(item => item.category.toLowerCase() === formData.serviceType.toLowerCase()));
      } finally {
        setLoading(false);
      }
    };






