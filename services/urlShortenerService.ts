<<<<<<< HEAD
export interface ShortUrl {
  id: string,
  originalUrl: string,
  shortCode: string,
  shortUrl: string,
  createdAt: Date,
  expiresAt?: Date,
  isActive: boolean,
  userId?: string
}

export interface UrlAnalytics {
  totalClicks: number,
  uniqueVisitors: number,
  referrers: string[],
  countries: string[],
  devices: string[],
  browsers: string[],
  lastClicked: Date,
  clickHistory: ClickEvent[]
}

export interface ClickEvent {
  id: string,
  timestamp: Date,
  ipAddress: string,
  userAgent: string,
  referrer: string,
  country: string,
  city: string,
  device: string,
  browser: string,
  os: string
}

export interface CreateShortUrlRequest {
  originalUrl: string,
  customCode?: string,
  expiresAt?: Date,
  userId?: string
}

class UrlShortenerService {
  private urls: Map<string ShortUrl> = new Map(),
  private analytics: Map<string UrlAnalytics> = new Map(),
  private clicks: Map<string ClickEvent[]> = new Map(),

  async createShortUrl(request: CreateShortUrlRequest): Promise<ShortUrl> {
    const shortCode = request.customCode || this.generateShortCode(),
    
    if (this.urls.has(shortCode)) {
      throw new Error('Short code already exists')
    }
=======
export interface ShortUrl {_id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: Date;
  expiresAt?: Date;
  isActive: boolean;
  userId?: string;}

export interface UrlAnalytics {_totalClicks: number;
  uniqueVisitors: number;
  referrers: string[];
  countries: string[];
  devices: string[];
  browsers: string[];
  lastClicked: Date;
  clickHistory: ClickEvent[];}

export interface ClickEvent {_id: string;
  timestamp: Date;
  ipAddress: string;
  userAgent: string;
  referrer: string;
  country: string;
  city: string;
  device: string;
  browser: string;
  os: string;}

export interface CreateShortUrlRequest {_originalUrl: string;
  customCode?: string;
  expiresAt?: Date;
  userId?: string;}

class UrlShortenerService {_private urls: Map<string, _ShortUrl> = new Map();
  private analytics: Map<string, _UrlAnalytics> = new Map();
  private clicks: Map<string, _ClickEvent[]> = new Map();

  async createShortUrl(request: CreateShortUrlRequest): Promise<ShortUrl> {
    const _shortCode = request.customCode || this.generateShortCode();
    
    if (this.urls.has(shortCode)) {
      throw new Error('Short code already exists');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const shortUrl: ShortUrl = {_id: this.generateId(), _originalUrl: request.originalUrl, _shortCode, _shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://zion.app'}/s/${_shortCode}`,
      createdAt: new Date(),
      expiresAt: request.expiresAt,
      isActive: true,
      userId: request.userId
    },

<<<<<<< HEAD
    this.urls.set(shortCode, shortUrl),
    this.analytics.set(shortCode, {
      totalClicks: 0,
      uniqueVisitors: 0,
      referrers: [],
      countries: [],
      devices: [],
      browsers: [],
      lastClicked: new Date(),
      clickHistory: []
    }),
    this.clicks.set(shortCode, []),
=======
    this.urls.set(shortCode, shortUrl);
    this.analytics.set(shortCode, {_totalClicks: 0, _uniqueVisitors: 0, _referrers: [], _countries: [], _devices: [], _browsers: [], _lastClicked: new Date(), _clickHistory: []});
    this.clicks.set(shortCode, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return shortUrl
  }

<<<<<<< HEAD
  async getShortUrl(shortCode: string): Promise<ShortUrl | null> {
    const url = this.urls.get(shortCode),
    if (!url || !url.isActive) return null,
    
    if (url.expiresAt && url.expiresAt < new Date()) {
      url.isActive = false,
      return null
    }
=======
  async getShortUrl(shortCode: string): Promise<ShortUrl | null> {_const _url = this.urls.get(shortCode);
    if (!url || !url.isActive) return null;
    
    if (url.expiresAt && url.expiresAt < new Date()) {
      url.isActive = false;
      return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return url
  }

<<<<<<< HEAD
  async trackClick(shortCode: string, clickData: Omit<ClickEvent 'id'>): Promise<void> {
    const url = this.urls.get(shortCode),
    if (!url) return,

    const clickEvent: ClickEvent = {
      id: this.generateId(),
      ...clickData
    },

    const urlClicks = this.clicks.get(shortCode) || [],
    urlClicks.push(clickEvent),
    this.clicks.set(shortCode, urlClicks),

    const analytics = this.analytics.get(shortCode),
    if (analytics) {
      analytics.totalClicks++,
      analytics.lastClicked = new Date(),
      
      if (!analytics.referrers.includes(clickData.referrer)) {
        analytics.referrers.push(clickData.referrer)
      }
      if (!analytics.countries.includes(clickData.country)) {
        analytics.countries.push(clickData.country)
      }
      if (!analytics.devices.includes(clickData.device)) {
        analytics.devices.push(clickData.device)
      }
      if (!analytics.browsers.includes(clickData.browser)) {
        analytics.browsers.push(clickData.browser)
      }
    }
  }

  async getAnalytics(shortCode: string): Promise<UrlAnalytics | null> {
    return this.analytics.get(shortCode) || null
  }

  async getUserUrls(userId: string): Promise<ShortUrl[]> {
    return Array.from(this.urls.values()).filter(url => url.userId === userId)
  }

  async deactivateUrl(shortCode: string, userId?: string): Promise<boolean> {
    const url = this.urls.get(shortCode),
    if (!url || (userId && url.userId !== userId)) return false,

    url.isActive = false,
    return true
  }

  async updateUrl(shortCode: string, updates: Partial<ShortUrl>, userId?: string): Promise<boolean> {
    const url = this.urls.get(shortCode),
    if (!url || (userId && url.userId !== userId)) return false,

    Object.assign(url, updates),
    return true
  }

  private generateShortCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    let result = '',
    for (let i = 0, i < 6, i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9)
  }

  // Utility methods for data persistence (in a real app, this would use a database)
  async exportData(): Promise<any> {
    return {
      urls: Array.from(this.urls.entries()),
      analytics: Array.from(this.analytics.entries()),
      clicks: Array.from(this.clicks.entries())
    }
  }

  async importData(data: any): Promise<void> {
    this.urls = new Map(data.urls),
    this.analytics = new Map(data.analytics),
    this.clicks = new Map(data.clicks)
  }
}

export const urlShortenerService = new UrlShortenerService(),
=======
  async trackClick(shortCode: string, clickData: Omit<ClickEvent, 'id'>): Promise<void> {_const _url = this.urls.get(shortCode);
    if (!url) return;

    const clickEvent: ClickEvent = {
      id: this.generateId(), _...clickData};

    const _urlClicks = this.clicks.get(shortCode) || [];
    urlClicks.push(clickEvent);
    this.clicks.set(shortCode, urlClicks);

    const _analytics = this.analytics.get(shortCode);
    if (analytics) {_analytics.totalClicks++;
      analytics.lastClicked = new Date();
      
      if (!analytics.referrers.includes(clickData.referrer)) {
        analytics.referrers.push(clickData.referrer);}
      if (!analytics.countries.includes(clickData.country)) {_analytics.countries.push(clickData.country);}
      if (!analytics.devices.includes(clickData.device)) {_analytics.devices.push(clickData.device);}
      if (!analytics.browsers.includes(clickData.browser)) {_analytics.browsers.push(clickData.browser);}
    }
  }

  async getAnalytics(shortCode: string): Promise<UrlAnalytics | null> {_return this.analytics.get(shortCode) || null;}

  async getUserUrls(userId: string): Promise<ShortUrl[]> {_return Array.from(this.urls.values()).filter(url => url.userId === userId);}

  async deactivateUrl(shortCode: string, userId?: string): Promise<boolean> {_const _url = this.urls.get(shortCode);
    if (!url || (userId && url.userId !== userId)) return false;

    url.isActive = false;
    return true;}

  async updateUrl(shortCode: string, updates: Partial<ShortUrl>, userId?: string): Promise<boolean> {_const _url = this.urls.get(shortCode);
    if (!url || (userId && url.userId !== userId)) return false;

    Object.assign(url, _updates);
    return true;}

  private generateShortCode(): string {_const _chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let _result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));}
    return result;
  }

  private generateId(): string {_return Math.random().toString(36).substr(2, _9);}

  // Utility methods for data persistence (in a real app, this would use a database)
  async exportData(): Promise<any> {_return {
      urls: Array.from(this.urls.entries()), _analytics: Array.from(this.analytics.entries()), _clicks: Array.from(this.clicks.entries())};
  }

  async importData(data: unknown): Promise<void> {_this.urls = new Map(data.urls);
    this.analytics = new Map(data.analytics);
    this.clicks = new Map(data.clicks);}
}

export const _urlShortenerService = new UrlShortenerService();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
