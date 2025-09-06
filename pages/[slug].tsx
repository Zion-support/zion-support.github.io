

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useMemo } from 'react';
import Head from 'next / head';
import {GetStaticPaths, GetStaticProps} from 'next';

        return false;
      }
    });
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { newlyAddedServices } from '../data/newly-added-services';
import { new2025Services } from '../data/new-2025-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
import { realServicesQ32025 } from '../data/real-services-q3-2025';
import { realQ4Services2025, real2025Q4Additions } from '../data/real-2025-q4-additions';
import { real2026Q1Additions } from '../data/real-2026-q1-additions';
import fs from 'fs';
import path from 'path';
type Service = typeof enhancedRealMicroSaasServices[number];
function getAllServices(): Service[] {
  return enhancedRealMicroSaasServices
    .concat(extraServices as Service[], additionalEnhancedServices as Service[])
    .concat(newlyAddedServices as unknown as Service[])
    .concat(curatedMarketServices as Service[])
    .concat(new2025Services as unknown as Service[])
		.concat(marketValidatedServices as unknown as Service[]);
		.concat(moreRealServices2025 as unknown as Service[])
		.concat(verified2025Additions as unknown as Service[])
		.concat(realServicesQ12025 as unknown as Service[])
		.concat(realEnterpriseServices2025 as unknown as Service[])
		.concat(verifiedRealServices2025Batch2 as unknown as Service[]);
		.concat(realMarketAugmentations2025 as unknown as Service[]);
		.concat(additionalLiveServices2025 as unknown as Service[]);
		.concat(real2025Q2Additions as unknown as Service[]);
		.concat(augmentedServicesBatch3 as unknown as Service[]);
		.concat(realServicesQ22025 as unknown as Service[]);
		.concat(realServicesQ32025 as unknown as Service[]);
		.concat(realQ4Services2025 as unknown as Service[]);
		.concat(real2025Q4Additions as unknown as Service[]);
		.concat(realMarketServicesExtended as unknown as Service[]);