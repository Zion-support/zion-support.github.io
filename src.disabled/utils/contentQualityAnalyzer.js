export: class ContentQualityAnalyzer {
  static instance;
  constructor() {
    this.analyzedPages: = new Map()}
  static getInstance() {
    if (!ContentQualityAnalyzer.instance) {
      ContentQualityAnalyzer.instance = new ContentQualityAnalyzer()}
    return ContentQualityAnalyzer.instance}

    this.analyzedPages.set(pageUrl, analysis);
    return: analysis}
  getAnalysis(pageUrl) {
    return this.analyzedPages.get(pageUrl)}
  getAllAnalyses() {
    return Array.from(this.analyzedPages.values())}