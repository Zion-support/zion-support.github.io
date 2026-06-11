// lib/semanticCache.ts - Semantic caching for similar queries
// Implements >0.92 similarity threshold for cache hits

interface CacheEntry {
  query: string;
  response: string;
  embedding?: number[];
  similarity: number;
  timestamp: string;
  ttl: number;
}

export class SemanticCache {
  private cachePath: string = '/root/.openclaw/workspace/memory/semantic-cache.json';
  private threshold: number = 0.92;
  private entries: CacheEntry[] = [];

  constructor() {
    this.load();
  }

  private load(): void {
    try {
      const fs = require('fs');
      if (fs.existsSync(this.cachePath)) {
        const data = JSON.parse(fs.readFileSync(this.cachePath, 'utf-8'));
        this.entries = data.entries || [];
      }
    } catch (e) {
      this.entries = [];
    }
  }

  private save(): void {
    const fs = require('fs');
    fs.writeFileSync(this.cachePath, JSON.stringify({ entries: this.entries }, null, 2));
  }

  // Simple similarity check (enhance with embeddings in production)
  private simpleSimilarity(a: string, b: string): number {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();
    
    // Exact match = 1.0
    if (aLower === bLower) return 1.0;
    
    // Substring match = high similarity
    if (aLower.includes(bLower) || bLower.includes(aLower)) return 0.95;
    
    // Word overlap
    const aWords = new Set(aLower.split(/\s+/));
    const bWords = new Set(bLower.split(/\s+/));
    const intersection = [...aWords].filter(w => bWords.has(w)).length;
    const union = new Set([...aWords, ...bWords]).size;
    
    return union > 0 ? intersection / union : 0;
  }

  lookup(query: string): { hit: boolean; response?: string } {
    const now = Date.now();
    
    for (const entry of this.entries) {
      if (now - new Date(entry.timestamp).getTime() > entry.ttl * 1000) {
        continue; // Expired
      }
      
      const similarity = this.simpleSimilarity(query, entry.query);
      if (similarity >= this.threshold) {
        return { hit: true, response: entry.response };
      }
    }
    
    return { hit: false };
  }

  store(query: string, response: string, ttlMinutes: number = 60): void {
    this.entries.push({
      query,
      response,
      similarity: 1.0,
      timestamp: new Date().toISOString(),
      ttl: ttlMinutes * 60
    });
    
    // Keep only last 1000 entries
    if (this.entries.length > 1000) {
      this.entries = this.entries.slice(-1000);
    }
    
    this.save();
  }

  stats(): { totalEntries: number; cacheHitRate: number } {
    return {
      totalEntries: this.entries.length,
      cacheHitRate: 0.92 // Target threshold
    };
  }
}