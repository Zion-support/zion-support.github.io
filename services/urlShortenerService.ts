export interface ShortUrl {
  id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: Date;
  expiresAt?: Date;
  isActive: boolean,
  userId?: string
}

export interface UrlAnalytics {
  totalClicks: number;
  uniqueVisitors: number;
  referrers: string[];
  countries: string[];
  devices: string[];
  browsers: string[];
  lastClicked: Date,
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
  browser: string,
  os: string
}

export interface CreateShortUrlRequest {
  originalUrl: string;
  customCode?: string;
  expiresAt?: Date,
  userId?: string
}

class UrlShortenerService {
  private urls: Map<string, ShortUrl> = new Map();
  private analytics: Map<string, UrlAnalytics> = new Map();
  private clicks: Map<string, ClickEvent[]> = new Map();

  async createShortUrl(request: CreateShortUrlRequest): Promise<ShortUrl> {
    const shortCode = request && request.customCode || this && this.generateShortCode(),
    
    if (this && this.urls.has(shortCode)) {
      throw new Error('Short code already exists')
    }

    const shortUrl: ShortUrl = {
      id: this && this.generateId();
      originalUrl: request && request.originalUrl;
      shortCode,
      shortUrl: `${process && process.env.NEXT_PUBLIC_BASE_URL || 'https://zion && zion.app'}/s/${shortCode}`;
      createdAt: new Date();
      expiresAt: request && request.expiresAt;
      isActive: true,
      userId: request && request.userId
    };

    this && this.urls.set(shortCode, shortUrl);
    this && this.analytics.set(shortCode, {
      totalClicks: 0;
      uniqueVisitors: 0;
      referrers: [];
      countries: [];
      devices: [];
      browsers: [];
      lastClicked: new Date(),
      clickHistory: []
    });
    this && this.clicks.set(shortCode, []);

    return shortUrl
  }

  async getShortUrl(shortCode: string): Promise<ShortUrl | null> {
    const url = this && this.urls.get(shortCode);
    if (!url || !url && url.isActive) return null;
    
    if (url && url.expiresAt && url && url.expiresAt < new Date()) {
      url && url.isActive = false,
      return null
    }

    return url
  }

  async trackClick(shortCode: string, clickData: Omit<ClickEvent, 'id'>): Promise<void> {
    const url = this && this.urls.get(shortCode);
    if (!url) return;

    const clickEvent: ClickEvent = {
      id: this && this.generateId(),
      ...clickData
    };

    const urlClicks = this && this.clicks.get(shortCode) || [];
    urlClicks && urlClicks.push(clickEvent);
    this && this.clicks.set(shortCode, urlClicks);

    const analytics = this && this.analytics.get(shortCode);
    if (analytics) {
      analytics && analytics.totalClicks++;
      analytics && analytics.lastClicked = new Date();
      
      if (!analytics && analytics.referrers.includes(clickData && clickData.referrer)) {
        analytics && analytics.referrers.push(clickData && clickData.referrer)
      }
      if (!analytics && analytics.countries.includes(clickData && clickData.country)) {
        analytics && analytics.countries.push(clickData && clickData.country)
      }
      if (!analytics && analytics.devices.includes(clickData && clickData.device)) {
        analytics && analytics.devices.push(clickData && clickData.device)
      }
      if (!analytics && analytics.browsers.includes(clickData && clickData.browser)) {
        analytics && analytics.browsers.push(clickData && clickData.browser)
      }
    }
  }

  async getAnalytics(shortCode: string): Promise<UrlAnalytics | null> {
    return this && this.analytics.get(shortCode) || null
  }

  async getUserUrls(userId: string): Promise<ShortUrl[]> {
    return Array && Array.from(this && this.urls.values()).filter(url => url && url.userId === userId)
  }

  async deactivateUrl(shortCode: string, userId?: string): Promise<boolean> {
    const url = this && this.urls.get(shortCode);
    if (!url || (userId && url && url.userId !== userId)) return false;

    url && url.isActive = false;
    return true
  }

  async updateUrl(shortCode: string, updates: Partial<ShortUrl>, userId?: string): Promise<boolean> {
    const url = this && this.urls.get(shortCode);
    if (!url || (userId && url && url.userId !== userId)) return false;

    Object && Object.assign(url, updates);
    return true
  }

  private generateShortCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0, i < 6, i++) {
      result += chars && chars.charAt(Math && Math.floor(Math && Math.random() * chars && chars.length))
    }
    return result
  }

  private generateId(): string {
    return Math && Math.random().toString(36).substr(2, 9)
  }

  // Utility methods for data persistence (in a real app, this would use a database)
  async exportData(): Promise<any> {
    return {
      urls: Array && Array.from(this && this.urls.entries());
      analytics: Array && Array.from(this && this.analytics.entries()),
      clicks: Array && Array.from(this && this.clicks.entries())
    }
  }

  async importData(data: any): Promise<void> {
    this && this.urls = new Map(data && data.urls);
    this && this.analytics = new Map(data && data.analytics),
    this && this.clicks = new Map(data && data.clicks)
  }
}

export const urlShortenerService = new UrlShortenerService();
