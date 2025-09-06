export interface ShortUrl {
  id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: Date;
  expiresAt?: Date;
  isActive: boolean;
  userId?: string
}

export interface UrlAnalytics {
  totalClicks: number;
  uniqueVisitors: number;
  referrers: string[];
  countries: string[];
  devices: string[];
  browsers: string[];
  lastClicked: Date;
  clickHistory: ClickEvent[]
}

export interface ClickEvent {
  id: string;
  timestamp: Date;
  ipAddress: string;
  userAgent: string;
  referrer: string;
  country: string;
  city: string;
  device: string;
  browser: string;
  os: string
}

export interface CreateShortUrlRequest {
  originalUrl: string;
  customCode?: string;
  expiresAt?: Date;
  userId?: string
}

class UrlShortenerService {
  private urls: Map<string, ShortUrl> = new Map();
  private analytics: Map<string, UrlAnalytics> = new Map();
  private clicks: Map<string, ClickEvent[]> = new Map();
  async createShortUrl(request: CreateShortUrlRequest): Promise<ShortUrl> {
    const shortCode = null;