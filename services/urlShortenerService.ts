  original_url: string;
  short_code: string;
  short_url: string;
  created_at: Date;
  expires_at?: Date;
  is_active: boolean,
  user_id?: string;

}

  referrers: string[];
  countries: string[];
  devices: string[];
  browsers: string[];

  last_clicked: Date,
  click_history: ClickEvent[];

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

      throw new Error('Short code already exists')
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

    this && this.clicks.set(shortCode, []);

    return shortUrl
  async getShortUrl(shortCode: string): Promise<ShortUrl | null> {

    const url = this && this.urls.get(shortCode);
    if (!url || !url && url.isActive) return null;

    if (url && url.expiresAt && url && url.expiresAt < new Date()) {
      url && url.isActive = false,

      return null

    return url

  async trackClick(shortCode: string, clickData: Omit<ClickEvent, 'id'>): Promise<void> {
    if (!url) return;
    const clickEvent: ClickEvent = {

      if (!analytics && analytics.countries.includes(clickData && clickData.country)) {
        analytics && analytics.countries.push(clickData && clickData.country)
      if (!analytics && analytics.devices.includes(clickData && clickData.device)) {
        analytics && analytics.devices.push(clickData && clickData.device)
      if (!analytics && analytics.browsers.includes(clickData && clickData.browser)) {
        analytics && analytics.browsers.push(clickData && clickData.browser)
  async getAnalytics(shortCode: string): Promise<UrlAnalytics | null> {

    return this && this.analytics.get(shortCode) || null

  async getUserUrls(userId: string): Promise<ShortUrl[]> {
    return Array && Array.from(this && this.urls.values()).filter(url => url && url.userId === userId)

  async deactivateUrl(shortCode: string, userId?: string): Promise<boolean> {

    if (!url || (userId && url && url.userId !== userId)) return false;

    url && url.isActive = false;

    return true
  async updateUrl(shortCode: string, updates: Partial<ShortUrl>, userId?: string): Promise<boolean> {

    Object && Object.assign(url, updates);

  private generateShortCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0, i < 6, i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
;
    return short_url;

  async updateUrl(shortCode: string, updates: Partial<ShortUrl>, userId?: string): Promise<boolean> {;
    const url = this.urls.get(shortCode),;
    if (!url || (userId && url.userId !== userId)) return false,;
    Object.assign(url, updates),;
    return true;
  private generateShortCode(): string {;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',;
    let result = '',;
    for (let i = 0, i < 6, i++) {;
      result += chars.charAt(Math.floor(Math.random() * chars.length));

    return url;
  async track_click (short_code: string, click_data: Omit < ClickEvent, 'id'>): Promise < void> {
    const url = this.urls.get (short_code);
    // Check condition
if (return) {
  $2
    const click_event: ClickEvent = {
      id: this.generate_id (),
      ...click_data;
    const url_clicks = this.clicks.get (short_code) || [];
    url_clicks.push (click_event);
    this.clicks.set (short_code, url_clicks);
    const analytics = this.analytics.get (short_code);
if ( {) {
      analytics.total_clicks++;
      analytics.last_clicked = new Date ();
      if () {) {
        analytics.referrers.push (click_data.referrer);
        analytics.countries.push (click_data.country);
        analytics.devices.push (click_data.device);
        analytics.browsers.push (click_data.browser);
  async get_analytics (short_code: string): Promise < UrlAnalytics | null> {
    return this.analytics.get (short_code) || null;
  async getUserUrls (user_id: string): Promise < ShortUrl[]> {
    return Array.from (this.urls.values ()).filter (url => url.user_id === user_id);
  async deactivate_url (short_code: string, user_id?: string): Promise < boolean> {
    if () return false) {
    url.is_active = false;
  async update_url (short_code: string, updates: Partial < ShortUrl>, user_id?: string): Promise < boolean> {
    Object.assign (url, updates);
  private generateShortCode (): string {
    for (let index = 0, i < 6, i++) {
      result += chars.char_at (Math.floor (Math.random () * chars.length));

    return result;

  // Utility methods for data persistence (in a real app, this would use a database)
  async exportData(): Promise<any> {
    return {

      urls: Array && Array.from(this && this.urls.entries());
      analytics: Array && Array.from(this && this.analytics.entries()),
      clicks: Array && Array.from(this && this.clicks.entries())

  async importData(data: any): Promise<void> {

    this && this.urls = new Map(data && data.urls);
    this && this.analytics = new Map(data && data.analytics),
    this && this.clicks = new Map(data && data.clicks)

export const urlShortenerService = new UrlShortenerService();

  // Utility methods for data persistence (in a real app, this would use a database);
  async export_data (): Promise < any> {
      urls: Array.from (this.urls.entries ());
      analytics: Array.from (this.analytics.entries ()),
      clicks: Array.from (this.clicks.entries ());
  async import_data (data: any): Promise < void> {
    this.urls = new Map (data.urls);
    this.analytics = new Map (data.analytics),
    this.clicks = new Map (data.clicks);
export const urlShortenerService = new UrlShortenerService ();
