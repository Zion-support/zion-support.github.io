import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const revalidate = false;

interface CatalogPriceRow {
  slug: string;
  estimatedPrice?: number | null;
  priceRange?: string | null;
  confidence?: string;
  sources?: unknown;
}

interface CatalogAppRow {
  slug: string;
  title?: string;
  category?: string;
  price?: number | null;
  priceRange?: string | null;
  priceConfidence?: string;
  purchaseUrl?: string;
  pricingSources?: unknown;
}

interface PricesFile {
  prices?: CatalogPriceRow[];
  lastUpdated?: string | null;
}

interface AppCatalogFile {
  apps?: CatalogAppRow[];
  lastPriceUpdate?: string | null;
}

export async function GET() {
  try {
    const pricesPath = path.join(process.cwd(), 'automation/data/market-prices.json');
    const appCatalogPath = path.join(process.cwd(), 'automation/data/app-catalog.json');

    let pricesData: PricesFile = { prices: [] };
    let appData: AppCatalogFile = { apps: [] };

    if (fs.existsSync(pricesPath)) {
      pricesData = JSON.parse(fs.readFileSync(pricesPath, 'utf8')) as PricesFile;
    }

    if (fs.existsSync(appCatalogPath)) {
      appData = JSON.parse(fs.readFileSync(appCatalogPath, 'utf8')) as AppCatalogFile;
    }

    // Combine price data with app catalog
    const combined =
      appData.apps?.map((app) => {
        const priceInfo = pricesData.prices?.find((p) => p.slug === app.slug);
      return {
        slug: app.slug,
        title: app.title,
        category: app.category,
        price: app.price || priceInfo?.estimatedPrice || null,
        priceRange: app.priceRange || priceInfo?.priceRange || null,
        confidence: app.priceConfidence || priceInfo?.confidence || 'low',
        purchaseUrl: app.purchaseUrl || `/checkout?product=${app.slug}`,
        sources: app.pricingSources || priceInfo?.sources || []
      };
    }) || [];
    
    return NextResponse.json({
      prices: combined,
      lastUpdated: pricesData.lastUpdated || appData.lastPriceUpdate || null
    });
  } catch (error) {
    console.error('Error loading market prices:', error);
    return NextResponse.json(
      { error: 'Failed to load prices' },
      { status: 500 }
    );
  }
}