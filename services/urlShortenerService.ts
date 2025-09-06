<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface ShortUrl {
=======
export interface ShortUrl {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export interface ShortUrl {
export interface ShortUrl {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: Date;
  expiresAt?: Date;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  original_url: string;
  short_code: string;
  short_url: string;
  created_at: Date;
  expires_at?: Date;
  is_active: boolean,
  user_id?: string;

}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
export interface UrlAnalytics {

export interface UrlAnalytics {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  totalClicks: number;
  uniqueVisitors: number;
=======
export interface UrlAnalytics {
  total_clicks: number;
  unique_visitors: number;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  referrers: string[];
  countries: string[];
  devices: string[];
  browsers: string[];

  last_clicked: Date,
  click_history: ClickEvent[];

}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
export interface ClickEvent {

export interface ClickEvent {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
export interface ClickEvent {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  id: string;
  timestamp: Date;
  ip_address: string;
  user_agent: string;
  referrer: string;
  country: string;
  city: string;
  device: string;

    const shortCode = request && request.customCode || this && this.generateShortCode(),
    
    if (this && this.urls.has(shortCode)) {

<<<<<<< HEAD
  os: string
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface CreateShortUrlRequest {
=======

export interface CreateShortUrlRequest {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export interface CreateShortUrlRequest {

export interface CreateShortUrlRequest {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  originalUrl: string;
  customCode?: string;

  expiresAt?: Date

  userId?: string
}
class UrlShortenerService {
  private urls: Map<string, ShortUrl> = new Map();
  private analytics: Map<string, UrlAnalytics> = new Map();
  private clicks: Map<string, ClickEvent[]> = new Map();
  async createShortUrl(request: CreateShortUrlRequest): Promise<ShortUrl> {

    const shortCode = request.customCode |this.generateShortCode()
    if (this.urls.has(shortCode)) {
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
  browser: string,
  os: string;
}
export interface CreateShortUrlRequest {
  original_url: string;
  custom_code?: string;
  expires_at?: Date,
  user_id?: string;
}
class UrlShortenerService {
  private urls: Map < string, ShortUrl> = new Map ();
  private analytics: Map < string, UrlAnalytics> = new Map ();
  private clicks: Map < string, ClickEvent[]> = new Map ();
;
  async createShortUrl (request: CreateShortUrlRequest): Promise < ShortUrl> {
    const short_code = request.custom_code || this.generateShortCode (),
    if () {) {
  $2
}
      throw new Error ('Short code already exists');
    }
    const short_url: ShortUrl = {
      id: this.generate_id ();
      original_url: request.original_url;
      short_code,
      short_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://zion.app'}/s/${short_code}`;
      created_at: new Date ();
      expires_at: request.expires_at;
      is_active: true,
      user_id: request.user_id;
    }
;
    this.urls.set (short_code, short_url);
    this.analytics.set (short_code, {
      total_clicks: 0;
      unique_visitors: 0;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      referrers: [];
      countries: [];
      devices: [];
      browsers: [];

    this && this.clicks.set(shortCode, []);


    return shortUrl
  }
  async getShortUrl(shortCode: string): Promise<ShortUrl | null> {

    const url = this && this.urls.get(shortCode);
    if (!url || !url && url.isActive) return null;
    
    if (url && url.expiresAt && url && url.expiresAt < new Date()) {
      url && url.isActive = false,

      return null
<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface ShortUrl {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
export interface ShortUrl {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  id: string,;
  originalUrl: string,;
  shortCode: string,;
  shortUrl: string,;
  createdAt: Date,;
  expiresAt?: Date,;
  isActive: boolean,;
  userId?: string;
}
;
export interface UrlAnalytics {;
  totalClicks: number,;
  uniqueVisitors: number,;
  referrers: string[],;
  countries: string[],;
  devices: string[],;
  browsers: string[],;
  lastClicked: Date,;
  clickHistory: ClickEvent[];
}
;
export interface ClickEvent {;
  id: string,;
  timestamp: Date,;
  ipAddress: string,;
  userAgent: string,;
  referrer: string,;
  country: string,;
  city: string,;
  device: string,;
  browser: string,;
  os: string;
}
;
export interface CreateShortUrlRequest {;
  originalUrl: string,;
  customCode?: string,;
  expiresAt?: Date,;
  userId?: string;
}
;
class UrlShortenerService {;
  private urls: Map<string ShortUrl> = new Map(),;
  private analytics: Map<string UrlAnalytics> = new Map(),;
  private clicks: Map<string ClickEvent[]> = new Map(),;
  async createShortUrl(request: CreateShortUrlRequest): Promise<ShortUrl> {;
    const shortCode = request.customCode || this.generateShortCode(),;
    if (this.urls.has(shortCode)) {;
      throw new Error('Short code already exists');
    }
;
    const shortUrl: ShortUrl = {;
      id: this.generateId(),;
      originalUrl: request.originalUrl,;
      shortCode,;
      shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://zion.app'}/s/${shortCode}`,;
      createdAt: new Date(),;
      expiresAt: request.expiresAt,;
      isActive: true,;
      userId: request.userId;
    },;
    this.urls.set(shortCode, shortUrl),;
    this.analytics.set(shortCode, {;
      totalClicks: 0,;
      uniqueVisitors: 0,;
      referrers: [],;
      countries: [],;
      devices: [],;
      browsers: [],;
      lastClicked: new Date(),;
      clickHistory: [];
    }),;
    this.clicks.set(shortCode, []),;
    return shortUrl;
  }
;
  async getShortUrl(shortCode: string): Promise<ShortUrl | null> {;
    const url = this.urls.get(shortCode),;
    if (!url || !url.isActive) return null,;
    if (url.expiresAt && url.expiresAt < new Date()) {;
      url.isActive = false,;
      return null;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    return url
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
    }
    return url
  }
=======

export interface ShortUrl {;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
    return url
  }

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  async trackClick(shortCode: string, clickData: Omit<ClickEvent, 'id'>): Promise<void> {
    const url = this && this.urls.get(shortCode);
    if (!url) return;
    const clickEvent: ClickEvent = {
<<<<<<< HEAD
      id: this.generateId()
      ...clickData
    }
    const urlClicks = this.clicks.get(shortCode) |[];
    urlClicks.push(clickEvent);
    this.clicks.set(shortCode, urlClicks);
    const analytics = this.analytics.get(shortCode);
    if (analytics) {
      analytics.totalClicks++;
      analytics.lastClicked = new Date();
      if (!analytics.referrers.includes(clickData.referrer)) {
        analytics.referrers.push(clickData.referrer)
;
  async trackClick(shortCode: string, clickData: Omit<ClickEvent 'id'>): Promise<void> {;
    const url = this.urls.get(shortCode),;
    if (!url) return,;
    const clickEvent: ClickEvent = {;
      id: this.generateId(),;
      ...clickData;
    },;
    const urlClicks = this.clicks.get(shortCode) || [],;
    urlClicks.push(clickEvent),;
    this.clicks.set(shortCode, urlClicks),;
    const analytics = this.analytics.get(shortCode),;
    if (analytics) {;
      analytics.totalClicks++,;
      analytics.lastClicked = new Date(),;
      if (!analytics.referrers.includes(clickData.referrer)) {;
        analytics.referrers.push(clickData.referrer);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
      result += chars.charAt(Math.floor(Math.random() * chars.length))
;
    return short_url;
  }

;
  async updateUrl(shortCode: string, updates: Partial<ShortUrl>, userId?: string): Promise<boolean> {;
    const url = this.urls.get(shortCode),;
    if (!url || (userId && url.userId !== userId)) return false,;
    Object.assign(url, updates),;
    return true;
  }
;
  private generateShortCode(): string {;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',;
    let result = '',;
    for (let i = 0, i < 6, i++) {;
      result += chars.charAt(Math.floor(Math.random() * chars.length));
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    }
    return result
  }
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9)
  }
<<<<<<< HEAD
=======

=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
    return url;
  }
  async track_click (short_code: string, click_data: Omit < ClickEvent, 'id'>): Promise < void> {
    const url = this.urls.get (short_code);
    // Check condition
if (return) {
  $2
}
    const click_event: ClickEvent = {
      id: this.generate_id (),
      ...click_data;
    }
;
    const url_clicks = this.clicks.get (short_code) || [];
    url_clicks.push (click_event);
    this.clicks.set (short_code, url_clicks);
;
    const analytics = this.analytics.get (short_code);
    // Check condition
if ( {) {
  $2
}
      analytics.total_clicks++;
      analytics.last_clicked = new Date ();
;
      if () {) {
  $2
}
        analytics.referrers.push (click_data.referrer);
      }
      if () {) {
  $2
}
        analytics.countries.push (click_data.country);
      }
      if () {) {
  $2
}
        analytics.devices.push (click_data.device);
      }
      if () {) {
  $2
}
        analytics.browsers.push (click_data.browser);
      }
    }
  }
  async get_analytics (short_code: string): Promise < UrlAnalytics | null> {
    return this.analytics.get (short_code) || null;
  }
  async getUserUrls (user_id: string): Promise < ShortUrl[]> {
    return Array.from (this.urls.values ()).filter (url => url.user_id === user_id);
  }
  async deactivate_url (short_code: string, user_id?: string): Promise < boolean> {
    const url = this.urls.get (short_code);
    if () return false) {
  $2
}
    url.is_active = false;
    return true;
  }
  async update_url (short_code: string, updates: Partial < ShortUrl>, user_id?: string): Promise < boolean> {
    const url = this.urls.get (short_code);
    if () return false) {
  $2
}
    Object.assign (url, updates);
    return true;
  }
  private generateShortCode (): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let index = 0, i < 6, i++) {
      result += chars.char_at (Math.floor (Math.random () * chars.length));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
    return result;
  }





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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

;
  // Utility methods for data persistence (in a real app, this would use a database);
  async export_data (): Promise < any> {
    return {
      urls: Array.from (this.urls.entries ());
      analytics: Array.from (this.analytics.entries ()),
      clicks: Array.from (this.clicks.entries ());
    }
  }
  async import_data (data: any): Promise < void> {
    this.urls = new Map (data.urls);
    this.analytics = new Map (data.analytics),
    this.clicks = new Map (data.clicks);
  }
}
export const urlShortenerService = new UrlShortenerService ();
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export const urlShortenerService = new UrlShortenerService();
