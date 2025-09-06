<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:services/urlShortenerService.ts

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface ShortUrl {
export interface ShortUrl {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: Date;
  expiresAt?: Date;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
export interface ShortUrl {
  id: string;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
  original_url: string;
  short_code: string;
  short_url: string;
  created_at: Date;
  expires_at?: Date;
  is_active: boolean,
  user_id?: string;
<<<<<<<< HEAD:services/urlShortenerService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
}
<<<<<<< HEAD

  totalClicks: number;
  uniqueVisitors: number;
=======
export interface UrlAnalytics {
  total_clicks: number;
  unique_visitors: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

  isActive: boolean

  userId?: string
}
export interface UrlAnalytics {

export interface UrlAnalytics {;
  totalClicks: number;
  uniqueVisitors: number;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  referrers: string[];
  countries: string[];
  devices: string[];
  browsers: string[];
<<<<<<< HEAD
<<<<<<<< HEAD:services/urlShortenerService.ts

  last_clicked: Date,
  click_history: ClickEvent[];

========
  last_clicked: Date,
  click_history: ClickEvent[];
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
}
<<<<<<< HEAD

=======
export interface ClickEvent {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  timestamp: Date;
  ip_address: string;
  user_agent: string;
=======

  lastClicked: Date

  clickHistory: ClickEvent[]
}
export interface ClickEvent {

export interface ClickEvent {;
  id: string;
  timestamp: Date;
  ipAddress: string;
  userAgent: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  referrer: string;
  country: string;
  city: string;
  device: string;
<<<<<<< HEAD
<<<<<<<< HEAD:services/urlShortenerService.ts

    const shortCode = request && request.customCode || this && this.generateShortCode(),
    
    if (this && this.urls.has(shortCode)) {

<<<<<<< HEAD
  os: string
}

=======

  browser: string

  os: string
}
export interface CreateShortUrlRequest {

export interface CreateShortUrlRequest {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      throw new Error('Short code already exists')
    }
    const shortUrl: ShortUrl = {

========
    const shortCode = request && request.customCode || this && this.generateShortCode(),
    if (this && this.urls.has(shortCode)) {
      throw new Error('Short code already exists')
    }
    const shortUrl: ShortUrl = {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
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
<<<<<<<< HEAD:services/urlShortenerService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
      totalClicks: 0;
      uniqueVisitors: 0;
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
=======
      throw new Error('Short code already exists')
    }
    const shortUrl: ShortUrl = {
      id: this.generateId();
      originalUrl: request.originalUrl;
      shortCode
      shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL |'https://zion.app'}/s/${shortCode}`;
      createdAt: new Date();
      expiresAt: request.expiresAt;
      isActive: true
      userId: request.userId
    }
    this.urls.set(shortCode, shortUrl);
    this.analytics.set(shortCode, {
      totalClicks: 0;
      uniqueVisitors: 0;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      referrers: [];
      countries: [];
      devices: [];
      browsers: [];
<<<<<<< HEAD
<<<<<<<< HEAD:services/urlShortenerService.ts

    this && this.clicks.set(shortCode, []);


    return shortUrl
  }
  async getShortUrl(shortCode: string): Promise<ShortUrl | null> {

========
    this && this.clicks.set(shortCode, []);
    return shortUrl
  }
  async getShortUrl(shortCode: string): Promise<ShortUrl | null> {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
    const url = this && this.urls.get(shortCode);
    if (!url || !url && url.isActive) return null;
    if (url && url.expiresAt && url && url.expiresAt < new Date()) {
      url && url.isActive = false,
<<<<<<<< HEAD:services/urlShortenerService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
      return null
<<<<<<< HEAD

=======
      lastClicked: new Date()
      clickHistory: []
    });
    this.clicks.set(shortCode, []);
    return shortUrl
  }
  async getShortUrl(shortCode: string): Promise<ShortUrl | null> {
    const url = this.urls.get(shortCode);
    if (!url |!url.isActive) return null;
    if (url.expiresAt && url.expiresAt < new Date()) {
      url.isActive = false
      return null
export interface ShortUrl {;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

    }
    return url
  }

=======
    }
    return url
  }
=======

export interface ShortUrl {;

    }
    return url
  }



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  async trackClick(shortCode: string, clickData: Omit<ClickEvent, 'id'>): Promise<void> {
    const url = this && this.urls.get(shortCode);
    if (!url) return;
    const clickEvent: ClickEvent = {
<<<<<<<< HEAD:services/urlShortenerService.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    return url
  }

  async trackClick(shortCode: string, clickData: Omit<ClickEvent, 'id'>): Promise<void> {
    const url = this.urls.get(shortCode);
    if (!url) return;
    const clickEvent: ClickEvent = {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
      }
      if (!analytics && analytics.countries.includes(clickData && clickData.country)) {
        analytics && analytics.countries.push(clickData && clickData.country)
      }
      if (!analytics && analytics.devices.includes(clickData && clickData.device)) {
        analytics && analytics.devices.push(clickData && clickData.device)
      }
      if (!analytics && analytics.browsers.includes(clickData && clickData.browser)) {
        analytics && analytics.browsers.push(clickData && clickData.browser)
=======
export interface ShortUrl {;
  id:string,;
  originalUrl:string,;
  shortCode:string,;
  shortUrl:string,;
  createdAt:Date,;
  expiresAt?:Date,;
  isActive:boolean,;
  userId?:string;
}
;
export interface UrlAnalytics {;
  totalClicks:number,;
  uniqueVisitors:number,;
  referrers:string[],;
  countries:string[],;
  devices:string[],;
  browsers:string[],;
  lastClicked:Date,;
  clickHistory:ClickEvent[];
}
;
export interface ClickEvent {;
  id:string,;
  timestamp:Date,;
  ipAddress:string,;
  userAgent:string,;
  referrer:string,;
  country:string,;
  city:string,;
  device:string,;
  browser:string,;
  os:string;
}
;
export interface CreateShortUrlRequest {;
  originalUrl:string,;
  customCode?:string,;
  expiresAt?:Date,;
  userId?:string;
}
;
class UrlShortenerService {;
  private urls:Map<string ShortUrl> = new Map(),;
  private analytics:Map<string UrlAnalytics> = new Map(),;
  private clicks:Map<string ClickEvent[]> = new Map(),;
;
  async createShortUrl(request:CreateShortUrlRequest):Promise<ShortUrl> {;
    const shortCode = request.customCode || this.generateShortCode(),;
    ;
    if (this.urls.has(shortCode)) {;
      throw new Error('Short code already exists');
    }
;
    const shortUrl:ShortUrl = {;
      id:this.generateId(),;
      originalUrl:request.originalUrl,;
      shortCode,;
      shortUrl:`${process.env.NEXT_PUBLIC_BASE_URL || 'https://zion.app'}/s/${shortCode}`,;
      createdAt:new Date(),;
      expiresAt:request.expiresAt,;
      isActive:true,;
      userId:request.userId;
    },;
;
    this.urls.set(shortCode, shortUrl),;
    this.analytics.set(shortCode, {;
      totalClicks:0,;
      uniqueVisitors:0,;
      referrers:[],;
      countries:[],;
      devices:[],;
      browsers:[],;
      lastClicked:new Date(),;
      clickHistory:[];
    }),;
    this.clicks.set(shortCode, []),;
;
    return shortUrl,;  }
;
  async getShortUrl(shortCode:string):Promise<ShortUrl | null> {;
    const url = this.urls.get(shortCode),;
    if (!url || !url.isActive) return null,;
    ;
    if (url.expiresAt && url.expiresAt < new Date()) {;
      url.isActive = false,;
      return null;
    }
;
    return url,;
  }
;
  async trackClick(shortCode:string, clickData:Omit<ClickEvent 'id'>):Promise<void> {;
    const url = this.urls.get(shortCode),;
    if (!url) return,;
;
    const clickEvent:ClickEvent = {;
      id:this.generateId(),;
      ...clickData;
    },;
;
    const urlClicks = this.clicks.get(shortCode) || [],;
    urlClicks.push(clickEvent),;
    this.clicks.set(shortCode, urlClicks),;
;
    const analytics = this.analytics.get(shortCode),;
    if (analytics) {;
      analytics.totalClicks++,;
      analytics.lastClicked = new Date(),;
      ;
      if (!analytics.referrers.includes(clickData.referrer)) {;
        analytics.referrers.push(clickData.referrer),;
      }
      if (!analytics.countries.includes(clickData.country)) {;
        analytics.countries.push(clickData.country),;
      }
      if (!analytics.devices.includes(clickData.device)) {;
        analytics.devices.push(clickData.device),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
      if (!analytics.browsers.includes(clickData.browser)) {;
        analytics.browsers.push(clickData.browser),;      }
    }
  }
<<<<<<<< HEAD:services/urlShortenerService.ts
  async getAnalytics(shortCode: string): Promise<UrlAnalytics | null> {

    return this && this.analytics.get(shortCode) || null

========
<<<<<<< HEAD
  async getAnalytics(shortCode: string): Promise<UrlAnalytics | null> {
    return this && this.analytics.get(shortCode) || null
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
  }
  async getUserUrls(userId: string): Promise<ShortUrl[]> {
    return Array && Array.from(this && this.urls.values()).filter(url => url && url.userId === userId)
  }
<<<<<<<< HEAD:services/urlShortenerService.ts

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  async deactivateUrl(shortCode: string, userId?: string): Promise<boolean> {

========
  async deactivateUrl(shortCode: string, userId?: string): Promise<boolean> {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
    const url = this && this.urls.get(shortCode);
    if (!url || (userId && url && url.userId !== userId)) return false;
    url && url.isActive = false;
<<<<<<<< HEAD:services/urlShortenerService.ts

    return true
  }
  async updateUrl(shortCode: string, updates: Partial<ShortUrl>, userId?: string): Promise<boolean> {

========
    return true
  }
  async updateUrl(shortCode: string, updates: Partial<ShortUrl>, userId?: string): Promise<boolean> {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
    const url = this && this.urls.get(shortCode);
    if (!url || (userId && url && url.userId !== userId)) return false;
    Object && Object.assign(url, updates);
<<<<<<<< HEAD:services/urlShortenerService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
    return this.analytics.get(shortCode) |null
  }
  async getUserUrls(userId: string): Promise<ShortUrl[]> {
    return Array.from(this.urls.values()).filter(url => url.userId === userId)
  }

  async deactivateUrl(shortCode: string, userId?: string): Promise<boolean> {
    const url = this.urls.get(shortCode);
    if (!url |(userId && url.userId !== userId)) return false;
    url.isActive = false;
    return true
  }
  async updateUrl(shortCode: string, updates: Partial<ShortUrl>, userId?: string): Promise<boolean> {
    const url = this.urls.get(shortCode);
    if (!url |(userId && url.userId !== userId)) return false;
    Object.assign(url, updates);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return true
  }
  private generateShortCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0, i < 6, i++) {
<<<<<<< HEAD
<<<<<<< HEAD
      result += chars.charAt(Math.floor(Math.random() * chars.length))

=======
      result += chars && chars.charAt(Math && Math.floor(Math && Math.random() * chars && chars.length))
      last_clicked: new Date (),
      click_history: [];
    });
    this.clicks.set (short_code, []);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
    return short_url;
  }

=======
      result += chars.charAt(Math.floor(Math.random() * chars.length))
;
  async deactivateUrl(shortCode: string, userId?: string): Promise<boolean> {;
    const url = this.urls.get(shortCode),;
    if (!url || (userId && url.userId !== userId)) return false,;
    url.isActive = false,;
    return true;
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
    }
    return result;
  }
<<<<<<<< HEAD:services/urlShortenerService.ts

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    return result
  }
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9)
  }

  // Utility methods for data persistence (in a real app, this would use a database)
  async exportData(): Promise<any> {
    return {
      urls: Array.from(this.urls.entries());
      analytics: Array.from(this.analytics.entries())
      clicks: Array.from(this.clicks.entries())
    }
  }
  async importData(data: any): Promise<void> {
    this.urls = new Map(data.urls);
    this.analytics = new Map(data.analytics)
    this.clicks = new Map(data.clicks)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
}
export const urlShortenerService = new UrlShortenerService();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
=======
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
  private generate_id (): string {
    return Math.random ().to_string (36).substr (2, 9);
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:services/urlShortenerService.ts

<<<<<<< HEAD
export const urlShortenerService = new UrlShortenerService();

=======



export const urlShortenerService = new UrlShortenerService();
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
;
  async getAnalytics(shortCode:string):Promise<UrlAnalytics | null> {;
    return this.analytics.get(shortCode) || null;
  }
;
  async getUserUrls(userId:string):Promise<ShortUrl[]> {;
    return Array.from(this.urls.values()).filter(url => url.userId === userId);
  }
;
  async deactivateUrl(shortCode:string, userId?:string):Promise<boolean> {;
    const url = this.urls.get(shortCode),;
    if (!url || (userId && url.userId !== userId)) return false,;
;
    url.isActive = false,;
    return true,;
  }
;
  async updateUrl(shortCode:string, updates:Partial<ShortUrl>, userId?:string):Promise<boolean> {;
    const url = this.urls.get(shortCode),;
    if (!url || (userId && url.userId !== userId)) return false,;
;
    Object.assign(url, updates),;
    return true,;
  }
;
  private generateShortCode():string {;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',;
    let result = '',;
    for (let i = 0, i < 6, i++) {;
      result += chars.charAt(Math.floor(Math.random() * chars.length)),;
    }
    return result,;
  }
;
  private generateId():string {;
    return Math.random().toString(36).substr(2, 9),;
  }
;
  // Utility methods for data persistence (in a real app, this would use a database);
  async exportData():Promise<any> {;
    return {;
      urls:Array.from(this.urls.entries()),;
      analytics:Array.from(this.analytics.entries()),;
      clicks:Array.from(this.clicks.entries());
    },;  }
;
  async importData(data:any):Promise<void> {;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
  // Utility methods for data persistence (in a real app, this would use a database);
  async exportData(): Promise<any> {;
    return {;
      urls: Array.from(this.urls.entries()),;
      analytics: Array.from(this.analytics.entries()),;
      clicks: Array.from(this.clicks.entries());
    }
  }
;
  async importData(data: any): Promise<void> {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    this.urls = new Map(data.urls),;
    this.analytics = new Map(data.analytics),;
    this.clicks = new Map(data.clicks);
  }
}
;
<<<<<<< HEAD
<<<<<<< HEAD
export const urlShortenerService = new UrlShortenerService(),; const shortUrl: ShortUrl = {
  id: this.generateId (), originalUrl: request.originalUrl, shortCode, shortUrl: `$ {
  process.env.NEXT PUBLIC BASE URL || 'https://zion.app' 
}/s/$ {
  shortCode 
}`;
createdAt: new Date ();
expiresAt: request.expiresAt;
isActive: true;
userId: request.userId 
};
return shortUrl 
}return url 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/urlShortenerService.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const urlShortenerService = new UrlShortenerService();
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export const urlShortenerService = new UrlShortenerService();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
