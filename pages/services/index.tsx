import Head from 'next/head';
import Link from 'next/link';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { extraServices } from '../../data/extra-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { realMarketServices } from '../../data/real-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { realOperationalServices } from '../../data/real-operational-services';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realQ4Services2025 } from '../../data/real-2025-q4-additions';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
import { realMarketServicesExtended } from '../../data/real-market-services-extended';
import { real2026Q1Additions } from '../../data/real-2026-q1-additions';
import { added2026Q2Services } from '../../data/added-2026-q2-services';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';
import { real2028ServiceExpansions } from '../../data/real-2028-service-expansions';
import { real2029Q1Additions } from '../../data/real-2029-q1-additions';
import { real2029Q2Additions } from '../../data/real-2029-q2-additions';
import { real2029Q3Additions } from '../../data/real-2029-q3-additions';
import { real2029Q4Additions } from '../../data/real-2029-q4-additions';
import { real2030Q1Additions } from '../../data/real-2030-q1-additions';
import { real2031MicroSaasAdditions } from '../../data/real-2031-micro-saas-additions';
import { real2031ITServicesAdditions } from '../../data/real-2031-it-services-additions';
import { real2031AIServicesAdditions } from '../../data/real-2031-ai-services-additions';
import { real2030Q2Additions } from '../../data/real-2030-q2-additions';
import { real2027Q3Additions } from '../../data/real-2027-q3-additions';
import { professionalServices } from '../../data/professional-services';
import { real2032ServiceExpansions } from '../../data/real-2032-service-expansions';
import { real2035Q1Additions } from '../../data/real-2035-q1-additions';
import { real2035Q2AdditionsExtra } from '../../data/real-2035-q2-additions-extra';
import { real2025ExtraServices } from '../../data/real-2025-extra-services';
import { real2026Q4ExpansionsV2 } from '../../data/real-2026-q4-expansions-v2';
import { real2036ServiceExpansions } from '../../data/real-2036-service-expansions';
import { real2026Q4ExpansionsV3 } from '../../data/real-2026-q4-expansions-v3';
import { real2036MicroSaasAdditions } from '../../data/real-2036-micro-saas-additions';
import { real2036ITServicesAdditions } from '../../data/real-2036-it-services-additions';
import { real2036AIServicesAdditions } from '../../data/real-2036-ai-services-additions';
import { innovative2025MicroSaasBatch } from '../../data/innovative-2025-micro-saas-batch';
import { innovative2025ITEnterpriseBatch } from '../../data/innovative-2025-it-enterprise-batch';
import { innovativeMicroSaasServices } from '../../data/innovative-2025-micro-saas-expansions';
import { innovativeITServices } from '../../data/innovative-2025-it-services-expansions';
import { innovativeAIServices } from '../../data/innovative-2025-ai-services-expansions';
// Import our new 2025 advanced services
import { advanced2025MicroSaasExpansion } from '../../data/2025-advanced-micro-saas-expansion';
import { advanced2025ITSolutionsExpansion } from '../../data/2025-advanced-it-solutions-expansion';
import { advancedAIServicesExpansion2025 } from '../../data/2025-advanced-ai-services-expansion';

// Import our new 2025 innovative services
import { innovativeMicroSaasExpansion2025 } from '../../data/2025-innovative-micro-saas-expansion';
import { innovative2025ITSolutionsExpansion } from '../../data/2025-innovative-it-solutions-expansion';
import { innovative2025AISolutionsExpansion } from '../../data/2025-innovative-ai-solutions-expansion';

// Import our new 2025 innovative services V3
import { innovativeMicroSaasExpansionV32025 } from '../../data/2025-innovative-micro-saas-expansion-v3';
import { innovativeITServicesExpansion2025V3 } from '../../data/innovative-2025-it-services-expansion-v3';
import { innovativeAIServicesExpansion2025V3 } from '../../data/innovative-2025-ai-services-expansion-v3';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const categories = [
  'AI & Data',
  'Developer Tools',
  'Cloud & FinOps',
  'Observability',
  'Quality & Monitoring',
  'Quantum Computing',
  'Neuromorphic AI',
  'Edge Computing',
  'Cybersecurity',
  'Supply Chain',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Education',
  'Government',
  'Energy',
  'Transportation',
  'Blockchain & Web3',
  'IoT & Edge Computing',
  'Enterprise Solutions',
  'Innovation & Research'
];

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[],
      additionalEnhancedServices as unknown[],
      newlyAddedServices as unknown[],
      curatedMarketServices as unknown[],
      realMarketServices as unknown[],
      realMarketServicesExtended as unknown[],
      new2025Services as unknown[],
      marketValidatedServices as unknown[],
      moreRealServices2025 as unknown[],
      realOperationalServices as unknown[],
      verified2025Additions as unknown[],
      realServicesQ12025 as unknown[],
      realEnterpriseServices2025 as unknown[],
      realMarketAugmentations2025 as unknown[],
      verifiedRealServices2025Batch2 as unknown[],
      additionalLiveServices2025 as unknown[],
      real2025Q2Additions as unknown[],
      augmentedServicesBatch3 as unknown[],
      realServicesQ22025 as unknown[],
      realServicesQ32025 as unknown[],
      realQ4Services2025 as unknown[],
      real2025Q4Additions as unknown[],
      real2025Q4AugmentedBatch as unknown[],
      real2026Q1Additions as unknown[],
      added2026Q2Services as unknown[],
      real2026Q3Additions as unknown[],
      real2026Q4Additions as unknown[],
      real2026Q4NewServices as unknown[],
      real2027Q1Additions as unknown[],
      real2027Q2Additions as unknown[],
      real2027Q3Additions as unknown[],
      real2028ServiceExpansions as unknown[],
      innovativeMicroSaasServices as unknown[],
      innovativeITServices as unknown[],
      innovativeAIServices as unknown[],
      real2029Q1Additions as unknown[],
      real2029Q2Additions as unknown[],
      real2029Q3Additions as unknown[],
      real2029Q4Additions as unknown[],
      real2030Q1Additions as unknown[],
      real2031MicroSaasAdditions as unknown[],
      real2031ITServicesAdditions as unknown[],
      real2031AIServicesAdditions as unknown[],
      real2030Q2Additions as unknown[],
      real2027Q3Additions as unknown[],
      professionalServices as unknown[],
      real2032ServiceExpansions as unknown[],
      real2035Q1Additions as unknown[],
      real2035Q2AdditionsExtra as unknown[],
      real2025ExtraServices as unknown[],
      real2026Q4ExpansionsV2 as unknown[],
      real2026Q4ExpansionsV3 as unknown[],
      real2036ServiceExpansions as unknown[],
      real2036MicroSaasAdditions as unknown[],
      real2036ITServicesAdditions as unknown[],
      real2036AIServicesAdditions as unknown[]
    )
    .concat(innovative2025MicroSaasBatch as unknown[])
    .concat(innovative2025ITEnterpriseBatch as unknown[])
    .concat(innovativeMicroSaasServices as unknown[])
    .concat(innovativeITServices as unknown[])
    .concat(innovativeAIServices as unknown[])
    // Our new 2025 advanced services
    .concat(advanced2025MicroSaasExpansion as unknown[])
    .concat(advanced2025ITSolutionsExpansion as unknown[])
    .concat(advancedAIServicesExpansion2025 as unknown[])
    // Our new 2025 innovative services
    .concat(innovativeMicroSaasExpansion2025 as unknown[])
    .concat(innovative2025ITSolutionsExpansion as unknown[])
    .concat(innovative2025AISolutionsExpansion as unknown[])
    // Our new 2025 advanced services V2
    // .concat(advancedMicroSaasExpansion2025V2 as unknown[])
    // .concat(advancedITInfrastructureExpansion2025V2 as unknown[])
    // .concat(advancedAIServicesExpansion2025V2 as unknown[])
    // Our new 2025 innovative services V3
    .concat(innovativeMicroSaasExpansionV32025 as unknown[])
    .concat(innovativeITServicesExpansion2025V3 as unknown[])
    .concat(innovativeAIServicesExpansion2025V3 as unknown[])
    ;

  // Filter out services without required properties
  const validServices = all.filter(service => 
    service && 
    typeof service === 'object' && 
    'name' in service && 
    'description' in service &&
    'price' in service
  );

  // Group services by category
  const servicesByCategory = categories.reduce((acc, category) => {
    acc[category] = validServices.filter((service: any) => 
      service.category && service.category.toLowerCase().includes(category.toLowerCase().replace(/\s+/g, ''))
    );
    return acc;
  }, {} as Record<string, unknown[]>);

  // Normalize various category labels into our main buckets
  const categoryAliases: Record<string, string> = {
    'AI & Data': 'AI & Data',
    'AI & Machine Learning': 'AI & Data',
    'GenAI': 'AI & Data',
    'Cloud & FinOps': 'Cloud & FinOps',
    'Cloud & Data': 'Cloud & FinOps',
    'Platform Engineering': 'Cloud & FinOps',
    'Observability': 'Observability',
    'Observability & Telemetry': 'Observability',
    'Quality & Monitoring': 'Quality & Monitoring',
    'Security & Reliability': 'Quality & Monitoring',
    'Security & Compliance': 'Quality & Monitoring',
    'Developer Tools': 'Developer Tools',
    'Growth & Marketing': 'Developer Tools'
  };

  // Create byCategory mapping
  const byCategory: Record<string, unknown[]> = {};
  for (const c of categories) byCategory[c] = [];
  
  for (const s of all) {
    const service = s as { category?: string | string[] };
    const rawCatValue = service.category;
    const rawCat = Array.isArray(rawCatValue) ? (rawCatValue[0] || '') : (rawCatValue || '');
    const mapped = categoryAliases[rawCat] || (categories.includes(rawCat) ? rawCat : 'Developer Tools');
    byCategory[mapped].push(s);
  }

  // Get featured services (marked as popular)
  const featuredServices = validServices.filter((service: any) => service.popular).slice(0, 6);

  const [shownCounts, setShownCounts] = React.useState<Record<string, number>>(() => Object.fromEntries(categories.map(c => [c, 12])));
  const [searchQuery, setSearchQuery] = React.useState('');





  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including AI, cloud, cybersecurity, and blockchain solutions." />
      </Head>
      
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Our Services
        </h1>
        
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#6b7280', 
          textAlign: 'center', 
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          We offer comprehensive technology solutions to help your business thrive in the digital age.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {serviceCategories.map((category, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: '#1f2937'
              }}>
                {category.title}
              </h3>
              
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                {category.description}
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} style={{ 
                    marginBottom: '0.75rem',
                    padding: '0.75rem',
                    backgroundColor: '#f9fafb',
                    borderRadius: '0.5rem',
                    border: '1px solid #e5e7eb'
                  }}>
                    <Link href={service.href} style={{
                      textDecoration: 'none',
                      color: '#3b82f6',
                      fontWeight: '500'
                    }}>
                      {service.name}
                    </Link>
                    <div style={{ 
                      fontSize: '0.875rem', 
                      color: '#6b7280', 
                      marginTop: '0.25rem' 
                    }}>
                      {service.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#f8fafc',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{ 
            color: '#6b7280', 
            marginBottom: '1.5rem',
            fontSize: '1.125rem'
          }}>
            Contact us today to discuss your project requirements and get a custom quote.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'background-color 0.2s'
          }}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;